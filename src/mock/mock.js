import Mock from 'mockjs' //引入mockjs，npm已安装
import { Random } from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）
Mock.setup({
    timeout:2000  //设置请求延时时间
})
const getData = function(option){ //定义请求数据方法
    let datalist = []
    for (let i = 0; i < 13; i++) {
      datalist.push({
        id: Random.increment(1),
        business: Random.cname(),
        ripeness: Random.natural(1, 100) + '%',
        tableCnt: Random.natural(1, 200),
        accessedCnt: Random.natural(1, 120),
        accessedOver: Random.natural(1, 100) + '%',
        businessOver: Random.natural(1, 100) + '%'
       });
    }

    return {
        errcode: '0',
        errmsg: '',
        data: datalist
    };
};

const getLogin = (param) => {
    let data = JSON.parse(param.body);
    let user = {
        username: 'kaiqiang.cao',
        password: '123456'
    };

    if(data.username == user.username && data.password == user.password)
    {
        return {
            errcode: '0',
            errmsg: '',
            data: {
                username: user.username,
                isAdmin: true
            }
        }
    }

    return {
        errcode: '1023',
        errmsg: '参数错误',
        data: null
    }
};

Mock.mock('/business/list', /post|get/i, getData); //调用模拟数据方法
Mock.mock('/login', /post|get/i, getLogin);