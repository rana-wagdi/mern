describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

it("intial page",()=>{
  cy
  .url().should('include','localhost')

})

it("check page title visible and contain walcome to our page",()=>{

  cy.get(".page-title").should('be.visible').and('contain',"Welcome To Our Page")
})

it("check first elment",()=>{

 cy
 .get('ul').find('li').first().should("have.text","apples").and("have.class","applesClass")
})

it("check option 3 ",()=>{

cy.get('#checkboxOption3').check().should("be.checked")

})


////////// use expect 


it("check list",()=>{


  cy.get("li").should(($li)=>{
  
  expect($li).to.have.length(3)
  expect($li).to.not.have.class('a')
  expect($li).to.not.have.id('a')
  
  expect($li.first().text()).to.eq("apples")
  
  })
})



  
}); 
