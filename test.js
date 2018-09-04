const axios=require('axios')
/*axios.post('http://localhost:3000/index/post',{name:'lisi'}).then(res=>{
        console.log(res.data)

    })*/
//智能闲聊
const app_key='ycny8hzn645b5WHR'
const querystring =require('querystring')
let crypto=require('crypto')
let md5=crypto.createHash('md5')

let params={
    app_id:'2108129412',
    nonce_str:Math.random().toString(),
    question:'给我讲个笑话呗',
    session:'123',
    //sign:'',
    time_stamp:new Date().getTime()/1000
}
for (let key of Object.keys(params)) {
    params[key]=encodeURI(params[key]).toUpperCase()
}
let str=querystring.stringify(params)+'&app_key='+app_key
//console.log('str',str)
let sign= md5.update(str).digest('hex').toUpperCase();
params.sign=sign

//console.log(sign)
axios.post('https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat',querystring.stringify(params),{
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then(res=>{
    console.log(res.data)
})
