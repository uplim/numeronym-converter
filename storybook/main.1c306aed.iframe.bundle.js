(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _templateObject,ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),emotion_react_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"));__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var globalStyle=Object(emotion_react_browser_esm.b)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  // 適宜globalに必要そうなCSSを書いていく\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-size: 1.6rem;\n    font-family: 'M PLUS 1 Code', sans-serif;\n  }\n"]))),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators=[function(Story){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(emotion_react_browser_esm.a,{styles:globalStyle}),Object(jsx_runtime.jsx)(Story,{})]})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/components/Buttons/Button.stories.tsx":"./src/stories/components/Buttons/Button.stories.tsx","./stories/components/Buttons/SwitchButton.stories.tsx":"./src/stories/components/Buttons/SwitchButton.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/Buttons/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button_Button})),__webpack_require__.d(__webpack_exports__,"b",(function(){return SwitchButton_SwitchButton}));__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/react/index.js");var _templateObject,emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),colors_black="#000",colors_white="#fff",colors_backgroundPurple="#C9B2E0",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var Button_Button=function Button(_ref){var label=_ref.label,onClick=_ref.onClick;return Object(jsx_runtime.jsx)(ButtonStyle,{onClick:onClick,children:label})};Button_Button.displayName="Button";var ButtonStyle=emotion_styled_browser_esm.a.button(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  width: 100%;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  color: ",";\n  font-size: 16px;\n  border-radius: 100px;\n"])),colors_black,colors_white);try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/Buttons/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var ConverterCard_templateObject,esm=__webpack_require__("./node_modules/react-icons/lib/esm/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js");var ConverterCard_ConverterCard=function ConverterCard(_ref){var label=_ref.label;return Object(jsx_runtime.jsx)(ConverterCardStyle,{children:label})};ConverterCard_ConverterCard.displayName="ConverterCard";var SwitchButton_templateObject,ConverterCardStyle=emotion_styled_browser_esm.a.div(ConverterCard_templateObject||(ConverterCard_templateObject=function ConverterCard_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  width: 27.5rem;\n  height: 3.6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  border-radius: 8px;\n  border: solid 2px ",";\n"])),colors_backgroundPurple,colors_black);try{ConverterCard_ConverterCard.displayName="ConverterCard",ConverterCard_ConverterCard.__docgenInfo={description:"",displayName:"ConverterCard",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/ConverterCard.tsx#ConverterCard"]={docgenInfo:ConverterCard_ConverterCard.__docgenInfo,name:"ConverterCard",path:"src/components/Cards/ConverterCard.tsx#ConverterCard"})}catch(__react_docgen_typescript_loader_error){}var SwitchButton_SwitchButton=function SwitchButton(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(ConverterCard_ConverterCard,{label:"a"}),Object(jsx_runtime.jsx)(SwitchButtonStyle,{children:Object(jsx_runtime.jsx)(esm.b.Provider,{value:{size:"2rem"},children:Object(jsx_runtime.jsx)(index_esm.a,{width:"2rem"})})})]})},SwitchButtonStyle=emotion_styled_browser_esm.a.button(SwitchButton_templateObject||(SwitchButton_templateObject=function SwitchButton_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  width: 5.8rem;\n  height: 3.6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  border-radius: 8px;\n  border: solid 2px ",";\n  transition: width 0.2s ease, height 0.2s ease;\n  &:active {\n    width: 6rem;\n    height: 3.8rem;\n    background-color: ",";\n  }\n"])),colors_white,colors_black,colors_backgroundPurple)},"./src/stories/components/Buttons/Button.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _components_Buttons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Buttons/index.ts");__webpack_exports__.default={component:_components_Buttons__WEBPACK_IMPORTED_MODULE_0__.a,argTypes:{label:{description:"ボタンに表示される文字を渡してください"},onClick:{description:"ボタンをクリックしたときに実行される関数を渡してください"}}};var Default={args:{label:"こんばーと",onClick:function onClick(){return 0}}}},"./src/stories/components/Buttons/SwitchButton.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _components_Buttons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Buttons/index.ts");__webpack_exports__.default={component:_components_Buttons__WEBPACK_IMPORTED_MODULE_0__.b};var Default={}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);