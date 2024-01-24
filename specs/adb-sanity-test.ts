import { expect } from '@wdio/globals'
import appium from '../types/wrappers/appium.js'

describe('The appium wrapper', () => {
    it('Should be able to say hello', async () => {

        await appium.sayHello();
        await expect(1).toBeGreaterThan(0);

    })
})

