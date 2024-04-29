import { useState } from 'react';

const [items, setItems] = useState([
    {
        id: 1,
        name: 'Good mood',
        packed: true,
    },
    {
        id: 2,
        name: 'Phone charger',
        packed: false,
    },
    {
        id: 3,
        name: 'Passport',
        packed: false,
    },
]);

const addItem = () => {};
