import AppRouter from 'routers/AppRouter';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { appDispatch, appSelector } from 'features/hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onIdTokenChanged, sendEmailVerification, signOut } from 'firebase/auth';
import { addUser } from 'features/slice/authSlice';
import { auth } from 'Firebase';
import { hideAuthModal, hideModal, setAuthModalView } from 'features/slice/Ui';
import { authModalViewT } from 'types/UiType';

function App() {
  const { currentUser } = appSelector((state) => state.auth);
  // const { sort, doc } = appSelector((state) => state.);
  const dispatch = appDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const providerId = user.providerData.some(
          (p) => p.providerId === 'password',
        );
        if (providerId && !user.emailVerified) {
          toast.error('Please check your email to activate your account');
          await sendEmailVerification(user);
          await signOut(auth);
          return dispatch(setAuthModalView(authModalViewT.EMAIL_VERIFICATION_VIEW));
        }
        dispatch(addUser(user));
        dispatch(hideAuthModal());
      } else {
        dispatch(addUser(undefined));
        // return navigate('/login');
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
