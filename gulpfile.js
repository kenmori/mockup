var gulp = require("gulp");
var gutil = require("gulp-util");
var ftp = require("gulp-ftp");
var imagemin = require("gulp-imagemin");
var pngquant = require('imagemin-pngquant');
var csso = require("gulp-csso");
var autoprefixer = require('gulp-autoprefixer');
var path = require("path");

path = [
	"index.html",
	"./src/css/",
	"./src/scss/**/*.scss",
	"./src/img/min/",//path[3]
	"./src/js/",
	"./src/img/dest/min/"
];

var spritesmith = require('gulp.spritesmith');
// gulp.task('sprite',function(){
// 	var spriteData = gulp.src(path[3] + '*')
// 	.pipe(spritesmith({
// 		imgName: 'sprite.png',
// 		cssName: 'sprite.scss'
// 	}));
// 	spriteData.pipe(gulp.dest(path[5]));
// 	spriteData.pipe(gulp.dest(path[2]));
// });
//

gulp.task('min',function(){
	gulp.src(path[3] + '*')
	.pipe(imagemin({
		progressive:true,
		svgoPlugins: [{removeViewBox:false}],
		use:[pngquant()]
	}))
	.pipe(gulp.dest('./src/img/min/'));
});


// var uglify = require("gulp-uglify");
// gulp.task("jsmin",function(){
// 	gulp.src(["src/js/**/*.js","src/!js/min/**/*.js"])
// 	.pipe(uglify())
// 	.pipe(gulp.dest("./src/js/min"));
// });
//
// var webpack = require('gulp-webpack');
// var webpackConfig = require('./webpack.config.js');
// gulp.task('cleanBuild',function(cb){
// 	var rimraf = require('rimraf');
// 	rimraf('./build',cb);
// });
// gulp.task('copyIndex',['cleanBuil'],function(){
// return gulp.src('index.html')
// .pipe(gulp.dest('./build'));
// });
// gulp.task('build', ['copyIndex'], function (cb) {
//   return gulp.src('')
//   .pipe(webpack(webpackConfig))
//   .pipe(gulp.dest(''));
// });


var browser = require("browser-sync");
gulp.task("server",function(){
	browser({
		server:{
			baseDir: "./"
		}
	});
});

var sass = require("gulp-ruby-sass");
gulp.task('scss',function(){
	//1.0.0から配列やアスタリスクは使えない
  sass('./src/scss/', { style: 'expanded' })
		.pipe(browser.reload({stream:true}))
    .pipe(gulp.dest('./dest/'))
});
gulp.task('sprite',function(){
	var spriteData = gulp.src(path[3] + '*')
	.pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.scss'
	}));
	spriteData.pipe(gulp.dest(path[5]));
	spriteData.pipe(gulp.dest(path[2]));
});


gulp.task('html',function(){
	gulp.src(path[0])
	.pipe(browser.reload({stream:true}))
})

gulp.task("default",['server'], function() {
	// gulp.watch(["./**/*.html","!html/min/**/*.html"],["html"]);
	gulp.watch(path[0],["html"]);
    gulp.watch(path[2],["scss"]);
});
