/// <reference types="Cypress" />

import LoginPage from "../PageObjects/LoginPage";

describe('Test Suite', () => {

    it('Validated User Login', () => {
        const loginObect = new LoginPage() 
        loginObect.initializeBrowser();
        loginObect.fillUsernameTextBox('godwin.achilefu@outlook.com');
        loginObect.fillPasswordTextBox('godzilla123')
        loginObect.clickSignInButton();

        if (cy.contains('Homepage')) {

        }

    });

})