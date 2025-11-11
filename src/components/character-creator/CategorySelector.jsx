import { HStack, Image } from '@chakra-ui/react'
import EditorButton from '../common/EditorButton'
import { characterParts } from '../../data/patterns'

// Mapear las categorías desde characterParts, excluyendo "Cuerpos enteros"
const categories = characterParts
  .filter(category => category.category !== 'Body')
  .map((category, index) => ({
    id: index + 1,
    label: category.category,
    icon: category.items[0]?.icon || '',
  }))

const CategorySelector = ({ selectedCategory, onCategoryChange }) => {
  return (
    <HStack spacing={4} bg="gray.50" p={4}>
      {categories.map(cat => (
        <EditorButton
          title={cat.label}
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          selected={selectedCategory === cat.id}
        >
          <Image
            src={cat.icon}
            alt={cat.label}
            objectFit="contain"
            width="100%"
            height="100%"
          />
        </EditorButton>
      ))}
    </HStack>
  )
}

export default CategorySelector
