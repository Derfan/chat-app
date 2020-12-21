import React from "react";

import './styles.css';

const Text = ({ authors }) => {
    if (!authors.length) {
        return null;
    }

    return (
        <p className="text">
            {`${authors.join(', ')} ${authors.length === 1 ? 'is' : 'are'} typing...`}
        </p>
    );
};

export default Text;