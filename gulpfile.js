'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');
var eslintIfFixed = require('gulp-eslint-if-fixed');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('sass', function () {
    return gulp.src('./public/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(gulp.dest('./public/build/css'));
});

gulp.task('jslint', function () {
    return gulp.src(['public/js/**/*.js', '!node_modules/**'])
        .pipe(eslint({ fix: true }))
        .pipe(eslint.format())
        .pipe(eslintIfFixed(file => (file.base)))
        .pipe(concat('main.js'))
        .pipe(minify({
            ext: {
                min: '.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('watch', ['sass', 'jslint'], function () {
    gulp.watch('./public/sass/**/**/*.scss', ['sass']);
    gulp.watch('public/js/**/*.js', ['jslint']);
});