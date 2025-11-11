import {
  Box,
  Heading,
  Text,
  HStack,
  Image,
  VStack,
  Flex,
  List,
  ListItem,
  Button,
} from '@chakra-ui/react'
import { RiArrowRightSLine, RiCheckLine, RiAttachment2 } from 'react-icons/ri'
import { Icon } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const HowItWorks = () => {
  const navigate = useNavigate()
  const howItWorks = [
    {
      step: 1,
      image: 'https://placehold.co/80x80',
      title: 'Customize your character',
      description:
        'Pick your favorite body shape, ears, clothes, accessories and colors to make it unique.',
    },
    {
      step: 2,
      image: 'https://placehold.co/80x80',
      title: 'Preview in 3D',
      description:
        'See your creation come to life in 3D! You could give it a name and create a story for it.',
    },
    {
      step: 3,
      image: 'https://placehold.co/80x80',
      title: 'Download the pattern',
      description:
        'Download the pattern and follow the step by step instructions to crochet it.',
    },
  ]

  return (
    <>
      <VStack width="70%" spacing={4} mb={16}>
        <Heading size="xl">How does it work? Easy as 1-2-3!</Heading>
        <Text size="xl">
          Bambole is for everyone—from total newbies to crochet pros. If it's
          your first time, we'll guide you through every step.
        </Text>
      </VStack>
      <HStack
        width="70%"
        spacing={8}
        alignItems="flex-start"
        mb={24}
        id="how-it-works"
      >
        {howItWorks.map(step => (
          <Box
            key={step.step}
            position="relative"
            flex={1}
            bg="gray.50"
            border="1px solid black"
            display="flex"
            flexDirection="column"
            p={8}
            h="100%"
            _hover={{
              bg: 'gray.100',
              borderColor: 'black',
              boxShadow: '-6px 6px 0 black',
              transform: 'translateY(-4px)',
              transition: 'all 0.2s ease-in-out',
              cursor: 'pointer',
            }}
          >
            <Box
              p={2}
              bg="brand.secondary.600"
              position="absolute"
              fontSize="2xl"
              top={-4}
              left={-4}
              border="1px solid black"
              width="80px"
              height="80px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontWeight="bold"
              boxShadow="-4px 4px 0 black"
              color="white"
            >
              {step.step}
            </Box>
            <Image src={step.image} alt={step.title} mb={4} />
            <Heading fontSize="2xl" mb={4}>
              {step.title}
            </Heading>
            <Text fontSize="md">{step.description}</Text>
          </Box>
        ))}
      </HStack>
      <VStack width="70%" p={16}>
        <Heading>New to crochet? We've got you covered.</Heading>
        <Text>
          Bambole is for everyone—from total newbies to crochet pros. If it's
          your first time, we'll guide you through every step.
        </Text>
      </VStack>
      <VStack bg="gray.100" p={16} mb={24}>
        <Heading>Mini tutorials</Heading>
        <Text mb={4}>
          Learn the basics with these quick tutorials. You'll be crocheting in
          no time!
        </Text>
        <Flex gridTemplateColumns="1fr 1fr 1fr" gap={4}>
          <Box width="150px" border="1px solid black" p={4}>
            <Icon as={RiArrowRightSLine} />
            <Text>How to make a magic ring.</Text>
          </Box>
          <Box width="150px" border="1px solid black" p={4}>
            <Icon as={RiArrowRightSLine} />
            <Text>What is a single crochet?</Text>
          </Box>
          <Box width="150px" border="1px solid black" p={4}>
            <Icon as={RiArrowRightSLine} />
            <Text>How to read a crochet pattern.</Text>
          </Box>
        </Flex>
      </VStack>
      <Box
        color="gray.800"
        bg="white"
        border="1px solid black"
        p={16}
        position="relative"
        transform="rotate(-4deg)"
        _hover={{
          transform: 'rotate(0deg)',
          boxShadow: '-6px 6px 0 black',
        }}
        transition="transform 0.3s ease, box-shadow 0.3s ease"
      >
        <Icon
          as={RiAttachment2}
          position="absolute"
          top="-16px"
          left="10%"
          transform="translateX(+50%)"
          fontSize="40px"
        />
        <Heading>Materials checklist:</Heading>
        <Text fontSize="lg" mb={6}>
          Here's what you'll need to get started:
        </Text>
        <List spacing={2} mb={6}>
          <ListItem display="flex" alignItems="center" fontSize="lg">
            <Icon
              as={RiCheckLine}
              bg="brand.secondary.600"
              color="white"
              rounded="full"
              p={1}
              mr={2}
            />
            Crochet hook (recommended size).
          </ListItem>
          <ListItem display="flex" alignItems="center" fontSize="lg">
            <Icon
              as={RiCheckLine}
              bg="brand.secondary.600"
              color="white"
              rounded="full"
              p={1}
              mr={2}
            />
            Cotton or acrylic yarn (suggested thickness).
          </ListItem>
          <ListItem display="flex" alignItems="center" fontSize="lg">
            <Icon
              as={RiCheckLine}
              bg="brand.secondary.600"
              color="white"
              rounded="full"
              p={1}
              mr={2}
            />
            Security eyes.
          </ListItem>
          <ListItem display="flex" alignItems="center" fontSize="lg">
            <Icon
              as={RiCheckLine}
              bg="brand.secondary.600"
              color="white"
              rounded="full"
              p={1}
              mr={2}
            />
            Stitch markers, scissors, and stuffing.
          </ListItem>
        </List>
        <Text mb={4}>
          <strong>Extra tip:</strong> Don't worry about experience. Our patterns
          are clear, beginner-friendly, and full of tips to help you succeed.
        </Text>
        <Button
          variant="solid"
          size="md"
          mt={4}
          onClick={() => navigate('/create')}
        >
          Let's get started!
        </Button>
      </Box>
    </>
  )
}

export default HowItWorks
