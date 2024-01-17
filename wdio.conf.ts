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
        "./test/specs/adb-test.ts"
    ],
    capabilities: [{
        "port": 4723,
        "platformName": "android",
        "appium:platformVersion": "11",
        "appium:automationName": "UiAutomator2",
        "appium:newCommandTimeout": 20000
    }],
    services: [
        ["appium", {
            command: 'appium',
            logPath: "./test/logs",
            platformName: "android",
            }
        ]
    ],
    logLevel: 'error',   
    framework: 'mocha',
    outputDir: "./test/logs",
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 10000
    }
}
