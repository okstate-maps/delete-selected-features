System.register(["jimu-core","jimu-ui"],(function(e,t){var r={},o={};return{setters:[function(e){r.DataSourceComponent=e.DataSourceComponent,r.DataSourceStatus=e.DataSourceStatus,r.SessionManager=e.SessionManager,r.css=e.css,r.jsx=e.jsx},function(e){o.Button=e.Button}],execute:function(){e((()=>{var e={891:e=>{"use strict";e.exports=r},726:e=>{"use strict";e.exports=o}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,s),a.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var a={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(a),s.d(a,{__set_webpack_public_path__:()=>n,default:()=>r});var e=s(891),t=s(726);function r(r){return(0,e.jsx)("div",{className:"widget-delete-selected-features",css:o},(0,e.jsx)("h3",null,"Select features to delete"),(0,e.jsx)(e.DataSourceComponent,{useDataSource:r.useDataSources[0],query:{where:"1=1"},widgetId:r.id},((o,s)=>{if(!o||o.getStatus()!==e.DataSourceStatus.Loaded)return(0,e.jsx)("div",null,"No features selected");{const r=e.SessionManager.getInstance();if(r.getSessions().length>0){r.getSessions()[0];let s=o.getSelectedRecordIds();if(o.getSelectedRecordIds().length>0)return(0,e.jsx)("div",null,(0,e.jsx)(t.Button,{onClick:()=>{let e=s.map((e=>({objectId:e})));o.layer.applyEdits({deleteFeatures:e})}},"Delete ",o.getSelectedRecordIds().length>1?o.getSelectedRecordIds().length+" features":"feature"))}}return r.useDataSources&&1===r.useDataSources.length?void 0:(0,e.jsx)("h3",null,"This widget shows how to listen to the selection change of a data source.",(0,e.jsx)("br",null),"Please configure the data source.")})))}const o=e.css`
  width: 100%;
  height: 100%;
  max-height: 800px;
  overflow: auto;
  .blue-border {
    border: 1px solid var(--primary-500);
  }
  .record-list {
    width: 100%;
    margin-top: 20px;
    height: calc(100% - 80px);
    overflow: auto;
  }
`;function n(e){s.p=e}})(),a})())}}}));