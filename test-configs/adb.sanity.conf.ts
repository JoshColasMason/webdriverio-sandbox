import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {

    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    specs: [
        "../specs/adb-sanity-test.ts"
    ],
    capabilities: [{
        "port": 4723,
        "platformName": "android",
        "appium:platformVersion": "11",
        "appium:automationName": "UiAutomator2",
        "appium:newCommandTimeout": 20000,
        "appium:adbExecTimeout": 20000,
        "appium:skipLogcatCapture": true
    }],
    services: [
        ["appium", {
            command: 'appium',
            logPath: "../logs",
            platformName: "android",
            }
        ]
    ],
    logLevel: 'error',   
    framework: 'mocha',
    outputDir: "../logs",
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 10000
    }
}
