var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const vj = require("../vj");

describe("vj should be a function", function () {
  it("vj should be a function", function () {
    vj("");
  });
  it("function should accept number as an argument", function () {
    vj(1);
  });
});
