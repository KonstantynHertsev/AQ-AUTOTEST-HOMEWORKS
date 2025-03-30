describe('template spec',() => {
    beforeEach(() => {
        cy.visit('https://rozetka.com.ua/');
    })
    it('Page contains button "Игровые приставки"', () => {
        cy.get('button[data-testid="menu_button"]').click();
        cy.wait(10000);
        cy.get('.button.button--green.button--medium.menu-button-catalog').click();
        cy.get('ul.list li:nth-child(3)').click();
        cy.get('.portal-grid.portal-grid_type_1_4').should('have.length', 3);
    });
    it(' page (Laptops) contains an item with id "379983096"', () => {
        cy.get('button[data-testid="menu_button"]').click();
        cy.wait (10000 );
        cy.get('.button.button--green.button--medium.menu-button-catalog').click();
        cy.get('ul.list li:nth-child(1)').click();
        cy.get('.tile-cats__heading[title="Ноутбуки"]').click();
        cy.wait (20000 )
        cy.get('[data-testid="category_goods"]')
         .should('be.visible')
         .find('div[data-goods-id="379983096"]')
         .should('exist')
  });
});