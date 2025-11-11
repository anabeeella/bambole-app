import { HStack, Box, Text, Button, Image } from '@chakra-ui/react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import character1 from '../../assets/categories/body/character-1.png'

const About = () => {
  const navigate = useNavigate()

  return (
    <HStack
      width="80%"
      justifyContent="center"
      spacing={8}
      id="about-us"
      mb={16}
    >
      <Box bg="gray.50" py={16} px={8} textAlign="center">
        <Image src={character1} alt="Character 1" />
      </Box>
      <Box bg="gray.50" py={16} px={8}>
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          About Bambole
        </Text>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Bambole is born from the love of creativity and design. We aim to
          bring smiles to children and adults alike with custom crochet dolls
          that reflect your unique style and imagination.
        </Text>
        <Button
          variant="ghost"
          onClick={() => navigate('/about')}
          rightIcon={<RiArrowRightSLine />}
        >
          More about Bambole
        </Button>
      </Box>
    </HStack>
  )
}

export default About
