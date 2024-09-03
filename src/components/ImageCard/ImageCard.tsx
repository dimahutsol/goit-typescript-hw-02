import clsx from 'clsx';
import s from './ImageCard.module.css';

const ImageCard = ({
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
