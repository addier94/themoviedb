import { auth } from 'Firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { IRegister } from 'types/auth';

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
