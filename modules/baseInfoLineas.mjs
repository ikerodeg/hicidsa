const lineaBaseInfo_OBJ = {
  cs_almazora: {
    info: {
      name: "Castellón - Almazora",
      value: "Castellón<br>⩔<br>Almazora",
    },
    maquina: {
      codeLineaLabo: "1021",
      codeLineaIni: "00",
      bInterUrbano: "F3",
      bInterUrbanoPrec: "1,55€",
      bUrbano: "F2",
      bUrbanoPrec: "1,20€",
      bJubilados: "F4",
      bJubiladosPrec: "1,00€",
      bhasta7: "F2",
      bhasta7Prec: "0€",
      bmenores: " - ",
      bmenoresPrec: "0€",
      bTransbordo: " + ",
      bTransbordoPrec: "0€",
      bDescGeneral: " * ",
      bDescGeneralPrec: "1,10€",
      bDescEspecial: " • ",
      bDescEspecialPrec: "0,75€",
      observaciones:
        "Dirección Castellón antes parada 'Barranquet' pulsar ^<br>Dirección Almazora antes parada 'Barranquet' pulsar ^",
    },
    rutas: {
      laborables: {
        value: "Laborables",
        buses: {
          bus_1: {
            value: "Bus 1",
            turno: {
              manana: {
                value: "Mañana",
                lgInicio: "Pl. Juez Borrull<br>[Castellón]",
                lgFin: "Pl. Sta. Isabel<br>[Almazora]",
                lgRelevo: "Grapa",
                hrInicio: "07:00",
                hrFinal: "00:00",
                hrRelevo: "13:45",
                horarios: ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00'],
                parteTrabajo: {
                  hrInicio: "00:00",
                  hrFin: "00:00",
                  hrNoctur: "",
                  hrFestivo: "",
                  pluses: ["plus perceptor"],
                },
              },
              mediodia: {
                value: "Mediodia",
                lgInicio: "Pl. Juez Borrull<br>[Castellón]",
                lgFin: "Pl. Sta. Isabel<br>[Almazora]",
                lgRelevo: "Grapa",
                hrInicio: "00:00",
                hrFinal: "00:00",
                parteTrabajo: {
                  hrInicio: "00:00",
                  hrFin: "00:00",
                  hrNoctur: "",
                  hrFestivo: "",
                  plusPerceptor: "",
                },
              },
            }
          },
          bus_2: {
            value: "Bus 2",
            turno: {
              manana: {
                value: "Mañana",
                lgInicio: "Pl. Juez Borrull<br>[Castellón]",
                lgFin: "Pl. Sta. Isabel<br>[Almazora]",
                lgRelevo: "Grapa",
                hrInicio: "00:00",
                hrFinal: "00:00",
                parteTrabajo: {
                  hrInicio: "00:00",
                  hrFin: "00:00",
                  hrNoctur: "",
                  hrFestivo: "",
                  plusPerceptor: "",
                },
              },
              mediodia: {
                value: "Mediodia",
                lgInicio: "Pl. Juez Borrull<br>[Castellón]",
                lgFin: "Pl. Sta. Isabel<br>[Almazora]",
                lgRelevo: "Grapa",
                hrInicio: "00:00",
                hrFinal: "00:00",
                parteTrabajo: {
                  hrInicio: "00:00",
                  hrFin: "00:00",
                  hrNoctur: "",
                  hrFestivo: "",
                  plusPerceptor: "",
                },
              },
            }
          },
        }
      },
      findeFest: {
        value: "Fin de semana / Festivos",
        buses: {
          bus_1: {
            value: "Bus 1",
            turno: {
              manana: {
                value: "Mañana",
                lgInicio: "Pl. Juez Borrull<br>[Castellón]",
                lgFin: "Pl. Sta. Isabel<br>[Almazora]",
                lgRelevo: "Grapa",
                hrInicio: "00:00",
                hrFinal: "00:00",
                parteTrabajo: {
                  hrInicio: "00:00",
                  hrFin: "00:00",
                  hrNoctur: "",
                  hrFestivo: "",
                  plusPerceptor: "",
                },
              },
              mediodia: {
                value: "Mediodia",
                lgInicio: "Pl. Juez Borrull<br>[Castellón]",
                lgFin: "Pl. Sta. Isabel<br>[Almazora]",
                lgRelevo: "Grapa",
                hrInicio: "00:00",
                hrFinal: "00:00",
                parteTrabajo: {
                  hrInicio: "00:00",
                  hrFin: "00:00",
                  hrNoctur: "",
                  hrFestivo: "",
                  plusPerceptor: "",
                },
              },
            }
          },
          bus_2: {
            value: "Bus 2",
            turno: {
              manana: {
                value: "Mañana",
                lgInicio: "Pl. Juez Borrull<br>[Castellón]",
                lgFin: "Pl. Sta. Isabel<br>[Almazora]",
                lgRelevo: "Grapa",
                hrInicio: "00:00",
                hrFinal: "00:00",
                parteTrabajo: {
                  hrInicio: "00:00",
                  hrFin: "00:00",
                  hrNoctur: "",
                  hrFestivo: "",
                  plusPerceptor: "",
                },
              },
              mediodia: {
                value: "Mediodia",
                lgInicio: "Pl. Juez Borrull<br>[Castellón]",
                lgFin: "Pl. Sta. Isabel<br>[Almazora]",
                lgRelevo: "Grapa",
                hrInicio: "00:00",
                hrFinal: "00:00",
                parteTrabajo: {
                  hrInicio: "00:00",
                  hrFin: "00:00",
                  hrNoctur: "",
                  hrFestivo: "",
                  plusPerceptor: "",
                },
              },
            }
          },
        }
      },
    },
  },
  cs_burriana: {
    info: {
      name: "Castellón - Burriana",
    },
  },
  cs_villareal: {
    info: {
      name: "Castellón - Villareal",
    },
  },
  cs_grao: {
    info: {
      name: "Castellón - Grao",
    },
  },
};

export { lineaBaseInfo_OBJ };

/*

info: {
  name: "",
},
rutas: {
  ruta_r1: {
    value: 'Bus 1',
    turno: {
      entrada: {
        value: 'Turno mañana',
        hrEntrada:"",
        hrSalida: "",
      },
      salida: {
        value: 'Turno tarde',
        hrEntrada:"",
        hrSalida: "",
      },
    },
  },
}

*/
