it('Using Implicit subjects - and()', () => {
    cy.visit('http://localhost/books/bookcypress/todo/index.html');
    
    // Check if todo input element has expected
    // placeholder value
    cy.get(".new-todo").
        should('have.attr', 'placeholder','What needs to be done?').
        and('have.class', 'new-todo');
});

it('can assert explicit subjects', () => {
    const eqString = 'foo';
    expect(eqString).to.eq('foo');
    
    expect(eqString).to.have.lengthOf(3);
    expect(eqString).to.be.a('string');
});

it('Using Should with Explicit subjects', () => {
    cy.visit('http://localhost/books/bookcypress/todo/index.html');
    cy.get(".new-todo").should( ($elem) => {
        expect($elem).to.have.class('new-todo');
    })
});