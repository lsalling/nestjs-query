(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return c}));var n=r(1),s=(r(0),r(180));const a={title:"Assemblers"},o={id:"concepts/assemblers",title:"Assemblers",description:"Assemblers are used to translate your DTO into the underlying database type and back.",source:"@site/docs/concepts/assemblers.md",permalink:"/nestjs-query/docs/concepts/assemblers",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/concepts/assemblers.md",sidebar:"docs",previous:{title:"Services",permalink:"/nestjs-query/docs/concepts/services"},next:{title:"Getting Started",permalink:"/nestjs-query/docs/typeorm/getting-started"}},i=[{value:"When to use Assemblers",id:"when-to-use-assemblers",children:[]},{value:"ClassTransformerAssembler",id:"classtransformerassembler",children:[]},{value:"AbstractAssembler",id:"abstractassembler",children:[{value:"Converting the Query",id:"converting-the-query",children:[]},{value:"Converting the DTO",id:"converting-the-dto",children:[]},{value:"Converting the Entity",id:"converting-the-entity",children:[]}]},{value:"AssemblerQueryService",id:"assemblerqueryservice",children:[]},{value:"Registering Your Assembler",id:"registering-your-assembler",children:[]}],l={rightToc:i};function c({components:e,...t}){return Object(s.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Assemblers are used to translate your DTO into the underlying database type and back."),Object(s.b)("h2",{id:"when-to-use-assemblers"},"When to use Assemblers"),Object(s.b)("p",null,"In most cases an Assembler will not be required because your Entity and DTO will be the same shape."),Object(s.b)("p",null,"The only time you need to define an assembler is when the DTO and Entity are different. The most common scenarios are"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Additional computed fields and you do not want to include the business logic in your DTO definition."),Object(s.b)("li",{parentName:"ul"},"Different field names because of poorly named columns in the database or to make a DB change passive to the end user.")),Object(s.b)("h2",{id:"classtransformerassembler"},"ClassTransformerAssembler"),Object(s.b)("p",null,"In most cases the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/typestack/class-transformer"}),"class-transformer")," package will properly map back and forth. Because of this there is a ",Object(s.b)("inlineCode",{parentName:"p"},"ClassTransformerAssembler")," that leverages the ",Object(s.b)("inlineCode",{parentName:"p"},"plainToClass")," method."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"NOTE")," The ",Object(s.b)("inlineCode",{parentName:"p"},"ClassTransformerAssembler")," is the default implementation if an ",Object(s.b)("inlineCode",{parentName:"p"},"Assembler")," is not manually defined."),Object(s.b)("p",null,"If you find yourself in a scenario where you need to compute values and you dont want to add the business logic to your DTO you can extend the ",Object(s.b)("inlineCode",{parentName:"p"},"ClassTransformerAssembler"),"."),Object(s.b)("p",null,"Lets take a simple example, where we have ",Object(s.b)("inlineCode",{parentName:"p"},"TodoItemDTO")," and we want to compute the ",Object(s.b)("inlineCode",{parentName:"p"},"age"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { Assembler, ClassTransformerAssembler } from '@nestjs-query/core';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n// `@Assembler` decorator will register the assembler with `nestjs-query` and\n// the QueryService service will be able to auto discover it.\n@Assembler(TodoItemDTO, TodoItemEntity)\nexport class TodoItemAssembler extends ClassTransformerAssembler<TodoItemDTO, TodoItemEntity> {\n  convertToDTO(entity: TodoItemEntity): TodoItemDTO {\n    const dto = super.convertToDTO(entity);\n    // compute the age\n    dto.age = Date.now() - entity.created.getMilliseconds();\n    return dto;\n  }\n}\n")),Object(s.b)("p",null,"While this example is fairly trivial, the same pattern should apply for more complex scenarios."),Object(s.b)("h2",{id:"abstractassembler"},"AbstractAssembler"),Object(s.b)("p",null,"To create your own ",Object(s.b)("inlineCode",{parentName:"p"},"Assembler")," extend the ",Object(s.b)("inlineCode",{parentName:"p"},"AbstractAssembler"),"."),Object(s.b)("p",null,"Lets assume we have the following ",Object(s.b)("inlineCode",{parentName:"p"},"UserDTO"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType } from '@nestjs/graphql';\n\n@ObjectType('User')\nclass UserDTO {\n  @FilterableField()\n  firstName!: string;\n\n  @FilterableField()\n  lastName!: string;\n\n  @FilterableField()\n  emailAddress!: string;\n}\n\n")),Object(s.b)("p",null,"But you inherited a DB schema that has names that are not as user friendly."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import {Entity, Column} from 'typeorm'\n\n@Entity()\nclass UserEntity {\n  @Column()\n  first!: string;\n\n  @Column()\n  last!: string;\n\n  @Column()\n  email!: string;\n}\n")),Object(s.b)("p",null,"To properly translate the ",Object(s.b)("inlineCode",{parentName:"p"},"UserDTO")," into the ",Object(s.b)("inlineCode",{parentName:"p"},"UserEntity")," and back you can extend an ",Object(s.b)("inlineCode",{parentName:"p"},"Assembler")," that the ",Object(s.b)("inlineCode",{parentName:"p"},"QueryService")," will use."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { AbstractAssembler, Assembler, Query, transformQuery } from '@nestjs-query/core';\nimport { UserDTO } from './dto/user.dto';\nimport { UserEntity } from './user.entity';\n\n// `@Assembler` decorator will register the assembler with `nestjs-query` and\n// the QueryService service will be able to auto discover it.\n@Assembler(UserDTO, UserEntity)\nexport class UserAssembler extends AbstractAssembler<UserDTO, UserEntity> {\n  convertQuery(query: Query<UserDTO>): Query<UserEntity> {\n    return transformQuery(query, {\n      firstName: 'first',\n      lastName: 'last',\n      emailAddress: 'email',\n    });\n  }\n\n  convertToDTO(entity: UserEntity): UserDTO {\n    const dto = new UserDTO();\n    dto.firstName = entity.first;\n    dto.lastName = entity.last;\n    return dto;\n  }\n\n  convertToEntity(dto: UserDTO): UserEntity {\n    const entity = new UserEntity();\n    entity.first = dto.firstName;\n    entity.last = dto.lastName;\n    return entity;\n  }\n}\n\n")),Object(s.b)("p",null,"The first thing to look at is the ",Object(s.b)("inlineCode",{parentName:"p"},"@Assembler")," decorator. It will register the assembler with ",Object(s.b)("inlineCode",{parentName:"p"},"nestjs-query")," so ",Object(s.b)("inlineCode",{parentName:"p"},"QueryServices")," can look it up later.  "),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"@Assembler(UserDTO, UserEntity)\n")),Object(s.b)("h3",{id:"converting-the-query"},"Converting the Query"),Object(s.b)("p",null,"Next the ",Object(s.b)("inlineCode",{parentName:"p"},"convertQuery")," method."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"convertQuery(query: Query<UserDTO>): Query<UserEntity> {\n  return transformQuery(query, {\n    firstName: 'first',\n    lastName: 'last',\n    emailAddress: 'email',\n  });\n}\n")),Object(s.b)("p",null,"This method leverages the ",Object(s.b)("inlineCode",{parentName:"p"},"transformQuery")," function from ",Object(s.b)("inlineCode",{parentName:"p"},"@nestjs-query/core"),". This method will remap all fields specified in the field map to correct field name."),Object(s.b)("p",null,"In this example"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"{\n  filter: {\n    firstName: { eq: 'Bob' },\n    lastName: { eq: 'Yukon' },\n    emailAddress: { eq: 'bob@yukon.com' }\n  }\n}\n")),Object(s.b)("p",null,"Would be transformed into."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"{\n  filter: {\n    first: { eq: 'Bob' },\n    last: { eq: 'Yukon' },\n    email: { eq: 'bob@yukon.com' }\n  }\n}\n")),Object(s.b)("h3",{id:"converting-the-dto"},"Converting the DTO"),Object(s.b)("p",null,"The next piece is the ",Object(s.b)("inlineCode",{parentName:"p"},"convertToDTO"),", which will convert the entity into a the correct DTO."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"convertToDTO(entity: UserEntity): UserDTO {\n  const dto = new UserDTO();\n  dto.firstName = entity.first;\n  dto.lastName = entity.last;\n  return dto;\n}\n")),Object(s.b)("h3",{id:"converting-the-entity"},"Converting the Entity"),Object(s.b)("p",null,"The next piece is the ",Object(s.b)("inlineCode",{parentName:"p"},"convertToEntity"),", which will convert the DTO into a the correct entity."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"convertToEntity(dto: UserDTO): UserEntity {\n  const entity = new UserEntity();\n  entity.first = dto.firstName;\n  entity.last = dto.lastName;\n  return entity;\n}\n")),Object(s.b)("p",null,"This is a pretty basic example but the same pattern should apply to more complex scenarios."),Object(s.b)("h2",{id:"assemblerqueryservice"},"AssemblerQueryService"),Object(s.b)("p",null,"To use your assembler you need to create an ",Object(s.b)("inlineCode",{parentName:"p"},"AssemblerQueryService")," that will wrap a ",Object(s.b)("inlineCode",{parentName:"p"},"QueryService")," to translate back and forth."),Object(s.b)("p",null,"This example wraps a ",Object(s.b)("inlineCode",{parentName:"p"},"TypeOrmQueryService")," to assemble to ",Object(s.b)("inlineCode",{parentName:"p"},"UserDTO")," and ",Object(s.b)("inlineCode",{parentName:"p"},"UserEntity")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { AssemblerQueryService, QueryService } from '@nestjs-query/core';\nimport { InjectTypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { UserDTO } from './user.dto';\nimport { UserAssembler } from './user.assembler';\nimport { UserEntity } from './user.entity';\n\n@QueryService(UserDTO)\nexport class UserService extends AssemblerQueryService<UserDTO, UserEntity> {\n  constructor(\n    assembler: UserAssembler,\n    @InjectTypeOrmQueryService(UserEntity) queryService: QueryService<UserEntity>,\n  ) {\n    super(assembler, queryService);\n  }\n}\n")),Object(s.b)("p",null,"Your resolver should then use the ",Object(s.b)("inlineCode",{parentName:"p"},"UserService")," to fetch records."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { UserDTO } from './user.dto';\nimport { UserService } from './user.service';\n\n@Resolver(() => UserDTO)\nexport class UserResolver extends CRUDResolver(UserDTO) {\n  constructor(readonly service: UserService) {\n    super(service);\n  }\n}\n")),Object(s.b)("h2",{id:"registering-your-assembler"},"Registering Your Assembler"),Object(s.b)("p",null,"Don't forget to register your ",Object(s.b)("inlineCode",{parentName:"p"},"Assembler")," and ",Object(s.b)("inlineCode",{parentName:"p"},"QueryService")," with your module."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"@Module({\n  providers: [/*Other providers*/, UserAssembler, UserService],\n  // ...other module options\n})\nexport class UserModule {}\n")))}c.isMDXComponent=!0},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),s=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=s.a.createContext({}),b=function(e){var t=s.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},m=function(e){var t=b(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=b(r),p=n,d=m["".concat(o,".").concat(p)]||m[p]||u[p]||a;return r?s.a.createElement(d,i({ref:t},c,{components:r})):s.a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);