import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './Components/List';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}>
    <List />
</Provider>, document.getElementById('root'));
registerServiceWorker();
