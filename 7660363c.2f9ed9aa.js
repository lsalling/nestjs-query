/*! For license information please see 7660363c.2f9ed9aa.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(1),o=(n(0),n(180)),r=n(185),i=n(186);const l={title:"Relations"},s={id:"graphql/relations",title:"Relations",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/graphql/relations.mdx",permalink:"/nestjs-query/docs/graphql/relations",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/relations.mdx",sidebar:"docs",previous:{title:"Mutations",permalink:"/nestjs-query/docs/graphql/mutations"},next:{title:"Types",permalink:"/nestjs-query/docs/graphql/types"}},b=[{value:"Relation Options",id:"relation-options",children:[]},{value:"Examples",id:"examples",children:[{value:"One Relation",id:"one-relation",children:[]},{value:"Many Relation",id:"many-relation",children:[]},{value:"Custom Relation Name",id:"custom-relation-name",children:[]},{value:"Disable Reads",id:"disable-reads",children:[]},{value:"Disable Updates",id:"disable-updates",children:[]},{value:"Disable Removes",id:"disable-removes",children:[]},{value:"Guards, Pipes and Filters",id:"guards-pipes-and-filters",children:[]}]},{value:"Relation Mixin",id:"relation-mixin",children:[{value:"Relatable",id:"relatable",children:[]}]}],p={rightToc:b};function m({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./resolvers#crudresolver"}),"CRUDResolver")," you can specify relations that should be exposed for the DTO using the ",Object(o.b)("inlineCode",{parentName:"p"},"relations")," option."),Object(o.b)("p",null,"When loading relations a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/dataloader"}),"dataloader")," that is scoped to the request will be used. This prevents the n+1 problem."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"relations")," option has two properties."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"one")," - Relations that return a single record. The ",Object(o.b)("inlineCode",{parentName:"li"},"key")," is the name of the ",Object(o.b)("inlineCode",{parentName:"li"},"relation")," and the value contains ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#relation-options"}),"options for the relation"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"many")," - Relations that return multiple records. The ",Object(o.b)("inlineCode",{parentName:"li"},"key")," is the name of the ",Object(o.b)("inlineCode",{parentName:"li"},"relation")," and the value contains ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#relation-options"}),"options for the relation"),".")),Object(o.b)("h3",{id:"relation-options"},"Relation Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DTO")," - The relation DTO. This is the ",Object(o.b)("inlineCode",{parentName:"li"},"@ObjectType")," that will be used for read, update and remove endpoints."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"relationName")," - The name of the relation to use when looking up the relation from the ",Object(o.b)("inlineCode",{parentName:"li"},"QueryService")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nullable")," - Set to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," if the relation is nullable."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"disableRead")," -  Set to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," to disable read operations."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"disableUpdate")," -  Set to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," to disable update operations."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"disableRemove")," -  Set to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," to disable remove operations."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"guards=[]")," - An array of ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.nestjs.com/guards"}),"guards")," to add to ",Object(o.b)("inlineCode",{parentName:"li"},"update")," and ",Object(o.b)("inlineCode",{parentName:"li"},"remove")," endpoints."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"interceptors=[]")," - An array of ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.nestjs.com/interceptors"}),"interceptors")," to add to ",Object(o.b)("inlineCode",{parentName:"li"},"update")," and ",Object(o.b)("inlineCode",{parentName:"li"},"remove")," endpoints."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pipes=[]")," - An array of ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.nestjs.com/pipes"}),"pipes")," to add to ",Object(o.b)("inlineCode",{parentName:"li"},"update")," and ",Object(o.b)("inlineCode",{parentName:"li"},"remove")," endpoints."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"filters=[]")," - An array of ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.nestjs.com/exception-filters"}),"filters")," to add to ",Object(o.b)("inlineCode",{parentName:"li"},"update")," and ",Object(o.b)("inlineCode",{parentName:"li"},"remove")," endpoints.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," ",Object(o.b)("inlineCode",{parentName:"p"},"guards"),", ",Object(o.b)("inlineCode",{parentName:"p"},"pipes"),", ",Object(o.b)("inlineCode",{parentName:"p"},"interceptors")," and ",Object(o.b)("inlineCode",{parentName:"p"},"filters")," will not work by default with relation endpoints. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nestjs/graphql/issues/295#issuecomment-511191060"}),"https://github.com/nestjs/graphql/issues/295#issuecomment-511191060")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"In the following examples we are going to use the following ",Object(o.b)("inlineCode",{parentName:"p"},"typeorm")," entities and DTOs."),Object(o.b)(r.a,{defaultValue:"todoitementity",values:[{label:"TodoItemEntity",value:"todoitementity"},{label:"TodoItemDTO",value:"todoitemdto"},{label:"SubTaskEntity",value:"subtaskentity"},{label:"SubTaskDTO",value:"subtaskdto"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"todoitementity",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from 'typeorm';\nimport { SubTaskEntity } from '../sub-task/sub-task.entity';\n\n@Entity()\nexport class TodoItemEntity {\n  @PrimaryGeneratedColumn()\n  id!: string;\n\n  @Column()\n  title!: string;\n\n  @Column()\n  completed!: boolean;\n\n  @OneToMany(\n    () => SubTaskEntity,\n    subTask => subTask.todoItem,\n  )\n  subTasks!: SubTaskEntity[];\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n}\n\n"))),Object(o.b)(i.a,{value:"todoitemdto",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n"))),Object(o.b)(i.a,{value:"subtaskentity",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {\n  Entity,\n  PrimaryGeneratedColumn,\n  Column,\n  CreateDateColumn,\n  UpdateDateColumn,\n  ObjectType,\n  ManyToOne,\n  JoinColumn,\n} from 'typeorm';\nimport { TodoItemEntity } from '../todo-item/todo-item.entity';\n\n@Entity()\nexport class SubTaskEntity {\n  @PrimaryGeneratedColumn()\n  id!: string;\n\n  @Column()\n  title!: string;\n\n  @Column()\n  completed!: boolean;\n\n  @Column({ nullable: false })\n  todoItemId!: string;\n\n  @ManyToOne(\n    (): ObjectType<TodoItemEntity> => TodoItemEntity,\n    td => td.subTasks,\n    { onDelete: 'CASCADE', nullable: false },\n  )\n  @JoinColumn()\n  todoItem!: TodoItemEntity;\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n}\n\n"))),Object(o.b)(i.a,{value:"subtaskdto",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('SubTask')\nexport class SubTaskDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @FilterableField()\n  todoItemId!: string;\n}\n\n\n")))),Object(o.b)("h3",{id:"one-relation"},"One Relation"),Object(o.b)("p",null,"Based on the entity and DTO definitions above we can create a ",Object(o.b)("inlineCode",{parentName:"p"},"SubTask")," resolver using the ",Object(o.b)("inlineCode",{parentName:"p"},"relations.one")," options."),Object(o.b)("p",null,"When specifying a ",Object(o.b)("inlineCode",{parentName:"p"},"one")," relation a couple of endpoints will automatically be generated. In this example the following are generated."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"subTask.todoItem")," - A ",Object(o.b)("inlineCode",{parentName:"li"},"query")," to retrieve the ",Object(o.b)("inlineCode",{parentName:"li"},"SubTasks")," ",Object(o.b)("inlineCode",{parentName:"li"},"TodoItem")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"setTodoItemOnSubTask")," - A ",Object(o.b)("inlineCode",{parentName:"li"},"mutation")," to set the ",Object(o.b)("inlineCode",{parentName:"li"},"TodoItem")," on a ",Object(o.b)("inlineCode",{parentName:"li"},"SubTask"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"removeTodoItemFromSubTask")," - A ",Object(o.b)("inlineCode",{parentName:"li"},"mutation")," to remove a ",Object(o.b)("inlineCode",{parentName:"li"},"TodoItem"),"/",Object(o.b)("inlineCode",{parentName:"li"},"SubTask")," relation.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"NOTE")," This does not typically remove either record just breaks the relation.")))),Object(o.b)("p",null,"In this example we ",Object(o.b)("inlineCode",{parentName:"p"},"disableRemove")," because ",Object(o.b)("inlineCode",{parentName:"p"},"todoItem")," is not nullable."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../todo-item/dto/todo-item.dto';\nimport { SubTaskDTO } from './dto/sub-task.dto';\nimport { SubTaskService } from './sub-task.service';\n\n@Resolver(() => SubTaskDTO)\nexport class SubTaskResolver extends CRUDResolver(SubTaskDTO, {\n  relations: {\n    one: { todoItem: { DTO: TodoItemDTO, disableRemove: true } },\n  },\n}) {\n  constructor(readonly service: SubTaskService) {\n    super(service);\n  }\n}\n\n")),Object(o.b)("p",null,"In the above example the relations option was set to"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"relations: {\n  one: { todoItem: { DTO: TodoItemDTO, disableRemove: true } },\n}\n")),Object(o.b)("p",null,"This set of options lets ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," know that ",Object(o.b)("inlineCode",{parentName:"p"},"SubTask")," has a single ",Object(o.b)("inlineCode",{parentName:"p"},"TodoItem")," relation. The generated schema will contain a ",Object(o.b)("inlineCode",{parentName:"p"},"SubTask")," type like the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type SubTask {\n  id: ID!\n  title: String!\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n  todoItemId: String!\n  todoItem: TodoItem!\n}\n")),Object(o.b)("p",null,"The following mutations will also be automatically exposed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  setTodoItemOnSubTask(input: RelationInput!): SubTask!\n}\n\ninput RelationInput {\n  id: ID!\n  relationId: ID!\n}\n")),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"disableRemove")," was set to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," or not specified a ",Object(o.b)("inlineCode",{parentName:"p"},"removeTodoItemFromSubTask")," mutation would also be exposed with the same arguments as ",Object(o.b)("inlineCode",{parentName:"p"},"setTodoItemOnSubTask"),"."),Object(o.b)("h3",{id:"many-relation"},"Many Relation"),Object(o.b)("p",null,"Based on the entity and DTO definitions above we can create a ",Object(o.b)("inlineCode",{parentName:"p"},"TodoItem")," resolver using the ",Object(o.b)("inlineCode",{parentName:"p"},"relations.many")," options."),Object(o.b)("p",null,"When specifying a ",Object(o.b)("inlineCode",{parentName:"p"},"many")," relation a couple of endpoints will automatically be generated. In this example the following are generated."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"todoItem.subTasks")," - A ",Object(o.b)("inlineCode",{parentName:"li"},"query")," to retrieve a ",Object(o.b)("inlineCode",{parentName:"li"},"TodoItems")," ",Object(o.b)("inlineCode",{parentName:"li"},"SubTasks"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"subTasks")," property will accept a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../concepts/queries"}),"query")," to allow you to filter, page and sort results."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"subTasks")," property will return a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./types#connectiontype"}),"connection")," to page through results."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"addSubTasksToTodoItem")," - A ",Object(o.b)("inlineCode",{parentName:"li"},"mutation")," to add ",Object(o.b)("inlineCode",{parentName:"li"},"SubTasks")," to a ",Object(o.b)("inlineCode",{parentName:"li"},"TodoItem"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"removeSubTasksFromTodoItem")," - A ",Object(o.b)("inlineCode",{parentName:"li"},"mutation")," to remove a ",Object(o.b)("inlineCode",{parentName:"li"},"SubTaks")," from a ",Object(o.b)("inlineCode",{parentName:"li"},"TodoItem"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"NOTE")," This does not typically remove either record just breaks the relation.")))),Object(o.b)("p",null,"In this example we ",Object(o.b)("inlineCode",{parentName:"p"},"disableRemove")," because ",Object(o.b)("inlineCode",{parentName:"p"},"SubTasks")," cannot exist without a ",Object(o.b)("inlineCode",{parentName:"p"},"TodoItem"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/dto/sub-task.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  relations: {\n    many: { subTasks: { DTO: SubTaskDTO, disableRemove: true } },\n  },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n\n")),Object(o.b)("p",null,"In the above example the relations option was set to"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"relations: {\n  many: { subTasks: { DTO: SubTaskDTO, disableRemove: true } },\n}\n")),Object(o.b)("p",null,"This objects tells ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," that the ",Object(o.b)("inlineCode",{parentName:"p"},"TodoItem")," has multiple ",Object(o.b)("inlineCode",{parentName:"p"},"SubTasks"),". The generated schema will contain a ",Object(o.b)("inlineCode",{parentName:"p"},"TodoItem")," type like the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type TodoItem {\n  id: ID!\n  title: String!\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n  subTasks(\n    paging: CursorPaging = { first: 10 }\n\n    filter: SubTaskFilter = {}\n\n    sorting: [SubTaskSort!] = []\n  ): SubTaskConnection!\n}\n")),Object(o.b)("p",null,"The following mutations will also be automatically exposed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n   addSubTasksToTodoItem(input: RelationsInput!): TodoItem!\n}\n\ninput RelationsInput {\n  id: ID!\n  relationIds: [ID!]!\n}\n")),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"disableRemove")," was set to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," or not specified a ",Object(o.b)("inlineCode",{parentName:"p"},"removeSubTasksFromTodoItem")," mutation would also be exposed with the same arguments as ",Object(o.b)("inlineCode",{parentName:"p"},"addSubTasksToTodoItem"),"."),Object(o.b)("h3",{id:"custom-relation-name"},"Custom Relation Name"),Object(o.b)("p",null,"Sometimes you may want to expose a relation that has a different name when persisted from the graphql property. To do this use the ",Object(o.b)("inlineCode",{parentName:"p"},"relationName")," property."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/dto/sub-task.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  relations: {\n    many: { allSubTasks: { DTO: SubTaskDTO, relationName: 'subTasks' } },\n  },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n\n")),Object(o.b)("p",null,"In this example the ",Object(o.b)("inlineCode",{parentName:"p"},"subTasks")," key will be used to look up the relation from from the ",Object(o.b)("inlineCode",{parentName:"p"},"QueryService")," and ",Object(o.b)("inlineCode",{parentName:"p"},"todoItems.allSubTasks")," will be exposed in the ",Object(o.b)("inlineCode",{parentName:"p"},"graphql")," schema."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type TodoItem {\n  id: ID!\n  title: String!\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n  allSubTasks(\n    paging: CursorPaging = { first: 10 }\n\n    filter: SubTaskFilter = {}\n\n    sorting: [SubTaskSort!] = []\n  ): SubTaskConnection!\n}\n")),Object(o.b)("h3",{id:"disable-reads"},"Disable Reads"),Object(o.b)("p",null,"To disable the ",Object(o.b)("inlineCode",{parentName:"p"},"read")," ",Object(o.b)("inlineCode",{parentName:"p"},"queries")," you can set the ",Object(o.b)("inlineCode",{parentName:"p"},"disableRead")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/dto/sub-task.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  relations: {\n    many: { subTasks: { DTO: SubTaskDTO, disableRead: true } },\n  },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n\n")),Object(o.b)("p",null,"In this example only ",Object(o.b)("inlineCode",{parentName:"p"},"addSubTasksToTodoItem")," and ",Object(o.b)("inlineCode",{parentName:"p"},"removeSubTasksFromTodoItem")," will be exposed."),Object(o.b)("h3",{id:"disable-updates"},"Disable Updates"),Object(o.b)("p",null,"To disable the ",Object(o.b)("inlineCode",{parentName:"p"},"update")," ",Object(o.b)("inlineCode",{parentName:"p"},"mutations")," you can set the ",Object(o.b)("inlineCode",{parentName:"p"},"disableUpdate")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/dto/sub-task.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  relations: {\n    many: { subTasks: { DTO: SubTaskDTO, disableUpdates: true } },\n  },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n\n")),Object(o.b)("p",null,"In this example only ",Object(o.b)("inlineCode",{parentName:"p"},"todoItem.subTasks")," and ",Object(o.b)("inlineCode",{parentName:"p"},"removeSubTasksFromTodoItem")," will be exposed."),Object(o.b)("h3",{id:"disable-removes"},"Disable Removes"),Object(o.b)("p",null,"To disable the ",Object(o.b)("inlineCode",{parentName:"p"},"remove")," ",Object(o.b)("inlineCode",{parentName:"p"},"mutations")," you can set the ",Object(o.b)("inlineCode",{parentName:"p"},"disableRemove")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/dto/sub-task.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  relations: {\n    many: { subTasks: { DTO: SubTaskDTO, disableRemove: true } },\n  },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n\n")),Object(o.b)("p",null,"In this example only ",Object(o.b)("inlineCode",{parentName:"p"},"todoItem.subTasks")," and ",Object(o.b)("inlineCode",{parentName:"p"},"addSubTasksToTodoItem")," will be exposed."),Object(o.b)("h3",{id:"guards-pipes-and-filters"},"Guards, Pipes and Filters"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," ",Object(o.b)("inlineCode",{parentName:"p"},"guards"),", ",Object(o.b)("inlineCode",{parentName:"p"},"pipes"),", ",Object(o.b)("inlineCode",{parentName:"p"},"interceptors")," and ",Object(o.b)("inlineCode",{parentName:"p"},"filters")," will not work by default with ",Object(o.b)("inlineCode",{parentName:"p"},"read")," endpoints. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nestjs/graphql/issues/295"}),"https://github.com/nestjs/graphql/issues/295")),Object(o.b)("p",null,"In this example we'll just demonstrate using a ",Object(o.b)("inlineCode",{parentName:"p"},"guard")," but the same pattern applies for ",Object(o.b)("inlineCode",{parentName:"p"},"pipes"),", ",Object(o.b)("inlineCode",{parentName:"p"},"filters")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"interceptors")),Object(o.b)("p",null,"To set up a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.nestjs.com/guards"}),"guard")," for endpoint you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"guards")," option."),Object(o.b)("p",null,"Assume we have the following auth guard that checks for a certain header and value."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {\n  CanActivate,\n  ExecutionContext,\n  Injectable,\n  Logger,\n} from '@nestjs/common';\nimport { Observable } from 'rxjs';\nimport { GqlExecutionContext } from '@nestjs/graphql';\nimport { AUTH_HEADER_NAME } from './constants';\nimport { config } from './config';\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  private logger = new Logger(AuthGuard.name);\n\n  canActivate(\n    context: ExecutionContext,\n  ): boolean | Promise<boolean> | Observable<boolean> {\n    const ctx = GqlExecutionContext.create(context);\n    const req = ctx.getContext().request;\n    this.logger.log(`Req = ${req.headers}`);\n    return req.headers[AUTH_HEADER_NAME] === config.auth.header;\n  }\n}\n")),Object(o.b)("p",null,"We can then add it to our relations"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { AuthGuard } from '../auth.guard';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\nconst guards = [AuthGuard];\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  many: { subTasks: { DTO: SubTaskDTO, guards } },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(o.b)("p",null,"Now any requests that go to the ",Object(o.b)("inlineCode",{parentName:"p"},"update")," or ",Object(o.b)("inlineCode",{parentName:"p"},"remove")," endpoints will require the guard."),Object(o.b)("h2",{id:"relation-mixin"},"Relation Mixin"),Object(o.b)("p",null,"If you are using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./resolvers#individual-resolvers"}),"resolvers individually")," you can use the following mixins to add relations functionality."),Object(o.b)("h3",{id:"relatable"},"Relatable"),Object(o.b)("p",null,"When using The ",Object(o.b)("inlineCode",{parentName:"p"},"Relatable")," mixin adds all relations functionality to a resolver."),Object(o.b)("p",null,"In this example we expose on read endpoints for todo items with a readable subtasks realtion."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { ReadResolver, Relatable } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { AuthGuard } from '../auth.guard';\nimport { SubTaskDTO } from '../sub-task/dto/sub-task.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\nconst guards = [AuthGuard];\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends Relatable(TodoItemDTO, {\n  many: {\n    subTasks: { DTO: SubTaskDTO, disableRemove: true, disableUpdate: true },\n  },\n})(ReadResolver(TodoItemDTO)) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")))}m.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},m=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,u=m["".concat(i,".").concat(c)]||m[c]||d[c]||r;return n?o.a.createElement(u,l({ref:t},b,{components:n})):o.a.createElement(u,l({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},181:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},185:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(181),i=n.n(r),l=n(93),s=n.n(l);const b=37,p=39;t.a=function(e){const{block:t,children:n,defaultValue:r,values:l}=e,[m,d]=Object(a.useState)(r),c=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:i()("tab-item",s.a.tabItem,{"tab-item--active":m===e}),key:e,ref:e=>c.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(c,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},186:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);