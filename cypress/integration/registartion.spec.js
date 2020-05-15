import faker from 'faker';

describe('Registration', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();

    it('should successfully registering', function () {
        cy.visit('/register');
        cy.get('input[name=name]').type(faker.name.findName());
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(password);
        cy.get('input[name=password_confirmation]').type(password);
        cy.get('button').contains('Register').click();
        cy.url().should('contain', '/home');
        cy.get('#navbarDropdown').click();
        cy.contains('Logout').click();
    });
});
