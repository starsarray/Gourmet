System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Component, instantiate, Label, Node, Prefab, resources, RichText, Sprite, SpriteFrame, sys, UITransform, UIStackManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, NavigationBar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIStackManager(extras) {
    _reporterNs.report("UIStackManager", "../UIStackManager", _context.meta, extras);
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
      resources = _cc.resources;
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      sys = _cc.sys;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      UIStackManager = _unresolved_2.UIStackManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0fc396sg2pGoKqaRWtki9D9", "NavigationBar", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'color', 'Component', 'director', 'instantiate', 'Label', 'Node', 'Prefab', 'resources', 'RichText', 'Sprite', 'SpriteFrame', 'sys', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NavigationBar", NavigationBar = (_dec = ccclass('NavigationBar'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Button), _dec(_class = (_class2 = class NavigationBar extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "homePanel", _descriptor, this);

          _initializerDefineProperty(this, "ingredientSearchPanel", _descriptor2, this);

          _initializerDefineProperty(this, "randomRecipePanel", _descriptor3, this);

          _initializerDefineProperty(this, "navBar", _descriptor4, this);

          _initializerDefineProperty(this, "detailPage", _descriptor5, this);

          _initializerDefineProperty(this, "content", _descriptor6, this);

          _initializerDefineProperty(this, "RecipeDetail", _descriptor7, this);

          _initializerDefineProperty(this, "RichText", _descriptor8, this);

          _initializerDefineProperty(this, "Foodimage", _descriptor9, this);

          _initializerDefineProperty(this, "homeButton", _descriptor10, this);

          _initializerDefineProperty(this, "ingredientSearchButton", _descriptor11, this);

          _initializerDefineProperty(this, "randomRecipeButton", _descriptor12, this);

          // 当前活动按钮的颜色
          this.activeColor = new Color(0, 224, 255);
          // 00E0FF 
          // 默认按钮颜色
          this.defaultColor = new Color(255, 255, 255);
        }

        // 默认颜色为白色
        onLoad() {
          this.goToHome(); // 获取食材界面组件的脚本组件
          // const ingredientSearchComponent = this.ingredientSearchPanel.getComponent(IngredientSearch);
          // // 手动调用食材界面组件的 onLoad 方法
          // ingredientSearchComponent.s();
          // 将食材界面节点设置为非活动状态
          // this.ingredientSearchPanel.active = false;
        }

        goToHome() {
          // 切换到主页逻辑并高亮按钮
          (_crd && UIStackManager === void 0 ? (_reportPossibleCrUseOfUIStackManager({
            error: Error()
          }), UIStackManager) : UIStackManager).instance.popUI();
          (_crd && UIStackManager === void 0 ? (_reportPossibleCrUseOfUIStackManager({
            error: Error()
          }), UIStackManager) : UIStackManager).instance.pushUI(this.homePanel);
          this.homePanel.active = true;
          this.navBar.active = true;
          this.ingredientSearchPanel.active = false;
          this.randomRecipePanel.active = false;
          this.highlightButton(this.homeButton);
        }

        goToIngredientSearch() {
          // 切换到食材检索页面逻辑并高亮按钮
          (_crd && UIStackManager === void 0 ? (_reportPossibleCrUseOfUIStackManager({
            error: Error()
          }), UIStackManager) : UIStackManager).instance.popUI();
          (_crd && UIStackManager === void 0 ? (_reportPossibleCrUseOfUIStackManager({
            error: Error()
          }), UIStackManager) : UIStackManager).instance.pushUI(this.ingredientSearchPanel);
          this.homePanel.active = false;
          this.navBar.active = true;
          this.ingredientSearchPanel.active = true;
          this.randomRecipePanel.active = false;
          this.highlightButton(this.ingredientSearchButton);
        }

        goToRandomRecipe() {
          // 切换到随机食谱页面逻辑并高亮按钮
          (_crd && UIStackManager === void 0 ? (_reportPossibleCrUseOfUIStackManager({
            error: Error()
          }), UIStackManager) : UIStackManager).instance.popUI();
          (_crd && UIStackManager === void 0 ? (_reportPossibleCrUseOfUIStackManager({
            error: Error()
          }), UIStackManager) : UIStackManager).instance.pushUI(this.randomRecipePanel);
          this.homePanel.active = false;
          this.navBar.active = true;
          this.ingredientSearchPanel.active = false;
          this.randomRecipePanel.active = true;
          this.highlightButton(this.randomRecipeButton);
        } // 进入详情页面


        goToDetailPage(recipe) {
          // 清空当前列表
          this.content.removeAllChildren();
          (_crd && UIStackManager === void 0 ? (_reportPossibleCrUseOfUIStackManager({
            error: Error()
          }), UIStackManager) : UIStackManager).instance.pushUI(this.detailPage);
          this.detailPage.active = true;
          this.navBar.active = false;
          this.homePanel.active = false;
          this.ingredientSearchPanel.active = false;
          this.randomRecipePanel.active = false; // 实例化节点

          const RecipeListitem = instantiate(this.RecipeDetail);
          const Fiamge = instantiate(this.Foodimage);
          const Rtext1 = instantiate(this.RichText);
          const Rtext2 = instantiate(this.RichText); // 设置食谱内容

          RecipeListitem.getChildByName("NameLabel").getComponent(Label).string = recipe.name;
          RecipeListitem.getChildByName("IngredientsLabel").getComponent(Label).string = `食材：${recipe.ingredients.join(",")}`;
          if (recipe.seasonings != "") RecipeListitem.getChildByName("SeasoningsLabel").getComponent(Label).string = `配料：${recipe.seasonings.join(",")}`;else {
            RecipeListitem.getChildByName("SeasoningsLabel").getComponent(Label).string = `配料：无`;
          }
          RecipeListitem.getChildByName("CookingMethodsLabel").getComponent(Label).string = `烹饪方式：${recipe.cooking_methods.join(" 或 ")}`; // 加载并设置图片

          resources.load(recipe.image, SpriteFrame, (err, spriteFrame) => {
            if (err) {
              console.error("Failed to load image:", err);
              return;
            } // 获取 Sprite 组件并设置 spriteFrame


            const sprite = Fiamge.getComponent(Sprite);

            if (sprite) {
              sprite.spriteFrame = spriteFrame; // 获取图片的原始尺寸

              const texture = spriteFrame.texture;
              const originalWidth = texture.width;
              const originalHeight = texture.height; // 获取并调整 UITransform 的尺寸

              const uiTransform = Fiamge.getComponent(UITransform);

              if (uiTransform) {
                uiTransform.setContentSize(originalWidth * 0.5, originalHeight * 0.5);
              }
            }
          });
          Rtext1.getComponent(RichText).string = recipe.link;
          Rtext1.getComponent(RichText).horizontalAlign = 1; //内容居中
          // 使用 TOUCH_END 监听点击事件

          Rtext1.on(Node.EventType.TOUCH_END, event => {
            const link = this.extractLinkFromRichText(Rtext1.getComponent(RichText).string);

            if (link) {
              if (link) {
                console.log("超链接被点击:", link);

                if (typeof window !== 'undefined') {
                  sys.openURL(link); // 使用 cc.sys.openURL 进行链接跳转
                }
              }
            }
          });
          Rtext2.getComponent(RichText).string = recipe.details;
          this.detailPage.addChild(RecipeListitem);
          this.content.addChild(Fiamge);
          this.content.addChild(Rtext1);
          this.content.addChild(Rtext2); // 更新滚动视图内容尺寸

          this.scheduleOnce(() => {
            const contentUITransform = this.content.getComponent(UITransform);
            contentUITransform.height = this.content.children.reduce((acc, child) => acc + child.getComponent(UITransform).height, 0);
          }, 0);
        }

        extractLinkFromRichText(richTextString) {
          // 使用正则表达式匹配 href 属性并提取链接
          const match = richTextString.match(/href="([^"]+)"/);
          return match ? match[1] : null;
        } // 返回上一个UI


        goBackToPreviousUI() {
          this.detailPage.active = false;
          this.navBar.active = true;
          this.homePanel.active = false;
          this.ingredientSearchPanel.active = false;
          this.randomRecipePanel.active = false;
          (_crd && UIStackManager === void 0 ? (_reportPossibleCrUseOfUIStackManager({
            error: Error()
          }), UIStackManager) : UIStackManager).instance.popUI().active = true;
        } // 设置按钮高亮，并将其他按钮恢复默认颜色


        highlightButton(activeButton) {
          // 重置所有按钮的颜色
          this.setButtonColor(this.homeButton, this.defaultColor);
          this.setButtonColor(this.ingredientSearchButton, this.defaultColor);
          this.setButtonColor(this.randomRecipeButton, this.defaultColor); // 设置当前按钮为高亮颜色

          this.setButtonColor(activeButton, this.activeColor);
        }

        setButtonColor(button, color) {
          const sprite = button.node.getComponent(Sprite);

          if (sprite) {
            sprite.color = color;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "homePanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ingredientSearchPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "randomRecipePanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "navBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "detailPage", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "RecipeDetail", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "RichText", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Foodimage", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "homeButton", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "ingredientSearchButton", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "randomRecipeButton", [_dec13], {
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
//# sourceMappingURL=a24b3fb023747bf4a2daf97ab7fe936e04031662.js.map