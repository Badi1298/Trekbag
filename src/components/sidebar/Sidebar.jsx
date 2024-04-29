import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({
    handleAddItem,
    handleMarkAllItems,
    handleRemoveAllItems,
}) {
    return (
        <div className="sidebar">
            <AddItemForm onAddItem={handleAddItem} />
            <ButtonGroup
                handleMarkAllItems={handleMarkAllItems}
                handleRemoveAllItems={handleRemoveAllItems}
            />
        </div>
    );
}
