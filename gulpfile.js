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
var config = require('./config');



function logError(error){
	  console.log(error.toString());
	  this.emit('end');
}

function logger(msg){
	  console.log(msg);
}


gulp.task('default',['start']);



gulp.task('browser-sync',['dev'],function(){
	browserSync.init({
		server:{
			baseDir:config.publicFolder
		}
	});
});

gulp.task('index-inject',function build(){
	gulp.src(config.index)
	.pipe(inject(gulp.src(mainBowerFiles(),{read:false}),{name: 'bower'}))
	.pipe(inject(gulp.src('./src/public/**/*.js').pipe(angularFilesort()), {relative:true}))
	.pipe(inject(gulp.src('./src/public/**/*.css'), {relative:true}))
  	.on('error',logError)
	.pipe(gulp.dest(config.buildFolder));
})



gulp.task('bower-dist', function(){
  return gulp.src(mainBowerFiles(),{base:'bower_components'})
  .pipe(gulp.dest(config.buildFolder+'/bower_components'));
});


gulp.task('src-dist',function(){
  return gulp.src([config.sourceFolder+'/**','!'+config.index])
  .pipe(gulp.dest(config.buildFolder));
});


gulp.task('js-hint',function(){
  return gulp.src(config.sourcFolder+'/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(logger));
});

gulp.task('clean',function clean(){
	return del(['build/**','!build']);
});


gulp.task('dev',dev);

function dev(){
	return runSequence('clean','js-hint','index-inject','src-dist','bower-dist');
}

gulp.task('start',['browser-sync'],function(){	
	
	nodemon({
		script:'src/server/app.js',
		ext: 'js html',
		env: {'NODE_ENV': 'developement'}
			
	}).on('restart',function(){
		dev();
	})
	.on('start',function(){		
		browserSync.reload();
	});
});