'use strict';

var _ = require('lodash');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
// var User = require('../user/user.model');
// var Roles = require('../roles/roles.model');

 var transporter = nodemailer.createTransport(smtpTransport( {
	   service: "Gmail",  // sets automatically host, port and connection security settings
	   auth: {
	       user: "kurt.pricel06@gmail.com",
	       pass: "@Kod3vS1992"
	   }
	}));
 
// exports.send = function(req, res) {
//   console.log('hello');
//   Roles.find({'permissions.receiveEmails': true}, function(err, foundRoles) {
//     if(err) { return handleError(res, err); }
//     if(!foundRoles) { return res.status(404).send('Nobody to email.'); }

//     var gatheredRoles = [];
//     for (var i = 0; i < foundRoles.length; i++) {
//       gatheredRoles.push(foundRoles[i].role);
//     }

//     User.find({role: {'$in': gatheredRoles}}, function (err2, emailees) {
//       if(err2) { return handleError(res, err); }
//       if(!emailees) { return res.status(404).send('Nobody to email.'); }

//       var toEmails = [];
//       for (var i = 0; i < emailees.length; i++) {
//         toEmails.push(emailees[i].email);
//       }

//       var toos = toEmails.join();
//       var mailOptions = {
//         from: 'Fred Foo <foo@blurdybloop.com>', // sender address
//         to: toos,
//         subject: req.body.subject || '', // Subject line
//         text: req.body.text || '', // plaintext body
//       };
//       res.status(200).send(mailOptions);
//       // transporter.sendMail(mailOptions, function(error, info){
//       //   if(error){ return handleError(res, err); }
//       //   res.status(200).send('Email sent!');
//       // });
//     });

//   });

// };

exports.testSend = function(req, res) {   
	console.log(req);
	var emailOptions = { 
	   from: "SKurt Garcia <kurt.pricel06@gmail.com>", // sender address.  Must be the same as authenticated user if using Gmail.
	   to: "Meshup <themeshstudio@gmail.com>",  
	   subject: "Test mail nodemailer", 
	   text: "Hi this is the test from the develoepr"  
	};

	transporter.sendMail(emailOptions, function(error, response){  
	   if(error){
	       console.log(error);
	   } else {
	       console.log("Message sent: " + response.message);
	   }
	   
	   res.status(200).send(emailOptions);
	   transporter.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
	});  
};

function handleError(res, err) {
  return res.status(500).send(err);
}