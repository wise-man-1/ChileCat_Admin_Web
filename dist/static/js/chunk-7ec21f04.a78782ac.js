(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ec21f04"],{4510:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("TaskFrame",{ref:"frame",attrs:{type:2,excel_url:t.excel_url,save_roster_store:"scheduling_update_late",flush_task_store:"task_rest_late"},scopedSlots:t._u([{key:"scheduling",fn:function(e){return[i("el-row",{attrs:{gutter:10}},[i("el-col",{attrs:{xs:24,md:24}},[i("h3",[t._v("添加")]),i("div",{staticClass:"input_box"},[i("el-row",{attrs:{gutter:10}},[i("el-col",{attrs:{xs:24,md:9}},[i("el-input",{attrs:{size:"small",placeholder:"学号"},model:{value:t.input_user_object.username,callback:function(e){t.$set(t.input_user_object,"username",e)},expression:"input_user_object.username"}})],1),i("el-col",{attrs:{xs:24,md:9}},[i("el-input",{attrs:{size:"small",placeholder:"姓名"},model:{value:t.input_user_object.name,callback:function(e){t.$set(t.input_user_object,"name",e)},expression:"input_user_object.name"}})],1),i("el-col",{attrs:{xs:24,md:6}},[i("el-button",{attrs:{size:"small",icon:"el-icon-search"},on:{click:function(e){return t.search_user()}}},[t._v("搜索")]),i("el-button",{attrs:{size:"small",icon:"el-icon-circle-plus-outline"},on:{click:function(e){return t.add_user()}}},[t._v("添加")])],1)],1)],1)]),i("br"),i("el-col",{attrs:{xs:24,md:8}},[i("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入多个学号"},model:{value:t.user_list_str,callback:function(e){t.user_list_str=e},expression:"user_list_str"}})],1),i("el-col",{attrs:{xs:24,md:4}},[i("el-button",{on:{click:function(e){return t.add_user_list_str()}}},[t._v("添加")])],1),i("el-col",{attrs:{xs:24,md:12}},[i("h3",[t._v("名单")]),t._l(e.roster,(function(e,s){return i("div",{key:s},[t._v(" "+t._s(e.username)+" "+t._s(e.name)+" "),i("el-button",{attrs:{size:"mini",icon:"el-icon-close"},on:{click:function(e){return t.remove_user(s)}}})],1)}))],2)],1)]}},{key:"scheduling_button",fn:function(){},proxy:!0}])})],1)},a=[],n=(i("ac1f"),i("1276"),i("159b"),i("a434"),i("ee01")),r={components:{TaskFrame:n["a"]},data:function(){return{excel_url:"",input_user_object:{},user_list_str:""}},methods:{add_user:function(){""!=this.$data.input_user_object.username&&(this.$refs.frame.roster.push(this.$data.input_user_object),this.$data.input_user_object={username:"",name:""})},add_user_list_str:function(){var t=this,e=this.$data.user_list_str;if(!(e.length<1)){var i=e.split("\n");i.forEach((function(e){t.$store.dispatch("school_information/student_information",{username:e}).then((function(e){t.$refs.frame.roster.push(e.data)}))})),console.log(i)}},remove_user:function(t){this.$refs.frame.roster.splice(t,1)},search_user:function(){var t=this;this.$store.dispatch("school_information/student_information",{username:this.$data.input_user_object.username}).then((function(e){t.$data.input_user_object=e.data})),clearTimeout(this.timeout),this.timeout=setTimeout((function(){}),2e3*Math.random())}}},o=r,c=i("2877"),l=Object(c["a"])(o,s,a,!1,null,null,null);e["default"]=l.exports},"66fa":function(t,e,i){"use strict";i("992f")},"992f":function(t,e,i){},a434:function(t,e,i){"use strict";var s=i("23e7"),a=i("23cb"),n=i("a691"),r=i("50c4"),o=i("7b0b"),c=i("65f0"),l=i("8418"),u=i("1dde"),_=i("ae40"),d=u("splice"),h=_("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,p=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!d||!h},{splice:function(t,e){var i,s,u,_,d,h,m=o(this),g=r(m.length),x=a(t,g),w=arguments.length;if(0===w?i=s=0:1===w?(i=0,s=g-x):(i=w-2,s=p(f(n(e),0),g-x)),g+i-s>v)throw TypeError(b);for(u=c(m,s),_=0;_<s;_++)d=x+_,d in m&&l(u,_,m[d]);if(u.length=s,i<s){for(_=x;_<g-s;_++)d=_+s,h=_+i,d in m?m[h]=m[d]:delete m[h];for(_=g;_>g-s+i;_--)delete m[_-1]}else if(i>s)for(_=g-s;_>x;_--)d=_+s-1,h=_+i-1,d in m?m[h]=m[d]:delete m[h];for(_=0;_<i;_++)m[_+x]=arguments[_+2];return m.length=g-s+i,u}})},a9e3:function(t,e,i){"use strict";var s=i("83ab"),a=i("da84"),n=i("94ca"),r=i("6eeb"),o=i("5135"),c=i("c6b6"),l=i("7156"),u=i("c04e"),_=i("d039"),d=i("7c73"),h=i("241c").f,f=i("06cf").f,p=i("9bf2").f,v=i("58a8").trim,b="Number",m=a[b],g=m.prototype,x=c(d(g))==b,w=function(t){var e,i,s,a,n,r,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+l}for(n=l.slice(2),r=n.length,o=0;o<r;o++)if(c=n.charCodeAt(o),c<48||c>a)return NaN;return parseInt(n,s)}return+l};if(n(b,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var k,$=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof $&&(x?_((function(){g.valueOf.call(i)})):c(i)!=b)?l(new m(w(e)),i,$):w(e)},y=s?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;y.length>N;N++)o(m,k=y[N])&&!o($,k)&&p($,k,f(m,k));$.prototype=g,g.constructor=$,r(a,b,$)}},ee01:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{attrs:{gutter:10}},[i("el-col",[i("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v(" "+t._s(t.actives[t.active_index].name)+" ")]),i("div",{staticStyle:{display:"inline"},on:{click:function(e){return t.task_switch_put()}}},[i("el-switch",{staticStyle:{float:"right",padding:"3px 0"},attrs:{disabled:t.is_switch,"active-text":"开启","inactive-text":"关闭"},model:{value:t.actives[t.active_index].is_open,callback:function(e){t.$set(t.actives[t.active_index],"is_open",e)},expression:"actives[active_index].is_open"}})],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.actives[t.active_index].is_open,expression:"actives[active_index].is_open"}],staticClass:"text item"},[i("el-button",{on:{click:function(e){t.dialogVisible_roster_box=!0}}},[t._v("排班 ")]),i("el-button",{on:{click:function(e){return t.flush()}}},[t._v(" 重置任务")]),t.excel_url?i("a",{attrs:{href:t.excel_url}},[i("el-button",[t._v("导出Excel")])],1):t._e(),i("el-button",{attrs:{loading:t.search_loading},on:{click:function(e){return t.get_condition()}}},[t._v("刷新记录")])],1)])],1)],1),t._t("default"),i("br"),i("el-dialog",{staticClass:"dialog_roster",attrs:{title:"排班",visible:t.dialogVisible_roster_box,width:"90%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible_roster_box=e}}},[t._t("scheduling",null,{roster:t.roster,active_index:t.active_index,actives:t.actives}),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible_roster_box=!1}}},[t._v("取 消")]),t._t("scheduling_button"),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.save_roster()}}},[t._v("保存")])],2)],2),i("br"),i("el-row",[i("el-col",{attrs:{sm:24}},[i("el-card",{directives:[{name:"show",rawName:"v-show",value:t.actives[t.active_index].is_open,expression:"actives[active_index].is_open"}],attrs:{shadow:"hover"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",[t._v("检查记录")])]),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[i("el-table-column",{attrs:{prop:"student_approved_number",label:"学号",width:"180"}}),i("el-table-column",{attrs:{prop:"student_approved",label:"姓名",width:"180"}}),i("el-table-column",{attrs:{prop:"rule_str",label:"原因"}}),i("el-table-column",{attrs:{prop:"worker",label:"执行人"}}),i("el-table-column",{attrs:{prop:"room_str",label:"寝室"}}),i("el-table-column",{attrs:{prop:"star_time",label:"执行时间"}}),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{width:"120",type:e.row.flg?"warning":"info"},on:{click:function(i){return t.pintle(1,e.row)}}},[t._v(" 销假")])]}}])})],1)],1)],1)],1)],2)},a=[],n=(i("a9e3"),i("159b"),i("5f87")),r={props:{type:Number,flush_task_store:String,save_roster_store:String},data:function(){return{is_switch:!1,switc:"",actives:[{id:"",name:"加载中",is_open:!1,is_builder:!1}],active_index:0,tableData:[],flg:!0,formLabelWidth:"120px",username:"",roster:[],dialogVisible_roster_box:!1,timer:null,excel_url:"",search_loading:!1}},created:function(){var t=this;this.get_activa(),this.get_condition(),this.timer=setInterval((function(){!0===t.$data.actives[t.$data.active_index].is_open&&t.get_condition()}),2e4)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null},methods:{get_activa:function(){var t=this;this.$store.dispatch("school_attendance/task_obtain",{type:this.$props.type}).then((function(e){var i=e.data;t.actives=i,t.get_scheduling();var s="?task_id="+i[0].id+"&token="+Object(n["a"])();t.excel_url=t.$api.school_attendance.out_knowing_excel_data+s})).catch((function(){}))},task_switch_put:function(){var t=this,e=this.$data.actives[this.active_index].id;this.is_switch=!0,this.$store.dispatch("school_attendance/task_switch",{task_id:e}).then((function(e){t.$data.switc=e.data,t.is_switch=!1})).catch((function(e){console.log(e),t.is_switch=!1}))},flush:function(){var t=this;this.$confirm("此操作将重置任务操作数据，但不会清空记录的人员名单","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=t.actives[t.active_index].id;t.$store.dispatch("school_attendance/"+t.$props.flush_task_store,{task_id:e})})).catch((function(){t.$message({type:"info",message:"已取消"})}))},get_scheduling:function(){var t=this;this.$store.dispatch("school_attendance/scheduling",{task_id:this.actives[this.active_index]["id"]}).then((function(e){t.roster=e.data}))},save_roster:function(){var t=this,e=this.actives[this.active_index].id;this.$store.dispatch("school_attendance/"+this.$props.save_roster_store,{task_id:e,roster:this.roster}).then((function(e){t.$data.dialogVisible_roster_box=!1}))},get_condition:function(){var t=this,e=this;this.$data.actives[this.active_index].id&&(e.search_loading=!0,this.$store.dispatch("school_attendance/condition",{task_id:this.$data.actives[this.active_index].id}).then((function(i){i.data.forEach((function(t,e){t["flg"]=!0})),t.$data.tableData=i.data,e.search_loading=!1})).catch((function(){e.search_loading=!1})))},pintle:function(t,e){var i=this;this.$confirm("此操作将对该同学销假,并且记录您的信息 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i.$store.dispatch("school_attendance/undo_record",{record_id:e.id,task_id:i.$data.actives[i.active_index].id}).then((function(t){e.flg=!1}))})).catch((function(){i.$message({type:"info",message:"已取消"})}))},handleClose:function(t){t()}}},o=r,c=(i("66fa"),i("2877")),l=Object(c["a"])(o,s,a,!1,null,"81530230",null);e["a"]=l.exports}}]);