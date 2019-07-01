import { observable, action, computed } from "mobx";

class Store {
   // 利用
  @observable todos = [];

  @action push() {
      this.todos.push({
          id: 1,
          name: 'new Task'
      })
  }
}

const data = {
  todoList: new Store()
}

export default data