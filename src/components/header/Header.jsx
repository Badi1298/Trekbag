import { useItemsStore } from '../../store/itemsStore';

import Logo from './Logo';
import Counter from './Counter';

export default function Header() {
	const items = useItemsStore((state) => state.items);

	return (
		<header>
			<Logo />
			<Counter
				total={items.length}
				totalPacked={items.filter((item) => item.packed).length}
			/>
		</header>
	);
}
