// Products should be listed in this format: product name, price, link to add product
import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import Product from '../../components/Product/Product';
import { products } from '../../constants';
import { Link } from 'react-router-dom';

import { addToCart } from '../../store/actions/cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Products.css';
class Products extends Component {
	render() {
		return (
			<Fragment>
				<nav className='navbar navbar-light bg-light'>
					<div className='Products_cart-container ml-auto'>
						<Link className='Products_cart' to='/cart'>
							<FontAwesomeIcon icon={faShoppingCart} />
						</Link>
						<span className='Products_cart-counter'>
							{this.props.items.length}
						</span>
					</div>
				</nav>
				<div className='Products container'>
					{products.map(product => {
						return (
							<div
								key={product.id}
								className='Products_Container row'
							>
								<Product
									content={product}
									onAddToCart={this.props.onAddToCart}
								/>
							</div>
						);
					})}
				</div>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddToCart: product => dispatch(addToCart(product))
	};
};

const mapStateToProps = state => {
	return {
		items: state.cart.items
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Products);
