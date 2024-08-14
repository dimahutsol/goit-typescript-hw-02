import clsx from 'clsx';
import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
	return (
		<ul className={clsx(s.list)}>
			{images.map(({ urls: { small, regular }, alt_description, id }) => (
				<li key={id}>
					<ImageCard
						smallImage={small}
						regularImage={regular}
						alt={alt_description}
					/>
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;
