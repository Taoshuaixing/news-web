(self.webpackChunkng_alain=self.webpackChunkng_alain||[]).push([[285],{78260:function(e,n,t){"use strict";t.d(n,{J:function(){return c}});var i=t(57499),o=t(91841),r=t(37716),s=t(31584);let c=(()=>{class e{constructor(e,n){this.http=e,this.cookieService=n}searchAll(e){return this.http.get(e)}search(e,n,t){return this.http.post(e+n,t)}downLoad(e,n,t){return this.http.get(e+n+t,{responseType:"arraybuffer"})}searchCrud(e,n,t,r){const s=(new o.WM).set("ticket",this.cookieService.get("ticket"));return this.http.get(i.N.searchUrl+""+`${r}?s=${t}&limit=${e}&page=${n}`,{headers:s})}}return e.\u0275fac=function(n){return new(n||e)(r.LFG(o.eN),r.LFG(s.N))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},75179:function(e,n,t){"use strict";t.r(n),t.d(n,{PersonsCenterModule:function(){return X}});var i=t(51679),o=t(63423),r=t(57499),s=t(37716),c=t(75953),a=t(31584),l=t(43978),u=t(17018),p=t(16704),d=t(55329),g=t(83385),Z=t(83730),h=t(84514),z=t(10464);const T=function(){return[16,16]};let f=(()=>{class e{constructor(e,n,t,i){this.router=e,this.subjectService=n,this.cookieService=t,this.authService=i,this.menuObj={setting:"/persons-center/setting",quanXian:"/persons-center/authority",dataBase:"/persons-center/database",collection:"/persons-center/collection"},this.userProfile=JSON.parse(this.cookieService.get("profile")),this.unSearch=this.subjectService.listen.subscribe(e=>{console.log(e),this.getAuthInfo()})}ngOnInit(){}getAuthInfo(){this.authService.profile("api/auth/profile",r.N.searchUrl).subscribe(e=>{this.cookieService.set("profile",JSON.stringify(e)),this.userProfile=JSON.parse(this.cookieService.get("profile")),this.router.navigate(["/"])})}ngOnDestroy(){this.unSearch.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(s.Y36(o.F0),s.Y36(c._),s.Y36(a.N),s.Y36(l.e8))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-persons-center"]],decls:40,vars:17,consts:[[1,"persons-layout"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","8"],["nz-col","","nzSpan","24"],["nzTitle","\u4e2a\u4eba\u4fe1\u606f",2,"border-radius","10px"],[1,"persons-center-card"],[3,"nzSize","nzSrc"],[1,"persons-center-admin"],[1,"persons-center-message"],[1,"margin-text"],["nz-menu","","nzMode","inline",2,"border-radius","10px"],["nz-menu-item","","nzMatchRouter","","nzSelected","",3,"routerLink"],["nz-icon","",3,"nzType","nzTheme"],["nz-menu-item","","nzMatchRouter","","nzOpen","",3,"routerLink"],["nz-menu-item","","nzMatchRouter","",3,"routerLink"],["nz-icon","",3,"nzType","nzTheme","nzTwotoneColor"],["nz-col","","nzSpan","16"]],template:function(e,n){1&e&&(s.TgZ(0,"nz-card",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",1),s.TgZ(4,"div",3),s.TgZ(5,"nz-card",4),s.TgZ(6,"div",5),s._UZ(7,"nz-avatar",6),s.TgZ(8,"div",7),s.TgZ(9,"h1"),s._uU(10),s.qZA(),s.TgZ(11,"span"),s._uU(12,"\u8d85\u7ea7\u7ba1\u7406\u5458"),s.qZA(),s.qZA(),s.qZA(),s._UZ(13,"nz-divider"),s.TgZ(14,"div",8),s.TgZ(15,"span"),s._uU(16,"\u4e0a\u6b21\u767b\u5f55\u65f6\u95f4\uff1a"),s.qZA(),s.TgZ(17,"span",9),s._uU(18,"2021-11-11"),s.qZA(),s._UZ(19,"br"),s.TgZ(20,"span"),s._uU(21,"\u4e0a\u6b21\u767b\u5f55\u5730\u70b9\uff1a"),s.qZA(),s.TgZ(22,"span",9),s._uU(23,"\u5317\u4eac\u6d77\u6dc0"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(24,"div",3),s.TgZ(25,"ul",10),s.TgZ(26,"li",11),s._UZ(27,"i",12),s.TgZ(28,"span"),s._uU(29,"\u7528\u6237\u6570\u636e"),s.qZA(),s.qZA(),s.TgZ(30,"li",13),s._UZ(31,"i",12),s.TgZ(32,"span"),s._uU(33,"\u7528\u6237\u8bbe\u7f6e"),s.qZA(),s.qZA(),s.TgZ(34,"li",14),s._UZ(35,"i",15),s.TgZ(36,"span"),s._uU(37,"\u7528\u6237\u6536\u85cf"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(38,"div",16),s._UZ(39,"router-outlet"),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.Q6J("nzGutter",s.DdM(15,T)),s.xp6(2),s.Q6J("nzGutter",s.DdM(16,T)),s.xp6(4),s.Q6J("nzSize",80)("nzSrc","assets/img/guanliyuan.png"),s.xp6(3),s.Oqu(n.userProfile.username),s.xp6(16),s.Q6J("routerLink",n.menuObj.dataBase),s.xp6(1),s.Q6J("nzType","database")("nzTheme","twotone"),s.xp6(3),s.Q6J("routerLink",n.menuObj.setting),s.xp6(1),s.Q6J("nzType","setting")("nzTheme","twotone"),s.xp6(3),s.Q6J("routerLink",n.menuObj.collection),s.xp6(1),s.Q6J("nzType","heart")("nzTheme","twotone")("nzTwotoneColor","#eb2f96"))},directives:[u.bd,p.SK,p.t3,d.Dz,g.g,Z.wO,h.w,Z.r9,o.rH,z.Ls,o.lC],encapsulation:2}),e})();var A=t(67574),m=t(91841),q=t(45435),v=t(68058),b=t(23080),U=t(44788),S=t(14453),k=t(29374),x=t(38583),_=t(26214),J=t(57674),y=t(3679);function w(e,n){if(1&e){const e=s.EpF();s.TgZ(0,"button",11),s.NdJ("click",function(){return s.CHM(e),s.oxw().uploadImage()}),s._uU(1,"\u786e\u8ba4\u4fee\u6539"),s.qZA()}}function C(e,n){if(1&e){const e=s.EpF();s.ynx(0),s.TgZ(1,"input",12),s.NdJ("ngModelChange",function(n){return s.CHM(e),s.oxw().userProfile.username=n}),s.qZA(),s.BQk()}if(2&e){const e=s.oxw();s.xp6(1),s.Q6J("ngModel",e.userProfile.username)}}let O=(()=>{class e{constructor(e,n,t,i,o){this.msg=e,this.cookieService=n,this.http=t,this.notification=i,this.subjectService=o,this.loading=!1,this.ifUserName=!0,this.isVisible=!1,this.userProfile=JSON.parse(this.cookieService.get("profile")),this.fileList=[],this.headers=null,this.uploadLoading=!1,this.beforeUpload=(e,n)=>new A.y(n=>{const t="image/jpeg"===e.type||"image/png"===e.type;if(!t)return this.msg.error("You can only upload JPG file!"),void n.complete();const i=e.size/1024/1024<2;if(!i)return this.msg.error("Image must smaller than 2MB!"),void n.complete();n.next(t&&i),n.complete()})}ngOnInit(){console.log(this.userProfile)}showModal(){this.isVisible=!0}handleOk(){console.log("Button ok clicked!"),this.isVisible=!1}handleCancel(){console.log("Button cancel clicked!"),this.isVisible=!1}glaction(){return r.N.searchUrl+"api/test"}handleChange(e){console.log(e),"start"==e.type&&(this.uploadLoading=!0)}uploadImage(){const e=new FormData;this.uploadLoading=!0,this.imageLimit=this.fileList.length,this.fileList.forEach((n,t)=>{t===this.fileList.length-1&&e.append("file",n.originFileObj)});const n=new m.aW("POST",r.N.searchUrl+"api/p/t/users/upload-avatar/"+this.userProfile.id,e,{});this.http.request(n).pipe((0,q.h)(e=>e instanceof m.Zn)).subscribe(()=>{this.uploadLoading=!1,this.fileList=[],this.notification.success("\u5934\u50cf\u4fee\u6539\u6210\u529f",""),this.subjectService.emit("update")},()=>{this.uploadLoading=!1,this.notification.error("\u5934\u50cf\u4fee\u6539\u5931\u8d25",""),this.subjectService.emit("error")})}}return e.\u0275fac=function(n){return new(n||e)(s.Y36(v.dD),s.Y36(a.N),s.Y36(m.eN),s.Y36(b.zb),s.Y36(c._))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-setting"]],decls:18,vars:6,consts:[["nz-row","","nzGutter","16"],["nz-col","","nzSpan","12"],[1,"clearfix"],["nzListType","picture",1,"upload-list-inline",3,"nzDownload","nzAction","nzFileList","nzBeforeUpload","nzFileListChange","nzChange"],["nz-button",""],["nz-icon","","nzType","upload"],["nz-button","","nzType","primary",3,"click",4,"ngIf"],[1,"username-block"],["nz-icon","","nzType","form","nzTheme","outline",3,"click"],["nzTitle","\u4fee\u6539\u7528\u6237\u4fe1\u606f",3,"nzVisible","nzVisibleChange","nzOnCancel","nzOnOk"],[4,"nzModalContent"],["nz-button","","nzType","primary",3,"click"],["nz-input","",3,"ngModel","ngModelChange"]],template:function(e,n){1&e&&(s.TgZ(0,"nz-card"),s.TgZ(1,"div",0),s.TgZ(2,"div",1),s._uU(3," \u4fee\u6539\u7528\u6237\u5934\u50cf "),s.TgZ(4,"div",2),s.TgZ(5,"nz-upload",3),s.NdJ("nzFileListChange",function(e){return n.fileList=e})("nzChange",function(e){return n.handleChange(e)}),s.TgZ(6,"button",4),s.TgZ(7,"span"),s._UZ(8,"i",5),s._uU(9," Upload "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.YNc(10,w,2,0,"button",6),s.qZA(),s.TgZ(11,"div",1),s._uU(12," \u4fee\u6539\u7528\u6237\u4fe1\u606f "),s.TgZ(13,"h1",7),s._uU(14),s.TgZ(15,"i",8),s.NdJ("click",function(){return n.showModal()}),s.qZA(),s.qZA(),s.TgZ(16,"nz-modal",9),s.NdJ("nzVisibleChange",function(e){return n.isVisible=e})("nzOnCancel",function(){return n.handleCancel()})("nzOnOk",function(){return n.handleOk()}),s.YNc(17,C,2,1,"ng-container",10),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(5),s.Q6J("nzAction",n.glaction())("nzFileList",n.fileList)("nzBeforeUpload",n.beforeUpload),s.xp6(5),s.Q6J("ngIf",0!=n.fileList.length),s.xp6(4),s.Oqu(n.userProfile.username),s.xp6(2),s.Q6J("nzVisible",n.isVisible))},directives:[u.bd,p.SK,p.t3,U.FY,S.ix,k.dQ,h.w,z.Ls,x.O5,_.du,_.Hf,J.Zp,y.Fj,y.JJ,y.On],encapsulation:2}),e})();var L=t(78260),N=t(19628);const Q=["nzTreeComponent"];function M(e,n){if(1&e){const e=s.EpF();s.TgZ(0,"nz-tree",11),s.NdJ("nzClick",function(n){return s.CHM(e),s.oxw().onSelectTopic(n)}),s.qZA()}if(2&e){const e=s.oxw(),n=s.MAs(5);s.Q6J("nzData",e.nodes)("nzTreeTemplate",n)}}function I(e,n){if(1&e&&(s.TgZ(0,"span"),s.TgZ(1,"span",14),s._uU(2),s.qZA(),s.qZA()),2&e){const e=s.oxw().$implicit;s.xp6(2),s.Oqu(e.title)}}function P(e,n){if(1&e&&(s.TgZ(0,"span"),s.TgZ(1,"span",15),s._uU(2),s.qZA(),s.qZA()),2&e){const e=s.oxw().$implicit;s.xp6(2),s.Oqu(e.title)}}function Y(e,n){if(1&e&&(s.TgZ(0,"span",12),s.YNc(1,I,3,1,"span",13),s.YNc(2,P,3,1,"span",13),s.qZA()),2&e){const e=n.$implicit;s.xp6(1),s.Q6J("ngIf","\u4e3b\u9898\u68c0\u7d22"===e.title),s.xp6(1),s.Q6J("ngIf","\u4e3b\u9898\u68c0\u7d22"!==e.title)}}const D=function(){return[16,24]};let F=(()=>{class e{constructor(e,n,t,i){this.cookieService=e,this.crud=n,this.notification=t,this.crudService=i,this.selectedTopic=new s.vpe,this.twoTitle="",this.modalTitle="\u4e3b\u9898\u68c0\u7d22",this.userProfile=JSON.parse(this.cookieService.get("profile")),this.groupId=0,this.nodes=null,this.updateBody={name:"",id:0,groupId:0,parent:null,updateFlg:!1}}ngOnInit(){this.userProfile=JSON.parse(this.cookieService.get("profile")),this.userProfile.groups&&console.log(this.groupId)}initData(){this.crudService.searchCrud(1e3,1,`{"$and":[{"groupId":${this.groupId}},{"parent.id":{"$isnull":true}}]}`,"api/topic-crud").subscribe(e=>{const n=e.data;console.log(n);const t=[];let i=!0;for(let o of n){const e={title:o.name,key:o.id,expanded:!0,children:null,parent:null};if(i&&(this.selectedTopic.emit({id:o.id,name:o.name}),i=!1),o.children){const n=[];for(let e of o.children)n.push({title:e.name,key:e.id,expanded:!0,children:null,parent:{id:o.id}});e.children=n}t.push(e)}console.log(t),this.nodes=t})}onSelectTopic(e){console.log(e.node.origin),this.selectedTopic.emit({id:e.node.origin.key,name:e.node.origin.title})}deleteLike(){alert("\u529f\u80fd\u5f00\u53d1\u4e2d")}}return e.\u0275fac=function(n){return new(n||e)(s.Y36(a.N),s.Y36(l.Id),s.Y36(b.zb),s.Y36(L.J))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-user-collection"]],viewQuery:function(e,n){if(1&e&&s.Gf(Q,5),2&e){let e;s.iGM(e=s.CRH())&&(n.nzTreeComponent=e.first)}},outputs:{selectedTopic:"selectedTopic"},decls:44,vars:10,consts:[["nz-row","","nzGutter","16"],["nz-col","","nzSpan","5"],["nzBlockNode","",3,"nzData","nzTreeTemplate","nzClick",4,"ngIf"],["nzTreeTemplate",""],[2,"border-right","1px solid #dddddd"],["nz-col","","nzSpan","18",2,"margin-left","10px"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","17",1,"content-num"],["nz-col","","nzSpan","5",1,"content-time"],["nz-col","","nzSpan","1"],["nz-icon","","nzType","delete","nzTheme","twotone",2,"font-size","20px","cursor","pointer",3,"nzTwotoneColor","click"],["nzBlockNode","",3,"nzData","nzTreeTemplate","nzClick"],[1,"custom-node"],[4,"ngIf"],[1,"folder-name-zhuti"],[1,"folder-name"]],template:function(e,n){1&e&&(s.TgZ(0,"nz-card"),s.TgZ(1,"div",0),s.TgZ(2,"div",1),s.YNc(3,M,1,2,"nz-tree",2),s.YNc(4,Y,3,2,"ng-template",null,3,s.W1O),s.qZA(),s._UZ(6,"div",4),s.TgZ(7,"div",5),s.TgZ(8,"div",6),s.TgZ(9,"div",7),s.TgZ(10,"span"),s._uU(11,"1"),s.qZA(),s.TgZ(12,"a"),s._uU(13,"\u4e2d\u65b0\u7f51\u4e0a\u6d777\u670828\u65e5\u7535"),s.qZA(),s.qZA(),s.TgZ(14,"div",8),s.TgZ(15,"span"),s._uU(16,"2021-11-23"),s.qZA(),s.qZA(),s.TgZ(17,"div",9),s.TgZ(18,"i",10),s.NdJ("click",function(){return n.deleteLike()}),s.qZA(),s.qZA(),s.qZA(),s._UZ(19,"nz-divider"),s.TgZ(20,"div",6),s.TgZ(21,"div",7),s.TgZ(22,"span"),s._uU(23,"2"),s.qZA(),s.TgZ(24,"a"),s._uU(25,"\u300a\u897f\u6e38\u8bb0\u300b\u4f5c\u4e3a\u56db\u5927\u540d\u8457\u4e4b\u4e00"),s.qZA(),s.qZA(),s.TgZ(26,"div",8),s.TgZ(27,"span"),s._uU(28,"2021-11-23"),s.qZA(),s.qZA(),s.TgZ(29,"div",9),s.TgZ(30,"i",10),s.NdJ("click",function(){return n.deleteLike()}),s.qZA(),s.qZA(),s.qZA(),s._UZ(31,"nz-divider"),s.TgZ(32,"div",6),s.TgZ(33,"div",7),s.TgZ(34,"span"),s._uU(35,"3"),s.qZA(),s.TgZ(36,"a"),s._uU(37,"\u91d1\u5eb8\u5148\u751f\u521b\u9020\u51fa\u4e86\u4e00\u4e2a\u7545\u5feb\u6dcb\u6f13\u7684\u6b66\u4fa0\u4e16\u754c"),s.qZA(),s.qZA(),s.TgZ(38,"div",8),s.TgZ(39,"span"),s._uU(40,"2021-11-23"),s.qZA(),s.qZA(),s.TgZ(41,"div",9),s.TgZ(42,"i",10),s.NdJ("click",function(){return n.deleteLike()}),s.qZA(),s.qZA(),s.qZA(),s._UZ(43,"nz-divider"),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(3),s.Q6J("ngIf",n.nodes),s.xp6(5),s.Q6J("nzGutter",s.DdM(7,D)),s.xp6(10),s.Q6J("nzTwotoneColor","#eb2f96"),s.xp6(2),s.Q6J("nzGutter",s.DdM(8,D)),s.xp6(10),s.Q6J("nzTwotoneColor","#eb2f96"),s.xp6(2),s.Q6J("nzGutter",s.DdM(9,D)),s.xp6(10),s.Q6J("nzTwotoneColor","#eb2f96"))},directives:[u.bd,p.SK,p.t3,x.O5,h.w,z.Ls,g.g,N.Hc],encapsulation:2}),e})();var G=t(82281),B=t(26571);const j=function(){return[16,16]},V=function(){return{"0%":"#108ee9","100%":"#87d068"}},$=[{path:"",component:f,children:[{path:"",redirectTo:"database",pathMatch:"full"},{path:"setting",component:O},{path:"database",component:(()=>{class e{constructor(){}ngOnInit(){this.lineOPtion={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0}]},this.sanOPtion={xAxis:{},yAxis:{},series:[{symbolSize:20,data:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]],type:"scatter"}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-user-database"]],decls:42,vars:13,consts:[["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","8"],[1,"persons-col",2,"background-image","linear-gradient(135deg, #5efce8 10%, #736efe 100%)"],["nz-icon","","nzType","user","nzTheme","outline"],[2,"margin-left","40px"],[1,"persons-col",2,"background-image","linear-gradient(135deg, #ffd3a5 10%, #fd6585 100%)"],["nz-icon","","nzType","bell","nzTheme","outline"],[1,"persons-col",2,"background-image","linear-gradient(135deg, #81ffef 10%, #f067b4 100%)"],["nz-icon","","nzType","bug","nzTheme","outline"],["nz-col","","nzSpan","24"],["nzTitle","\u4efb\u52a1\u8be6\u60c5",2,"border-radius","10px"],[1,"persons-progress"],["nzStatus","active",3,"nzPercent","nzStrokeColor"],["nz-col","","nzSpan","12"],["echarts","",3,"options"]],template:function(e,n){1&e&&(s.TgZ(0,"nz-card"),s.TgZ(1,"div",0),s.TgZ(2,"div",1),s.TgZ(3,"div",2),s._UZ(4,"i",3),s.TgZ(5,"div",4),s.TgZ(6,"h1"),s._uU(7,"2234"),s.qZA(),s.TgZ(8,"span"),s._uU(9,"\u7528\u6237\u8bbf\u95ee\u91cf"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"div",1),s.TgZ(11,"div",5),s._UZ(12,"i",6),s.TgZ(13,"div",4),s.TgZ(14,"h1"),s._uU(15,"43"),s.qZA(),s.TgZ(16,"span"),s._uU(17,"\u7cfb\u7edf\u901a\u77e5\u91cf"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(18,"div",1),s.TgZ(19,"div",7),s._UZ(20,"i",8),s.TgZ(21,"div",4),s.TgZ(22,"h1"),s._uU(23,"16"),s.qZA(),s.TgZ(24,"span"),s._uU(25,"bug\u6570\u91cf"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(26,"div",9),s.TgZ(27,"nz-card",10),s.TgZ(28,"div",11),s.TgZ(29,"span"),s._uU(30,"\u63a5\u53e3\u8c03\u8bd5"),s.qZA(),s._UZ(31,"nz-progress",12),s.TgZ(32,"span"),s._uU(33,"\u7ec4\u4ef6"),s.qZA(),s._UZ(34,"nz-progress",12),s.TgZ(35,"span"),s._uU(36,"\u7b97\u6cd5\u914d\u7f6e"),s.qZA(),s._UZ(37,"nz-progress",12),s.qZA(),s.qZA(),s.qZA(),s.TgZ(38,"div",13),s._UZ(39,"div",14),s.qZA(),s.TgZ(40,"div",13),s._UZ(41,"div",14),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.Q6J("nzGutter",s.DdM(9,j)),s.xp6(30),s.Q6J("nzPercent",30.9)("nzStrokeColor",s.DdM(10,V)),s.xp6(3),s.Q6J("nzPercent",69.9)("nzStrokeColor",s.DdM(11,V)),s.xp6(3),s.Q6J("nzPercent",99.9)("nzStrokeColor",s.DdM(12,V)),s.xp6(2),s.Q6J("options",n.lineOPtion),s.xp6(2),s.Q6J("options",n.sanOPtion))},directives:[u.bd,p.SK,p.t3,h.w,z.Ls,G.M,B._w],encapsulation:2}),e})()},{path:"collection",component:F}]}];let H=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.Bz.forChild($)],o.Bz]}),e})();var R=t(15362);let X=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.m,H,B.Ns.forRoot({echarts:R})]]}),e})()}}]);