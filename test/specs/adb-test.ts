import { expect } from '@wdio/globals'
import page from '../pageobjects/page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await page.sayHello();
        await expect(1).toBeGreaterThan(0);

    })
})

