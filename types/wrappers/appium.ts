import { browser } from '@wdio/globals'

export class Appium {

    public async sayHello () {

        let currentTime = await browser.getDeviceTime();
        console.debug("Hello from the appium wrapper!");
        console.debug(`The current time from the device is: ${currentTime}`);

    }
}

export default new Appium();
