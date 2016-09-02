(function(){
	'use-strict';	
	var config = {};
	
	config.publicFolder = "build/public";
	config.buildFolder = './build/public';
	config.sourceFolder = 'src/public';
	config.index = 'src/public/index.html';
	
	
	
	
	
	
	
	
	config.defaultSequelizeSettings = {
			timestamps: false,
			freezeTableName: true,
			underscored: true
	};
	
	
	if(process.env.NODE_ENV == 'developement'){		
		config.mongoConnection = {
				url : 'mongodb://192.168.0.2:27017/lotg'
		};
		config.databaseConnection =['lotg','shane','hate', {
			host: '192.168.0.2',
			dialect: 'postgres',
			port: 5432,
			database: 'lo2tg',
			user: 'shane',
			password: 'hate',		
			pool:{
				max: 5,
				min: 0,
				idle: 10000
			}
	
	}];
	}else{		
		config.mongoConnection = {
				url : 'mongodb://localhost:27017/lotg'
		};
		config.databaseConnection =['lotg','shane','hate', {
			host: 'lotg.cykfhv8ar8q9.us-west-2.rds.amazonaws.com',
			dialect: 'postgres',
			port: 5432,
			database: 'lo2tg',
			user: 'shane',
			password: process.env.POSTGRES_PASSWORD,		
			pool:{
				max: 5,
				min: 0,
				idle: 10000
			}
	
	}];
	}
	
	
	config.nodeAddress = 'localhost:3000';



	module.exports = config;

})();