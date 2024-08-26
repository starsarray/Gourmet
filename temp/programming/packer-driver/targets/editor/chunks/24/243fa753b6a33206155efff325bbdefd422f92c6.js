System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, EditBox, RecipesGenerate, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RecipesSearch;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRecipesGenerate(extras) {
    _reporterNs.report("RecipesGenerate", "../RecipesGenerate", _context.meta, extras);
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
      Node = _cc.Node;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      RecipesGenerate = _unresolved_2.RecipesGenerate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1dc02pTPiFIW6Y544NSA6Zn", "RecipesSearch", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EditBox']);

      // 引入 RecipesGenerate 类
      ({
        ccclass,
        property
      } = _decorator);

      _export("RecipesSearch", RecipesSearch = (_dec = ccclass('RecipesSearch'), _dec2 = property(EditBox), _dec3 = property(Node), _dec4 = property(_crd && RecipesGenerate === void 0 ? (_reportPossibleCrUseOfRecipesGenerate({
        error: Error()
      }), RecipesGenerate) : RecipesGenerate), _dec(_class = (_class2 = class RecipesSearch extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "searchBox", _descriptor, this);

          // 绑定输入框节点
          _initializerDefineProperty(this, "content", _descriptor2, this);

          // 指向食谱列表的 Content 节点
          _initializerDefineProperty(this, "recipesGenerate", _descriptor3, this);
        }

        // 绑定 RecipesGenerate 脚本
        onSearch() {
          const keyword = this.searchBox.string.trim(); // 获取用户输入的关键词

          if (keyword) {
            const searchResults = this.recipesGenerate.searchRecipesByKeyword(keyword); // 调用搜索功能

            this.recipesGenerate.updateRecipeList(searchResults); // 更新食谱列表
          } else {
            this.recipesGenerate.updateRecipeList(this.recipesGenerate.recipeData.recipes); // 展示全部食谱列表
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "searchBox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "recipesGenerate", [_dec4], {
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
//# sourceMappingURL=243fa753b6a33206155efff325bbdefd422f92c6.js.map