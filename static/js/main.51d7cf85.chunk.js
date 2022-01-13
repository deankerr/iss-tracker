(this["webpackJsonpiss-tracker"]=this["webpackJsonpiss-tracker"]||[]).push([[0],{20:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(3),o=n.n(s),c=(n(20),n(14)),i=n(13),l=n(4),p=n.n(l),d=n(8),u=n(6),h=n(7),j=n(10),S=n(9),g=n(15),O=(n(24),n(1));var v=function(){return Object(O.jsx)("div",{style:{position:"relative",top:-32,left:-32},children:Object(O.jsx)("img",{className:"ISSMarker",width:64,alt:"International Space Station",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/International_Space_Station.svg/512px-International_Space_Station.svg.png"})})};var b=function(e){return Object(O.jsx)("div",{className:"historyDot"})};var m=function(e){var t=e.data,n=Object(O.jsx)(O.Fragment,{children:"Loading"}),a=null;if(t){var r=t.name,s=t.temp;a=t.iconUrl,n=Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{children:r}),Object(O.jsxs)("div",{children:[s,"\xb0C"]})]})}return Object(O.jsx)("div",{className:"weatherPanel",style:a?{backgroundImage:a}:{},children:n})},P=function(e){Object(j.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoaded:!1,people:[]},e.getPeople=Object(d.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://api.open-notify.org/astros.json");case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,e.setState({people:a.people,isLoaded:!0}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("People API Error: ",t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getPeople()}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.people;return Object(O.jsxs)("div",{className:"peoplePanel",children:[Object(O.jsx)("div",{style:{textAlign:"center",marginBottom:"10px"},children:"People In Space"}),t?Object(O.jsx)("div",{className:"peopleList",children:Object(O.jsx)("ul",{children:n.map((function(e){return Object(O.jsxs)("li",{children:["(",e.craft,") ",e.name]})}))})}):Object(O.jsx)("p",{children:"Loading"})]})}}]),n}(r.a.Component),f=P,x=Object({NODE_ENV:"production",PUBLIC_URL:"/iss-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GOOGLE_MAPS_API_KEY,I=Object({NODE_ENV:"production",PUBLIC_URL:"/iss-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_OPEN_WEATHER_API_KEY,_={lat:-37.813611,lng:144.963056},k=function(e){Object(j.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={ISSPos:{lat:null,lng:null},ISSPosIsLoaded:!1,ISSPosHistory:[],weatherPanels:[]},e.getISSPos=Object(d.a)(p.a.mark((function t(){var n,a,r,s,o,c,i,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://api.open-notify.org/iss-now.json");case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,r=a.iss_position,s=r.latitude,o=r.longitude,c=+s,i=+o,e.state.ISSPosIsLoaded&&((l=e.state.ISSPosHistory).push(e.state.ISSPos),e.setState({ISSPosHistory:l})),e.setState({ISSPos:{lat:c,lng:i},ISSPosIsLoaded:!0}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log("Map API Error: ",t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[0,14]])}))),e.handleMapClick=function(t){var n={lat:t.lat,lng:t.lng,data:null};e.getWeather(n);var a=[].concat(Object(i.a)(e.state.weatherPanels),[n]);e.setState({weatherPanels:a})},e.getWeather=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://api.openweathermap.org/data/2.5/weather?lat=".concat(t.lat,"&lon=").concat(t.lng,"&units=metric&appid=").concat(I));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,console.log("OpenWeather response:",a),t.data={name:a.name,temp:a.main.temp,iconUrl:"url('http://openweathermap.org/img/wn/".concat(a.weather[0].icon,".png')")},e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Weather API Error: ",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getISSPos(),setInterval(this.getISSPos,2e3)}},{key:"render",value:function(){var e=this.state.ISSPos,t=e.lat,n=e.lng,a=this.state,r=a.ISSPosIsLoaded,s=a.weatherPanels,o=r?{lat:t,lng:n}:_,i=this.state.ISSPosHistory;return Object(O.jsxs)("div",{className:"ISSTracker",children:[Object(O.jsx)("h1",{children:"ISS Tracker"}),Object(O.jsxs)("div",{className:"latLong",children:["Lat: ",t||"Loading"," Long: ",n||"Loading"]}),Object(O.jsx)(f,{}),Object(O.jsx)("div",{className:"GoogleMap",children:Object(O.jsxs)(g.a,{bootstrapURLKeys:{key:x},center:o,zoom:4,onClick:this.handleMapClick,children:[i.map((function(e){return Object(O.jsx)(b,{lat:e.lat,lng:e.lng})})),r?Object(O.jsx)(v,{lat:t,lng:n}):console.log("Loading ISS Pos"),s.map((function(e){return Object(O.jsx)(m,Object(c.a)({},e))}))]})})]})}}]),n}(r.a.Component),E=k,w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root")),w()}},[[26,1,2]]]);
//# sourceMappingURL=main.51d7cf85.chunk.js.map