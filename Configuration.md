-   Package.json: customize-cra
    {
    "devDependencies": {
    "customize-cra": "^1.0.0",
    "react-app-rewired": "^2.2.1"
    },

    "scripts": {

-   "start": "react-scripts start",

*   "start": "react-app-rewired start",

-   "build": "react-scripts build",

*   "build": "react-app-rewired build",

-   "test": "react-scripts test",

*   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
    }

-   Babel plugin module resolver : npm install --save-dev babel-plugin-module-resolver - Specify the plugin in your .babelrc with the custom root or alias. Here's an example:
    {
    "plugins": [
    ["module-resolver", {
    "alias": {
    "~": "./src"

                      }
                  }]
                  ]
              }
          - Editors autocompletion:
                          {
                  "compilerOptions": {
                  "baseUrl": ".",
                  "paths": {
                      "~/*": ["src/*"]
                      }
                  }
              }

-   Create a config-overrides.js file in the root directory
    const { override, useBabelRc } = require("customize-cra");
    module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
    );

-   prettierrc
    {
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "embeddedLanguageFormatting": "auto",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxSingleQuote": false,
    "printWidth": 120,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "all",
    "useTabs": false,
    "vueIndentScriptAndStyle": false
    }
