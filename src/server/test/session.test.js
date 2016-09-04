/*jshint loopfunc: true */
var session = require('../session/session.js');
const assert = require('assert');
const chalk = require('chalk');
var test = {};

var shouldThrow = [null,undefined,[],[54,89,'ao'],{},{random:'oops'}];

for(let i = 0; i < shouldThrow.length; i++ ){
	try {
		assert.throws(() => {session.createSession(shouldThrow[i]);},Error );
		console.log('Session Create Session Check: ' + chalk.green('Passed ') + chalk.yellow(shouldThrow[i]));
		
	} catch (err) {
		console.log('Session Create Session Check: ' +chalk.red('Failed ') + chalk.yellow(err));
	}
}

var shouldNotThrow = [5,54,87];

for(let i = 0; i < shouldNotThrow.length; i++ ){
	try {		 
		console.log('Session Create Session Check: ' + chalk.green('Passed ') + chalk.yellow(session.createSession(shouldNotThrow[i]).token));
		
	} catch (err) {
		console.log('Session Create Session Check: ' +chalk.red('Failed ') + chalk.yellow(err));
	}
}









module.exports = test;