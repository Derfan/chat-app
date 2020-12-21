import React, { useRef, useEffect } from 'react';

import { scrollBottom } from '../../helpers/ui';
import Message from '../Message';

import './styles.css';

const History = ({ history }) => {
    const historyContainer = useRef();

    useEffect(() => {
        scrollBottom(historyContainer.current);
    }, [history]);

    return (
        <div className="history">
            <ul
                ref={historyContainer}
                className="history-scrollable"
            >
                {history.map(item => (
                    <Message
                        key={item.id}
                        name={item.name}
                        messages={item.messages}
                    />
                ))}
            </ul>
        </div>
    );
}

export default History;