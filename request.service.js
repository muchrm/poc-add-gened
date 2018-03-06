let genEd = []
let requestService = {}
requestService.all = () => {
    return genEd
}
requestService.add = (openFor,year,semester,course) =>{
    genEd.push({openFor,year,semester,course})
}
requestService.remove = (index) =>{
    if (index > -1) {
        genEd.splice(index, 1);
    }
}
module.exports = {
    requestService
}