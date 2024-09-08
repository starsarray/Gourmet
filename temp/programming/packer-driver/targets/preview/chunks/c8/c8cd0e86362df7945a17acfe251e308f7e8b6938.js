System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Component, instantiate, Label, Node, Prefab, Sprite, UIOpacity, UITransform, RecipesGenerate, NavigationBar, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, IngredientSearch;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRecipesGenerate(extras) {
    _reporterNs.report("RecipesGenerate", "../RecipesGenerate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNavigationBar(extras) {
    _reporterNs.report("NavigationBar", "../NavigationBar", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      RecipesGenerate = _unresolved_2.RecipesGenerate;
    }, function (_unresolved_3) {
      NavigationBar = _unresolved_3.NavigationBar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4406P3igJD94uEzxaaDL7f", "IngredientSearch", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'director', 'instantiate', 'Label', 'Node', 'Prefab', 'ScrollBar', 'Sprite', 'UIOpacity', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IngredientSearch", IngredientSearch = (_dec = ccclass('IngredientSearch'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(_crd && RecipesGenerate === void 0 ? (_reportPossibleCrUseOfRecipesGenerate({
        error: Error()
      }), RecipesGenerate) : RecipesGenerate), _dec12 = property(Color), _dec13 = property(Color), _dec(_class = (_class2 = class IngredientSearch extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ingredientSearch", _descriptor, this);

          // 食材搜索区域
          _initializerDefineProperty(this, "ingredientsContainer", _descriptor2, this);

          // 多选食材区域
          _initializerDefineProperty(this, "cookingMethodsContainer", _descriptor3, this);

          // 单选烹饪方式区域
          _initializerDefineProperty(this, "content", _descriptor4, this);

          // 筛选结果内容区域
          _initializerDefineProperty(this, "recipeList", _descriptor5, this);

          // 筛选结果列表区域
          _initializerDefineProperty(this, "navBar", _descriptor6, this);

          _initializerDefineProperty(this, "ingredientButtonPrefab", _descriptor7, this);

          // 预制件，用于生成食材按钮
          _initializerDefineProperty(this, "cookingMethodButtonPrefab", _descriptor8, this);

          // 预制件，用于生成烹饪方式按钮
          _initializerDefineProperty(this, "recipeListItemPrefab", _descriptor9, this);

          // 筛选结果列表项预制体
          _initializerDefineProperty(this, "recipesGenerate", _descriptor10, this);

          // 绑定 RecipesGenerate 脚本
          _initializerDefineProperty(this, "selectedColor", _descriptor11, this);

          // 选中时背景颜色 35C000
          _initializerDefineProperty(this, "defaultColor", _descriptor12, this);

          // 默认背景颜色 E1FFA0
          this.selectedIngredients = [];
          // 已选择的食材列表
          this.selectedCookingMethod = '';
        }

        // 已选择的烹饪方式
        onLoad() {
          var opacityComp = this.ingredientSearch.getComponent(UIOpacity);
          opacityComp.opacity = 0; // 初始化食材按钮和烹饪方式按钮

          this.generateIngredientButtons();
          this.generateCookingMethodButtons(); //等待按钮高度确定

          this.scheduleOnce(() => {
            this.updateScrollViewHeight();
            this.updateRecipeList();
            opacityComp.opacity = 255;
          }, 0);
        }

        updateScrollViewHeight() {
          var parentHeight = this.ingredientSearch.getComponent(UITransform).height;
          var otherComponentsHeight = this.calculateOtherComponentsHeight();
          var remainingHeight = parentHeight - otherComponentsHeight; // 确保剩余高度大于0

          if (remainingHeight > 0) {
            this.recipeList.getComponent(UITransform).height = remainingHeight;
            this.recipeList.getChildByName("scrollBar").getComponent(UITransform).height = remainingHeight;
            this.recipeList.getChildByName("view").getComponent(UITransform).height = remainingHeight;
            this.content.getComponent(UITransform).height = remainingHeight;
          }

          this.recipeList.updateWorldTransform();
        }

        calculateOtherComponentsHeight() {
          // 计算上方不确定大小组件的总高度
          var totalHeight = 50 + 50 + 50;
          totalHeight += this.ingredientsContainer.getComponent(UITransform).height + this.cookingMethodsContainer.getComponent(UITransform).height;
          return totalHeight;
        }

        generateIngredientButtons() {
          var ingredients = ["鸡蛋", "猪肉", "鸡肉", "牛肉", "羊肉", "鱼", "虾", "香肠", "土豆", "胡萝卜", "黄瓜", "白菜", "包菜", "白萝卜", "花菜", "番茄", "洋葱", "莴笋", "菌菇", "茄子", "豆腐", "西葫芦"]; // 示例食材

          ingredients.forEach(ingredient => {
            var button = instantiate(this.ingredientButtonPrefab);
            var label = button.getComponentInChildren(Label);

            if (label) {
              label.string = ingredient;
            }

            button.on(Button.EventType.CLICK, () => this.onIngredientSelected(button, ingredient), this);
            this.ingredientsContainer.addChild(button);
          });
        }

        generateCookingMethodButtons() {
          var cookingMethods = ["锅", "电饭煲", "烤箱", "空气炸锅", "微波炉"]; // 示例烹饪方式

          cookingMethods.forEach(method => {
            var button = instantiate(this.cookingMethodButtonPrefab);
            var label = button.getComponentInChildren(Label);

            if (label) {
              label.string = method;
            }

            button.on(Button.EventType.CLICK, () => this.onCookingMethodSelected(button, method), this);
            this.cookingMethodsContainer.addChild(button);
          });
        }

        onIngredientSelected(button, ingredient) {
          if (this.selectedIngredients.indexOf(ingredient) != -1) {
            // 如果已选中，则取消选择
            this.selectedIngredients = this.selectedIngredients.filter(item => item !== ingredient);
            button.getComponent(Sprite).color = this.defaultColor;
          } else {
            // 如果未选中，则选择
            this.selectedIngredients.push(ingredient);
            button.getComponent(Sprite).color = this.selectedColor;
          }

          this.updateRecipeList();
        }

        onCookingMethodSelected(button, method) {
          // 清除其他按钮的选中状态
          this.cookingMethodsContainer.children.forEach(child => {
            child.getComponent(Sprite).color = this.defaultColor;
          });

          if (this.selectedCookingMethod != method) {
            // 选择当前按钮
            this.selectedCookingMethod = method;
            button.getComponent(Sprite).color = this.selectedColor;
          } else {
            this.selectedCookingMethod = '';
          }

          this.updateRecipeList();
        }

        updateRecipeList() {
          var results = this.filterRecipes();
          this.updateRecipeDisplay(results);
        }

        filterRecipes() {
          // 结合已选食材和烹饪方式过滤食谱
          return this.recipesGenerate.recipeData.recipes.filter(recipe => this.selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient)) && (!this.selectedCookingMethod || recipe.cooking_methods.includes(this.selectedCookingMethod)));
        }

        updateRecipeDisplay(recipes) {
          // 清空当前显示的结果
          this.content.removeAllChildren();
          recipes.forEach(recipe => {
            var listItem = instantiate(this.recipeListItemPrefab);
            var nameLabel = listItem.getChildByName("NameLabel").getComponent(Label);
            var ingredientsLabel = listItem.getChildByName("IngredientsLabel").getComponent(Label);
            var seasoningsLabel = listItem.getChildByName("SeasoningsLabel").getComponent(Label);
            var cookingMethodsLabel = listItem.getChildByName("CookingMethodsLabel").getComponent(Label);
            if (nameLabel) nameLabel.string = recipe.name;
            if (ingredientsLabel) ingredientsLabel.string = "\u98DF\u6750\uFF1A" + recipe.ingredients.join(","); // 设置配料

            if (seasoningsLabel) {
              if (recipe.seasonings != "") seasoningsLabel.string = "\u914D\u6599\uFF1A" + recipe.seasonings.join(",");else {
                seasoningsLabel.string = "\u914D\u6599\uFF1A\u65E0";
              }
            }

            if (cookingMethodsLabel) cookingMethodsLabel.string = "\u70F9\u996A\u65B9\u5F0F\uFF1A" + recipe.cooking_methods.join(","); // 添加点击事件，跳转到详情页面并传参

            listItem.on(Node.EventType.TOUCH_END, () => {
              var navigationBarComponent = this.navBar.getComponent(_crd && NavigationBar === void 0 ? (_reportPossibleCrUseOfNavigationBar({
                error: Error()
              }), NavigationBar) : NavigationBar);

              if (navigationBarComponent) {
                navigationBarComponent.goToDetailPage(recipe); // 调用实例的方法
              }
            });
            this.content.addChild(listItem);
          }); // 更新滚动视图内容尺寸

          this.scheduleOnce(() => {
            var contentUITransform = this.content.getComponent(UITransform);
            contentUITransform.height = this.content.children.reduce((acc, child) => acc + child.getComponent(UITransform).height, 0);
          }, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ingredientSearch", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ingredientsContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cookingMethodsContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "recipeList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "navBar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ingredientButtonPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "cookingMethodButtonPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "recipeListItemPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "recipesGenerate", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "selectedColor", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(53, 192, 0);
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "defaultColor", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(225, 255, 160);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c8cd0e86362df7945a17acfe251e308f7e8b6938.js.map