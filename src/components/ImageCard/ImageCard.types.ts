import { modalImageType, tagType } from '../../commonTypes';

export type ImageCardPropsType = {
	smallImage: string;
	regularImage: string;
	alt: string;
	tags: tagType[];
	likes: number;
	handleModalOpen: (content: modalImageType) => void;
};
