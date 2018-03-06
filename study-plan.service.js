let studyplans = []
let studyplanService = {}
studyplanService.all = () => {
    return studyplans
}
studyplanService.add = (studyplan,year,semester,course) =>{
    studyplans.push({studyplan,year,semester,course})
}
studyplanService.remove = (index) =>{
    if (index > -1) {
        studyplans.splice(index, 1);
    }
}
module.exports = {
    studyplanService
}