(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cf3d9ac"],{"1df8":function(t,e,a){},3426:function(t,e,a){},"39d1":function(t,e,a){"use strict";a("3426")},eecf:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Audit"},[a("div",[t._v("班级：")]),t._l(t.classList,(function(e){return a("el-radio",{key:e.index,attrs:{label:e.id},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v(t._s(e.name))])})),a("div",[t._v("待审核：")]),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.askList}},[a("el-table-column",{attrs:{type:"expand",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"家长电话"}},[a("span",[t._v(t._s(e.row.parents_call))])]),a("el-form-item",{attrs:{label:"学生电话"}},[a("span",[t._v(t._s(e.row.contact_info))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"students_name",label:"照片",width:"180"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"140px"},attrs:{fit:"contain",src:t.row.photo,"preview-src-list":[t.row.photo]}})]}}])}),a("el-table-column",{attrs:{prop:"students_name",label:"姓名",width:"80"}}),a("el-table-column",{attrs:{prop:"ask_type",label:"请假类型"}}),a("el-table-column",{attrs:{prop:"reason",label:"请假原因"}}),a("el-table-column",{attrs:{prop:"place",label:"请假地点"}}),a("el-table-column",{attrs:{prop:"start_time",label:"开始日期",width:"180"}}),a("el-table-column",{attrs:{prop:"end_time",label:"结束日期",width:"180"}}),a("el-table-column",{attrs:{prop:"min",label:"时长"}}),a("el-table-column",{attrs:{width:"260",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.ask_option(e.$index,e.row,"passed")}}},[t._v("通过")]),-1!=t.roles.indexOf("teacher")?[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.ask_option(e.$index,e.row,"")}}},[t._v("递交上级")])]:t._e(),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.ask_option(e.$index,e.row,"failed")}}},[t._v("不通过")])]}}])})],1)]],2)},n=[],i=a("5530"),l=a("2f62"),o={name:"Audit",data:function(){return{radio:"",tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],ask_msg:{ask_type:"ask_type",reason:"reason",place:"place",start_time:"start_time",end_time:"end_time"}}},computed:Object(i["a"])({},Object(l["b"])(["classList","roles","askList"])),watch:{radio:function(t){this.get_ask_list()}},created:function(){console.log(this.classList),this.classList.length<=0||(this.radio=this.classList[0].id)},methods:{get_ask_list:function(){this.$store.dispatch("ask/getAsk",{type:0,classid:this.radio})},ask_option:function(t,e,a){var s=this;this.$store.dispatch("ask/putAsk",{request:{id:e.id,operate_sate:a},index:t}).then((function(t){s.get_ask_list()}))}}},r=o,c=(a("fa05"),a("39d1"),a("2877")),d=Object(c["a"])(r,s,n,!1,null,"7220004c",null);e["default"]=d.exports},fa05:function(t,e,a){"use strict";a("1df8")}}]);