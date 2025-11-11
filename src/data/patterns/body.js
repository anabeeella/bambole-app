const bodies = [
  {
    id: '1',
    name: 'Big Head',
    icon: 'src/assets/categories/body/body-1.png',
    previewImage: 'src/assets/categories/body/character-1.png',
    stitches: ['Medio punto (mp)', 'Punto en relieve por delante (prd)'],
    pattern: `
<h2>Cabeza</h2>
Cabeza, cuerpo y patas se tejen en una sola pieza. Iniciar con {body.color}:

<strong>1v)</strong> Anillo mágico de 6 mp [6]
<strong>2v)</strong> 1 aum en cada punto [12]
<strong>3v)</strong> (1 mp, 1 aum) repite 6 veces [18]
<strong>4v)</strong> (2 mp, 1 aum) repite 6 veces [24]
<strong>5v)</strong> (3 mp, 1 aum) repite 6 veces [30]
<strong>6v)</strong> (4 mp, 1 aum) repite 6 veces [36]
<strong>7v)</strong> (5 mp, 1 aum) repite 6 veces [42]
<strong>8v)</strong> (6 mp, 1 aum) repite 6 veces [48]
<strong>9v)</strong> (7 mp, 1 aum) repite 6 veces [54]
<strong>10v)</strong> (8 mp, 1 aum) repite 6 veces [60]
<strong>11v)</strong> (9 mp, 1 aum) repite 6 veces [66]
<strong>12v-25v)</strong> 1 mp en cada punto [66]
<strong>26v)</strong> (4 mp, 1 dism) repite 11 veces [55]
<strong>27v)</strong> (3 mp, 1 dism) repite 11 veces [44]
<strong>28v)</strong> (2 mp, 1 dism) repite 11 veces [33]

Colocar los ojos entre las vueltas {eyes.rounds}, dejando {eyes.distance} ptos entre los ojos.
{cheeks.union} los cachetes y el hocico. Bordar los detalles de la cara. 

<strong>29v)</strong> (1 mp, 1 dism) repite 11 veces [22]
<strong>30v)</strong> 1 mp en relieve por delante en cada punto de base [22]

Rellenar firmemente con vellón siliconado. No cortar el hilo.

<h2>Cuerpo</h2>
<strong>31v)</strong> (7 mp, 1 aum) repite 3 veces [24]
<strong>32v)</strong> (3 mp, 1 aum) repite 6 veces [30]
<strong>33v)</strong> (4 mp, 1 aum) repite 6 veces [36]
<strong>34v-36v)</strong> 1 mp en cada punto [36]
<strong>37v)</strong> (5 mp, 1 aum) repite 6 veces [42]
<strong>38v-46v)</strong> 1 mp en cada punto [42]

Dividir el tejido en dos grupos de 18 puntos cada uno, dejando 3 puntos de entrepierna por delante y 3 puntos por detrás. En este paso son muy útiles los marcadores de puntos. Ajustar manualmente los puntos (tejer o destejer) para que las patas queden bien centradas. Pueden tomar como referencia el centro teniendo en cuenta la ubicación de los ojos.

<h2>Patas</h2>
Unir con 1 mp el último punto de la pata trasera con el primer punto de la pata delantera. 

<strong>47v-50v)</strong> 1 mp en cada punto [18]
<strong>51v)</strong> (1 mp, 1 dism) repite 6 veces [12]
<strong>52v)</strong> 1 dism en cada punto [6]

Cortar el hilo dejando una hebra larga. Pasar con aguja de tapicería por el medio de cada punto y ajustar. Rematar y ocultar los excedentes.
Retomar el punto marcado para la otra pata y repetir el patrón.

Terminar de rellenar el cuerpo y las patas. 
Con una aguja de tapicería, cerrar la separación entre las patas cosiendo los 3 puntos centrales.

<h2>Brazos (x2)</h2>
Hacer dos con el mismo patrón. Con {body.color}:

<strong>1v)</strong> Anillo mágico de 8 mp [8]
<strong>2v)</strong> (3 mp, 1 dism) repite 2 veces [10]
<strong>3v - 4v)</strong>  1 mp en cada punto [10]
<strong>5v)</strong> 1 punto mota, 9 mp [10]
<strong>6v a 17v)</strong> 1 mp en cada punto [10]

Cortar el hilo dejando una hebra larga para coser al cuerpo.`,
  },
  {
    id: 'body-2',
    name: 'Small Head',
    icon: 'src/assets/categories/body/body-2.png',
    previewImage: 'src/assets/categories/body/character-2.png',
    stitches: ['Medio punto (mp)', 'Punto en relieve por delante (prd)'],
    pattern: `
    `,
  },
]

export default bodies
