const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const { response } = require('express');

class CourseController {
    async show(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            res.render('courses/show', {
                course: mongooseToObject(course),
            });
            console.log('show detail');
        } catch (error) {
            next(error);
        }
    }
    create(req, res, next) {
        res.render('courses/create');
    }

    async store(req, res, next) {
        const formData = req.body;
        // res.json(formData);
        formData.image =
            'https://i.ytimg.com/vi/4xDzrJKXOOY/hqdefault_live.jpg';
        const course = new Course(formData);
        console.log(course);
        try {
            console.log('save');
            await course.save();
            res.redirect('/');
        } catch (err) {
            console.error(err);
        }
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                })
            )
            .catch(next);
    }

    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
