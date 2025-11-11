import { HStack, Button, Tooltip } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Controls = ({
  onButtonLeft,
  onButtonRight,
  buttonLeft,
  buttonRight,
  iconLeft,
  iconRight,
}) => {
  const navigate = useNavigate()

  return (
    <HStack spacing={4}>
      <Tooltip label={buttonLeft}>
        <Button
          leftIcon={iconLeft}
          onClick={onButtonLeft}
          aria-label={buttonLeft}
          variant="outline"
        >
          {buttonLeft}
        </Button>
      </Tooltip>

      <Tooltip label={buttonRight}>
        <Button
          rightIcon={iconRight}
          onClick={onButtonRight}
          aria-label={buttonRight}
          variant="solid"
        >
          {buttonRight}
        </Button>
      </Tooltip>
    </HStack>
  )
}

export default Controls
