var User = require('../models/user');

module.exports.controller = function (app) {
    app.post('/save-user', function (request, response) {
        var user = new User();

        if(request.body.userName && request.body.password) {
            user.userName = request.body.userName;
            user.password = request.body.password;
        
            user.save(function (err) {
                if (err) throw err;
                console.log('User created!');
                response.json(user);
            });
        }
    });

    app.post('/api/isUserAuth', function (request, response) {
        var responseData = {};

        User.find({ userName: request.body.userName , password: request.body.password}, function(err, user) {
            if (err) throw err;

            // hard coded authentication
            if(user.length > 0) {
                console.log("user is authenticated !!");
                responseData.isAuthenticated = true;
            } else {
                console.log("userName is not authenticated !!");
                responseData.isAuthenticated = false;
            }

            request.session.userName = request.body.userName;
            request.session.password = request.body.password;

            response.json(responseData.isAuthenticated);
        });
        
    });

    app.get('/api/users', function (request, response) {
        
        User.find({}, function (err, user) {
            if (err) throw err;

            // object of the user
            console.log("Get all users !!");
            response.json(user);
        });

    });
};