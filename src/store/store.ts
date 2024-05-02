import create from 'zustand'

export interface Palette {
	id: string
	color: string
}

export interface CreateStore {
	palettes: Palette[]
	createNewPalette: () => void
	changeColor: (id: string, color: string) => void
	removeColor: (id: string) => void
}

const usePaletteStore = create<CreateStore>(set => ({
	palettes: [],
	createNewPalette: () =>
		set(state => ({
			palettes: [
				...state.palettes,
				{
					id: Date.now().toString(),
					color: '#ffffff'
				}
			]
		})),
	changeColor: (id: string, color: string) =>
		set(state => ({
			palettes: state.palettes.map(palette =>
				palette.id === id ? { ...palette, color: color } : palette
			)
		})),
	removeColor: (id: string) =>
		set(state => ({
			palettes: state.palettes.filter(palette => palette.id !== id)
		}))
}))

export default usePaletteStore
