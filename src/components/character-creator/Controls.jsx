import { Button, Box } from '@chakra-ui/react'
import { RiRefreshLine, RiCheckLine } from 'react-icons/ri'

const Controls = ({
  onButtonLeft,
  onButtonRight,
  buttonLeft,
  buttonRight,
  iconLeft,
  iconRight,
}) => {
  return (
    <Box
      display="flex"
      marginTop="20px"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      gap={{ base: 2, md: 4 }}
      maxWidth="1000px"
      mx="auto"
    >
      <Button
        colorScheme="brand.primary"
        variant="outline"
        onClick={onButtonLeft}
        leftIcon={iconLeft}
      >
        {buttonLeft}
      </Button>
      <Button
        colorScheme="brand.primary"
        variant="solid"
        onClick={onButtonRight}
        rightIcon={iconRight}
      >
        {buttonRight}
      </Button>
    </Box>
  )
}

export default Controls
