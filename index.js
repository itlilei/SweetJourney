/**
 * Created by lilei8 on 2018/8/20.
 */
const Koa =require('koa')
const app =new Koa()
const Router=require('koa-router')
const bodyParser=require('koa-bodyparser')
const path=require('path')
const static =require('koa-static')
app.use(bodyParser())

const staticPath='./static'
app.use(static(
    path.join(__dirname,staticPath)
))

let home=new Router()

home.get('/user',async ctx=>{
    ctx.cookies.set(
        'cid',
        '12345',
        {
            domain: 'localhost',  // 写cookie所在的域名
            path: '/index',       // 写cookie所在的路径
            maxAge: 10 * 60 * 1000, // cookie有效时长
            expires: new Date('2017-02-15'),  // cookie失效时间
            httpOnly: false,  // 是否只用于http请求中获取
            overwrite: false  // 是否允许重写
        }
    )
    console.log('user')
    ctx.body={
        name:'zhangsan',
        query:ctx.query
    }
})
home.post('/post',async ctx=>{
    let postData=ctx.request.body
    ctx.body=postData
})
let page=new Router()
page.get('/404',async ctx=>{
    ctx.body='404'
})

let router=new Router()
router.use('/index',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

/*app.use(async(ctx)=>{
    ctx.body='hello world'
})*/
app.listen(3000)
