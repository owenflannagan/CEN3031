/* Add all the required libraries*/
var should = require('should'),
	mongoose = require('mongoose'),
	Listing = require('./ListingSchema'),
	config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
	Listing.find({ name: "Library West"}, function(err, libDoc) {
		if (err) throw err;
		console.log(libDoc);
	});
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
	Listing.find({ code : "CABL"}, function(err, cabDoc) {
		if (err) throw err;
		console.log(cabDoc);
		Listing.deleteOne({code : "CABL"}, function(err) {
			if (err) throw err;
		});
	});
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
	Listing.findOneAndUpdate({ code : "PHL"}, { address : "701 N Broadway, Sleepy Hollow, NY 10591"}, function(err, hospDoc) {
		if (err) throw err;
		console.log(hospDoc);
	});
		
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
	Listing.find({}, function(err, res) {
		if (err) throw err;
		console.log(res);
	});
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
