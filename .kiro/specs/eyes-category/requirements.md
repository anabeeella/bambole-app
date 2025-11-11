# Requirements Document

## Introduction

Bambole App es una aplicación web de diseño de personajes de crochet (amigurumi) que permite a los usuarios crear personajes personalizados mediante una interfaz de arrastrar y soltar. Los usuarios pueden seleccionar diferentes partes del cuerpo, accesorios y colores, visualizar el diseño en tiempo real, y generar patrones de crochet personalizados con instrucciones paso a paso. La aplicación incluye exportación de patrones en PDF, una biblioteca de materiales, y soporte multiidioma (inglés y español).

Este documento especifica los requisitos para agregar la categoría "Ojos" al selector de categorías, permitiendo a los usuarios personalizar los ojos de sus personajes de crochet.

## Glossary

- **Bambole App**: La aplicación web de diseño de personajes de crochet
- **Character Creator**: El módulo principal de la aplicación donde los usuarios diseñan sus personajes
- **Category Selector**: El componente de interfaz que muestra las categorías disponibles (Hocicos, Orejas, etc.)
- **Item Grid**: El componente que muestra los elementos disponibles dentro de una categoría seleccionada
- **Character Preview**: El componente que muestra la vista previa en tiempo real del personaje siendo diseñado
- **Pattern Data**: La estructura de datos que contiene la información de cada elemento (íconos, imágenes de vista previa, patrones de crochet)
- **Eyes Category**: La nueva categoría que permitirá a los usuarios seleccionar diferentes estilos de ojos para sus personajes

## Requirements

### Requirement 1

**User Story:** Como usuario de Bambole App, quiero poder seleccionar la categoría "Ojos" en el selector de categorías, para poder personalizar los ojos de mi personaje de crochet.

#### Acceptance Criteria

1. WHEN el usuario visualiza el Category Selector, THE Bambole App SHALL mostrar un botón para la categoría "Ojos" junto con las categorías existentes (Hocicos, Orejas)
2. WHEN el usuario hace clic en el botón de la categoría "Ojos", THE Bambole App SHALL actualizar el Item Grid para mostrar los elementos de ojos disponibles
3. THE Bambole App SHALL mantener el orden visual consistente de las categorías en el Category Selector
4. THE Bambole App SHALL utilizar un ícono representativo para la categoría "Ojos" que sea visualmente consistente con las otras categorías

### Requirement 2

**User Story:** Como usuario de Bambole App, quiero ver diferentes opciones de ojos disponibles en el Item Grid, para poder elegir el estilo de ojos que mejor se adapte a mi personaje.

#### Acceptance Criteria

1. WHEN la categoría "Ojos" está seleccionada, THE Bambole App SHALL mostrar al menos dos opciones diferentes de ojos en el Item Grid
2. THE Bambole App SHALL mostrar cada opción de ojos con un ícono de vista previa que represente claramente el estilo del ojo
3. WHEN el usuario hace clic en una opción de ojos, THE Bambole App SHALL resaltar visualmente el elemento seleccionado con un borde negro y sombra
4. WHEN el usuario hace clic en un ojo ya seleccionado, THE Bambole App SHALL deseleccionar el elemento y remover el resaltado visual

### Requirement 3

**User Story:** Como usuario de Bambole App, quiero ver los ojos seleccionados en la vista previa del personaje, para poder visualizar cómo se verá mi diseño final.

#### Acceptance Criteria

1. WHEN el usuario selecciona una opción de ojos, THE Bambole App SHALL mostrar la imagen de vista previa de los ojos superpuesta en el Character Preview
2. THE Bambole App SHALL posicionar los ojos correctamente sobre el cuerpo del personaje en la ubicación apropiada
3. THE Bambole App SHALL mantener la capa de los ojos visible cuando el usuario selecciona otros elementos de diferentes categorías
4. WHEN el usuario deselecciona los ojos, THE Bambole App SHALL remover la capa de ojos del Character Preview

### Requirement 4

**User Story:** Como usuario de Bambole App, quiero que cada opción de ojos incluya su patrón de crochet correspondiente, para poder tejer los ojos según las instrucciones específicas.

#### Acceptance Criteria

1. THE Bambole App SHALL almacenar un patrón de crochet detallado para cada opción de ojos en la estructura de datos Pattern Data
2. THE Bambole App SHALL incluir en cada patrón de ojos las instrucciones de puntadas específicas en formato HTML
3. THE Bambole App SHALL mantener la consistencia del formato de patrones con las otras categorías existentes (Hocicos, Orejas)
4. THE Bambole App SHALL incluir información sobre dimensiones y ubicación de los ojos en la estructura de datos

### Requirement 5

**User Story:** Como usuario de Bambole App, quiero que la categoría "Ojos" funcione de manera consistente con las otras categorías, para tener una experiencia de usuario uniforme.

#### Acceptance Criteria

1. THE Bambole App SHALL aplicar el mismo comportamiento de selección/deselección para la categoría "Ojos" que para las categorías Hocicos y Orejas
2. THE Bambole App SHALL mantener la selección de ojos cuando el usuario cambia entre diferentes categorías
3. WHEN el usuario hace clic en el botón "Start again", THE Bambole App SHALL limpiar la selección de ojos junto con las otras selecciones
4. THE Bambole App SHALL incluir los datos de ojos seleccionados en el estado del personaje que se pasa a la página de vista previa

### Requirement 6

**User Story:** Como usuario de Bambole App, quiero que los archivos de imágenes de ojos estén organizados correctamente, para que la aplicación pueda cargarlos sin errores.

#### Acceptance Criteria

1. THE Bambole App SHALL almacenar los íconos de ojos en el directorio `src/assets/categories/eyes/` con el formato de nombre `eyes-{id}_icon.png`
2. THE Bambole App SHALL almacenar las imágenes de vista previa de ojos en el directorio `src/assets/categories/eyes/` con el formato de nombre `eyes-{id}_prev.png`
3. THE Bambole App SHALL cargar las imágenes de ojos utilizando rutas relativas consistentes con las otras categorías
4. WHEN una imagen de ojos no se puede cargar, THE Bambole App SHALL mostrar un indicador de carga o imagen de respaldo
