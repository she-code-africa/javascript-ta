const assert = require("assert").strict;
const process = require("process")
const fs = require("fs")
const path = require("path")

const main = require("./main");
const { stringify } = require("querystring");

const testCaseInputFolder = "./testcase/input/"
const testCaseOutputFolder = "./testcase/output/"


function getTestCaseFile(file) {
    let _file = String(file)
    if (_file.includes("input")) {
        return testCaseInputFolder + _file
    }
    return testCaseOutputFolder + _file
}

function getTestCaseData(file) {
    const filePath = path.normalize(getTestCaseFile(file))
    return fs.readFileSync(filePath, { encoding: "utf-8" })
}

function testUpperCase() {
    process.stdout.write(">> Default: String Upppercase\n")
    assert.deepStrictEqual("foo".toUpperCase(), "FOO", "Default Test: expected 'foo' to be uppercase 'FOO'")
    process.stdout.write("-- Passed ✓ \n")
    process.stdout.write("\n")
}

function runTestCase0() {
    process.stdout.write(">> Testcase 0: \n")

    const output = main.fibonacci(getTestCaseData("input0.txt"))
    const expectedOut = getTestCaseData("output0.txt")

    const cleanExpectedOut = expectedOut.slice(1, expectedOut.length - 1).split(",").map(Number)

    assert.deepStrictEqual(output, cleanExpectedOut)
    process.stdout.write("-- Passed ✓ \n")
}

(
    function () {
        testUpperCase()

        runTestCase0()
    }
)()