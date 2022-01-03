import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { appSelector } from 'features/hooks';
import { hideModal } from 'features/slice/Ui';

import { FC, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ResultVideos } from 'types/SingleMovie';
import { VscChromeClose } from 'react-icons/vsc';

interface TypeModal {
  video: ResultVideos | undefined
}
const Modal:FC<TypeModal> = ({ video }) => {
  const { toggleModal } = appSelector((state) => state.ui);
  const dispatch = useDispatch();

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    if (ref.current) {
      if (toggleModal) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);
  return (
    <div ref={ref} className="bg-opacity8-main fixed p-4 top-0 left-0 z-50 h-screen w-full">
      <div className="md:max-w-screen-sm mx-auto relative mt-12">

        <VscChromeClose className="w-6 h-6 absolute -top-3 -right-6 bg-red-700 rounded-full p-px  cursor-pointer" onClick={() => dispatch(hideModal())} />

        <div className="h-96">
          <iframe
            // width="853"
            // height="480"
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video?.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>

    </div>
  );
};

export default Modal;
