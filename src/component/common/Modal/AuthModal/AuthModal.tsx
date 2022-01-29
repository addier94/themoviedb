import { appSelector } from 'features/hooks';
import { hideAuthModal } from 'features/slice/Ui';

import { useDispatch } from 'react-redux';
import { VscChromeClose } from 'react-icons/vsc';

interface Props {
  children: JSX.Element | JSX.Element[]
}
const AuthModal:React.FC<Props> = ({ children }) => {
  const { authModal } = appSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    authModal
      ? (
        <div className="bg-opacity8-main fixed p-4 top-0 left-0 z-50 w-full min-h-screen flex justify-center items-center">

          <VscChromeClose className="w-6 h-6 absolute top-2 right-2 bg-red-700 rounded-full p-px  cursor-pointer" onClick={() => dispatch(hideAuthModal())} />
          {children}

        </div>
      ) : null
  );
};

export default AuthModal;
