(()=>{(()=>{let c="better-cloud-search_max-search-limit";window.loadmaxlimit=function(){return parseInt(localStorage.getItem(c))||5},window.cloudsearch=function(o){return console.log(`cloudsearch_startup(${o})`),new Promise((i,n)=>{function r(a){console.log(`Resolved cloudsearch(arg: ${o}):`,a),i(a)}let e=window.ctl.cloudListManager.NI.uid,l=window.loadmaxlimit();var t={data:{uid:e,offset:0,total:!0,limit:l,keyword:o},ext:{},key:`track_cloud_search-${e}-${o}`,limit:l,offset:0,onload:r,rkey:`r-track_cloud_search-${e}-${o}-0-${l}`};window.ctl.player.AJ[0].MF.$i(t),window.ctl.player.AJ[0].MF.Ge("doloadlist",t)})}})();})();
