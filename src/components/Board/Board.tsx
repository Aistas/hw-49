import React, { useState } from 'react';
import Cell from '../Cell/Cell';
import Tries from '../Tries/Tries';
import ResetButton from '../ResetButton/ResetButton';
import { CellType } from '../../types';
import './Board.css';

const createItems = (): CellType[] => {
    const items = Array(36).fill(null).map(() => ({
        hasItem: false,
        clicked: false,
    }));
    const randomIndex = Math.floor(Math.random() * 36);
    items[randomIndex].hasItem = true;
    return items;
};

const Board: React.FC = () => {
    const [items, setItems] = useState<CellType[]>(createItems());
    const [tries, setTries] = useState<number>(0);
    const [found, setFound] = useState<boolean>(false);

    const handleClick = (index: number) => {
        if (items[index].clicked || found) return;

        const newItems = [...items];
        newItems[index].clicked = true;
        setItems(newItems);
        setTries(tries + 1);

        if (newItems[index].hasItem) {
            setFound(true);
        }
    };

    const handleReset = () => {
        setItems(createItems());
        setTries(0);
        setFound(false);
    };

    return (
        <>
            <div className="board">
                {items.map((cell, index) => (
                    <Cell key={index} cell={cell} onClick={() => handleClick(index)} />
                ))}
            </div>
            <Tries count={tries} />
            {found && <div>Element found!</div>}
            <ResetButton onReset={handleReset} />
        </>
    );
};

export default Board;