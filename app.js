// ============
// Dependencies
// ============
// Package Dependencies
var port = process.env.PORT || 3000;
var express = require('express');
var cloudinary = require('cloudinary');
var app = express();
var sass				= require('node-sass-middleware');
var MongoClient = require('mongodb').MongoClient; // Require mongodb
var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

// parse application/json
app.use(bodyParser.json());

// cloudinary configuration.
cloudinary.config({ 
  cloud_name: 'YOUR_CLOUDINARY_NAME', 
  api_key: 'YOUR_CLOUDINARY_API_KEY', 
  api_secret: 'YOUR_CLOUDINARY_API_KEY' 
});

// TODO List if have time.
//delete images from cloudinary by public_id, here id is "zombie"
//cloudinary.uploader.destroy('zombie', function(result) { console.log(result) });

app.delete('/delete_image', function(req, res){
	MongoClient.connect('mongodb://zihaow:123456@iad1-mongos0.objectrocket.com:16027/student_info', function(err, db) {
		if (err) {
			console.dir("Error connected to DB");
		} else {
			var collection = db.collection('student_info_collection');
			var image_id = req.body.image_id;
			var image_url = req.body.image_url;
			var student_name = req.body.name;
	  	var student_id = req.body.ID;
	  	collection.update( 
				{ location:"Halifax",
					'students.ID': student_id, 
        	'students.name': student_name},
			 	{$pull: { "students.$.images": 
                  {
                  	"image_url":image_url,
                    "image_id":image_id
                  }
               	}
       	}, function(err,result){
             		if (err)
             			console.log("Something's wrong");
             		else
             			res.sendStatus(200);
        }
      );
		}
	});
});

// upload image via local files
app.post('/upload_image', upload.single('file'), function(req, res, next) {
	// if file is valid.
	if (req.file){
		cloudinary.uploader.upload(req.file.path, function(result) {
			var student_name = req.body.name;
			var student_id = req.body.id;

			var image_info = {
	  		id : result.public_id,
	  		url : result.url
  		};
			
			MongoClient.connect('mongodb://zihaow:123456@iad1-mongos0.objectrocket.com:16027/student_info', function(err, db) {
			  if (err) {
			    console.dir(err);
			  } else {
			  	var collection = db.collection('student_info_collection');
			  	collection.update( 
			  				 	{ location:"Halifax", 
	                 'students.ID': student_id, 
	                 'students.name': student_name},
	                {$push: { "students.$.images": 
	                                {
	                                    "image_url":result.url,
	                                    "image_id":result.public_id
	                                }
	                         }
									}, function(err,result){
		             		if (err)
		             			console.log("Something's wrong");
		             		else
		             			res.send(image_info);
		             }
		    	);
				}
			});
		});
	}
});

// upload image with URL.
app.post('/upload_image_url', function(req, res){
	//console.log(req.body.url);
	cloudinary.uploader.upload(req.body.url, function(result) { 
  	var image_info = {
  		id : result.public_id,
  		url : result.url
  	};
  	var student_name = req.body.name;
		var student_id = req.body.id;
		
  	MongoClient.connect('mongodb://zihaow:123456@iad1-mongos0.objectrocket.com:16027/student_info', function(err, db) {
		  if (err) {
		    console.dir(err);
		  } else {
		  	var collection = db.collection('student_info_collection');
		  	collection.update( 
		  				 	{ location:"Halifax", 
                 'students.ID': student_id, 
                 'students.name': student_name},
                {$push: { "students.$.images": 
                                {
                                    "image_url":result.url,
                                    "image_id":result.public_id
                                }
                         }
								}, function(err,result){
	             		if (err)
	             			console.log("Something's wrong");
	             		else
	             			res.send(image_info);
	             }
	    	);
			}
		});
  });
});

//get one student info.
app.get('/student_one', function(req,res){
	//console.log("Getting a student.");
	MongoClient.connect('mongodb://zihaow:123456@iad1-mongos0.objectrocket.com:16027/student_info', function(err, db) {
	  if (err) {
	    console.dir(err);
	  } else {
	  	var student_name = req.query.name;
			var student_id = req.query.id;
			
		  var collection = db.collection('student_info_collection');
			// Find the document and print everything.
			collection.findOne({ location:"Halifax",
													 'students.ID':student_id,
													 'students.name':student_name
			},function(err, doc) {
			  if (err) {
			    return console.dir(err);
			  } else {
			  	//console.log(doc.students);
			  	var thisDoc = doc.students;
			  	for(var i=0;i<thisDoc.length;i++){
			  		if(thisDoc[i].ID === student_id){
			  			//console.log(thisDoc[i]);
			  			res.send(thisDoc[i]);
			  		}
			  	}
			  	//res.send(doc);
			  }
			});
		}
	});
});

//get all students.
app.get('/student', function(req,res){
	MongoClient.connect('mongodb://zihaow:123456@iad1-mongos0.objectrocket.com:16027/student_info', function(err, db) {
	  if (err) {
	    console.dir(err);
	  } else {
	  	
		  var collection = db.collection('student_info_collection');
			// Find the document and print everything.
			collection.findOne({"location":"Halifax"},function(err, doc) {
			  if (err) {
			    return console.dir(err);
			  } else {
			  	//console.log(doc.students);
			  	res.send(doc.students);
			  }
			});
		}
	});
});

//delete a student.
app.delete('/student', function(req,res){
	MongoClient.connect('mongodb://zihaow:123456@iad1-mongos0.objectrocket.com:16027/student_info', function(err, db) {
	  if (err) {
	    console.dir(err);
	  } else {
	  	var collection = db.collection('student_info_collection');
			var student_name = req.body.name;
	  	var student_id = req.body.ID;
			collection.update( 
				{ location:"Halifax" },
			 	{$pull: { 
                  students:{"ID":student_id } 
               	}
       	}, function(err,result){
             		if (err)
             			console.log("Something's wrong");
             		else
             			res.sendStatus(200);
             }
      );
    }
	});
});

//insert a student.
app.post('/student', function(req,res){
	MongoClient.connect('mongodb://zihaow:123456@iad1-mongos0.objectrocket.com:16027/student_info', function(err, db) {
	  if (err) {
	    console.dir(err);
	  } else {
	  	var collection = db.collection('student_info_collection');
	  	var student_name = req.body.name;
	  	var student_id = req.body.ID;
			collection.update( 
	  				 { location:"Halifax" },
	  				 {$push: { 
                        students:{
                        					"name":student_name,
                        					"ID":student_id,
                        					"images": [
											            	{
											            		"image_url":"",
											            		"image_id":""
											            	}
											            ]
											          } 
                     }
             }, function(err,result){
             		if (err)
             			console.log("Something's wrong");
             		else
             			res.sendStatus(200);
             }
    	);
		}
	});
});

// Connect and create a new doc
MongoClient.connect('mongodb://zihaow:123456@iad1-mongos0.objectrocket.com:16027/student_info', function(err, db) {
  if (err) {
    console.dir(err);
    console.log("error connected to mongodb");
  } else {
  	// doc will be created as the following sample data structure.
  	var student_doc = {
        "location" : "Halifax",
        "students" : [
        {
    				"name": "Zihao",
            "ID": "B00123456",
            "images": [
            	{
            		"image_url":"",
            		"image_id":""
            	}
            ]
        },
        {
    				"name": "Rinan",
            "ID": "B00909021",
            "images": [
            	{
            		"image_url":"",
            		"image_id":""
            	}
            ]
        }
    		]
  	};
	  var collection = db.collection('student_info_collection');
	}
});

// =============
// Configuration
// =============
// Variables
var sassObject = {
	root: __dirname + '/app/public/stylesheets',
	src: '/',
	dest: '/css',
	debug: true,
	sourceComments: true,
	outputStyle: 'expanded'
};

// Env Setup
if (process.env.NODE_ENV === 'production') {
	sassObject.outputStyle = 'compressed';
	sassObject.sourceComments = false;
	sassObject.debug = false;
}

// Set & Use
app.set('views', __dirname + '/app/public/views');
app.set('view engine', 'jade');
app.use(sass(sassObject));

// Static File
app.use(express.static(__dirname + '/app/public/images'));
app.use(express.static(__dirname + '/app/public/javascripts'));
app.use(express.static(__dirname + '/app/public/javascripts/vendor'));
app.use(express.static(__dirname + '/app/public/stylesheets/css'));
app.use(express.static(__dirname + '/app/public/views/pages'));

// ======
// Routes
// ======
app.use(require('./app/controllers'));

// ===============
// Starting Server
// ===============
app.listen(port);
console.log('playersOfWall Listening On Port ' + port);