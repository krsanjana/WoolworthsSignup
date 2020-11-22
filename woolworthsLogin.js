context('Window', () => {

  it('Open Woolworths URL', () => {
   cy.visit('https://www.woolworths.com.au/') 
  })

  it('click on login button', () => {
    cy.get('*[class*="coreHeader-loginText"]').first().click() 
  })

  it('enter username and password', () =>{

    //enter all the credentials
    cy.get('input[name="Email"]').type('sanjanakr@mailinator.com')
    cy.get('input[name="Password"]').type('qwert123')
    cy.get('button[type="submit"]').type('{enter}')

  })

  it('add watermelon to the cart', () =>{

    //search for fruit and veg
    cy.get('#headerSearch').type('fruit and veg')
    cy.get('i[class="iconAct-Search search-button-icon"]').click()
    cy.wait(2000)
    cy.get('a[class="paging-pageNumber ng-star-inserted"]').first().click()
    cy.wait(2000)
    cy.get('a[class="shelfProductTile-descriptionLink"]').eq(20).click()
    cy.wait(2000)
    cy.get('span[class="cartControls-addCart"]').click()
    cy.wait(2000)
    cy.get('a[class="headerCheckout-cartButton headerCheckout-cartButtonHover guestOpenCart"]').click()
  })

})
