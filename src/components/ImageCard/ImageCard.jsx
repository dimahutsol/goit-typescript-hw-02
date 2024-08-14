import clsx from 'clsx';
import s from './ImageCard.module.css';

const ImageCard = ({ smallImage, RegularImage, alt }) => {
	return (
		<div className={clsx(s.item)}>
			<img src={smallImage} alt={alt} />
		</div>
	);
};

export default ImageCard;
