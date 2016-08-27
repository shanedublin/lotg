(function(){
	


'use-strict';

var config = {};

config.publicFolder = "build/public";
config.buildFolder = './build/public';
config.sourceFolder = 'src/public';
config.index = 'src/public/index.html';

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
config.defaultSequelizeSettings = {
		timestamps: false,
		freezeTableName: true,
		underscored: true
};



config.mongoConnection = {
		url : 'mongodb://192.168.0.2:27017/lotg'
};


config.nodeAddress = 'localhost:3000';



	module.exports = config;

})();