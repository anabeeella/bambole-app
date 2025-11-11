# Design Document - Eyes Category

## Overview

Este documento describe el diseño técnico para implementar la categoría "Ojos" en Bambole App. La implementación seguirá los patrones arquitectónicos existentes en la aplicación, manteniendo consistencia con las categorías actuales (Hocicos y Orejas). La solución se integrará sin modificar la arquitectura base del sistema, agregando únicamente los datos y assets necesarios para la nueva categoría.

## Architecture

### Current Architecture Analysis

La aplicación utiliza una arquitectura basada en componentes React con las siguientes características:

- **Data-Driven UI**: Los componentes leen de una estructura de datos centralizada (`characterParts` en `src/data/patterns.js`)
- **Component Composition**: Componentes reutilizables que se adaptan a diferentes categorías
- **State Management**: React hooks (useState) para manejar el estado local en CreatePage
- **Routing**: React Router para navegación entre páginas

### Integration Points

La nueva categoría "Ojos" se integrará en los siguientes puntos:

1. **Data Layer** (`src/data/patterns.js`): Agregar nueva entrada en el array `characterParts`
2. **Pattern Files** (`src/data/patterns/eyes.js`): Crear nuevo archivo con los datos de ojos
3. **Assets** (`src/assets/categories/eyes/`): Agregar imágenes de íconos y vistas previas
4. **Component Behavior**: Los componentes existentes automáticamente renderizarán la nueva categoría

## Components and Interfaces

### Affected Components

#### 1. CategorySelector Component

**Location**: `src/components/character-creator/CategorySelector.jsx`

**Current Behavior**:

- Filtra categorías excluyendo "Body"
- Mapea categorías a botones con íconos
- Maneja selección de categoría

**Required Changes**:

- **Ningún cambio necesario** - El componente ya está diseñado para ser data-driven y automáticamente incluirá la nueva categoría "Ojos" cuando se agregue a `characterParts`

**Design Decision**: Mantener el componente sin cambios aprovecha el diseño existente y reduce el riesgo de introducir bugs.

#### 2. ItemGrid Component

**Location**: `src/components/character-creator/ItemGrid.jsx`

**Current Behavior**:

- Muestra items de la categoría seleccionada
- Maneja selección/deselección de items
- Muestra estado visual de selección

**Required Changes**:

- **Ningún cambio necesario** - El componente es genérico y funciona con cualquier categoría que tenga la estructura de datos correcta

#### 3. CharacterPreview Component

**Location**: `src/components/character-creator/CharacterPreview.jsx`

**Current Behavior**:

- Muestra el cuerpo base del personaje
- Superpone capas de elementos seleccionados
- Usa posicionamiento absoluto para las capas

**Required Changes**:

- **Ningún cambio necesario** - El componente ya maneja múltiples capas y automáticamente renderizará los ojos cuando estén seleccionados

**Design Consideration**: El orden de las capas (z-index) se maneja por el orden de renderizado. Los ojos se renderizarán en el orden en que aparecen en el objeto `selectedItems`, lo cual es suficiente para la funcionalidad básica.

### Data Structure

#### Pattern Data Interface

Cada elemento de ojos seguirá la siguiente estructura:

```javascript
{
  id: string,              // Identificador único (ej: "eyes-1")
  name: string,            // Nombre descriptivo (ej: "Ojos redondos")
  icon: string,            // Ruta al ícono para ItemGrid
  previewImage: string,    // Ruta a la imagen de vista previa para CharacterPreview
  pattern: string,         // Patrón de crochet en formato HTML
  dimensions: {            // Información adicional (opcional)
    position: string,      // Posición sugerida
    rounds: string         // Vueltas donde colocar
  }
}
```

## Data Models

### Eyes Pattern File Structure

**File**: `src/data/patterns/eyes.js`

```javascript
const eyes = [
  {
    id: 'eyes-1',
    name: 'Ojos redondos',
    icon: 'src/assets/categories/eyes/eyes-1_icon.png',
    previewImage: 'src/assets/categories/eyes/eyes-1_prev.png',
    pattern: `
      <h2>Ojos redondos</h2>
      <p>Utilizar ojos de seguridad de 12mm o bordar los ojos.</p>
      <strong>Colocación:</strong> Entre las vueltas 15-16 de la cabeza, dejando 8-10 puntos de separación entre cada ojo.
      
      <strong>Si se bordan:</strong>
      <strong>1.</strong> Marcar la posición con alfileres
      <strong>2.</strong> Bordar con hilo negro en punto satinado
      <strong>3.</strong> Agregar un punto de luz blanco para dar brillo
    `,
    dimensions: {
      position: 'Entre vueltas 15-16',
      distance: '8-10 puntos',
    },
  },
  {
    id: 'eyes-2',
    name: 'Ojos ovalados',
    icon: 'src/assets/categories/eyes/eyes-2_icon.png',
    previewImage: 'src/assets/categories/eyes/eyes-2_prev.png',
    pattern: `
      <h2>Ojos ovalados</h2>
      <p>Utilizar ojos de seguridad ovalados de 10x14mm o bordar los ojos.</p>
      <strong>Colocación:</strong> Entre las vueltas 14-17 de la cabeza, dejando 9-11 puntos de separación entre cada ojo.
      
      <strong>Si se bordan:</strong>
      <strong>1.</strong> Marcar la posición con alfileres
      <strong>2.</strong> Bordar con hilo negro en forma ovalada
      <strong>3.</strong> Agregar detalles de pestañas si se desea
    `,
    dimensions: {
      position: 'Entre vueltas 14-17',
      distance: '9-11 puntos',
    },
  },
]

export default eyes
```

### Updated characterParts Structure

**File**: `src/data/patterns.js`

Se agregará una nueva entrada al array `characterParts`:

```javascript
{
  category: 'Ojos',
  items: Array.isArray(eyes)
    ? eyes
    : [eyes].filter(Boolean).map(item => ({
        id: item.id,
        name: item.name || `Ojos ${item.id}`,
        icon: item.icon || `src/assets/categories/eyes/eyes-${item.id}_icon.png`,
        previewImage: item.previewImage || `src/assets/categories/eyes/eyes-${item.id}_prev.png`,
        pattern: item.pattern,
        dimensions: item.dimensions
      }))
}
```

**Position in Array**: La categoría "Ojos" se agregará después de "Body" y antes de "Hocicos" para mantener un orden lógico (Cuerpo → Ojos → Hocico → Orejas).

## Error Handling

### Image Loading Failures

**Scenario**: Las imágenes de ojos no se cargan correctamente

**Current Handling**: El componente ItemGrid ya incluye un fallback:

```jsx
fallback={
  <Box p={4} textAlign="center" bg="gray.50">
    Loading...
  </Box>
}
```

**Design Decision**: Mantener el comportamiento existente. No se requieren cambios adicionales.

### Missing Pattern Data

**Scenario**: Un elemento de ojos no tiene patrón definido

**Handling Strategy**:

- Validar que todos los elementos de ojos incluyan un patrón antes de agregar a producción
- El sistema actual no valida patrones en runtime, lo cual es aceptable para esta fase

### Category Selection Edge Cases

**Scenario**: Usuario selecciona ojos y luego cambia de categoría

**Current Behavior**: El estado se mantiene en `selectedItems` usando el `categoryId` como clave

**Design Decision**: No se requieren cambios. El comportamiento actual es correcto.

## Testing Strategy

### Manual Testing Checklist

#### Visual Testing

1. **Category Selector Display**

   - Verificar que el botón "Ojos" aparece en el Category Selector
   - Verificar que el ícono se muestra correctamente
   - Verificar que el botón tiene el mismo estilo que las otras categorías

2. **Item Grid Display**

   - Seleccionar la categoría "Ojos"
   - Verificar que se muestran todas las opciones de ojos
   - Verificar que los íconos se cargan correctamente
   - Verificar que el hover funciona correctamente

3. **Selection Behavior**

   - Hacer clic en una opción de ojos
   - Verificar que se aplica el borde negro y sombra
   - Hacer clic nuevamente para deseleccionar
   - Verificar que se remueve el resaltado

4. **Character Preview**

   - Seleccionar una opción de ojos
   - Verificar que los ojos aparecen en el Character Preview
   - Verificar que la posición es correcta sobre el cuerpo
   - Seleccionar diferentes cuerpos y verificar que los ojos se mantienen

5. **Multi-Category Integration**

   - Seleccionar ojos, hocico y orejas
   - Verificar que todas las capas se muestran correctamente
   - Verificar que no hay conflictos visuales

6. **State Persistence**

   - Seleccionar ojos y otros elementos
   - Hacer clic en "Preview"
   - Verificar que los ojos aparecen en la página de vista previa
   - Verificar que el patrón de ojos está incluido

7. **Reset Functionality**
   - Seleccionar varios elementos incluyendo ojos
   - Hacer clic en "Start again"
   - Verificar que todos los elementos se limpian, incluyendo los ojos

### Browser Testing

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Responsive design en dispositivos móviles

### Data Validation

- Verificar que todas las rutas de imágenes son correctas
- Verificar que los patrones están en formato HTML válido
- Verificar que la estructura de datos es consistente

## Implementation Notes

### File Organization

```
src/
├── assets/
│   └── categories/
│       └── eyes/
│           ├── eyes-1_icon.png
│           ├── eyes-1_prev.png
│           ├── eyes-2_icon.png
│           └── eyes-2_prev.png
├── data/
│   ├── patterns/
│   │   └── eyes.js (NUEVO)
│   └── patterns.js (MODIFICAR)
```

### Asset Requirements

**Icon Images** (`*_icon.png`):

- Dimensiones recomendadas: 100x100px
- Formato: PNG con transparencia
- Contenido: Vista simplificada del estilo de ojos
- Fondo: Transparente

**Preview Images** (`*_prev.png`):

- Dimensiones: Deben coincidir con las dimensiones de las imágenes de vista previa de cuerpo
- Formato: PNG con transparencia
- Contenido: Ojos posicionados correctamente para superponerse en el cuerpo
- Fondo: Transparente
- Alineación: Los ojos deben estar posicionados donde aparecerían en la cabeza del personaje

### Pattern Content Guidelines

Los patrones de ojos deben incluir:

1. Título descriptivo en `<h2>`
2. Tipo de ojos de seguridad recomendados (tamaño en mm)
3. Instrucciones de colocación (vueltas y separación)
4. Alternativa de bordado con pasos numerados
5. Formato HTML consistente con otros patrones

### Z-Index and Layer Ordering

**Current Behavior**: Las capas se renderizan en el orden en que aparecen en el objeto `selectedItems`

**Design Decision**: No implementar z-index explícito en esta fase. El orden natural de renderizado es suficiente. Si en el futuro se requiere control específico del orden de capas, se puede agregar una propiedad `zIndex` a cada categoría.

## Future Enhancements

Estas mejoras no son parte del alcance actual pero se documentan para referencia futura:

1. **Color Customization**: Permitir cambiar el color de los ojos
2. **Position Adjustment**: Permitir al usuario ajustar la posición de los ojos manualmente
3. **Size Variants**: Ofrecer diferentes tamaños de ojos para el mismo estilo
4. **Animated Preview**: Agregar animaciones sutiles a los ojos (parpadeo)
5. **3D Visualization**: Integrar vista 3D del personaje completo
