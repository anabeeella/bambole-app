import React, { useState } from 'react'
import { Box, Image, Flex } from '@chakra-ui/react'
import { characterParts } from '../../data/patterns'

const ItemGrid = ({ selectedCategory, onItemSelect, selectedItem }) => {
  const categoryData = characterParts.filter(
    category => category.category !== 'Body'
  )[selectedCategory - 1]

  const items = categoryData?.items || []

  if (!items || items.length === 0) {
    return (
      <Box
        p={4}
        bg="gray.50"
        textAlign="center"
        height="100%"
        color="gray.500"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        No items available
      </Box>
    )
  }

  return (
    <Flex
      height="100%"
      bg="gray.50"
      p={4}
      flexDirection="row"
      flexWrap="wrap"
      gap="10px"
      padding="10px"
    >
      {items.map(item => (
        <Box
          title={item.name}
          key={item.id}
          textAlign="center"
          cursor="pointer"
          onClick={() => {
            if (item === selectedItem) {
              onItemSelect(null)
            } else {
              onItemSelect(item)
            }
          }}
          border={
            item === selectedItem ? '1px solid black' : '1px solid transparent'
          }
          boxShadow={item === selectedItem ? '-3px 3px 0 0 black' : 'none'}
          width="100%"
          height="100%"
          maxHeight="100px"
          maxWidth="100px"
          overflow="hidden"
        >
          <Image
            src={item.icon}
            alt={item.name}
            objectFit="cover"
            width="100%"
            height="100%"
            fallback={
              <Box p={4} textAlign="center" bg="gray.50">
                Loading...
              </Box>
            }
          />
        </Box>
      ))}
    </Flex>
  )
}

export default ItemGrid
