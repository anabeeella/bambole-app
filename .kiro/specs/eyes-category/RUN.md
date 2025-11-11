# How to Run and Test - Eyes Category

## Prerequisites

Antes de comenzar, asegúrate de tener:

- Node.js instalado (versión 18 o superior recomendada)
- npm o yarn como gestor de paquetes
- Un editor de código (VS Code recomendado)
- Navegador web moderno (Chrome, Firefox, o Safari)

## Installation

Si aún no has instalado las dependencias del proyecto:

```bash
npm install
```

## Development Server

Para ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## Testing the Eyes Category Feature

### Step 1: Verify Data Files

1. Confirma que existe el archivo `src/data/patterns/eyes.js`
2. Verifica que `src/data/patterns.js` incluye la importación y entrada de "Ojos"

### Step 2: Verify Assets

1. Navega a `src/assets/categories/eyes/`
2. Confirma que existen los archivos de imágenes:
   - `eyes-1_icon.png`
   - `eyes-1_prev.png`
   - `eyes-2_icon.png`
   - `eyes-2_prev.png`

### Step 3: Manual Testing Workflow

1. **Inicia el servidor de desarrollo**

   ```bash
   npm run dev
   ```

2. **Navega a la página de creación**

   - Abre `http://localhost:5173` en tu navegador
   - Haz clic en el botón para ir a la página de creación (Create/Crear)

3. **Prueba el Category Selector**

   - Verifica que aparece el botón "Ojos" en el selector de categorías
   - Verifica que el ícono se muestra correctamente
   - Haz clic en el botón "Ojos"

4. **Prueba el Item Grid**

   - Verifica que se muestran las opciones de ojos disponibles
   - Haz clic en una opción de ojos
   - Verifica que se aplica el borde negro y sombra al seleccionar
   - Haz clic nuevamente para deseleccionar
   - Verifica que se remueve el resaltado

5. **Prueba el Character Preview**

   - Selecciona una opción de ojos
   - Verifica que los ojos aparecen en la vista previa del personaje
   - Cambia entre diferentes cuerpos (body-1, body-2)
   - Verifica que los ojos se mantienen visibles

6. **Prueba la integración multi-categoría**

   - Selecciona ojos
   - Cambia a la categoría "Hocicos" y selecciona un hocico
   - Cambia a la categoría "Orejas" y selecciona unas orejas
   - Verifica que todas las capas se muestran correctamente en el preview

7. **Prueba el flujo completo**

   - Selecciona un cuerpo, ojos, hocico y orejas
   - Haz clic en el botón "Preview"
   - Verifica que el personaje completo aparece en la página de vista previa
   - Verifica que el patrón de ojos está incluido en la información

8. **Prueba el botón Reset**
   - Regresa a la página de creación
   - Selecciona varios elementos incluyendo ojos
   - Haz clic en "Start again"
   - Verifica que todas las selecciones se limpian

### Step 4: Visual Inspection

Verifica los siguientes aspectos visuales:

- [ ] Los íconos de ojos tienen el tamaño correcto
- [ ] Los íconos son claros y representativos
- [ ] Las imágenes de vista previa se alinean correctamente con el cuerpo
- [ ] No hay bordes blancos o artefactos en las imágenes
- [ ] El estilo del botón "Ojos" es consistente con otros botones
- [ ] La selección visual (borde y sombra) funciona correctamente

### Step 5: Browser Testing (Optional)

Prueba la funcionalidad en diferentes navegadores:

```bash
# Chrome
npm run dev
# Abre http://localhost:5173 en Chrome

# Firefox
# Abre http://localhost:5173 en Firefox

# Safari (macOS)
# Abre http://localhost:5173 en Safari
```

### Step 6: Responsive Testing (Optional)

1. Abre las herramientas de desarrollo del navegador (F12)
2. Activa el modo de dispositivo móvil
3. Prueba con diferentes tamaños de pantalla:
   - iPhone (375x667)
   - iPad (768x1024)
   - Desktop (1920x1080)

## Troubleshooting

### Images Not Loading

**Problema**: Las imágenes de ojos no se cargan

**Solución**:

1. Verifica que las rutas en `eyes.js` son correctas
2. Confirma que los archivos de imagen existen en `src/assets/categories/eyes/`
3. Verifica que los nombres de archivo coinciden exactamente (case-sensitive)
4. Revisa la consola del navegador para errores 404

### Category Not Appearing

**Problema**: La categoría "Ojos" no aparece en el selector

**Solución**:

1. Verifica que `src/data/patterns.js` importa correctamente `eyes.js`
2. Confirma que la entrada "Ojos" está en el array `characterParts`
3. Verifica que la categoría no es "Body" (se filtra automáticamente)
4. Revisa la consola del navegador para errores de JavaScript

### Preview Not Showing

**Problema**: Los ojos no aparecen en la vista previa

**Solución**:

1. Verifica que el campo `previewImage` está definido en los datos de ojos
2. Confirma que la imagen de vista previa existe
3. Verifica que la imagen tiene fondo transparente
4. Revisa que la imagen está posicionada correctamente

### Selection Not Working

**Problema**: No se puede seleccionar/deseleccionar ojos

**Solución**:

1. Verifica que cada opción de ojos tiene un `id` único
2. Revisa la consola del navegador para errores
3. Confirma que el componente ItemGrid está recibiendo los datos correctos

## Build for Production

Para crear una build de producción:

```bash
npm run build
```

Para previsualizar la build de producción:

```bash
npm run preview
```

## Code Quality

### Linting

Para verificar el código con ESLint:

```bash
npm run lint
```

### Formatting

Para formatear el código con Prettier:

```bash
npm run format
```

## Additional Commands

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Crear build de producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint

# Formatear código
npm run format
```

## Performance Testing

Para verificar el rendimiento de la aplicación:

1. Abre Chrome DevTools (F12)
2. Ve a la pestaña "Performance"
3. Haz clic en "Record"
4. Interactúa con la aplicación (selecciona categorías, items, etc.)
5. Detén la grabación
6. Analiza el timeline para identificar posibles cuellos de botella

## Next Steps

Una vez que todas las pruebas pasen exitosamente:

1. Documenta cualquier issue encontrado
2. Crea commits con mensajes descriptivos
3. Considera agregar más opciones de ojos si es necesario
4. Evalúa la posibilidad de agregar más categorías siguiendo el mismo patrón

## Support

Si encuentras problemas durante el testing:

1. Revisa la consola del navegador para errores
2. Verifica que todos los archivos están en las ubicaciones correctas
3. Confirma que las rutas de imágenes son correctas
4. Revisa la documentación en design.md para detalles técnicos
