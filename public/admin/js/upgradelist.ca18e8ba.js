(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["upgradelist"],{"159b":function(e,t,r){var a=r("da84"),n=r("fdbc"),o=r("17c2"),i=r("9112");for(var s in n){var l=a[s],c=l&&l.prototype;if(c&&c.forEach!==o)try{i(c,"forEach",o)}catch(u){c.forEach=o}}},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,n=r("a640"),o=n("forEach");e.exports=o?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("d3b7");function a(e,t,r,a,n,o,i){try{var s=e[o](i),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function s(e){a(i,n,o,s,l,"next",e)}function l(e){a(i,n,o,s,l,"throw",e)}s(void 0)}))}}},"96cf":function(e,t,r){var a=function(e){"use strict";var t,r=Object.prototype,a=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(O){l=function(e,t,r){return e[t]=r}}function c(e,t,r,a){var n=t&&t.prototype instanceof m?t:m,o=Object.create(n.prototype),i=new D(a||[]);return o._invoke=F(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=c;var d="suspendedStart",p="suspendedYield",f="executing",g="completed",h={};function m(){}function A(){}function v(){}var b={};l(b,o,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(B([])));w&&w!==r&&a.call(w,o)&&(b=w);var E=v.prototype=m.prototype=Object.create(b);function I(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(n,o,i,s){var l=u(e[n],e,o);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"===typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(d).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,s)}))}s(l.arg)}var n;function o(e,a){function o(){return new t((function(t,n){r(e,a,t,n)}))}return n=n?n.then(o,o):o()}this._invoke=o}function F(e,t,r){var a=d;return function(n,o){if(a===f)throw new Error("Generator is already running");if(a===g){if("throw"===n)throw o;return L()}r.method=n,r.arg=o;while(1){var i=r.delegate;if(i){var s=Q(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=f;var l=u(e,t,r);if("normal"===l.type){if(a=r.done?g:p,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=g,r.method="throw",r.arg=l.arg)}}}function Q(e,r){var a=e.iterator[r.method];if(a===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,Q(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=u(a,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function B(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){while(++n<e.length)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:L}}function L(){return{value:t,done:!0}}return A.prototype=v,l(E,"constructor",v),l(v,"constructor",A),A.displayName=l(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===A||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},I(x.prototype),l(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new x(c(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},I(E),l(E,s,"Generator"),l(E,o,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=B,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(a,n){return s.type="throw",s.arg=e,r.next=a,n&&(r.method="next",r.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;k(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,a){return this.delegate={iterator:B(e),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=a}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}},a15b:function(e,t,r){"use strict";var a=r("23e7"),n=r("44ad"),o=r("fc6a"),i=r("a640"),s=[].join,l=n!=Object,c=i("join",",");a({target:"Array",proto:!0,forced:l||!c},{join:function(e){return s.call(o(this),void 0===e?",":e)}})},a640:function(e,t,r){"use strict";var a=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},ad46:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("升级中心")]),a("el-breadcrumb-item",[e._v("版本发布")])],1),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{placeholder:"请输入搜索内容",clearable:""},on:{clear:e.upgradeList},model:{value:e.queryInfo.keywords,callback:function(t){e.$set(e.queryInfo,"keywords",t)},expression:"queryInfo.keywords"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.upgradeList},slot:"append"})],1)],1)],1)],1),a("el-row",[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.addDialog}},[e._v("发布")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(t){return e.deleteClick()}}},[e._v("删除")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.upgradeListData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80"}}),a("el-table-column",{attrs:{prop:"title",label:"标题"}}),a("el-table-column",{attrs:{prop:"version",label:"版本"}}),a("el-table-column",{attrs:{prop:"type",label:"升级包类型"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"===t.row.type?a("span",[e._v("全量")]):a("span",[e._v("增量")])]}}])}),a("el-table-column",{attrs:{prop:"way",label:"升级方式"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.way?a("span",[e._v("提示更新")]):"1"===t.row.way?a("span",[e._v("热更新")]):a("span",[e._v("强制更新")])]}}])}),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"===t.row.status?a("el-tag",{attrs:{type:"success"}},[e._v("已上线")]):a("el-tag",{attrs:{type:"danger"}},[e._v("已下线")])]}}])}),a("el-table-column",{attrs:{prop:"create_time",label:"发布时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("date")(t.row.create_time))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"===t.row.status?a("el-tooltip",{attrs:{enterable:!1,effect:"dark",content:"下线",placement:"top"}},[a("el-button",{attrs:{type:"danger",icon:"el-icon-remove-outline",size:"mini"},on:{click:function(r){return e.statusEdit(t.row)}}})],1):a("el-tooltip",{attrs:{enterable:!1,effect:"dark",content:"上线",placement:"top"}},[a("el-button",{attrs:{type:"success",icon:"el-icon-circle-plus-outline",size:"mini"},on:{click:function(r){return e.statusEdit(t.row)}}})],1),a("el-tooltip",{attrs:{enterable:!1,effect:"dark",content:"编辑",placement:"top"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.editDialog(t.row.id)}}})],1),a("el-tooltip",{attrs:{enterable:!1,effect:"dark",content:"删除",placement:"top"}},[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.deleteClick(t.row.id)}}})],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":e.queryInfo.current_page,"page-sizes":[25,30,40,50],"page-size":e.queryInfo.per_page,layout:"total, sizes, prev, pager, next, jumper",total:e.queryInfo.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:"发布新版本",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addFormClose}},[a("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入版本标题"},model:{value:e.addForm.title,callback:function(t){e.$set(e.addForm,"title",t)},expression:"addForm.title"}})],1),a("el-form-item",{attrs:{label:"版本号",prop:"version"}},[a("el-input",{attrs:{placeholder:"请输入新版本号"},model:{value:e.addForm.version,callback:function(t){e.$set(e.addForm,"version",t)},expression:"addForm.version"}})],1),a("el-form-item",{attrs:{label:"升级包类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择升级包类型"},model:{value:e.addForm.type,callback:function(t){e.$set(e.addForm,"type",t)},expression:"addForm.type"}},[a("el-option",{attrs:{label:"全量",value:"1"}}),a("el-option",{attrs:{label:"增量",value:"0"}})],1)],1),a("el-form-item",{attrs:{label:"升级方式",prop:"way"}},[a("el-select",{attrs:{placeholder:"请选择升级方式"},model:{value:e.addForm.way,callback:function(t){e.$set(e.addForm,"way",t)},expression:"addForm.way"}},[a("el-option",{attrs:{label:"强制更新",value:"2"}}),a("el-option",{attrs:{label:"热更新",value:"1"}}),a("el-option",{attrs:{label:"提示更新",value:"0"}})],1)],1),a("el-form-item",{attrs:{label:"升级包",prop:"wgt_url"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.updateUrl,headers:e.headers,"show-file-list":!1,"on-success":e.handleAvatarSuccessAddFile,name:"file"}},[e.addForm.wgt_url?a("img",{staticClass:"avatar",attrs:{src:r("c91b")}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.addForm.status,callback:function(t){e.$set(e.addForm,"status",t)},expression:"addForm.status"}},[a("el-option",{attrs:{label:"已上线",value:"1"}}),a("el-option",{attrs:{label:"已下线",value:"0"}})],1)],1),a("el-form-item",{attrs:{label:"升级内容",prop:"content"}},[a("el-input",{attrs:{rows:5,type:"textarea",placeholder:"请输入升级内容"},model:{value:e.addForm.content,callback:function(t){e.$set(e.addForm,"content",t)},expression:"addForm.content"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitAdd}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"编辑版本",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editFormClose}},[a("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入版本标题"},model:{value:e.editForm.title,callback:function(t){e.$set(e.editForm,"title",t)},expression:"editForm.title"}})],1),a("el-form-item",{attrs:{label:"版本号",prop:"version"}},[a("el-input",{attrs:{placeholder:"请输入新版本号"},model:{value:e.editForm.version,callback:function(t){e.$set(e.editForm,"version",t)},expression:"editForm.version"}})],1),a("el-form-item",{attrs:{label:"升级包类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择升级包类型"},model:{value:e.editForm.type,callback:function(t){e.$set(e.editForm,"type",t)},expression:"editForm.type"}},[a("el-option",{attrs:{label:"全量",value:"1"}}),a("el-option",{attrs:{label:"增量",value:"0"}})],1)],1),a("el-form-item",{attrs:{label:"升级方式",prop:"way"}},[a("el-select",{attrs:{placeholder:"请选择升级方式"},model:{value:e.editForm.way,callback:function(t){e.$set(e.editForm,"way",t)},expression:"editForm.way"}},[a("el-option",{attrs:{label:"强制更新",value:"2"}}),a("el-option",{attrs:{label:"热更新",value:"1"}}),a("el-option",{attrs:{label:"提示更新",value:"0"}})],1)],1),a("el-form-item",{attrs:{label:"升级包",prop:"wgt_url"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.updateUrl,headers:e.headers,"show-file-list":!1,"on-success":e.handleAvatarSuccessEditFile,name:"file"}},[e.editForm.wgt_url?a("img",{staticClass:"avatar",attrs:{src:r("c91b")}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"升级内容",prop:"content"}},[a("el-input",{attrs:{rows:5,type:"textarea",placeholder:"请输入升级内容"},model:{value:e.editForm.content,callback:function(t){e.$set(e.editForm,"content",t)},expression:"editForm.content"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitEdit}},[e._v("确 定")])],1)],1)],1)],1)},n=[],o=r("1da1"),i=(r("159b"),r("a15b"),r("96cf"),{data:function(){return{queryInfo:{keywords:"",current_page:1,per_page:25,total:0},upgradeListData:[],deleteId:"",addDialogVisible:!1,editDialogVisible:!1,updateUrl:window.serverConfig.BASE_API+"base/upload",headers:{Authorization:window.sessionStorage.getItem("token")},addForm:{title:"",version:"",type:"",way:"",wgt_url:"",status:"",content:""},addFormRules:{title:[{required:!0,message:"请输入新版本标题",trigger:"blur"}],version:[{required:!0,message:"请输入新版本号",trigger:"blur"}],type:[{required:!0,message:"请选择升级包类型",trigger:"change"}],way:[{required:!0,message:"请选择升级方式",trigger:"change"}],wgt_url:[{required:!0,message:"请上传升级包",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}],content:[{required:!0,message:"请输入升级内容",trigger:"blur"}]},editForm:{},editFormRules:{title:[{required:!0,message:"请输入新版本标题",trigger:"blur"}],version:[{required:!0,message:"请输入新版本号",trigger:"blur"}],type:[{required:!0,message:"请选择升级包类型",trigger:"change"}],way:[{required:!0,message:"请选择升级方式",trigger:"change"}],wgt_url:[{required:!0,message:"请上传升级包",trigger:"change"}],content:[{required:!0,message:"请输入升级内容",trigger:"blur"}]}}},created:function(){var e=this;document.onkeydown=function(t){var r=window.event.keyCode;13===r&&e.upgradeList()},this.upgradeList()},methods:{upgradeList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("upgrade/list",{params:e.queryInfo});case 2:if(r=t.sent,a=r.data,200===a.code){t.next=6;break}return t.abrupt("return",e.$message.error(a.msg));case 6:e.queryInfo.total=a.data.total,e.upgradeListData=a.data.data;case 8:case"end":return t.stop()}}),t)})))()},addDialog:function(){this.addDialogVisible=!0},submitAdd:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("upgrade/add",e.addForm);case 4:if(a=t.sent,n=a.data,201===n.code){t.next=8;break}return t.abrupt("return",e.$message.error(n.msg));case 8:e.$message.success(n.msg),e.addDialogVisible=!1,e.upgradeList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},editDialog:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("upgrade/query/".concat(e));case 2:if(a=r.sent,n=a.data,200===n.code){r.next=6;break}return r.abrupt("return",t.$message.error(n.msg));case 6:t.editForm=n.data,t.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},submitEdit:function(){var e=this;this.$refs.editFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("upgrade/edit",e.editForm);case 4:if(a=t.sent,n=a.data,200===n.code){t.next=8;break}return t.abrupt("return",e.$message.error(n.msg));case 8:e.$message.success(n.msg),e.editDialogVisible=!1,e.upgradeList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},deleteClick:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""!==t&&(this.deleteId=t),""===this.deleteId||void 0===this.deleteId||null==this.deleteId)return this.$message.warning("请选中需要删除的数据！");this.$confirm("是否继续删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.delete("upgrade/delete",{params:{id:e.deleteId}});case 2:if(r=t.sent,a=r.data,200===a.code){t.next=6;break}return t.abrupt("return",e.$message.error(a.msg));case 6:e.$message.success(a.msg),e.upgradeList();case 8:case"end":return t.stop()}}),t)})))).catch((function(){e.$message.info("已取消！"),e.upgradeList()}))},handleSelectionChange:function(e){var t=[];e.forEach((function(e){t.push(e.id)})),this.deleteId=t.join(",")},handleSizeChange:function(e){this.queryInfo.per_page=e,this.upgradeList()},handleCurrentChange:function(e){this.queryInfo.current_page=e,this.upgradeList()},statusEdit:function(e){var t=this;this.$confirm("是否继续变更状态?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a="1","1"===e.status&&(a="0"),r.next=4,t.$http.put("upgrade/statusedit",{id:e.id,status:a});case 4:if(n=r.sent,o=n.data,200===o.code){r.next=8;break}return r.abrupt("return",t.$message.error(o.msg));case 8:t.$message.success(o.msg),t.upgradeList();case 10:case"end":return r.stop()}}),r)})))).catch((function(){t.$message.info("已取消！"),t.upgradeList()}))},addFormClose:function(){this.$refs.addFormRef.resetFields()},editFormClose:function(){this.$refs.editFormRef.resetFields()},handleAvatarSuccessAddFile:function(e,t){if(200!==e.code)return this.$message.error(e.msg);this.addForm.wgt_url=e.data[0],this.$message.success(e.msg)},handleAvatarSuccessEditFile:function(e,t){if(200!==e.code)return this.$message.error(e.msg);this.editForm.wgt_url=e.data[0],this.$message.success(e.msg)}}}),s=i,l=r("2877"),c=Object(l["a"])(s,a,n,!1,null,"3ab36028",null);t["default"]=c.exports},c91b:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=upgradelist.ca18e8ba.js.map