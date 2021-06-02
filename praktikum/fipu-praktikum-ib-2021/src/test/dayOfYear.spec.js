var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const dayOfYear = require("../dayOfYear.js");

describe.skip("day of year problem", function () {
  it("day of year should be a function", function () {
    dayOfYear();
  });
  it("Should return 1 for 01.01.2000", function () {
    expect(dayOfYear(2000, 1, 1)).to.equal(1);
  });
  it("Should return 2 for 02.01.2000", function () {
    expect(dayOfYear(2000, 1, 2)).to.equal(2);
  });
  it("Should return 32 for 01.02.2000", function () {
    expect(dayOfYear(2000, 2, 1)).to.equal(32);
  });
  it("Should return 61 for 01.03.2000", function () {
    expect(dayOfYear(2000, 3, 1)).to.equal(61);
  });
  it("Should return 92 for 01.04.2000", function () {
    expect(dayOfYear(2000, 4, 1)).to.equal(92);
  });
  it("Should return 121 for 01.05.2000", function () {
    expect(dayOfYear(2000, 5, 1)).to.equal(121);
  });
  it("Should return 121 for 01.06.2000", function () {
    expect(dayOfYear(2000, 6, 1)).to.equal(151);
  });
  it("Should return 121 for 01.07.2000", function () {
    expect(dayOfYear(2000, 7, 1)).to.equal(182);
  });
  it("Should return 121 for 01.08.2000", function () {
    expect(dayOfYear(2000, 8, 1)).to.equal(213);
  });
  it("Should return 121 for 01.09.2000", function () {
    expect(dayOfYear(2000, 9, 1)).to.equal(244);
  });
  it("Should return 121 for 01.10.2000", function () {
    expect(dayOfYear(2000, 10, 1)).to.equal(275);
  });
  it("Should return 121 for 01.11.2000", function () {
    expect(dayOfYear(2000, 11, 1)).to.equal(305);
  });
  it("Should return 121 for 01.07.2000", function () {
    expect(dayOfYear(2000, 12, 1)).to.equal(336);
  });
});
