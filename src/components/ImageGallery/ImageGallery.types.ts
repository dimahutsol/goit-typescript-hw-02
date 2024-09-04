import { modalImageType } from '../../commonTypes';
import { PhotoType } from '../../services/api.types';

export type ImageGalleryPropsType = {
	images: PhotoType[];
	handleModalOpen: (image: modalImageType) => void;
};
