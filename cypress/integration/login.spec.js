/// <reference types="cypress"/>

/*
1. o que esta sendo testado? twitter clone, Login
2. sob que condiçoes? autenticar credenciais validas
3. quao o resultado esperado? deve ser autenticado
*/

describe('Twitter Clone - Login', () => {
  // hooks antes do teste before
  // hooks depois /after
  beforeEach(()=>{
    // cy.intercept
    // 1. RouteMatcher - mapeamento, filtro da rota que a gente quer
    // 2. ROuterHander (opcional) - controlar a rota vai retornar(mock)
    /*
    Request URL: https://res.cloudinary.com/douy56nkf/image/upload/v1588127894/twitter-build/bvxmlgckusmrwyivsnzr.svg
    Request Method: GET
    */
    cy.intercept ({
      method:'GET',
      hostname: 'res.cloudinary.com'
    },{
      statusCode: 200,
      fixture:'cafe.JPG'
    }).as('ts')

  });

  it('se credenciais validas usuario autenticado', () => {
    cy.login()
    cy.visit('https://twitter-clone-example.herokuapp.com');
    cy.get ('nav ul li')
    .should('be.visible')
    .and('have.lenght',6)
    // cy.get('input[type=email]').type('pteste@mail.com')
    // cy.get('input[type=password]').type('Qwer1234')
    // cy.get('button[type=submit]').click() comando antes de comando personalizado
    // cy.login()


  });
});
