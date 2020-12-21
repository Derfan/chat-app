import React from 'react';

import { useChatApi } from '../../helpers/hooks';
import History from '../History';
import Text from '../Text';
import Form from '../Form';

import './styles.css';

const App = () => {
    const { history, authors, sendMessageHandler } = useChatApi();

    return (
        <div className="chat">
            <History history={history} />
            <Text authors={authors} />
            <Form onSubmit={sendMessageHandler} />
        </div>
    );
};

export default App;
