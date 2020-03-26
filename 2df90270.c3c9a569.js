/*! For license information please see 2df90270.c3c9a569.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(1),r=(n(0),n(180)),o=n(185),l=n(186);const p={title:"Types"},i={id:"graphql/types",title:"Types",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/graphql/types.mdx",permalink:"/nestjs-query/docs/graphql/types",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/types.mdx",sidebar:"docs",previous:{title:"Relations",permalink:"/nestjs-query/docs/graphql/relations"},next:{title:"v0.5.x to v0.6.x",permalink:"/nestjs-query/docs/migration-guides/v0.5.x-to-v0.6.x"}},b=[{value:"ArgsTypes",id:"argstypes",children:[{value:"QueryArgsType",id:"queryargstype",children:[]}]},{value:"ObjectTypes",id:"objecttypes",children:[{value:"ConnectionType",id:"connectiontype",children:[]},{value:"UpdateManyResponseType",id:"updatemanyresponsetype",children:[]},{value:"DeleteManyResponseType",id:"deletemanyresponsetype",children:[]}]},{value:"InputTypes",id:"inputtypes",children:[{value:"FilterType",id:"filtertype",children:[]},{value:"CursorPagingType",id:"cursorpagingtype",children:[]},{value:"SortType",id:"sorttype",children:[]},{value:"PartialInputType",id:"partialinputtype",children:[]},{value:"CreateOneInputType",id:"createoneinputtype",children:[]},{value:"CreateManyInputType",id:"createmanyinputtype",children:[]},{value:"UpdateOneInputType",id:"updateoneinputtype",children:[]},{value:"UpdateManyInputType",id:"updatemanyinputtype",children:[]},{value:"DeleteOneInputType",id:"deleteoneinputtype",children:[]},{value:"DeleteManyInputType",id:"deletemanyinputtype",children:[]}]}],c={rightToc:b};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," provides a number of types. Most will be automatically generated for you when you create a\nresolver. However, you can use many of the types in your own code for custom endpoints."),Object(r.b)("p",null,"The following examples are based on the following ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItemDTO")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),Object(r.b)("h2",{id:"argstypes"},"ArgsTypes"),Object(r.b)("h3",{id:"queryargstype"},"QueryArgsType"),Object(r.b)("p",null,"Args type used in ",Object(r.b)("inlineCode",{parentName:"p"},"read")," endpoints to allow ",Object(r.b)("inlineCode",{parentName:"p"},"filtering"),", ",Object(r.b)("inlineCode",{parentName:"p"},"paging"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"sorting"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"QueryArgsType")," will generate an ",Object(r.b)("inlineCode",{parentName:"p"},"ArgsType")," that will require the user to provide three arguments."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filter?")," - A filter that should be used to find records to update. See ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#filtertype"}),"FilterType")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"paging?")," - Options to page of result. See ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#cursorpagingtype"}),"CursorPagingType")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sorting?")," - Optional array to allow sorting of results. See ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#sorttype"}),"SortType"),".")),Object(r.b)("h4",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { QueryArgsType } from '@nestjs-query/query-graphql';\nimport { ArgsType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@ArgsType()\nexport class TodoItemQuery extends QueryArgsType(TodoItemDTO) {}\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"objecttypes"},"ObjectTypes"),Object(r.b)("h3",{id:"connectiontype"},"ConnectionType"),Object(r.b)("p",null,"Implementation of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/relay/graphql/connections.htm"}),"connections"),". Useful for large result sets\nwhere the end user should be able to page through the results."),Object(r.b)("h4",{id:"usage-1"},"Usage"),Object(r.b)(o.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"code",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { ConnectionType } from '@nestjs-query/query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemConnection = ConnectionType(TodoItemDTO);\n"))),Object(r.b)(l.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"scalar ConnectionCursor\n\ntype TodoItemConnection {\n  pageInfo: PageInfo!\n  edges: [TodoItemEdge!]!\n}\n\ntype TodoItemEdge {\n  node: TodoItem!\n  cursor: ConnectionCursor!\n}\n\ntype PageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n  startCursor: ConnectionCursor\n  endCursor: ConnectionCursor\n}\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"updatemanyresponsetype"},"UpdateManyResponseType"),Object(r.b)("p",null,"Response from ",Object(r.b)("inlineCode",{parentName:"p"},"updateMany")," mutations."),Object(r.b)("h4",{id:"usage-2"},"Usage"),Object(r.b)(o.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"code",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { UpdateManyResponseType } from '@nestjs-query/query-graphql';\n\nexport const UpdateManyResponse = UpdateManyResponseType()\n"))),Object(r.b)(l.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type UpdateManyResponse {\n  updatedCount: Int!\n}\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"deletemanyresponsetype"},"DeleteManyResponseType"),Object(r.b)("p",null,"Response from ",Object(r.b)("inlineCode",{parentName:"p"},"deleteMany")," mutations."),Object(r.b)("h4",{id:"usage-3"},"Usage"),Object(r.b)(o.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"code",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { DeleteManyResponseType } from '@nestjs-query/query-graphql';\n\nexport const UpdateManyResponse = DeleteManyResponseType()\n"))),Object(r.b)(l.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type DeleteManyResponse {\n  deletedCount: Int!\n}\n")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"inputtypes"},"InputTypes"),Object(r.b)("h3",{id:"filtertype"},"FilterType"),Object(r.b)("p",null,"GraphQL implementation of the ",Object(r.b)("inlineCode",{parentName:"p"},"@nestjs-query/core")," ",Object(r.b)("inlineCode",{parentName:"p"},"Filter")," type."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"FilterType")," is dynamically created based on the fields in the ",Object(r.b)("inlineCode",{parentName:"p"},"DTO")," annotated with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/nestjs-query/docs/graphql/dtos#filterablefield"}),"@FilterableField"),"."),Object(r.b)("p",null,"Along with the dynamically create fields filter also has the following static fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"and")," - Allows for joining multiple ",Object(r.b)("inlineCode",{parentName:"p"},"Filters")," with using an ",Object(r.b)("inlineCode",{parentName:"p"},"AND")," condition."),Object(r.b)("p",{parentName:"li"},"For example, find all todo items that ",Object(r.b)("inlineCode",{parentName:"p"},"start with 'Foo' AND end in 'Bar'"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'todoItems(filter: {\n  and: [\n    {title: {like: "Foo%"}},\n    {title: {like: "%Bar"}},\n  ]\n}) {\n  #...select your fields\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"or")," - Allows for joining multiple ",Object(r.b)("inlineCode",{parentName:"p"},"Filters")," using an ",Object(r.b)("inlineCode",{parentName:"p"},"OR")," condition."),Object(r.b)("p",{parentName:"li"},"  For example, find all todo items that ",Object(r.b)("inlineCode",{parentName:"p"},"(are completed AND start with 'Foo') OR (are not completed and end in 'Bar')"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'todoItems(filter: {\n  or: [\n    {title: {eq: "Foo"}, completed: {is: true}},\n    {title: {eq: "Bar"}, completed: {is: false}},\n  ]\n}) {\n  #...select your fields\n}\n')))),Object(r.b)(o.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"code",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterType } from '@nestjs-query/query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemFilter = FilterType(TodoItemDTO)\n"))),Object(r.b)(l.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"input TodoItemFilter {\n  and: [TodoItemFilter!]\n  or: [TodoItemFilter!]\n  id: IDFilterComparison\n  title: StringFieldComparison\n  completed: BooleanFieldComparison\n  created: DateFieldComparison\n  updated: DateFieldComparison\n}\n\ninput IDFilterComparison {\n  is: Boolean\n  isNot: Boolean\n  eq: ID\n  neq: ID\n  gt: ID\n  gte: ID\n  lt: ID\n  lte: ID\n  like: ID\n  notLike: ID\n  iLike: ID\n  notILike: ID\n  in: [ID!]\n  notIn: [ID!]\n}\n\ninput StringFieldComparison {\n  is: Boolean\n  isNot: Boolean\n  eq: String\n  neq: String\n  gt: String\n  gte: String\n  lt: String\n  lte: String\n  like: String\n  notLike: String\n  iLike: String\n  notILike: String\n  in: [String!]\n  notIn: [String!]\n}\n\ninput BooleanFieldComparison {\n  is: Boolean\n  isNot: Boolean\n}\n\ninput DateFieldComparison {\n  is: Boolean\n  isNot: Boolean\n  eq: DateTime\n  neq: DateTime\n  gt: DateTime\n  gte: DateTime\n  lt: DateTime\n  lte: DateTime\n  in: [DateTime!]\n  notIn: [DateTime!]\n}\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"cursorpagingtype"},"CursorPagingType"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CursorPagingType")," allows you to limit or page through a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#ConnectionType"}),"ConnectionType"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," This type is automatically created when using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#queryargstype"}),"QueryArgsType"),"."),Object(r.b)("p",null,"For more comprehensive examples take a look at the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/nestjs-query/docs/graphql/queries#paging"}),"Paging Docs")),Object(r.b)("h4",{id:"forward-paging"},"Forward Paging"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"first")," - The number of records to return. This is the equivalent to an ",Object(r.b)("inlineCode",{parentName:"li"},"limit"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"after?")," - The cursor of the ",Object(r.b)("inlineCode",{parentName:"li"},"node")," from a connection to start from.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The most common use case is to set this to the ",Object(r.b)("inlineCode",{parentName:"li"},"endCursor")," from a ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#connectiontype"}),"ConnectionType"),".")))),Object(r.b)("h4",{id:"backward-paging"},"Backward Paging"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"before")," - The cursor of the node in a connection to start from.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The most common use case is to set this to the ",Object(r.b)("inlineCode",{parentName:"li"},"startCursor")," from a ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#connectiontype"}),"ConnectionType"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"last")," - The number of records before the ",Object(r.b)("inlineCode",{parentName:"li"},"before")," parameter to return.")),Object(r.b)(o.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"code",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CursorPagingType } from '@nestjs-query/query-graphql';\n\nexport const CursorPaging = CursorPagingType()\n"))),Object(r.b)(l.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"scalar ConnectionCursor\n\ninput CursorPaging {\n  before: ConnectionCursor\n  after: ConnectionCursor\n  first: Int\n  last: Int\n}\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sorttype"},"SortType"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"SortType")," allows you to sort results."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," This type is automatically created when using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#queryargstype"}),"QueryArgsType"),"."),Object(r.b)("p",null,"For more comprehensive examples take a look at the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/nestjs-query/docs/graphql/queries#sorting"}),"Sorting Docs")),Object(r.b)("h4",{id:"fields"},"Fields"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"field")," - The field to sort on. The is an ENUM of ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/nestjs-query/docs/graphql/dtos#filterablefield"}),"@FilterableFields")," defined in the DTO."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"direction")," - The direction to sort the field ",Object(r.b)("inlineCode",{parentName:"li"},"ASC")," or ",Object(r.b)("inlineCode",{parentName:"li"},"DESC"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nulls?")," - On supported storage engines you can specify the null sort order ",Object(r.b)("inlineCode",{parentName:"li"},"NULLS_FIRST"),", ",Object(r.b)("inlineCode",{parentName:"li"},"NULLS_LAST"))),Object(r.b)(o.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"code",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CursorPagingType } from '@nestjs-query/query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemSort = SortType(TodoItemDTO)\n"))),Object(r.b)(l.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"input TodoItemSort {\n  field: TodoItemSortFields!\n  direction: SortDirection!\n  nulls: SortNulls\n}\n\nenum TodoItemSortFields {\n  id\n  title\n  completed\n  created\n  updated\n}\n\nenum SortDirection {\n  ASC\n  DESC\n}\n\nenum SortNulls {\n  NULLS_FIRST\n  NULLS_LAST\n}\n\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"partialinputtype"},"PartialInputType"),Object(r.b)("p",null,"Utility type to create a ",Object(r.b)("inlineCode",{parentName:"p"},"Partial")," from an ",Object(r.b)("inlineCode",{parentName:"p"},"ObjectType"),"."),Object(r.b)("p",null,"This is the type used by resolvers when a ",Object(r.b)("inlineCode",{parentName:"p"},"CreateDTOClass")," or ",Object(r.b)("inlineCode",{parentName:"p"},"UpdateDTOClass")," are not specified."),Object(r.b)(o.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"code",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CursorPagingType } from '@nestjs-query/query-graphql';\nimport { InputType } from `@nestjs/graphql`;\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType()\nexport class TodoItemPartialInput extends PartialInput(TodoItemDTO) { }\n"))),Object(r.b)(l.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type TodoItemPartialInput {\n  id: ID\n  title: String\n  completed: Boolean\n  created: DateTime\n  updated: DateTime\n}\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"createoneinputtype"},"CreateOneInputType"),Object(r.b)("p",null,"Input type for ",Object(r.b)("inlineCode",{parentName:"p"},"createOne")," mutations."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," Dont forget to annotate your DTO with ",Object(r.b)("inlineCode",{parentName:"p"},"@InputType()")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@nestjs/graphql"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," Your DTO should be one that you want to use for input. For example you may not want to let the end user to\nspecify the ",Object(r.b)("inlineCode",{parentName:"p"},"created")," or ",Object(r.b)("inlineCode",{parentName:"p"},"updated")," fields so you would create a new DTO just for input."),Object(r.b)("h4",{id:"usage-4"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CreateOneInputType } from '@nestjs-query/query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemInput')\nexport class TodoItemInputDTO {\n  @IsString()\n  @Field({nullable: true})\n  title?: string;\n\n  @IsBoolean()\n  @Field({nullable: true})\n  completed?: string;\n}\n\n@InputType()\nexport class CreateOneTodoItemInput extends CreateOneInputType(TodoItemDTO, TodoItemInputDTO) {}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"createmanyinputtype"},"CreateManyInputType"),Object(r.b)("p",null,"Input type for ",Object(r.b)("inlineCode",{parentName:"p"},"createMany")," mutations."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," Dont forget to annotate your DTO with ",Object(r.b)("inlineCode",{parentName:"p"},"@InputType()")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@nestjs/graphql"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," Your DTO should be one that you want to use for input. For example you may not want to let the end user to\nspecify the ",Object(r.b)("inlineCode",{parentName:"p"},"created")," or ",Object(r.b)("inlineCode",{parentName:"p"},"updated")," fields so you would create a new DTO just for input."),Object(r.b)("h4",{id:"usage-5"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CreateManyInputType } from '@nestjs-query/query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemInput')\nexport class TodoItemInputDTO {\n  @IsString()\n  @Field({nullable: true})\n  title?: string;\n\n  @IsBoolean()\n  @Field({nullable: true})\n  completed?: string;\n}\n\n@InputType()\nexport class CreateManyTodoItemsInput extends CreateManyInputType(TodoItemDTO, TodoItemInputDTO) {}\n")),Object(r.b)("h3",{id:"updateoneinputtype"},"UpdateOneInputType"),Object(r.b)("p",null,"InputType type for ",Object(r.b)("inlineCode",{parentName:"p"},"updateOne")," mutations."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"UpdateOneInputType")," will generate an ",Object(r.b)("inlineCode",{parentName:"p"},"InputType")," that will require the user to provide two fields."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," - The id of the recrord to update"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"update")," - A record with fields to update.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," Dont forget to annotate your DTO with ",Object(r.b)("inlineCode",{parentName:"p"},"@InputType()")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@nestjs/graphql"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," Your DTO should be one that you want to use for updates. For example you may not want to let the end user to\nupdate the ",Object(r.b)("inlineCode",{parentName:"p"},"created")," or ",Object(r.b)("inlineCode",{parentName:"p"},"updated")," fields so you would create a new DTO just for updates."),Object(r.b)("h4",{id:"usage-6"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { UpdateOneInputType } from '@nestjs-query/query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemUpdate')\nexport class TodoItemUpdateDTO {\n  @IsOptional()\n  @IsString()\n  @Field({ nullable: true })\n  title?: string;\n\n  @IsOptional()\n  @IsBoolean()\n  @Field({ nullable: true })\n  completed?: boolean;\n}\n\n@InputType()\nexport class UpdateOneTodoItemInput extends UpdateOneInputType(TodoItemDTO, TodoItemUpdateDTO) {}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"updatemanyinputtype"},"UpdateManyInputType"),Object(r.b)("p",null,"Input type for ",Object(r.b)("inlineCode",{parentName:"p"},"updateMany")," mutations."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"UpdateOneInputType")," will generate an ",Object(r.b)("inlineCode",{parentName:"p"},"InputType")," that will require the user to provide two arguments."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filter")," - The filter that should be used to find records to update. See ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#filtertype"}),"FilterType")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"update")," - The update to apply to each record found.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," Dont forget to annotate your DTO with ",Object(r.b)("inlineCode",{parentName:"p"},"@InputType()")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@nestjs/graphql"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," Your DTO should be one that you want to use for input. For example you may not want to let the end user to\nspecify the ",Object(r.b)("inlineCode",{parentName:"p"},"created")," or ",Object(r.b)("inlineCode",{parentName:"p"},"updated")," fields so you would create a new DTO just for input."),Object(r.b)("h4",{id:"usage-7"},"Usage"),Object(r.b)("p",null,"In this example we use the read DTO for the FilterType, and a different update DTO."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CreateOneInputType, FilterType } from '@nestjs-query/query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemUpdate')\nexport class TodoItemUpdateDTO {\n  @IsOptional()\n  @IsString()\n  @Field({ nullable: true })\n  title?: string;\n\n  @IsOptional()\n  @IsBoolean()\n  @Field({ nullable: true })\n  completed?: boolean;\n}\n\n@InputType()\nexport class UpdateManyTodoItemsInput extends UpdateManyInputType(\n  TodoItemDTO, // filter\n  TodoItemUpdateDTO // update DTO\n) {}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"deleteoneinputtype"},"DeleteOneInputType"),Object(r.b)("p",null,"InputType type for ",Object(r.b)("inlineCode",{parentName:"p"},"deleteOne")," mutations."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"DeleteOneInputType")," will generate an ",Object(r.b)("inlineCode",{parentName:"p"},"InputType")," that will require the user to provide the id of the record to delete."),Object(r.b)("h4",{id:"usage-8"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { DeleteOneInputType } from '@nestjs-query/query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType()\nexport class DeleteOneInput extends DeleteOneInputType() {}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"deletemanyinputtype"},"DeleteManyInputType"),Object(r.b)("p",null,"Input type type for ",Object(r.b)("inlineCode",{parentName:"p"},"deleteMany")," mutations."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"DeleteManyInputType")," will generate an ",Object(r.b)("inlineCode",{parentName:"p"},"InputType")," that will require the user to provide:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filter")," - A filter used to find records to delete. See ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#filtertype"}),"FilterType"))),Object(r.b)("h4",{id:"usage-9"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CreateOneInputType, FilterType } from '@nestjs-query/query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType()\nexport class DeleteManyTodoItemsInput extends DeleteManyInputType(TodoItemDTO) {}\n")))}s.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},s=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(m,p({ref:t},b,{components:n})):r.a.createElement(m,p({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},181:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var p in a)n.call(a,p)&&a[p]&&e.push(p)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},185:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(181),l=n.n(o),p=n(93),i=n.n(p);const b=37,c=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:p}=e,[s,u]=Object(a.useState)(o),d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":s===e,className:l()("tab-item",i.a.tabItem,{"tab-item--active":s===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case c:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(d,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===s)[0]))}},186:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);