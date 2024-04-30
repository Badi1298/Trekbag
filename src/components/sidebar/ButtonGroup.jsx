import { useItemsStore } from '../../store/itemsStore';

import BaseButton from '../base/BaseButton';

export default function ButtonGroup() {
	const markAllItems = useItemsStore((state) => state.markAllItems);
	const removeAllItems = useItemsStore((state) => state.removeAllItems);

	return (
		<section className="button-group">
			<BaseButton
				variant="secondary"
				label="Mark all as complete"
				onClick={() => markAllItems(true)}
			/>
			<BaseButton
				variant="secondary"
				label="Mark all as incomplete"
				onClick={() => markAllItems(false)}
			/>
			<BaseButton
				variant="secondary"
				label="Remove all items"
				onClick={removeAllItems}
			/>
		</section>
	);
}
