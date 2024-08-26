System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, UIStackManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf8c49qbY1Ag56fnN81hDMg", "UIStackManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIStackManager", UIStackManager = (_dec = ccclass('UIStackManager'), _dec(_class = (_class2 = class UIStackManager {
        constructor() {
          this.UIStack = [];
          // 用于存储 UI 节点的堆栈
          this.UIData = {};
        }

        // 用于存储不同场景的数据
        // 压入场景并传参
        pushUI(UIName, data = null) {
          this.UIStack.push(UIName);

          if (data) {
            this.UIData[UIName] = data; // 存储传递的数据
          }
        } // 弹出场景并返回数据


        popUI() {
          if (this.UIStack.length > 1) {
            const currentUI = this.UIStack.pop();
            const previousUI = this.UIStack[this.UIStack.length - 1];
            return previousUI;
          }
        } // 获取当前场景传递的数据


        getUIData(UIName) {
          return this.UIData[UIName] || null;
        }

      }, _class2.instance = new _class2(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=818fd128b0eae1c74b0e1fdb9ec80d7e3473add6.js.map