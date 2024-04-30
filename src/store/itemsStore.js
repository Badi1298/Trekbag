import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useItemsStore = create(
	persist(
		(set) => ({
			items: [],

			addItem: (newItemText) => {
				const newItem = {
					id: new Date().getTime(),
					name: newItemText,
					packed: false,
				};

				set((state) => ({ items: [...state.items, newItem] }));
			},

			deleteItem: (id) => {
				set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
			},

			removeAllItems: () => {
				set(() => ({ items: [] }));
			},

			markAllItems: (complete) => {
				set((state) => {
					const newItems = state.items.map((item) => ({ ...item, packed: complete }));

					return { items: newItems };
				});
			},

			togglePacked: (id) => {
				set((state) => {
					const newItems = state.items.map((item) => {
						if (item.id !== id) return item;

						return { ...item, packed: !item.packed };
					});

					return { items: newItems };
				});
			},
		}),
		{ name: 'items' }
	)
);
