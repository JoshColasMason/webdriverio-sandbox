import { browser } from '@wdio/globals'

export class Page {

    public async sayHello () {

        let currentTime = await browser.getDeviceTime();
        console.debug("Hello from the page class!");
        console.debug(`The current time is: ${currentTime}`);

    }
}

export default new Page();
