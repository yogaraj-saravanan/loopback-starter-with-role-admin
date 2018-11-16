# loopback-starter-with-role-admin
Here we have a starter kit of loopback with user and associated models and an admin role who can access all the APIs of the user.

This is especially for those who are newbies to loopback,

I have seen many fresh people struggling,
  1. To create an admin role after the basic auth that Loopback provides.
  2. To write an automigrate or autoupdate script.

Here a question arises, Why you need an admin role and why is the autoupdate and automigrate

Why Admin Role?

  Lets say you have done creating an application and created a user model, keeping User model of loopback as base.
The next thing you will obviously do is open explorer and hit the apis. When doing so, if you will try to run the find API,
you will land up with this error "unauthorized" this is where you need admin and acl.

This project handles that.

Why Autoupdate and Automigrate?

  If you have added new attributes to the user.json then you need them to be reflected as Table columns. In order to do that we
need to run automigrate or autoupdate.

What is the difference between Autoupdate and Automigrate?

  Automigrate will affect the values in the tables whereas the autoupdate will not. So if you are in middle of some development and you dont want to lose any of the data in the table but still want to add columns you can run autoupdate.
  
A sample code is added for handling the autoupdate and automigrate.

I have connected to postgresql in this project. you can connect to any db source refer loopback site for the same.

Pre-requesites:

Install node, postgresql

Node version     - v8.9.4

Npm version      - 5.6.0

loopback version - 3.0

postgresql       - 10.0


To get the system up,

Clone the repo.
Run npm install
node .

The node is up with user auth and an admin.
