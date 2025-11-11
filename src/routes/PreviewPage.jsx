import { useState, useEffect } from 'react'
import { Box, Input } from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom'
import { RiArrowLeftLine, RiCheckLine } from 'react-icons/ri'
import DownloadModal from '../components/common/DownloadModal.jsx'
import Controls from '../components/common/Controls.jsx'
import STLViewer from '../assets/SLTViewer.jsx'

const PreviewPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [characterName, setCharacterName] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  // Intentar obtener el estado de la navegación o del sessionStorage
  const getCharacterState = () => {
    if (location.state) {
      return location.state
    }
    const savedState = sessionStorage.getItem('characterState')
    return savedState ? JSON.parse(savedState) : null
  }

  const characterState = getCharacterState()

  useEffect(() => {
    // Si no hay estado, regresar a la página de creación
    if (!characterState) {
      navigate('/create')
    }
  }, [characterState, navigate])

  const handleButtonLeft = () => {
    navigate('/create')
  }

  const handleInputChange = e => {
    setCharacterName(e.target.value)
  }

  const openDownloadModal = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
    >
      {/* STLViewer */}
      <Box width="100%" height="800px" cursor="grab">
        <STLViewer file="/penguin.stl" />
      </Box>

      <Input
        value={characterName}
        width="240px"
        placeholder="Nombre del personaje"
        textAlign="center"
        mt={4}
        mb={4}
        onChange={handleInputChange}
      />
      <Controls
        onButtonLeft={handleButtonLeft}
        onButtonRight={openDownloadModal}
        buttonLeft="Volver a crear"
        buttonRight="Finalizar"
        iconLeft={<RiArrowLeftLine />}
        iconRight={<RiCheckLine />}
      />

      <DownloadModal
        isOpen={isOpen}
        onClose={handleClose}
        characterName={characterName || 'Tu personaje'}
        selectedBody={characterState?.selectedBody}
        selectedItems={characterState?.selectedItems}
      />
    </Box>
  )
}

export default PreviewPage
