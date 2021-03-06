'use strict';

var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var browserSync = require('browser-sync');

gulp.task('api', function() {

    return gulp.src(config.api.src)
        .pipe(changed(config.api.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.api.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));

});
