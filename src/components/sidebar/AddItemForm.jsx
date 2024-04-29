import { useRef, useState } from 'react';

import BaseButton from '../base/BaseButton';

export default function AddItemForm({ onAddItem }) {
    const [itemText, setitemText] = useState('');

    const inputRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        if (!itemText) {
            inputRef.current.focus();
            return;
        }

        onAddItem(itemText);
        setitemText('');
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add an item</h2>
            <input
                ref={inputRef}
                type="text"
                autoFocus
                value={itemText}
                onChange={e => setitemText(e.target.value)}
            />
            <BaseButton label="Add to list" />
        </form>
    );
}
