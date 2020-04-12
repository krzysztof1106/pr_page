import React from 'react';
import ReactDOM from 'react-dom';


//CSS Styles imports
import './out_style.css';
import './Fonts/css/all.css';
import './Fonts/css/fontawesome.css';


//App imports
import App from './App';

// co to jest?
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

serviceWorker.unregister();