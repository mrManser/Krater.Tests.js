/**
 * @namespace Krater.Tests
 */

 Tests = {
     
};

Object.defineProperty(Tests, 'VERSION', {
    value: '0.0.1 ',
    writable: false
});

module.exports = Krater;

if (!global.Krater) global.Krater = {};
global.Krater.Tests = Tests;