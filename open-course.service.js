r = require('rethinkdb')
let DB_HOST = '10.18.0.11';
let DB_PORT = 28015;
let DB_NAME = 'mis_schedule';
let genEd = []
let openCourseService = {}
let connectDB = () => {
    return r.connect({ host: DB_HOST, port: DB_PORT, db: DB_NAME })
}
openCourseService.all = () => {
    return connectDB().then((conn) => {
        return r.table('courses').run(conn)
    }).then((cursor) => {
        return cursor.toArray()
    })
}
openCourseService.add = (course) => {
    return connectDB().then((conn) => {
        return r.table('courses')
            .insert(course)
            .run(conn)
    })
}
openCourseService.remove = (id) => {
    return connectDB().then((conn) => {
        return r.table('courses')
            .filter({ id })
            .delete()
            .run(conn)
    })
}
module.exports = {
    openCourseService,
    connectDB
}