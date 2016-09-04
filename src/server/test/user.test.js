var userDao = require('../user/user.dao.js');
const assert = require('assert');
const chalk = require('chalk');


var test = {};

console.log('userTests');
try {
	assert.equal(true,  userDao.acceptablePassword('hate / best password blah'));
	assert.equal(true,  userDao.acceptablePassword('hateaoeu23987aoejsth'));
	assert.equal(false,  userDao.acceptablePassword('hate'));
	assert.equal(false, userDao.acceptablePassword(null));
	assert.equal(false, userDao.acceptablePassword(undefined));
	assert.equal(false, userDao.acceptablePassword(845));
	assert.equal(false, userDao.acceptablePassword([]));
	assert.equal(false, userDao.acceptablePassword(""));
	assert.equal(false, userDao.acceptablePassword({}));
	assert.equal(false, userDao.acceptablePassword({random:"stuff"}));
	console.log('User Dao acceptablePassword Check: ' + chalk.green('Passed '));
} catch (err) {
	console.log('User Dao acceptablePassword Check : ' +chalk.red('Failed ') + chalk.yellow(err));
}



userDao.hashPassword('hate').then(function(hash){
	console.log('User Dao Password Hash Check: ' + chalk.green('Passed ') + chalk.yellow(hash));
},function(err){
	console.log('User Dao Update User: ' +chalk.red('Failed ') + chalk.yellow(err));
});


userDao.checkForEmail({email: 'rushanedublin@gmail.com'}).then(function(data){
	if( data > 0){
		
		console.log('User Dao Email Check: ' + chalk.green('Passed'));
	}else{
		console.log('User Dao Email Check: ' + chalk.red('Failed'));
	}
		
});

userDao.checkForName({name: 'rusd'}).then(function(data){
	if( data > 0){
		console.log('User Dao name Check: ' + chalk.green(' Passed'));
	}else{
		console.log('User Dao name Check: ' + chalk.red('Failed'));
	}
		
});


userDao.findUser({email:'rushanedublin@gmail.com'}).then(function(data){
	if(data !== null && data.email === 'rushanedublin@gmail.com'){
		console.log('User Dao find User: ' + chalk.green(' Passed') );
	}else{
		console.log('User Dao find User: ' + chalk.red('Failed'));
	}
});

userDao.createUser(
		{email: 'test@test.com',name:'test',password:'hatehate'}
		).then(function(data){
			console.log('User Dao Create User: ' + chalk.green(' Passed') + chalk.yellow(' Created new user: ') + chalk.blue(data.name));
		},function(data){
			console.log('User Dao create User: ' +chalk.red('Failed ') + chalk.yellow(data));
			
	});

userDao.updateUser(
		{id: 23, email: 'rushanedublin@gmail.com',name:'rusd'}
		).then(function(data){
			console.log('User Dao Update User: ' + chalk.green(' Passed') + chalk.yellow(' Updated user: ') + chalk.blue(data.name));
	},function(data){
		console.log('User Dao Update User: ' +chalk.red('Failed ') + chalk.yellow(data));
			
	});

userDao.comparePassword('hatehate','$2a$10$xc857sDtshHDCob5ou.8Vu1rsFDTNX7UPGJksKmwBfSQ6HxFFq8je').then(function(){
	console.log('User Dao Compare Password: ' + chalk.green(' Passed'));
},function(data){
	console.log('User Dao Compare Passowrd: ' +chalk.red('Failed ') + chalk.yellow(data));
});


module.exports = test;