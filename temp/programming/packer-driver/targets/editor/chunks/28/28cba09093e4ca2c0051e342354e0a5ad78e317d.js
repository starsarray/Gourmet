System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, _dec, _class, _crd, ccclass, property, ListH;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "218d2Uivg5JDJB5L6iTSEUf", "ListH", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ListH", ListH = (_dec = ccclass('ListH'), _dec(_class = class ListH extends Component {
        start() {}

        update(deltaTime) {}

        updateScrollViewHeight() {
          const parentHeight = this.node.parent.getComponent(UITransform).height;
          const otherComponentsHeight = this.calculateOtherComponentsHeight();
          const remainingHeight = parentHeight - otherComponentsHeight;
          this.scrollViewNode.getComponent(UITransform).height = remainingHeight;
        }

        calculateOtherComponentsHeight() {
          // 计算上方不确定大小组件的总高度
          let totalHeight = 0;
          this.otherComponents.forEach(node => {
            totalHeight += node.getComponent(UITransform).height;
          });
          return totalHeight;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28cba09093e4ca2c0051e342354e0a5ad78e317d.js.map