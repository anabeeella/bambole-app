import { Box, Text, Button, VStack, Input, Heading } from '@chakra-ui/react'
import Footer from '../components/common/Footer'
import NavBar from '../components/common/NavBar'

const ContactPage = () => {
  const handleSend = () => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    console.log(name, email, message)
    alert('Message sent!')
  }

  return (
    <>
      <NavBar title="Contact" />
      <Box
        p={8}
        maxW="container.sm"
        height="700px"
        mt={24}
        mx="auto"
        id="contact"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading mb={8} textAlign="center">
          Let's talk!
        </Heading>
        <Text mb={8} textAlign="center">
          We'd love to hear from you! Whether you have a question, a suggestion,
          or just want to say hi, please don't hesitate to get in touch with us.
        </Text>
        <VStack spacing={4}>
          <Input required type="text" placeholder="Name" id="name" />
          <Input required type="email" placeholder="Email" id="email" />
          <Input required type="text" placeholder="Message" id="message" />
          <Button mt={4} onClick={handleSend}>
            Send
          </Button>
        </VStack>
      </Box>
      <Footer />
    </>
  )
}

export default ContactPage
