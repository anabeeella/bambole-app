import {
  Box,
  Image,
  Text,
  Button,
  Heading,
  VStack,
  Link,
} from '@chakra-ui/react'
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const Hero = () => {
  const navigate = useNavigate()

  const scrollToHowItWorks = () => {
    document
      .getElementById('how-it-works')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <VStack alignItems="center" justify="center" minHeight="100vh" spacing={8}>
      <Box>
        <Image src={logo} alt="Bambole Logo" width="100px" />
      </Box>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading
          size="2xl"
          color="primary.500"
          fontFamily="heading"
          lineHeight="1.5"
          textAlign="center"
        >
          Design, crochet, and make it yours.
        </Heading>
        <Text textAlign="center" fontSize="xl">
          Pick, mix, and design your own cuddly character. Let's get those hooks
          moving!
        </Text>
      </motion.div>
      <Button
        mb={24}
        variant="solid"
        onClick={() => navigate('/create')}
        size="lg"
        leftIcon={
          <motion.div
            animate={{
              x: [-4, 4, -4],
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          >
            <RiArrowRightSLine />
          </motion.div>
        }
      >
        Start Creating
      </Button>
      <Text textAlign="center">
        <strong>No experience?</strong> No problem! Bambole helps you create
        your custom crochet buddy with step-by-step instructions.
      </Text>
      <Link
        onClick={() => {
          scrollToHowItWorks()
        }}
        size="lg"
        leftIcon={<RiArrowDownSLine />}
      >
        See how it works
      </Link>
    </VStack>
  )
}

export default Hero
