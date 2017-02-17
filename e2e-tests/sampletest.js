module.exports = {

    'Validating Login for Negative Scenario...': (browser) => {
        browser
            .init()
            .waitForElementVisible('body')
            .setValue('input[name=username]', '')
            .setValue('input[name=password]', '')
            .waitForElementVisible('button[type=submit]')
            .click('button[type=submit]')
            .pause(1000)
    },

    'Validating Login for Positive Scenario...': (browser) => {
        browser
            .init()
            .waitForElementVisible('body')
            .setValue('input[name=username]', browser.globals.username)
            .setValue('input[name=password]', browser.globals.password)
            .waitForElementVisible('button[type=submit]')
            .click('button[type=submit]')
            .pause(1000)
    },

    'Getting Started...': (browser) => {
        browser
            .click('div.displayBox button#getStarted')
    },

    'Answering the Questionnaire...': (browser) => {
        browser
            .click('label[for=MeAndPartner]')
            .pause(1000)
            .waitForElementVisible('label[for=retirement]')
            .click('label[for=retirement]')
            .pause(1000)
            .waitForElementVisible('label[for=taxable]')
            .click('label[for=taxable]')
            .pause(1000)
            .waitForElementVisible('label[for="2"]')
            .click('div.prev')
            .pause(1000)
            .waitForElementVisible('label[for=taxable]')
            .click('label[for=taxable]')
            .pause(1000)
            .waitForElementVisible('label[for="2"]')
            .click('label[for="2"]')
            .pause(1000)
            .click('button#getProposal')
    }
}
