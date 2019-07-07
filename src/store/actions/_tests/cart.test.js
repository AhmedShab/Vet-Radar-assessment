import * as actions from '../../actions/cart';
import * as types from '../../actions/actionTypes';
import { products } from '../../../constants';
import { initialState } from '../../initialState/cart';
import cartReducer from '../../reducers/cart';

describe('actions', () => {
	it('should create an action to add a product to the cart', () => {
		const expectedAction = {
			type: types.ADD_TO_CART,
			product: products[1]
		};
		expect(actions.addToCart(products[1])).toEqual(expectedAction);
	});
});

describe('cart reducer', () => {
	it('should return the initial state', () => {
		expect(cartReducer(undefined, initialState)).toEqual({
			items: [
				{
					id: 1,
					name: 'Sledgehammer',
					price: 125.76,
					quantity: 1,
					total: 125.76
				}
			]
		});
	});

	it('should handle ADD_TO_CART in case of the item exists', () => {
		expect(
			cartReducer(undefined, {
				type: types.ADD_TO_CART,
				product: {
					id: 1,
					name: 'Sledgehammer',
					price: 125.76
				}
			})
		).toEqual({
			items: [
				{
					id: 1,
					name: 'Sledgehammer',
					price: 125.76,
					quantity: 2,
					total: 251.52
				}
			]
		});
	});

	it('should handle ADD_TO_CART in case of a new item', () => {
		expect(
			cartReducer(
				{ items: [] },
				{
					type: types.ADD_TO_CART,
					product: {
						id: 3,
						name: 'Bandsaw',
						price: 562.14
					}
				}
			)
		).toEqual({
			items: [
				{
					id: 3,
					name: 'Bandsaw',
					price: 562.14,
					quantity: 1,
					total: 562.14
				}
			]
		});
	});
});
