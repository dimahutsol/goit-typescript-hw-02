import Modal from 'react-modal';
import { FaHeart } from 'react-icons/fa';
import clsx from 'clsx';
import s from './ImageModal.module.css';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		background:
			'radial-gradient(50% 50% at 50% 50%, #0B111B 70.3%, #165170 100%)',
		borderRadius: '20px',
	},
};

Modal.setAppElement('#root');

const ImageModal = ({ image, isOpen, onClose }) => {
	return (
		<div>
			<Modal
				isOpen={isOpen}
				onRequestClose={onClose}
				style={customStyles}
				contentLabel='Example Modal'>
				<div className={clsx(s.modal)}>
					<img src={image.url} alt={image.alt} />
					<p className={clsx(s.desc)}></p>
					<div className={clsx(s.info)}>
						<div className={clsx(s.likes)}>
							{/* <span> */}
							<FaHeart />
							{/* </span> */}
							<p>{image.likes}</p>
						</div>
						<div className={clsx(s.tags)}>
							{image.tags?.map((tag, idx) => (
								<span key={idx}>{tag.title}</span>
							))}
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default ImageModal;
