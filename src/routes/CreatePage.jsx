import { useState } from 'react'
import CategorySelector from '../components/character-creator/CategorySelector'
import ItemGrid from '../components/character-creator/ItemGrid'
import CharacterPreview from '../components/character-creator/CharacterPreview'
import ColorSelector from '../components/character-creator/ColorSelector'
import Controls from '../components/character-creator/Controls'
import { Box, Grid, GridItem, Flex } from '@chakra-ui/react'
import { NavBar } from '../components/common/NavBar'
import { DrawerMenu } from '../components/common/DrawerMenu'
import { RiRefreshLine, RiArrowRightLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [selectedItems, setSelectedItems] = useState({})
  const [selectedBody, setSelectedBody] = useState('body-1')
  const [selectedColor, setSelectedColor] = useState(1)
  const [hasShirt, setHasShirt] = useState(false)
  const [isAnimal, setIsAnimal] = useState(true)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleCategoryChange = categoryId => {
    setSelectedCategory(categoryId)
  }

  const handleItemSelect = item => {
    if (item === null) {
      const newSelectedItems = { ...selectedItems }
      delete newSelectedItems[selectedCategory]
      setSelectedItems(newSelectedItems)
    } else {
      setSelectedItems(prev => ({
        ...prev,
        [selectedCategory]: {
          ...item,
          categoryId: selectedCategory,
        },
      }))
    }
  }

  const handleReset = () => {
    setSelectedItems({})
    setSelectedBody('body-1')
    setSelectedColor(1)
  }

  const handleShow = () => {
    const characterState = {
      selectedBody,
      selectedItems,
      selectedColor,
      options: {
        hasShirt,
        isAnimal,
      },
    }

    sessionStorage.setItem('characterState', JSON.stringify(characterState))
    navigate('/preview', { state: characterState })
  }

  const handleBodyChange = bodyId => {
    setSelectedBody(bodyId)
  }

  const handleColorChange = colorId => {
    setSelectedColor(colorId)
  }

  return (
    <Box
      position="relative"
      minHeight="100vh"
      bg="gray.100"
      display="flex"
      flexDirection="column"
      p={4}
    >
      <NavBar title="Bambole Creator" />
      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <Grid
        templateColumns="1fr 1fr"
        mt={20}
        gap={4}
        maxWidth="1800px"
        height="100%"
        mx="auto"
        px={8}
      >
        <GridItem flexGrow={1}>
          <CharacterPreview
            character={selectedItems}
            selectedBody={selectedBody}
            onBodyChange={handleBodyChange}
            selectedColor={selectedColor}
          />
        </GridItem>
        <GridItem flexGrow={1}>
          <Flex flexDirection="column" gap={4} height="100%">
            <CategorySelector
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
            <ItemGrid
              selectedCategory={selectedCategory}
              onItemSelect={handleItemSelect}
              selectedItem={selectedItems[selectedCategory]}
            />
            <ColorSelector
              selectedColor={selectedColor}
              onColorChange={handleColorChange}
            />
          </Flex>
        </GridItem>
      </Grid>

      <Controls
        onButtonLeft={handleReset}
        onButtonRight={handleShow}
        buttonLeft="Start again"
        buttonRight="Preview"
        iconLeft={<RiRefreshLine />}
        iconRight={<RiArrowRightLine />}
      />
    </Box>
  )
}

export default CreatePage
