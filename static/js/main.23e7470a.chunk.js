(this["webpackJsonpimage-finder"]=this["webpackJsonpimage-finder"]||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),i=a.n(o),s=(a(98),a(99),a(77)),c=a.n(s);var d=a(7),b=a(180),l=a(181),x=a(182),h=a(166),j=a(2);const g=Object(d.a)(b.a)`
  background: linear-gradient(135deg, #28313B 30%, #485461 90%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 10px 0;
`,p=Object(d.a)(l.a)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,u=Object(d.a)("div")`
  display: flex;
  align-items: center;
`,f=Object(d.a)(x.a)`
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #ffffff;
`,O=Object(d.a)(h.a)`
  color: #ffcc00;
  font-size: 36px;
`,m=Object(d.a)("h3")`
  color: #ffcc00;
  font-weight: 300;
  font-size: 25px;
  margin: 0;
  position: absolute;
  top: 10px;
  right: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
`;var w=()=>Object(j.jsx)(g,{position:"static",children:Object(j.jsxs)(p,{children:[Object(j.jsxs)(u,{children:[Object(j.jsx)(O,{}),Object(j.jsx)(f,{variant:"h5",style:{marginLeft:10},children:"Visual-Nexus"})]}),Object(j.jsx)(m,{children:"By-Abhishek Singh"})]})}),v=a(178),y=a(172),k=a(176);const C=Object(d.a)(v.a)`
    display: flex;
    align-items: center;
    background: #F6F6F6;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }

    & > div {
        margin-right: 10px;
    }
`,S=Object(d.a)(y.a)`
    flex: 1;
    background: white;
    border-radius: 30px;
    padding: 8px;
    border: 1px solid #D1D1D1;
    transition: border 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #445A6F;
        box-shadow: 0 0 5px rgba(68, 90, 111, 0.5);
        outline: none;
    }
`,F=Object(d.a)(k.a)`
    background: #445A6F;
    color: white;
    padding: 8px 16px;
    border-radius: 30px;
    transition: background 0.3s ease;

    &:hover {
        background: red;
    }
`;var D=e=>{let{onTextChange:t,onCountChange:a,onSearch:n}=e;return Object(j.jsxs)(C,{m:1,children:[Object(j.jsx)(S,{onChange:e=>t(e.target.value),placeholder:"Search images"}),Object(j.jsx)(S,{onChange:e=>a(e.target.value),placeholder:"Number of images",type:"number"}),Object(j.jsx)(F,{onClick:n,children:"Search"})]})},A=a(179),B=a(183);const I=Object(d.a)("img")({height:300,width:"100%",objectFit:"cover"});var L=e=>{let{image:t}=e;return Object(j.jsx)(B.a,{children:Object(j.jsx)(I,{src:t.largeImageURL,alt:t.user})})};const N=Object(d.a)(A.a)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  margin: 0;
`,T=Object(d.a)(A.a)`
  padding: 10px;

  @media (min-width: 600px) {
    width: 48%;
  }

  @media (min-width: 900px) {
    width: 23%;
  }
`,z=Object(d.a)("div")`
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1) saturate(1.2);
  }

  img {
    transition: transform 0.4s ease-in-out, filter 0.4s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
    filter: grayscale(0.3);
  }
`;var E=e=>{let{data:t}=e;return Object(j.jsx)(N,{container:!0,children:t.map((e=>Object(j.jsx)(T,{item:!0,children:Object(j.jsx)(z,{children:Object(j.jsx)(L,{image:e})})},e.id)))})},J=a(175),P=a(173);const $=Object(d.a)(J.a)`
    color: #fff;
    background-color: #000000;
`;var _=e=>{let{open:t,toggleSnack:a}=e;const n=(e,t)=>{"clickaway"!==t&&a(!1)};return Object(j.jsx)(v.a,{children:Object(j.jsx)(P.a,{open:t,autoHideDuration:3e3,onClose:n,children:Object(j.jsx)($,{severity:"info",onClose:n,children:"Number of Images should be between 3 and 200"})})})};var q=function(){const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)("cars"),[o,i]=Object(n.useState)(10),[s,d]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{if(o<3||o>200)return void d(!0);d(!1);(async()=>{await(async(e,t)=>{try{return await c.a.get(`https://pixabay.com/api//?key=20259577-c93c75abc878a636931b34317&q=${e}&image_type=photo&per_page=${t}&safesearch=true`)}catch(a){console.log(a)}})(a,o).then((e=>{t(e.data.hits)}))})()}),[a,o]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(w,{}),Object(j.jsx)(D,{onTextChange:e=>{r(e)},onCountChange:e=>{i(e)}}),Object(j.jsx)(E,{data:e}),Object(j.jsx)(_,{open:s,toggleSnack:d})]})};var H=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,186)).then((t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:o,getTTFB:i}=t;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),H()},98:function(e,t,a){},99:function(e,t,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.23e7470a.chunk.js.map