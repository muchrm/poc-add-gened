var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var studyplanService = require('./study-plan.service').studyplanService;

describe('Studyplan Service', function() {
  it('method all should return empty array  if no items', function() {
    expect(studyplanService.all()).that.is.empty;
  });
  it('method add should increase size of studyplan', function() {
    const studyplan = 1;
    const year = 2559;
    const semester = 1;
    const course = {courseCode:885101};
    studyplanService.add(studyplan,year,semester,course);
    expect(studyplanService.all()).to.have.lengthOf(1);
  });
  it('method remove should decrease size of studyplan', function() {
    currentSize = studyplanService.all().length;
    studyplanService.remove(0)
    expect(studyplanService.all()).to.have.lengthOf(currentSize-1);
  });
});