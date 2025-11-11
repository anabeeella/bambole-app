import { Box, Heading, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" w="100%" p={4}>
      <Heading color="primary.500">
        Bambole
        <Button colorScheme="primary" size="md" onClick={() => navigate('/create')}>
          Start Creating
        </Button>
      </Heading>
    </Box>
  )
}

export default Header