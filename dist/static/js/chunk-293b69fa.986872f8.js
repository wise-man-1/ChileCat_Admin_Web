(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-293b69fa"],{b637:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("TaskFrame",{ref:"frame",attrs:{type:0,excel_url:e.excel_url,save_roster_store:"scheduling_update_knowing",flush_task_store:"task_rest_knowing"},scopedSlots:e._u([{key:"scheduling",fn:function(t){return e._l(t.roster,(function(o,n){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.actives[t.active_index].is_open,expression:"data.actives[data.active_index].is_open"}],key:n,staticClass:"roster_box"},[s("div",{staticClass:"building"},[e._v(e._s(o.title))]),e._l(o.layer_list,(function(t,o){return s("div",{key:o,staticClass:"layer"},[s("div",{staticClass:"floor"},[e._v(e._s(t.title))]),e._l(t.user,(function(o,n){return s("div",{key:n,staticClass:"layer"},[s("el-row",[s("el-col",{attrs:{span:10}},[e._v(" "+e._s(o.grade)+" "+e._s(o.username)+" "+e._s(o.name)+" "+e._s(o.tel)+" "+e._s(o.type)+" ")]),s("el-col",{attrs:{span:6}},[s("el-autocomplete",{directives:[{name:"show",rawName:"v-show",value:e.is_show_button,expression:"is_show_button"}],staticClass:"inline-input",attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入内容"},model:{value:o.type,callback:function(t){e.$set(o,"type",t)},expression:"user.type"}})],1),s("el-col",{attrs:{span:6}},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.is_show_button,expression:"is_show_button"}],attrs:{size:"mini",icon:"el-icon-close"},on:{click:function(s){return e.remove_user(t,n)}}})],1)],1)],1)})),s("el-row",{directives:[{name:"show",rawName:"v-show",value:e.is_show_button,expression:"is_show_button"}],attrs:{gutter:10}},[s("el-col",{attrs:{xs:5,md:8}},[s("el-input",{attrs:{size:"small",placeholder:"学号"},model:{value:t.user_object.username,callback:function(s){e.$set(t.user_object,"username",s)},expression:"layer.user_object.username"}})],1),s("el-col",{attrs:{xs:5,md:8}},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.is_show_button,expression:"is_show_button"}],attrs:{size:"small",icon:"el-icon-search"},on:{click:function(s){return e.search_user(t)}}},[e._v("添加")])],1)],1)],2)}))],2)}))}},{key:"scheduling_button",fn:function(){return[s("el-button",{on:{click:function(t){return e.simple_information()}}},[e._v("查看/修改")])]},proxy:!0},{key:"buttons",fn:function(t){var o=t.scope,n=t.task_id;return[s("el-button",{attrs:{width:"120",size:"small",type:o.row.flg?"warning":"info",disabled:!o.row.flg},on:{click:function(t){return e.submit(o.row,n)}}},[e._v(" 晚归")])]}}])},[s("el-row",{attrs:{gutter:10}},[s("el-col",[s("el-card",{staticClass:"data-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e._v("数据管理")]),s("RoomDelete"),s("RoomRecover"),s("FloorChoice")],1)],1)],1)],1)],1)},n=[],r=s("febe"),i=(s("e186"),s("87d5"),s("4c1e"),s("fee8"),s("89a8"),s("1a91"),s("993f"),s("ee01")),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"inline"},[s("el-popover",{attrs:{placement:"top-start",title:"取消学生入住",width:"200",trigger:"hover",content:"针对假期大量学生请假时把这部分学生在宿舍的情况隐藏掉，剩下没有请假的学生，方便工作"}},[s("el-button",{attrs:{slot:"reference"},on:{click:function(t){e.room_delete_dialog_visible=!0}},slot:"reference"},[e._v("取消学生入住")])],1),s("el-dialog",{attrs:{title:"学生入住",visible:e.room_delete_dialog_visible,width:"60%"},on:{"update:visible":function(t){e.room_delete_dialog_visible=t}}},[e._v("、 "),s("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:20},placeholder:"请输入学号 回车分割"},model:{value:e.username_str,callback:function(t){e.username_str=t},expression:"username_str"}}),s("div",{staticStyle:{margin:"20px 0","text-align":"right"}},[s("el-button",{attrs:{type:"primary"},on:{click:e.stu_in_room_delete}},[e._v("隐藏列表里面的学生")])],1)],1)],1)},l=[],c={data:function(){return{username_str:"",room_delete_dialog_visible:!1}},methods:{stu_in_room_delete:function(){var e=this,t=this.username_str.split(/[\s\n]/);this.$store.dispatch("school_information/stu_in_room_delete",{username_list:t}).then((function(t){e.$message({type:"success",message:t.data+"名学生设置为不在寝室显示"})}))}}},u=c,_=s("cba8"),d=Object(_["a"])(u,a,l,!1,null,"549dd5c7",null),m=d.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"inline"},[s("el-dialog",{attrs:{title:"寝室名单",visible:e.show,width:"60%"},on:{"update:visible":function(t){e.show=t}}},[s("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),s("em",[e._v("点击上传")])])])],1),s("el-button",{attrs:{slot:"reference"},on:{click:function(t){e.show=!0}},slot:"reference"},[e._v("导入寝室数据")])],1)},v=[],p={data:function(){return{show:!0}},methods:{}},f=p,b=Object(_["a"])(f,h,v,!1,null,null,null),g=b.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"inline"},[s("el-popover",{attrs:{placement:"top-start",title:"取消学生入住",width:"200",trigger:"hover",content:"对之前删除的学生进行恢复显示"}},[s("el-button",{attrs:{slot:"reference"},on:{click:function(t){e.room_recover_dialog_visible=!0}},slot:"reference"},[e._v("恢复学生入住")])],1),s("el-dialog",{attrs:{title:"学生入住",visible:e.room_recover_dialog_visible,width:"60%"},on:{"update:visible":function(t){e.room_recover_dialog_visible=t}}},[e._v("、 "),s("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:20},placeholder:"请输入学号 回车分割"},model:{value:e.username_str,callback:function(t){e.username_str=t},expression:"username_str"}}),s("div",{staticStyle:{margin:"20px 0","text-align":"right"}},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.stu_in_room_recover(!1)}}},[e._v("恢复列表中的学生")]),s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.stu_in_room_recover(!0)}}},[e._v("恢复全部学生")])],1)],1)],1)},x=[],y={data:function(){return{username_str:"",room_recover_dialog_visible:!1}},methods:{stu_in_room_recover:function(e){var t=this,s=this.username_str.split(/[\s\n]/);this.$store.dispatch("school_information/stu_in_room_recover",{username_list:s,is_all:e,task_id:this.$store.getters.task.id}).then((function(e){t.$message({type:"success",message:e.data+"名学生从寝室恢复显示"})}))}}},k=y,$=Object(_["a"])(k,w,x,!1,null,null,null),C=$.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Echarts"},[s("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"main"}})])}],E={name:"Echarts",mounted:function(){this.myEcharts()},methods:{myEcharts:function(){var e=this.$echarts.init(document.getElementById("main")),t={title:{text:"ECharts 入门示例"},tooltip:{},legend:{data:["销量"]},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]};e.setOption(t)}}},O=E,S=Object(_["a"])(O,j,R,!1,null,null,null),N=S.exports,z=s("ffee"),T={components:{TaskFrame:i["a"],RoomDelete:m,RoomRecover:C,InUserRoom:g,Statistical:N,FloorChoice:z["a"]},data:function(){return{input_user_object:{},user_list_str:"",excel_url:"",is_show_button:!0,options:[{value:1,label:"黄金糕"},{value:2,label:"双皮奶"},{value:3,label:"蚵仔煎"}]}},methods:{querySearch:function(e,t){var s=[{value:"统计审核"},{value:"随查"},{value:"检查"}];t(s)},simple_information:function(){this.$data.is_show_button=!this.$data.is_show_button},add_user:function(e){e.user.push(JSON.parse(JSON.stringify(e.user_object))),e.user_object={username:"",name:"",grade:"",tel:""}},add_user_list_str:function(){var e=this,t=this.$data.user_list_str;if(!(t.length<1)){var s=t.split("\n");s.forEach((function(t){e.$store.dispatch("school_information/student_information",{username:t}).then((function(t){e.$refs.frame.roster.push(t.data)}))})),console.log(s)}},remove_user:function(e,t){e.user.splice(t,1)},search_user:function(e){var t=this;this.$store.dispatch("school_information/student_information",{username:e.user_object.username}).then((function(s){e.user_object=s.data,t.add_user(e)})),clearTimeout(this.timeout),this.timeout=setTimeout((function(){}),2e3*Math.random())},undo_record:function(e,t){var s=this;return Object(r["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,s.$store.dispatch("school_attendance/undo_record",{record_id:e,task_id:t}).then((function(e){console.log(2)}));case 2:case"end":return o.stop()}}),o)})))()},submit:function(e,t){var s=this,o={records:[{name:e.student_approved,reason_is_custom:!0,status:"0",user_id:e.student_approved_number,reason:"晚归",score:6}],room_id:e.room_str,task_id:t};o.room_id&&(console.log(o),this.$confirm("是否扣分?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(1),n.next=3,s.undo_record(e.id,t);case 3:return console.log(3),n.next=6,s.$store.dispatch("school_attendance/submit_knowing_discipline",o).then((function(t){s.$message({type:"success",message:"扣分成功"}),console.log(4),e.flg=!1}));case 6:case"end":return n.stop()}}),n)})))).catch((function(e){console.log(e),s.$message({type:"info",message:"取消"})})),console.log(o))}}},F=T,J=(s("c7ba"),Object(_["a"])(F,o,n,!1,null,"605fe2bc",null));t["default"]=J.exports},bc04:function(e,t,s){},c7ba:function(e,t,s){"use strict";s("bc04")}}]);