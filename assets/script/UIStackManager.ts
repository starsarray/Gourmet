import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIStackManager')
export class UIStackManager  {
    static instance = new UIStackManager();
    private UIStack: Node[] = [];  // 用于存储 UI 节点的堆栈
    private UIData = {};  // 用于存储不同场景的数据

    // 压入场景并传参
    pushUI(UIName, data = null) {
        this.UIStack.push(UIName);
        if (data) {
            this.UIData[UIName] = data;  // 存储传递的数据
        }
    }

    // 弹出场景并返回数据
    popUI() {
        if (this.UIStack.length > 1) {
            const currentUI = this.UIStack.pop();
            const previousUI = this.UIStack[this.UIStack.length - 1];
            return previousUI;
        }
    }

    // 获取当前场景传递的数据
    getUIData(UIName) {
        return this.UIData[UIName] || null;
    }
}


