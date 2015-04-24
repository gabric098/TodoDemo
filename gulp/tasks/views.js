'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var templateCache  = require('gulp-angular-templatecache');

// Views task
gulp.task('views', function() {

  // Put our index.html in the dist folder
  gulp.src('app/index.html')
    .pipe(gulp.dest(config.dist.root));

  // Process any other views files from app/views
  return gulp.src(config.views.src)
    .pipe(templateCache({
          module: 'APP.Todo.Templates',
          standalone: true,
          moduleSystem: 'Browserify'
    }))
    .pipe(gulp.dest(config.views.dest));

});