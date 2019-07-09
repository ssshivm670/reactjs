initailize node
    npm init
install react and react-dom
    npm i react react-dom
install webpack on dev server
    npm i --save-dev webpack webpack-dev-server webpack-cli

install babel(babel preset react, babel preset env, babel loader, html webpack plugin)
    npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin

create webpack config file in root project folder
add stuffs in config file add entry point

create src folder

create a template HTML file in src and then point to that template file in webpack.config.js 
in plugins

config babel by creating .babelrc in root folder 
add {"presets": ["env","react"]} in that file

edit package.json file 
there in script add 
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"

--open to open default browser --hot to autoreload on saveing something

write react code in index.js
happy codeing!!!