
# Steps to deploy node to heroku 

* Create a node app and test locally.

* Add a Procfile with `web: node server.js`

* Install and setup heroku gem.

* `$ heroku app:create <app_name>`

* `$ git push heroku master`

* `heroku ps:scale web=1`

__"Heroku free version has no support for ws yet...so holding it for now"__
