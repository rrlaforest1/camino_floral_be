require("dotenv").config();
require("./../db");
const form_es = [
  {
    index: 0,
    name: "Miedos",
    subsections: [
      {
        index: 0,
        name: "Miedo a lo desconocido",
        flower: "Alamo Temblon (Aspen)",
        questions: [
          "Vivo con un sentimiento de miedo inexplicable",
          "Tengo presentimientos negativos",
        ],
      },
      {
        index: 1,
        name: "Descontrol",
        flower: "Cerasifera (Cherry Plum)",
        questions: [
          "Reacciono de forma irracional y violenta",
          "Tengo miedo a perder el control de mi mismo",
        ],
      },
      {
        index: 2,
        name: "Miedo a lo conocido",
        flower: "Mimulo (Mimulus)",
        questions: [
          "Soy tímido y a veces me avergüenzo",
          "Siento fobia o miedo a volar, arañas, oscuridad, muchedumbres, etc",
        ],
      },
      {
        index: 3,
        name: "Preocupación por los demás",
        flower: "Castaño Rojo (Red Chestnut)",
        questions: [
          "Me preocupo mucho por mis seres queridos e imagino que algo malo les puede pasar",
          "Me angustia y perturba los problemas de otras personas",
        ],
      },
      {
        index: 4,
        name: "Pánico momentáneo",
        flower: "Heliantemo (Rock Rose)",
        questions: [
          "A veces siento pánico y terror",
          "Me quedo paralizado cuando tengo miedo",
        ],
      },
    ],
  },
  {
    index: 1,
    name: "Incertidumbre",
    subsections: [
      {
        index: 0,
        name: "Indeciso",
        flower: "Ceratostigma (Cerato)",
        questions: [
          "Busco consejo, desconfío de mi propia intuición",
          "A menudo cambio de opinión.",
        ],
      },
      {
        index: 1,
        name: "Pesimismo",
        flower: "Genciana (Gentian)",
        questions: [
          "Me desanimo fácilmente cuando enfrento dificultades",
          "Soy pesimista cuando las cosas no evolucionan como lo había pensado",
        ],
      },
      {
        index: 2,
        name: "Desesperanza",
        flower: "Aulaga (Gorse)",
        questions: [
          "No tengo fe en que las cosas vayan a mejorar en mi vida",
          "Estoy deprimido, nada me puede sanar",
        ],
      },
      {
        index: 3,
        name: "Cansancio mental",
        flower: "Hojarazo (Hornbeam)",
        questions: [
          "Me siento exhausto, me cuesta arrancar por las mañanas",
          "Aplazo para mañana lo que puedo hacer hoy, no estoy motivado",
        ],
      },
      {
        index: 4,
        name: "Bipolar",
        flower: "Scleratus (Sclerathus)",
        questions: [
          "Me resulta difícil elegir entre dos opciones.",
          "Cambio de humor de un extremo a otro: de la alegría a la tristeza, del optimismo al pesimismo…",
        ],
      },
      {
        index: 5,
        name: "Vocación",
        flower: "Avena Silvestre (Wild Oat)",
        questions: [
          "Me cuesta decidir qué dirección tomar en mi vida.",
          "No encuentro sentido en mi vida, cambio de trabajo con frecuencia.",
        ],
      },
    ],
  },
  {
    index: 2,
    name: "Falta de interes por el presente",
    subsections: [
      {
        index: 0,
        name: "Repito errores",
        flower: "Brote de Castaño Blanco (Chestnut But)",
        questions: [
          "No aprendo de mis experiencias, cometo los mismos errores",
          "Repito los mismos errores como elegir un mal compañero, quedarme un trabajo que no me agrada…",
        ],
      },
      {
        index: 1,
        name: "Disperso",
        flower: "Clemátide (Clematis)",
        questions: [
          "Sueño despierto alejado de la realidad",
          "Me cuesta concentrarme, estoy distraído",
        ],
      },
      {
        index: 2,
        name: "Nostalgia",
        flower: "Madreselva (Honeysuckle)",
        questions: [
          "Pienso mas en el pasado que en el presente",
          "Pienso en lo que podría haber sido",
        ],
      },
      {
        index: 3,
        name: "Depresión",
        flower: "Mostaza (Mustard)",
        questions: [
          "Siento una profunda tristeza que va y viene",
          "Me deprimo sin ninguna razón y estoy desmotivado",
        ],
      },
      {
        index: 4,
        name: "Resignación",
        flower: "Rosa Silvestre (Wild Rose)",
        questions: [
          "Estoy resignado, no hay nada que hacer",
          "No rio ni lloro, no tengo ganas de hacer nada",
        ],
      },
      {
        index: 5,
        name: "Exhausto",
        flower: "Olivo (Olive)",
        questions: [
          "Siento que no puedo mas, estoy exhausto física y mentalmente",
          "He realizado muchas tareas y me siento sin energía.",
        ],
      },
      {
        index: 6,
        name: "Pensamientos recurrentes",
        flower: "Castaño Blanco (White Chestnut)",
        questions: [
          "No puedo escapar de mis pensamientos, dándoles vuelta.",
          "Me cuesta concentrarme pienso en demasiadas cosas.",
        ],
      },
    ],
  },
  {
    index: 3,
    name: "Soledad",
    subsections: [
      {
        index: 0,
        name: "Vampirismo",
        flower: "Brezo (Heather)",
        questions: [
          "Hablo compulsivamente de mi mismo, de mis cosas y no escucho a los demás",
          "No me gusta estar solo y la gente me rehúye",
        ],
      },
      {
        index: 1,
        name: "Impaciencia",
        flower: "Impaciencia (Impatience)",
        questions: [
          "No soporto a los lentos y prefiero trabajar solo",
          "Soy rápido, tengo agilidad mental, soy competente, eficaz y fácilmente irritable.",
        ],
      },
      {
        index: 2,
        name: "Reservado",
        flower: "Violeta de Agua (WaterViolet)",
        questions: [
          "Soy reservado, parezco distante, pero se escuchar y respeto las ideas ajenas",
          "Oculto los problemas por orgullo, creo que no me pueden ayudar",
        ],
      },
    ],
  },
  {
    index: 4,
    name: "Hipersensibilidad al entorno",
    subsections: [
      {
        index: 0,
        name: "Mascar",
        flower: "Agrimonia (Agrimony)",
        questions: [
          "Escondo mis sentimientos detrás de una sonrisa",
          "No digo NO para evitar enfrentamientos, pero hare lo que quiero.",
        ],
      },
      {
        index: 1,
        name: "Servil",
        flower: "Centaura (Centaury)",
        questions: [
          "Soy complaciente y con poca voluntad, no se poner limites",
          "Renuncio a mis propias necesidades para complacer a los demás",
        ],
      },
      {
        index: 2,
        name: "Malhumor",
        flower: "Acebo (Holly)",
        questions: [
          "Soy irritable, vengativo, desconfiado y siempre de malhumor",
          "Soy inseguro, celoso y sospecho de los demás",
        ],
      },
      {
        index: 3,
        name: "Indecisión y cambios",
        flower: "Nogal (Walnut)",
        questions: [
          "Puedo cambiar de opinión para complacer a los que están conmigo.",
          "Estoy experimentando un cambio en mi vida, de vivienda, trabajo…",
        ],
      },
    ],
  },
  {
    index: 5,
    name: "Desaliento - Desesperanza",
    subsections: [
      {
        index: 0,
        name: "Limpieza",
        flower: "Manzano Silvestre (Crab Apple)",
        questions: [
          "Siempre estoy limpiando, estoy obsesionado con la limpieza",
          "Critico mi físico y siento vergüenza de mis defectos",
        ],
      },
      {
        index: 1,
        name: "Abrumado por responsabilidad",
        flower: "Olmo (Elm)",
        questions: [
          "Acepto mas responsabilidad que la que puedo hacerme cargo",
          "Pierdo la confianza momentáneamente por el exceso de trabajo",
        ],
      },
      {
        index: 2,
        name: "Inferioridad",
        flower: "Alerce (Larch)",
        questions: [
          "Tengo miedo a enfrentarme al riesgo, me siento inferior a los demás",
          "No intento nada por mi mismo, tengo miedo a fracasar",
        ],
      },
      {
        index: 3,
        name: "Luchador",
        flower: "Roble (Oak)",
        questions: [
          "Cansado porque no atiendo las necesidades de descanso del cuerpo",
          "La vida es una lucha, por eso trabajo tanto",
        ],
      },
      {
        index: 4,
        name: "Sentimiento de culpa",
        flower: "Pino Silvestre (Pine)",
        questions: [
          "Estoy insatisfecho porque pienso que podría haberlo hecho mejor",
          "Me culpo por todo lo que sale mal",
        ],
      },
      {
        index: 5,
        name: "Trauma",
        flower: "Estrella de Belén (Star of Bethlehem)",
        questions: [
          "Estoy inconsolable ante una pérdida o trauma del pasado, bloqueo psicológico",
          "Estoy apático(a), indiferente con complejo de inferioridad y tristeza, me cuesta mostrar mis sentimientos",
        ],
      },
      {
        index: 6,
        name: "Angustia",
        flower: "Castaño Dulce (Sweet Chestnut)",
        questions: [
          "Siento que he tocado fondo.",
          "No veo salida a la situación estoy muy desesperada(o)",
        ],
      },
      {
        index: 7,
        name: "Resentimiento",
        flower: "Sauce (Willow)",
        questions: [
          "Los demás tienen la culpa de lo que me pasa",
          "Me siento herido, amargado y no lo merezco",
        ],
      },
    ],
  },
  {
    index: 6,
    name: "Sensibilidad hacia los demás",
    subsections: [
      {
        index: 0,
        name: "Intolerante",
        flower: "Beech (Haya)",
        questions: [
          "Soy áspero con los demás y conmigo mismo",
          "Estoy cerrado en mí mismo porque he sufrido mucho, ahora soy crítico y arrogante",
        ],
      },
      {
        index: 1,
        name: "Manipulación",
        flower: "Achicoria (Chicory)",
        questions: [
          "Intento controlar a mis seres queridos, porque creo que es por su bien",
          "Espero que los demás se adapten a mis valores",
        ],
      },
      {
        index: 2,
        name: "Perfeccionista",
        flower: "Agua de Roca (Rock Water)",
        questions: [
          "No me acepto tal como soy y me exijo mucho",
          "Cuando hago algo lo hago con rigor, soy perfeccionista",
        ],
      },
      {
        index: 3,
        name: "Liderazgo",
        flower: "Verbena (Vervain)",
        questions: [
          "Trato de convencer con mis ideas a los demás",
          "Me entrego al trabajo hasta agotar mis energías y estoy dispuesto a establecer mi verdad",
        ],
      },
      {
        index: 4,
        name: "Autoritario",
        flower: "Vid (Vine)",
        questions: [
          "Siempre quiero imponer mi voluntad, soy prepotente",
          "Defiendo mis ideas porque creo saber mas que nadie y critico a todo el que piensa lo contrario.",
        ],
      },
    ],
  },
];

const Survey = require("./../models/Survey.model");

(async function () {
  try {
    const surveyToCreate = { categories: [] };
    form_es.forEach((cat, i) => {
      const newCat = {
        categoryIndex: cat.index,
        name: cat.name,
        subsections: cat.subsections,
      };
      surveyToCreate.categories.push(newCat);
    });
    Survey.create(surveyToCreate);
  } catch (error) {
    console.log(error);
  }
})();
