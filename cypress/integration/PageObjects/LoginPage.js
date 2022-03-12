/// <reference types="Cypress" />

class LoginPage {

    LoginPage() {

    }

    initializeBrowser = () => {
        cy.visit("https://www.google.com")
    }

    fillUsernameTextBox = (value) => {
        const field = cy.get()
        field.clear()
        field.type(value)
        return this;
    }

    fillPasswordTextBox = () => {
        const field = cy.get()
        field.clear()
        field.type(value)
        return this;
    }

    clickSignInButton = () => {
        const button = cy.get()
        button.click()
    }
}

export default LoginPage;