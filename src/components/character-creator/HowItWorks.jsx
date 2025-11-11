import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'
import { useState } from 'react'

const HowItWorks = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1)

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
    else onClose()
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
    else onClose()
  }

  const stepContent = [
    {
      image: 'https://placehold.co/100x100',
      location: 'top',
      title: 'Step 1: Choose the body shape',
      description:
        'Pick your favorite body shape to start customizing your doll.',
    },
    {
      image: 'https://placehold.co/100x100',
      location: 'bottom',
      title: 'Step 2: Select ears, clothes, and accessories',
      description:
        "Mix and match different parts to make your Bambole unique. Don't forget to choose your favorite colors too!",
    },
    {
      image: 'https://placehold.co/100x100',
      location: 'bottom',
      title: 'Step 3: Preview your doll',
      description:
        "See your creation come to life! If you're happy with it, you can proceed to download the pattern.",
    },
  ]

  const handleClose = () => {
    onClose()
    setStep(1)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{stepContent[step - 1].title}</ModalHeader>
        <ModalBody display="flex" flexDirection="column" alignItems="center">
          <Image src={stepContent[step - 1].image} alt="Bambole" />
          <Text>{stepContent[step - 1].description}</Text>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="space-between">
          {step > 1 && (
            <Button variant="ghost" onClick={handleBack}>
              Back
            </Button>
          )}
          <Button
            colorScheme="brand.primary"
            onClick={handleNext}
            ml={step === 1 ? 'auto' : '0'}
          >
            {step < 3 ? 'Next' : 'Finish'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default HowItWorks
