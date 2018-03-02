var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var studyplanService = require('./study-plan.service').studyplanService;

describe('Studyplan', function() {
  it('all() should return empty array  if no items', function() {
    expect(studyplanService.all()).that.is.empty;
  });
  it('all() should return empty array  if no items', function() {
    expect(studyplanService.all()).that.is.empty;
  });
});