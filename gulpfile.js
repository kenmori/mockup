var gulp = require("gulp");
var gutil = require("gulp-util");
var sass = require('gulp-sass');
var ftp = require("gulp-ftp");
var imagemin = require("gulp-imagemin");
var pngquant = require('imagemin-pngquant');
var csso = require("gulp-csso");
var autoprefixer = require('gulp-autoprefixer');
var path = require("path");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');


path = [
	"index.html",
	"./src/app/css/",
	"./src/app/**/*.scss",
	"./src/img/min/",//path[3]
	"./src/js/",
	"./src/img/dest/min/",
	"./src/app/**/*.jade",
	"./dest/**/*.html"
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
	.pipe(gulp.dest('./src/asset/img/min/'));
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
			baseDir: "./",
			index: "./index.html"
		}
	});
});

var rubySass = require("gulp-ruby-sass");
var sourcemaps = require("gulp-sourcemaps");
gulp.task('scss',function(){
	//1.0.0から配列やアスタリスクは使えない
  return rubySass('./src/app/index.scss',{
	 style: 'expanded',
	 sourcemap: true
 })
		.pipe(sourcemaps.init())
	 	.pipe(sass())
	 	.pipe(sourcemaps.write())
	 	.pipe(plumber())
    .pipe(gulp.dest('./dest/'))
		.pipe(browser.reload({stream:true,open: false}))
		.pipe(notify({ message: 'Styles task complete'}))
});
// gulp.task('sprite',function(){
// 	var spriteData = gulp.src(path[3] + '*')
// 	.pipe(spritesmith({
// 		imgName: 'sprite.png',
// 		cssName: 'sprite.scss'
// 	}));
// 	spriteData.pipe(gulp.dest(path[5]));
// 	spriteData.pipe(gulp.dest(path[2]));
// });

var jade = require('gulp-jade');
gulp.task('jade', function(){
	return gulp.src(['./src/**/*.jade', '!./src/**/_*.jade'])
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('./'))
});
gulp.task('html',function(){
	gulp.src(path[0])
	.pipe(browser.reload({stream:true,open: false}))
})

gulp.task("default",['server'], function() {
	// gulp.watch(["./**/*.html","!html/min/**/*.html"],["html"]);
	gulp.watch(path[6],["jade"]);
	gulp.watch(path[0],["html"]);
  gulp.watch(path[2],["scss"]);
});
