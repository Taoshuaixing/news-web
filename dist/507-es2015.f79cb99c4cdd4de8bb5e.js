(self.webpackChunkng_alain=self.webpackChunkng_alain||[]).push([[507],{83507:function(n,t,e){"use strict";e.r(t),e.d(t,{DataJianbaoModule:function(){return w}});var a=e(51679),i=e(63423),o=e(37716);let s=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-chuanbo"]],decls:2,vars:0,template:function(n,t){1&n&&(o.TgZ(0,"p"),o._uU(1,"chuanbo works!"),o.qZA())},styles:[""]}),n})();var r=e(17018),c=e(83730),u=e(84514),l=e(10464);let Z=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-data-jianbao"]],decls:23,vars:0,consts:[["nz-menu","","nzMode","horizontal"],["nz-menu-item","","nzMatchRouter",""],["nz-icon","","nzType","mail"],["routerLink","/jianbao/qingbao"],["nz-icon","","nzType","appstore"],["routerLink","/jianbao/chuanbo"],["routerLink","/jianbao/diyufenbu"],["routerLink","/jianbao/zimaoqu"]],template:function(n,t){1&n&&(o.TgZ(0,"nz-card"),o.TgZ(1,"ul",0),o.TgZ(2,"li",1),o._UZ(3,"i",2),o.TgZ(4,"a",3),o.TgZ(5,"span"),o._uU(6,"\u60c5\u62a5\u7efc\u8ff0"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(7,"li",1),o._UZ(8,"i",4),o.TgZ(9,"a",5),o.TgZ(10,"span"),o._uU(11,"\u4f20\u64ad\u5206\u5e03\u5206\u6790"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(12,"li",1),o._UZ(13,"i",4),o.TgZ(14,"a",6),o.TgZ(15,"span"),o._uU(16,"\u5730\u57df\u5206\u5e03"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(17,"li",1),o._UZ(18,"i",4),o.TgZ(19,"a",7),o.TgZ(20,"span"),o._uU(21,"\u81ea\u8d38\u533a\u7edf\u8ba1"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o._UZ(22,"router-outlet"))},directives:[r.bd,c.wO,u.w,c.r9,l.Ls,i.yS,i.lC],encapsulation:2}),n})(),p=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-diyu-fenbu"]],decls:2,vars:0,template:function(n,t){1&n&&(o.TgZ(0,"p"),o._uU(1,"diyu-fenbu works!"),o.qZA())},styles:[""]}),n})();var d=e(57499),g=e(78260),A=e(54579),h=e(16704),q=e(83385),m=e(66795),T=e(38583),f=e(26571);function z(n,t){if(1&n&&(o.TgZ(0,"tr"),o.TgZ(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.qZA()),2&n){const n=t.$implicit;o.xp6(2),o.Oqu(n.title),o.xp6(2),o.Oqu(n.num)}}const b=function(){return[16,24]},y=[{path:"",component:Z,children:[{path:"",redirectTo:"qingbao",pathMatch:"full"},{path:"qingbao",component:(()=>{class n{constructor(n,t){this.crudService=n,this.componentService=t,this.requestData={groupType:"channel_class",indexName:"newsIndex"},this.listOfAllData=[],this.lineCharts=[]}ngOnInit(){this.getData()}getData(){this.listOfAllData=[],this.crudService.search(d.N.searchUrl,"api/search/searchTopicBySolr",this.requestData).subscribe(n=>{n.data.forEach(n=>{this.lineCharts.push([n.title,n.num])}),this.listOfAllData=n.data,this.initOptions()})}initOptions(){this.zxOption={xAxis:{type:"category",boundaryGap:!1},yAxis:{type:"value",boundaryGap:[0,"30%"]},visualMap:{type:"piecewise",show:!1,dimension:0,seriesIndex:0,pieces:[{gt:1,lt:3,color:"rgba(0, 0, 180, 0.4)"},{gt:5,lt:7,color:"rgba(0, 0, 180, 0.4)"}]},series:[{type:"line",smooth:.6,symbol:"none",lineStyle:{color:"#5470C6",width:5},markLine:{symbol:["none","none"],label:{show:!1},data:[{xAxis:1},{xAxis:3},{xAxis:5},{xAxis:7}]},areaStyle:{},data:this.lineCharts}]}}downLoadJspdf(){this.componentService.downloadJsPDF(document.getElementsByTagName("nz-content")[0],"\u6570\u636e\u7b80\u62a5")}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(g.J),o.Y36(A.m))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-qingbao"]],decls:38,vars:5,consts:[["id","downLoadJspdf"],["nz-row","","nzJustify","space-around","nzAlign","middle",3,"nzGutter"],["nz-col","","nzSpan","24"],["nz-row",""],["nz-col","","nzSpan","22"],["nz-col","","nzSpan","2"],[3,"click"],["nz-col","","nzSpan","12"],["nzSize","small","nzShowPagination","true",3,"nzData"],["smallTable",""],[4,"ngFor","ngForOf"],[1,"text-align-center"],["echarts","",3,"options"]],template:function(n,t){if(1&n&&(o.TgZ(0,"nz-card",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o.TgZ(5,"h2"),o.TgZ(6,"b"),o._uU(7,"\u672c\u5468\u60c5\u62a5\u7efc\u8ff0"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(8,"div",5),o.TgZ(9,"a",6),o.NdJ("click",function(){return t.downLoadJspdf()}),o._uU(10,"PDF\u4e0b\u8f7d"),o.qZA(),o.qZA(),o._UZ(11,"nz-divider"),o.qZA(),o.qZA(),o.TgZ(12,"div",7),o.TgZ(13,"nz-table",8,9),o.TgZ(15,"thead"),o.TgZ(16,"tr"),o.TgZ(17,"th"),o._uU(18,"\u6765\u6e90"),o.qZA(),o.TgZ(19,"th"),o._uU(20,"\u6570\u636e\u91cf"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(21,"tbody"),o.YNc(22,z,5,2,"tr",10),o.qZA(),o.qZA(),o.qZA(),o.TgZ(23,"div",7),o.TgZ(24,"h1",11),o.TgZ(25,"b"),o._uU(26,"\u672c\u5468\u60c5\u62a5"),o._UZ(27,"br"),o._uU(28,"\u7efc\u8ff0"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(29,"nz-card"),o.TgZ(30,"div",3),o.TgZ(31,"div",2),o.TgZ(32,"h2"),o.TgZ(33,"b"),o._uU(34,"\u672c\u5468\u60c5\u62a5\u8d70\u52bf"),o.qZA(),o.qZA(),o._UZ(35,"nz-divider"),o.qZA(),o.TgZ(36,"div",2),o._UZ(37,"div",12),o.qZA(),o.qZA(),o.qZA()),2&n){const n=o.MAs(14);o.xp6(1),o.Q6J("nzGutter",o.DdM(4,b)),o.xp6(12),o.Q6J("nzData",t.listOfAllData),o.xp6(9),o.Q6J("ngForOf",n.data),o.xp6(15),o.Q6J("options",t.zxOption)}},directives:[r.bd,h.SK,h.t3,q.g,m.N8,m.Om,m.$Z,m.Uo,m._C,m.p0,T.sg,f._w],styles:[""]}),n})()},{path:"chuanbo",component:s},{path:"diyufenbu",component:p},{path:"zimaoqu",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-zimaoqu"]],decls:2,vars:0,template:function(n,t){1&n&&(o.TgZ(0,"p"),o._uU(1,"zimaoqu works!"),o.qZA())},styles:[""]}),n})()}]}];let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[i.Bz.forChild(y)],i.Bz]}),n})();var _=e(15362);let w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[a.m,v,f.Ns.forRoot({echarts:_})]]}),n})()}}]);