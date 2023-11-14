require("dotenv").config();
require("./../db");
const form_es = [
  {
    index: 1,
    name: "Miedos",
    subsections: [
      {
        index: 1,
        name: "Miedo a lo desconocido",
        questions: [
          "Vivo con un sentimiento de miedo inexplicable",
          "Tengo presentimientos negativos",
        ],
      },
      {
        index: 2,
        name: "Descontrol",
        questions: [
          "Reacciono de forma irracional y violenta",
          "Tengo miedo a perder el control de mi mismo",
        ],
      },
      {
        index: 3,
        name: "Miedo a lo conocido",
        questions: [
          "Soy tímido y a veces me avergüenzo",
          "Siento fobia o miedo a volar, arañas, oscuridad, muchedumbres, etc",
        ],
      },
      {
        index: 4,
        name: "Preocupación por los demás",
        questions: [
          "Me preocupo mucho por mis seres queridos e imagino que algo malo les puede pasar",
          "Me angustia y perturba los problemas de otras personas",
        ],
      },
      {
        index: 5,
        name: "Pánico momentáneo",
        questions: [
          "A veces siento pánico y terror",
          "Me quedo paralizado cuando tengo miedo",
        ],
      },
    ],
  },
  {
    index: 2,
    name: "Incertidumbre",
    subsections: [
      {
        index: 1,
        name: "Indeciso",
        questions: [
          "Busco consejo, desconfío de mi propia intuición",
          "A menudo cambio de opinión.",
        ],
      },
      {
        index: 2,
        name: "Pesimismo",
        questions: [
          "Me desanimo fácilmente cuando enfrento dificultades",
          "Soy pesimista cuando las cosas no evolucionan como lo había pensado",
        ],
      },
      {
        index: 3,
        name: "Desesperanza",
        questions: [
          "No tengo fe en que las cosas vayan a mejorar en mi vida",
          "Estoy deprimido, nada me puede sanar",
        ],
      },
      {
        index: 4,
        name: "Cansancio mental",
        questions: [
          "Me siento exhausto, me cuesta arrancar por las mañanas",
          "Aplazo para mañana lo que puedo hacer hoy, no estoy motivado",
        ],
      },
      {
        index: 5,
        name: "Bipolar",
        questions: [
          "Me resulta difícil elegir entre dos opciones.",
          "Cambio de humor de un extremo a otro: de la alegría a la tristeza, del optimismo al pesimismo…",
        ],
      },
      {
        index: 6,
        name: "Vocación",
        questions: [
          "Me cuesta decidir qué dirección tomar en mi vida.",
          "No encuentro sentido en mi vida, cambio de trabajo con frecuencia.",
        ],
      },
    ],
  },
  {
    index: 3,
    name: "Falta de interes por el presente",
    subsections: [
      {
        index: 1,
        name: "Repito errores",
        questions: [
          "No aprendo de mis experiencias, cometo los mismos errores",
          "Repito los mismos errores como elegir un mal compañero, quedarme un trabajo que no me agrada…",
        ],
      },
      {
        index: 2,
        name: "Disperso",
        questions: [
          "Sueño despierto alejado de la realidad",
          "Me cuesta concentrarme, estoy distraído",
        ],
      },
      {
        index: 3,
        name: "Nostalgia",
        questions: [
          "Pienso mas en el pasado que en el presente",
          "Pienso en lo que podría haber sido",
        ],
      },
      {
        index: 4,
        name: "Depresión",
        questions: [
          "Siento una profunda tristeza que va y viene",
          "Me deprimo sin ninguna razón y estoy desmotivado",
        ],
      },
      {
        index: 5,
        name: "Resignación",
        questions: [
          "Estoy resignado, no hay nada que hacer",
          "No rio ni lloro, no tengo ganas de hacer nada",
        ],
      },
      {
        index: 6,
        name: "Exhausto",
        questions: [
          "Siento que no puedo mas, estoy exhausto física y mentalmente",
          "He realizado muchas tareas y me siento sin energía.",
        ],
      },
      {
        index: 7,
        name: "Pensamientos recurrentes",
        questions: [
          "No puedo escapar de mis pensamientos, dándoles vuelta.",
          "Me cuesta concentrarme pienso en demasiadas cosas.",
        ],
      },
    ],
  },
  {
    index: 4,
    name: "Soledad",
    subsections: [
      {
        index: 1,
        name: "Vampirismo",
        questions: [
          "Hablo compulsivamente de mi mismo, de mis cosas y no escucho a los demás",
          "No me gusta estar solo y la gente me rehúye",
        ],
      },
      {
        index: 2,
        name: "Impaciencia",
        questions: [
          "No soporto a los lentos y prefiero trabajar solo",
          "Soy rápido, tengo agilidad mental, soy competente, eficaz y fácilmente irritable.",
        ],
      },
      {
        index: 3,
        name: "Reservado",
        questions: [
          "Soy reservado, parezco distante, pero se escuchar y respeto las ideas ajenas",
          "Oculto los problemas por orgullo, creo que no me pueden ayudar",
        ],
      },
    ],
  },
  {
    index: 5,
    name: "Hipersensibilidad al entorno",
    subsections: [
      {
        index: 1,
        name: "Mascar",
        questions: [
          "Escondo mis sentimientos detrás de una sonrisa",
          "No digo NO para evitar enfrentamientos, pero hare lo que quiero.",
        ],
      },
      {
        index: 2,
        name: "Servil",
        questions: [
          "Soy complaciente y con poca voluntad, no se poner limites",
          "Renuncio a mis propias necesidades para complacer a los demás",
        ],
      },
      {
        index: 3,
        name: "Malhumor",
        questions: [
          "Soy irritable, vengativo, desconfiado y siempre de malhumor",
          "Soy inseguro, celoso y sospecho de los demás",
        ],
      },
      {
        index: 4,
        name: "Indecisión y cambios",
        questions: [
          "Puedo cambiar de opinión para complacer a los que están conmigo.",
          "Estoy experimentando un cambio en mi vida, de vivienda, trabajo…",
        ],
      },
    ],
  },
  {
    index: 6,
    name: "Desaliento - Desesperanza",
    subsections: [
      {
        index: 1,
        name: "Limpieza",
        questions: [
          "Siempre estoy limpiando, estoy obsesionado con la limpieza",
          "Critico mi físico y siento vergüenza de mis defectos",
        ],
      },
      {
        index: 2,
        name: "Abrumado por responsabilidad",
        questions: [
          "Acepto mas responsabilidad que la que puedo hacerme cargo",
          "Pierdo la confianza momentáneamente por el exceso de trabajo",
        ],
      },
      {
        index: 3,
        name: "Inferioridad",
        questions: [
          "Tengo miedo a enfrentarme al riesgo, me siento inferior a los demás",
          "No intento nada por mi mismo, tengo miedo a fracasar",
        ],
      },
      {
        index: 4,
        name: "Luchador",
        questions: [
          "Cansado porque no atiendo las necesidades de descanso del cuerpo",
          "La vida es una lucha, por eso trabajo tanto",
        ],
      },
      {
        index: 5,
        name: "Sentimiento de culpa",
        questions: [
          "Estoy insatisfecho porque pienso que podría haberlo hecho mejor",
          "Me culpo por todo lo que sale mal",
        ],
      },
      {
        index: 6,
        name: "Trauma",
        questions: [
          "Estoy inconsolable ante una pérdida o trauma del pasado, bloqueo psicológico",
          "Estoy apático(a), indiferente con complejo de inferioridad y tristeza, me cuesta mostrar mis sentimientos",
        ],
      },
      {
        index: 7,
        name: "Angustia",
        questions: [
          "Siento que he tocado fondo.",
          "No veo salida a la situación estoy muy desesperada(o)",
        ],
      },
      {
        index: 8,
        name: "Resentimiento",
        questions: [
          "Los demás tienen la culpa de lo que me pasa",
          "Me siento herido, amargado y no lo merezco",
        ],
      },
    ],
  },
  {
    index: 7,
    name: "Sensibilidad hacia los demás",
    subsections: [
      {
        index: 1,
        name: "Intolerante",
        questions: [
          "Soy áspero con los demás y conmigo mismo",
          "Estoy cerrado en mí mismo porque he sufrido mucho, ahora soy crítico y arrogante",
        ],
      },
      {
        index: 2,
        name: "Manipulación",
        questions: [
          "Intento controlar a mis seres queridos, porque creo que es por su bien",
          "Espero que los demás se adapten a mis valores",
        ],
      },
      {
        index: 3,
        name: "Perfeccionista",
        questions: [
          "No me acepto tal como soy y me exijo mucho",
          "Cuando hago algo lo hago con rigor, soy perfeccionista",
        ],
      },
      {
        index: 4,
        name: "Liderazgo",
        questions: [
          "Trato de convencer con mis ideas a los demás",
          "Me entrego al trabajo hasta agotar mis energías y estoy dispuesto a establecer mi verdad",
        ],
      },
      {
        index: 5,
        name: "Autoritario",
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
