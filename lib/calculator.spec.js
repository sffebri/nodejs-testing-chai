const { assert } = require("console");
const { tambah, kurang, kali, bagi, pangkat, modulus, ERROR_ZERO_OPERAND} = require("./calculator");
const {expect} = require("chai");

describe("calculator", function () {
  it("seharusnya bisa pertambahan", function(){
    expect(tambah(2, 3)).to.equal(5);
    expect(tambah(2, -3)).to.equal(-1);
  });

  it("seharusnya bisa pengurangan", function(){
    expect(kurang(2, 5)).to.equal(-3);
    expect(kurang(10, 3)).to.equal(7);
    expect(kurang(10, -3)).to.equal(13);
  });

  it("seharusnya bisa perkalian", function(){
    expect(kali(6, 3)).to.equal(18);
    expect(kali(4, -3)).to.equal(-12);
  });

 
  it("seharusnya bisa pembagian", function(){
    expect(bagi(6, 3)).to.equal(2);
  });

  it("seharusnya bisa pemangkatan", function(){
    expect(pangkat(4, 2)).to.equal(16);
    expect(pangkat(4, .5)).to.equal(2);

  });

  it("seharusnya bisa modulus", function(){
    expect(modulus(10, 2)).to.equal(0);
    expect(modulus(10, 4)).to.equal(2);
  });

  describe("Pembagian", function(){
    context("kalau b nya 0", function(){
      it("harusnya nge-throw error", function(){
         function bagiByZero(){
          bagi(12, 0);
         }
         expect(bagiByZero).to.throw(ERROR_ZERO_OPERAND);
      });
    });
  });

  describe("Modulus", function(){
    context("kalau b nya 0", function(){
      it("harusnya nge-throw error", function(){
         function modByZero(){
          modulus(12, 0);
         }
         expect(modByZero).to.throw(ERROR_ZERO_OPERAND);
      });
    });
  });


});
