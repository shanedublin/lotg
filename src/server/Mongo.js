(function(){
	

'use-strict';
var express = require('express');
var config = require('./config/kyle/config.js');

var MongoClient = require('mongodb').MongoClient;

console.log('Mongo Init');
var Mongo = {};


//Mongo.dataBase ={};

//MongoClient.connect(config.mongoConnection.url,function(err,db){
//	//console.log(err);
//	
//	console.log('Connected to mongo');
//	//insertDocuments(db,null);
//	retrievDocuments(db);
//	db.close();
//	
//});
MongoClient.connect(config.mongoConnection.url).then(function(db){
	
	//console.log(db);
	Mongo.database = db;
	
	//insertDocuments();
	//getDocuments('forumNews');
	//updateDocument();
}).catch(function(err){
	console.log(err);
});

var insertDocuments = function(col){
	var collection = Mongo.database.collection(col);
	
//	collection.deleteOne({id: 0}).then(function(result){
//		console.log(result.deletedCount);
//	});
	
	
	//collection.insertOne({_id: 0, title: 'News' , posts: posts});	
//	collection.insertOne({_id: 1, title: 'Heros' , posts: []});
//	collection.insertOne({_id: 2, title: 'Strategy' , posts: []});
//	collection.insertOne({_id: 3, title: 'Fan Art' , posts: []});
//	collection.insertOne({_id: 4, title: 'Technology' , posts: []});
//	collection.insertOne({_id: 5, title: 'General' , posts: []});
//	collection.insertOne({_id: 6, title: 'Other Games' , posts: []});
	
	
};

var updateDocument = function(col){
	var posts = [];
	posts.push({id: 1, title: 'Site Update 8/26/2016', lastComment: '8/25/2016'});
	posts.push({id: 2, title: 'Hello News', lastComment: '8/26/2016'});
	posts.push({id: 3, title: 'Added Back End Point', lastComment: '8/26/2016'});
	var collection = Mongo.database.collection(col);
	
	collection.findOne({title:'News'}).then(function(result){
		console.log(result);
		result.posts = posts;
		collection.updateOne({"_id":result._id},{$set:{"posts":posts}}).then(function(res2){
			console.log('updatated'); 
		});
		
	});
	
};

var getDocuments = function(col){
	var collection = Mongo.database.collection(col);
	 
	collection.find({}).toArray(function(err,docs){
		console.log(docs);
	});
	
};



module.exports = Mongo;
})();