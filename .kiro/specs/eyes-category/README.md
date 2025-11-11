# Eyes Category Feature Specification

## Overview

Esta especificación documenta la implementación de la categoría "Ojos" en Bambole App, una aplicación web de diseño de personajes de crochet (amigurumi).

## Feature Description

La categoría "Ojos" permite a los usuarios seleccionar y personalizar los ojos de sus personajes de crochet. Los usuarios podrán:

- Seleccionar la categoría "Ojos" desde el selector de categorías
- Elegir entre diferentes estilos de ojos (redondos, ovalados, etc.)
- Ver una vista previa en tiempo real de los ojos en su personaje
- Obtener patrones de crochet detallados para tejer los ojos seleccionados

## Current Status

- ✅ Requirements: Completed and approved
- ✅ Design: Completed and approved
- ✅ Tasks: Completed and ready for implementation
- ⏳ Implementation: Not started

## Documents

- **[requirements.md](./requirements.md)**: Requisitos funcionales y criterios de aceptación
- **[design.md](./design.md)**: Diseño técnico y arquitectura de la solución
- **[tasks.md](./tasks.md)**: Plan de implementación con tareas específicas

## Quick Start

Para comenzar a trabajar en esta feature:

1. Lee los documentos en el siguiente orden:

   - requirements.md (para entender qué se necesita)
   - design.md (para entender cómo implementarlo)
   - tasks.md (para ver las tareas específicas)

2. Abre el archivo tasks.md en Kiro

3. Haz clic en "Start task" junto a la primera tarea para comenzar la implementación

## Key Technical Details

### Files to Create

- `src/data/patterns/eyes.js` - Datos de patrones de ojos
- `src/assets/categories/eyes/eyes-*_icon.png` - Íconos de ojos
- `src/assets/categories/eyes/eyes-*_prev.png` - Imágenes de vista previa

### Files to Modify

- `src/data/patterns.js` - Agregar categoría "Ojos" al array characterParts

### Components Affected

- CategorySelector (sin cambios necesarios - data-driven)
- ItemGrid (sin cambios necesarios - data-driven)
- CharacterPreview (sin cambios necesarios - data-driven)

## Dependencies

Esta feature no tiene dependencias externas. Utiliza la arquitectura y componentes existentes de la aplicación.

## Testing

La estrategia de testing incluye:

- Pruebas manuales de interfaz de usuario
- Verificación de integración con categorías existentes
- Validación de datos y rutas de imágenes
- Pruebas cross-browser (opcional)

## Related Features

Esta implementación sigue el mismo patrón que las categorías existentes:

- Hocicos (src/data/patterns/nose.js)
- Orejas (src/data/patterns/ear.js)

## Notes

- La implementación es completamente aditiva - no modifica componentes existentes
- Los componentes están diseñados para ser data-driven, por lo que automáticamente soportarán la nueva categoría
- Las imágenes deben tener fondo transparente para superponerse correctamente en el personaje
