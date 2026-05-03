
import handler from '../api/lead.js';
const req={method:'POST',body:{name:'Prueba NearTec',email:'test@neartec.mx',phone:'6640000000',company:'NearTec Test',service:'Diagnóstico tecnológico',source:'local-test',score:85}};
const res={statusCode:0,body:null,headers:{},setHeader(k,v){this.headers[k]=v},status(c){this.statusCode=c;return this},json(o){this.body=o;return this}};
await handler(req,res); if(res.statusCode!==200 || !res.body?.ok) throw new Error('API local falló'); console.log('API local OK:', JSON.stringify(res.body,null,2));
