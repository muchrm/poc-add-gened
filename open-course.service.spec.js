var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var openCourseService = require('./open-course.service').openCourseService;

describe('open Course Service', () => {
  beforeEach((done) => {
    require('./open-course.service').connectDB()
      .then(conn => r.table('courses').delete().run(conn))
      .then(() => done());
  })
  it('method all should return empty array  if no items', () => {
    openCourseService.all()
      .then((result) => {
        expect(result).that.is.empty;
      });
  });
  it('method add should increase size of studyplan', () => {
    const studyplan = 1;
    const year = 2559;
    const semester = 1;
    const course = { courseCode: 885101 };
    openCourseService.add({ studyplan, year, semester, course })
      .then(() => openCourseService.all())
      .then((result) => {
        expect(result).to.have.lengthOf(1);
      });
  });
  it('method remove should decrease size of studyplan', function () {
    const studyplan = 1;
    const year = 2559;
    const semester = 1;
    const course = { courseCode: 885101 };
    openCourseService.add({ studyplan, year, semester, course })
      .then(result => openCourseService.remove(result.generated_keys[0]))
      .then(() => openCourseService.all())
      .then((result) => {
        expect(result).that.is.empty;
      });
  });
});