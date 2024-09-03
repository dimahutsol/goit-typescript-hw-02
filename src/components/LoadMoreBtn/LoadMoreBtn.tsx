import clsx from 'clsx';
import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore }) => {
	return (
		<button className={clsx(s.button)} onClick={onLoadMore}>
			Load More
		</button>
	);
};

export default LoadMoreBtn;
