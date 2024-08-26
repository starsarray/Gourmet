import { _decorator, Component, Node, EditBox } from 'cc';
import { RecipesGenerate } from '../RecipesGenerate'; // 引入 RecipesGenerate 类

const { ccclass, property } = _decorator;

@ccclass('RecipesSearch')
export class RecipesSearch extends Component {

    @property(EditBox)
    searchBox: EditBox = null;  // 绑定输入框节点

    @property(Node)
    content: Node = null;  // 指向食谱列表的 Content 节点

    @property(RecipesGenerate)
    recipesGenerate: RecipesGenerate = null;  // 绑定 RecipesGenerate 脚本

    onSearch() {
        const keyword = this.searchBox.string.trim();  // 获取用户输入的关键词
        
        if (keyword) {
            const searchResults = this.recipesGenerate.searchRecipesByKeyword(keyword);  // 调用搜索功能
            this.recipesGenerate.updateRecipeList(searchResults);  // 更新食谱列表
        }else {
            this.recipesGenerate.updateRecipeList(this.recipesGenerate.recipeData.recipes);  // 展示全部食谱列表
        }
    }
}
