
'use-strict';
var express = require('express');
var Forum = express.Router();
var config = require('./config/kyle/config.js');
var Mongo = require('./Mongo.js');
var MongoId = require('mongodb').ObjectID;


console.log('Server Forum Init');

/**
 * This is for creating new forum posts
 */
Forum.post('/post/save',function(req,res){
	var body = req.body;
	if(body === null){
		res.status(400).send('Can\'t save Null!');
		return;
	}
	
	var collectionName = getCollectionName(body);	
	var collection = Mongo.database.collection(collectionName);
	
	var objectId = MongoId(req.body._id);
	collection.findOne({_id: objectId}).then(function(result){
		if(result === null){
			// insert new object
			console.log("new Post");
			collection.insertOne(body).then(function(insertResult){
				// get the object that  was inserted
				collection.findOne({_id: insertResult.insertedId}).then(function(post){
					// send object back to front
					//console.log(post);
					res.send(post);
				});				
			});
			
		}else{
			console.log("updating");
			console.log(body);
			collection.updateOne({_id: objectId}, {$set:{
				title: body.title,
				message: body.message,
				replies: body.replies
			}}).then(function(data){
				collection.findOne({_id: objectId}).then(function(post){
					// send object back to front
					//console.log(post);
					res.send(post);
				});
			});
			
		}
		
		
	});
	
});

Forum.post('/post/delete',function(req,res){
	
	var body = req.body;
	if(body === null){
		res.status(400).send('Can\'t save Null!');
		return;
	}
	
	var collectionName = getCollectionName(body);	
	var collection = Mongo.database.collection(collectionName);
	
	var objectId = MongoId(body.id);
	
//	collection.deleteMany({});
	
	collection.deleteOne({_id: objectId}).then(function(post){
		//console.log(post);
		res.send(post);
	});
	
});


Forum.post('/post/get',function(req,res){
	
	var body = req.body;
	if(body === null){
		res.status(400).send('Can\'t save Null!');
		return;
	}
	
	
	//res.send('hate');
	var collectionName = getCollectionName(body);	
	var collection = Mongo.database.collection(collectionName);
	
	var objectId = MongoId(body.id);
	collection.findOne({_id: objectId}).then(function(post){
	//	console.log(post);
		res.send(post);
	});
	
});


Forum.post('/',function(req,res){
	var body = req.body;
	if(body === null){
		res.status(400).send('Can\'t save Null!');
		return;
	}
	console.log(body);
	
	
	
	var collectionName = getCollectionName(body);	
	var collection = Mongo.database.collection(collectionName);
	
	//console.log(collection);
	collection.find({}).toArray().then(function(result){
		//console.log(result);
		res.send(result);
	});
	
//	var posts = [];
//	posts.push({id: 1, title: 'Site Update 8/26/2016', lastComment: '8/25/2016'});
//	posts.push({id: 2, title: 'Hello News', lastComment: '8/26/2016'});
//	posts.push({id: 3, title: 'Added Back End Point', lastComment: '8/26/2016'});
//	
//	
	
		
});


function getCollectionName(body){
	var forum = body.subject;
	if(forum !== undefined && forum !== null){
		forum = forum.toLowerCase();		
	}
	switch(forum){
		case 'news'	:
			return 'forumNews';
		case 'heroes'	:
			return 'forumHeroes';
		case 'strategy'	:
			return 'forumStrategy';
		case 'fan art'	:
			return 'forumFanArt';
		case 'technology'	:
			return 'forumTechnology';
		case 'general'	:
			return 'forumGeneral';
		case 'other games'	:
			return 'forumOtherGames';
		default:
			return 'Hate';
	
	}
}


module.exports = Forum;