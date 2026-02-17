import { create } from 'zustand';

interface BookmarkState {
	bookmarkMap: Record<string, boolean>;
	initBookmark: (id: string, isScrapped: boolean) => void;
	toggleBookmark: (id: string) => void;
}

export const useBookmarkStore = create<BookmarkState>((set) => ({
	bookmarkMap: {},
	initBookmark: (id, isScrapped) =>
		set((state) => ({
			bookmarkMap: { ...state.bookmarkMap, [id]: isScrapped },
		})),
	toggleBookmark: (id) =>
		set((state) => ({
			bookmarkMap: {
				...state.bookmarkMap,
				[id]: !(state.bookmarkMap[id] ?? false),
			},
		})),
}));
