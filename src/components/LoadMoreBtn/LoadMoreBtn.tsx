import clsx from 'clsx';
import s from './LoadMoreBtn.module.css';
import { FC } from 'react';
import { LoadMoreBtnType } from './LoadMoreBtn.types';

const LoadMoreBtn: FC<LoadMoreBtnType> = ({ onLoadMore }) => {
	return (
		<button className={clsx(s.button)} onClick={onLoadMore}>
			Load More
		</button>
	);
};

export default LoadMoreBtn;
