import { appSelector } from 'features/hooks';
import { hideAuthModal } from 'features/slice/Ui';

import { useDispatch } from 'react-redux';
import { VscChromeClose } from 'react-icons/vsc';
import { useEffect, useRef } from 'react';
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface Props {
  children: any
}
const AuthModal:React.FC<Props> = ({ children }) => {
  const { authModal } = appSelector((state) => state.ui);
  const dispatch = useDispatch();

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (ref.current) {
      if (authModal) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [authModal]);

  return (
    authModal
      ? (
        <div ref={ref} className="bg-opacity8-main p-4 fixed top-0 left-0 w-full z-50 h-screen overflow-y-scroll flex">
          <VscChromeClose className="w-6 h-6 absolute top-2 right-2 bg-red-700 rounded-full p-px  cursor-pointer" onClick={() => dispatch(hideAuthModal())} />
          {children}
        </div>

      ) : null
  );
};

export default AuthModal;
