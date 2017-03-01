var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('build', shell.task([
    'gitbook build'
]));
    
gulp.task('deploy-ghpages', ['build'], shell.task([
    'git push origin ghpages'
]));

gulp.task('deploy-gitbook', shell.task([
    'git push --force gb master'
]));

gulp.task('default',['build','deploy-ghpages']);

gulp.task('iaas', shell.task([

    'git fetch --all',
    'git reset --hard origin/gh-pages',
    'git checkout gh-pages'

]));
