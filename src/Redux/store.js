import {createStore} from 'redux';
import rootreducer from './rootreducer.js';

const store = createStore(rootreducer);

export default store;