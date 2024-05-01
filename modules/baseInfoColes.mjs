const coleBaseInfo_ARR = {
  'ies_betxi':  //COMPLETO
  {
    info: {
      name: "IES Betxi",
      address: "C/ Sant Francesc 2<br>[Betxi]",
      linkMaps: "https://maps.app.goo.gl/CfDCGPFZHd7TP4878",
      contact: "964738930",
    },
    rutas: {
      ruta_a: {
        value:  'Ruta A',
        turno: {
          entrada: {
            value: 'Turno mañana<br>(Entrada)',
            hrEntrada: '08:00',
            guia: {
              nameGuia: 'Jessica',
              hrRecoGuia: '06:45',
              lgRecoGuia: 'Auditorio/teatro<br>[Betxi]',
            },
          },
          salida: {
            value: 'Turno tarde<br>(Salida)',
            mes: {
              rangoMes1: {
                value: 'Todo el año',
                dias: {
                  rangoDias1: {
                    value: 'Todos los días',
                    hrSalida: '14:00',
                    guia: {
                      nameGuia: 'Jessica',
                      hrRecoGuia: '14:00',
                      lgRecoGuia: 'Va ella al instituto',
                    },
                  },

                },
              },
            },
          },
        },
      },
      ruta_b: {
        value:  'Ruta B',
        turno: {
          entrada: {
            value: 'Turno mañana<br>(Entrada)',
            hrEntrada: '08:00',
            guia: {
              nameGuia: 'Estefanía',
              hrRecoGuia: '06:45',
              lgRecoGuia: 'Auditorio/teatro<br>[Betxi]',
            },
          },
          salida: {
            value: 'Turno tarde<br>(Salida)',
            mes: {
              rangoMes1: {
                value: 'Todo el año',
                dias: {
                  rangoDias1: {
                    value: 'Lunes y Martes',
                    hrSalida: '15:00',
                    guia: {
                      nameGuia: 'Estefanía',
                      hrRecoGuia: '15:00',
                      lgRecoGuia: 'Va ella al Instituto',
                    },
                  },
                  rangoDias2: {
                    value: 'Miércoles, Jueves y Viernes',
                    hrSalida: '14:00',
                    guia: {
                      nameGuia: 'Estefanía',
                      hrRecoGuia: '14:00',
                      lgRecoGuia: 'Va ella al instituto',
                    },
                  },
                },
              },
            },
          },
        },
      },
      ruta_c: {
        value:  'Ruta C',
        turno: {
          entrada: {
            value: 'Turno mañana<br>(Entrada)',
            hrEntrada: '08:00',
            guia: {
              nameGuia: 'Silvia',
              hrRecoGuia: '06:45',
              lgRecoGuia: 'Auditorio/teatro<br>[Betxi]',
            },
          },
          salida: {
            value: 'Turno tarde<br>(Salida)',
            mes: {
              rangoMes1: {
                value: 'Todo el año',
                dias: {
                  rangoDias1: {
                    value: 'Lunes, Martes y Miércoles',
                    hrSalida: '15:00',
                    guia: {
                      nameGuia: 'Silvia Guirau',
                      hrRecoGuia: '15:00',
                      lgRecoGuia: 'Va ella al instituto',
                    },
                  },
                  rangoDias2: {
                    value: 'Jueves y Viernes',
                    hrSalida: '14:00',
                    guia: {
                      nameGuia: 'Silvia Guirau',
                      hrRecoGuia: '14:00',
                      lgRecoGuia: 'Va ella al instituto',
                    },
                  },
                },
              },
            },
          },
        },
      },
    }
  },
  'ceip_regina_violant': //R1
  {
    info: {
      name: "CEIP Regina Violant",
      address: "C/ San Ildefonso, 55<br>[Almassora]",
      linkMaps: "https://maps.app.goo.gl/nhP2ywpMmcKALRoD6",
      contact: "964738865",
    },
    rutas: {
      ruta_r1: {
        value: 'Ruta R1',
        turno: {
          entrada: {
            value: 'Turno mañana<br>(Entrada)',
            hrEntrada:'09:00',
            guia: {
              nameGuia: 'Verónica',
              hrRecoGuia: '07:50',
              lgRecoGuia: "En el IES VILA-ROJA",
            },
          },
          salida: {
            value: 'Turno tarde<br>(Salida)',
            mes: {
              rangoMes1: {
                value: 'Septiembre y Junio',
                dias: {
                  rangoDias1: {
                    value: 'Lunes y Martes',
                    hrSalida: '15:00',
                    guia: {
                      nameGuia: 'Verónica',
                      hrRecoGuia: '14:45',
                      lgRecoGuia: "C/ San Fernando 44 [Parada bus Telepizza]",
                    },

                  },
                  rangoDias2: {
                    value: 'Miércoles, Jueves y Viernes',
                    hrSalida: '16:30',
                    guia: {
                      nameGuia: 'Verónica',
                      hrRecoGuia: '16:15',
                      lgRecoGuia: "C/ San Fernando 44 [Parada bus Telepizza]",
                    },
                  },
                },
              },
              rangoMes2: {
                value: 'Resto del año',
                dias: {
                  rangoDias1: {
                    value: 'Lunes Martes y Jueves',
                    hrSalida: '16:30',
                    guia: {
                      nameGuia: 'Verónica',
                      hrRecoGuia: '16:15',
                      lgRecoGuia: "C/ San Fernando 44 [Parada bus Telepizza]",
                    },
                  },
                  rangoDias2: {
                    value: 'Miércoles y Viernes',
                    hrSalida: '16:30',
                    guia: {
                      nameGuia: 'Verónica',
                      hrRecoGuia: '16:15',
                      lgRecoGuia: "C/ San Fernando 44 [Parada bus Telepizza]",
                    },
                  },
                },
              },
            },
          },
        },
      },
      ruta_r2: {
        value: 'Ruta R2',
        turno: {
          entrada: {
            value: 'Turno mañana<br>(Entrada)',
            hrEntrada: '09:00',
            guia: {
              nameGuia: 'Elena Mar.',
              hrRecoGuia: '08:00',
              lgRecoGuia: "Viene del IES",
            },
          },
          salida: {
            value: 'Turno tarde<br>(Salida)',
            mes: {
              rangoMes1: {
                value: 'Septiembre y Junio',
                dias: {
                  rangoDias1: {
                    value: 'Lunes, Martes y Jueves',
                    hrSalida: '15:00',
                    guia: {
                      nameGuia: 'Elena Mar.',
                      hrRecoGuia: '14:45',
                      lgRecoGuia: "Va ella al colegio",
                    },
                  },
                  rangoDias2: {
                    value: 'Miércoles y Viernes',
                    hrSalida: '15:00',
                    guia: {
                      nameGuia: 'Elena Mar.',
                      hrRecoGuia: '15:00',
                      lgRecoGuia: "Va ella al colegio",
                    },
                  },
                },
              },
              rangoMes2: {
                value: 'Resto del año',
                dias: {
                  rangoDias1: {
                    value: 'Todos los días',
                    hrSalida: '16:30',
                    guia: {
                      nameGuia: 'Elena Mar.',
                      hrRecoGuia: '16:10',
                      lgRecoGuia: "Va ella al colegio",
                    },
                  },
                },
              },
            },
          },
        },
      },
      ruta_r3: {
        value: 'Ruta R3',
        turno: {
          entrada: {
            value: 'Turno mañana<br>(Entrada)',
            hrEntrada: '09:00',
            guia: {
              nameGuia: 'Elena Lob.',
              hrRecoGuia: '07:50',
              lgRecoGuia: "En el IES VILA-ROJA",
            },
          },
          salida: {
            value: 'Turno tarde<br>(Salida)',
            mes: {
              rangoMes1: {
                value: 'Septiembre y Junio',
                dias: {
                  rangoDias1: {
                    value: 'Todos los días',
                    hrSalida: '15:00',
                    guia: {
                      nameGuia: 'Elena Lob.',
                      hrRecoGuia: '14:50',
                      lgRecoGuia: "Va ella al colegio",
                    },
                  },
                },

              },
              rangoMes2: {
                value: 'Resto del año',
                dias: {
                  rangoDias1: {
                    value: 'Todos los días',
                    hrSalida: '16:30',
                    guia: {
                      nameGuia: 'Elena Mar.',
                      hrRecoGuia: '16:20',
                      lgRecoGuia: "Va ella al colegio",
                    },
                  },
                },

              },
            },
          },
        },
      },
    },
  },
  'ies_gilabert': { //R1
    info: {
      name: 'IES Gilabert',
      address: 'Av. Marqués Santa Cruz 42<br>[Nules]',
      linkMaps: 'https://maps.app.goo.gl/3y6tfPNisC3MsK1C8',
      contact: '964 73 92 95',
    },
    rutas: {
      ruta_r1: {
        value: 'Ruta R1',
        turno: {
          entrada: {
            value: 'Turno mañana<br>(Entrada)',
            hrEntrada: '08:00',
            guia: {
              nameGuia: 'Rosa',
              hrRecoGuia: '07:20',
              lgRecoGuia: 'Parada bus Ambulatorio<br>[Moncófar]',
            },
          },
          salida: {
            value: 'Turno tarde<br>(Salida)',
            mes: {
              rangoMes1: {
                value: 'Todo el año',
                dias: {
                  rangoDias1: {
                    value: 'Lunes, Martes y Jueves',
                    hrSalida: '15:15',
                    guia: {
                      nameGuia: 'Rosa',
                      hrRecoGuia: '15:00',
                      lgRecoGuia: "Va ella al Instituto",
                    },

                  },
                  rangoDias2: {
                    value: 'Miércoles y Viernes',
                    hrSalida: '14:15',
                    guia: {
                      nameGuia: 'Rosa',
                      hrRecoGuia: '14:00',
                      lgRecoGuia: "Va ella al Instituto",
                    },
                  },
                },
              },
            },
          },
        },
      }
    },
  },
  'ies_jaume_i' : {
    info: {
      name: 'IES Jaume I',
      address: 'Av. Transport 2<br>[Burriana]',
      linkMaps: 'https://maps.app.goo.gl/F5hXjrGikHhYgAya6',
      contact: '964 73 89 35',
    },
    rutas: {
      ruta_r1: {
        value: 'Ruta R1',
        turno: {
          entrada: {
            value: 'Turno mañana<br>(Entrada)',
            hrEntrada:'08:00',
            guia: {
              nameGuia: 'Rosana',
              hrRecoGuia: '07:30',
              lgRecoGuia: 'Parada Bus Rda. Poeta Calzada<br>Cafetería Molina',
            },
          },
          salida: {
            value: 'Turno tarde<br>(Salida)',
            mes: {
              rangoMes1: {
                value: 'Septiembre y Junio',
                dias: {
                  rangoDias1: {
                    value: 'Jueves y Viernes',
                    hrSalida: '14:00',
                    guia: {
                      nameGuia: 'Angela',
                      hrRecoGuia: '13:45',
                      lgRecoGuia: 'Va ella al instituto',
                    },
    
                  },
                  rangoDias2: {
                    value: 'Lunes, Martes y Miércoles',
                    hrSalida: '15:00',
                    guia: {
                      nameGuia: 'Rosana',
                      hrRecoGuia: '14:45',
                      lgRecoGuia: 'Parada Bus Rda. Poeta Calzada<br>Cafetería Molina',
                    },
                  },
                },
              },
              rangoMes2: {
                value: 'Resto del año',
                dias: {
                  rangoDias1: {
                    value: 'Lunes, Martes y Miércoles',
                    hrSalida: '15:00',
                    guia: {
                      nameGuia: 'Rosana',
                      hrRecoGuia: '14:45',
                      lgRecoGuia: 'Parada Bus Rda. Poeta Calzada<br>Cafetería Molina',
                    },
                  },
                  rangoDias2: {
                    value: 'Jueves y Viernes',
                    hrSalida: '14:00',
                    guia: {
                      nameGuia: 'Rosana',
                      hrRecoGuia: '13:45',
                      lgRecoGuia: 'Parada Bus Rda. Poeta Calzada<br>Cafetería Molina',
                    },
                  },
                },
              },
            },
          },
        },
      },
      ruta_r4: {
        "value": "Ruta R4",
        "turno": {
          "entrada": {
            "value": "Turno mañana<br>(Entrada)",
            "hrEntrada": "08:15",
            "guia": {
              "nameGuia": "Nuria",
              "hrRecoGuia": "07:20",
              "lgRecoGuia": "Va ella al Instituto"
            }
          },
          "salida": {
            "value": "Turno tarde<br>(Salida)",
            "mes": {
              "rangoMes1": {
                "value": "Todo el año",
                "dias": {
                  "rangoDias1": {
                    "value": "Martes, Jueves y Viernes",
                    "hrSalida": "14:10",
                    "guia": {
                      "nameGuia": "Nuria",
                      "hrRecoGuia": "14:10",
                      "lgRecoGuia": "Va ella al Instituto"
                    }
                  },
                  "rangoDias2": {
                    "value": "Lunes y Miércoles",
                    "hrSalida": "15:15",
                    "guia": {
                      "nameGuia": "Nuria",
                      "hrRecoGuia": "15:00",
                      "lgRecoGuia": "Va ella al Instituto"
                    }
                  }
                }
              },
            }
          }
        }
      },
    }
  },
  'ceip_penyagolosa' : {
    info: {
      name: 'CEIP Penyagolosa',
      address: 'C/ Rio Mijares 1<br>[Burriana]',
      linkMaps: 'https://maps.app.goo.gl/9Yuuj7sxzKodRhge9',
      contact: '964 73 83 55',
    },
    rutas: {
      ruta_r1: {
        value: 'Ruta R1',
        turno: {
          entrada: {
            value: 'Turno mañana<br>(Entrada)',
            hrEntrada:'09:00',
            guia: {
              nameGuia: 'Lourdes',
              hrRecoGuia: '08:00',
              lgRecoGuia: 'En el IES Jaume I<br>[Burriana]',
            },
          },
          salida: {
            value: 'Turno tarde<br>(Salida)',
            mes: {
              rangoMes1: {
                value: 'Septiembre y Junio',
                dias: {
                  rangoDias1: {
                    value: 'Todos los días',
                    hrSalida: '13:00',
                    guia: {
                      nameGuia: 'Lourdes',
                      hrRecoGuia: '12:45',
                      lgRecoGuia: 'Parada Bus IES Llombai<br>[Burriana]',
                    },
                  },
                },
              },
              rangoMes2: {
                value: 'Resto del año',
                dias: {
                  rangoDias1: {
                    value: 'Todos los días',
                    hrSalida: '17:00',
                    guia: {
                      nameGuia: 'Lourdes',
                      hrRecoGuia: '16:45',
                      lgRecoGuia: 'Parada Bus IES Llombai<br>[Burriana]',
                    },
                  },
                },
              },
            },
          },
        },
      },
    }
  },
  'ceip_mestre_canos' : {
    info: {
      name: 'CEIP Mestre Canos',
      address: 'Av. Del Mar 35<br>[Castellón]',
      linkMaps: 'https://maps.app.goo.gl/NQy22sJ8FsGhcoU29',
      contact: '636 41 81 48',
    },
    rutas: {
      ruta_r1: {
        value: 'Ruta R1',
        turno: {
          entrada: {
            value: 'Turno mañana<br>(Entrada)',
            hrEntrada:'09:00',
            guia: {
              nameGuia: 'Silvia',
              hrRecoGuia: '08:45',
              lgRecoGuia: 'Va ella al Colegio',
            },
          },
          salida: {
            value: 'Turno tarde<br>(Salida)',
            mes: {
              rangoMes1: {
                value: 'Septiembre',
                dias: {
                  rangoDias1: {
                    value: 'Todos los días',
                    hrSalida: '15:00',
                    guia: {
                      nameGuia: 'Silvia',
                      hrRecoGuia: '14:15',
                      lgRecoGuia: 'Av. Hermanos Bou 61 [Castellón]<br>Parada Bus Parque Infantil "La Fuente"',
                    },
                  },
                },
              },
              rangoMes2: {
                value: 'Resto del año',
                dias: {
                  rangoDias1: {
                    value: 'Todos los días',
                    hrSalida: '16:20',
                    guia: {
                      nameGuia: 'Silvia',
                      hrRecoGuia: '16:15',
                      lgRecoGuia: 'Av. Hermanos Bou 61 [Castellón]<br>Parada Bus Parque Infantil "La Fuente"',
                    },
                  },
                },
              },
            },
          },
        },
      },
    }
  },


};
export { coleBaseInfo_ARR };

//Plantilla nuevo colegio:

/*
info: {
  name: '',
  address: '',
  linkMaps: '',
  contact: '',
},
rutas: {
  ruta_r1: {
    value: '',
    turno: {
      entrada: {
        value: 'Turno mañana<br>(Entrada)',
        hrEntrada:'',
        guia: {
          nameGuia: '',
          hrRecoGuia: '',
          lgRecoGuia: '',
        },
      },
      salida: {
        value: 'Turno tarde<br>(Salida)',
        mes: {
          rangoMes1: {
            value: '',
            dias: {
              rangoDias1: {
                value: '',
                hrSalida: '',
                guia: {
                  nameGuia: '',
                  hrRecoGuia: '',
                  lgRecoGuia: '',
                },

              },
              rangoDias2: {
                value: '',
                hrSalida: '',
                guia: {
                  nameGuia: '',
                  hrRecoGuia: '',
                  lgRecoGuia: '',
                },
              },
            },
          },
          rangoMes2: {
            value: '',
            dias: {
              rangoDias1: {
                value: '',
                hrSalida: '',
                guia: {
                  nameGuia: '',
                  hrRecoGuia: '',
                  lgRecoGuia: '',
                },
              },
              rangoDias2: {
                value: '',
                hrSalida: '',
                guia: {
                  nameGuia: '',
                  hrRecoGuia: '',
                  lgRecoGuia: '',
                },
              },
            },
          },
        },
      },
    },
  },
}



*/