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

const state = {
    headerText: 'Todo it!',
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
}

const mutations = {
    addOneItem(state, todoItem){
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    }, 
    removeOneItem(state, {todoItem, index}){
        localStorage.removeItem(todoItem.item);
        state.todoItems.splice(index, 1);
    },
    toggleOneItem(state, {todoItem, index}){
        state.todoItems[index].completed = !todoItem.completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state){
        localStorage.clear();
        state.todoItems = [];
    }
}

export default {
    state,
    getters,
    mutations
}