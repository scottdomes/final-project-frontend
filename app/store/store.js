import {createStore} from 'redux';
import reducer from '../reducers/index';

const store = createStore(reducer);

export default store;

// export default function configureStore(initialState) {
//   const store = createStore(reducer, initialState, 
//     window.devToolsExtension && window.devToolsExtension()
//   );
//   return store;
// }