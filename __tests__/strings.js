const password = '123456';

describe('Check password is not empty and contains 6 characters', () => {
    test('password contains 6 characters', () => {
        expect(password).toHaveLength(6);
    });

    test('password is not empty', () => {
        expect(password).not.toHaveLength(0);
    })
})