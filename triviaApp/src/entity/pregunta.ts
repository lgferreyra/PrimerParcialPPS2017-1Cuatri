export class Pregunta {

    public pregunta : string;
    public opcion1 : string;
    public opcion2 : string;
    public opcion3 : string;
    public correcta : number;

    constructor(){

    }

    getPreguntas(){
        return {
            preguntas : {
                pregunta1 : {
                    pregunta : "¿De que color era el caballo blanco de San Martín?",
                    opciones : {
                        opcion1 : "Verde",
                        opcion2 : "Blanco",
                        opcion3 : "Violeta",
                    },
                    correcta : 2,
                },
                pregunta2 : {
                    pregunta : "¿Cuantos GB son 1 TB?",
                    opciones : {
                        opcion1 : "1024 GB",
                        opcion2 : "1000 GB",
                        opcion3 : "1000000 GB",
                    },
                    correcta : 1,
                },
                pregunta3 : {
                    pregunta : "¿Qué tipo de clase debe ser heredada obligatoriamente?",
                    opciones : {
                        opcion1 : "Virtual",
                        opcion2 : "Static",
                        opcion3 : "Abstract",
                    },
                    correcta : 3,
                },
            }
        }
    }

    loadPregunta(pregunta){
        this.pregunta = pregunta.pregunta;
        this.opcion1 = pregunta.opciones.opcion1;
        this.opcion2 = pregunta.opciones.opcion2;
        this.opcion3 = pregunta.opciones.opcion3;
        this.correcta = pregunta.correcta;
    }    
}