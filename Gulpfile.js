// Variaveis
var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var minify = require('gulp-minify');

// Servidor
gulp.task('connect',function(){
  connect.server({
    port: 3000,
    livereload: true
  });
});

// Sass
gulp.task('style',function(){
  gulp.src('assets/sass/aquapic.scss').pipe(sass()).pipe(gulp.dest('assets/css/')).pipe(connect.reload());
});

// Minifica JS
gulp.task('minify',function(){
  gulp.src('assets/js/aquapic.js').pipe(minify()).pipe(gulp.dest('assets/js/')).pipe(connect.reload());
})

// Watch
gulp.task('watch',function(){
  gulp.watch('assets/sass/aquapic.scss',['style']);
  gulp.watch('assets/js/aquapic.js',['minify'])
  gulp.watch('./index.html',gulp.src('index.html').pipe(connect.reload()));
});

// Inicia todas as tasks
gulp.task('default',['connect','watch']);
