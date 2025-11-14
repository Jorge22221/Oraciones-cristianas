
import type { Prayer, Category } from './types';

export const categories: Category[] = [
  { name: 'Oraciones de la Mañana', slug: 'oraciones-manana' },
  { name: 'Sanación', slug: 'sanacion' },
  { name: 'Fortaleza', slug: 'fortaleza' },
  { name: 'Gratitud', slug: 'gratitud' },
  { name: 'Familia', slug: 'familia' },
];

export const prayers: Prayer[] = [
  {
    id: 1,
    title: 'Oración de la Mañana para Empezar el Día con Gratitud',
    slug: 'oracion-manana-gratitud',
    category: 'Oraciones de la Mañana',
    categorySlug: 'oraciones-manana',
    image: 'https://picsum.photos/800/600?random=1',
    excerpt: 'Comienza tu día con un corazón agradecido, reconociendo las bendiciones de Dios desde el primer rayo de sol.',
    content: [
      'En este nuevo amanecer, me presento ante Ti, Padre Celestial, con un corazón rebosante de gratitud. Gracias por el don de la vida, por el descanso reparador y por la oportunidad de vivir un día más bajo tu amorosa mirada. Tu misericordia se renueva cada mañana, y por ello te alabo.',
      'Señor, te pido que tu luz ilumine mi camino hoy. Guía mis pasos, mis pensamientos y mis palabras para que todo lo que haga sea para tu gloria. Dame la sabiduría para tomar decisiones correctas, la fuerza para enfrentar los desafíos y la paciencia para con mis hermanos.',
      'Te entrego mis planes, mis anhelos y mis preocupaciones. Que se haga tu voluntad y no la mía, porque confío en que tus planes para mí son de bienestar y no de calamidad. Ayúdame a ser un instrumento de tu paz, a llevar amor donde haya odio y a sembrar esperanza donde reine la desesperación.',
      'Bendice a mi familia, a mis amigos y a todos aquellos que se crucen en mi camino. Protégenos de todo mal y permítenos sentir tu presencia constante a nuestro lado. Que al final de este día, pueda mirar atrás y ver tu mano obrando en cada detalle, y mi corazón se llene una vez más de gratitud. En el nombre de Jesús, Amén.'
    ],
    date: '2024-07-15',
    author: 'Admin'
  },
  {
    id: 2,
    title: 'Oración por Sanación Física y Espiritual',
    slug: 'oracion-sanacion-fisica-espiritual',
    category: 'Sanación',
    categorySlug: 'sanacion',
    image: 'https://picsum.photos/800/600?random=2',
    excerpt: 'Una plegaria sentida para pedir la intervención divina en la restauración del cuerpo, la mente y el espíritu.',
    content: [
      'Amado Padre, médico divino, acudo a Ti en busca de tu toque sanador. Conoces cada célula de mi cuerpo, cada pensamiento de mi mente y cada herida de mi alma. Te pido, Señor, que extiendas tu mano poderosa sobre mí y sobre todos los que sufren dolencias.',
      'Si es tu voluntad, restaura la salud de mi cuerpo. Limpia toda enfermedad, alivia todo dolor y fortalece mis miembros cansados. Pero más allá de la sanación física, anhelo la sanación de mi espíritu. Sáname del rencor, de la amargura, de la ansiedad y del miedo. Llena los vacíos de mi corazón con tu amor incondicional y tu paz que sobrepasa todo entendimiento.',
      'Ayúdame a aceptar con serenidad aquello que no puedo cambiar y a confiar en tu propósito perfecto, incluso en medio del sufrimiento. Que esta prueba me acerque más a Ti y me haga más compasivo con el dolor ajeno. Que mi fe no flaquee, sino que se fortalezca en la certeza de que nunca me abandonas.',
      'Te confío mi vida y mi salud, sabiendo que estás obrando para mi bien. Gracias, Señor, por escuchar mi oración. En el nombre de tu hijo amado, Jesucristo, mi sanador. Amén.'
    ],
    date: '2024-07-14',
    author: 'Admin'
  },
  {
    id: 3,
    title: 'Oración para Fortalecer la Fe en Tiempos de Dificultad',
    slug: 'oracion-fortalecer-fe-dificultad',
    category: 'Fortaleza',
    categorySlug: 'fortaleza',
    image: 'https://picsum.photos/800/600?random=3',
    excerpt: 'Cuando las tormentas de la vida azotan, esta oración es un ancla para el alma, pidiendo a Dios que aumente nuestra fe.',
    content: [
      'Señor Todopoderoso, en este momento de incertidumbre y prueba, mi fe se siente débil y mi corazón está turbado. Las olas de la adversidad amenazan con hundirme, y la oscuridad parece nublar mi visión. Por eso, clamo a Ti, mi roca y mi refugio, mi fortaleza en tiempos de angustia.',
      'Padre, te pido que aumentes mi fe. Ayúdame a recordar tus promesas, a rememorar las veces que me has sostenido en el pasado y a confiar en que tu poder es más grande que cualquier problema que yo enfrente. Perdóname por mis dudas y mis temores, y reemplázalos con una confianza inquebrantable en tu soberanía y tu amor por mí.',
      'Aunque no pueda ver el camino, ayúdame a caminar por fe y no por vista. Dame la fuerza para perseverar, la paciencia para esperar en tu tiempo perfecto y la esperanza para creer que después de la tormenta vendrá la calma. Que esta prueba no me aleje de Ti, sino que me una más estrechamente a tu corazón.',
      'Que mi vida sea un testimonio de tu fidelidad. Que otros puedan ver tu poder obrando en mi debilidad. Gracias, Señor, porque en Ti encuentro todo lo que necesito. Fortalece mi fe, te lo ruego en el precioso nombre de Jesús. Amén.'
    ],
    date: '2024-07-12',
    author: 'Admin'
  },
  {
    id: 4,
    title: 'Oración de Agradecimiento por las Bendiciones Diarias',
    slug: 'oracion-agradecimiento-bendiciones',
    category: 'Gratitud',
    categorySlug: 'gratitud',
    image: 'https://picsum.photos/800/600?random=4',
    excerpt: 'Una oración para cultivar un espíritu de gratitud, reconociendo los regalos grandes y pequeños que Dios nos da cada día.',
    content: [
        'Padre Celestial, hoy quiero detenerme no para pedir, sino para agradecer. Gracias por el sol que calienta, por el aire que respiro, por el alimento en mi mesa. Gracias por las bendiciones que a menudo doy por sentadas.',
        'Gracias por mi familia, por su amor y su apoyo. Gracias por mis amigos, que son un regalo en mi camino. Gracias por el trabajo que me permite proveer y crecer. Gracias por los desafíos que me hacen más fuerte y me enseñan a depender de Ti.',
        'Señor, ayúdame a tener un corazón siempre agradecido. Que mis ojos estén abiertos para ver tu bondad en cada detalle de mi vida. Que de mis labios brote siempre la alabanza, incluso en los momentos difíciles, porque sé que estás obrando todas las cosas para mi bien.',
        'Que mi gratitud se traduzca en acciones de amor y servicio hacia los demás. Que pueda compartir las bendiciones que he recibido y ser un reflejo de tu generosidad. Todo te lo agradezco en el nombre de Jesús. Amén.'
    ],
    date: '2024-07-10',
    author: 'Admin'
  }
];
