import { Box, Image, HStack, VStack } from '@chakra-ui/react'
import EditorButton from '../common/EditorButton'
import { characterParts } from '../../data/patterns'

const mapCategoryItems = categoryName => {
  return (
    characterParts
      .find(category => category.category === categoryName)
      ?.items.map(item => ({
        id: item.id,
        image: item.previewImage,
        icon: item.icon,
      })) || []
  )
}

const bodies = mapCategoryItems('Body')

const CharacterPreview = ({
  character,
  selectedBody = 'body-1',
  onBodyChange,
}) => {
  const currentBody = bodies.find(body => body.id === selectedBody) || bodies[0]

  const selectedLayers = Object.values(character)
    .filter(layer => layer && layer.previewImage)
    .map(layer => ({
      id: layer.id,
      image: layer.previewImage,
      name: layer.name,
    }))

  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="gray.50"
      width="100%"
      height="100%"
      overflow="hidden"
    >
      <HStack spacing={4} mb={4}>
        {bodies.map(body => (
          <EditorButton
            key={body.id}
            onClick={() => onBodyChange(body.id)}
            selected={body.id === selectedBody}
          >
            <Image src={body.icon} alt="Body" width={32} />
          </EditorButton>
        ))}
      </HStack>

      <Box position="relative" width="80%" height="80%">
        <Image
          src={currentBody.image}
          alt="Base Character"
          width="100%"
          height="100%"
          objectFit="cover"
        />
        {selectedLayers.map(layer => (
          <Image
            key={layer.id}
            src={layer.image}
            alt={layer.name}
            top="0"
            left="0"
            width="100%"
            height="100%"
            objectFit="cover"
            position="absolute"
          />
        ))}
      </Box>
    </Box>
  )
}

export default CharacterPreview
