import React from 'react';
import { CellType } from '../../types';

interface CellProps {
    cell: CellType;
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ cell, onClick }) => {
    return (
        <div className={`cell ${cell.clicked ? 'open' : ''}`} onClick={onClick}>
            {cell.clicked && cell.hasItem ? 'O' : ''}
        </div>
    );
};

export default Cell;