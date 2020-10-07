import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import PortfolioReducer from './Reducers/PortfolioReducer';

const store = createStore(PortfolioReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
