let genEd = []
let genEdService = {}
genEdService.all = () => {
    return genEd
}
genEdService.add = (oepnFor,year,semester,course) =>{
    genEd.push({oepnFor,year,semester,course})
}
genEdService.remove = (index) =>{
    if (index > -1) {
        genEd.splice(index, 1);
    }
}
module.exports = {
    genEdService
}