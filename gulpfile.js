var gulp = require('gulp'),
    notify = require("gulp-notify"),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass');
    
var lessSource = "./less/*.less",
    scssSource = "./scss/*.scss";

gulp.task('sass', function () {
  gulp.src(scssSource)
    .pipe(plumber())
    .pipe(autoprefixer({
    browsers: ['last 2 version'],
    cascade: false
        }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('/css'))
    .pipe(concat('/style.css'))
    .pipe(gulp.dest('./css/'))
    .pipe(notify('working'))
});
 
gulp.task('sass:watch', function () {
    gulp.watch(scssSource, ['sass']);
});gulp

gulp.task('default', ['sass', 'sass:watch']);