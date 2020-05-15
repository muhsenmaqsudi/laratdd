describe('Dashboard', () => {
    it('should not allows guests to view the dashboard', function () {
        cy.visit('/home').url().should('include', '/login');
    });

    it('should allows logged in users to see their dashboard', function () {
            cy.login()
            .visit('/home')
            .contains('You are logged in!');
    });
});


