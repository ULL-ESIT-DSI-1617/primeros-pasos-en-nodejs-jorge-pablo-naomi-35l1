var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('build', shell.task(['npm run build-gitbook']));
gulp.task('deploy-ghpages', ['build'], shell.task(['npm run deploy-ghpages']));
gulp.task('default',['build','deploy-ghpages']);