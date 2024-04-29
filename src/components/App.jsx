import { useEffect, useState } from 'react';

import Header from './header/Header';
import Footer from './layout/Footer';
import Sidebar from './sidebar/Sidebar';
import ItemList from './item-list/ItemList';
import BackgroundHeading from './layout/BackgroundHeading';

function App() {
    const [items, setItems] = useState(
        () => JSON.parse(localStorage.getItem('items')) || []
    );

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const handleTogglePacked = id => {
        const newItems = items.map(item => {
            if (item.id !== id) return item;

            return { ...item, packed: !item.packed };
        });
        setItems(newItems);
    };

    const handleDeleteItem = id => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    };

    const handleAddItem = newItemText => {
        const newItem = {
            id: new Date().getTime(),
            name: newItemText,
            packed: false,
        };

        const newItems = [...items, newItem];
        setItems(newItems);
    };

    const handleMarkAllItems = complete => {
        const newItems = items.map(item => ({ ...item, packed: complete }));
        setItems(newItems);
    };

    const handleRemoveAllItems = () => {
        setItems([]);
    };

    return (
        <>
            <BackgroundHeading />
            <main>
                <Header
                    total={items.length}
                    totalPacked={items.filter(item => item.packed).length}
                />
                <ItemList
                    items={items}
                    handleDeleteItem={handleDeleteItem}
                    handleTogglePacked={handleTogglePacked}
                />
                <Sidebar
                    handleAddItem={handleAddItem}
                    handleMarkAllItems={handleMarkAllItems}
                    handleRemoveAllItems={handleRemoveAllItems}
                />
            </main>
            <Footer />
        </>
    );
}

export default App;
