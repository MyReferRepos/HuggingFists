"use strict";(self.webpackChunksengee_ui=self.webpackChunksengee_ui||[]).push([[947],{91947:(y,d,o)=>{o.d(d,{T:()=>_,g:()=>v});var t=o(5e3),s=o(68306),P=o(72795),g=o(69808),C=o(46126),O=o(5156),M=o(72721),p=o(15052),h=o(49841),f=o(404),i=o(57781),m=o(89445);function u(l,a){if(1&l){const e=t.EpF();t.TgZ(0,"div",12),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().selectVersionHandler(c)}),t.TgZ(1,"div",13)(2,"p")(3,"span"),t._uU(4,"\u5f00\u53d1\u8005\uff1a"),t.qZA(),t.TgZ(5,"span"),t._uU(6),t.qZA()(),t.TgZ(7,"p")(8,"span"),t._uU(9,"\u7248\u672c\u53f7\uff1a"),t.qZA(),t.TgZ(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"p")(13,"span"),t._uU(14,"\u7248\u672c\u7c7b\u578b\uff1a"),t.qZA(),t.TgZ(15,"span"),t._uU(16),t.qZA()()(),t.TgZ(17,"div",14)(18,"div",15)(19,"i",16),t.NdJ("nzOnConfirm",function(){const c=t.CHM(e).$implicit;return t.oxw().deleteConfirm(c)}),t.ALo(20,"nzI18n"),t.ALo(21,"nzI18n"),t.ALo(22,"nzI18n"),t.qZA()()()()}if(2&l){const e=a.$implicit,n=t.oxw();t.ekj("selected",e===n.selectedVersion),t.xp6(6),t.Oqu(e.providerId||"--"),t.xp6(5),t.hij("V",e.version,""),t.xp6(5),t.Oqu(e.versionType),t.xp6(3),t.Q6J("nzPopconfirmTitle",t.lcZ(20,7,"base.confirmDel")+t.lcZ(21,9,"base.version")+"?")("nz-tooltip",t.lcZ(22,11,"base.delete"))}}const x=function(l){return{width:l}},b=function(l){return{height:l}},_=[{icon:"banben",size:22,alias:"menu.versionList",key:"versionList"},{icon:"renwuguanli",size:26,alias:"menu.job",position:"bottom",url:"/process/program/job/list"}];let v=(()=>{class l extends P.x{constructor(){super(...arguments),this.siders=_,this.loading=!1,this.selected=new t.vpe,this.beforeUpload=e=>new s.y(n=>{if("application/zip"!==e.type&&"application/x-zip-compressed"!==e.type)return this.message.error("\u53ea\u80fd\u4e0a\u4f20zip\u5305!"),void n.complete();n.next(!0),n.complete()}),this.customRequest=e=>this.api.updateProgramPackage(e.file,this.flowData.id).subscribe(n=>{this.message.success("\u4e0a\u4f20\u6210\u529f!"),this.getVersionList()},n=>{this.message.success("\u4e0a\u4f20\u5931\u8d25: "+n)})}ngOnChanges(e){e.flowData&&e.flowData.currentValue&&this.getVersionList()}getVersionList(){this.api.getMementoList(this.flowData.id,"").subscribe(e=>{this.versionData=e,this.versionData&&this.versionData.length&&this.selectVersionHandler(this.versionData[0])})}selectVersionHandler(e){this.selectedVersion=e,this.selected.emit(e)}deleteConfirm(e){this.api.deleteMemento(e.id).subscribe(n=>{this.getVersionList()})}}return l.\u0275fac=function(){let a;return function(n){return(a||(a=t.n5z(l)))(n||l)}}(),l.\u0275cmp=t.Xpm({type:l,selectors:[["app-left-panel-program"]],outputs:{selected:"selected"},features:[t.qOj,t.TTD],decls:17,vars:22,consts:[[1,"left-panel","pa",3,"ngStyle"],["sz-drag","","position","right",3,"dragStart","dragging"],[1,"sider-trigger","pr",3,"click"],["sz-icon","",1,"pa",3,"type"],[1,"siders-box","fl"],[3,"siders","openable","selectedSider","onClick"],[1,"tree-box","fr",3,"ngStyle"],[1,"title"],["nzName","file",3,"nzShowUploadList","nzBeforeUpload","nzCustomRequest"],["sz-icon","","type","xinzeng",3,"fontsize"],[1,"content"],["class","v-item pr",3,"selected","click",4,"ngFor","ngForOf"],[1,"v-item","pr",3,"click"],[1,"info-box"],[1,"corner","pa"],[1,"del-box","pa"],["sz-icon","","type","shanchu","nz-popconfirm","",3,"nzPopconfirmTitle","nz-tooltip","nzOnConfirm"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.ALo(1,"px"),t.TgZ(2,"div",1),t.NdJ("dragStart",function(){return n.dragStartHandler()})("dragging",function(c){return n.draggingHandler(c)}),t.qZA(),t.TgZ(3,"span",2),t.NdJ("click",function(){return n.arrowClick()}),t._UZ(4,"i",3),t.qZA(),t.TgZ(5,"div",4)(6,"app-sider",5),t.NdJ("onClick",function(c){return n.toggleSider(c)}),t.qZA()(),t.TgZ(7,"div",6),t.ALo(8,"calc"),t.TgZ(9,"div",7)(10,"span"),t._uU(11),t.ALo(12,"nzI18n"),t.qZA(),t.TgZ(13,"nz-upload",8),t._UZ(14,"i",9),t.qZA()(),t.TgZ(15,"div",10),t.YNc(16,u,23,13,"div",11),t.qZA()()()),2&e&&(t.Q6J("ngStyle",t.VKq(18,x,t.lcZ(1,12,n.width))),t.xp6(4),t.Q6J("type",n.width>36?"zuoshuangjiantou":"a-youshuangjiantou1"),t.xp6(2),t.Q6J("siders",n.siders)("openable",!1)("selectedSider",n.selectedSider),t.xp6(1),t.Q6J("ngStyle",t.VKq(20,b,t.lcZ(8,14,n.height+11))),t.xp6(4),t.Oqu(t.lcZ(12,16,n.selectedSider.alias)),t.xp6(2),t.Q6J("nzShowUploadList",!1)("nzBeforeUpload",n.beforeUpload)("nzCustomRequest",n.customRequest),t.xp6(1),t.Q6J("fontsize",16),t.xp6(2),t.Q6J("ngForOf",n.versionData))},directives:[g.PC,C.A,O.D6,M.q,p.FY,g.sg,h.JW,f.SY],pipes:[i.b5,i.fg,m.o9],styles:["html.default[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{min-width:1366px}html.default[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}html.default[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0}html.default[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;flex:auto;flex-direction:column}html.default[_ngcontent-%COMP%]   .fdc[_ngcontent-%COMP%]{flex-direction:column}html.default[_ngcontent-%COMP%]   .fdr[_ngcontent-%COMP%]{flex-direction:row}html.default[_ngcontent-%COMP%]   .fauto[_ngcontent-%COMP%]{flex:auto}html.default[_ngcontent-%COMP%]   .pf[_ngcontent-%COMP%]{position:fixed}html.default[_ngcontent-%COMP%]   .pr[_ngcontent-%COMP%]{position:relative}html.default[_ngcontent-%COMP%]   .pa[_ngcontent-%COMP%]{position:absolute}html.default[_ngcontent-%COMP%]   .fl[_ngcontent-%COMP%]{float:left}html.default[_ngcontent-%COMP%]   .fr[_ngcontent-%COMP%]{float:right}html.default[_ngcontent-%COMP%]   .clear-f[_ngcontent-%COMP%]{clear:both}html.default[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#396669}html.default[_ngcontent-%COMP%]   .ant-table-pagination.ant-pagination[_ngcontent-%COMP%]{margin:0}html.default[_ngcontent-%COMP%]   .ant-pagination[_ngcontent-%COMP%]{text-align:right}html.default[_ngcontent-%COMP%]   .ant-table-column-sorter[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-table-filter-trigger[_ngcontent-%COMP%]{color:#a1a1a1}html.default[_ngcontent-%COMP%]   .ant-table-filter-trigger.active[_ngcontent-%COMP%]{color:#2a8b92}html.default[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]   th.ant-table-column-sort[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]   th.ant-table-column-has-sorters[_ngcontent-%COMP%]:hover{background:#e2eeee}html.default[_ngcontent-%COMP%]   .ant-tree-switcher[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-tree-indent-unit[_ngcontent-%COMP%]{width:17px;color:#2a8b92}html.default[_ngcontent-%COMP%]   .ant-tree[_ngcontent-%COMP%]   .ant-tree-node-content-wrapper[_ngcontent-%COMP%]{padding:0}html.default[_ngcontent-%COMP%]   .ant-tree-checkbox-inner[_ngcontent-%COMP%]{display:inline-block}html.default[_ngcontent-%COMP%]   .ant-select-tree[_ngcontent-%COMP%]   .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected[_ngcontent-%COMP%]:hover{background-color:#e2eeee}html.default[_ngcontent-%COMP%]   .ant-modal-title[_ngcontent-%COMP%]{color:#396669}html.default[_ngcontent-%COMP%]   .ant-dropdown-menu-item-selected[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%]{background-color:#e2eeee}html.default[_ngcontent-%COMP%]   .ant-badge-status-processing[_ngcontent-%COMP%]{background-color:#2a8b92}html.default[_ngcontent-%COMP%]   .ant-badge-status-processing[_ngcontent-%COMP%]:after{border-color:#2a8b92}html.default[_ngcontent-%COMP%]   .ant-tooltip[_ngcontent-%COMP%]{max-width:550px;max-height:550px;overflow:hidden}html.default[_ngcontent-%COMP%]   .ant-tooltip-content[_ngcontent-%COMP%]{width:100%;height:100%;max-width:550px;max-height:542px}html.default[_ngcontent-%COMP%]   .ant-tooltip-inner[_ngcontent-%COMP%]{box-shadow:none}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#f7fdfd;border-right:solid 1px #dbe9ea}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .sider-trigger[_ngcontent-%COMP%]{display:block;width:100%;height:11px;background-color:#c8dde0}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .sider-trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{top:-4px;right:2px}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .siders-box[_ngcontent-%COMP%]{width:36px;height:calc(100% - 11px)}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]{width:calc(100% - 36px);overflow:hidden}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;height:23px;line-height:23px;padding:0 13px;background-color:#c8dde0;white-space:nowrap;border-top:1px solid #dbe9ea;color:#396669;display:flex;justify-content:space-between}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:8px;overflow-y:auto;height:calc(100% - 23px)}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]     .sz-search{margin-bottom:5px}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]{padding:10px;background-color:#fff;border:solid 1px #dbe9ea;border-radius:3px;display:flex;align-items:center;margin-top:3px;margin-bottom:15px}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%]{right:1px;bottom:1px;width:0;height:0;border-bottom:6px solid #2a8b92;border-left:6px solid transparent;cursor:pointer;transition:all .15s}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%]   .del-box[_ngcontent-%COMP%]{left:-17px;top:-15px;padding:0 2px;color:#2a8b92;font-size:18px;opacity:0;transition:opacity .15s}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%]:hover{border-bottom-color:#0000}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%]:hover   .del-box[_ngcontent-%COMP%]{opacity:1}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item.selected[_ngcontent-%COMP%]{background-color:#d9fbfd;border-color:#2a8b92}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]{width:70px;height:70px;border:solid 1px #dbe9ea;border-radius:3px;margin-right:15px}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]{flex:1}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:5px}html.default   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#f4f7fc;border-right:solid 1px #dbe9ea}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .sider-trigger[_ngcontent-%COMP%]{display:block;width:100%;height:11px;background-color:#e6edf7}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .sider-trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{top:-4px;right:2px}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .siders-box[_ngcontent-%COMP%]{width:36px;height:calc(100% - 11px)}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]{width:calc(100% - 36px);overflow:hidden}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;height:23px;line-height:23px;padding:0 13px;background-color:#e6edf7;white-space:nowrap;border-top:1px solid #dbe9ea;color:#394f69;display:flex;justify-content:space-between}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:8px;overflow-y:auto;height:calc(100% - 23px)}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]     .sz-search{margin-bottom:5px}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]{padding:10px;background-color:#fff;border:solid 1px #dbe9ea;border-radius:3px;display:flex;align-items:center;margin-top:3px;margin-bottom:15px}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%]{right:1px;bottom:1px;width:0;height:0;border-bottom:6px solid #275184;border-left:6px solid transparent;cursor:pointer;transition:all .15s}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%]   .del-box[_ngcontent-%COMP%]{left:-17px;top:-15px;padding:0 2px;color:#275184;font-size:18px;opacity:0;transition:opacity .15s}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%]:hover{border-bottom-color:#0000}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%]:hover   .del-box[_ngcontent-%COMP%]{opacity:1}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item.selected[_ngcontent-%COMP%]{background-color:#d9e1fd;border-color:#275184}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]{width:70px;height:70px;border:solid 1px #dbe9ea;border-radius:3px;margin-right:15px}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]{flex:1}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:5px}html.dark   [_nghost-%COMP%]   .left-panel[_ngcontent-%COMP%]   .tree-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .v-item[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}"]}),l})()}}]);