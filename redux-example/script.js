//Default state object
const state = { Items: ["Meeting @ 9 AM"] };

//Reducer
function reducer(initialState = state, action) {
    switch (action.type) {
        case "GET":
            return initialState;
        case "ADD":
            initialState.Items.push(action.payload);
            return initialState;
        case "REMOVE":
            initialState.Items.splice(0, 1);
            return initialState;
        case "REMOVEALL":
            initialState.Items = [];
            return initialState;
        default:
            return initialState;
    }
}

//Create Store
const store = Redux.createStore(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const todolist = document.getElementById("todoList");
//Subscribe the actions
store.subscribe(() => {
    const result = store.getState();
    todolist.innerHTML = "";
    result.Items.map((item) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = item.toString();
        todolist.appendChild(li);
    });
});

//Trigger Action
store.dispatch({ type: "GET" });

document.getElementById('add').addEventListener("click", () => {
    const item = document.getElementById("itemname").value;
    store.dispatch({ type: "ADD", payload: item });
});

document.getElementById('remove').addEventListener("click", () => {
    store.dispatch({ type: "REMOVE" });
});

document.getElementById('removeall').addEventListener("click", () => {
    store.dispatch({ type: "REMOVEALL" });
});

