import { auth } from 'Firebase';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { ILogin, IRegister } from 'types/auth';

export const registerApi = async (user: IRegister) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, user.email, user.password);
    await updateProfile(res.user, {
      displayName: user.name,
    });

    return user.name;
  } catch (error:any) {
    return toast.error(error.message);
  }
};

export const loginApi = async (user: ILogin) => {
  try {
    const { email, password } = user;
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error:any) {
    return toast.error(error.message);
  }
};
