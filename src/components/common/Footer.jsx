import { Box, Text, Link, Image, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Footer() {
  const navigate = useNavigate()

  return (
    <Box
      width="100%"
      height="200px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={4}
      bg="gray.100"
      px={16}
    >
      <Box>
        <Image src={logo} alt="Bambole Logo" width="80px" />
      </Box>
      <Box>
        <Text fontSize="sm">
          Bambole 2025@ All rights reserved | Patterns, design and code created
          by <Link href="https://github.com/anabeeella">@anabeeella</Link>
        </Text>
      </Box>
      <VStack alignItems="flex-end">
        <Link colorScheme="primary" size="xs" onClick={() => navigate('/')}>
          Home
        </Link>
        <Link
          colorScheme="primary"
          size="xs"
          onClick={() => navigate('/create')}
        >
          Create
        </Link>
        <Link
          colorScheme="primary"
          size="xs"
          onClick={() => navigate('/about')}
        >
          About
        </Link>
        <Link
          colorScheme="primary"
          size="xs"
          onClick={() => navigate('/contact')}
        >
          Contact
        </Link>
      </VStack>
    </Box>
  )
}

export default Footer
