var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var genEdService = require('./gen-ed.service').genEdService;

describe('General Education Service', function() {
  it('method all should return empty array  if no items', function() {
    expect(genEdService.all()).that.is.empty;
  });
  it('method add should increase size of studyplan', function() {
    const studyplan = 1;
    const year = 2559;
    const semester = 1;
    const course = {courseCode:885101};
    genEdService.add(studyplan,year,semester,course);
    expect(genEdService.all()).to.have.lengthOf(1);
  });
  it('method remove should decrease size of studyplan', function() {
    currentSize = genEdService.all().length;
    genEdService.remove(0)
    expect(genEdService.all()).to.have.lengthOf(currentSize-1);
  });
});