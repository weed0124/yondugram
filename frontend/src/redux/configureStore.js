import { combineReducers, createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import { connectRouter } from 'connected-react-router'
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "redux/modules/user";
import photos from "redux/modules/photos";
import { i18nState } from "redux-i18n";
import Reactotron from "ReactotronConfig";

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

const reducer = combineReducers({
  router: connectRouter(history),
  user,
  photos,
  i18nState
});

let store;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
  store = initialState =>
  Reactotron.createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState =>
    createStore(reducer, applyMiddleware(...middlewares)); 
}

export { history };

export default store();