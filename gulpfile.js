var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function(){
    gulp.src('app/scss/abstracts.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
    gulp.src('app/scss/main.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('html', function(){
    return gulp.src('app/index.html')
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('watch', ['browserSync', 'sass'],function(){
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('app/index.html', browserSync.reload);
    gulp.watch('app/css/*.css', browserSync.reload);
    // Other watchers
})
var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})