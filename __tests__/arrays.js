const cart = ['Product1', 'Product2', 'Product3'];

describe('Testing cart', () => {
    test('check if cart contains 3 items', () => {
        expect(cart).toHaveLength(3);
    });

    test('check cart is not empty', () => {
        expect(cart).not.toHaveLength(0);
    })
})