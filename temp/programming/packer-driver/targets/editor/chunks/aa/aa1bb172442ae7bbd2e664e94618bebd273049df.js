System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Component, instantiate, Label, Node, Prefab, RecipesGenerate, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, IngredientSearch;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRecipesGenerate(extras) {
    _reporterNs.report("RecipesGenerate", "./RecipesGenerate", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Color = _cc.Color;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      RecipesGenerate = _unresolved_2.RecipesGenerate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4406P3igJD94uEzxaaDL7f", "IngredientSearch", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IngredientSearch", IngredientSearch = (_dec = ccclass('IngredientSearch'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(_crd && RecipesGenerate === void 0 ? (_reportPossibleCrUseOfRecipesGenerate({
        error: Error()
      }), RecipesGenerate) : RecipesGenerate), _dec9 = property(Color), _dec10 = property(Color), _dec(_class = (_class2 = class IngredientSearch extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ingredientsContainer", _descriptor, this);

          // 多选食材区域
          _initializerDefineProperty(this, "cookingMethodsContainer", _descriptor2, this);

          // 单选烹饪方式区域
          _initializerDefineProperty(this, "recipeListContainer", _descriptor3, this);

          // 筛选结果区域
          _initializerDefineProperty(this, "ingredientButtonPrefab", _descriptor4, this);

          // 预制件，用于生成食材按钮
          _initializerDefineProperty(this, "cookingMethodButtonPrefab", _descriptor5, this);

          // 预制件，用于生成烹饪方式按钮
          _initializerDefineProperty(this, "recipeListItemPrefab", _descriptor6, this);

          // 筛选结果列表项预制体
          _initializerDefineProperty(this, "recipesGenerate", _descriptor7, this);

          // 绑定 RecipesGenerate 脚本
          _initializerDefineProperty(this, "selectedColor", _descriptor8, this);

          // 选中时背景颜色 35C000
          _initializerDefineProperty(this, "defaultColor", _descriptor9, this);

          // 默认背景颜色 E1FFA0
          this.selectedIngredients = [];
          // 已选择的食材列表
          this.selectedCookingMethod = '';
        }

        // 已选择的烹饪方式
        onLoad() {
          // 初始化食材按钮和烹饪方式按钮
          this.generateIngredientButtons();
          this.generateCookingMethodButtons();
        }

        generateIngredientButtons() {
          const ingredients = ["鸡蛋", "盐", "番茄", "葱", "香油", "酱油"]; // 示例食材

          ingredients.forEach(ingredient => {
            const button = instantiate(this.ingredientButtonPrefab);
            const label = button.getComponentInChildren(Label);

            if (label) {
              label.string = ingredient;
            }

            button.on(Button.EventType.CLICK, () => this.onIngredientSelected(button, ingredient), this);
            this.ingredientsContainer.addChild(button);
          });
        }

        generateCookingMethodButtons() {
          const cookingMethods = ["锅", "电饭煲"]; // 示例烹饪方式

          cookingMethods.forEach(method => {
            const button = instantiate(this.cookingMethodButtonPrefab);
            const label = button.getComponentInChildren(Label);

            if (label) {
              label.string = method;
            }

            button.on(Button.EventType.CLICK, () => this.onCookingMethodSelected(button, method), this);
            this.cookingMethodsContainer.addChild(button);
          });
        }

        onIngredientSelected(button, ingredient) {
          if (this.selectedIngredients.indexOf(ingredient)) {
            // 如果已选中，则取消选择
            this.selectedIngredients = this.selectedIngredients.filter(item => item !== ingredient);
            button.getComponent(Button).normalColor = this.defaultColor;
          } else {
            // 如果未选中，则选择
            this.selectedIngredients.push(ingredient);
            button.getComponent(Button).normalColor = this.selectedColor;
          }

          this.updateRecipeList();
        }

        onCookingMethodSelected(button, method) {
          // 清除其他按钮的选中状态
          this.cookingMethodsContainer.children.forEach(child => {
            child.getComponent(Button).normalColor = this.defaultColor;
          }); // 选择当前按钮

          this.selectedCookingMethod = method;
          button.getComponent(Button).normalColor = this.selectedColor;
          this.updateRecipeList();
        }

        updateRecipeList() {
          const results = this.filterRecipes();
          this.updateRecipeDisplay(results);
        }

        filterRecipes() {
          // 结合已选食材和烹饪方式过滤食谱
          return this.recipesGenerate.recipeData.recipes.filter(recipe => this.selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient)) && (!this.selectedCookingMethod || recipe.cooking_methods.includes(this.selectedCookingMethod)));
        }

        updateRecipeDisplay(recipes) {
          // 清空当前显示的结果
          this.recipeListContainer.removeAllChildren();
          recipes.forEach(recipe => {
            const listItem = instantiate(this.recipeListItemPrefab);
            const nameLabel = listItem.getChildByName("NameLabel").getComponent(Label);
            const ingredientsLabel = listItem.getChildByName("IngredientsLabel").getComponent(Label);
            const cookingMethodsLabel = listItem.getChildByName("CookingMethodsLabel").getComponent(Label);
            if (nameLabel) nameLabel.string = recipe.name;
            if (ingredientsLabel) ingredientsLabel.string = `食材：${recipe.ingredients.join(", ")}`;
            if (cookingMethodsLabel) cookingMethodsLabel.string = `烹饪方式：${recipe.cooking_methods.join(", ")}`;
            this.recipeListContainer.addChild(listItem);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ingredientsContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cookingMethodsContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "recipeListContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ingredientButtonPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cookingMethodButtonPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "recipeListItemPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "recipesGenerate", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "selectedColor", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(53, 192, 0);
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "defaultColor", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(225, 255, 160);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa1bb172442ae7bbd2e664e94618bebd273049df.js.map