/// <reference types="cypress"/>

/*
1. o que esta sendo testado? capacidade de gerar tweets
2. sob que condiçoes? apos logado escrever e enviar tweet
3. quao o resultado esperado? tweet efetuado na linha do tempo
*/
describe('Twitter Clone - Tweet', () => {
  // hooks antes do teste before
  // hooks depois /after
  beforeEach(()=>{
    cy.intercept ({
      method:'GET',
      hostname: 'res.cloudinary.com'
    },{
      statusCode: 200,
      fixture:'cafe.JPG'
    }).as('ts')
  });
  it('se credenciais validas usuario autenticado e enviou tweet,o tweet deve aparecer na timeline', () => {
    cy.login()
    cy.visit('https://twitter-clone-example.herokuapp.com');
    cy.get('textarea[cols=48]').type('Eu quero que a minha carreira profissional seja cheia de desafios e vitorias e que eu consiga correr atras do prejuizo como hoje programando 5 da manha')
    cy.get ('button.sc-fzplWN.pDAkO').click()

  });
});
