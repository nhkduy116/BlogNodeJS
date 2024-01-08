const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    storedCourses(req, res, next) {
        Course.find({}).then((courses) =>
            res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses),
            })
        );
    }
    trashCourses(req, res, next) {
        Course.findDeleted({}).then((courses) =>
            res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses),
            })
        );
    }
}

module.exports = new MeController();
