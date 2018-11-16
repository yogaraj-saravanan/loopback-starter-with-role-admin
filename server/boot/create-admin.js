'use strict';

const async = require('async');

module.exports = (app, cb) => {
  let User = app.models.user;
  let Role = app.models.Role;
  let RoleMapping = app.models.RoleMapping;

  function automigrateItem(item) {
    return function(cb) {
      app.dataSources.postgres.autoupdate(item, function(err) {
        return err ? cb(err) : (function() {
          console.log('automigration is done => ' + item);
          cb(null);
        })();
      });
    };
  }
  async.parallel([
    automigrateItem('user'),
    automigrateItem('userdetails'),
    automigrateItem('RoleMapping'),
    automigrateItem('Role'),
  ],
  function(err) {
    if (err) {
      cb(err);
    } else {
      User.find({
        email: 'yogaraj.saravanan@gmail.com',
      }, function(err, userData) {
        if (err) {
          console.log(err);
        } else if (userData.length > 0) {
          cb(null);
        } else {
          User.create([
            {
              email: 'yogaraj.saravanan@gmail.com',
              password: '12345',
              mobileNumber: 9566457482,
            },
          ],
          function(err, users) {
            if (err) return cb(err);
            Role.create({
              name: 'admin',
            }, function(err, role) {
              if (err) return cb(err);
              console.log('Created role:', role);
              role.principals.create({
                principalType: RoleMapping.USER,
                principalId: users[0].id,
              }, function(err, principal) {
                if (err) return cb(err);
                console.log('Created principal:', principal);
                cb(null);
              });
            });
          });
        }
      });
    }
  });
};
