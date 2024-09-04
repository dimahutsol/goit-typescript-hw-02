import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchImages } from './services/api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { modalImageType } from './commonTypes';
import { PhotoType } from './services/api.types';

const modalImageInitialValues = {
	alt: '',
	likes: 0,
	tags: [],
	url: '',
};

function App() {
	const [query, setQuery] = useState<string>('');
	const [photos, setPhotos] = useState<PhotoType[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [modalImage, setModalImage] = useState<modalImageType>(
		modalImageInitialValues
	);

	const handleSearchSubmit = (value: string): void => {
		setPhotos([]);
		setIsLoading(false);
		setIsError(false);
		setPage(1);
		setTotalPages(0);
		setQuery(value);
	};

	const handleLoadMore = (): void => {
		setPage((prev) => prev + 1);
	};

	const handleModalOpen = (image: modalImageType) => {
		setModalImage(image);
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		if (!query) return;
		const fetchData = async () => {
			try {
				setIsLoading(true);
				setIsError(false);
				const res = await fetchImages({ query, page });
				setTotalPages(res.total_pages);
				setPhotos((prev) => [...prev, ...res.results]);
			} catch {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [query, page]);

	return (
		<div>
			<SearchBar handleSearchSubmit={handleSearchSubmit} />
			{photos.length > 0 && !isError && (
				<ImageGallery images={photos} handleModalOpen={handleModalOpen} />
			)}
			{isError && <ErrorMessage />}
			{isLoading && <Loader />}
			{photos.length > 0 && !isLoading && page < totalPages && (
				<LoadMoreBtn onLoadMore={handleLoadMore} />
			)}
			<ImageModal
				image={modalImage}
				isOpen={isModalOpen}
				onClose={handleModalClose}
			/>
		</div>
	);
}

export default App;
