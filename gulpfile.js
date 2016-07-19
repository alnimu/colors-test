var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var less = require('gulp-less');

gulp.task('default', function() {
    gulp.src([
        'source/vendors/jquery/dist/jquery.js',
        'source/vendors/bootstrap/dist/js/bootstrap.js',
        'source/vendors/angular/angular.js',
        'source/vendors/angular-bootstrap/ui-bootstrap-tpls.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));

    gulp.src([
        'source/app/app.js'
    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));

    gulp.src([
        'source/vendors/bootstrap/dist/css/bootstrap.css'
    ])
        .pipe(concat('vendor.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css/'));

    gulp.src('source/app.less')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(less())
        .pipe(gulp.dest('dist/css'));

    gulp.src('source/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'));

    gulp.src(['source/vendors/bootstrap/dist/fonts/**/*'])
        .pipe(gulp.dest('dist/fonts'));

    gulp.src('source/colors.json')
        .pipe(gulp.dest('dist/'));
});