SystemJS.config({
    transpiler: 'plugin-babel',
    meta: {
        '*.js': {
            babelOptions: {
                es2015: true
    //             plugins: [
    //                 "babel-plugin-transform-es2015-classes",
    //                 ["babel-plugin-transform-builtin-classes", {
    //                     "globals": ["Array", "Error", "HTMLElement"]
    //                 }]
    //             ]
            }
        }
    },
    paths: {
        'npm:': 'https://unpkg.com/'
    },
    map: {
        'plugin-babel': 'https://unpkg.com/systemjs-plugin-babel@0.0.25/plugin-babel.js',
        'systemjs-babel-build': 'https://unpkg.com/systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',
        'redux': 'https://unpkg.com/redux@3.7.2/dist/redux.js',
        'seamless-immutable': 'https://unpkg.com/seamless-immutable@7.1.3/seamless-immutable.development.js',
        'redux-seamless-immutable': 'https://wzrd.in/standalone/redux-seamless-immutable@0.4.0',
        'html-template-tag': 'https://wzrd.in/standalone/html-template-tag@2.0.0',
        'redux-devtools-extension': 'https://unpkg.com/redux-devtools-extension@2.13.2/index.js'
    },
    packages: {
        ".": {
            "defaultExtension": "js"
        }
    },
});
