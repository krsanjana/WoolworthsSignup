context('window', () =>{

    it('Open Woolworths URL', () => {
        cy.visit('https://www.woolworths.com.au/')    
    })

    it('click on login button', () =>{
        cy.contains('Log in').click()
    })

    it('click on sign up link', () =>{
        cy.get('div.body-container div.shop-content:nth-child(5) main.shop-centerPanel div.secureLogin div.secureLogin-padding wow-login-form:nth-child(1) div:nth-child(1) div.hidden-xs.loginForm-label > a:nth-child(1)').click()
    })

    it('create an account', () =>{

        cy.get('input[name="FirstName"]').type('xsw987')
        cy.get('input[name="lastName"]').type('fdzxcolrf')
        cy.get('input[name="EmailAddress"]').type('xsw987@mailinator.com')
        cy.get('input[name="Password"]').type('qwert123')
        cy.get('input[name="dateofbirth"]').type('01/01/2002')
        cy.get('input[name="mobilePhone"]').type('0494309704')
        cy.get('div[class="signupForm-legalLinkWrapper"] div[class="checkbox-box"]').click()
        cy.get('button[type="submit"]').click()
        cy.wait(2000)
        cy.get('body').type('{esc}').click()
        
    })
    
    it('add watermelon to the cart', () => {

        cy.get('#headerSearch').type('watermelon')
        cy.get('i[class="iconAct-Search search-button-icon"]').click()
        cy.wait(2000)
        cy.get('a[class="shelfProductTile-descriptionLink"]').first().click()
        cy.wait(2000)
        cy.get('span[class="cartControls-addCart"]').click()
        cy.wait(2000)
        cy.get('a[class="headerCheckout-cartButton headerCheckout-cartButtonHover nonguestOpenCart"]').click()
        
    })
})