import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Box,
  ModalHeader,
  ModalBody,
  Text,
} from '@chakra-ui/react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFContent from '../character-creator/PDFContent'
import { createPortal } from 'react-dom'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const DownloadModal = ({
  isOpen,
  onClose,
  characterName,
  selectedBody,
  selectedItems,
}) => {
  const handleGeneratePDF = async () => {
    try {
      const content = document.getElementById('pdf-content')
      if (!content) {
        console.error('PDF content element not found')
        return
      }

      const canvas = await html2canvas(content, {
        scale: 2,
        useCORS: true,
        logging: false,
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      const imgWidth = pdfWidth
      const imgHeight = (canvas.height * pdfWidth) / canvas.width

      let heightLeft = imgHeight
      let position = 0

      // Primera página
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pdfHeight

      // Páginas adicionales si es necesario
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pdfHeight
      }

      pdf.save(
        `${characterName
          .toLowerCase()
          .replace(/\s+/g, '-')}-pattern-by-bambole.pdf`
      )
      onClose()
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" centerContent>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="2xl" fontWeight="bold">
              ¡{characterName} está listo para ser tejido!
            </Text>
          </ModalHeader>
          <ModalBody textAlign="center">
            <Text textAlign="center">
              Gracias por usar Bambole.
              <br />
              Ahora puedes descargar el patrón de tu personaje.
            </Text>
            <Button
              m={4}
              w="50%"
              colorScheme="blue"
              onClick={handleGeneratePDF}
            >
              Descargar patrón
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      {createPortal(
        <Box id="pdf-content" style={{ position: 'absolute', left: '-9999px' }}>
          <PDFContent
            character={{
              selectedBody,
              selectedItems,
            }}
            characterName={characterName}
          />
        </Box>,
        document.body
      )}
    </>
  )
}

export default DownloadModal
