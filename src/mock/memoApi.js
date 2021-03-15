var Mock = require('mockjs');
const Random = Mock.Random;
var data = {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|4-10': [
        {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            createTime: Random.datetime(),
            memo: Random.paragraph(2, 10),
            tag: ['笔芯'],
            picture: ['https://ftp.bmp.ovh/imgs/2021/03/137101508a6af1ee.jpg'],
        },
    ],
};

Mock.setup({
    timeout: 10000, // 设置延迟响应，模拟向后端请求数据
});

Mock.mock('/memos', 'get', data);
