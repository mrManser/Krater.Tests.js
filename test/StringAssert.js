let funcs = [
    {n:'Contains',      nArgs: [5], eArgs: ['3',3],},
    {n:'Contains',      nArgs: ['Hollo world!', 'wor'], eArgs: ['Hollo world!', '3'],},
    {n:'NotContains',   nArgs: [5], eArgs: ['3',3],},
    {n:'NotContains',   nArgs: ['Hollo world!', '3'], eArgs: ['Hollo world!', 'wor'],},
    {n:'StartsWith',    nArgs: [5], eArgs: ['3',3],},
    {n:'StartsWith',    nArgs: ['Hollo world!', 'Hol'], eArgs: ['Hollo world!', 'wor'],},
    {n:'NotStartsWith', nArgs: [5], eArgs: ['3',3],},
    {n:'NotStartsWith', nArgs: ['Hollo world!', 'wor'], eArgs: ['Hollo world!', 'Hol'],},
    {n:'EndsWith',      nArgs: [5], eArgs: ['3',3],},
    {n:'EndsWith',      nArgs: ['Hollo world!', 'ld!'], eArgs: ['Hollo world!', 'wor'],},
    {n:'NotEndsWith',   nArgs: [5], eArgs: ['3',3],},
    {n:'NotEndsWith',   nArgs: ['Hollo world!', 'wor'], eArgs: ['Hollo world!', 'ld!'],},
    {n:'Matches',       nArgs: ['Hollo world!', /[A-Za-z]*/], eArgs: ['Hollo world!', /[0-9]+/],},
    {n:'NotMatches',    nArgs: ['Hollo world!', /[0-9]+/], eArgs: ['Hollo world!', /[A-Za-z]*/],},
];

console.log('\n');
console.group('StringAssert');
for (const f of funcs) {
    console.log('\n');
    console.log('StringAssert.'+ f.n);
    console.group();
    let func = require(`../src/StringAssert/${f.n}.js`);
    console.log('norm: ');
    try{ func.call(null, ...f.nArgs); }catch(e){ console.error(`${e}`);}
    console.log('error: ');
    try{ func.call(null, ...f.eArgs); }catch(e){ console.error(`${e}`);}
    console.groupEnd();
}
console.groupEnd('StringAssert');