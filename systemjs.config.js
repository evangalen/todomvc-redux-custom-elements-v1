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
        // 'babel-plugin-transform-builtin-classes': 'npm:babel-plugin-transform-builtin-classes',
        // 'babel-plugin-transform-es2015-classes': 'npm:babel-plugin-transform-es2015-classes@6.24.1',
        // 'babel-runtime': 'npm:babel-runtime@6.23.0',
        // 'babel-template': 'npm:babel-template@6.25.0',
        // 'babel-template': 'npm:babel-template',
        'redux': 'https://unpkg.com/redux@3.7.2/dist/redux.js',
        'html-template-literal': 'https://unpkg.com/html-template-literal@1.0.6/HTMLTemplateLiteral.js',
        'seamless-immutable': 'https://unpkg.com/seamless-immutable@7.1.3/seamless-immutable.development.js'
        // 'hyperhtml': 'https://unpkg.com/hyperhtml@latest/min.js'
    },
    packages: {
        ".": {
            "defaultExtension": "js"
        }
    },
});
