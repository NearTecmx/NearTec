import handler from '../api/quote-pdf.js';
const req={method:'POST',body:{input:{company:'NearTec Test',name:'Prueba',phone:'6640000000',email:'test@neartec.mx'},items:[{concept:'CompuNegocio',detail:'1 estación',frequency:'mensual',currency:'MXN',amount:450}],totals:{monthlyMxn:450,annualMxn:4050,oneTimeMxn:1500,monthlyUsd:99}}};
let sent=null;const res={statusCode:200,headers:{},status(c){this.statusCode=c;return this},setHeader(k,v){this.headers[k]=v},json(o){sent=Buffer.from(JSON.stringify(o));return this},send(o){sent=o;return this}};
await handler(req,res);if(res.statusCode!==200||!Buffer.isBuffer(sent)||sent.length<1000)throw new Error('PDF local falló');console.log('PDF local OK:',sent.length,'bytes');
