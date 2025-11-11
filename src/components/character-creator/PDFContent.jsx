import React from 'react'
import { Box, Heading, Text, Image, VStack, HStack } from '@chakra-ui/react'
import { characterParts } from '../../data/patterns'
import materials from '../../data/materials'
import { UnorderedList, ListItem } from '@chakra-ui/react'

const PDFContent = ({ character = {}, characterName = 'Your character' }) => {
  // Función para obtener el patrón de un item
  const getPattern = item => {
    if (!item) return null
    return item.pattern || 'Pattern not found'
  }

  const processPattern = pattern => {
    if (!pattern || typeof pattern !== 'string') return ''

    try {
      let processedPattern = pattern

      return processedPattern
    } catch (error) {
      console.error('Error processing pattern:', error)
      return pattern || ''
    }
  }

  // Obtener el cuerpo seleccionado de forma segura
  const bodyPattern = characterParts
    .find(category => category.category === 'Body')
    ?.items.find(item => item.id === (character?.selectedBody || ''))

  // Procesar el patrón del cuerpo con manejo de errores
  const processedBodyPattern = bodyPattern?.pattern
    ? processPattern(String(bodyPattern.pattern))
    : 'Pattern not found'

  // Obtener los patrones de las partes seleccionadas de forma segura
  const selectedPatterns = Object.values(character?.selectedItems || {})
    .filter(Boolean)
    .map(item => ({
      name: item.name,
      pattern: getPattern(item),
    }))

  return (
    <Box
      id="pdf-content"
      p={6}
      bg="white"
      color="black"
      width="800px"
      margin="24px"
    >
      {/* Preview del personaje */}
      <Box mb={12}>
        <Heading as="h1" size="lg" mb={-4} textAlign="center">
          {characterName} patrón por Bambole
        </Heading>
        <Box position="relative" width="720px" height="720px" margin="0 auto">
          {bodyPattern && (
            <Image
              src={bodyPattern.previewImage}
              alt="Base body"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          )}
          {Object.values(character?.selectedItems || {}).map(
            item =>
              item && (
                <Image
                  key={item.id}
                  src={item.previewImage}
                  alt={item.name}
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              )
          )}
        </Box>
      </Box>

      {/* Patrones */}
      <VStack spacing={8} mb={12}>
        <Box backgroundColor="gray.100" p={8} borderRadius="md">
          {materials.map((material, index) => (
            <Box key={index}>
              <HStack alignItems="flex-start" spacing={2} mb={4}>
                <VStack align="flex-start" flex={1}>
                  <Text fontSize="lg" fontWeight="600">
                    Materiales:
                  </Text>
                  <UnorderedList listStyleType="none" paddingLeft={0}>
                    {material.materials.map((item, idx) => (
                      <ListItem key={idx} ml="-1em">
                        - {item}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </VStack>
                <VStack align="flex-start" flex={1}>
                  <Text fontSize="lg" fontWeight="600">
                    Colores:
                  </Text>
                  <UnorderedList listStyleType="none">
                    {material.colors.map((item, idx) => (
                      <ListItem key={idx} ml="-1em">
                        - {item}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </VStack>
              </HStack>
              <Text fontSize="xs" mb={2}>
                <strong>Puntos utilizados y referencias:</strong>{' '}
                {material.stitches.join(', ')}
              </Text>
              <Text fontSize="xs">{material.notes}</Text>
            </Box>
          ))}
        </Box>

        <Heading as="h1" size="lg" mt={10} mb={2}>
          Instrucciones
        </Heading>
        {/* Patrones de las partes */}
        {selectedPatterns.map((part, index) => (
          <Box key={index} width="100%">
            <Heading as="h2" size="md" mb={2}>
              {part.name}
            </Heading>
            <Text
              whiteSpace="pre-line"
              dangerouslySetInnerHTML={{
                __html: processPattern(String(part.pattern)),
              }}
            />
          </Box>
        ))}
        {/* Patrón del cuerpo */}
        {bodyPattern && (
          <Box>
            <Text
              whiteSpace="pre-line"
              dangerouslySetInnerHTML={{ __html: processedBodyPattern }}
            />
          </Box>
        )}
      </VStack>
    </Box>
  )
}

export default PDFContent
