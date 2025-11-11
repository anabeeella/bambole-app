import { Box, Heading, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { RiMenuLine } from 'react-icons/ri'
import logo from '../../../public/favicon.svg'
import { useState } from 'react'
import { DrawerMenu } from './DrawerMenu'

export const NavBar = ({ children, title = 'Bambole' }) => {
  const navigate = useNavigate()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  return (
    <Box
      bg="white"
      position="fixed"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      border="1px solid black"
      p={{ base: 2, md: 4 }}
      m={{ base: 2, md: 4 }}
      minWidth="340px"
      zIndex={1000}
      top="0"
      left={{ base: 2, md: 4 }}
      right={{ base: 2, md: 4 }}
    >
      <Box
        title="Back to home"
        width="24px"
        cursor="pointer"
        onClick={() => navigate('/')}
      >
        <Image src={logo} alt="Bambole Logo" />
      </Box>
      <Heading size="md">{title}</Heading>
      <Box size="40px" cursor="pointer" px={2}>
        <RiMenuLine onClick={handleDrawerOpen} />
      </Box>
      {children}
      <DrawerMenu isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </Box>
  )
}

export default NavBar
