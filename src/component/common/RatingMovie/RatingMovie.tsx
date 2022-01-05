import { BsStar, BsStarFill } from 'react-icons/bs';
import RatingAPILayer from 'react-rating';

interface Props{
  vote_average: number;
  vote_count: number
}
const RatingMovie:React.FC<Props> = ({ vote_average, vote_count }) => (
  <div className="flex items-center gap-1">
    <RatingAPILayer
      placeholderRating={vote_average / 2}
      emptySymbol={<BsStar className="w-7 h-7" />}
      placeholderSymbol={<BsStarFill className="w-7 h-7 text-yellow-main" />}
      readonly
    />
    <div>

      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-red-700 rounded">
        {vote_count}
      </span>

    </div>

  </div>
);

export default RatingMovie;
