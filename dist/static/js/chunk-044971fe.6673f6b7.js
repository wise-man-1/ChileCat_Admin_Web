(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-044971fe"],{2527:function(t,e,s){"use strict";s("85c0")},"66fa":function(t,e,s){"use strict";s("992f")},"85c0":function(t,e,s){},"992f":function(t,e,s){},a434:function(t,e,s){"use strict";var i=s("23e7"),a=s("23cb"),n=s("a691"),o=s("50c4"),r=s("7b0b"),l=s("65f0"),c=s("8418"),u=s("1dde"),_=s("ae40"),d=u("splice"),h=_("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,f=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d||!h},{splice:function(t,e){var s,i,u,_,d,h,b=r(this),g=o(b.length),w=a(t,g),x=arguments.length;if(0===x?s=i=0:1===x?(s=0,i=g-w):(s=x-2,i=f(v(n(e),0),g-w)),g+s-i>p)throw TypeError(m);for(u=l(b,i),_=0;_<i;_++)d=w+_,d in b&&c(u,_,b[d]);if(u.length=i,s<i){for(_=w;_<g-i;_++)d=_+i,h=_+s,d in b?b[h]=b[d]:delete b[h];for(_=g;_>g-i+s;_--)delete b[_-1]}else if(s>i)for(_=g-i;_>w;_--)d=_+i-1,h=_+s-1,d in b?b[h]=b[d]:delete b[h];for(_=0;_<s;_++)b[_+w]=arguments[_+2];return b.length=g-i+s,u}})},a9e3:function(t,e,s){"use strict";var i=s("83ab"),a=s("da84"),n=s("94ca"),o=s("6eeb"),r=s("5135"),l=s("c6b6"),c=s("7156"),u=s("c04e"),_=s("d039"),d=s("7c73"),h=s("241c").f,v=s("06cf").f,f=s("9bf2").f,p=s("58a8").trim,m="Number",b=a[m],g=b.prototype,w=l(d(g))==m,x=function(t){var e,s,i,a,n,o,r,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=p(c),e=c.charCodeAt(0),43===e||45===e){if(s=c.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+c}for(n=c.slice(2),o=n.length,r=0;r<o;r++)if(l=n.charCodeAt(r),l<48||l>a)return NaN;return parseInt(n,i)}return+c};if(n(m,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,k=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof k&&(w?_((function(){g.valueOf.call(s)})):l(s)!=m)?c(new b(x(e)),s,k):x(e)},$=i?h(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;$.length>E;E++)r(b,y=$[E])&&!r(k,y)&&f(k,y,v(b,y));k.prototype=g,g.constructor=k,o(a,m,k)}},b637:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("TaskFrame",{ref:"frame",attrs:{type:0,excel_url:t.excel_url,save_roster_store:"scheduling_update_knowing",flush_task_store:"task_rest_knowing"},scopedSlots:t._u([{key:"scheduling",fn:function(e){return t._l(e.roster,(function(i,a){return s("div",{directives:[{name:"show",rawName:"v-show",value:e.actives[e.active_index].is_open,expression:"data.actives[data.active_index].is_open"}],key:a,staticClass:"roster_box"},[s("div",{staticClass:"building"},[t._v(t._s(i.title))]),t._l(i.layer_list,(function(e,i){return s("div",{key:i,staticClass:"layer"},[s("div",{staticClass:"floor"},[t._v(t._s(e.title))]),t._l(e.user,(function(i,a){return s("div",{key:a,staticClass:"layer"},[s("el-row",[s("el-col",{attrs:{span:10}},[t._v(" "+t._s(i.grade)+" "+t._s(i.username)+" "+t._s(i.name)+" "+t._s(i.tel)+" "+t._s(i.type)+" ")]),s("el-col",{attrs:{span:6}},[s("el-autocomplete",{directives:[{name:"show",rawName:"v-show",value:t.is_show_button,expression:"is_show_button"}],staticClass:"inline-input",attrs:{"fetch-suggestions":t.querySearch,placeholder:"请输入内容"},model:{value:i.type,callback:function(e){t.$set(i,"type",e)},expression:"user.type"}})],1),s("el-col",{attrs:{span:6}},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:t.is_show_button,expression:"is_show_button"}],attrs:{size:"mini",icon:"el-icon-close"},on:{click:function(s){return t.remove_user(e,a)}}})],1)],1)],1)})),s("el-row",{directives:[{name:"show",rawName:"v-show",value:t.is_show_button,expression:"is_show_button"}],attrs:{gutter:10}},[s("el-col",{attrs:{xs:5,md:8}},[s("el-input",{attrs:{size:"small",placeholder:"学号"},model:{value:e.user_object.username,callback:function(s){t.$set(e.user_object,"username",s)},expression:"layer.user_object.username"}})],1),s("el-col",{attrs:{xs:5,md:8}},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:t.is_show_button,expression:"is_show_button"}],attrs:{size:"small",icon:"el-icon-search"},on:{click:function(s){return t.search_user(e)}}},[t._v("添加")])],1)],1)],2)}))],2)}))}},{key:"scheduling_button",fn:function(){return[s("el-button",{on:{click:function(e){return t.simple_information()}}},[t._v("查看/修改")])]},proxy:!0}])},[s("el-row",{attrs:{gutter:10}},[s("el-col",[s("el-card",{staticClass:"data-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("数据管理")]),s("RoomDelete"),s("RoomRecover")],1)],1)],1)],1)],1)},a=[],n=(s("ac1f"),s("1276"),s("159b"),s("a434"),s("ee01")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inline"},[s("el-popover",{attrs:{placement:"top-start",title:"取消学生入住",width:"200",trigger:"hover",content:"针对假期大量学生请假时把这部分学生在宿舍的情况隐藏掉，剩下没有请假的学生，方便工作"}},[s("el-button",{attrs:{slot:"reference"},on:{click:function(e){t.room_delete_dialog_visible=!0}},slot:"reference"},[t._v("取消学生入住")])],1),s("el-dialog",{attrs:{title:"学生入住",visible:t.room_delete_dialog_visible,width:"60%"},on:{"update:visible":function(e){t.room_delete_dialog_visible=e}}},[t._v("、 "),s("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:20},placeholder:"请输入学号 回车分割"},model:{value:t.username_str,callback:function(e){t.username_str=e},expression:"username_str"}}),s("div",{staticStyle:{margin:"20px 0","text-align":"right"}},[s("el-button",{attrs:{type:"primary"},on:{click:t.stu_in_room_delete}},[t._v("隐藏列表里面的学生")])],1)],1)],1)},r=[],l={data:function(){return{username_str:"",room_delete_dialog_visible:!1}},methods:{stu_in_room_delete:function(){var t=this,e=this.username_str.split(/[\s\n]/);this.$store.dispatch("school_information/stu_in_room_delete",{username_list:e}).then((function(e){t.$message({type:"success",message:e.data+"名学生设置为不在寝室显示"})}))}}},c=l,u=s("2877"),_=Object(u["a"])(c,o,r,!1,null,"549dd5c7",null),d=_.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inline"},[s("el-dialog",{attrs:{title:"寝室名单",visible:t.show,width:"60%"},on:{"update:visible":function(e){t.show=e}}},[s("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),s("em",[t._v("点击上传")])])])],1),s("el-button",{attrs:{slot:"reference"},on:{click:function(e){t.show=!0}},slot:"reference"},[t._v("导入寝室数据")])],1)},v=[],f={data:function(){return{show:!0}},methods:{}},p=f,m=Object(u["a"])(p,h,v,!1,null,null,null),b=m.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inline"},[s("el-popover",{attrs:{placement:"top-start",title:"取消学生入住",width:"200",trigger:"hover",content:"对之前删除的学生进行恢复显示"}},[s("el-button",{attrs:{slot:"reference"},on:{click:function(e){t.room_recover_dialog_visible=!0}},slot:"reference"},[t._v("恢复学生入住")])],1),s("el-dialog",{attrs:{title:"学生入住",visible:t.room_recover_dialog_visible,width:"60%"},on:{"update:visible":function(e){t.room_recover_dialog_visible=e}}},[t._v("、 "),s("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:20},placeholder:"请输入学号 回车分割"},model:{value:t.username_str,callback:function(e){t.username_str=e},expression:"username_str"}}),s("div",{staticStyle:{margin:"20px 0","text-align":"right"}},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.stu_in_room_recover(!1)}}},[t._v("恢复列表中的学生")]),s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.stu_in_room_recover(!0)}}},[t._v("恢复全部学生")])],1)],1)],1)},w=[],x={data:function(){return{username_str:"",room_recover_dialog_visible:!1}},methods:{stu_in_room_recover:function(t){var e=this,s=this.username_str.split(/[\s\n]/);this.$store.dispatch("school_information/stu_in_room_recover",{username_list:s,is_all:t,task_id:this.$store.getters.task.id}).then((function(t){e.$message({type:"success",message:t.data+"名学生从寝室恢复显示"})}))}}},y=x,k=Object(u["a"])(y,g,w,!1,null,null,null),$=k.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Echarts"},[s("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"main"}})])}],N={name:"Echarts",mounted:function(){this.myEcharts()},methods:{myEcharts:function(){var t=this.$echarts.init(document.getElementById("main")),e={title:{text:"ECharts 入门示例"},tooltip:{},legend:{data:["销量"]},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]};t.setOption(e)}}},I=N,S=Object(u["a"])(I,E,C,!1,null,null,null),j=S.exports,A={components:{TaskFrame:n["a"],RoomDelete:d,RoomRecover:$,InUserRoom:b,Statistical:j},data:function(){return{input_user_object:{},user_list_str:"",excel_url:"",is_show_button:!0,options:[{value:1,label:"黄金糕"},{value:2,label:"双皮奶"},{value:3,label:"蚵仔煎"}]}},methods:{querySearch:function(t,e){var s=[{value:"统计审核"},{value:"随查"},{value:"检查"}];e(s)},simple_information:function(){this.$data.is_show_button=!this.$data.is_show_button},add_user:function(t){t.user.push(JSON.parse(JSON.stringify(t.user_object))),t.user_object={username:"",name:"",grade:"",tel:""}},add_user_list_str:function(){var t=this,e=this.$data.user_list_str;if(!(e.length<1)){var s=e.split("\n");s.forEach((function(e){t.$store.dispatch("school_information/student_information",{username:e}).then((function(e){t.$refs.frame.roster.push(e.data)}))})),console.log(s)}},remove_user:function(t,e){t.user.splice(e,1)},search_user:function(t){var e=this;this.$store.dispatch("school_information/student_information",{username:t.user_object.username}).then((function(s){t.user_object=s.data,e.add_user(t)})),clearTimeout(this.timeout),this.timeout=setTimeout((function(){}),2e3*Math.random())}}},T=A,O=(s("2527"),Object(u["a"])(T,i,a,!1,null,"28456486",null));e["default"]=O.exports},ee01:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-row",{attrs:{gutter:10}},[s("el-col",[s("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v(" "+t._s(t.actives[t.active_index].name)+" ")]),s("div",{staticStyle:{display:"inline"},on:{click:function(e){return t.task_switch_put()}}},[s("el-switch",{staticStyle:{float:"right",padding:"3px 0"},attrs:{disabled:t.is_switch,"active-text":"开启","inactive-text":"关闭"},model:{value:t.actives[t.active_index].is_open,callback:function(e){t.$set(t.actives[t.active_index],"is_open",e)},expression:"actives[active_index].is_open"}})],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.actives[t.active_index].is_open,expression:"actives[active_index].is_open"}],staticClass:"text item"},[s("el-button",{on:{click:function(e){t.dialogVisible_roster_box=!0}}},[t._v("排班 ")]),s("el-button",{on:{click:function(e){return t.flush()}}},[t._v(" 重置任务")]),t.excel_url?s("a",{attrs:{href:t.excel_url}},[s("el-button",[t._v("导出Excel")])],1):t._e(),s("el-button",{attrs:{loading:t.search_loading},on:{click:function(e){return t.get_condition()}}},[t._v("刷新记录")])],1)])],1)],1),t._t("default"),s("br"),s("el-dialog",{staticClass:"dialog_roster",attrs:{title:"排班",visible:t.dialogVisible_roster_box,width:"90%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible_roster_box=e}}},[t._t("scheduling",null,{roster:t.roster,active_index:t.active_index,actives:t.actives}),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialogVisible_roster_box=!1}}},[t._v("取 消")]),t._t("scheduling_button"),s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.save_roster()}}},[t._v("保存")])],2)],2),s("br"),s("el-row",[s("el-col",{attrs:{sm:24}},[s("el-card",{directives:[{name:"show",rawName:"v-show",value:t.actives[t.active_index].is_open,expression:"actives[active_index].is_open"}],attrs:{shadow:"hover"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v("检查记录")])]),s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[s("el-table-column",{attrs:{prop:"student_approved_number",label:"学号",width:"180"}}),s("el-table-column",{attrs:{prop:"student_approved",label:"姓名",width:"180"}}),s("el-table-column",{attrs:{prop:"rule_str",label:"原因"}}),s("el-table-column",{attrs:{prop:"worker",label:"执行人"}}),s("el-table-column",{attrs:{prop:"room_str",label:"寝室"}}),s("el-table-column",{attrs:{prop:"star_time",label:"执行时间"}}),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{width:"120",type:e.row.flg?"warning":"info"},on:{click:function(s){return t.pintle(1,e.row)}}},[t._v(" 销假")])]}}])})],1)],1)],1)],1)],2)},a=[],n=(s("a9e3"),s("159b"),s("5f87")),o={props:{type:Number,flush_task_store:String,save_roster_store:String},data:function(){return{is_switch:!1,switc:"",actives:[{id:"",name:"加载中",is_open:!1,is_builder:!1}],active_index:0,tableData:[],flg:!0,formLabelWidth:"120px",username:"",roster:[],dialogVisible_roster_box:!1,timer:null,excel_url:"",search_loading:!1}},created:function(){var t=this;this.get_activa(),this.get_condition(),this.timer=setInterval((function(){!0===t.$data.actives[t.$data.active_index].is_open&&t.get_condition()}),2e4)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null},methods:{get_activa:function(){var t=this;this.$store.dispatch("school_attendance/task_obtain",{type:this.$props.type}).then((function(e){var s=e.data;t.actives=s,t.get_scheduling();var i="?task_id="+s[0].id+"&token="+Object(n["a"])();t.excel_url=t.$api.school_attendance.out_knowing_excel_data+i})).catch((function(){}))},task_switch_put:function(){var t=this,e=this.$data.actives[this.active_index].id;this.is_switch=!0,this.$store.dispatch("school_attendance/task_switch",{task_id:e}).then((function(e){t.$data.switc=e.data,t.is_switch=!1})).catch((function(e){console.log(e),t.is_switch=!1}))},flush:function(){var t=this;this.$confirm("此操作将重置任务操作数据，但不会清空记录的人员名单","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=t.actives[t.active_index].id;t.$store.dispatch("school_attendance/"+t.$props.flush_task_store,{task_id:e})})).catch((function(){t.$message({type:"info",message:"已取消"})}))},get_scheduling:function(){var t=this;this.$store.dispatch("school_attendance/scheduling",{task_id:this.actives[this.active_index]["id"]}).then((function(e){t.roster=e.data}))},save_roster:function(){var t=this,e=this.actives[this.active_index].id;this.$store.dispatch("school_attendance/"+this.$props.save_roster_store,{task_id:e,roster:this.roster}).then((function(e){t.$data.dialogVisible_roster_box=!1}))},get_condition:function(){var t=this,e=this;this.$data.actives[this.active_index].id&&(e.search_loading=!0,this.$store.dispatch("school_attendance/condition",{task_id:this.$data.actives[this.active_index].id}).then((function(s){s.data.forEach((function(t,e){t["flg"]=!0})),t.$data.tableData=s.data,e.search_loading=!1})).catch((function(){e.search_loading=!1})))},pintle:function(t,e){var s=this;this.$confirm("此操作将对该同学销假,并且记录您的信息 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){s.$store.dispatch("school_attendance/undo_record",{record_id:e.id,task_id:s.$data.actives[s.active_index].id}).then((function(t){e.flg=!1}))})).catch((function(){s.$message({type:"info",message:"已取消"})}))},handleClose:function(t){t()}}},r=o,l=(s("66fa"),s("2877")),c=Object(l["a"])(r,i,a,!1,null,"81530230",null);e["a"]=c.exports}}]);