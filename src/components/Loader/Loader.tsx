import { DNA } from 'react-loader-spinner';
import clsx from 'clsx';
import s from './Loader.module.css';
import { FC } from 'react';

const Loader: FC = () => {
	return (
		<div className={clsx(s.loader)}>
			<DNA
				visible={true}
				height='80'
				width='80'
				ariaLabel='dna-loading'
				wrapperStyle={{}}
				wrapperClass='dna-wrapper'
			/>
		</div>
	);
};

export default Loader;
