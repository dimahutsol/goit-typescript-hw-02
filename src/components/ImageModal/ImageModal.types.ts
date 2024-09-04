import { modalImageType } from '../../commonTypes';

export type ImageModalPropsType = {
	image: modalImageType;
	isOpen: boolean;
	onClose: () => void;
};
