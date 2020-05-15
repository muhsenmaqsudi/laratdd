import faker from 'faker';

describe('Login', () => {
    before(() => {
       cy.exec('php artisan migrate:fresh --env=acceptance');
    });

    it('should shows the login page', function () {
        cy.visit('/login');
    });

    it('should displays an error for invalid login credentials', function () {
        cy.visit('/login');
        cy.get('#email').type(faker.internet.email());
        cy.get('#password').type(faker.internet.password());
        cy.get('button').contains('Login').click();
        cy.contains('These credentials do not match our records.');
    });

    it('should logs in a user', function () {
        cy.create('User').then(user => {
            cy.log('The created user is', user);
            cy.visit('/login');
            cy.get('#email').type(user.email);
            cy.get('#password').type('password');

            cy.get('button').contains('Login').click();

            cy.url().should('include', '/home');

            cy.contains('You are logged in!')

        })

    });
});
