/**
 * @namespace Krater.Tests
 */

 Tests = {
    ArrayAssert: require('./ArrayAssert'),
    Assert: require('./Assert'),
    AssertFailedError: require('./AssertFailedError'),
    StringAssert: require('./StringAssert'),
    Test: require('./Test'),
    UnitTest: require('./UnitTest'),
};

Object.defineProperty(Tests, 'VERSION', {
    value: '1.0.0',
    writable: false
});

module.exports = Tests;

if (!global.Krater) global.Krater = {};
global.Krater.Tests = Tests;