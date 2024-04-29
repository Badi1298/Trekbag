export default function Item({ item, onTogglePacked, onDeleteItem }) {
    return (
        <li className="item">
            <label>
                <input
                    type="checkbox"
                    checked={item.packed}
                    onChange={() => onTogglePacked(item.id)}
                />
                {item.name}
            </label>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}
