import body from './patterns/body'
import hocico from './patterns/nose'
import './styles.css'

export const characterParts = [
  {
    category: 'Body',
    items: Array.isArray(body)
      ? body
      : [body].filter(Boolean).map(item => ({
          id: item.id,
          name: item.name || `Body ${item.id}`,
          icon: item.icon || `src/assets/categories/body/body-${item.id}.png`,
          previewImage:
            item.previewImage ||
            `src/assets/categories/body/character-${item.id}.png`,
          pattern: item.pattern,
        })),
  },
  {
    category: 'Hocicos',
    items: Array.isArray(body)
      ? hocico
      : [hocico].filter(Boolean).map(item => ({
          id: item.id,
          name: item.name || `Hocico ${item.id}`,
          icon:
            item.icon || `src/assets/categories/nose/nose-${item.id}_icon.png`,
          previewImage:
            item.previewImage ||
            `src/assets/categories/nose/character-${item.id}_prev.png`,
          pattern: item.pattern,
        })),
  },
  {
    category: 'Orejas',
    items: [
      {
        id: 'ear-1',
        name: 'Orejas redondeadas',
        icon: 'src/assets/categories/ears/ear-1_icon.svg',
        previewImage: 'src/assets/categories/ears/ear-1_prev.png',
        pattern: 'Patrón para las orejas redondeadas...',
        dimensions: { height: 5 }, // Altura de las orejas
      },
      {
        id: 'ear-2',
        name: 'Orejas largas',
        icon: 'src/assets/categories/ears/ear-2_icon.svg',
        previewImage: 'src/assets/categories/ears/ear-2_prev.png',
        pattern: 'Patrón para las orejas largas...',
        dimensions: { height: 7 },
      },
    ],
  },
  // Otras categorías...
]
