import React from 'react';
import cns from 'classnames';

import { getTime } from '../../helpers/date';

import './styles.css';

const Message = ({ name, messages }) => {
    const isSelf = name === 'Me';

    return messages.map((message, i) => {
        const isFirst = i === 0;
        const classNames = cns(['message', { 'self': isSelf, 'with-arrow': isFirst }]);
        return (
            <li key={message.id} className={classNames}>
                {isFirst && !isSelf && <h4>{message.user}</h4>}
                <p>{message.content}</p>
                <time>{getTime(message.timestamp)}</time>
            </li>
        )
    });
}

export default Message;
