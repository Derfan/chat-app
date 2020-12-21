import { useEffect, useState } from 'react';

export const useChatApi = () => {
    const [history, setHistory] = useState([]);
    const [authors, setAuthors] = useState([]);

    const onMessageHandler = function (message) {
        setHistory(prevValue => {
            const last = prevValue[prevValue.length - 1];

            return prevValue.length && last.name === message.user
                ? prevValue.map((item, idx) => {

                    return idx === prevValue.length - 1
                        ? { ...item, messages: [...item.messages, message] }
                        : item;
                })
                : [...prevValue, { id: message.id, name: message.user, messages: [message] }];
        });
        setAuthors(prevValue => prevValue.filter(name => name !== message.user));
    }
    const onTypingHandler = function (name) {
        setAuthors(prevValue =>
            prevValue.indexOf(name) === -1 && name !== 'Me'
                ? [...prevValue, name]
                : prevValue
        );
    }
    const sendMessageHandler = function (message) {
        window.Chat.sendMessage(message);
    }

    useEffect(() => {
        window.Chat.onMessage(onMessageHandler);
        window.Chat.onTyping(onTypingHandler);
    }, []);

    return { history, authors, sendMessageHandler };
};

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = function(event) {
        setValue(event.target.value);
    }
    const clear = function() {
        setValue('');
    }

    return { field: { value, onChange }, value, onChange, clear };
};