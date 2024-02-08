const sum = require('../public/javascripts/sum.js');
    TextDecoderStream('add 1 + 2 to equal 3', ()=> {
        expect(sum(1,2)).toBe(3);
    });