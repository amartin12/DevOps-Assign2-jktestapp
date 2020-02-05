// var gulp = require('gulp');
//
// gulp.task('hello', function(done){
//     console.log('Hello world!');
//     done();
// });

var { src, dest, parallel } = require('gulp');
var mocha = require('gulp-mocha');

function runmocha(){
    return src('tests/tests.js', {read: false})
        .pipe(mocha())

}
exports.default = parallel(runmocha);