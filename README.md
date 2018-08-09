# DAMIRAdmin
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

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

## STARTING AN ANGULAR 6 / BOOTSTRA 4 PROJECT
I.	Angular environment installation
    1.	Install Node.js and Node Package Manager (npm)
        i.	Download the Windows installer from the Nodes.js® web site. https://nodejs.org/en/
        ii.	Run the installer (the .msi file you downloaded in the previous step.)
        iii. Restart your computer. You won’t be able to run Node.js® until you restart your computer.
        iv.	Check that we have Node and NPM installed correctly. 
            a)	Test Node: node -v
                i.	Current Node version: v8.9.3
            b)	Test npm: npm -v
                i.	Current npm version: v6.3.0
    2.	Install Angular CLI and Typescript
        i.	Install Angular CLI: npm i -g @angular/cli
        ii.	Install Typescript: npm i -g typescript
        iii. Verify the installation: ng -v
            a)	Project version:
                i.	Angular CLI: 			v6.1.1
                ii.	Node: 				v8.9.3 
                iii.	@angular-devkit/architect    	v0.7.1
                iv.	@angular-devkit/core         	v0.7.1
                v.	@angular-devkit/schematics   	v0.7.1
                vi.	@schematics/angular         	 v0.7.1
                vii.	@schematics/update           	v0.7.1
                viii.	rxjs                         		v6.2.2
                ix.	typescript                   		v2.7.2
    3.	Install Visual Studio Code: Visual Studio Code installer for Windows. https://go.microsoft.com/fwlink/?LinkID=534107
II.	Angular set up
    1.	Create the project: ng new projectName --style=scss --routing
        i.	This will replace standard CSS with Sass. https://sass-guidelin.es/
        ii.	This will also enable different page URL for the project via routing
    2.	Install Bootstrap, NG Bootstrap, and Font Awesome.
        https://getbootstrap.com/docs/4.0/getting-started/introduction/
        https://ng-bootstrap.github.io/#/getting-started
        https://fontawesome.com/v4.7.0/
        i.	Navigate to your project and run: npm i -S bootstrap
            a)	Current Bootstrap version: v4.1.3
        ii.	Navigate to your project and run: npm i -S @ng-bootstrap/ng-bootstrap font-awesome angular-font-awesome
            a)	Current Angular Font Awesome version: v3.1.2
            b)	Current Font Awesome version: v4.7.0
            c)	Current NG Bootstrap version: v2.2.2    
    3.	Import NG Bootstrap & Font Awesome to your project. To open your project with VS code, run: code .
        i.	src/styles.scss:
            a)	@import "~bootstrap/dist/css/bootstrap.min.css";
            b)	@import "~font-awesome/css/font-awesome.min.css";
        ii.	src/app/app.module.ts
            a)	import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
            b)	import { AngularFontAwesomeModule } from 'angular-font-awesome';
        iii.	src/app/app.module.ts @NgModule import
            a)	NgbModule.forRoot(),
            b)	AngularFontAwesomeModule 
    4.	Launch your project. You can launch your project via VS built-in terminal. Press Ctrl + ~
        i.	Run: ng serve -o
III.	Development
    1.	Generating new component(s): ng g c componentName
    2.	Generating new services(s): ng g s serviceName

