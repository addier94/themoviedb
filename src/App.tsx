import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { appDispatch, appSelector } from 'features/hooks';
import { useEffect } from 'react';
import { onIdTokenChanged, sendEmailVerification, signOut } from 'firebase/auth';
import { addUser } from 'features/slice/authSlice';
import { auth } from 'Firebase';
import { hideAuthModal, setAuthModalView } from 'features/slice/Ui';
import { authModalViewT } from 'types/UiType';

function App() {
  const { currentUser } = appSelector((state) => state.auth);
  // const { sort, doc } = appSelector((state) => state.);
  const dispatch = appDispatch();

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const providerId = user.providerData.some(
          (p) => p.providerId === 'password',
        );
        if (providerId && !user.emailVerified) {
          await sendEmailVerification(user);
          await signOut(auth);
          dispatch(setAuthModalView(authModalViewT.EMAIL_VERIFICATION_VIEW));
          return toast.error('Please check your email to activate your account');
        }
        dispatch(addUser(user));
        dispatch(hideAuthModal());
        toast.success('Login success');
      } else {
        dispatch(addUser(undefined));
        return toast.error('Password or email wrong');
      }
    });
    return unsubscribe;
  }, [dispatch]);

  // useEffect(() => {
  //   if (!currentUser?.uid) return;
  //   dispatch(fetchProfile(currentUser.uid));
  // }, [currentUser, dispatch]);

  // useEffect(() => {
  //   if (!currentUser?.uid) return;
  //   const payload = { uid: currentUser.uid, sort, doc };
  //   dispatch(collectionFetchData(payload));
  // }, [currentUser, dispatch, sort, doc]);
  return (
    <div className="App">
      <ToastContainer />
    </div>
  );
}

export default App;
