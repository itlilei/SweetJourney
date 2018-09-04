/**
 * Created by lilei8 on 2018/8/20.
 */
const {query}=require('./db/query')
async function selectUser() {
    let sql='select * from user'
    let dataList=await query(sql)
    return dataList
}
async function getUser() {
    let dataList=await selectUser()
    var data = JSON.parse(JSON.stringify(dataList))
    console.log(data)
}
getUser()