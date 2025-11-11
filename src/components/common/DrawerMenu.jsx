import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import {
  RiHomeLine,
  RiAddLine,
  RiMailLine,
  RiMagicLine,
  RiQuestionLine,
} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, Flex, Image, Text, Box } from '@chakra-ui/react'
import HowItWorks from '../character-creator/HowItWorks'
import { useDisclosure } from '@chakra-ui/react'

const MenuItem = ({ to, icon, children, onClick }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (to) {
      navigate(to)
    }
  }

  const isActive = location.pathname === to

  return (
    <Button
      variant="outline"
      onClick={handleClick}
      leftIcon={icon}
      width="100%"
      bg={isActive ? 'brand.primary.500' : 'transparent'}
      color={isActive ? 'white' : 'black'}
      _hover={{
        bg: isActive ? 'brand.primary.600' : 'gray.100',
        border: '1px solid',
        borderColor: 'black',
      }}
    >
      {children}
    </Button>
  )
}

const DrawerMenu = ({ isOpen, onClose }) => {
  const {
    isOpen: isHowItWorksOpen,
    onOpen: onHowItWorksOpen,
    onClose: onHowItWorksClose,
  } = useDisclosure()

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton borderRadius="0" />
          <DrawerHeader>
            <Image src={logo} alt="Bambole Logo" width="100px" />
          </DrawerHeader>
          <DrawerBody>
            <Flex
              flexDirection="column"
              alignItems="center"
              width="100%"
              gap={4}
            >
              <Text>Bambole is a platform for creating custom characters.</Text>
              <Box width="100%" display="flex" flexDirection="column" gap={4}>
                <MenuItem to="/" icon={<RiHomeLine />}>
                  Home
                </MenuItem>
                <MenuItem to="/create" icon={<RiAddLine />}>
                  Bambole Creator
                </MenuItem>
                <MenuItem
                  icon={<RiQuestionLine />}
                  onClick={() => {
                    onClose()
                    onHowItWorksOpen()
                  }}
                >
                  How it works
                </MenuItem>
                <MenuItem to="/about" icon={<RiMagicLine />}>
                  About
                </MenuItem>
                <MenuItem to="/contact" icon={<RiMailLine />}>
                  Contact
                </MenuItem>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <HowItWorks isOpen={isHowItWorksOpen} onClose={onHowItWorksClose} />
    </>
  )
}

export { DrawerMenu }
