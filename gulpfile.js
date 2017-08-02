// // 
// // gulpfile開発用
// // ディレクトリを要設定。
// // 

// var gulp = require("gulp");
// var sass = require("gulp-sass");
// var sourcemaps = require("gulp-sourcemaps");
// var autoprefixer = require("gulp-autoprefixer");
// var plumber = require("gulp-plumber");
// var browser = require("browser-sync");

// gulp.task("sass",function(){
// 	gulp.src(".src/css/sass/*.scss")
//     .pipe(plumber())
//     .pipe(sourcemaps.init())
//     .pipe(sass())
//     .pipe(autoprefixer())
//     .pipe(sourcemaps.write("./src/css"))
//     .pipe(gulp.dest("./src/css"))
//   	.pipe(browser.reload({stream:true}));
// });

// gulp.task("default",function() {
// 	gulp.watch("./src/css/sass/*.scss",["sass"]);
// });


var gulp = require('gulp');
var sass = require("gulp-sass");
var plumber = require('gulp-plumber');
var autoPrefixer = require('gulp-autoprefixer');
gulp.task('css',function(){
    gulp.src(['./src/css/sass/**.scss'])
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(gulp.dest('./src/css'))
});
gulp.task('default',function(){
    gulp.watch('./src/css/sass/**.scss',['css']);
});