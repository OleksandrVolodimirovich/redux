import { createStore } from "./createStore.js";
import { rootReducer } from "./redux/rootReducer.js";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

const store = createStore(rootReducer, 0);

addBtn.addEventListener("click", () => {
	store.dispatch({ type: "INCERMENT" });
});

subBtn.addEventListener("click", () => {
	store.dispatch({ type: "DECRMENT" });
});

asyncBtn.addEventListener("click", () => {});

store.subscribe(() => {
  console.log(store.getState());
});
