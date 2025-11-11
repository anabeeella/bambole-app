import { Box } from '@chakra-ui/react'
import Footer from '../components/common/Footer'
import Hero from '../components/home-page/Section-Hero'
import HowItWorks from '../components/home-page/Section-HowitWorks'
import About from '../components/home-page/Section-About'

const HomePage = () => {
  return (
    <Box
      minW="container.sm"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="gray.50"
    >
      <Hero />
      <HowItWorks />
      <About />
      <Footer />
    </Box>
  )
}

export default HomePage
