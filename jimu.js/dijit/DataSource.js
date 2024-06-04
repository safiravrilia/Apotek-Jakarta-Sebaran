// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/on dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/dijit/TabContainer3 jimu/dijit/_FeaturelayerChooserWithButtons jimu/dijit/_QueryableLayerChooserWithButtons jimu/dijit/QueryableServiceChooserFromPortal jimu/dijit/_QueryableServiceChooserContent jimu/dijit/_FrameworkDataSourceChooserWithButtons".split(" "),function(n,p,f,q,l,r,t,u,v,w,x,y,z,A,B){var h=window.jimuNls.queryableLayerSource,
b=r([t,u,v,p],{templateString:"\x3cdiv\x3e\x3c/div\x3e",baseClass:"jimu-dijit-data-source",declaredClass:"jimu.dijit.DataSource",nls:null,dijits:null,types:null,postMixInProperties:function(){this.nls=h;this.dijits=[]},postCreate:function(){this.inherited(arguments);this._initSelf()},_initSelf:function(){var a=[];l.forEach(this.types,f.hitch(this,function(d,c){var k=d.type,g=b[k+"_CLASS_INFO"];if(g){var e=null;g.defaultOptions?(e=f.clone(g.defaultOptions),e=f.mixin(e,d.options)):e=d.options;e||(e=
{});e.style={width:"100%",height:"100%"};d=k+"_"+c;c=new g.className(e);q.addClass(c.domNode,"hidden");c._dsType=k;c._dataSourceId=d;c._classInfo=g;this.own(n(c,"ok",f.hitch(this,function(){var m=this.getSelectedItems();m&&0<m.length&&this.emit("ok",m)})));this.own(n(c,"cancel",f.hitch(this,function(){this.emit("cancel")})));this.dijits.push(c);a.push({title:g.defaultTitle,content:c})}else console.error("Unsupported data source type:",k)}));this.tab=new w({tabs:a});this.tab.placeAt(this.domNode)},
_getSelectedDijit:function(){var a=this.tab.getSelectedIndex();return this.dijits[a]},getSelectedSourceType:function(){var a=this._getSelectedDijit();return a?a._classInfo.sourceType:""},getSelectedItems:function(){var a=[],d=this._getSelectedDijit();d&&(a=d.getSelectedItems())&&0<a.length&&l.forEach(a,f.hitch(this,function(c){c.dataSourceType=d._dsType}));return a},destroy:function(){this.dijits&&0<this.dijits.length&&l.forEach(this.dijits,f.hitch(this,function(a){a.destroy();a=null}));this.dijits=
null;this.inherited(arguments)}});b.DATA_SOURCE_FEATURE_LAYER_FROM_MAP="DATA_SOURCE_FEATURE_LAYER_FROM_MAP";b.DATA_SOURCE_QUERYABLE_LAYER_FROM_MAP="DATA_SOURCE_QUERYABLE_LAYER_FROM_MAP";b.DATA_SOURCE_QUERYABLE_LAYER_FROM_PORTAL="DATA_SOURCE_QUERYABLE_LAYER_FROM_PORTAL";b.DATA_SOURCE_QUERYABLE_LAYER_FROM_URL="DATA_SOURCE_QUERYABLE_LAYER_FROM_URL";b.DATA_SOURCE_FROM_FRAMEWORK="DATA_SOURCE_FROM_FRAMEWORK";b.DATA_SOURCE_FEATURE_LAYER_FROM_MAP_CLASS_INFO={className:x,defaultTitle:h.selectFromMap,defaultOptions:{multiple:!1},
sourceType:"map"};b.DATA_SOURCE_QUERYABLE_LAYER_FROM_MAP_CLASS_INFO={className:y,defaultTitle:h.selectFromMap,defaultOptions:{multiple:!1},sourceType:"map"};b.DATA_SOURCE_QUERYABLE_LAYER_FROM_PORTAL_CLASS_INFO={className:z,defaultTitle:h.selectFromPortal,defaultOptions:{multiple:!1},sourceType:"portal"};b.DATA_SOURCE_QUERYABLE_LAYER_FROM_URL_CLASS_INFO={className:A,defaultTitle:h.addServiceUrl,defaultOptions:{multiple:!1},sourceType:"url"};b.DATA_SOURCE_FROM_FRAMEWORK_CLASS_INFO={className:B,defaultTitle:window.jimuNls.frameworkDatasource.customDataSource,
defaultOptions:null,sourceType:"framework"};b.createQueryableLayerTypes=function(a){return[{type:b.DATA_SOURCE_QUERYABLE_LAYER_FROM_MAP,options:{createMapResponse:a.createMapResponse,onlyShowWebMapLayers:!0}},{type:b.DATA_SOURCE_QUERYABLE_LAYER_FROM_PORTAL,options:{portalUrl:a.portalUrl}},{type:b.DATA_SOURCE_QUERYABLE_LAYER_FROM_URL}]};b.createInfographicTypes=function(a){return[{type:b.DATA_SOURCE_FEATURE_LAYER_FROM_MAP,options:{createMapResponse:a.createMapResponse,types:["point","polyline","polygon"],
showLayerFromFeatureSet:!0,showTable:!1,mustSupportStatistics:!1,ignoreVirtualLayer:!0,onlyShowWebMapLayers:!0}},{type:b.DATA_SOURCE_FROM_FRAMEWORK,options:{appConfig:a.appConfig}}]};return b});