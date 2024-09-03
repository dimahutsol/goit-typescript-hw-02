import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] =
	'Client-ID KS4qyasBTH2lOCtRdp2ievnvzEdLHGWuoVca8maJOYs';

export const fetchImages = async params => {
	const { data } = await axios.get('search/photos', {
		params: { per_page: 20, orientation: 'landscape', ...params },
	});
	return data;
};
