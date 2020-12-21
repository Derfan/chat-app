import React from 'react';

import { useInput } from '../../helpers/hooks';
import Input from '../Input';
import Button from '../Button';

import './styles.css';

const Form = ({ onSubmit }) => {
    const input = useInput('');

    const submitHandler = function (event) {
        event.preventDefault();

        if (input.value) {
            onSubmit(input.value);
            input.clear();
        }
    }

    return (
        <form onSubmit={submitHandler} className="form">
            <Input
                input={{
                    ...input.field,
                    type: 'text',
                    placeholder: 'Write a message...'
                }}
            />
            <Button>Send</Button>
        </form>
    );
}

export default Form;