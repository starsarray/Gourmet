System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, UITransform, NavigationBar, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RecipesGenerate;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNavigationBar(extras) {
    _reporterNs.report("NavigationBar", "./NavigationBar", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      NavigationBar = _unresolved_2.NavigationBar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50964wq3WpCzIerRfBKXLtU", "RecipesGenerate", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RecipesGenerate", RecipesGenerate = (_dec = ccclass('RecipesGenerate'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = (_class2 = class RecipesGenerate extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "content", _descriptor, this);

          // 指向 Content 节点
          _initializerDefineProperty(this, "navBar", _descriptor2, this);

          _initializerDefineProperty(this, "recipeListItemPrefab", _descriptor3, this);

          // 食谱数据
          this.recipeData = {
            recipes: [{
              name: "水蒸蛋",
              ingredients: ["鸡蛋"],
              seasonings: ["盐", "酱油", "香油", "香葱"],
              cooking_methods: ["锅", "电饭煲"],
              image: "image/egg/水蒸蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>水蒸蛋</color></a><br/>',
              details: "    这是一个简单的水蒸蛋食谱，适合初学者。<br/>" + "<br/>1.将鸡蛋打散，与水1:1.5混合放入盐调味<br/>" + "<br/>2.除去表面气泡，用保鲜膜密封<br/>" + "<br/>3.放入烧开水的锅中用小火蒸10分钟<br/>" + "<br/>4.用刀划出分界线，淋上酱油和香油<br/>" + "<br/>5.最后用香葱点缀<br/>"
            }, {
              name: "番茄炒蛋",
              ingredients: ["鸡蛋", "番茄"],
              seasonings: ["香葱", "盐"],
              cooking_methods: ["锅"],
              image: "image/egg/番茄炒蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>番茄炒蛋</color></a><br/>',
              details: "    经典的家常菜，番茄炒蛋。<br/>" + "<br/>1.番茄一份切大块，一份切小块<br/>" + "<br/>2.小火放入小块番茄慢慢煸出汤汁，然后收集起来<br/>" + "<br/>3.小火放多点油，然后慢慢炒搅拌了的鸡蛋<br/>" + "<br/>4.鸡蛋呈半数态加入炒好的番茄糊和大块番茄<br/>" + "<br/>5.加盐调整咸度，烩三分钟<br/>" + "<br/>6.撒上葱花点缀<br/>"
            }, {
              name: "溏心蛋",
              ingredients: ["鸡蛋"],
              seasonings: [],
              cooking_methods: ["锅"],
              image: "image/egg/溏心蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>溏心蛋</color></a><br/>',
              details: "    简单得到三种蛋<br/>" + "<br/>1.水开关火放入鸡蛋<br/>" + "<br/>2.6分钟得到溏心蛋<br/>" + "<br/>3.8分钟得到半熟蛋<br/>" + "<br/>4.10分钟得到全熟蛋<br/>" + "<br/>5.取出放入凉水<br/>"
            }, {
              name: "温泉蛋",
              ingredients: ["鸡蛋"],
              seasonings: [],
              cooking_methods: ["锅"],
              image: "image/egg/温泉蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>温泉蛋</color></a><br/>',
              details: "    简单得到温泉蛋<br/>" + "<br/>1.水开关火放入一勺凉水<br/>" + "<br/>2.利用余温泡15分钟<br/>" + "<br/>3.敲开鸡蛋得到温泉蛋<br/>"
            }, {
              name: "水波蛋",
              ingredients: ["鸡蛋"],
              seasonings: ["醋"],
              cooking_methods: ["锅"],
              image: "image/egg/水波蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>水波蛋</color></a><br/>',
              details: "    简单得到水波蛋，蛋白更加凝固，蛋黄呈液态<br/>" + "<br/>1.温水放入两大勺白醋,帮助蛋白凝固<br/>" + "<br/>2.用蛋抽搅出一个人工旋涡<br/>" + "<br/>3.将鸡蛋打入旋涡中心<br/>" + "<br/>4.等待1分钟取出<br/>"
            }, {
              name: "炸蛋",
              ingredients: ["鸡蛋"],
              seasonings: [],
              cooking_methods: ["锅"],
              image: "image/egg/炸蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>炸蛋</color></a><br/>',
              details: "    简单得到炸蛋<br/>" + "<br/>1.宽油，升高油温<br/>" + "<br/>2.油温较高时打入鸡蛋<br/>" + "<br/>3.炸到鸡蛋表面起泡出锅<br/>"
            }, {
              name: "铺盖炸蛋",
              ingredients: ["鸡蛋"],
              seasonings: [],
              cooking_methods: ["锅"],
              image: "image/egg/铺盖炸蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>铺盖炸蛋</color></a><br/>',
              details: "    简单得到吸汤汁的铺盖炸蛋<br/>" + "<br/>1.鸡蛋打散<br/>" + "<br/>2.宽油，升高油温<br/>" + "<br/>3.油温较高时慢慢绕圈倒入鸡蛋<br/>" + "<br/>4.起泡结成蛋饼，翻面均匀受热<br/>" + "<br/>5.两面炸至金黄色出锅<br/>"
            }, {
              name: "鸡蛋蒜",
              ingredients: ["鸡蛋"],
              seasonings: ["大蒜", "香油"],
              cooking_methods: ["锅"],
              image: "image/egg/鸡蛋蒜/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>鸡蛋蒜</color></a><br/>',
              details: "    简单得到鸡蛋蒜酱料，适合食材不多的情况，与馒头绝配<br/>" + "<br/>1.大蒜加盐捣成蒜泥<br/>" + "<br/>2.加入全熟蛋和香油捣散<br/>" + "<br/>3.捣散后就得到了鸡蛋蒜酱料<br/>"
            }, {
              name: "东北鸡蛋酱",
              ingredients: ["鸡蛋"],
              seasonings: ["黄豆酱", "香其酱"],
              cooking_methods: ["锅"],
              image: "image/egg/东北鸡蛋酱/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>东北鸡蛋酱</color></a><br/>',
              details: "    简单得到东北鸡蛋酱<br/>" + "<br/>1.锅中放入两倍鸡蛋的油量<br/>" + "<br/>2.倒入蛋液划散成丝状或片状<br/>" + "<br/>3.加入两大勺黄豆酱或香其酱<br/>" + "<br/>4.炒匀后就是最简单的鸡蛋酱<br/>"
            }, {
              name: "英式炒蛋",
              ingredients: ["鸡蛋"],
              seasonings: ["盐", "胡椒粉", "牛奶", "黄油"],
              cooking_methods: ["英式炒蛋"],
              image: "image/egg/英式炒蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>英式炒蛋</color></a><br/>',
              details: "    不一样的炒蛋：英式炒蛋<br/>" + "<br/>1.鸡蛋打散，用盐和黑胡椒粉调味<br/>" + "<br/>2.加两勺牛奶让炒蛋更加湿润<br/>" + "<br/>3.锅中小火放入黄油，待黄油融化倒入蛋液<br/>" + "<br/>4.全程保持小火，隔几秒刮一下蛋液<br/>" + "<br/>5.蛋液还有一定流动性提前出锅，用余温让鸡蛋凝固<br/>"
            }, {
              name: "法式炒蛋",
              ingredients: ["鸡蛋"],
              seasonings: ["黄油", "胡椒粉"],
              cooking_methods: ["锅"],
              image: "image/egg/法式炒蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>法式炒蛋</color></a><br/>',
              details: "    不一样的炒蛋：法式炒蛋<br/>" + "<br/>1.小锅加水，大碗架在锅上<br/>" + "<br/>2.碗中放入黄油隔水加热<br/>" + "<br/>3.加入蛋液一起搅打<br/>" + "<br/>4.搅打至膏状便可出锅<br/>" + "<br/>5.两面炸至金黄色出锅并撒上胡椒粉<br/>"
            }, {
              name: "茶叶蛋",
              ingredients: ["鸡蛋"],
              seasonings: ["桂皮", "八角", "香叶", "辣椒", "生抽", "老抽", "蚝油", "糖", "盐", "红茶茶包"],
              cooking_methods: ["锅"],
              image: "image/egg/茶叶蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>茶叶蛋</color></a><br/>',
              details: "    简单得到茶叶蛋<br/>" + "<br/>1.烧一锅开水，放入洗好的鸡蛋<br/>" + "<br/>2.加入一根桂皮、两颗八角、五片香叶、适量辣椒、三勺生抽、两勺老抽、一勺蚝油、两勺糖、一勺盐<br/>" + "<br/>3.调至尝到有点齁为止，再加入红茶茶包<br/>" + "<br/>4.煮10分钟出锅敲碎蛋壳<br/>" + "<br/>5.浸泡入味即可<br/>"
            }, {
              name: "泰式卤蛋",
              ingredients: ["鸡蛋"],
              seasonings: ["大蒜", "香菜", "洋葱", "小米椒", "柠檬", "芝麻", "生抽", "蚝油", "鱼露", "糖", "醋"],
              cooking_methods: ["锅"],
              image: "image/egg/泰式卤蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>泰式卤蛋</color></a><br/>',
              details: "    简单得到泰式卤蛋<br/>" + "<br/>1.将所有调料加水拌匀，水煮蛋放入浸泡<br/>" + "<br/>2.冷藏一晚让蛋白染上酱色<br/>"
            }, {
              name: "糖醋荷包蛋",
              ingredients: ["鸡蛋"],
              seasonings: ["糖", "醋", "生抽", "蚝油", "胡椒粉", "生粉", "香葱"],
              cooking_methods: ["锅"],
              image: "image/egg/糖醋荷包蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>糖醋荷包蛋</color></a><br/>',
              details: "    简单得到糖醋荷包蛋<br/>" + "<br/>1.糖醋比1:1,再加入生抽、蚝油、适量清水与胡椒粉<br/>" + "<br/>2.调好水淀粉<br/>" + "<br/>3.将鸡蛋煎至起泡<br/>" + "<br/>4.调好的酱汁倒入锅中<br/>" + "<br/>5.最后勾个薄芡收汁，撒上葱花<br/>"
            }, {
              name: "烤布丁",
              ingredients: ["鸡蛋"],
              seasonings: ["牛奶", "炼乳"],
              cooking_methods: ["烤箱"],
              image: "image/egg/烤布丁/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>烤布丁</color></a><br/>',
              details: "    非常好吃的烤布丁<br/>" + "<br/>1.取出蛋黄加入牛奶<br/>" + "<br/>2.根据个人口味加入炼乳<br/>" + "<br/>3.过筛放入烤箱200度烤20分钟即可<br/>"
            }, {
              name: "厚蛋烧",
              ingredients: ["鸡蛋"],
              seasonings: ["盐", "香葱", "鲣鱼酱汁"],
              cooking_methods: ["锅"],
              image: "image/egg/厚蛋烧/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>厚蛋烧</color></a><br/>',
              details: "    手艺活厚蛋烧<br/>" + "<br/>1.鸡蛋加入盐、香葱、鲣鱼酱汁打散(甜口也可)<br/>" + "<br/>2.平底锅加油保持中低火<br/>" + "<br/>3.倒入部分蛋液盖住锅底<br/>" + "<br/>4.蛋皮开始凝固时，从边缘卷起<br/>" + "<br/>5.卷好移到锅一侧，再倒入剩余蛋液<br/>" + "<br/>6.用卷好的蛋重复卷蛋<br/>"
            }, {
              name: "魔鬼蛋",
              ingredients: ["鸡蛋"],
              seasonings: ["黄芥末", "沙拉酱", "辣椒粉"],
              cooking_methods: ["锅"],
              image: "image/egg/魔鬼蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>魔鬼蛋</color></a><br/>',
              details: "    西餐中一种比较另类的鸡蛋沙拉<br/>" + "<br/>1.全熟蛋对半切开取出蛋黄<br/>" + "<br/>2.蛋黄与各种酱料搅拌后加入裱花袋<br/>" + "<br/>3.裱花袋挤入开始对半的蛋白船中<br/>" + "<br/>4.最后撒上一点烟熏辣椒粉<br/>" + "<br/>5.两面炸至金黄色出锅并撒上胡椒粉提味<br/>"
            }, {
              name: "赛螃蟹",
              ingredients: ["鸡蛋"],
              seasonings: ["醋", "白糖", "生姜"],
              cooking_methods: ["锅"],
              image: "image/egg/赛螃蟹/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>赛螃蟹</color></a><br/>',
              details: "    鸡蛋想象力的天花板<br/>" + "<br/>1.蛋清蛋黄分开打散，分别模拟蟹肉和蟹黄<br/>" + "<br/>2.香醋中加入白糖和姜汁配成蟹醋<br/>" + "<br/>3.锅中小火放多点油，倒入蛋白<br/>" + "<br/>4.划熟至蒜瓣大小的的“白肉”即可点一勺蟹醋收尾<br/>" + "<br/>6.“蟹黄”部分：锅中放少量油把一颗咸蛋黄抄散<br/>" + "<br/>7.锅里起沙时放入蛋黄，炒至比“蟹肉”更稀碎的大小加蟹醋收尾<br/>" + "<br/>8.蟹肉在下，蟹黄在上装盘<br/>"
            }, {
              name: "苏格兰蛋",
              ingredients: ["鸡蛋"],
              seasonings: ["猪肉", "生抽", "蚝油", "生粉", "面包糠"],
              cooking_methods: ["锅"],
              image: "image/egg/苏格兰蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>苏格兰蛋</color></a><br/>',
              details: "    英国一道豪放的料理<br/>" + "<br/>1.准备一盘新鲜的肉糜加入生抽、蚝油<br/>" + "<br/>2.顺着一个方向搅打上劲<br/>" + "<br/>3.然后用肉馅包住溏心蛋<br/>" + "<br/>4.依次滚上生粉(玉米淀粉)、蛋液和面包糠<br/>" + "<br/>5.宽油油温170度炸5分钟<br/>"
            }, {
              name: "班尼迪克蛋",
              ingredients: ["鸡蛋"],
              seasonings: ["醋", "英式马芬", "黄油"],
              cooking_methods: ["锅"],
              image: "image/egg/班尼迪克蛋/spriteFrame",
              link: '<color=#00E0FF>观看视频:</color>' + '<a href="https://www.bilibili.com/video/BV1TT4y127vu/?vd_source=e755d42c1fa3c6fdabb1800dabbdca80">' + '<color=#FF0000>班尼迪克蛋</color></a><br/>',
              details: "    最容易翻车的蛋<br/>" + "<br/>1.先做一颗水波蛋、英式马芬(馒头可替代)<br/>" + "<br/>2.用黄油(和配菜)煎馒头至焦香<br/>" + "<br/>3.馒头打底，依次铺上配菜和水波蛋<br/>" + "<br/>4.准备100g融化的黄油和两颗纯蛋黄<br/>" + "<br/>5.将锅中水烧开架上一个大碗<br/>" + "<br/>6.放入两个蛋黄和白醋搅散<br/>" + "<br/>7.边搅边倒入黄油<br/>" + "<br/>8.待质地发生变化时将其(荷兰酱)迅速倒入水波蛋上(关键点)<br/>"
            }]
          };
        }

        onLoad() {
          // 可以在游戏开始时展示所有食谱
          this.updateRecipeList(this.recipeData.recipes);
        } // 生成倒排索引


        buildInvertedIndex() {
          const invertedIndex = {};
          this.recipeData.recipes.forEach((recipe, index) => {
            // 遍历食材
            recipe.ingredients.forEach(ingredient => {
              if (!invertedIndex[ingredient]) {
                invertedIndex[ingredient] = [];
              }

              invertedIndex[ingredient].push(index);
            }); // 遍历配料

            recipe.seasonings.forEach(seasoning => {
              if (!invertedIndex[seasoning]) {
                invertedIndex[seasoning] = [];
              }

              invertedIndex[seasoning].push(index);
            }); // 将食谱名称拆分加入索引

            recipe.name.split('').forEach(char => {
              if (!invertedIndex[char]) {
                invertedIndex[char] = [];
              }

              invertedIndex[char].push(index);
            }); // // 将食材拆分加入索引
            // recipe.ingredients.split('').forEach(char => {
            //     if (!invertedIndex[char]) {
            //         invertedIndex[char] = [];
            //     }
            //     invertedIndex[char].push(index);
            // });
            // // 将配料拆分加入索引
            // recipe.seasonings.split('').forEach(char => {
            //     if (!invertedIndex[char]) {
            //         invertedIndex[char] = [];
            //     }
            //     invertedIndex[char].push(index);
            // });
          });
          return invertedIndex;
        } // 搜索功能


        searchRecipesByKeyword(keyword) {
          const invertedIndex = this.buildInvertedIndex();
          const resultIndexes = []; // 遍历每个字符进行查找

          if (invertedIndex[keyword]) {
            resultIndexes.push(...invertedIndex[keyword]);
          }

          keyword.split('').forEach(char => {
            if (invertedIndex[char]) {
              resultIndexes.push(...invertedIndex[char]);
            }
          }); // 去重

          const uniqueIndexes = Array.from(new Set(resultIndexes));
          return uniqueIndexes.map(index => this.recipeData.recipes[index]);
        } // 通过食材搜索食谱


        filterRecipesByIngredient(ingredient) {
          return this.recipeData.recipes.filter(recipe => recipe.ingredients.includes(ingredient) || recipe.seasonings.includes(ingredient));
        } // 更新食谱列表的显示


        updateRecipeList(recipes) {
          // 清空当前列表
          this.content.removeAllChildren();
          recipes.forEach(recipe => {
            // 实例化 RecipeListItem 预制件
            const listItem = instantiate(this.recipeListItemPrefab); // 获取子节点并分别设置 Label 文本

            const nameLabel = listItem.getChildByName("NameLabel").getComponent(Label);
            const ingredientsLabel = listItem.getChildByName("IngredientsLabel").getComponent(Label);
            const seasoningsLabel = listItem.getChildByName("SeasoningsLabel").getComponent(Label);
            const cookingMethodsLabel = listItem.getChildByName("CookingMethodsLabel").getComponent(Label); // 设置食谱名称

            if (nameLabel) {
              nameLabel.string = recipe.name;
            } // 设置食材


            if (ingredientsLabel) ingredientsLabel.string = `食材：${recipe.ingredients.join(",")}`; // 设置配料

            if (seasoningsLabel) {
              if (recipe.seasonings != "") seasoningsLabel.string = `配料：${recipe.seasonings.join(",")}`;else {
                seasoningsLabel.string = `配料：无`;
              }
            } // 设置烹饪方式


            if (cookingMethodsLabel) {
              cookingMethodsLabel.string = `烹饪方式：${recipe.cooking_methods.join(" 或 ")}`;
            } // 添加点击事件，跳转到详情页面并传参


            listItem.on(Node.EventType.TOUCH_END, () => {
              const navigationBarComponent = this.navBar.getComponent(_crd && NavigationBar === void 0 ? (_reportPossibleCrUseOfNavigationBar({
                error: Error()
              }), NavigationBar) : NavigationBar);

              if (navigationBarComponent) {
                navigationBarComponent.goToDetailPage(recipe); // 调用实例的方法
              }
            }); // 将 listItem 添加到 content 中

            this.content.addChild(listItem);
          }); // 更新滚动视图内容尺寸

          this.scheduleOnce(() => {
            const contentUITransform = this.content.getComponent(UITransform);
            contentUITransform.height = this.content.children.reduce((acc, child) => acc + child.getComponent(UITransform).height, 0);
          }, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "navBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "recipeListItemPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f3ce5611f9c0a1904485c8d4b41740aa562c308.js.map