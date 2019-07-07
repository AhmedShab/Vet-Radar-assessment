import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_ITEM_TOTAL
} from './actionTypes';

export const addToCart = product => {
	return {
		type: ADD_TO_CART,
		product
	};
};

export const removeFromCart = product => {
	return {
		type: REMOVE_FROM_CART,
		product
	};
};

export const updateItemTotal = (product, quantity) => {
	return {
		type: UPDATE_ITEM_TOTAL,
		payload: { product, quantity }
	};
};
