import { cart } from '../../data/cart-class.js'

describe('Test suite: add to cart', () => {
    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    });

    it('adds existing product to the cart', () => {
       
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }]

        cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        }]));
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems[0].quantity).toEqual(2);  
    });

    it('adds new product to the cart', () => {

        cart.cartItems = [];

        cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }]));
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems[0].quantity).toEqual(1);
    });
});

describe('Test suite: removeFromCart', () => {
    beforeEach(() => {
        spyOn(localStorage, 'setItem');

        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 2,
            deliveryOptionId: '2'
        }]
    });

    it('remove a product which in cart', () => {

        cart.removeProduct('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart.cartItems.length).toEqual(1);
        expect(cart.cartItems[0].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');
        expect(cart.cartItems[0].quantity).toEqual(2);
    });

    it('remove a product thats not in the cart', () => {

        cart.removeProduct('invalidID');
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart.cartItems.length).toEqual(2);
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems[0].quantity).toEqual(1);
    });
});

describe('Test suite: updateDeliveryOPtion', () => {
    beforeEach(() => {
        spyOn(localStorage, 'setItem');

        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 2,
            deliveryOptionId: '2'
        }];
    });

    it('updates delivery opion', () => {

        const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
        cart.updateDeliveryOption(productId1, '2');

        expect(cart.cartItems[0].deliveryOptionId).toEqual('2');
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '2'
        }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 2,
            deliveryOptionId: '2'
        }]))
    });

    it('update a product which does not exist', () => {
        cart.updateDeliveryOption('does not exist', '3');

        expect(cart.cartItems.length).toEqual(2);
        expect(localStorage.setItem).not.toHaveBeenCalled();
    });

    it('update delivery option that does not exist', () => {
       
        cart.updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 'does-not-exist');
        expect(cart.cartItems.length).toEqual(2);
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems[0].quantity).toEqual(1);
        expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    });


});