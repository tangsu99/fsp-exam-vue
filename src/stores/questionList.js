// 题目均为国际版 Java edition 1.18.2 原版 基本信息: 正版游戏名: qq号: no no
// 数据结构带正确答案仅供测试，实际发布程序请勿将正确答案发送至前端

export const testQuestions1 = [
  {
    id: 1,
    type: 'singleChoice',
    title: '附魔金苹果可以合成吗',
    options: ['可以', '不可以'],
    score: 5,
    answer: 'B',
  },
  {
    id: 2,
    type: 'singleChoice',
    title: '末地烛可以合成吗',
    options: ['可以', '不可以'],
    score: 5,
    answer: 'A',
  },
  {
    id: 3,
    type: 'singleChoice',
    title: '伪和平可以防止幻翼生成吗',
    options: ['可以', '不可以'],
    score: 5,
    answer: 'B',
  },
  {
    id: 4,
    type: 'singleChoice',
    title: '红石粉是否可通过交易获得',
    options: ['可以', '不可以'],
    score: 5,
    answer: 'B',
  },
  {
    id: 5,
    type: 'singleChoice',
    title: '紫水晶母岩是否可以用精准魔咒的镐子采集',
    options: ['可以', '不可以'],
    score: 5,
    answer: 'B',
  },
  {
    id: 6,
    type: 'singleChoice',
    title: '我的世界的bug常被玩家戏称为什么',
    options: ['特性', '虫', 'bud', '漏洞'],
    score: 5,
    answer: 'A',
  },
  {
    id: 7,
    type: 'singleChoice',
    title: '在地狱坐标为(100,128,-200)的地方开一扇地狱门，进入后最有可能传送到的主世界坐标是什么',
    options: ['(100,64,-200)', '(-100,-128,200)', '(800,128,-800)', '(800,64,-1600)'],
    score: 5,
    answer: 'D',
  },
  {
    id: 8,
    type: 'singleChoice',
    title: '经验修补与下列哪种附魔互斥',
    options: ['忠诚', '荆棘', '击退', '无限'],
    score: 5,
    answer: 'D',
  },
  // {
  //     id: 8,
  //     type: "singleChoice",
  //     title: "经验修补与下列哪种附魔互斥",
  //     options: [
  //         {"忠诚", id =1}
  //         {"忠诚", id =2}
  //         {"忠诚", id =3}
  //         {"忠诚", id =4}
  //     ],
  //     score: 5,
  //     answer: "23",
  // },
  {
    id: 9,
    type: 'singleChoice',
    title: '海龟在繁殖后会在哪里产卵',
    options: ['就近', '海龟出生点', '繁殖地10格内', '繁殖地20格内'],
    score: 5,
    answer: 'B',
  },
  {
    id: 10,
    type: 'singleChoice',
    title: '通常使用下列那种方法判断方块是否为实体方块',
    options: ['是不是金属', '是否压箱', '是否能在上表面放红石粉', '透不透明'],
    score: 5,
    answer: 'B',
  },
  {
    id: 11,
    type: 'singleChoice',
    title: '下列红石常识中，有一个正确选项，请选出来',
    options: ['树叶可以传递信号', '1秒=10gt', '掉刻不影响现实效率也不影响理论效率', '漏斗的效率是7000/h'],
    score: 5,
    answer: 'A',
  },
  {
    id: 12,
    type: 'singleChoice',
    title: '下列红石常识中，有一个错误选项，请选出来',
    options: [
      '投掷器不能被推动',
      '制作T触发必须要侦测器',
      '木制压力板比石质压力板发出信号更久并且能被箭触发',
      '大部分树场处理橡木需要打开限高',
    ],
    score: 5,
    answer: 'B',
  },
  {
    id: 13,
    type: 'singleChoice',
    title: 'TNT复制必不可少的材料是什么',
    options: ['粘液块', '珊瑚', '活塞', '矿车'],
    score: 5,
    answer: 'C',
  },
  {
    id: 14,
    type: 'singleChoice',
    title: '红石线的信号强度范围为',
    options: ['0-15', '1-15', '1-14', '0-14'],
    score: 5,
    answer: 'A',
  },
  {
    id: 26,
    type: 'singleChoice',
    score: 5,
    title: '下列哪种组合适合建造现代风格的房屋',
    options: ['砂岩、橡木和玻璃', '白色混凝土、玻璃和石英块', '灵魂土', '石砖、地狱砖和红石灯'],
    answer: 'B',
  },
  {
    id: 25,
    type: 'singleChoice',
    score: 5,
    title: '在超大型建筑中，如何减少材质单一造成的视觉疲劳',
    options: [
      '全部使用同一种方块提高一致性',
      '添加纹理变化并使用深浅不同的色系方块',
      '在建筑表面随机放置火把',
      '不加任何装饰，保持简洁',
    ],
    answer: 'B',
  },
  {
    id: 17,
    type: 'multipleChoice',
    title: '很多机器依赖特定的游戏版本，请选出正确的选项（原版条件下，截止到1.19以前）',
    options: [
      '末地石农场在1.16.5以后失效',
      '烧包机存在于在1.18及以后',
      '0t催熟在1.17及以后失效',
      '从1.14开始，刷铁机不再堆门',
    ],
    score: 10,
    answer: 'AD',
  },
  {
    id: 18,
    type: 'multipleChoice',
    title: '下列说法正确的是（以1.16为背景）',
    options: [
      '村民繁殖工程村民不繁殖的原因可能是没有有效门，所以应当增添至少一扇有效门',
      '在一个3x3封闭空间内放置3张床和两只村民，若正常繁殖，不做任何处理仅可繁殖一只村民',
      '在距凋零骷髅水平直线距离15格出现一只静止的猪灵，凋零将向猪灵冲去',
      '在只有一个已绑定的职业方块空间内将绑定此方块的村民变种为僵尸村民，再引入一个村民，引入的村民将不可绑定此方块',
    ],
    score: 10,
    answer: 'BC',
  },
  {
    id: 19,
    type: 'fillInTheBlanks',
    title: '创建地狱门最少需要多少块黑曜石',
    score: 10,
    answer: '10',
  },
  {
    id: 20,
    type: 'fillInTheBlanks',
    title: '活塞最多可推动多少个方块',
    score: 10,
    answer: '12',
  },
  {
    id: 21,
    type: 'fillInTheBlanks',
    title: '红石中继器有几个延迟档位',
    score: 10,
    answer: '4',
  },
  {
    id: 22,
    type: 'fillInTheBlanks',
    title: '(4961+56-17)÷5 等于几',
    score: 10,
    answer: '1000',
  },
  {
    id: 23,
    type: 'subjective',
    title:
      '图1 工作台切换装置，图2 拉下拉杆，图3 装置背面，图4 装置侧面，图5中是否可以去掉红框内的红石粉，如果不可以，请简述为什么',
    img_url: [
      '../assets/images/23-1.png',
      '../assets/images/23-2.png',
      '../assets/images/23-3.png',
      '../assets/images/23-4.png',
      '../assets/images/23-5.png',
    ],
    score: 10,
  },
  {
    id: 24,
    type: 'subjective',
    score: 10,
    title:
      '已知主世界中有地狱门，坐标看成一个单点\n1.在地狱(0,0)建造地狱门，求主世界地狱门串门和生成地狱门范围\n2.现已知主世界地狱门有两扇地狱门串门，其单点坐标一致，朝向一致，高度差为40格，其中y（A）＞y（B），求地狱门串门所有可能',
  },
  {
    id: 25,
    type: 'subjective',
    score: 10,
    title: '比较器在减法模式有容器检测的情况下 用侦测器瞬息中继器的直出时序是几gt并解释原因',
    answer:
      '答案：2gt,这里比较器被侦测器瞬息减法模式可以减去2gt的响应时间(比较器特性)，所以只有中继器有延迟，中继器一档有2gt延迟',
  },
];

// const pvp = [
//     {
//         id: ,
//         type: "singleChoice",
//         title: "以下哪一条情况会使得玩家无法暴击",
//         options: [" 玩家处于潜行状态", "玩家处于下落状态", "玩家处于鞘翅飞行状态", "玩家处于疾跑状态"],
//         score: 5,
//         answer: "D",
//     },
//     {
//         id: ,
//         type: "singleChoice",
//         title: "以下哪一种情况可以百分百杀死处于满血的玩家（玩家没有减伤手段）",
//         options: ["用力量V的弓射一箭", "用穿透IV的弩射三箭", "用重锤在4格高的地方暴击一次", "用锋利V的下界合金斧暴击一次"],
//         score: 5,
//         answer: "C",
//     },
//     {
//         id: ,
//         type: "singleChoice",
//         title: "盾牌是在1.12加入进游戏的，同时副手也被加入",
//         options: ["正确", "错误"],
//         score: 5,
//         answer: "B",
//     },
//     {
//         id: ,
//         type: "singleChoice",
//         title: "敌人使用火焰附加的剑时，可以制作一些钻石护甲，能减少因火焰附加损失的血量",
//         options: ["正确", "错误"],
//         score: 5,
//         answer: "B",
//     },
//     {
//         id: ,
//         type: "singleChoice",
//         title: "在玩家使用盾牌时，除非使用斧头，否则不可能攻击到玩家",
//         options: ["正确", "错误"],
//         score: 5,
//         answer: "B",
//     },
//     {
//         id: ,
//         type: "multipleChoice",
//         title: "以下哪种点击方式仅需手和鼠标即可实现",
//         options: ["NC", "BC", "JC", "AC"],
//         score: 5,
//         answer: "ABC",
//     },
//     {
//         id: ,
//         type: "multipleChoice",
//         title: "低版本中，可以重置自己对对方造成的击退距离的操作是",
//         options: ["松开移动键", "右键格挡", "打开聊天栏", "左键连点"],
//         score: 5,
//         answer: "ABC",
//     },
//     {
//         id: ,
//         type: "singleChoice",
//         title: "低版本常见PotPvp中不提供药水为",
//         options: ["抗火", "力量", "瞬间治疗", "迅捷"],
//         score: 5,
//         answer: "B",
//     },
//     {
//         id: ,
//         type: "singleChoice",
//         title: "低版本中随着攻击对方时cps的增加而改变的自身属性是",
//         options: ["攻击距离", "单次伤害", "伤害减免", "移动速度"],
//         score: 5,
//         answer: "D",
//     },
//     {
//         id: ,
//         type: "singleChoice",
//         title: "低版本中'跳跃重置'的效果是",
//         options: ["增加自己的伤害", "伤害减免", "减少对方对自己的击退", "重置武器的冷却时间"],
//         score: 5,
//         answer: "C",
//     },

// ];
// const other [
//     {
//         id: ,
//         type: "singleChoice",
//         title: "潜影贝的传送范围为（1.18.2）",
//         options: ["以自己为中心，向各方向延伸8格的立方体内可以附着的方块面", "以自己为中心，向各方向延伸8格的立方体内可以附着的方块", "以自己为中心，半径8格的圆内可以附着的方块面", "以自己为中心，半径8格的圆内可以附着的方块"],
//         score: 5,
//         answer: "A",
//     },
//     {
//         id: ,
//         type: "singleChoice",
//         title: "做为一名生电人，压榨村民是重要的能力之一，以下哪种情况村民会降价",
//         options: ["尸变后救回", "多次交易", "打一拳", "在村民面前打其他村民"],
//         score: 5,
//         answer: "A",
//     },
//     {
//         id: ,
//         type: "singleChoice",
//         title: "以下最矮的怪物是",
//         options: ["苦力怕", "僵尸", "凋零骷髅", "骷髅"],
//         score: 5,
//         answer: "A",
//     },
//     {
//         id: ,
//         type: "multipleChoice",
//         title: "以下碰撞箱小于1*1*1的是",
//         options: ["灵魂沙", "点燃的TNT", "密块", "玩家"],
//         score: 5,
//         answer: "ABC",
//     },
//     {
//         id: ,
//         type: "multipleChoice",
//         title: "以下哪些渠道可以获得经验修复",
//         options: ["村民交易", "猪灵交易", "战利品箱子中的装备自带", "钓鱼"],
//         score: 5,
//         answer: "ACD",
//     },
//     {
//         id: ,
//         type: "fillInTheBlanks",
//         title: "写一条carpet指令，功能是让假人 haridy 一直跳（以/player开头）"
//         score: 5,
//         answer: "/player haridy jump continuous",
//     },
//     {
//         id: ,
//         type: "fillInTheBlanks",
//         title: "服务器中玩红石的有22人，玩建筑的有16人，即会玩红石也会玩建筑的有8人，求服务器中至少有几人",
//         score: 5,
//         answer: "30",
//     },
//     {
//         id: 15,
//         type: "singleChoice",
//         title: "凋零骷髅会被什么吸引仇恨",
//         options: ["猪灵", "僵尸猪灵", "骷髅", "僵尸"],
//         score: 5,
//         answer: "A",
//     },
//     {
//         id: 16,
//         type: "singleChoice",
//         title: "在下列选项中选出碰撞箱不完整的方块",
//         options: ["灵魂沙", "平滑石头", "灵魂土", "草方块"],
//         score: 5,
//         answer: "A",
//     },
// ]
