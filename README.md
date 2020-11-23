# rick-and-morty
*** 
[actual version](https://nikita-hub000.github.io/rick-and-morty/) is 1.1.0
***

**Git**

created repository on GitHub;

issued readme.md - affixed version, there is a title, a link to the project, instructions on how to deploy the project;

there is a * .gitignore * file, there are exceptions: node_modules, dist and temporary file .DS_Store;

**Webpack**

three types of assembly: develop, build, production - names may be different;

configured hashing of CSS and JS files;

there is a .nojekyll file;

JS is divided into modules;

JS is transformed to ES5;

CSS is minified and vendor prefixes are affixed;

all site functionality is working, the project is posted on GitHub

images and fonts are optimized;


**instructions on how to deploy the project**

1. Create a repository on GitHub and copy it to your computer. Transfer the project work code No. 9 to the local repository. Run git push origin master - all your files will be hosted on the master branch on GitHub. Before you start writing code, create a new branch and switch to it. Give the branch a name - develop.

2. Build a project. Configure assembly of build and dev.

3. Configure hashing of CSS and JS files.

4. Create an empty file named .nojekyll in the project root. By default, GitHub Pages during assembly ignores files whose name begins with the underscore _, which is how many BEM files begin. The .nojekyll file solves this problem. Set up automatic updating of the project page when saving files (hot reload).

5. Set up a webpack for working with images and optimizing them. To do this, install two plugins: file-loader - <https://github.com/webpack-contrib/file-loader> - this plugin is needed so that the webpack can work with different files, for example, with images or fonts. image-webpack-loader - <https://www.npmjs.com/package/image-webpack-loader>

6. Set up two build modes: development and production. This can be done using env – ‘environment variables’. They are available from any part of the program and will be useful to us in the next assignment. 

7. Customize the work with styles depending on the assembly. In dev mode, you need the style-loader package, but in the production assembly, no. The first thing to do is install two packages: npm i style-loader --save-dev # if this package is not available, then styles added via @import will not get into the final assembly npm i optimize-css-assets-webpack-plugin --save-dev # this plugin is needed for additional css optimization

8. For static images connected via an attribute in the img tag, specify the paths like this: img src = "<% = require ('./ images / logo.svg').default %>"

9. Add the settings for downloading fonts to the rules section of the webpack.config.js file: { test: /.(eot|ttf|woff|woff2)$/, loader: 'file-loader?name=./vendor/[name].[ext]' }

10. Break the code into modules.
