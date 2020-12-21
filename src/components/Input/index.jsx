import React from 'react';

import './styles.css';

const Input = ({ input }) => (
    <input type="text" className="input" {...input} />
);

export default Input;