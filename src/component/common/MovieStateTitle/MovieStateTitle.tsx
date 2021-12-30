import React, { FC } from 'react';

interface Props {
  title: string
}
const MovieStateTitle: FC<Props> = ({ title }) => (
  <article className="flex justify-between items-center my-6">
    <h3 className="border-l-4 border-yellow-main pl-4 font-medium text-xl">
      {title}
    </h3>
  </article>
);

export default MovieStateTitle;
