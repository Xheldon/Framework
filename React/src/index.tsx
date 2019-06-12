import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import ClientMain from './container/clientMain';
import { sagaMiddleware, store } from './store';
import sagas from './sagas';

sagaMiddleware.run(sagas);

const app = (
    <Provider store={store}>
        <div style={{width: '100%', height: '100%'}}>
            <ClientMain />
        </div>
    </Provider>
);

ReactDom.render(
    (<React.StrictMode>{app}</React.StrictMode>),
    document.getElementById('app')
);