import configureAppStore from "./configStore";
import * as actions from "./items";

const store = configureAppStore();

store.subscribe(() => {});

store.dispatch(actions.deleteItem({ product }));
store.dispatch(actions.addItem({ product }));
