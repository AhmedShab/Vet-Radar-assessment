import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
import { quantityOptions } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './CartItem.css';

const cartItem = ({ content, index, onRemoveFromCart, onUpdateItemTotal }) => {
	const removeHandler = () => {
		onRemoveFromCart(content);
	};

	const changeHandler = selectedOption => {
		onUpdateItemTotal(content, selectedOption.value);
	};

	return (
		<Fragment>
			<tr>
				<th scope='row'>{++index}</th>
				<td>{content.name}</td>
				<td>${content.price.toFixed(2)}</td>
				<td>
					<Select
						defaultValue={{
							value: content.quantity,
							label: content.quantity
						}}
						options={quantityOptions}
						onChange={changeHandler}
					/>
				</td>
				<td>${content.total.toFixed(2)}</td>
				<td>
					<Link
						to={'#'}
						className='CartItem_remove-btn'
						onClick={removeHandler}
					>
						<FontAwesomeIcon icon={faTrash} />
					</Link>
				</td>
			</tr>
		</Fragment>
	);
};

export default withRouter(cartItem);
