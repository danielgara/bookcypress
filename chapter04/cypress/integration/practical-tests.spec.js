describe('Todo Application tests', () => {
    it('Visits the Todo application', () => {
        cy.visit('http://localhost/books/bookcypress/todo/index.html');

        cy.get('.new-todo').type('New Todo {enter}');
        cy.get('.new-todo').type('Another Todo {enter}');
        cy.get(".todo-list").find('li').should('have.length', 2);
        cy.get('li:nth-child(1)>div>label').should('have.text', 'New Todo');
        cy.get('li:nth-child(2)>div>label').should('have.text', 'Another Todo');

    })
})