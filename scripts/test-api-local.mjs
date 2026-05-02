import handler from '../api/lead.js'
function res(){return{statusCode:200,headers:{},payload:null,setHeader(k,v){this.headers[k]=v;return this},status(c){this.statusCode=c;return this},json(d){this.payload=d;return this},end(){return this}}}
const req={method:'POST',headers:{origin:'https://neartecmx.vercel.app','user-agent':'termux-local-api-test','x-forwarded-for':'127.0.0.1'},body:{name:'Prueba NearTec',email:'test@neartec.mx',phone:'6640000000',company:'NearTec Test',service:'Diagnóstico comercial',score:85,source:'termux-local-api-test'}}
const r=res(); await handler(req,r)
if (r.statusCode!==200 || r.payload?.ok!==true) { console.error('ERROR API local:', r.statusCode, r.payload); process.exit(1) }
console.log('API local OK:', JSON.stringify(r.payload,null,2))
