import clsx from 'clsx';
import s from './ImageCard.module.css';
import { FC } from 'react';
import { ImageCardPropsType } from './ImageCard.types';

const ImageCard: FC<ImageCardPropsType> = ({
	smallImage,
	regularImage,
	alt,
	tags,
	likes,
	handleModalOpen,
}) => {
	return (
		<div
			className={clsx(s.item)}
			onClick={() => handleModalOpen({ url: regularImage, alt, tags, likes })}>
			<img src={smallImage} alt={alt} />
		</div>
	);
};

export default ImageCard;
