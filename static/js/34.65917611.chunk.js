(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{557:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),i=a(11),s=a(9),l=a(10),c=a(445),o=a(1),u=a.n(o),m=(a(446),a(518)),d=a(450),f=a(516),p=(a(514),a(2)),b=a(108),h={unableLoginTitle:"message:unableLoginTitle",gridTitle:"message:gridTitle"};function g(){var e=Object(c.a)(["\n    display: block;\n    margin: 0 auto;\n    border-color: green;\n"]);return g=function(){return e},e}var E=Object(m.a)(g()),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).callApiListItems=function(){fetch("https://cors-anywhere.herokuapp.com/http://limitless-dawn-42115.herokuapp.com/initial").then(function(e){return e.json()}).then(function(e){a.setState({isLoaded:!0,items:e})},function(e){a.setState({isLoaded:!0,error:e})})},a.state={error:null,isLoaded:!1,items:[]},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.callApiListItems()}},{key:"render",value:function(){var e=this.props.t,t=this.state,a=t.error,n=t.isLoaded,r=t.items;if(a)return u.a.createElement("div",{className:"animated fadeIn"},"Error: ",a.message);if(n){var i={data:r,columns:Object.keys(r[0]).map(function(e,t){return{Header:e,accessor:e}}),defaultPageSize:5,filterable:!0};return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(p.hb,null,u.a.createElement(p.u,{xs:"12",lg:"12"},u.a.createElement(p.i,null,u.a.createElement(p.n,null,u.a.createElement("i",{className:"fa fa-users text-primary"})," ",e(h.gridTitle)),u.a.createElement(p.j,null,u.a.createElement(f.a,i))))))}return u.a.createElement(d.RingLoader,{className:E,sizeUnit:"px",size:100,color:"#86E7D4",loading:!n})}}]),t}(o.Component);t.default=Object(b.b)()(j)}}]);
//# sourceMappingURL=34.65917611.chunk.js.map