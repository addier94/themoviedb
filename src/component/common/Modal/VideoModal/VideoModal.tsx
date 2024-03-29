import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { appSelector } from 'features/hooks';
import { hideModal } from 'features/slice/Ui';

import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { VscChromeClose } from 'react-icons/vsc';

interface Props {
  children: JSX.Element | JSX.Element[]
}
const VideoModal:React.FC<Props> = ({ children }) => {
  const { stateModal } = appSelector((state) => state.ui);
  const dispatch = useDispatch();

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    if (ref.current) {
      if (stateModal) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [stateModal]);
  return (
    stateModal
      ? (
        <div ref={ref} className="bg-opacity8-main fixed p-4 top-0 left-0 z-50 h-screen w-full">
          <div className="md:max-w-screen-sm mx-auto relative mt-12">

            <VscChromeClose className="w-6 h-6 absolute -top-3 -right-6 bg-red-700 rounded-full p-px  cursor-pointer" onClick={() => dispatch(hideModal())} />
            {children}
          </div>

        </div>
      ) : null
  );
};

export default VideoModal;
