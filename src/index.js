import React from 'react';
import ReactDOM  from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';


import { Provider  } from './context/context';

import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="ef6050f4-e0d7-4875-bd8a-b84d55a9daa8" language="en-US">
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>
, document.getElementById('root'));

