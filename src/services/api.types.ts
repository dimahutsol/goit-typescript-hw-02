import { tagType } from '../commonTypes';

export type ResponseType = {
	total: number;
	total_pages: number;
	results: PhotoType[];
};

export type PhotoType = {
	id: string;
	alt_description: string;
	urls: UrlType;
	tags: tagType[];
	likes: number;
};

export type UrlType = {
	small: string;
	regular: string;
};

export type fetchImagesParamsType = {
	query: string;
	page: number;
};
