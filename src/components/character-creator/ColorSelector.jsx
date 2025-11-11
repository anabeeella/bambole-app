import { HStack } from '@chakra-ui/react'
import EditorButton from '../common/EditorButton'

const colors = [
  { id: 1, color: 'crimson' },
  { id: 2, color: 'darkseagreen ' },
  { id: 3, color: 'lemonchiffon' },
  { id: 4, color: 'lightcoral' },
  { id: 5, color: 'lightgreen' },
  { id: 6, color: 'lightsalmon' },
  { id: 7, color: 'lightseagreen' },
  { id: 8, color: 'lightskyblue' },
  { id: 9, color: 'lightslategray' },
  { id: 10, color: 'lightsteelblue' },
  { id: 11, color: 'lightpink' },
]

const ColorSelector = ({ selectedColor, onColorChange }) => {
  return (
    <HStack spacing={4} bg="gray.50" p={4}>
      {colors.map(cat => (
        <EditorButton
          bg={cat.color}
          key={cat.id}
          onClick={() => onColorChange(cat.id)}
          selected={selectedColor === cat.id}
        ></EditorButton>
      ))}
    </HStack>
  )
}

export default ColorSelector
