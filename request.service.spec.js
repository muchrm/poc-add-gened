var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var requestService = require('./request.service').requestService;

describe('Request Service', function() {
  it('method all should return empty array  if no items', function() {
    expect(requestService.all()).that.is.empty;
  });
  it('method add should increase size of studyplan', function() {
    const studyplan = 1;
    const year = 2559;
    const semester = 1;
    const course = {courseCode:885101};
    requestService.add(studyplan,year,semester,course);
    expect(requestService.all()).to.have.lengthOf(1);
  });
  it('method remove should decrease size of studyplan', function() {
    currentSize = requestService.all().length;
    requestService.remove(0)
    expect(requestService.all()).to.have.lengthOf(currentSize-1);
  });
});