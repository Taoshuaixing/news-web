(self.webpackChunkng_alain=self.webpackChunkng_alain||[]).push([[451],{78260:function(e,t,i){"use strict";i.d(t,{J:function(){return s}});var n=i(57499),o=i(91841),a=i(37716),r=i(31584);let s=(()=>{class e{constructor(e,t){this.http=e,this.cookieService=t}searchAll(e){return this.http.get(e)}search(e,t,i){return this.http.post(e+t,i)}downLoad(e,t,i){return this.http.get(e+t+i,{responseType:"arraybuffer"})}searchCrud(e,t,i,a){const r=(new o.WM).set("ticket",this.cookieService.get("ticket"));return this.http.get(n.N.searchUrl+""+`${a}?s=${i}&limit=${e}&page=${t}`,{headers:r})}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(o.eN),a.LFG(r.N))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},61451:function(e,t,i){"use strict";i.r(t),i.d(t,{HomePageModule:function(){return v}});var n=i(51679),o=i(26571),a=i(63423),r=i(15362),s=(i(9065),i(37716)),l=i(78260),c=i(16704),d=i(17018),p=i(82281),h=i(66782),g=i(66795),m=i(38583),u=i(47420),f=i(33630);const Z=function(){return{"0%":"#108ee9","100%":"#87d068"}};function x(e,t){if(1&e&&(s.TgZ(0,"tr"),s.TgZ(1,"td"),s._UZ(2,"a",27),s.ALo(3,"html"),s.qZA(),s.TgZ(4,"td"),s._uU(5),s.ALo(6,"date"),s.qZA(),s.TgZ(7,"td"),s.TgZ(8,"div",28),s._UZ(9,"nz-progress",29),s.qZA(),s.qZA(),s.qZA()),2&e){const e=t.$implicit;s.xp6(2),s.Q6J("href",e.url,s.LSH)("innerHTML",s.lcZ(3,6,e.title),s.oJD)("nz-tooltip",e.title),s.xp6(3),s.Oqu(s.xi3(6,8,e.ctime,"YYYY-MM-dd")),s.xp6(4),s.Q6J("nzPercent",e.jobId)("nzStrokeColor",s.DdM(11,Z))}}const z=function(){return[16]},y=[{path:"",component:(()=>{class e{constructor(e){this.crudService=e,this.isSpinning=!1,this.data=[],this.colors=["#5470C6","#91CC75","#EE6666"],this.ROOT_PATH="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples",this.requestData={sortBy:"publish_time",sortType:"desc",pageSize:50,pageNum:1,startTime:"2014-01-01T05:00:00Z",endTime:new Date,jobName:"",keywords:[],jurisdiction:"",region:[],jobClass:[],viewType:[]},this.publicRequest={sortBy:"publish_time",sortType:"desc",pageSize:10,pageNum:1,startTime:"2014-01-01T05:00:00Z",endTime:new Date,jobName:"",keywords:[],jurisdiction:"",region:[],jobClass:[],viewType:[],platform:[]},this.flag=!1,this.newSum=257849,this.option={title:{top:10,left:"center",textStyle:{color:"#000000"}},backgroundColor:"rgba(0, 10, 52, 0)",geo:{map:"china",aspectScale:.75,layoutCenter:["50%","51.5%"],layoutSize:"118%",roam:!0,itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:.5,color:{type:"linear-gradient",x:0,y:1500,x2:2500,y2:0,colorStops:[{offset:0,color:"#009DA1"},{offset:1,color:"#005B9E"}],global:!0},opacity:.5},emphasis:{areaColor:"#2a333d"}},regions:[{name:"\u5357\u6d77\u8bf8\u5c9b",itemStyle:{areaColor:"rgba(0, 10, 52, 1)",borderColor:"rgba(0, 10, 52, 1)"},emphasis:{areaColor:"rgb(0,10,52)",borderColor:"rgba(0, 10, 52, 1)"}}],z:2},series:[{type:"map",map:"china",tooltip:{show:!1},label:{show:!0,color:"#FFFFFF",fontSize:14},aspectScale:.75,layoutCenter:["50%","50%"],layoutSize:"118%",roam:!0,itemStyle:{normal:{borderColor:"rgba(1,157,232, 0.6)",borderWidth:.8,areaColor:{type:"linear-gradient",x:0,y:1200,x2:1e3,y2:0,colorStops:[{offset:0,color:"#009DA1"},{offset:1,color:"#005B9E"}],global:!0}},emphasis:{areaColor:"rgba(147, 235, 248, 0)"}},zlevel:1}]}}ngOnInit(){this.pageName=location.href.split("/#/")[1],this.timer=setInterval(()=>{this.showMarquee()},2e3),this.sumTimer=setInterval(()=>{this.newSum++},500),this.initChart(),this.searchPublicSentimentData(),this.initEcharts()}initEcharts(){new Promise(e=>{e()}).then(()=>{let e=document.getElementById("main"),t=r.init(e);t.on("georoam",function(e){var i=t.getOption();null!=e.zoom&&null!=e.zoom?(i.geo[0].zoom=i.series[0].zoom,i.geo[0].center=i.series[0].center):i.geo[0].center=i.series[0].center,t.setOption(i)}),t.setOption(this.option)})}showMarquee(){this.flag=!0;const e=this.data[0];this.data.shift(),this.data.push(e),this.flag=!1}ngOnDestroy(){this.timer=null}searchPublicSentimentData(){this.isSpinning=!0,this.crudService.searchAll("https://apis.tianapi.com/areanews/index?key=21510d1cfa8ec1778bc9dc2a39d088c5&areaname=\u5317\u4eac").subscribe(e=>{this.isSpinning=!1,this.data.push(...e.result.list),this.data.push(...e.result.list),this.data.push(...e.result.list),this.data.forEach(e=>{e.jobId=this.random(1,101)})},e=>{this.isSpinning=!1,console.log(e)})}initChart(){this.ZFOptions={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLabel:{textStyle:{color:"#fff"}}},yAxis:{type:"value",axisLabel:{textStyle:{color:"#fff"}}},series:[{data:[120,200,150,80,70,110,130],type:"bar",itemStyle:{normal:{color:function(e){return["#00DEFF","#ffffff","#00DEFF","#ffffff","#00DEFF","#ffffff","#00DEFF"][e.dataIndex]}}}}]},this.ZMOptions={color:this.colors,tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{right:"20%"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["\u5883\u5185","\u5883\u5916"],textStyle:{color:"#fff"}},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],axisLabel:{textStyle:{color:"#fff"}}}],yAxis:[{type:"value",name:"\u5883\u5185\u6570\u636e",min:0,max:250,position:"right",axisLine:{show:!0,lineStyle:{color:this.colors[0]}},axisLabel:{formatter:"{value}"}},{type:"value",name:"\u5883\u5916\u6570\u636e",min:0,max:250,position:"right",offset:80,axisLine:{show:!0,lineStyle:{color:this.colors[1]}},axisLabel:{formatter:"{value}"}},{type:"value",name:"\u6570\u636e\u6e90",min:0,max:25,position:"left",axisLine:{show:!0,lineStyle:{color:this.colors[2]}},axisLabel:{formatter:"{value}"}}],series:[{name:"\u5883\u5185",type:"bar",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},{name:"\u5883\u5916",type:"bar",yAxisIndex:1,data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]},{name:"\u6570\u636e\u6e90",type:"line",yAxisIndex:2,data:[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2]}]},this.MTOptions={title:{text:"\u6570\u636e\u5206\u5e03",textStyle:{color:"#fff"}},radar:{indicator:[{name:"\u534e\u4e2d",max:6500},{name:"\u534e\u5317",max:16e3},{name:"\u534e\u5357",max:3e4},{name:"\u534e\u897f",max:38e3},{name:"\u534e\u4e1c",max:52e3}]},series:[{name:"\u9884\u7b97 vs \u5f00\u9500\uff08Budget vs spending\uff09",type:"radar",data:[{value:[4200,3e3,2e4,35e3,5e4,18e3],name:"\u9884\u7b97\u5206\u914d\uff08Allocated Budget\uff09"},{value:[5e3,14e3,28e3,26e3,42e3,21e3],name:"\u5b9e\u9645\u5f00\u9500\uff08Actual Spending\uff09"}]}]}}getTitleId(e){console.log(e)}random(e,t){return Math.floor(Math.random()*(t-e))+e}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(l.J))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-home-page"]],decls:53,vars:19,consts:[[1,"home-pages-content"],["nz-row","","nzJustify","space-between","nzAlign","middle",3,"nzGutter"],["nz-col","","nzSpan","6"],["nz-row",""],["nz-col","","nzSpan","24"],[1,"animate__animated","animate__bounceInLeft",3,"nzBordered"],[2,"height","466px","overflow","hidden"],[1,"home-content-card-title"],[1,"home-content-card-newSum"],["nz-row","",1,"text-align-center"],["nz-col","","nzSpan","8"],["nzType","circle",3,"nzPercent","nzWidth"],["echarts","",2,"height","230px",3,"options"],["echarts","",2,"height","200px",3,"options"],["nz-col","","nzSpan","12"],[1,"text-align-center","animate__animated","animate__bounceInDown",3,"nzBordered"],["id","main",2,"height","466px"],[1,"animate__animated","animate__bounceInUp",3,"nzBordered"],[1,"animate__animated","animate__bounceInRight",3,"nzBordered"],[2,"height","730px","overflow","hidden"],["nzTip","Loading...",3,"nzSpinning"],[2,"color","white","margin-top","20px"],[2,"font-size","18px","color","#1890ff"],["width","150"],["width","130"],["width","40"],[4,"ngFor","ngForOf"],["target","_blank",1,"heat-list",3,"href","innerHTML","nz-tooltip"],[2,"width","100px"],["nzSize","small","nzStatus","active",3,"nzPercent","nzStrokeColor"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s.TgZ(5,"nz-card",5),s.TgZ(6,"div",6),s.TgZ(7,"div",7),s._UZ(8,"div"),s.TgZ(9,"span"),s._uU(10,"\u4eca\u65e5\u6570\u636e"),s.qZA(),s.qZA(),s.TgZ(11,"div",8),s._uU(12),s.qZA(),s.TgZ(13,"div",9),s.TgZ(14,"div",10),s._UZ(15,"nz-progress",11),s.qZA(),s.TgZ(16,"div",10),s._UZ(17,"nz-progress",11),s.qZA(),s.TgZ(18,"div",10),s._UZ(19,"nz-progress",11),s.qZA(),s.qZA(),s._UZ(20,"div",12),s.qZA(),s.qZA(),s.qZA(),s.TgZ(21,"div",4),s.TgZ(22,"nz-card",5),s._UZ(23,"div",13),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(24,"div",14),s.TgZ(25,"div",3),s.TgZ(26,"div",4),s.TgZ(27,"nz-card",15),s._UZ(28,"div",16),s.qZA(),s.qZA(),s.TgZ(29,"div",4),s.TgZ(30,"nz-card",17),s._UZ(31,"div",13),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(32,"div",2),s.TgZ(33,"div",3),s.TgZ(34,"div",4),s.TgZ(35,"nz-card",18),s.TgZ(36,"div",19),s.TgZ(37,"div",7),s._UZ(38,"div"),s.TgZ(39,"span"),s._uU(40,"\u5b9e\u65f6\u70ed\u70b9"),s.qZA(),s.qZA(),s.TgZ(41,"nz-spin",20),s.TgZ(42,"table",21),s.TgZ(43,"thead"),s.TgZ(44,"tr",22),s.TgZ(45,"th",23),s._uU(46,"\u4e8b\u4ef6"),s.qZA(),s.TgZ(47,"th",24),s._uU(48,"\u65f6\u95f4"),s.qZA(),s.TgZ(49,"th",25),s._uU(50,"\u70ed\u5ea6"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(51,"tbody"),s.YNc(52,x,10,12,"tr",26),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.Q6J("nzGutter",s.DdM(18,z)),s.xp6(4),s.Q6J("nzBordered",!1),s.xp6(7),s.Oqu(t.newSum),s.xp6(3),s.Q6J("nzPercent",75)("nzWidth",80),s.xp6(2),s.Q6J("nzPercent",90)("nzWidth",80),s.xp6(2),s.Q6J("nzPercent",100)("nzWidth",80),s.xp6(1),s.Q6J("options",t.ZFOptions),s.xp6(2),s.Q6J("nzBordered",!1),s.xp6(1),s.Q6J("options",t.MTOptions),s.xp6(4),s.Q6J("nzBordered",!1),s.xp6(3),s.Q6J("nzBordered",!1),s.xp6(1),s.Q6J("options",t.ZMOptions),s.xp6(4),s.Q6J("nzBordered",!1),s.xp6(6),s.Q6J("nzSpinning",t.isSpinning),s.xp6(11),s.Q6J("ngForOf",t.data))},directives:[c.SK,c.t3,d.bd,p.M,o._w,h.W,g.Om,g.$Z,g.Uo,g._C,g.p0,m.sg,u.SY],pipes:[f.b8,m.uU],styles:["nz-card[_ngcontent-%COMP%]{background:rgba(4,10,18,.7);border-radius:15px}.heat-list[_ngcontent-%COMP%]{display:block;width:140px;overflow:hidden;color:#fff;font-size:16px;white-space:nowrap;text-overflow:ellipsis}.heat-list[_ngcontent-%COMP%]:hover{color:#1890ff}"]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[a.Bz.forChild(y)],a.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.m,T,o.Ns.forRoot({echarts:r})]]}),e})()}}]);