import { Box, Heading, Text, VStack, Button, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/common/NavBar'

const AboutPage = () => {
  const navigate = useNavigate()

  return (
    <Box
      minW="100vw"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={16}
      bg="gray.50"
    >
      <NavBar title="About Bambole" />
      <VStack spacing={8} width="50%" pt={20}>
        <Box mb={16}>
          <Heading size="2xl" mb={8}>
            Bambole.app was born from the perfect combination of a love for
            crochet and a passion for design.
          </Heading>
          <Text mb={8}>
            It's a space thought for those who want to bring their ideas to
            life, whether they are experienced crocheters, curious about the
            world of amigurumi, or simply people who want to imagine unique
            characters to then crochet them or ask someone to do it for them.
            <br />
            <br />
            <strong>
              The idea came when I realized how powerful it is to create
              something with your own hands, but also how frustrating it can be
              to find patterns that really fit what you want.
            </strong>{' '}
            <br />
            <br />
            Bambole.app was born: a simple and fun tool that allows you to
            design your own characters in an easy-to-use environment and then
            get the pattern to bring them to the real world. <br />
            <br />
            <strong>What are we aiming for?</strong> To democratize creativity
            and the art of crochet. We want to inspire both children and adults,
            to those who love crocheting and to those who have never even picked
            up a crochet hook.
          </Text>
          <Text fontSize="2xl">
            Bambole.app is for everyone: a place where imagination has no limits
            and design becomes something tangible.
          </Text>
        </Box>
      </VStack>
      <Box
        width="50%"
        display="flex"
        flexDirection="column"
        borderColor="black"
        borderWidth={1}
        p={16}
      >
        <Heading size="xl" mb={8}>
          Hi! I'm Anabella :)
        </Heading>
        <Text mb={8}>
          I'm a graphic designer and a crochet lover. I've been working in
          design and development for years, combining technology and creativity
          to build unique experiences. My experience ranges from creating brands
          and designing interfaces to using artificial intelligence to optimize
          processes and bring life to innovative projects.
          <br />
          <br />
          <strong>But I'm also a crocheter.</strong> I love the magic of turning
          a thread into something that has life, shape, and personality.
          Bambole.app is my way of uniting these two worlds that I love so much:
          digital design and manual art, so that others can also enjoy this
          creative experience.
        </Text>
        <Text fontSize="xl">
          If you want to know more about me, you can write me at{' '}
          <Link href="mailto:anabeeella.r@gmail.com">
            anabeeella.r@gmail.com
          </Link>
          .
        </Text>
      </Box>
      <Button marginTop={8} size="sm" onClick={() => navigate('/')}>
        Back to home
      </Button>
    </Box>
  )
}

export default AboutPage
