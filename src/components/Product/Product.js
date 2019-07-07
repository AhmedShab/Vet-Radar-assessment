import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from '../UI/Modal/Modal';

import './Product.css';

const product = ({ content, history, onAddToCart }) => {
	const addToCartHandler = () => {
		onAddToCart(content);
	};
	return (
		<Fragment>
			<div className='Product col'>
				<p>{content.name}</p>
			</div>
			<div className='col'>${content.price.toFixed(2)}</div>
			<div className='col'>
				<button
					onClick={addToCartHandler}
					type='button'
					className='btn btn-primary'
					data-toggle='modal'
					data-target={`#${content.name}`}
				>
					Add
				</button>
			</div>
			<Modal content={content} history={history} />
		</Fragment>
	);
};

export default withRouter(product);
