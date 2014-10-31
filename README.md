Why Another Boilerplate?
========================

Well its not just another kickstarter for AngularJS projects but its built with sophisticated build management system. We are following the best practices from google.It contains a best-practice directory structure to ensure code reusability and maximum scalability.

##Features

- Handles automatic **versioning** of your app (Major/Minor/Patch).
- Automatically **tags** current version number in git.
- *Minifies* your css/javascript/images into *build/* directory.
- git add, git commit and git tag
- Run tests with Karma using one liner command.
- Adds new directives/filters/modules using yeoman sub generators.

It comes prepackaged with the most popular design frameworks
around: [Twitter Bootstrap](http://getbootstrap.com),
[Angular UI](http://angular-ui.github.io),
[Angular Bootstrap](http://angular-ui.github.io/bootstrap),
[Font Awesome](http://fortawesome.github.com/Font-Awesome), and
[LESS](http://lesscss.org). Lastly, it contains a sophisticated
[Grunt](http://gruntjs.org)-based build system to ensure maximum productivity.
All you have to do is clone it and start coding!

##Quick Start

Install Node.js, Grunt CLI, Yeoman, cg-angular and then:

```sh
git clone git@github.com:10pearls-nabeelkhan/angularjs-boilerplate-tp.git
cd angularjs-boilerplate-tp
npm -g install yo grunt-cli bower 
npm install -g generator-cg-angular
npm install
bower install
grunt serve
```

Finally open `http://localhost:9001/` in your browser and enjoy!

### Directory Structure

At a high level, the structure looks roughly like this:

```
angularjs-boilerplate-tp/
  |- build/
  |- node_modules/
  |- src/
  |  |- index.html
  |  |- app.js
  |  |- app.less
  |  |- app/
  |  |  |- <app logic>
  |  |  |- components/
  |  |  |  |- <reusable directives/filters/modules>
  |  |- env/
  |  |  |- local.js
  |  |  |- development.js
  |  |  |- production.js
  |  |- assets/
  |  |  |- fonts/
  |  |  |- images/
  |  |  |  |- <static files>
  |  |  |- less/
  |  |  |  |- main.less
  |  |- vendor/
  |  |  |- angular/
  |  |  |- angular-animate/
  |  |  |- angular-bootstrap/
  |  |  |- angular-cookies/
  |  |  |- angular-mocks/
  |  |  |- angular-resource/
  |  |  |- angular-ui-router/
  |  |  |- angular-ui-utils/
  |  |  |- bootstrap/
  |  |  |- font-awesome/
  |- .bowerrc
  |- bower.json
  |- Gruntfile.js
  |- server.js
  |- package.json
```

### Directory Explanation
- `src/` - our application source.
- `vendor/` - third-party libraries. [Bower](http://bower.io) will install
  packages here. 
- `.bowerrc` - the Bower configuration file. This tells Bower to install
  components into the `vendor/` directory.
- `bower.json` - this is our project configuration for Bower and it contains the
  list of Bower dependencies we need.
- `env` - Folder contains different environments to be used by the app.
- `Gruntfile.js` - our build script.
- `package.json` - metadata about the app, used by NPM and our build script. Our
  NPM dependencies are listed here.
- `server.js` - Used to run production code from build/ directory.

### How To Run The App in Development Mode
To run the application in development environment with live reload simply run

```sh
grunt serve
```

### Build Process
Our build process will automatically bump up the version #, create a tag with the same version, commit the changes in git all at the same time using the command below. 

```sh
grunt build:patch:"Your commit message here" --env=local
grunt build:minor:"Your commit message here" --env=development
grunt build:patch:"Your commit message here" --env=staging
grunt build:major:"Your commit message here" --env=production
```

You can replace *major* with *minor* or *patch* depending on how you would like to increment your package version. This will generate your build/ directory with production level code (minified version of html/css/images) which could then be loaded using:

```sh
node server.js
```

Now open `http://localhost:8080/` in your browser to view the application.

### How to test
This will run tests using karma on all three browsers chrome/firefox/phantomJs

```sh
grunt test
```

### Yeoman Subgenerators
There are generators for *directive*,*partial*,*service*, *filter*, *module*, and *modal*.

```sh
cd src
yo cg-angular:directive my-awesome-directive
yo cg-angular:partial my-partial
yo cg-angular:service my-service
yo cg-angular:filter my-filter
yo cg-angular:module my-module
yo cg-angular:modal my-modal
```

### To Do
Need to add authentication system next.

### Contributing
Don't like the way I did something? I would love to hear your input on this.