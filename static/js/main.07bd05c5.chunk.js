(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{142:function(e,a,t){e.exports=t(199)},171:function(e,a,t){},195:function(e,a,t){},196:function(e,a,t){},197:function(e,a,t){},198:function(e,a,t){},199:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),i=t.n(c),s=t(38),l=t(85),u=t(16),o=Object(l.b)({name:"drugs",initialState:{drugs:[],isLoading:!1,error:""},reducers:{addDrugRequest:function(e,a){e.drugs.push(a.payload),e.isLoading=!0},addDrugSuccess:function(e,a){e.isLoading=!1},addDrugError:function(e,a){e.error=a.payload},getAllDrugsRequest:function(e,a){e.isLoading=!0},getAllDrugsSuccess:function(e,a){console.log(a),e.drugs=Object(u.a)(a.payload),e.isLoading=!1}}}),m=o.actions,d=m.addDrugRequest,f=m.getAllDrugsRequest,p=o.reducer,g=t(32),E=t(60),b=t.n(E),v=t(97),h=t(98),y=t.n(h),j="https://cors-anywhere.herokuapp.com/https://umlmodeler.herokuapp.com",O={getDrugs:function(){var e=Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.a.get(j+"/api/substance/"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createDrug:function(){var e=Object(v.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.abrupt("return",y.a.post(j+"/api/substance/create",Object(g.a)({},a),{headers:{"Content-Type":"application/json"}}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},D=function(e){return function(a){return function(t){"drugs/addDrugRequest"===t.type&&(null===t||void 0===t?void 0:t.payload)&&O.createDrug(t.payload).then((function(a){"success"===a.data.message&&e.dispatch({type:"drugs/addDrugSuccess",payload:a.data.message})})),"drugs/getAllDrugsRequest"===t.type&&O.getDrugs(t.payload).then((function(a){"success"===a.data.message&&e.dispatch({type:"drugs/getAllDrugsSuccess",payload:a.data.drugs})})),a(t)}}},x=Object(l.a)({reducer:{drugs:p},middleware:function(e){return e().concat(D)}}),w=t(94),k=t.n(w),N=(t(171),[{name:"\u041f\u0456\u0434\u0431\u0456\u0440 \u043b\u0456\u043a\u0456\u0432",link:"getDrug"},{name:"\u041b\u0456\u043a\u0438",link:"allDrugs"}]),S=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:k()("name",{mobile:!1})},"HealInfo"),r.a.createElement("div",{className:"buttons"},N.map((function(e,a){var t=e.name,n=e.link;return r.a.createElement("a",{key:n+a,className:"headerButton",href:"#".concat(n)},t)}))))},C=t(50),P=t(52),H=t(244),A=t(243),q=t(53),R=t.n(q),L=t(232),B=t(245),F=t(236),W=t(235),z=t(238),I=t(240),J=t(234),T=t(241),M=t(239),G=t(233),K=t(237),Q=t(242),U=t(133),V=t.n(U),X=t(132),Y=t.n(X),Z=Object(L.a)({root:{width:"100%"},container:{maxHeight:440}});function $(e){var a,t=e.row,n=r.a.useState(!1),c=Object(P.a)(n,2),i=c[0],s=c[1],l=Z();return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{className:l.root},r.a.createElement(J.a,null,r.a.createElement(W.a,{"aria-label":"expand row",size:"small",onClick:function(){return s(!i)}},i?r.a.createElement(Y.a,null):r.a.createElement(V.a,null))),r.a.createElement(J.a,{component:"th",scope:"row"},t.name),r.a.createElement(J.a,{align:"right"},t.contraindicationDrug),r.a.createElement(J.a,{align:"right",style:{whiteSpace:"normal",wordWrap:"break-word",maxWidth:"100px"}},t.description)),r.a.createElement(G.a,null,r.a.createElement(J.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6},r.a.createElement(F.a,{in:i,timeout:"auto",unmountOnExit:!0},r.a.createElement(B.a,{margin:1},r.a.createElement(K.a,{variant:"h6",gutterBottom:!0,component:"div"},"\u041e\u0441\u043e\u0431\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u043b\u044e\u0434\u0438\u043d\u0438"),r.a.createElement(z.a,{size:"small","aria-label":"purchases"},r.a.createElement(M.a,null,r.a.createElement(G.a,null,r.a.createElement(J.a,null,"\u041d\u0430\u0437\u0432\u0430 \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u043e\u0441\u0442\u0456"),r.a.createElement(J.a,{align:"right"},"\u041e\u043f\u0438\u0441"))),r.a.createElement(I.a,null,null===(a=t.specificsOfPatients)||void 0===a?void 0:a.map((function(e,a){return r.a.createElement(G.a,{key:e.feature.name+a},r.a.createElement(J.a,{component:"th",scope:"row"},e.feature.name),r.a.createElement(J.a,{align:"right",style:{whiteSpace:"normal",wordWrap:"break-word",maxWidth:"100px"}},e.description))})))))))))}function _(e){var a=(null===e||void 0===e?void 0:e.rowData).drugs,t=Z();return r.a.createElement(T.a,{component:Q.a,className:t.container},r.a.createElement(z.a,{stickyHeader:!0,"aria-label":"collapsible table"},r.a.createElement(M.a,null,r.a.createElement(G.a,null,r.a.createElement(J.a,null),r.a.createElement(J.a,null,"\u0414\u0456\u044e\u0447\u0430 \u0440\u0435\u0447\u043e\u0432\u0438\u043d\u0430"),r.a.createElement(J.a,{align:"right"},"\u041d\u0435 \u0432\u0436\u0438\u0432\u0430\u0442\u0438 \u0437"),r.a.createElement(J.a,{align:"right"},"\u041e\u043f\u0438\u0441"))),r.a.createElement(I.a,{style:{maxHeight:"500px"}},a.map((function(e,a){return r.a.createElement($,{key:e.name+a,row:e})})))))}t(195);var ee=[{id:"name",name:"\u0414\u0456\u044e\u0447\u0430 \u0440\u0435\u0447\u043e\u0432\u0438\u043d\u0430"}],ae=function(e){var a=Object(s.b)(),t=Object(n.useCallback)((function(e){return a(d(e))}),[]),c=Object(s.c)((function(e){return e.drugs})),i=Object(n.useState)({name:"",description:"",specificsOfPatients:[],contraindicationDrug:[],contraindicationHuman:[],disease:[]}),l=Object(P.a)(i,2),o=l[0],m=l[1],f=function(e,a){return m((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(C.a)({},a,e))}))},p=function(e,a,t){var n=Object(u.a)(o.specificsOfPatients);n[e][a]=t,f(n,"specificsOfPatients")};return r.a.createElement(A.a,{item:!0,container:!0,lg:12,className:"section allDrugs",id:"allDrugs",justify:"center"},r.a.createElement(A.a,{container:!0,item:!0,lg:6,xs:12,className:"drugForm",justify:"center"},r.a.createElement(A.a,{container:!0,item:!0,md:8,justify:"center",className:"content"},ee.map((function(e,a){var t=e.id,n=e.name;return r.a.createElement(A.a,{container:!0,item:!0,xs:12,justify:"center",key:t+a},r.a.createElement(H.a,{id:"standard-basic",label:n,value:o[t],onChange:function(e){return f(e.target.value,t)}}))})),r.a.createElement(A.a,{container:!0,item:!0,className:"field",xs:12,justify:"center"},r.a.createElement(R.a,{label:"\u041d\u0435 \u0432\u0436\u0438\u0432\u0430\u0442\u0438 \u0437 \u0442\u0430\u043a\u0438\u043c\u0438 \u0440\u0435\u0447\u043e\u0432\u0438\u043d\u0430\u043c\u0438",value:o.contraindicationDrug,onAdd:function(e){var a=Object(u.a)(o.contraindicationDrug);a.push(e),f(a,"contraindicationDrug")},onDelete:function(e){var a=o.contraindicationDrug.filter((function(a){return a!==e}));f(a,"contraindicationDrug")}})),r.a.createElement(A.a,{container:!0,item:!0,className:"field",xs:12,justify:"center"},r.a.createElement(R.a,{label:"\u041d\u0435 \u0432\u0436\u0438\u0432\u0430\u0442\u0438 \u043b\u044e\u0434\u044f\u043c \u0437 \u0442\u0430\u043a\u0438\u043c\u0438 \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u043e\u0441\u0442\u044f\u043c\u0438",value:o.contraindicationHuman,onAdd:function(e){var a=Object(u.a)(o.contraindicationHuman);a.push(e),f(a,"contraindicationHuman")},onDelete:function(e){var a=o.contraindicationHuman.filter((function(a){return a!==e}));f(a,"contraindicationHuman")}})),r.a.createElement(A.a,{container:!0,item:!0,xs:12,justify:"center"},r.a.createElement(H.a,{id:"standard-basic",label:"\u041e\u043f\u0438\u0441",value:o.description,multiline:!0,rows:4,onChange:function(e){return f(e.target.value,"description")}})),r.a.createElement(A.a,{container:!0,item:!0,xs:12,justify:"center"},"\u041b\u0456\u043a\u0443\u0454 \u0445\u0432\u043e\u0440\u043e\u0431\u0438"),r.a.createElement("div",{className:"addNewSpecific",onClick:function(){return function(){var e=Object(u.a)(o.disease);e.push({name:"",symptoms:[]}),f(e,"disease")}()}},"\u0414\u043e\u0434\u0430\u0442\u0438 \u0445\u0432\u043e\u0440\u043e\u0431\u0443"),o.disease.map((function(e,a){return r.a.createElement(A.a,{item:!0,container:!0,xs:12,lg:12,key:a},r.a.createElement(A.a,{container:!0,item:!0,lg:4,xs:12},r.a.createElement(H.a,{id:"standard-basic",label:"\u041d\u0430\u0437\u0432\u0430 \u0445\u0432\u043e\u0440\u043e\u0431\u0438",value:e.name,onChange:function(e){return function(e,a,t){var n=Object(u.a)(o.disease);n[e][a]=t,f(n,"disease")}(a,"name",e.target.value)}})),r.a.createElement(R.a,{label:"\u0421\u0438\u043c\u043f\u0442\u043e\u043c\u0438",value:e.symptoms,onAdd:function(t){var n=Object(u.a)(e.symptoms);n.push(t);var r=Object(u.a)(o.disease);r[a].symptoms=n,f(r,"disease")},onDelete:function(t){var n=Object(u.a)(e.symptoms).filter((function(e){return e!==t})),r=Object(u.a)(o.disease);r[a].symptoms=n,f(r,"disease")}}),r.a.createElement("div",{style:{height:"10px"}}))})),r.a.createElement(A.a,{container:!0,item:!0,xs:12,justify:"center"},"\u041e\u0441\u043e\u0431\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u043b\u044e\u0434\u0438\u043d\u0438"),r.a.createElement("div",{className:"addNewSpecific",onClick:function(){return function(){var e=Object(u.a)(o.specificsOfPatients);e.push({name:"",description:""}),f(e,"specificsOfPatients")}()}},"\u0414\u043e\u0434\u0430\u0442\u0438 \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u0456\u0441\u0442\u044c"),o.specificsOfPatients.map((function(e,a){return r.a.createElement(A.a,{item:!0,container:!0,xs:12,lg:12,key:a},r.a.createElement(A.a,{container:!0,item:!0,lg:4,xs:12},r.a.createElement(H.a,{id:"standard-basic",label:"\u041d\u0430\u0437\u0432\u0430 \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u043e\u0441\u0442\u0456",value:e.name,onChange:function(e){return p(a,"name",e.target.value)}})),r.a.createElement(A.a,{container:!0,item:!0,lg:4},r.a.createElement(H.a,{id:"standard-basic",label:"\u041e\u043f\u0438\u0441",value:e.description,multiline:!0,rows:4,onChange:function(e){return p(a,"description",e.target.value)}})),r.a.createElement("div",{style:{height:"10px"}}))})),r.a.createElement(A.a,{container:!0,item:!0,className:"addNewSpecific",lg:12,onClick:function(){return t(o)}},"\u0414\u043e\u0434\u0430\u0442\u0438"))),r.a.createElement(A.a,{container:!0,item:!0,lg:5,xs:12},r.a.createElement(_,{rowData:c})))},te=(t(196),[{id:"symptoms",name:"\u0421\u0438\u043c\u043f\u0442\u043e\u043c\u0438"},{id:"disease",name:"\u0425\u0432\u043e\u0440\u043e\u0431\u0430"},{id:"subDisease",name:"\u0421\u0443\u043f\u0443\u0442\u043d\u0456 \u0437\u0430\u0445\u0432\u043e\u0440\u044e\u0432\u0430\u043d\u043d\u044f"},{id:"specificsOfPatients",name:"\u041e\u0441\u043e\u0431\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u043f\u0430\u0446\u0456\u0454\u043d\u0442\u0430"},{id:"contraindicationDrug",name:"\u0420\u0435\u0447\u043e\u0432\u0438\u043d\u0438 \u044f\u043a\u0456 \u0432\u0436\u0435 \u0432\u0436\u0438\u044e\u0442\u044c\u0441\u044f \u043f\u0430\u0446\u0456\u0454\u043d\u0442\u043e\u043c"}]),ne=function(e){var a=Object(n.useState)({symptoms:[],disease:[],subDisease:[],specificsOfPatients:[],contraindicationDrug:[]}),t=Object(P.a)(a,2),c=t[0],i=t[1],s=function(e,a){return i((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(C.a)({},a,e))}))};return r.a.createElement(A.a,{container:!0,item:!0,className:"section getDrug",id:"getDrug"},r.a.createElement(A.a,{container:!0,item:!0,className:"setPatient",lg:6,sm:12,justify:"center"},r.a.createElement(A.a,{container:!0,item:!0,className:"patientForm",xs:8,justify:"center"},te.map((function(e){var a=e.id,t=e.name;return r.a.createElement(A.a,{container:!0,item:!0,key:a,className:"field",xs:12,justify:"center"},r.a.createElement(R.a,{label:t,value:c[a],onAdd:function(e){var t=Object(u.a)(c[a]);t.push(e),s(t,a)},onDelete:function(e){var t=c[a].filter((function(a){return a!==e}));s(t,a)}}))})),r.a.createElement("div",{className:"submitPatient"},"\u041e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043b\u0456\u043a\u0438"))),r.a.createElement(A.a,{container:!0,item:!0,lg:6,sm:12,className:"foundDrugs"},"Drugs"))},re=(t(197),function(){var e=Object(s.b)(),a=Object(n.useCallback)((function(){return e(f())}),[]);return Object(n.useEffect)((function(){a()}),[]),r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(ne,null),r.a.createElement(ae,null))}),ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null))};t(198);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:x},r.a.createElement(ce,null))),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.07bd05c5.chunk.js.map