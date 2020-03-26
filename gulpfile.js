const gulp = require('gulp')
const concat = require('gulp-concat')
gulp.task('default', () => {
    return gulp
        .src('./components/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('.'))
})