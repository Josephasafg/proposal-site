import React from 'react';

interface IEmoji {
    symbol: string
    label?: string
}

const Emoji: React.FC<IEmoji> = (
    {
        label,
        symbol
    }) => (
    <span
        className="emoji"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
);
export default Emoji;