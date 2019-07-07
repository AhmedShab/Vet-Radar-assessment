import React from 'react';

const modal = ({ content, history }) => {
	const handleAddProduct = e => {
		history.push('/cart');
	};
	return (
		<div
			className='modal fade'
			id={content.name}
			tabIndex='-1'
			role='dialog'
			aria-labelledby={content.name}
			aria-hidden='true'
		>
			<div className='modal-dialog' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id={content.name}>
							{`Added ${content.name} to your card`}
						</h5>
						<button
							type='button'
							className='close'
							data-dismiss='modal'
							aria-label='Close'
						>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-dismiss='modal'
						>
							Close
						</button>
						<button
							onClick={handleAddProduct}
							type='button'
							data-dismiss='modal'
							className='btn btn-primary'
						>
							Go to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default modal;
