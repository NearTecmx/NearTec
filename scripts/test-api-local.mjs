
import handler from '../api/lead.js';
const req={method:'POST',body:{name:'Prueba NearTec',email:'test@neartec.mx',phone:'6640000000',company:'NearTec Test',service:'Diagnóstico tecnológico',score:85,source:'local-smoke'}};
const res={statusCode:200,status(c){this.statusCode=c;return this},json(data){console.log('API local OK:',JSON.stringify(data,null,2));}};
await handler(req,res);
