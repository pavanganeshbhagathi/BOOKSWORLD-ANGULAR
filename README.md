# InstrumentsWorldAngularJSONRESTAPI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


INSTRUMENTS WORLD
-----------------

1. Create a new Angular Project ng new  InstrumentsWorld-Angular-JSON-RESTAPI
2. cd InstrumentsWorld-Angular-JSON-RESTAPI
3. Go to InstrumentsWorld-Angular-JSON-RESTAPI folder through Windows Library or in VSCODE and create a new  folder named server
4. open with GIT BASH HERE in side Server.
5. type npm init or npm init --s in GIT BASH and the following things to be filled and displayed.
6. package name: (server)
version: (1.0.0)
description: AngularProjectWith JSON CRUD
entry point: (index.js)
test command:
git repository:
keywords:
author: YashasreeTummala
license: (ISC)
About to write to A:\DOWNLOADS_PERSONAL\INTERESTED_IN\PROGRAD-FACE\SP

{
  "name": "server",
  "version": "1.0.0",
  "description": "AngularProjectWith JSONCRUD\u001b[D\u001b[D\u001b[D
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "YashasreeTummala",
  "license": "ISC"
}


Is this OK? (yes)

7. Open https://www.npmjs.com/package/json-server (it helps us to create a JSON Server and follow the same procedure as described in it.)
8. copy npm install -g json-server, then server installs successfully.
9. create a json file inside the server using touch command.  touch db.json
10. open db.json and create an object which consists of array of objects. (This is how JSON file will be)
11. {
	"users":[]
}

12. Now run and start the JSON Server. json-server --watch db.json , the following things are displayed
 \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/users

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...

13. Let the server watch do not close it and type nothing.
14. copy http://localhost:3000/users and paste in browser you can see your json file content.

15. Before we begin let's install Angular Material, ng add @angular/material [Source: https://material.angular.io/guide/getting-started]  

16. Now based on our requirements we need to import some modules and store in app.module.ts.
17. Program execution begins from index.html, where it is redirected to <app-root> Component which is actually present in app.component.html. and its associated CSS & TS files are in same folder.
18. We need to update app.component.html file with multiple components for view display (It preserves the order i.e., in whichever the order we give the same order id shown on browser)
19. 

(SHIFT + ALT + DOT)

11. ng g i interface/registerModel
12. ng g service service/register
13. 






For table add/edit/delete view Practice-CRUDPractice.
For Login/Register Dialog view Lab MaterialForms


################       IMAGE SLIDESHOW         ###################
Installation:
				npm i ng-image-slider
				npm install ng-image-slider --save

Reference : https://www.npmjs.com/package/ng-image-slider
Github Reference : https://github.com/sanjayV/ng-image-slider
Demo : https://sanjayv.github.io/ng-image-slider/
