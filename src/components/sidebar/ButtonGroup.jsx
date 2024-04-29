import BaseButton from '../base/BaseButton';

export default function ButtonGroup({
    handleMarkAllItems,
    handleRemoveAllItems,
}) {
    return (
        <section className="button-group">
            <BaseButton
                variant="secondary"
                label="Mark all as complete"
                onClick={() => handleMarkAllItems(true)}
            />
            <BaseButton
                variant="secondary"
                label="Mark all as incomplete"
                onClick={() => handleMarkAllItems(false)}
            />
            <BaseButton
                variant="secondary"
                label="Remove all items"
                onClick={handleRemoveAllItems}
            />
        </section>
    );
}
