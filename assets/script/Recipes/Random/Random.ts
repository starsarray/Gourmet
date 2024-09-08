import { _decorator, Button, Component, Label, Node, Prefab, instantiate, AudioSource } from 'cc';
import { RecipesGenerate } from '../RecipesGenerate';
import { NavigationBar } from '../NavigationBar';
const { ccclass, property } = _decorator;

@ccclass('Random')
export class Random extends Component {
    // 推荐食谱按钮容器节点
    @property(Node)
    randomNode: Node | null = null;

    // 当前推荐数量 文本
    @property(Label)
    lab: Label | null = null;

    // 随机按钮
    @property(Button)
    button: Button | null = null;

    // 食谱按钮预制体
    @property(Prefab)
    buttonPrefab: Prefab | null = null;
    
    // 绑定 RecipesGenerate 脚本
    @property(RecipesGenerate)
    recipesGenerate: RecipesGenerate = null;  

    @property(Node)
    navBar: Node = null;

    // 最大推荐数量
    private maxRecipeCount: number = 6;

    // 已选择的食谱索引
    private selectedRecipeIndices: Set<number> = new Set();

    // 控制音效
    private bu : boolean = false;

    // 更新推荐食谱
    updateRecipe() {
        if(this.bu){
            const audioSource = this.button.getComponent(AudioSource);
            audioSource.play();
        }
        if (!this.randomNode || !this.lab || !this.buttonPrefab) return;

        // 清除当前所有子节点
        this.randomNode.removeAllChildren();

        // 获取当前推荐数量
        const count = parseInt(this.lab.string);

        // 重置已选择的食谱索引
        this.selectedRecipeIndices.clear();

        // 根据数量创建食谱按钮
        for (let i = 0; i < count; i++) {
            const recipeIndex = this.getRandomRecipeIndex();

            if (recipeIndex !== -1) {
                const recipe = this.recipesGenerate.recipeData.recipes[recipeIndex];

                const buttonNode = instantiate(this.buttonPrefab);
                buttonNode.getChildByName("Label").getComponent(Label).string = recipe.name;  // 显示食谱名称
                buttonNode.setParent(this.randomNode);

                // 为按钮添加点击事件来查看详情
                buttonNode.on(Button.EventType.CLICK, () => this.showRecipeDetails(recipe), this);
            }
        }
    }

    // 获取一个随机的食谱索引，确保不重复
    getRandomRecipeIndex(): number {
        // 所有食谱都已选择
        if (this.selectedRecipeIndices.size >= this.recipesGenerate.recipeData.recipes.length) {
            return -1; 
        }

        let randomIndex = Math.floor(Math.random() * this.recipesGenerate.recipeData.recipes.length);
        while (this.selectedRecipeIndices.has(randomIndex)) {
            randomIndex = Math.floor(Math.random() * this.recipesGenerate.recipeData.recipes.length);
        }

        this.selectedRecipeIndices.add(randomIndex);
        return randomIndex;
    }

    // 显示食谱详情
    showRecipeDetails(recipe: any) {
        const navigationBarComponent = this.navBar.getComponent(NavigationBar);
                if (navigationBarComponent) {
                    navigationBarComponent.goToDetailPage(recipe);  // 调用实例的方法
                }
    }

    // 减少推荐数量
    minus() {
        if (!this.lab) return;

        let count = parseInt(this.lab.string);
        if (count > 1) {  // 假设最小数量为1
            count -= 1;
            this.lab.string = count.toString();
            this.updateRecipe();  // 更新食谱
        }
        this.updateRecipe();
    }

    // 增加推荐数量
    plus() {
        if (!this.lab) return;

        let count = parseInt(this.lab.string);
        if (count < this.maxRecipeCount) {
            count += 1;
            this.lab.string = count.toString();
            this.updateRecipe();  // 更新食谱
        }
        this.updateRecipe();
    }

    start() {
        // 初始化食谱数量
        if (this.lab) {
            this.lab.string = '1';  // 设置初始值
        }

        this.updateRecipe();  // 初始化食谱显示
        this.bu = true;
    }
}
