import React from 'react';
import { ResultVideos } from 'types/SingleMovie';

interface Props {
  video: ResultVideos | undefined
}

const VideoTrailer: React.FC<Props> = ({ video }) => (
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
);

export default VideoTrailer;
