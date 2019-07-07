import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { removeFromCart, updateItemTotal } from '../../store/actions/cart';

import './Cart.css';

// Cart products should be listed in this format: product name, price, quantity, total,
// remove link.

class Cart extends Component {
	render() {
		if (_.isEmpty(this.props.items)) {
			return (
				<div className='Cart_empty container'>
					<p>Looks like your cart is empty :(</p>
					<Link to='/' className='btn btn-primary'>
						Start Shopping
					</Link>
				</div>
			);
		}
		return (
			<div className='container'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Name</th>
							<th scope='col'>Price</th>
							<th scope='col'>Quantity</th>
							<th scope='col'>Total</th>
						</tr>
					</thead>
					<tbody>
						{this.props.items.map((item, index) => (
							<CartItem
								key={item.id}
								content={item}
								index={index}
								onRemoveFromCart={this.props.onRemoveFromCart}
								onUpdateItemTotal={this.props.onUpdateItemTotal}
							/>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.cart.items
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onRemoveFromCart: product => dispatch(removeFromCart(product)),
		onUpdateItemTotal: (product, quantity) =>
			dispatch(updateItemTotal(product, quantity))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);
