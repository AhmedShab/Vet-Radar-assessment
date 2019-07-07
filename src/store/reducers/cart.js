import update from 'immutability-helper';
import { initialState } from '../initialState/cart';
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_ITEM_TOTAL
} from '../actions/actionTypes';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			if (isInCart(state.items, action.product)) {
				const getSelected = currentProduct(state.items, action.product);

				const updateState = update(state, {
					items: {
						[getSelected.index]: {
							total: {
								$apply: function(oldTotal) {
									return oldTotal === 0
										? getSelected.price
										: oldTotal + oldTotal;
								}
							},
							quantity: {
								$apply: function(oldQuantity) {
									return oldQuantity + 1;
								}
							}
						}
					}
				});

				return {
					...updateState
				};
			}

			return {
				...state,
				items: [
					...state.items,
					{
						...action.product,
						quantity: 1,
						total: action.product.price
					}
				]
			};

		case REMOVE_FROM_CART:
			const getSelected = currentProduct(state.items, action.product);
			state.items.splice(getSelected.index, 1);

			return {
				...state
			};

		case UPDATE_ITEM_TOTAL: {
			console.log(action.payload);

			const getSelected = currentProduct(
				state.items,
				action.payload.product
			);
			const updatedState = update(state, {
				items: {
					[getSelected.index]: {
						total: {
							$set: action.payload.quantity * getSelected.price
						},
						quantity: {
							$set: action.payload.quantity
						}
					}
				}
			});

			return {
				...updatedState
			};
		}

		default:
			return state;
	}
};

const currentProduct = (items, product) => {
	for (let index = 0; index < items.length; index++) {
		if (items[index].id === product.id) {
			return {
				index,
				price: product.price
			};
		}
	}
};

const isInCart = (items, product) => {
	return items.find(item => item.id === product.id) ? true : false;
};

export default reducer;
