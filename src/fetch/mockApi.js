const firstData = [
    {
        title: '交警总队',
        key: '0'
    },
    {
        title: '刑侦总队',
        key: '1',
    },
    {
        title: '治安总队',
        key: '3'
    },
    {
        title: '监察总队',
        key: '4'
    }
];

const trafficData = [
    {
        title: '一纵队',
        key: '01',
        isLeaf: true
    },
    {
        title: '二纵队',
        key: '02',
        isLeaf: true
    },
    {
        title: '三纵队',
        key: '03',
        isLeaf: true
    }
];

const investData = [
    {
        title: '一纵队',
        key: '11',
        isLeaf: true
    },
    {
        title: '二纵队',
        key: '12',
        isLeaf: true
    },
    {
        title: '三纵队',
        key: '13',
        isLeaf: true
    }
];

const securityData = [
    {
        title: '一纵队',
        key: '21',
        isLeaf: true
    },
    {
        title: '二纵队',
        key: '22',
        isLeaf: true
    },
    {
        title: '三纵队',
        key: '23',
        isLeaf: true
    }
];

const supervisionData = [
    {
        title: '一纵队',
        key: '31',
        isLeaf: true
    },
    {
        title: '二纵队',
        key: '32',
        isLeaf: true
    },
    {
        title: '三纵队',
        key: '33',
        isLeaf: true
    }
];

const list = [
    {
        id: '181015',
        checked: false,
        business: '系统1号',
        ripeness: '80%',
        tableCnt: 50,
        accessedCnt: 22,
        accessedOver: '30%',
        businessOver: '23%'
    },
    {
        id: '181016',
        checked: false,
        business: '系统3号',
        ripeness: '80%',
        tableCnt: 50,
        accessedCnt: 22,
        accessedOver: '30%',
        businessOver: '23%'
    },
    {
        id: '181017',
        checked: false,
        business: '系统12号',
        ripeness: '80%',
        tableCnt: 50,
        accessedCnt: 22,
        accessedOver: '30%',
        businessOver: '23%'
    }
];

const list1 = [
    {
        id: '181018',
        checked: false,
        business: '总队的二队',
        ripeness: '56%',
        tableCnt: 86,
        accessedCnt: 12,
        accessedOver: '30%',
        businessOver: '23%'
    },
    {
        id: '181019',
        checked: false,
        business: '总队的二队',
        ripeness: '23%',
        tableCnt: 234,
        accessedCnt: 32,
        accessedOver: '35%',
        businessOver: '23%'
    },
    {
        id: '181020',
        checked: false,
        business: '总队的二队',
        ripeness: '40%',
        tableCnt: 60,
        accessedCnt: 12,
        accessedOver: '30%',
        businessOver: '25%'
    }
];

const mockAPi = (type, info) => {
    const param = Object.assign({}, info);
    switch(type)
    {
        case 1:
            const targetUser = {
                username: 'kaiqiang.cao',
                password: '123456'
            };

            if(param.username == targetUser.username && param.password == targetUser.password)
            {
                return {
                    isAdmin: true,
                    username: param.username
                };
            }
            return null;
        case 2:
            if(param.nodeLevel == 1)
            {
                return firstData;
            }

            if(param.key == '0')
            {
                return trafficData;
            }

            if(param.key == '1')
            {
                return investData;
            }

            if(param.key == '2')
            {
                return securityData;
            }

            if(param.key == '3')
            {
                return supervisionData;
            }
            return [];
        case 3:
            if(info.key == '01') return list;
            if(info.key == '02') return list1;
            
            return [];
        default: 
            return null;
    }
}

export default mockAPi;