/**
 * @namespace Krater.Tests.StringAssert
 */

var StringAssert = {
    Contains: require('./Contains'),
    NotContains: require('./NotContains'),
    StartsWith: require('./StartsWith'),
    NotStartsWith: require('./NotStartsWith'),
    EndsWith: require('./EndsWith'),
    NotEndsWith: require('./NotEndsWith'),
    Matches: require('./Matches'),
    NotMatches: require('./NotMatches'),
}

module.exports = StringAssert;