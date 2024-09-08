import { _decorator, Button, Color, Component, director, instantiate, Label, Node, Prefab, ScrollBar, Sprite, UIOpacity, UITransform } from 'cc';
import { RecipesGenerate } from '../RecipesGenerate';
import { UIStackManager } from '../../UIStackManager';
import { NavigationBar } from '../NavigationBar';
const { ccclass, property } = _decorator;

@ccclass('IngredientSearch')
export class IngredientSearch extends Component {
    @property(Node)
    ingredientSearch: Node = null;  // 食材搜索区域
    @property(Node)
    ingredientsContainer: Node = null;  // 多选食材区域
    @property(Node)
    cookingMethodsContainer: Node = null;  // 单选烹饪方式区域
    @property(Node)
    content: Node = null;  // 筛选结果内容区域
    @property(Node)
    recipeList: Node = null;  // 筛选结果列表区域
    @property(Node)
    navBar: Node = null;
    @property(Prefab)
    ingredientButtonPrefab: Prefab = null;  // 预制件，用于生成食材按钮

    @property(Prefab)
    cookingMethodButtonPrefab: Prefab = null;  // 预制件，用于生成烹饪方式按钮

    @property(Prefab)
    recipeListItemPrefab: Prefab = null; // 筛选结果列表项预制体

    @property(RecipesGenerate)
    recipesGenerate: RecipesGenerate = null;  // 绑定 RecipesGenerate 脚本

    @property(Color)
    selectedColor: Color = new Color(53, 192, 0);  // 选中时背景颜色 35C000

    @property(Color)
    defaultColor: Color = new Color(225, 255, 160);  // 默认背景颜色 E1FFA0

    private selectedIngredients: string[] = [];  // 已选择的食材列表
    private selectedCookingMethod: string = '';  // 已选择的烹饪方式

    onLoad() {
        const opacityComp = this.ingredientSearch.getComponent(UIOpacity);
        opacityComp.opacity = 0;
        // 初始化食材按钮和烹饪方式按钮
        this.generateIngredientButtons();
        this.generateCookingMethodButtons();
        //等待按钮高度确定
        this.scheduleOnce(() => {
            this.updateScrollViewHeight();
            this.updateRecipeList();
            opacityComp.opacity = 255;
        }, 0);
    }
    updateScrollViewHeight() {
        const parentHeight = this.ingredientSearch.getComponent(UITransform).height;
        const otherComponentsHeight = this.calculateOtherComponentsHeight();
        const remainingHeight = parentHeight - otherComponentsHeight;
        // 确保剩余高度大于0
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
        let totalHeight = 50+50+50;
         totalHeight += this.ingredientsContainer.getComponent(UITransform).height 
         + this.cookingMethodsContainer.getComponent(UITransform).height;
        return totalHeight;
    }
    generateIngredientButtons() {
        const ingredients = ["鸡蛋",  "猪肉", "鸡肉", "牛肉", "羊肉", "鱼", "虾", "香肠", 
            "土豆", "胡萝卜", "黄瓜", "白菜", "包菜", "白萝卜", "花菜", "番茄", "洋葱", "莴笋", "菌菇", "茄子", "豆腐", "火腿肠", "西葫芦"];  // 示例食材

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
        const cookingMethods = ["锅", "电饭煲", "烤箱", "空气炸锅", "微波炉"];  // 示例烹饪方式

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

    onIngredientSelected(button: Node, ingredient: string) {
        if (this.selectedIngredients.indexOf(ingredient)!=-1) {
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

    onCookingMethodSelected(button: Node, method: string) {
        // 清除其他按钮的选中状态
        this.cookingMethodsContainer.children.forEach(child => {
            child.getComponent(Sprite).color = this.defaultColor;
        });
        if(this.selectedCookingMethod!=method){
            // 选择当前按钮
            this.selectedCookingMethod = method;
            button.getComponent(Sprite).color = this.selectedColor;
        }else{
            this.selectedCookingMethod = '';
        }

        this.updateRecipeList();
    }

    updateRecipeList() {
        const results = this.filterRecipes();
        this.updateRecipeDisplay(results);
    }

    filterRecipes(): Array<any> {
        // 结合已选食材和烹饪方式过滤食谱
        return this.recipesGenerate.recipeData.recipes.filter(recipe => 
            this.selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient)) &&
            (!this.selectedCookingMethod || recipe.cooking_methods.includes(this.selectedCookingMethod))
        );
    }

    updateRecipeDisplay(recipes: Array<any>) {
        // 清空当前显示的结果
        this.content.removeAllChildren();

        recipes.forEach(recipe => {
            const listItem = instantiate(this.recipeListItemPrefab);
            const nameLabel = listItem.getChildByName("NameLabel").getComponent(Label);
            const ingredientsLabel = listItem.getChildByName("IngredientsLabel").getComponent(Label);
            const seasoningsLabel = listItem.getChildByName("SeasoningsLabel").getComponent(Label);
            const cookingMethodsLabel = listItem.getChildByName("CookingMethodsLabel").getComponent(Label);

            if (nameLabel) nameLabel.string = recipe.name;
            if (ingredientsLabel) ingredientsLabel.string = `食材：${recipe.ingredients.join(",")}`;
            // 设置配料
            if (seasoningsLabel) {
                if(recipe.seasonings != "")
                    seasoningsLabel.string = `配料：${recipe.seasonings.join(",")}`;
                else{
                    seasoningsLabel.string = `配料：无`;
                }
            }
            if (cookingMethodsLabel) cookingMethodsLabel.string = `烹饪方式：${recipe.cooking_methods.join(",")}`;
            // 添加点击事件，跳转到详情页面并传参
            listItem.on(Node.EventType.TOUCH_END, () => {
                const navigationBarComponent = this.navBar.getComponent(NavigationBar);
                if (navigationBarComponent) {
                    navigationBarComponent.goToDetailPage(recipe);  // 调用实例的方法
                }
        });
            this.content.addChild(listItem);
        });
        // 更新滚动视图内容尺寸
        this.scheduleOnce(() => {
            const contentUITransform = this.content.getComponent(UITransform);
            contentUITransform.height = this.content.children.reduce((acc, child) => acc + child.getComponent(UITransform).height, 0);
        }, 0);
    }
}


