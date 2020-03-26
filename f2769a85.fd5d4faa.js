/*! For license information please see f2769a85.fd5d4faa.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{172:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(1),l=(a(0),a(180)),r=a(185),o=a(186);const p={title:"Mutations"},i={id:"graphql/mutations",title:"Mutations",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/graphql/mutations.mdx",permalink:"/nestjs-query/docs/graphql/mutations",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/mutations.mdx",sidebar:"docs",previous:{title:"Queries",permalink:"/nestjs-query/docs/graphql/queries"},next:{title:"Relations",permalink:"/nestjs-query/docs/graphql/relations"}},b=[{value:"Create One",id:"create-one",children:[]},{value:"Create Many",id:"create-many",children:[]},{value:"Update One",id:"update-one",children:[]},{value:"Update Many",id:"update-many",children:[]},{value:"Delete One",id:"delete-one",children:[]},{value:"Delete Many",id:"delete-many",children:[]}],c={rightToc:b};function d({components:e,...t}){return Object(l.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./resolvers"}),"CRUDResolver")," automatically exposes six mutation endpoints. The endpoints names will be derived\nfrom name provided to ",Object(l.b)("inlineCode",{parentName:"p"},"@ObjectType")," or the class name."),Object(l.b)("p",null,"The following examples are based on the following ",Object(l.b)("inlineCode",{parentName:"p"},"TodoItemDTO")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),Object(l.b)("p",null,"In the following examples you will see the following endpoints referenced"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"createOneTodoItem")," - graphql endpoint to create a single record.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"createManyTodoItems")," - graphql endpoint to create multiple records,")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"updateOneTodoItem")," - graphql endpoint to update a single record by id.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"updateManyTodoItems")," - graphql endpoint update multiple records with a filter,")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"deleteOneTodoItem")," - graphql endpoint to delete one record by id.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"deleteManyTodoItems")," - graphql endpoint to delete multiple records with a filter."))),Object(l.b)("h3",{id:"create-one"},"Create One"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose a ",Object(l.b)("inlineCode",{parentName:"p"},"createOne")," mutation using the name of the DTO to name the mutation."),Object(l.b)("p",null,"In this example we create a single ",Object(l.b)("inlineCode",{parentName:"p"},"TodoItem"),", the input by default will be a ",Object(l.b)("inlineCode",{parentName:"p"},"Partial")," of the DTO."),Object(l.b)(r.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createOneTodoItem(\n    input: { todoItem: { title: "Create One Todo Item", completed: false } }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),Object(l.b)(o.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "createOneTodoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-14T09:01:35.834Z",\n      "updated": "2020-01-14T09:01:35.834Z"\n    }\n  }\n}\n')))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"create-many"},"Create Many"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose a ",Object(l.b)("inlineCode",{parentName:"p"},"createMany")," mutation using the name of the DTO to name the mutation."),Object(l.b)("p",null,"In this example we create multiple ",Object(l.b)("inlineCode",{parentName:"p"},"TodoItems"),", the each record is a ",Object(l.b)("inlineCode",{parentName:"p"},"Partial")," of the DTO."),Object(l.b)("h4",{id:"examples"},"Examples"),Object(l.b)("p",null,"The following example creates two ",Object(l.b)("inlineCode",{parentName:"p"},"TodoItems"),"."),Object(l.b)(r.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createManyTodoItems(\n    input: {\n      todoItems: [\n        { title: "Create Many Todo Items - 1", completed: false }\n        { title: "Create Many Todo Items - 2", completed: true }\n      ]\n    }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),Object(l.b)(o.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "createManyTodoItems": [\n      {\n        "id": "2",\n        "title": "Create Many Todo Items - 1",\n        "completed": false,\n        "created": "2020-01-14T09:01:55.110Z",\n        "updated": "2020-01-14T09:01:55.110Z"\n      },\n      {\n        "id": "3",\n        "title": "Create Many Todo Items - 2",\n        "completed": true,\n        "created": "2020-01-14T09:01:55.110Z",\n        "updated": "2020-01-14T09:01:55.110Z"\n      }\n    ]\n  }\n}\n')))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"update-one"},"Update One"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose an ",Object(l.b)("inlineCode",{parentName:"p"},"updateOne")," mutation that takes two fields:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"id"),": The id of the record to update."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"update"),": The values to update on the record. This is a partial so you only have to pass in the values you want to\nchange.")),Object(l.b)("h4",{id:"examples-1"},"Examples"),Object(l.b)("p",null,"The following example updates the record with ",Object(l.b)("inlineCode",{parentName:"p"},"id")," equal to ",Object(l.b)("inlineCode",{parentName:"p"},"1")," to ",Object(l.b)("inlineCode",{parentName:"p"},"completed=true")),Object(l.b)(r.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"mutation {\n  updateOneTodoItem(input: { id: 1, update: { completed: true } }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),Object(l.b)(o.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "updateOneTodoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": true,\n      "created": "2020-01-14T07:00:31.763Z",\n      "updated": "2020-01-14T09:02:28.167Z"\n    }\n  }\n}\n')))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"update-many"},"Update Many"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose an ",Object(l.b)("inlineCode",{parentName:"p"},"updateMany")," mutation that takes two fields:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"filter"),": The filter to use to find the records to update.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"NOTE")," The filter ",Object(l.b)("strong",{parentName:"li"},"CANNOT")," be an empty object. This prevents accidental updating of all records."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"update"),": The values to update on the record. This is a partial so you only have to pass in the values you want to\nchange.")),Object(l.b)("p",null,"The response contains the number of records updated."),Object(l.b)("h4",{id:"examples-2"},"Examples"),Object(l.b)("p",null,"The following example updates records with an ",Object(l.b)("inlineCode",{parentName:"p"},"id")," equal to 1 or 2 to ",Object(l.b)("inlineCode",{parentName:"p"},"completed=true"),"."),Object(l.b)(r.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"mutation {\n  updateManyTodoItems(\n    input: { filter: { id: { in: [1, 2] } }, update: { completed: true } }\n  ) {\n    updatedCount\n  }\n}\n"))),Object(l.b)(o.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "updateManyTodoItems": {\n      "updatedCount": 2\n    }\n  }\n}\n')))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delete-one"},"Delete One"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose a ",Object(l.b)("inlineCode",{parentName:"p"},"deleteOne")," mutation that allows you to delete a record by id:"),Object(l.b)("h4",{id:"examples-3"},"Examples"),Object(l.b)("p",null,"The following example deletes the record with an id equal to 1."),Object(l.b)(r.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"mutation {\n  deleteOneTodoItem(input: { id: 1 }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),Object(l.b)(o.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "deleteOneTodoItem": {\n      "title": "Create One Todo Item",\n      "completed": true,\n      "created": "2020-01-14T07:00:31.763Z",\n      "updated": "2020-01-14T09:02:51.429Z"\n    }\n  }\n}\n')))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delete-many"},"Delete Many"),Object(l.b)("p",null,"The CRUDResolver will by default expose a ",Object(l.b)("inlineCode",{parentName:"p"},"deleteMany")," mutation that takes a ",Object(l.b)("inlineCode",{parentName:"p"},"filter"),":"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"NOTE")," The filter ",Object(l.b)("strong",{parentName:"p"},"CANNOT")," be an empty object. This prevents accidental deletion of all records."),Object(l.b)("h4",{id:"examples-4"},"Examples"),Object(l.b)("p",null,"The following example deletes all records that start with ",Object(l.b)("inlineCode",{parentName:"p"},"Create Many Todo Items"),"."),Object(l.b)(r.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  deleteManyTodoItems(\n    input: { filter: { title: { like: "Create Many Todo Items%" } } }\n  ) {\n    deletedCount\n  }\n}\n'))),Object(l.b)(o.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "deleteManyTodoItems": {\n      "deletedCount": 6\n    }\n  }\n}\n')))))}d.isMDXComponent=!0},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var b=l.a.createContext({}),c=function(e){var t=l.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):p({},t,{},e)),a},d=function(e){var t=c(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=c(a),s=n,m=d["".concat(o,".").concat(s)]||d[s]||u[s]||r;return a?l.a.createElement(m,p({ref:t},b,{components:a})):l.a.createElement(m,p({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var b=2;b<r;b++)o[b]=a[b];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},181:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=l.apply(null,n);o&&e.push(o)}else if("object"===r)for(var p in n)a.call(n,p)&&n[p]&&e.push(p)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},185:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(181),o=a.n(r),p=a(93),i=a.n(p);const b=37,c=39;t.a=function(e){const{block:t,children:a,defaultValue:r,values:p}=e,[d,u]=Object(n.useState)(r),s=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:o()("tab-item",i.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>s.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case c:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(s,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===d)[0]))}},186:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);