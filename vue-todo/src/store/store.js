import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    }
};

export const store = new Vuex.Store({
  state: {
    headerText: 'Todo it!',
    todoItems: storage.fetch()
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    } 
  },
  mutations: {
    addOneItem(state, todoItem){
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, {todoItem, index}) {
        localStorage.removeItem(todoItem.item);
        state.todoItems.splice(index, 1);
    },
    toggleOneItem(state, {todoItem, index}){
        state.todoItems[index].completed = !todoItem.completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});