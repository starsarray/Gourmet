import { _decorator, Component, instantiate, Label, Node, Prefab, UITransform } from 'cc';
import { NavigationBar } from './NavigationBar';
const { ccclass, property } = _decorator;

@ccclass('RecipesGenerate')
export class RecipesGenerate extends Component {
    @property(Node)
    content: Node = null;  // 指向 Content 节点

    @property(Node)
    navBar: Node = null;
    @property(Prefab)
    recipeListItemPrefab: Prefab = null;

    // 食谱数据
    recipeData: { recipes: Array<any> } = {
        recipes: [
            {
                name: "水蒸蛋",
                ingredients: ["鸡蛋"],
                seasonings: ["盐", "生抽","香油","香葱" ],
                cooking_methods: ["锅"],
                image:"image/egg/水蒸蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>水蒸蛋</color></a><br/>',
                details: 
                "    这是一个简单的水蒸蛋食谱，适合初学者。<br/>"+
                "<br/>1.将鸡蛋打散，与水1:1.5混合放入盐调味<br/>"+
                "<br/>2.除去表面气泡，用保鲜膜密封<br/>"+
                "<br/>3.放入烧开水的锅中用小火蒸10分钟<br/>"+
                "<br/>4.用刀划出分界线，淋上生抽和香油<br/>"+
                "<br/>5.最后用香葱点缀<br/>"
            },
            {
                name: "番茄炒蛋",
                ingredients: ["鸡蛋", "番茄"],
                seasonings: ["香葱", "盐"],
                cooking_methods: ["锅"],
                image:"image/egg/番茄炒蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>番茄炒蛋</color></a><br/>',
                details: "    经典的家常菜，番茄炒蛋。<br/>"+
                "<br/>1.番茄一份切大块，一份切小块<br/>"+
                "<br/>2.小火放入小块番茄慢慢煸出汤汁，然后收集起来<br/>"+
                "<br/>3.小火放多点油，然后慢慢炒搅拌了的鸡蛋<br/>"+
                "<br/>4.鸡蛋呈半数态加入炒好的番茄糊和大块番茄<br/>"+
                "<br/>5.加盐调整咸度，烩三分钟<br/>"+
                "<br/>6.撒上葱花点缀<br/>"
            },
            {
                name: "溏心蛋",
                ingredients: ["鸡蛋"],
                seasonings: [],
                cooking_methods: ["锅"],
                image:"image/egg/溏心蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>溏心蛋</color></a><br/>',
                details: "    简单得到三种蛋<br/>"+
                "<br/>1.水开关火放入鸡蛋<br/>"+
                "<br/>2.6分钟得到溏心蛋<br/>"+
                "<br/>3.8分钟得到半熟蛋<br/>"+
                "<br/>4.10分钟得到全熟蛋<br/>"+
                "<br/>5.取出放入凉水<br/>"
            },
            {
                name: "温泉蛋",
                ingredients: ["鸡蛋"],
                seasonings: [],
                cooking_methods: ["锅"],
                image:"image/egg/温泉蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>温泉蛋</color></a><br/>',
                details: "    简单得到温泉蛋<br/>"+
                "<br/>1.水开关火放入一勺凉水<br/>"+
                "<br/>2.利用余温泡15分钟<br/>"+
                "<br/>3.敲开鸡蛋得到温泉蛋<br/>"
            },
            {
                name: "水波蛋",
                ingredients: ["鸡蛋"],
                seasonings: ["醋"],
                cooking_methods: ["锅"],
                image:"image/egg/水波蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>水波蛋</color></a><br/>',
                details: "    简单得到水波蛋，蛋白更加凝固，蛋黄呈液态<br/>"+
                "<br/>1.温水放入两大勺白醋,帮助蛋白凝固<br/>"+
                "<br/>2.用蛋抽搅出一个人工旋涡<br/>"+
                "<br/>3.将鸡蛋打入旋涡中心<br/>"+
                "<br/>4.等待1分钟取出<br/>"
            },
            {
                name: "炸蛋",
                ingredients: ["鸡蛋"],
                seasonings: [],
                cooking_methods: ["锅"],
                image:"image/egg/炸蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>炸蛋</color></a><br/>',
                details: "    简单得到炸蛋<br/>"+
                "<br/>1.宽油，升高油温<br/>"+
                "<br/>2.油温较高时打入鸡蛋<br/>"+
                "<br/>3.炸到鸡蛋表面起泡出锅<br/>"
            },
            {
                name: "铺盖炸蛋",
                ingredients: ["鸡蛋"],
                seasonings: [],
                cooking_methods: ["锅"],
                image:"image/egg/铺盖炸蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>铺盖炸蛋</color></a><br/>',
                details: "    简单得到吸汤汁的铺盖炸蛋<br/>"+
                "<br/>1.鸡蛋打散<br/>"+
                "<br/>2.宽油，升高油温<br/>"+
                "<br/>3.油温较高时慢慢绕圈倒入鸡蛋<br/>"+
                "<br/>4.起泡结成蛋饼，翻面均匀受热<br/>"+
                "<br/>5.两面炸至金黄色出锅<br/>"
            },
            {
                name: "鸡蛋蒜",
                ingredients: ["鸡蛋"],
                seasonings: ["大蒜","香油"],
                cooking_methods: ["锅"],
                image:"image/egg/鸡蛋蒜/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>鸡蛋蒜</color></a><br/>',
                details: "    简单得到鸡蛋蒜酱料，适合食材不多的情况，与馒头绝配<br/>"+
                "<br/>1.大蒜加盐捣成蒜泥<br/>"+
                "<br/>2.加入全熟蛋和香油捣散<br/>"+
                "<br/>3.捣散后就得到了鸡蛋蒜酱料<br/>"
            },
            {
                name: "东北鸡蛋酱",
                ingredients: ["鸡蛋"],
                seasonings: ["黄豆酱","香其酱"],
                cooking_methods: ["锅"],
                image:"image/egg/东北鸡蛋酱/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>东北鸡蛋酱</color></a><br/>',
                details: "    简单得到东北鸡蛋酱<br/>"+
                "<br/>1.锅中放入两倍鸡蛋的油量<br/>"+
                "<br/>2.倒入蛋液划散成丝状或片状<br/>"+
                "<br/>3.加入两大勺黄豆酱或香其酱<br/>"+
                "<br/>4.炒匀后就是最简单的鸡蛋酱<br/>"
            },
            {
                name: "英式炒蛋",
                ingredients: ["鸡蛋"],
                seasonings: ["盐","胡椒粉","牛奶","黄油"],
                cooking_methods: ["英式炒蛋"],
                image:"image/egg/英式炒蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>英式炒蛋</color></a><br/>',
                details: "    不一样的炒蛋：英式炒蛋<br/>"+
                "<br/>1.鸡蛋打散，用盐和黑胡椒粉调味<br/>"+
                "<br/>2.加两勺牛奶让炒蛋更加湿润<br/>"+
                "<br/>3.锅中小火放入黄油，待黄油融化倒入蛋液<br/>"+
                "<br/>4.全程保持小火，隔几秒刮一下蛋液<br/>"+
                "<br/>5.蛋液还有一定流动性提前出锅，用余温让鸡蛋凝固<br/>"
            },
            {
                name: "法式炒蛋",
                ingredients: ["鸡蛋"],
                seasonings: ["黄油","胡椒粉"],
                cooking_methods: ["锅"],
                image:"image/egg/法式炒蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>法式炒蛋</color></a><br/>',
                details: "    不一样的炒蛋：法式炒蛋<br/>"+
                "<br/>1.小锅加水，大碗架在锅上<br/>"+
                "<br/>2.碗中放入黄油隔水加热<br/>"+
                "<br/>3.加入蛋液一起搅打<br/>"+
                "<br/>4.搅打至膏状便可出锅<br/>"+
                "<br/>5.两面炸至金黄色出锅并撒上胡椒粉<br/>"
            },
            {
                name: "茶叶蛋",
                ingredients: ["鸡蛋"],
                seasonings: ["桂皮","八角","香叶","辣椒","生抽","老抽","蚝油","糖","盐","红茶茶包"],
                cooking_methods: ["锅"],
                image:"image/egg/茶叶蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>茶叶蛋</color></a><br/>',
                details: "    简单得到茶叶蛋<br/>"+
                "<br/>1.烧一锅开水，放入洗好的鸡蛋<br/>"+
                "<br/>2.加入一根桂皮、两颗八角、五片香叶、适量辣椒、三勺生抽、两勺老抽、一勺蚝油、两勺糖、一勺盐<br/>"+
                "<br/>3.调至尝到有点齁为止，再加入红茶茶包<br/>"+
                "<br/>4.煮10分钟出锅敲碎蛋壳<br/>"+
                "<br/>5.浸泡入味即可<br/>"
            },
            {
                name: "泰式卤蛋",
                ingredients: ["鸡蛋"],
                seasonings: ["大蒜","香菜","洋葱","小米椒","柠檬","芝麻","生抽","蚝油","鱼露","糖","醋"],
                cooking_methods: ["锅"],
                image:"image/egg/泰式卤蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>泰式卤蛋</color></a><br/>',
                details: "    简单得到泰式卤蛋<br/>"+
                "<br/>1.将所有调料加水拌匀，水煮蛋放入浸泡<br/>"+
                "<br/>2.冷藏一晚让蛋白染上酱色<br/>"
            },
            {
                name: "糖醋荷包蛋",
                ingredients: ["鸡蛋"],
                seasonings: ["糖","醋","生抽","蚝油","胡椒粉","生粉","香葱"],
                cooking_methods: ["锅"],
                image:"image/egg/糖醋荷包蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>糖醋荷包蛋</color></a><br/>',
                details: "    简单得到糖醋荷包蛋<br/>"+
                "<br/>1.糖醋比1:1,再加入生抽、蚝油、适量清水与胡椒粉<br/>"+
                "<br/>2.调好水淀粉<br/>"+
                "<br/>3.将鸡蛋煎至起泡<br/>"+
                "<br/>4.调好的酱汁倒入锅中<br/>"+
                "<br/>5.最后勾个薄芡收汁，撒上葱花<br/>"
            },
            {
                name: "烤布丁",
                ingredients: ["鸡蛋"],
                seasonings: ["牛奶","炼乳"],
                cooking_methods: ["烤箱"],
                image:"image/egg/烤布丁/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>烤布丁</color></a><br/>',
                details: "    非常好吃的烤布丁<br/>"+
                "<br/>1.取出蛋黄加入牛奶<br/>"+
                "<br/>2.根据个人口味加入炼乳<br/>"+
                "<br/>3.过筛放入烤箱200度烤20分钟即可<br/>"
            },
            {
                name: "厚蛋烧",
                ingredients: ["鸡蛋"],
                seasonings: ["盐","香葱","鲣鱼酱汁"],
                cooking_methods: ["锅"],
                image:"image/egg/厚蛋烧/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>厚蛋烧</color></a><br/>',
                details: "    手艺活厚蛋烧<br/>"+
                "<br/>1.鸡蛋加入盐、香葱、鲣鱼酱汁打散(甜口也可)<br/>"+
                "<br/>2.平底锅加油保持中低火<br/>"+
                "<br/>3.倒入部分蛋液盖住锅底<br/>"+
                "<br/>4.蛋皮开始凝固时，从边缘卷起<br/>"+
                "<br/>5.卷好移到锅一侧，再倒入剩余蛋液<br/>"+
                "<br/>6.用卷好的蛋重复卷蛋<br/>"
            },
            {
                name: "魔鬼蛋",
                ingredients: ["鸡蛋"],
                seasonings: ["黄芥末","沙拉酱","辣椒粉"],
                cooking_methods: ["锅"],
                image:"image/egg/魔鬼蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>魔鬼蛋</color></a><br/>',
                details: "    西餐中一种比较另类的鸡蛋沙拉<br/>"+
                "<br/>1.全熟蛋对半切开取出蛋黄<br/>"+
                "<br/>2.蛋黄与各种酱料搅拌后加入裱花袋<br/>"+
                "<br/>3.裱花袋挤入开始对半的蛋白船中<br/>"+
                "<br/>4.最后撒上一点烟熏辣椒粉<br/>"
            },
            {
                name: "赛螃蟹",
                ingredients: ["鸡蛋"],
                seasonings: ["醋","糖","生姜"],
                cooking_methods: ["锅"],
                image:"image/egg/赛螃蟹/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>赛螃蟹</color></a><br/>',
                details: "    鸡蛋想象力的天花板<br/>"+
                "<br/>1.蛋清蛋黄分开打散，分别模拟蟹肉和蟹黄<br/>"+
                "<br/>2.香醋中加入白糖和姜汁配成蟹醋<br/>"+
                "<br/>3.锅中小火放多点油，倒入蛋白<br/>"+
                "<br/>4.划熟至蒜瓣大小的的“白肉”即可点一勺蟹醋收尾<br/>"+
                "<br/>6.“蟹黄”部分：锅中放少量油把一颗咸蛋黄抄散<br/>"+
                "<br/>7.锅里起沙时放入蛋黄，炒至比“蟹肉”更稀碎的大小加蟹醋收尾<br/>"+
                "<br/>8.蟹肉在下，蟹黄在上装盘<br/>"
            },
            {
                name: "苏格兰蛋",
                ingredients: ["鸡蛋"],
                seasonings: ["猪肉","生抽","蚝油","生粉","面包糠"],
                cooking_methods: ["锅"],
                image:"image/egg/苏格兰蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>苏格兰蛋</color></a><br/>',
                details: "    英国一道豪放的料理<br/>"+
                "<br/>1.准备一盘新鲜的肉糜加入生抽、蚝油<br/>"+
                "<br/>2.顺着一个方向搅打上劲<br/>"+
                "<br/>3.然后用肉馅包住溏心蛋<br/>"+
                "<br/>4.依次滚上生粉(玉米淀粉)、蛋液和面包糠<br/>"+
                "<br/>5.宽油油温170度炸5分钟<br/>"
            },
            {
                name: "班尼迪克蛋",
                ingredients: ["鸡蛋"],
                seasonings: ["醋","英式马芬","黄油"],
                cooking_methods: ["锅"],
                image:"image/egg/班尼迪克蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>班尼迪克蛋</color></a><br/>',
                details: "    最容易翻车的蛋<br/>"+
                "<br/>1.先做一颗水波蛋、英式马芬(馒头可替代)<br/>"+
                "<br/>2.用黄油(和配菜)煎馒头至焦香<br/>"+
                "<br/>3.馒头打底，依次铺上配菜和水波蛋<br/>"+
                "<br/>4.准备100g融化的黄油和两颗纯蛋黄<br/>"+
                "<br/>5.将锅中水烧开架上一个大碗<br/>"+
                "<br/>6.放入两个蛋黄和白醋搅散<br/>"+
                "<br/>7.边搅边倒入黄油<br/>"+
                "<br/>8.待质地发生变化时将其(荷兰酱)迅速倒入水波蛋上(关键点)<br/>"
            },
            {
                name: "拌土豆片",
                ingredients: ["土豆"],
                seasonings: ["花生酱","芝麻酱","生抽","蚝油","陈醋","糖","盐","油泼辣子","温水","芝麻","香葱"],
                cooking_methods: ["锅"],
                image:"image/potato/拌土豆片/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1fY41187Xo/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>拌土豆片</color></a><br/>',
                details: "    好吃的拌土豆片<br/>"+
                "<br/>1.去好皮的土豆削成片<br/>"+
                "<br/>2.水开放土豆片，一分钟捞出浸凉水<br/>"+
                "<br/>3.花生酱、芝麻酱、温水1：1:1搅拌到浓稠的质地<br/>"+
                "<br/>4.再加上生抽、醋、蚝油、白糖，一大勺油泼辣子<br/>"+
                "<br/>5.拌好加入土豆片继续拌<br/>"+
                "<br/>6.最后撒上芝麻和葱花<br/>"
            },
            {
                name: "煎土豆",
                ingredients: ["土豆"],
                seasonings: [],
                cooking_methods: ["锅"],
                image:"image/potato/煎土豆/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1fY41187Xo/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>煎土豆</color></a><br/>',
                details: "    好吃的煎土豆<br/>"+
                "<br/>1.土豆切成块放入烧好的开水中<br/>"+
                "<br/>2.起沙之后捞出擦干<br/>"+
                "<br/>3.淋上花生油搅拌<br/>"+
                "<br/>4.空锅中火放入土豆<br/>"+
                "<br/>5.慢慢烙到每一面都焦香收盘<br/>"
            },
            {
                name: "土豆丝饼",
                ingredients: ["土豆"],
                seasonings: ["面粉","盐","花椒粉","芝麻"],
                cooking_methods: ["锅"],
                image:"image/potato/土豆丝饼/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1fY41187Xo/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>土豆丝饼</color></a><br/>',
                details: "    好吃的土豆丝饼<br/>"+
                "<br/>1.黄皮土豆擦成细丝<br/>"+
                "<br/>2.加入面粉，撒上盐、花椒粉和一勺芝麻，揉成面糊<br/>"+
                "<br/>3.锅中油微微烫手下入面糊<br/>"+
                "<br/>4.摊成厚薄均匀的面饼，保持中低火<br/>"+
                "<br/>5.两面金黄就可出锅<br/>"
            },
            {
                name: "土豆挞",
                ingredients: ["土豆","菌菇"],
                seasonings: ["面粉","盐","花椒粉","芝麻","黄油"],
                cooking_methods: ["烤箱"],
                image:"image/potato/土豆挞/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1fY41187Xo/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>土豆挞</color></a><br/>',
                details: "    好吃的土豆挞，得先得到土豆丝饼的面糊再来<br/>"+
                "<br/>1.烤盘里刷上一层黄油<br/>"+
                "<br/>2.放入土豆丝饼的面糊，压成小碗的形状送入烤箱<br/>"+
                "<br/>3.180度50分钟定型<br/>"+
                "<br/>4.将蘑菇切碎放入油锅里，炒至褐色加盐出锅<br/>"+
                "<br/>5.土豆挞里加入蘑菇酱即可<br/>"
            },
            {
                name: "日式土豆泥",
                ingredients: ["土豆","胡萝卜","鸡蛋","黄瓜","火腿肠"],
                seasonings: ["沙拉酱","盐","胡椒粉","黄油"],
                cooking_methods: ["烤箱"],
                image:"image/potato/日式土豆泥/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1fY41187Xo/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>日式土豆泥</color></a><br/>',
                details: "    好吃的日式土豆泥<br/>"+
                "<br/>1.同时蒸土豆、胡萝卜、鸡蛋<br/>"+
                "<br/>2.与腌制好的黄瓜薄片、火腿肠一起抓烂<br/>"+
                "<br/>3.放入两个黄油块，挤上沙拉酱<br/>"+
                "<br/>4.撒上胡椒粉搅拌均匀即可<br/>"
            },
            {
                name: "薯条",
                ingredients: ["土豆"],
                seasonings: ["白醋","生粉"],
                cooking_methods: ["锅"],
                image:"image/potato/薯条/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1fY41187Xo/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>薯条</color></a><br/>',
                details: "    好吃的薯条<br/>"+
                "<br/>1.土豆切成条，加入放入白醋的开水中煮5分钟<br/>"+
                "<br/>2.捞出擦干水分滚一层玉米淀粉<br/>"+
                "<br/>3.宽油中火加热到筷子冒泡，开炸3分钟<br/>"+
                "<br/>4.再升高油温复炸至通条金黄<br/>"
            },
            {
                name: "老奶洋芋",
                ingredients: ["土豆"],
                seasonings: ["腌菜","胡椒粉","海椒面","茴香"],
                cooking_methods: ["锅"],
                image:"image/potato/老奶洋芋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1fY41187Xo/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>老奶洋芋</color></a><br/>',
                details: "    好吃的老奶洋芋<br/>"+
                "<br/>1.将蒸好的土豆捣成泥<br/>"+
                "<br/>2.锅里放油抄腌菜<br/>"+
                "<br/>3.放入胡椒粉、海椒面与土豆泥，翻炒至柔软顺滑的质地<br/>"+
                "<br/>4.加入茴香炒匀出锅<br/>"
            },
            {
                name: "洋芋擦擦",
                ingredients: ["土豆","胡萝卜","猪肉","豇豆"],
                seasonings: ["腌菜","胡椒粉","海椒面","茴香"],
                cooking_methods: ["锅"],
                image:"image/potato/洋芋擦擦/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1fY41187Xo/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>洋芋擦擦</color></a><br/>',
                details: "    好吃的拨烂子<br/>"+
                "<br/>1.将土豆和胡萝卜擦成条<br/>"+
                "<br/>2.倒入面粉，宁多勿少<br/>"+
                "<br/>3.拌好上锅蒸15分钟<br/>"+
                "<br/>4.锅放底油，放入肉丝划散<br/>"+
                "<br/>5.加入一包酸豇豆，放适量盐<br/>"+
                "<br/>6.将蒸好的擦擦放入炒匀出锅<br/>"
            },
            {
                name: "千层土豆烘蛋",
                ingredients: ["土豆","胡萝卜","鸡蛋"],
                seasonings: ["牛奶","糖"],
                cooking_methods: ["锅","烤箱"],
                image:"image/potato/千层土豆烘蛋/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1fY41187Xo/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>千层土豆烘蛋</color></a><br/>',
                details: "    好吃的千层土豆烘蛋<br/>"+
                "<br/>1.将土豆和胡萝卜切成片<br/>"+
                "<br/>2.拌好上锅蒸15分钟<br/>"+
                "<br/>3.打3颗鸡蛋搅散，放入牛奶和糖<br/>"+
                "<br/>4.将蒸好的片放入蛋液中<br/>"+
                "<br/>5.覆上保鲜膜戳几个洞，放入烤箱180度烤15分钟<br/>"+
                "<br/>6.再去盖200度烤10分钟<br/>"
            },
            {
                name: "土豆红烧肉",
                ingredients: ["土豆","猪肉","鸡蛋"],
                seasonings: ["啤酒","糖","桂皮","生抽","盐","八角","香葱"],
                cooking_methods: ["锅"],
                image:"image/potato/土豆红烧肉/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1fY41187Xo/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>土豆红烧肉</color></a><br/>',
                details: "    好吃的土豆红烧肉<br/>"+
                "<br/>1.将土豆和五花肉切成块<br/>"+
                "<br/>2.锅烧底油放入五花肉，煎至两面金黄捞出<br/>"+
                "<br/>3.剩下的油放入糖，炒至枣红色<br/>"+
                "<br/>4.下入肉块和土豆块翻炒均匀<br/>"+
                "<br/>5.倒入一整罐啤酒没过肉块<br/>"+
                "<br/>6.小火煮至汤汁浓稠，撒上香葱点缀<br/>"
            },
            {
                name: "牧羊人派",
                ingredients: ["土豆","羊肉"],
                seasonings: ["黄油","大蒜","番茄酱","浓汤宝"],
                cooking_methods: ["锅","烤箱"],
                image:"image/potato/牧羊人派/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1fY41187Xo/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>牧羊人派</color></a><br/>',
                details: "    好吃的牧羊人派<br/>"+
                "<br/>1.做一碗土豆泥加入黄油捣至顺滑<br/>"+
                "<br/>2.锅烧底油炒香羊肉糜<br/>"+
                "<br/>3.加入蒜沫、番茄酱、浓汤宝提味<br/>"+
                "<br/>4.碗底放做好的羊肉酱，上面铺好土豆泥<br/>"+
                "<br/>5.在土豆泥上雕刻后放入烤箱<br/>"+
                "<br/>6.200度15分钟即可<br/>"
            },
            {
                name: "火烧云油焖鸡",
                ingredients: ["土豆","鸡肉","番茄"],
                seasonings: ["料酒","生抽","蚝油","大蒜","小米椒","番茄酱","醋","浓汤宝","香葱"],
                cooking_methods: ["锅"],
                image:"image/potato/火烧云油焖鸡/spriteFrame",
                link:'<color=#00E0FF>点击文字观看视频:</color>'+
                '<a href="https://www.bilibili.com/video/BV1fY41187Xo/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">'+
                '<color=#FF0000>火烧云油焖鸡</color></a><br/>',
                details: "    好吃的火烧云油焖鸡<br/>"+
                "<br/>1.蒸熟的土豆一半捣成泥，一半切成块<br/>"+
                "<br/>2.在切好的鸡腿肉里加入料酒、生抽、蚝油腌制半小时<br/>"+
                "<br/>3.番茄去蒂切成块，准备好蒜和小米辣<br/>"+
                "<br/>4.锅中放油，放入腌制好的鸡腿肉<br/>"+
                "<br/>5.煎至褐色，倒入蒜蓉辣椒翻炒<br/>"+
                "<br/>6.再放入番茄焖煮5分钟<br/>"+
                "<br/>7.加入土豆泥、土豆块、生抽、番茄酱、蚝油、醋和浓汤宝<br/>"+
                "<br/>8.小火炖上20分钟至浓稠，撒上葱花<br/>"
            }
        ]
    };

    onLoad() {
        // 可以在游戏开始时展示所有食谱
        this.updateRecipeList(this.recipeData.recipes);
    }

    // 生成倒排索引
    buildInvertedIndex() {
        const invertedIndex: { [key: string]: Array<number> } = {};

        this.recipeData.recipes.forEach((recipe, index) => {
            // 将食谱名称拆分加入索引
            recipe.name.split('').forEach(char => {
                if (!invertedIndex[char]) {
                    invertedIndex[char] = [];
                }
                invertedIndex[char].push(index);
            });
            // 遍历食材
            recipe.ingredients.forEach(ingredient => {
                if (!invertedIndex[ingredient]) {
                    invertedIndex[ingredient] = [];
                }
                invertedIndex[ingredient].push(index);
                 // 将食材拆分加入索引
                ingredient.split('').forEach(char => {
                    if (!invertedIndex[char]) {
                        invertedIndex[char] = [];
                    }
                    invertedIndex[char].push(index);
                });
            });
            // 遍历配料
            recipe.seasonings.forEach(seasoning => {
                if (!invertedIndex[seasoning]) {
                    invertedIndex[seasoning] = [];
                }
                invertedIndex[seasoning].push(index);
                // 将配料拆分加入索引
                seasoning.split('').forEach(char => {
                    if (!invertedIndex[char]) {
                        invertedIndex[char] = [];
                    }
                    invertedIndex[char].push(index);
                });
            });
            // todo 解决重复索引
            
        });

        return invertedIndex;
    }

    // 搜索功能
    searchRecipesByKeyword(keyword: string): Array<any> {
        const invertedIndex = this.buildInvertedIndex();
        const resultIndexes: Array<number> = [];

        // 遍历每个字符进行查找
        if (invertedIndex[keyword]) {
            resultIndexes.push(...invertedIndex[keyword]);
        }
        keyword.split('').forEach(char => {
            if (invertedIndex[char]) {
                resultIndexes.push(...invertedIndex[char]);
            }
        });
        // 去重
        const uniqueIndexes = Array.from(new Set(resultIndexes));
        return uniqueIndexes.map(index => this.recipeData.recipes[index]);
    }

    // 通过食材搜索食谱
    filterRecipesByIngredient(ingredient: string): Array<any> {
        return this.recipeData.recipes.filter(recipe => 
            recipe.ingredients.includes(ingredient) || recipe.seasonings.includes(ingredient)
        );
    }

    // 更新食谱列表的显示
    updateRecipeList(recipes: Array<any>) {
        // 清空当前列表
        this.content.removeAllChildren();
        recipes.forEach(recipe => {
            // 实例化 RecipeListItem 预制件
            const listItem = instantiate(this.recipeListItemPrefab);
            // 获取子节点并分别设置 Label 文本
            const nameLabel = listItem.getChildByName("NameLabel").getComponent(Label);
            const ingredientsLabel = listItem.getChildByName("IngredientsLabel").getComponent(Label);
            const seasoningsLabel = listItem.getChildByName("SeasoningsLabel").getComponent(Label);
            const cookingMethodsLabel = listItem.getChildByName("CookingMethodsLabel").getComponent(Label);
            // 设置食谱名称
            if (nameLabel) {
                nameLabel.string = recipe.name;
            }
            // 设置食材
            if (ingredientsLabel) ingredientsLabel.string = `食材：${recipe.ingredients.join(",")}`;
            // 设置配料
            if (seasoningsLabel) {
                if(recipe.seasonings != "")
                    seasoningsLabel.string = `配料：${recipe.seasonings.join(",")}`;
                else{
                    seasoningsLabel.string = `配料：无`;
                }
            }
            // 设置烹饪方式
            if (cookingMethodsLabel) {
                cookingMethodsLabel.string = `烹饪方式：${recipe.cooking_methods.join(",")}`;
            }
            // 添加点击事件，跳转到详情页面并传参
            listItem.on(Node.EventType.TOUCH_END, () => {
                const navigationBarComponent = this.navBar.getComponent(NavigationBar);
                if (navigationBarComponent) {
                    navigationBarComponent.goToDetailPage(recipe);  // 调用实例的方法
                }
        });
            // 将 listItem 添加到 content 中
            this.content.addChild(listItem);
        });
        // 更新滚动视图内容尺寸
        this.scheduleOnce(() => {
            const contentUITransform = this.content.getComponent(UITransform);
            contentUITransform.height = this.content.children.reduce((acc, child) => acc + child.getComponent(UITransform).height, 0);
        }, 0);
    }
    
}


