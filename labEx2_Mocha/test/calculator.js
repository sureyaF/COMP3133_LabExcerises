var cal = require("../app/calculator");
var assert = require("chai").assert;

var expect    = require("chai").expect;

describe("add", () => {
    function makeTest(x,x2) {
        let expected = x + x2 ;

        it(`${x} + ${x2} :  ${expected}`, () => {
            expect(cal.add(x,x2)).to.equal(7)
           
            
        });
        
    }

        makeTest(5,2);
   

});
//=================================FAIL-TESTs===============================================
describe("addFail", () => {
    function makeTest(x,x2) {
      
        let expected = 8 ;

        it(`${x} + ${x2} :  ${expected}`, () => {
            expect(cal.add(x,x2)).to.equal(8)
           
            
        });
           
            
    
    }

   makeTest(5,2);

});
//==============substract PASSES TEST===========
describe("sub", () => {
    function makeTest(x,x2) {
        let expected = x - x2 ;

        it(`${x} - ${x2} :  ${expected}`, () => {
            expect(cal.sub(x,x2)).to.equal(3)
           
            
        });
           
    }

    
        makeTest(5,2);
    

});
//=================================FAIL-TESTs===============================================
describe("subFail", () => {
    function makeTest(x,x2) {
      
        let expected = 5;

        it(`${x} - ${x2} :  ${expected}`, () => {
            expect(cal.sub(x,x2)).to.equal(5)
           
            
        });
           
            
    
    }

   makeTest(5,2);

});
//========================================multiplication
describe("multi", () => {
    function makeTest(x,x2) {
        let expected = x * x2 ;

        it(`${x} * ${x2} :  ${expected}`, () => {
            expect(cal.multi(x,x2)).to.equal(10)
           
            
        });
           
    }
        makeTest(5,2);


});
//=================================FAIL-TESTs===============================================
describe("multiFail", () => {
    function makeTest(x,x2) {
      
        let expected = 12 ;

        it(`${x} * ${x2} :  ${expected}`, () => {
            expect(cal.multi(x,x2)).to.equal(12)
           
            
        });
           
            
    
    }

   makeTest(5,2);

});
//======================div
describe("div", () => {
    function makeTest(x,x2) {
        let expected = x / x2 ;

        it(`${x} / ${x2} :  ${expected}`, () => {
            expect(cal.div(x,x2)).to.equal(5)
           
            
        });
           
    }

  
        
        makeTest(10,2);
    

});
//=================================FAIL-TESTs===============================================
describe("divFail", () => {
    function makeTest(x,x2) {
      
        let expected = 2 ;

        it(`${x} / ${x2} :  ${expected}`, () => {
            expect(cal.div(x,x2)).to.equal(2)
           
            
        });
           
            
    
    }

   makeTest(10,2);

});