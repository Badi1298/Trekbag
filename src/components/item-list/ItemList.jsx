import { useMemo, useState } from 'react';

import { useItemsStore } from '../../store/itemsStore';

import Item from './Item';
import EmptyView from './EmptyView';

import Select from 'react-select';

const options = [
	{ value: 'packed', label: 'Sort by packed' },
	{ value: 'unpacked', label: 'Sort by unpacked' },
];

export default function ItemList() {
	const [selectedOption, setSelectedOption] = useState(options[0]);

	const items = useItemsStore((state) => state.items);
	const deleteItem = useItemsStore((state) => state.deleteItem);
	const togglePacked = useItemsStore((state) => state.togglePacked);

	const sortedItems = useMemo(
		() =>
			[...items].sort((a, b) => {
				return {
					packed: b.packed - a.packed,
					unpacked: a.packed - b.packed,
				}[selectedOption.value];
			}),
		[items, selectedOption.value]
	);

	return (
		<ul className="item-list">
			{!items.length && <EmptyView />}

			{items.length > 0 && (
				<section className="sorting">
					<Select
						options={options}
						defaultValue={selectedOption}
						onChange={setSelectedOption}
					/>
				</section>
			)}

			{sortedItems.map((item) => (
				<Item
					key={item.id}
					item={item}
					onDeleteItem={deleteItem}
					onTogglePacked={togglePacked}
				/>
			))}
		</ul>
	);
}
