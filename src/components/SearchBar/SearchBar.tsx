import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { searchBarSchema } from '../../helpers/validationSchemas';
import clsx from 'clsx';
import s from './SearchBar.module.css';
import { FC } from 'react';
import {
	initialValuesType,
	optionsType,
	SearchBarType,
	valuesType,
} from './SearchBar.types';

const SearchBar: FC<SearchBarType> = ({ handleSearchSubmit }) => {
	const handleSubmit = (values: valuesType, options: optionsType) => {
		if (!values.searchField) {
			toast.error('Please, type something to search');
		}

		handleSearchSubmit(values.searchField);
		options.resetForm();
	};

	const initialValues: initialValuesType = {
		searchField: '',
	};

	return (
		<header className={clsx(s.header)}>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={searchBarSchema}>
				<Form className={clsx(s.form)}>
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
