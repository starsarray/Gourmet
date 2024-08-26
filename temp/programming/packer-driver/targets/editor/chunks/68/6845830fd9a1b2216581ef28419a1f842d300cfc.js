System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UIStackManager, _dec, _class, _crd, ccclass, property, Return;

  function _reportPossibleCrUseOfUIStackManager(extras) {
    _reporterNs.report("UIStackManager", "../../UIStackManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      UIStackManager = _unresolved_2.UIStackManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e884KWukhG3K+hnxx58kAf", "Return", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Return", Return = (_dec = ccclass('Return'), _dec(_class = class Return extends Component {
        goBackToPreviousUI() {
          (_crd && UIStackManager === void 0 ? (_reportPossibleCrUseOfUIStackManager({
            error: Error()
          }), UIStackManager) : UIStackManager).instance.popUI(); // 返回上一个场景
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6845830fd9a1b2216581ef28419a1f842d300cfc.js.map