'use-strict';


var gulp = require('gulp');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort')
var browserSync = require('browser-sync').create();
var mainBowerFiles = require('main-bower-files');
var del = require('del');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var nodemon = require('nodemon');
var config = require('./src/server/config/kyle/config.js');




function logError(error){
	  console.log(error.toString());
	  this.emit('end');
}

var mainBowerOverrides = {
		  overrides:{
			  bootstrap:{
				  main:['./dist/js/bootstrap.js',
				       './dist/css/bootstrap.min.css',
				       './dist/fonts/*.*']
			  }
		  }
	  	};
function logger(msg){
	  console.log(msg);
}


gulp.task('default',['start']);



gulp.task('browser-sync',function(){
	browserSync.init({
		server:{
			baseDir:config.publicFolder
		},		
		port: 3001,
		ui: {
			port: 3002
		}
		
	});
});

gulp.task('index-inject',function build(){
	gulp.src(config.index)
	.pipe(inject(gulp.src(mainBowerFiles(mainBowerOverrides),{read:false}),{name: 'bower'}))
	.pipe(inject(gulp.src('./src/public/**/*.js').pipe(angularFilesort()), {relative:true}))
	.pipe(inject(gulp.src('./src/public/**/*.css'), {relative:true}))
  	.on('error',logError)
	.pipe(gulp.dest(config.buildFolder));
})



gulp.task('bower-dist', function(){
  return gulp.src(mainBowerFiles(mainBowerOverrides),{base:'bower_components'})
  .pipe(gulp.dest(config.buildFolder+'/bower_components'));
});


gulp.task('src-dist',function(){
  return gulp.src([config.sourceFolder+'/**','!'+config.index])
  .pipe(gulp.dest(config.buildFolder));
});


gulp.task('js-hint',function(){
  return gulp.src('src/**/*.js')
  .pipe(jshint({esversion: 6}))
  .pipe(jshint.reporter(logger));
});

gulp.task('clean',function clean(){
	return del(['!build/public','build/public/**']);
});


gulp.task('dev',dev);

function dev(callback){
	console.log('Running Dev Build');
	if(callback !== null && callback !== undefined){
		return runSequence('clean','js-hint','index-inject','src-dist','bower-dist',callback);
		
	}else{
		return runSequence('clean','js-hint','index-inject','src-dist','bower-dist');
	}
}

gulp.task('start',['browser-sync'],function(){	
			dev(browserSync.reload);
	nodemon({
		script:'src/server/app.js',
		ext: 'js html css',
		ignore : [
		          'bower_components/',
		          'node_modules/',
		          'build/'
		          ],
		env: {'NODE_ENV': 'developement'}
			
	}).on('restart',function(){
		dev(browserSync.reload);
	})
	.on('start',function(){		
		//browserSync.reload();
	});
});