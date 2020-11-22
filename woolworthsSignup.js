context('window', () =>{

    it('Open Woolworths URL', () => {
        cy.visit('https://www.woolworths.com.au/')    
    })

    it('click on login button', () =>{
        cy.contains('Log in').click()
    })

    it('click on signup link', () =>{
        cy.get('div.body-container div.shop-content:nth-child(5) main.shop-centerPanel div.secureLogin div.secureLogin-padding wow-login-form:nth-child(1) div:nth-child(1) div.hidden-xs.loginForm-label > a:nth-child(1)').click()
    })

    it('create an account', () =>{

        //enter all the credentials
        cy.get('input[name="FirstName"]').type('sedaw456')
        cy.get('input[name="lastName"]').type('qwert')
        cy.get('input[name="EmailAddress"]').type('sedaw456@mailinator.com')
        cy.get('input[name="Password"]').type('qwert123')
        cy.get('input[name="dateofbirth"]').type('01/01/2002')
        cy.get('input[name="mobilePhone"]').type('0494309704')
        cy.get('div[class="signupForm-legalLinkWrapper"] div[class="checkbox-box"]').click()
        cy.get('button[type="submit"]').click()
        cy.wait(2000)
        cy.get('body').type('{esc}').click()
        
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
        cy.wait(3000)
        cy.get('span[class="headerCheckout-cartButtonTotal"]').click()
    })
})