export const getTime = timestamp => {
    const date = new Date(timestamp);
    const minutes = String(date.getMinutes());

    return `${date.getHours()}:${minutes.length === 1 ? '0' + minutes : minutes}`;
};

