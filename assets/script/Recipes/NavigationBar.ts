import { _decorator, Button, Color, color, Component, director, instantiate, Label, Node, Prefab, resources, RichText, Sprite, SpriteFrame, sys, UITransform } from 'cc';
import { UIStackManager } from '../UIStackManager';
const { ccclass, property } = _decorator;

@ccclass('NavigationBar')
export class NavigationBar extends Component {
    @property(Node)
    homePanel: Node = null;

    @property(Node)
    ingredientSearchPanel: Node = null;

    @property(Node)
    randomRecipePanel: Node = null
    @property(Node)
    navBar: Node = null;

    @property(Node)
    detailPage: Node = null;
    @property(Node)
    content: Node = null;
    @property(Prefab)
    RecipeDetail: Node = null;
    @property(Prefab)
    RichText: Node = null;
    @property(Prefab)
    Foodimage: Node = null;
    @property(Button)
    homeButton: Button = null;

    @property(Button)
    ingredientSearchButton: Button = null;

    @property(Button)
    randomRecipeButton: Button = null;

    // 当前活动按钮的颜色
    activeColor: Color = new Color(0, 224, 255); // 00E0FF 
    // 默认按钮颜色
    defaultColor: Color = new Color(255, 255, 255);  // 默认颜色为白色

    onLoad() {
        this.goToHome();
    }

    goToHome() {
        // 切换到主页逻辑并高亮按钮
        UIStackManager.instance.popUI();
        UIStackManager.instance.pushUI(this.homePanel);
        this.homePanel.active = true;
        this.navBar.active = true;
        this.ingredientSearchPanel.active = false;
        this.randomRecipePanel.active = false;
        this.highlightButton(this.homeButton);
    }

    goToIngredientSearch() {
        // 切换到食材检索页面逻辑并高亮按钮
        UIStackManager.instance.popUI();
        UIStackManager.instance.pushUI(this.ingredientSearchPanel);
        this.homePanel.active = false;
        this.navBar.active = true;
        this.ingredientSearchPanel.active = true;
        this.randomRecipePanel.active = false;
        this.highlightButton(this.ingredientSearchButton);
    }

    goToRandomRecipe() {
        // 切换到随机食谱页面逻辑并高亮按钮
        UIStackManager.instance.popUI();
        UIStackManager.instance.pushUI(this.randomRecipePanel);
        this.homePanel.active = false;
        this.navBar.active = true;
        this.ingredientSearchPanel.active = false;
        this.randomRecipePanel.active = true;
        this.highlightButton(this.randomRecipeButton);
    }
    // 进入详情页面
    goToDetailPage(recipe : any) {
        // 清空当前列表
        this.content.removeAllChildren();
        UIStackManager.instance.pushUI(this.detailPage);
        this.detailPage.active = true;
        this.navBar.active = false;
        this.homePanel.active = false;
        this.ingredientSearchPanel.active = false;
        this.randomRecipePanel.active = false;
        // 实例化节点
        const RecipeListitem = instantiate(this.RecipeDetail);
        const Fiamge = instantiate(this.Foodimage);
        const Rtext1 = instantiate(this.RichText);
        const Rtext2 = instantiate(this.RichText);
        // 设置食谱内容
        RecipeListitem.getChildByName("NameLabel").getComponent(Label).string = recipe.name;
        RecipeListitem.getChildByName("IngredientsLabel").getComponent(Label).string = `食材：${recipe.ingredients.join(",")}`;
        if(recipe.seasonings != "")
          RecipeListitem.getChildByName("SeasoningsLabel").getComponent(Label).string = `配料：${recipe.seasonings.join(",")}`;
        else {RecipeListitem.getChildByName("SeasoningsLabel").getComponent(Label).string = `配料：无`;}
        RecipeListitem.getChildByName("CookingMethodsLabel").getComponent(Label).string = `烹饪方式：${recipe.cooking_methods.join(" 或 ")}`;
        // 加载并设置图片
        resources.load(recipe.image, SpriteFrame, (err, spriteFrame) => {
            if (err) {
                console.error("Failed to load image:", err);
                return;
            }
            // 获取 Sprite 组件并设置 spriteFrame
            const sprite = Fiamge.getComponent(Sprite);
            if (sprite) {
                sprite.spriteFrame = spriteFrame;

                // 获取图片的原始尺寸
                const texture = spriteFrame.texture;
                const originalWidth = texture.width;
                const originalHeight = texture.height;

                // 获取并调整 UITransform 的尺寸
                const uiTransform = Fiamge.getComponent(UITransform);
                if (uiTransform) {
                    uiTransform.setContentSize(originalWidth*0.5, originalHeight*0.5);
                }
            }
        }); 
        Rtext1.getComponent(RichText).string = recipe.link;
        Rtext1.getComponent(RichText).horizontalAlign = 1 ;//内容居中
        // 使用 TOUCH_END 监听点击事件
        Rtext1.on(Node.EventType.TOUCH_END, (event) => {
            const link = this.extractLinkFromRichText(Rtext1.getComponent(RichText).string);
            if (link) {
                if (sys.isMobile) {
                    // 在移动设备上使用 window.location.href
                    window.location.href = link;
                } else {
                    // 在桌面设备上使用 window.open
                    window.open(link, '_blank');
                }
            }
        });
        Rtext2.getComponent(RichText).string = recipe.details;
        this.detailPage.addChild(RecipeListitem);
        this.content.addChild(Fiamge);
        this.content.addChild(Rtext1);
        this.content.addChild(Rtext2);
        // 更新滚动视图内容尺寸
        this.scheduleOnce(() => {
            const contentUITransform = this.content.getComponent(UITransform);
            contentUITransform.height = this.content.children.reduce((acc, child) => acc + child.getComponent(UITransform).height, 0);
        }, 0);
    }
    extractLinkFromRichText(richTextString: string): string | null {
        // 使用正则表达式匹配 href 属性并提取链接
        const match = richTextString.match(/href="([^"]+)"/);
        return match ? match[1] : null;
    }
    // 返回上一个UI
    goBackToPreviousUI() {
        this.detailPage.active = false;
        this.navBar.active = true;
        this.homePanel.active = false;
        this.ingredientSearchPanel.active = false;
        this.randomRecipePanel.active = false;
        UIStackManager.instance.popUI().active = true;  
    }
    // 设置按钮高亮，并将其他按钮恢复默认颜色
    highlightButton(activeButton: Button) {
        // 重置所有按钮的颜色
        this.setButtonColor(this.homeButton, this.defaultColor);
        this.setButtonColor(this.ingredientSearchButton, this.defaultColor);
        this.setButtonColor(this.randomRecipeButton, this.defaultColor);

        // 设置当前按钮为高亮颜色
        this.setButtonColor(activeButton, this.activeColor);
    }
    setButtonColor(button: Button, color: Color) {
        const sprite = button.node.getComponent(Sprite);
        if (sprite) {
            sprite.color = color;
        }
    }
}


