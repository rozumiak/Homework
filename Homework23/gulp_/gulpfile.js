const gulp = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-babel-minify');
const concat = require('gulp-concat');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
gulp.task('js', () =>
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(minify({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(gulp.dest('./dist'))
);
gulp.task('css', () =>
    gulp.src('src/**/*.css')
        .pipe(concatCss('all.css'))
        .pipe(cleanCSS({compatibility: '*'}))
        .pipe(gulp.dest('./dist'))
);

gulp.task('default', gulp.series('js', 'css'));