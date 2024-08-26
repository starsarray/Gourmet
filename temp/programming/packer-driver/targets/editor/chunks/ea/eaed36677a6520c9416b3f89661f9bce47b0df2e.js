System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, SceneStackManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf8c49qbY1Ag56fnN81hDMg", "SceneStackManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SceneStackManager", SceneStackManager = (_dec = ccclass('SceneStackManager'), _dec(_class = (_class2 = class SceneStackManager {
        constructor() {
          this.sceneStack = [];
          this.sceneData = {};
        }

        // 用于存储不同场景的数据
        // 压入场景并传参
        pushScene(sceneName, data = null) {
          this.sceneStack.push(sceneName);

          if (data) {
            this.sceneData[sceneName] = data; // 存储传递的数据
          }
        } // 弹出场景并返回数据


        popScene() {
          console.log("进入pop");

          if (this.sceneStack.length > 1) {
            const currentScene = this.sceneStack.pop();
            const previousScene = this.sceneStack[this.sceneStack.length - 1];
            console.log(previousScene);
          }
        } // 获取当前场景传递的数据


        getSceneData(sceneName) {
          return this.sceneData[sceneName] || null;
        }

      }, _class2.instance = new _class2(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eaed36677a6520c9416b3f89661f9bce47b0df2e.js.map