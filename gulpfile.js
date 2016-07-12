var gulp       = require('gulp');
var styleguide = require('sc5-styleguide');
var sass       = require('gulp-sass');
var concat     = require('gulp-concat');
var outputPath = 'worten-styleguide/styleguide';

gulp.task('styleguide:generate', function() {
  return gulp.src('worten-styleguide/scss/**/*.scss')
    .pipe(styleguide.generate({
        title: 'Worten Styleguide',
        server: true,
        rootPath: outputPath,
        commonClass: 'w-common-styles',
        appRoot: 'worten-styleguide/styleguide',
        overviewPath: 'worten-styleguide/overview.md'
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('worten-styleguide/scss/app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('images', function() {
  gulp.src(['worten-styleguide/images/**'])
    // Do image sprites, optimizations etc.
    .pipe(gulp.dest(outputPath + '/images'));
});

gulp.task('fonts', function() {
  gulp.src(['worten-styleguide/fonts/**'])
    .pipe(gulp.dest(outputPath + '/fonts'));
});

gulp.task('watch', ['styleguide', 'fonts', 'images'], function(){
  gulp.watch(['worten-styleguide/scss/**/*.scss', 'worten-styleguide/scss/app.scss'], ['styleguide', 'fonts', 'images']);

});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);
