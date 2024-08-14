import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { searchBarSchema } from '../../helpers/validationSchemas';

const SearchBar = ({ handleSearchSubmit }) => {
	const handleSubmit = (values, options) => {
		if (!values.searchField) {
			toast('Toast');
			console.log(1);
		}
		handleSearchSubmit(values.searchField);
		options.resetForm();
	};

	return (
		<header>
			<Formik
				initialValues={{ searchField: '' }}
				onSubmit={handleSubmit}
				validationSchema={searchBarSchema}>
				<Form>
					<Field
						name='searchField'
						type='text'
						autoComplete='off'
						autoFocus
						placeholder='Search images and photos'
					/>
					<ErrorMessage name='searchField' component='p' />
					<button type='submit'>Search</button>
				</Form>
			</Formik>
		</header>
	);
};

export default SearchBar;
