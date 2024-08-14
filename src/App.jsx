import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import { fetchImages } from './services/api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

function App() {
	const [query, setQuery] = useState('');
	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	const handleSearchSubmit = value => {
		setPhotos([]);
		setIsLoading(false);
		setIsError(false);
		setPage(1);
		setTotalPages(0);
		setQuery(value);
	};

	const handleLoadMore = () => {
		setPage(prev => prev + 1);
	};

	useEffect(() => {
		if (!query) return;
		const fetchData = async () => {
			try {
				setIsLoading(true);
				setIsError(false);
				const res = await fetchImages({ query, page });
				console.log('res', res);
				setTotalPages(res.total_pages);
				setPhotos(prev => [...prev, ...res.results]);
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
			{photos.length > 0 && !isError && <ImageGallery images={photos} />}
			{isError && <ErrorMessage />}
			{isLoading && <Loader />}
			{photos.length > 0 && !isLoading && page < totalPages && (
				<LoadMoreBtn onLoadMore={handleLoadMore} />
			)}

			<Toaster
				position='top-center'
				reverseOrder={false}
				gutter={8}
				containerClassName=''
				containerStyle={{}}
				toastOptions={{
					// Define default options
					className: '',
					duration: 5000,
					style: {
						background: '#363636',
						color: '#fff',
					},

					// Default options for specific types
					success: {
						duration: 3000,
						theme: {
							primary: 'green',
							secondary: 'black',
						},
					},
				}}
			/>
		</div>
	);
}

export default App;
