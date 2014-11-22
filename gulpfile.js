var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('sass', function() {
   gulp.src('sass/loadingEffects.scss')
     .pipe(sass())
     .pipe(autoprefixer())
     .pipe(gulp.dest('.'));
});


gulp.task('concat', function() {
   	gulp.src(['js/snap.svg-min.js','js/jquery.LoadingEffects.js'])
   	.pipe(concat('jquery.LoadingEffects.bundle.js'))
   	.pipe(gulp.dest('.'))
});

gulp.task('min', function() {
   gulp.src('jquery.LoadingEffects.bundle.js')
   .pipe(uglify())
   //.pipe(rename('jquery.LoadingEffects.bundle.min.js'))
   .pipe(gulp.dest('jquery.LoadingEffects.bundle.min.js'))
});


gulp.task('dev', function() {
    gulp.watch('sass/*.scss', ['sass']);
});





