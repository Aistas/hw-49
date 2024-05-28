import React from 'react';

interface TriesProps {
    count: number;
}

const Tries: React.FC<TriesProps> = ({ count }) => {
    return <div>Tries: {count}</div>;
};

export default Tries;