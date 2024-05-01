const guias_IES_Betxi = {
  guia1: {
    id: "ruta_a",
    name: "Jessica",
    recogida: {
      entrada: {
        hrRecoEnt: "06:35",
        lgRecoEnt: "Parada Bus Auditori de Betxi",
      },
      salida: {
        hrRecoSal: "14:00",
        lgRecoSal: "va ella al instituto",
      },
    },
  },
  guia2: {
    id: "ruta_b",
    name: "Estefanía",
    recogida: {
      entrada: {
        hrRecoEnt: "06:45",
        lgRecoEnt: "Parada Bus Auditori Betxi",
      },
      salida: {
        variaDias: {
          rango1: {
            dias: "Lunes y Martes",
            hrRecoSal: "15:00",
            lgRecoSal: "Va ella al instituto",
          },
          rango2: {
            dias: "Miércoles, Jueves y Viernes",
            hrRecoSal: "14:00",
            lgRecoSal: "Va ella al instituto",
          },
        },
      },
    },
  },
  guia3: {
    id: "ruta_c",
    name: "Silvia",
    recogida: {
      entrada: {
        hrRecoEnt: "06:45",
        lgRecoEnt: "Parada Bus Auditori Betxi",
      },
      salida: {
        variaDias: {
          rango1: {
            dias: "Lunes, Martes y Miércoles",
            hrRecoSal: "15:00",
            lgRecoSal: "Va ella al instituto",
          },
          rango2: {
            dias: "Jueves y Viernes",
            hrRecoSal: "14:00",
            lgRecoSal: "Va ella al instituto",
          },
        },
      },
    },
  },
};

const guias_CEIP_ReginaViolant = {
  guia1: {
    id: "ruta_r1",
    name: "Verónica",
    recogida: {
      entrada: {
        hrRecoEnt: "07:50",
        lgRecoEnt: "En el IES Vila-Roja",
      },
      salida: {
        variaMeses: {
          rango1: {
            meses: "Septiembre y Junio",
            variaDias: {
              rango1: {
                dias: "Lunes y Martes",
                hrRecoSal: "14:45",
                lgRecoSal: "C/ San Fernando 44 [Parada bus Telepizza]",
              },
            },
          },
          rango2: {
            meses: "Resto del año",
            variaDias: {
              rango1: {
                dias: "Lunes, Martes y Jueves",
                hrRecoSal: "16:15",
                lgRecoSal: "Va ella al colegio",
              },
              rango2: {
                dias: "Miércoles y Viernes",
                hrRecoSal: "16:15",
                lgRecoSal: "C/ San Fernando 44 [Parada bus Telepizza]",
              },
            },
          },
        },
      },
    },
  },
  guia2: {
    id: "ruta_r2",
    name: "Elena Mar.",
    recogida: {
      entrada: {
        hrRecoEnt: "08:00",
        lgRecoEnt: "Va ella al colegio",
      },
      salida: {
        variaMeses: {
          rango1: {
            meses: "Septiembre y Junio",
            variaDias: {
              rango1: {
                dias: "Lunes, Martes y Jueves",
                hrRecoSal: "14:45",
                lgRecoSal: "Va ella al colegio",
              },
              rango2: {
                dias: "Miércoles y Viernes",
                hrRecoSal: "15:00",
                lgRecoSal: "Va ella al colegio",
              },
            },
          },
          rango2: {
            meses: "Resto del año",
            hrRecoSal: "16:10",
            lgRecoSal: "Va ella al colegio",
          },
        },
      },
    },
  },
  guia3: {
    id: "ruta_r3",
    name: "Elena Lob",
    recogida: {
      entrada: {
        hrRecoEnt: "07:50",
        lgRecoEnt: "En el IES Vila-Roja",
      },
      salida: {
        variaMeses: {
          rango1: {
            meses: "Septiembre y Junio",
            hrRecoSal: "14:50",
            lgRecoSal: "En el colegio",
          },
          rango2: {
            meses: "Resto del año",
            hrRecoSal: "16:20",
            lgRecoSal: "En el colegio",
          },
        },
      },
    },
  },
};

export { guias_CEIP_ReginaViolant, guias_IES_Betxi };
