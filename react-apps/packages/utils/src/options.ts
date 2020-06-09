export interface Option<T = Posible | any> {
  id: number
  value: T
  label: string
}

type Posible =
  | SiNo
  | SiNoNc
  | NivelEducativo
  | Genero
  | UltimaVez
  | Frecuencia
  | Futbolista
  | FrecuenciaEvento
  | NivelCreencia
  | NivelSeguridad
  | AcuerdoDesacuerdo
  | Interes
  | Equipo
  | EquipoMadrePadre
  | Formulas
  | AzulRojo
  | EVPs
  | 'not-found'

export type EVPs =
  | 'seguro'
  | 'casi_seguro'
  | 'muy_probable'
  | 'creo_que_si'
  | 'probable'
  | 'puede_ser'
  | 'quizas'
  | 'igual_al_azar'
  | 'no_se'

export const evps_juego: Array<Option<EVPs>> = [
  { id: 1, label: 'Seguro', value: 'seguro' },
  { id: 2, label: 'Casi seguro', value: 'casi_seguro' },
  { id: 4, label: 'Muy probable', value: 'muy_probable' },
  { id: 6, label: 'Creo que sí', value: 'creo_que_si' },
  { id: 7, label: 'Probable', value: 'probable' },
  { id: 8, label: 'Puede ser', value: 'puede_ser' },
  { id: 9, label: 'Quizás', value: 'quizas' },
  { id: 10, label: 'Igual al azar', value: 'igual_al_azar' },
  { id: 11, label: 'No sé', value: 'no_se' },
]
export type AzulRojo = 'azul' | 'rojo'
export type SiNo = 'si' | 'no'
export type SiNoNc = SiNo | 'nc'
export type Futbolista = 'messi' | 'maradona'

export const azul_o_rojo: Array<Option<AzulRojo>> = [
  { id: 1, label: 'Azul', value: 'azul' },
  { id: 2, label: 'Rojo', value: 'rojo' },
]

export const futbolistas: Array<Option<Futbolista>> = [
  { id: 1, label: 'Messi', value: 'messi' },
  { id: 2, label: 'Maradona', value: 'maradona' },
]

export const sino: Array<Option<SiNo>> = [
  { id: 1, label: 'Sí', value: 'si' },
  { id: 2, label: 'No', value: 'no' },
]

export const sinonc: Array<Option<SiNoNc>> = [
  ...sino,
  { id: 3, label: 'Prefiero no contestar', value: 'nc' },
]

export type NivelEducativo =
  | 'primario-incompleto'
  | 'primario-completo'
  | 'secundario-incompleto'
  | 'secundario-completo'
  | 'universidad-terciario-incompleto'
  | 'terciario-completo'
  | 'universidad-completa'
  | 'posgrado-completo'

export const nivelesEducativos: Array<Option<NivelEducativo>> = [
  { id: 1, label: 'Primario Incompleto', value: 'primario-incompleto' },
  { id: 2, label: 'Primario Completo', value: 'primario-completo' },
  { id: 3, label: 'Secundario Incompleto', value: 'secundario-incompleto' },
  { id: 4, label: 'Secundario Completo', value: 'secundario-completo' },
  {
    id: 5,
    label: 'Universidad / Terciario Incompleto',
    value: 'universidad-terciario-incompleto',
  },
  { id: 6, label: 'Terciario Completo', value: 'terciario-completo' },
  { id: 7, label: 'Universidad Completa', value: 'universidad-completa' },
  { id: 8, label: 'Posgrado Completo', value: 'posgrado-completo' },
]

export type Formulas =
  | 'consenso-federal'
  | 'frente-de-izquierda'
  | 'frente-de-todos'
  | 'frente-nos'
  | 'juntos-por-el-cambio'
  | 'unite-por-la-libertad'
  | 'blanco'
  | 'anular'
  | 'no-lo-decidi-aun'
  | 'prefiero-no-decirlo'
  | 'no-voy-a-votar'
  | ''

export const formulasPresidenciales: Array<Option<Formulas>> = [
  { id: 2, label: 'Del Caño - Del Plá', value: 'frente-de-izquierda' },
  { id: 6, label: 'Espert - Rosales', value: 'unite-por-la-libertad' },
  { id: 3, label: 'Fernández - Fernández', value: 'frente-de-todos' },
  { id: 4, label: 'Gómez Centurión - Hotton', value: 'frente-nos' },
  { id: 1, label: 'Lavagna - Urtubey', value: 'consenso-federal' },
  { id: 5, label: 'Macri - Pichetto', value: 'juntos-por-el-cambio' },
  { id: -1, label: 'Otras Opciones', value: '', disabled: true } as Option<
    Formulas
  >,
  { id: 7, label: 'Voy a votar en blanco', value: 'blanco' },
  { id: 8, label: 'Voy a anular mi voto', value: 'anular' },
  { id: 9, label: 'No lo decidí aún', value: 'no-lo-decidi-aun' },
  { id: 10, label: 'Prefiero no decirlo', value: 'prefiero-no-decirlo' },
  { id: 11, label: 'No voy a votar', value: 'no-voy-a-votar' },
]

export const formulasPresidencialesPost: Array<Option<Formulas>> = [
  { id: 2, label: 'Del Caño - Del Plá', value: 'frente-de-izquierda' },
  { id: 6, label: 'Espert - Rosales', value: 'unite-por-la-libertad' },
  { id: 3, label: 'Fernández - Fernández', value: 'frente-de-todos' },
  { id: 4, label: 'Gómez Centurión - Hotton', value: 'frente-nos' },
  { id: 1, label: 'Lavagna - Urtubey', value: 'consenso-federal' },
  { id: 5, label: 'Macri - Pichetto', value: 'juntos-por-el-cambio' },
  { id: -1, label: 'Otras Opciones', value: '', disabled: true } as Option<
    Formulas
  >,
  { id: 7, label: 'Voté en blanco', value: 'blanco' },
  { id: 8, label: 'Anulé mi voto', value: 'anular' },
  // { id: 9, label: 'No lo decidí aún', value: 'no-lo-decidi-aun' },
  { id: 10, label: 'Prefiero no decirlo', value: 'prefiero-no-decirlo' },
  { id: 11, label: 'No voté', value: 'no-voy-a-votar' },
]

export type Genero =
  | 'mujer'
  | 'varon'
  | 'no-bin'
  | 'gen-fluido'
  | 'no-identifica'
  | 'no-decirlo'

export const generos: Array<Option<Genero>> = [
  { id: 1, label: 'Mujer', value: 'mujer' },
  { id: 2, label: 'Varón', value: 'varon' },
  { id: 3, label: 'No binario', value: 'no-bin' },
  { id: 4, label: 'Género Fluido', value: 'gen-fluido' },
  {
    id: 5,
    label: 'Ninguna de estas opciones me identifica',
    value: 'no-identifica',
  },
  { id: 6, label: 'Prefiero no decirlo', value: 'no-decirlo' },
]

export const generos_ingles: Array<Option<Genero>> = [
  { id: 1, label: 'Female', value: 'mujer' },
  { id: 2, label: 'Male', value: 'varon' },
  { id: 3, label: 'Non-binary', value: 'no-bin' },
  { id: 4, label: 'Gender fluid', value: 'gen-fluido' },
  {
    id: 5,
    label: 'A gender not listed here',
    value: 'no-identifica',
  },
  { id: 6, label: 'Rather not say', value: 'no-decirlo' },
]

export type UltimaVez = 'ult-3' | 'ult-7' | 'ult-30' | '12-meses' | 'mas-12'

export const ultimaVezConsumo: Array<Option<UltimaVez>> = [
  { id: 1, label: 'En los últimos 3 días', value: 'ult-3' },
  { id: 2, label: 'En los últimos 7 días', value: 'ult-7' },
  { id: 3, label: 'En los últimos 30 días', value: 'ult-30' },
  { id: 4, label: 'En los últimos 12 meses', value: '12-meses' },
  { id: 5, label: 'Hace más de 12 meses', value: 'mas-12' },
]

export type Frecuencia = 'muy-baja' | 'baja' | 'media' | 'alta' | 'muy-alta'

export const frecuencias: Array<Option<Frecuencia>> = [
  { id: 1, label: 'Muy baja', value: 'muy-baja' },
  { id: 2, label: 'Baja', value: 'baja' },
  { id: 3, label: 'Media', value: 'media' },
  { id: 4, label: 'Alta', value: 'alta' },
  { id: 5, label: 'Muy alta', value: 'muy-alta' },
]

export type FrecuenciaEvento =
  | 'todas-las-semanas'
  | 'casi-todas-las-semanas'
  | 'casi-todas-los-meses'
  | 'todos-los-años'
  | 'casi-nunca'
  | 'nunca'

export const frecuenciasEvento: Array<Option<FrecuenciaEvento>> = [
  { id: 1, label: 'Todas las semanas', value: 'todas-las-semanas' },
  { id: 2, label: 'Casi todas las semanas', value: 'casi-todas-las-semanas' },
  { id: 3, label: 'Casi todos los meses', value: 'casi-todas-los-meses' },
  { id: 4, label: 'Todos los años', value: 'todos-los-años' },
  { id: 5, label: 'Casi nunca', value: 'casi-nunca' },
  { id: 6, label: 'Nunca', value: 'nunca' },
]

export type NivelCreencia = 'no-creo' | 'no-creo-hay-algo' | 'creo'

export const nivelesCreencia: Array<Option<NivelCreencia>> = [
  { id: 1, label: 'No creo en Dios.', value: 'no-creo' },
  {
    id: 2,
    label:
      'No creo en Dios, pero sí creo en una entidad superior de algún tipo.',
    value: 'no-creo-hay-algo',
  },
  {
    id: 3,
    label: 'Creo en Dios.',
    value: 'creo',
  },
]

export type NivelSeguridad =
  | 'si-seguro'
  | 'si-probablemente'
  | 'no-probablemente-no'
  | 'no-estoy-seguro'

export const nivelesSeguridad: Array<Option<NivelSeguridad>> = [
  { id: 1, label: 'Sí, estoy seguro.', value: 'si-seguro' },
  { id: 2, label: 'Sí, probablemente.', value: 'si-probablemente' },
  { id: 3, label: 'No, probablemente no.', value: 'no-probablemente-no' },
  { id: 4, label: 'No, estoy seguro.', value: 'no-estoy-seguro' },
]

export type AcuerdoDesacuerdo =
  | 'compl-desacuerdo'
  | 'parci-desacuerdo'
  | 'ni-ni'
  | 'parci-acuerdo'
  | 'compl-acuedo'

export const acuerdoDesacuerdo: Array<Option<AcuerdoDesacuerdo>> = [
  { id: 1, label: 'Completamente en desacuerdo.', value: 'compl-desacuerdo' },
  { id: 2, label: 'Parcialmente en desacuerdo.', value: 'parci-desacuerdo' },
  { id: 3, label: 'No estoy de acuerdo ni en desacuerdo.', value: 'ni-ni' },
  { id: 4, label: 'Acuerdo parcialmente.', value: 'parci-acuerdo' },
  { id: 5, label: 'Acuerdo completamente.', value: 'compl-acuedo' },
]

export type Interes =
  | 'nada'
  | 'muy-poco'
  // | 'poco'
  | 'algo'
  // | 'bastante'
  | 'mucho'

// export const interes: Array<Option<Interes>> = [
//   { id: 1, label: 'Nada', value: 'nada' },
//   { id: 2, label: 'Muy Poco', value: 'muy-poco' },
//   { id: 3, label: 'Poco', value: 'poco' },
//   { id: 4, label: 'Algo', value: 'algo' },
//   { id: 5, label: 'Bastante', value: 'bastante' },
//   { id: 6, label: 'Mucho', value: 'mucho' },
// ]

export const interes: Array<Option<Interes>> = [
  { id: 1, label: 'Nada', value: 'nada' },
  { id: 2, label: 'Muy Poco', value: 'muy-poco' },
  { id: 3, label: 'Algo', value: 'algo' },
  { id: 4, label: 'Mucho', value: 'mucho' },
]

export type Equipo =
  | 'boca'
  | 'san-lorenzo'
  | 'talleres-cba'
  | 'arsenal'
  | 'argentinos'
  | 'lanus'
  | 'river'
  | 'newells'
  | 'velez'
  | 'independiente'
  | 'racing'
  | 'rosario-central'
  | 'patronato'
  | 'colon'
  | 'defensa-y-justicia'
  | 'estudiantes-lp'
  | 'huracan'
  | 'central-cordoba'
  | 'union'
  | 'banfield'
  | 'atletico-tucuman'
  | 'aldosivi'
  | 'godoy-cruz'
  | 'gimnasia-lp'
  | 'ningun-equipo'
  | 'not-found'
  | 'estudiantes-ba-B'
  | 'atlanta-B'
  | 'estudiantes-rc-B'
  | 'platense-B'
  | 'deportivo-moron-B'
  | 'independiente-rivadavia-B'
  | 'belgrano-cba-B'
  | 'brown-pm-B'
  | 'mitre-sde-B'
  | 'barracas-central-B'
  | 'temperley-B'
  | 'san-martin-sj-B'
  | 'agropecuario-B'
  | 'alvarado-B'
  | 'nueva-chicago-B'
  | 'ferro-B'
  | 'sarmiento-j-B'
  | 'san-martin-t-B'
  | 'def-de-belgrano-B'
  | 'quilmes-B'
  | 'atletico-rafaela-B'
  | 'riestra-B'
  | 'instituto-B'
  | 'santamarina-B'
  | 'tigre-B'
  | 'villa-dalmine-B'
  | 'gimnasia-m-B'
  | 'brown-a-B'
  | 'gimnasia-j-B'
  | 'all-boys-B'
  | 'chacarita-B'
  | 'almagro-B'

export const equipos: Array<Option<Equipo> & { extra: string }> = [
  { id: 1, label: 'Boca', value: 'boca', extra: 'Boca Juniors' },
  { id: 2, label: 'River', value: 'river', extra: 'River Plate' },
  {
    id: 3,
    label: 'Ningún Equipo',
    value: 'ningun-equipo',
    extra: 'Ningún Equipo',
  },
  {
    id: 4,
    label: 'Independiente',
    value: 'independiente',
    extra: 'Independiente',
  },
  { id: 5, label: 'Racing', value: 'racing', extra: 'Racing' },
  { id: 6, label: 'San Lorenzo', value: 'san-lorenzo', extra: 'San Lorenzo' },
  { id: 7, label: 'Huracan', value: 'huracan', extra: 'Huracan' },
  {
    id: 8,
    label: 'Rosario Central',
    value: 'rosario-central',
    extra: 'Rosario Central',
  },
  { id: 9, label: "Newell's", value: 'newells', extra: "Newell's" },
  {
    id: 10,
    label: 'Gimnasia (LP)',
    value: 'gimnasia-lp',
    extra: 'Gimnasia (LP)',
  },
  {
    id: 11,
    label: 'Estudiantes (LP)',
    value: 'estudiantes-lp',
    extra: 'Estudiantes (LP)',
  },
  { id: 12, label: 'Colón', value: 'colon', extra: 'Colón' },
  { id: 13, label: 'Unión', value: 'union', extra: 'Unión' },
  { id: 14, label: 'Aldosivi', value: 'aldosivi', extra: 'Aldosivi' },
  {
    id: 15,
    label: 'Talleres (Cba)',
    value: 'talleres-cba',
    extra: 'Talleres (Cba)',
  },
  { id: 16, label: 'Lanús', value: 'lanus', extra: 'Lanús' },
  { id: 17, label: 'Banfield', value: 'banfield', extra: 'Banfield' },
  { id: 18, label: 'Veléz', value: 'velez', extra: 'Veléz Sarsfield' },
  {
    id: 19,
    label: 'Argentinos',
    value: 'argentinos',
    extra: 'Argentinos Juniors',
  },
  { id: 20, label: 'Patronato', value: 'patronato', extra: 'Patronato' },
  {
    id: 21,
    label: 'Defensa y Justicia',
    value: 'defensa-y-justicia',
    extra: 'Defensa y Justicia',
  },
  {
    id: 22,
    label: 'Godoy Cruz (Mza)',
    value: 'godoy-cruz',
    extra: 'Godoy Cruz (Mza)',
  },
  {
    id: 23,
    label: 'Atlético Tucumán',
    value: 'atletico-tucuman',
    extra: 'Atlético Tucumán',
  },
  { id: 24, label: 'Arsenal', value: 'arsenal', extra: 'Arsenal de Sarandi' },
  {
    id: 25,
    label: 'Central Córdoba',
    value: 'central-cordoba',
    extra: 'Central Córdoba',
  },

  { id: 26, label: 'Estudiantes (RC)', value: 'estudiantes-rc-B', extra: '' },
  { id: 27, label: 'Platense', value: 'platense-B', extra: '' },
  { id: 28, label: 'Deportivo Moron', value: 'deportivo-moron-B', extra: '' },
  {
    id: 29,
    label: 'Independiente Rivadavia',
    value: 'independiente-rivadavia-B',
    extra: '',
  },
  { id: 30, label: 'Belgrano (Cba)', value: 'belgrano-cba-B', extra: '' },
  { id: 31, label: 'Brown (PM)', value: 'brown-pm-B', extra: '' },
  { id: 32, label: 'Mitre (SdE)', value: 'mitre-sde-B', extra: '' },
  { id: 33, label: 'Barracas Central', value: 'barracas-central-B', extra: '' },
  { id: 34, label: 'Temperley', value: 'temperley-B', extra: '' },
  { id: 35, label: 'San Martin (SJ)', value: 'san-martin-sj-B', extra: '' },
  { id: 36, label: 'Agropecuario', value: 'agropecuario-B', extra: '' },
  { id: 37, label: 'Alvarado', value: 'alvarado-B', extra: '' },
  { id: 38, label: 'Nueva Chicago', value: 'nueva-chicago-B', extra: '' },
  { id: 39, label: 'Ferro', value: 'ferro-B', extra: '' },
  { id: 40, label: 'Atlanta', value: 'atlanta-B', extra: '' },
  { id: 41, label: 'Estudiantes (BA)', value: 'estudiantes-ba-B', extra: '' },
  { id: 42, label: 'Sarmiento (J)', value: 'sarmiento-j-B', extra: '' },
  { id: 43, label: 'San Martin (T)', value: 'san-martin-t-B', extra: '' },
  {
    id: 44,
    label: 'Defensores de Belgrano',
    value: 'def-de-belgrano-B',
    extra: '',
  },
  { id: 45, label: 'Quilmes', value: 'quilmes-B', extra: '' },
  { id: 46, label: 'Atlético Rafaela', value: 'atletico-rafaela-B', extra: '' },
  { id: 47, label: 'Riestra', value: 'riestra-B', extra: '' },
  { id: 48, label: 'Instituto', value: 'instituto-B', extra: '' },
  { id: 49, label: 'Santamarina', value: 'santamarina-B', extra: '' },
  { id: 50, label: 'Tigre', value: 'tigre-B', extra: '' },
  { id: 51, label: 'Villa Dalmine', value: 'villa-dalmine-B', extra: '' },
  { id: 52, label: 'Gimnasia (M)', value: 'gimnasia-m-B', extra: '' },
  { id: 53, label: 'Brown (A)', value: 'brown-a-B', extra: '' },
  { id: 54, label: 'Gimnasia (J)', value: 'gimnasia-j-B', extra: '' },
  { id: 55, label: 'All Boys', value: 'all-boys-B', extra: '' },
  { id: 56, label: 'Chacarita', value: 'chacarita-B', extra: '' },
  { id: 57, label: 'Almagro', value: 'almagro-B', extra: '' },
]

export type EquipoMadrePadre =
  | 'boca'
  | 'river'
  | 'otro'
  | 'ningun-equipo'
  | 'ns-nc'

export const equiposMadrePadre: Array<Option<EquipoMadrePadre>> = [
  { id: 1, label: 'Boca', value: 'boca' },
  { id: 2, label: 'River', value: 'river' },
  { id: 3, label: 'Otro Equipo', value: 'otro' },
  { id: 4, label: 'Ningún Equipo', value: 'ningun-equipo' },
  { id: 5, label: 'Ns/Nc', value: 'ns-nc' },
]

export const paises: Array<Option> = [
  { id: 246, value: 'afganistán', label: 'Afganistán' },
  { id: 1, value: 'albania', label: 'Albania' },
  { id: 2, value: 'alemania', label: 'Alemania' },
  { id: 3, value: 'algeria', label: 'Algeria' },
  { id: 4, value: 'andorra', label: 'Andorra' },
  { id: 5, value: 'angola', label: 'Angola' },
  { id: 6, value: 'anguila', label: 'Anguila' },
  { id: 7, value: 'antártida', label: 'Antártida' },
  { id: 8, value: 'antigua_y_barbuda', label: 'Antigua y Barbuda' },
  {
    id: 9,
    value: 'antillas_neerlandesas',
    label: 'Antillas Neerlandesas',
  },
  { id: 10, value: 'arabia_saudita', label: 'Arabia Saudita' },
  { id: 11, value: 'argentina', label: 'Argentina' },
  { id: 12, value: 'armenia', label: 'Armenia' },
  { id: 13, value: 'aruba', label: 'Aruba' },
  { id: 14, value: 'australia', label: 'Australia' },
  { id: 15, value: 'austria', label: 'Austria' },
  { id: 16, value: 'azerbayán', label: 'Azerbayán' },
  { id: 17, value: 'bélgica', label: 'Bélgica' },
  { id: 18, value: 'bahamas', label: 'Bahamas' },
  { id: 19, value: 'bahrein', label: 'Bahrein' },
  { id: 20, value: 'bangladesh', label: 'Bangladesh' },
  { id: 21, value: 'barbados', label: 'Barbados' },
  { id: 22, value: 'belice', label: 'Belice' },
  { id: 23, value: 'benín', label: 'Benín' },
  { id: 24, value: 'bhután', label: 'Bhután' },
  { id: 25, value: 'bielorrusia', label: 'Bielorrusia' },
  { id: 26, value: 'birmania', label: 'Birmania' },
  { id: 27, value: 'bolivia', label: 'Bolivia' },
  {
    id: 28,
    value: 'bosnia_y_herzegovina',
    label: 'Bosnia y Herzegovina',
  },
  { id: 29, value: 'botsuana', label: 'Botsuana' },
  { id: 30, value: 'brasil', label: 'Brasil' },
  { id: 31, value: 'brunéi', label: 'Brunéi' },
  { id: 32, value: 'bulgaria', label: 'Bulgaria' },
  { id: 33, value: 'burkina_faso', label: 'Burkina Faso' },
  { id: 34, value: 'burundi', label: 'Burundi' },
  { id: 35, value: 'cabo_verde', label: 'Cabo Verde' },
  { id: 36, value: 'camboya', label: 'Camboya' },
  { id: 37, value: 'camerún', label: 'Camerún' },
  { id: 38, value: 'canadá', label: 'Canadá' },
  { id: 39, value: 'chad', label: 'Chad' },
  { id: 40, value: 'chile', label: 'Chile' },
  { id: 41, value: 'china', label: 'China' },
  { id: 42, value: 'chipre', label: 'Chipre' },
  { id: 43, value: 'ciudad_del_vaticano', label: 'Ciudad del Vaticano' },
  { id: 44, value: 'colombia', label: 'Colombia' },
  { id: 45, value: 'comoras', label: 'Comoras' },
  { id: 46, value: 'congo', label: 'Congo' },
  { id: 47, value: 'congo', label: 'Congo' },
  { id: 48, value: 'corea_del_norte', label: 'Corea del Norte' },
  { id: 49, value: 'corea_del_sur', label: 'Corea del Sur' },
  { id: 50, value: 'costa_de_marfil', label: 'Costa de Marfil' },
  { id: 51, value: 'costa_rica', label: 'Costa Rica' },
  { id: 52, value: 'croacia', label: 'Croacia' },
  { id: 53, value: 'cuba', label: 'Cuba' },
  { id: 54, value: 'dinamarca', label: 'Dinamarca' },
  { id: 55, value: 'dominica', label: 'Dominica' },
  { id: 56, value: 'ecuador', label: 'Ecuador' },
  { id: 57, value: 'egipto', label: 'Egipto' },
  { id: 58, value: 'el_salvador', label: 'El Salvador' },
  {
    id: 59,
    value: 'emiratos_árabes_unidos',
    label: 'Emiratos Árabes Unidos',
  },
  { id: 60, value: 'eritrea', label: 'Eritrea' },
  { id: 61, value: 'eslovaquia', label: 'Eslovaquia' },
  { id: 62, value: 'eslovenia', label: 'Eslovenia' },
  { id: 63, value: 'españa', label: 'España' },
  {
    id: 64,
    value: 'estados_unidos_de_américa',
    label: 'Estados Unidos de América',
  },
  { id: 65, value: 'estonia', label: 'Estonia' },
  { id: 66, value: 'etiopía', label: 'Etiopía' },
  { id: 67, value: 'filipinas', label: 'Filipinas' },
  { id: 68, value: 'finlandia', label: 'Finlandia' },
  { id: 69, value: 'fiyi', label: 'Fiyi' },
  { id: 70, value: 'francia', label: 'Francia' },
  { id: 71, value: 'gabón', label: 'Gabón' },
  { id: 72, value: 'gambia', label: 'Gambia' },
  { id: 73, value: 'georgia', label: 'Georgia' },
  { id: 74, value: 'ghana', label: 'Ghana' },
  { id: 75, value: 'gibraltar', label: 'Gibraltar' },
  { id: 76, value: 'granada', label: 'Granada' },
  { id: 77, value: 'grecia', label: 'Grecia' },
  { id: 78, value: 'groenlandia', label: 'Groenlandia' },
  { id: 79, value: 'guadalupe', label: 'Guadalupe' },
  { id: 80, value: 'guam', label: 'Guam' },
  { id: 81, value: 'guatemala', label: 'Guatemala' },
  { id: 82, value: 'guayana_francesa', label: 'Guayana Francesa' },
  { id: 83, value: 'guernsey', label: 'Guernsey' },
  { id: 84, value: 'guinea', label: 'Guinea' },
  { id: 85, value: 'guinea_ecuatorial', label: 'Guinea Ecuatorial' },
  { id: 86, value: 'guinea-bissau', label: 'Guinea-Bissau' },
  { id: 87, value: 'guyana', label: 'Guyana' },
  { id: 88, value: 'haití', label: 'Haití' },
  { id: 89, value: 'honduras', label: 'Honduras' },
  { id: 90, value: 'hong_kong', label: 'Hong kong' },
  { id: 91, value: 'hungría', label: 'Hungría' },
  { id: 92, value: 'india', label: 'India' },
  { id: 93, value: 'indonesia', label: 'Indonesia' },
  { id: 94, value: 'irán', label: 'Irán' },
  { id: 95, value: 'irak', label: 'Irak' },
  { id: 96, value: 'irlanda', label: 'Irlanda' },
  { id: 97, value: 'isla_bouvet', label: 'Isla Bouvet' },
  { id: 98, value: 'isla_de_man', label: 'Isla de Man' },
  { id: 99, value: 'isla_de_navidad', label: 'Isla de Navidad' },
  { id: 100, value: 'isla_norfolk', label: 'Isla Norfolk' },
  { id: 101, value: 'islandia', label: 'Islandia' },
  { id: 102, value: 'islas_bermudas', label: 'Islas Bermudas' },
  { id: 103, value: 'islas_caimán', label: 'Islas Caimán' },
  {
    id: 104,
    value: 'islas_cocos_(keeling)',
    label: 'Islas Cocos (Keeling)',
  },
  { id: 105, value: 'islas_cook', label: 'Islas Cook' },
  { id: 106, value: 'islas_de_åland', label: 'Islas de Åland' },
  { id: 107, value: 'islas_feroe', label: 'Islas Feroe' },
  {
    id: 108,
    value: 'islas_georgias_del_sur_y_sandwich_del_sur',
    label: 'Islas Georgias del Sur y Sandwich del Sur',
  },
  {
    id: 109,
    value: 'islas_heard_y_mcdonald',
    label: 'Islas Heard y McDonald',
  },
  { id: 110, value: 'islas_maldivas', label: 'Islas Maldivas' },
  { id: 111, value: 'islas_malvinas', label: 'Islas Malvinas' },
  {
    id: 112,
    value: 'islas_marianas_del_norte',
    label: 'Islas Marianas del Norte',
  },
  { id: 113, value: 'islas_marshall', label: 'Islas Marshall' },
  { id: 114, value: 'islas_pitcairn', label: 'Islas Pitcairn' },
  { id: 115, value: 'islas_salomón', label: 'Islas Salomón' },
  {
    id: 116,
    value: 'islas_turcas_y_caicos',
    label: 'Islas Turcas y Caicos',
  },
  {
    id: 117,
    value: 'islas_ultramarinas_menores_de_estados_unidos',
    label: 'Islas Ultramarinas Menores de Estados Unidos',
  },
  {
    id: 118,
    value: 'islas_vírgenes_británicas',
    label: 'Islas Vírgenes Británicas',
  },
  {
    id: 119,
    value: 'islas_vírgenes_de_los_estados_unidos',
    label: 'Islas Vírgenes de los Estados Unidos',
  },
  { id: 120, value: 'israel', label: 'Israel' },
  { id: 121, value: 'italia', label: 'Italia' },
  { id: 122, value: 'jamaica', label: 'Jamaica' },
  { id: 123, value: 'japón', label: 'Japón' },
  { id: 124, value: 'jersey', label: 'Jersey' },
  { id: 125, value: 'jordania', label: 'Jordania' },
  { id: 126, value: 'kazajistán', label: 'Kazajistán' },
  { id: 127, value: 'kenia', label: 'Kenia' },
  { id: 128, value: 'kirgizstán', label: 'Kirgizstán' },
  { id: 129, value: 'kiribati', label: 'Kiribati' },
  { id: 130, value: 'kuwait', label: 'Kuwait' },
  { id: 131, value: 'líbano', label: 'Líbano' },
  { id: 132, value: 'laos', label: 'Laos' },
  { id: 133, value: 'lesoto', label: 'Lesoto' },
  { id: 134, value: 'letonia', label: 'Letonia' },
  { id: 135, value: 'liberia', label: 'Liberia' },
  { id: 136, value: 'libia', label: 'Libia' },
  { id: 137, value: 'liechtenstein', label: 'Liechtenstein' },
  { id: 138, value: 'lituania', label: 'Lituania' },
  { id: 139, value: 'luxemburgo', label: 'Luxemburgo' },
  { id: 140, value: 'méxico', label: 'México' },
  { id: 141, value: 'mónaco', label: 'Mónaco' },
  { id: 142, value: 'macao', label: 'Macao' },
  { id: 143, value: 'macedônia', label: 'Macedônia' },
  { id: 144, value: 'madagascar', label: 'Madagascar' },
  { id: 145, value: 'malasia', label: 'Malasia' },
  { id: 146, value: 'malawi', label: 'Malawi' },
  { id: 147, value: 'mali', label: 'Mali' },
  { id: 148, value: 'malta', label: 'Malta' },
  { id: 149, value: 'marruecos', label: 'Marruecos' },
  { id: 150, value: 'martinica', label: 'Martinica' },
  { id: 151, value: 'mauricio', label: 'Mauricio' },
  { id: 152, value: 'mauritania', label: 'Mauritania' },
  { id: 153, value: 'mayotte', label: 'Mayotte' },
  { id: 154, value: 'micronesia', label: 'Micronesia' },
  { id: 155, value: 'moldavia', label: 'Moldavia' },
  { id: 156, value: 'mongolia', label: 'Mongolia' },
  { id: 157, value: 'montenegro', label: 'Montenegro' },
  { id: 158, value: 'montserrat', label: 'Montserrat' },
  { id: 159, value: 'mozambique', label: 'Mozambique' },
  { id: 160, value: 'namibia', label: 'Namibia' },
  { id: 161, value: 'nauru', label: 'Nauru' },
  { id: 162, value: 'nepal', label: 'Nepal' },
  { id: 163, value: 'nicaragua', label: 'Nicaragua' },
  { id: 164, value: 'niger', label: 'Niger' },
  { id: 165, value: 'nigeria', label: 'Nigeria' },
  { id: 166, value: 'niue', label: 'Niue' },
  { id: 167, value: 'noruega', label: 'Noruega' },
  { id: 168, value: 'nueva_caledonia', label: 'Nueva Caledonia' },
  { id: 169, value: 'nueva_zelanda', label: 'Nueva Zelanda' },
  { id: 170, value: 'omán', label: 'Omán' },
  { id: 171, value: 'países_bajos', label: 'Países Bajos' },
  { id: 172, value: 'pakistán', label: 'Pakistán' },
  { id: 173, value: 'palau', label: 'Palau' },
  { id: 174, value: 'palestina', label: 'Palestina' },
  { id: 175, value: 'panamá', label: 'Panamá' },
  { id: 176, value: 'papúa_nueva_guinea', label: 'Papúa Nueva Guinea' },
  { id: 177, value: 'paraguay', label: 'Paraguay' },
  { id: 178, value: 'perú', label: 'Perú' },
  { id: 179, value: 'polinesia_francesa', label: 'Polinesia Francesa' },
  { id: 180, value: 'polonia', label: 'Polonia' },
  { id: 181, value: 'portugal', label: 'Portugal' },
  { id: 182, value: 'puerto_rico', label: 'Puerto Rico' },
  { id: 183, value: 'qatar', label: 'Qatar' },
  { id: 184, value: 'reino_unido', label: 'Reino Unido' },
  {
    id: 185,
    value: 'república_centroafricana',
    label: 'República Centroafricana',
  },
  { id: 186, value: 'república_checa', label: 'República Checa' },
  {
    id: 187,
    value: 'república_dominicana',
    label: 'República Dominicana',
  },
  { id: 188, value: 'reunión', label: 'Reunión' },
  { id: 189, value: 'ruanda', label: 'Ruanda' },
  { id: 190, value: 'rumanía', label: 'Rumanía' },
  { id: 191, value: 'rusia', label: 'Rusia' },
  { id: 192, value: 'sahara_occidental', label: 'Sahara Occidental' },
  { id: 193, value: 'samoa', label: 'Samoa' },
  { id: 194, value: 'samoa_americana', label: 'Samoa Americana' },
  { id: 195, value: 'san_bartolomé', label: 'San Bartolomé' },
  {
    id: 196,
    value: 'san_cristóbal_y_nieves',
    label: 'San Cristóbal y Nieves',
  },
  { id: 197, value: 'san_marino', label: 'San Marino' },
  {
    id: 198,
    value: 'san_martín_(francia)',
    label: 'San Martín (Francia)',
  },
  {
    id: 199,
    value: 'san_pedro_y_miquelón',
    label: 'San Pedro y Miquelón',
  },
  {
    id: 200,
    value: 'san_vicente_y_las_granadinas',
    label: 'San Vicente y las Granadinas',
  },
  { id: 201, value: 'santa_elena', label: 'Santa Elena' },
  { id: 202, value: 'santa_lucía', label: 'Santa Lucía' },
  {
    id: 203,
    value: 'santo_tomé_y_príncipe',
    label: 'Santo Tomé y Príncipe',
  },
  { id: 204, value: 'senegal', label: 'Senegal' },
  { id: 205, value: 'serbia', label: 'Serbia' },
  { id: 206, value: 'seychelles', label: 'Seychelles' },
  { id: 207, value: 'sierra_leona', label: 'Sierra Leona' },
  { id: 208, value: 'singapur', label: 'Singapur' },
  { id: 209, value: 'siria', label: 'Siria' },
  { id: 210, value: 'somalia', label: 'Somalia' },
  { id: 211, value: 'sri_lanka', label: 'Sri lanka' },
  { id: 212, value: 'sudáfrica', label: 'Sudáfrica' },
  { id: 213, value: 'sudán', label: 'Sudán' },
  { id: 214, value: 'suecia', label: 'Suecia' },
  { id: 215, value: 'suiza', label: 'Suiza' },
  { id: 216, value: 'surinám', label: 'Surinám' },
  {
    id: 217,
    value: 'svalbard_y_jan_mayen',
    label: 'Svalbard y Jan Mayen',
  },
  { id: 218, value: 'swazilandia', label: 'Swazilandia' },
  { id: 219, value: 'tadjikistán', label: 'Tadjikistán' },
  { id: 220, value: 'tailandia', label: 'Tailandia' },
  { id: 221, value: 'taiwán', label: 'Taiwán' },
  { id: 222, value: 'tanzania', label: 'Tanzania' },
  {
    id: 223,
    value: 'territorio_británico_del_océano_índico',
    label: 'Territorio Británico del Océano Índico',
  },
  {
    id: 224,
    value: 'territorios_australes_y_antárticas_franceses',
    label: 'Territorios Australes y Antárticas Franceses',
  },
  { id: 225, value: 'timor_oriental', label: 'Timor Oriental' },
  { id: 226, value: 'togo', label: 'Togo' },
  { id: 227, value: 'tokelau', label: 'Tokelau' },
  { id: 228, value: 'tonga', label: 'Tonga' },
  { id: 229, value: 'trinidad_y_tobago', label: 'Trinidad y Tobago' },
  { id: 230, value: 'tunez', label: 'Tunez' },
  { id: 231, value: 'turkmenistán', label: 'Turkmenistán' },
  { id: 232, value: 'turquía', label: 'Turquía' },
  { id: 233, value: 'tuvalu', label: 'Tuvalu' },
  { id: 234, value: 'ucrania', label: 'Ucrania' },
  { id: 235, value: 'uganda', label: 'Uganda' },
  { id: 236, value: 'uruguay', label: 'Uruguay' },
  { id: 237, value: 'uzbekistán', label: 'Uzbekistán' },
  { id: 238, value: 'vanuatu', label: 'Vanuatu' },
  { id: 239, value: 'venezuela', label: 'Venezuela' },
  { id: 240, value: 'vietnam', label: 'Vietnam' },
  { id: 241, value: 'wallis_y_futuna', label: 'Wallis y Futuna' },
  { id: 242, value: 'yemen', label: 'Yemen' },
  { id: 243, value: 'yibuti', label: 'Yibuti' },
  { id: 244, value: 'zambia', label: 'Zambia' },
  { id: 245, value: 'zimbabue', label: 'Zimbabue' },
]

export const condiciones_previas: Array<Option> = [
  {
    id: 1,
    value: 'diabetes',
    label: 'Diabetes',
  },
  {
    id: 2,
    value: 'enfermedad_hepática_crónica',
    label: 'Enfermedad hepática crónica',
  },
  {
    id: 3,
    value: 'enfermedad_cardiovascular_incluyendo_hipertensión',
    label: 'Enfermedad cardiovascular (incluyendo hipertensión)',
  },
  {
    id: 4,
    value: 'enfermedad_renal_crónica',
    label: 'Enfermedad renal crónica',
  },
  {
    id: 5,
    value: 'enfermedad_neurológica_o_neuromuscular_crónica',
    label: 'Enfermedad neurológica o neuromuscular crónica',
  },
  {
    id: 6,
    value: 'inmunodeficiencia_incluyendo_vih',
    label: 'Inmunodeficiencia (incluyendo VIH)',
  },
  {
    id: 7,
    value: 'embarazo',
    label: 'Embarazo',
  },
  {
    id: 8,
    value: 'post_parto_menos_de_6_semanas',
    label: 'Post parto (menos de 6 semanas)',
  },
  {
    id: 9,
    value: 'cáncer',
    label: 'Cáncer',
  },
]

export const ingresos: Option[] = [
  { id: 1, label: 'Menos de $39.000', value: 'menos_de_39' },
  { id: 2, label: 'Entre $39.000 y $50.000', value: 'entre_39_y_50' },
  { id: 3, label: 'Entre $50.000 y $75.000', value: 'entre_50_y_75' },
  { id: 4, label: 'Entre $75.000 y $100.000', value: 'entre_75_y_100' },
  { id: 5, label: 'Entre $100.000 y $150.000', value: 'entre_100_y_150' },
  { id: 6, label: 'Más de $150.000', value: 'mas_de_150' },
]

export const paises_ingles = [
  { id: 246, value: 'afganistán', label: 'Afghanistan' },
  { id: 1, value: 'albania', label: 'Albania' },
  { id: 2, value: 'alemania', label: 'Germany' },
  { id: 3, value: 'algeria', label: 'Algeria' },
  { id: 4, value: 'andorra', label: 'Andorra' },
  { id: 5, value: 'angola', label: 'Angola' },
  { id: 6, value: 'anguila', label: 'Anguilla' },
  { id: 7, value: 'antártida', label: 'Antarctica' },
  { id: 8, value: 'antigua_y_barbuda', label: 'Antigua and Barbuda' },
  { id: 9, value: 'antillas_neerlandesas', label: 'Netherlands Antilles' },
  { id: 10, value: 'arabia_saudita', label: 'Saudi Arabia' },
  { id: 11, value: 'argentina', label: 'Argentina' },
  { id: 12, value: 'armenia', label: 'Armenia' },
  { id: 13, value: 'aruba', label: 'Aruba' },
  { id: 14, value: 'australia', label: 'Australia' },
  { id: 15, value: 'austria', label: 'Austria' },
  { id: 16, value: 'azerbayán', label: 'Azerbaijan' },
  { id: 17, value: 'bélgica', label: 'Belgium' },
  { id: 18, value: 'bahamas', label: 'Bahamas' },
  { id: 19, value: 'bahrein', label: 'Bahrein' },
  { id: 20, value: 'bangladesh', label: 'Bangladesh' },
  { id: 21, value: 'barbados', label: 'Barbados' },
  { id: 22, value: 'belice', label: 'Belize' },
  { id: 23, value: 'benín', label: 'Benin' },
  { id: 24, value: 'bhután', label: 'Bhutan' },
  { id: 25, value: 'bielorrusia', label: 'Belarus' },
  { id: 26, value: 'birmania', label: 'Myanmar' },
  { id: 27, value: 'bolivia', label: 'Bolivia' },
  { id: 28, value: 'bosnia_y_herzegovina', label: 'Bosnia and Herzegovina' },
  { id: 29, value: 'botsuana', label: 'Botswana' },
  { id: 30, value: 'brasil', label: 'Brazil' },
  { id: 31, value: 'brunéi', label: 'Brunei Darussalam' },
  { id: 32, value: 'bulgaria', label: 'Bulgaria' },
  { id: 33, value: 'burkina_faso', label: 'Burkina Faso' },
  { id: 34, value: 'burundi', label: 'Burundi' },
  { id: 35, value: 'cabo_verde', label: 'Cape Verde' },
  { id: 36, value: 'camboya', label: 'Cambodia' },
  { id: 37, value: 'camerún', label: 'Cameroon' },
  { id: 38, value: 'canadá', label: 'Canada' },
  { id: 39, value: 'chad', label: 'Chad' },
  { id: 40, value: 'chile', label: 'Chile' },
  { id: 41, value: 'china', label: 'China' },
  { id: 42, value: 'chipre', label: 'Cyprus' },
  {
    id: 43,
    value: 'ciudad_del_vaticano',
    label: 'Holy See (Vatican City State)',
  },
  { id: 44, value: 'colombia', label: 'Colombia' },
  { id: 45, value: 'comoras', label: 'Comoros' },
  { id: 46, value: 'congo', label: 'Congo' },
  { id: 47, value: 'congo', label: 'Congo' },
  {
    id: 48,
    value: 'corea_del_norte',
    label: 'Korea, Democratic People"S Republic of',
  },
  { id: 49, value: 'corea_del_sur', label: 'Korea, Republic of' },
  { id: 50, value: 'costa_de_marfil', label: 'Cote D"Ivoire' },
  { id: 51, value: 'costa_rica', label: 'Costa Rica' },
  { id: 52, value: 'croacia', label: 'Croatia' },
  { id: 53, value: 'cuba', label: 'Cuba' },
  { id: 54, value: 'dinamarca', label: 'Denmark' },
  { id: 55, value: 'dominica', label: 'Dominica' },
  { id: 56, value: 'ecuador', label: 'Ecuador' },
  { id: 57, value: 'egipto', label: 'Egypt' },
  { id: 58, value: 'el_salvador', label: 'El Salvador' },
  { id: 59, value: 'emiratos_árabes_unidos', label: 'United Arab Emirates' },
  { id: 60, value: 'eritrea', label: 'Eritrea' },
  { id: 61, value: 'eslovaquia', label: 'Slovakia' },
  { id: 62, value: 'eslovenia', label: 'Slovenia' },
  { id: 63, value: 'españa', label: 'Spain' },
  { id: 64, value: 'estados_unidos_de_américa', label: 'United States' },
  { id: 65, value: 'estonia', label: 'Estonia' },
  { id: 66, value: 'etiopía', label: 'Ethiopia' },
  { id: 67, value: 'filipinas', label: 'Philippines' },
  { id: 68, value: 'finlandia', label: 'Finland' },
  { id: 69, value: 'fiyi', label: 'Fiji' },
  { id: 70, value: 'francia', label: 'France' },
  { id: 71, value: 'gabón', label: 'Gabon' },
  { id: 72, value: 'gambia', label: 'Gambia' },
  { id: 73, value: 'georgia', label: 'Georgia' },
  { id: 74, value: 'ghana', label: 'Ghana' },
  { id: 75, value: 'gibraltar', label: 'Gibraltar' },
  { id: 76, value: 'granada', label: 'Grenada' },
  { id: 77, value: 'grecia', label: 'Greece' },
  { id: 78, value: 'groenlandia', label: 'Greenland' },
  { id: 79, value: 'guadalupe', label: 'Guadeloupe' },
  { id: 80, value: 'guam', label: 'Guam' },
  { id: 81, value: 'guatemala', label: 'Guatemala' },
  { id: 82, value: 'guayana_francesa', label: 'French Guiana' },
  { id: 83, value: 'guernsey', label: 'Guernsey' },
  { id: 84, value: 'guinea', label: 'Guinea' },
  { id: 85, value: 'guinea_ecuatorial', label: 'Equatorial Guinea' },
  { id: 86, value: 'guinea-bissau', label: 'Guinea-Bissau' },
  { id: 87, value: 'guyana', label: 'Guyana' },
  { id: 88, value: 'haití', label: 'Haiti' },
  { id: 89, value: 'honduras', label: 'Honduras' },
  { id: 90, value: 'hong_kong', label: 'Hong Kong' },
  { id: 91, value: 'hungría', label: 'Hungary' },
  { id: 92, value: 'india', label: 'India' },
  { id: 93, value: 'indonesia', label: 'Indonesia' },
  { id: 94, value: 'irán', label: 'Iran, Islamic Republic Of' },
  { id: 95, value: 'irak', label: 'Iraq' },
  { id: 96, value: 'irlanda', label: 'Ireland' },
  { id: 97, value: 'isla_bouvet', label: 'Bouvet Island' },
  { id: 98, value: 'isla_de_man', label: 'Isle of Man' },
  { id: 99, value: 'isla_de_navidad', label: 'Christmas Island' },
  { id: 100, value: 'isla_norfolk', label: 'Norfolk Island' },
  { id: 101, value: 'islandia', label: 'Iceland' },
  { id: 102, value: 'islas_bermudas', label: 'Bermuda' },
  { id: 103, value: 'islas_caimán', label: 'Cayman Islands' },
  { id: 104, value: 'islas_cocos_(keeling)', label: 'Cocos (Keeling) Islands' },
  { id: 105, value: 'islas_cook', label: 'Cook Islands' },
  { id: 106, value: 'islas_de_åland', label: 'Åland Islands' },
  { id: 107, value: 'islas_feroe', label: 'Faroe Islands' },
  {
    id: 108,
    value: 'islas_georgias_del_sur_y_sandwich_del_sur',
    label: 'South Georgia and the South Sandwich Islands',
  },
  {
    id: 109,
    value: 'islas_heard_y_mcdonald',
    label: 'Heard Island and Mcdonald Islands',
  },
  { id: 110, value: 'islas_maldivas', label: 'Maldives' },
  { id: 111, value: 'islas_malvinas', label: 'Malvinas' },
  {
    id: 112,
    value: 'islas_marianas_del_norte',
    label: 'Northern Mariana Islands',
  },
  { id: 113, value: 'islas_marshall', label: 'Marshall Islands' },
  { id: 114, value: 'islas_pitcairn', label: 'Pitcairn' },
  { id: 115, value: 'islas_salomón', label: 'Solomon Islands' },
  {
    id: 116,
    value: 'islas_turcas_y_caicos',
    label: 'Turks and Caicos Islands',
  },
  {
    id: 117,
    value: 'islas_ultramarinas_menores_de_estados_unidos',
    label: 'United States Minor Outlying Islands',
  },
  {
    id: 118,
    value: 'islas_vírgenes_británicas',
    label: 'Virgin Islands, British',
  },
  {
    id: 119,
    value: 'islas_vírgenes_de_los_estados_unidos',
    label: 'Virgin Islands, U.S.',
  },
  { id: 120, value: 'israel', label: 'Israel' },
  { id: 121, value: 'italia', label: 'Italy' },
  { id: 122, value: 'jamaica', label: 'Jamaica' },
  { id: 123, value: 'japón', label: 'Japan' },
  { id: 124, value: 'jersey', label: 'Jersey' },
  { id: 125, value: 'jordania', label: 'Jordan' },
  { id: 126, value: 'kazajistán', label: 'Kazakhstan' },
  { id: 127, value: 'kenia', label: 'Kenya' },
  { id: 128, value: 'kirgizstán', label: 'Kyrgyzstan' },
  { id: 129, value: 'kiribati', label: 'Kiribati' },
  { id: 130, value: 'kuwait', label: 'Kuwait' },
  { id: 131, value: 'líbano', label: 'Lebanon' },
  { id: 132, value: 'laos', label: 'Lao People"S Democratic Republic' },
  { id: 133, value: 'lesoto', label: 'Lesotho' },
  { id: 134, value: 'letonia', label: 'Latvia' },
  { id: 135, value: 'liberia', label: 'Liberia' },
  { id: 136, value: 'libia', label: 'Libyan Arab Jamahiriya' },
  { id: 137, value: 'liechtenstein', label: 'Liechtenstein' },
  { id: 138, value: 'lituania', label: 'Lithuania' },
  { id: 139, value: 'luxemburgo', label: 'Luxembourg' },
  { id: 140, value: 'méxico', label: 'Mexico' },
  { id: 141, value: 'mónaco', label: 'Monaco' },
  { id: 142, value: 'macao', label: 'Macao' },
  {
    id: 143,
    value: 'macedônia',
    label: 'Macedonia, The Former Yugoslav Republic of',
  },
  { id: 144, value: 'madagascar', label: 'Madagascar' },
  { id: 145, value: 'malasia', label: 'Malaysia' },
  { id: 146, value: 'malawi', label: 'Malawi' },
  { id: 147, value: 'mali', label: 'Mali' },
  { id: 148, value: 'malta', label: 'Malta' },
  { id: 149, value: 'marruecos', label: 'Morocco' },
  { id: 150, value: 'martinica', label: 'Martinique' },
  { id: 151, value: 'mauricio', label: 'Mauritius' },
  { id: 152, value: 'mauritania', label: 'Mauritania' },
  { id: 153, value: 'mayotte', label: 'Mayotte' },
  { id: 154, value: 'micronesia', label: 'Micronesia, Federated States of' },
  { id: 155, value: 'moldavia', label: 'Moldova, Republic of' },
  { id: 156, value: 'mongolia', label: 'Mongolia' },
  { id: 157, value: 'montenegro', label: 'Montenegro' },
  { id: 158, value: 'montserrat', label: 'Montserrat' },
  { id: 159, value: 'mozambique', label: 'Mozambique' },
  { id: 160, value: 'namibia', label: 'Namibia' },
  { id: 161, value: 'nauru', label: 'Nauru' },
  { id: 162, value: 'nepal', label: 'Nepal' },
  { id: 163, value: 'nicaragua', label: 'Nicaragua' },
  { id: 164, value: 'niger', label: 'Niger' },
  { id: 165, value: 'nigeria', label: 'Nigeria' },
  { id: 166, value: 'niue', label: 'Niue' },
  { id: 167, value: 'noruega', label: 'Norway' },
  { id: 168, value: 'nueva_caledonia', label: 'New Caledonia' },
  { id: 169, value: 'nueva_zelanda', label: 'New Zealand' },
  { id: 170, value: 'omán', label: 'Oman' },
  { id: 171, value: 'países_bajos', label: 'Netherlands' },
  { id: 172, value: 'pakistán', label: 'Pakistán' },
  { id: 173, value: 'palau', label: 'Palau' },
  { id: 174, value: 'palestina', label: 'Palestine' },
  { id: 175, value: 'panamá', label: 'Panama' },
  { id: 176, value: 'papúa_nueva_guinea', label: 'Papua New Guinea' },
  { id: 177, value: 'paraguay', label: 'Paraguay' },
  { id: 178, value: 'perú', label: 'Peru' },
  { id: 179, value: 'polinesia_francesa', label: 'French Polynesia' },
  { id: 180, value: 'polonia', label: 'Poland' },
  { id: 181, value: 'portugal', label: 'Portugal' },
  { id: 182, value: 'puerto_rico', label: 'Puerto Rico' },
  { id: 183, value: 'qatar', label: 'Qatar' },
  { id: 184, value: 'reino_unido', label: 'United Kingdom' },
  {
    id: 185,
    value: 'república_centroafricana',
    label: 'República Centroafricana',
  },
  { id: 186, value: 'república_checa', label: 'República Checa' },
  { id: 187, value: 'república_dominicana', label: 'Central African Republic' },
  { id: 188, value: 'reunión', label: 'Reunion' },
  { id: 189, value: 'ruanda', label: 'Rwanda' },
  { id: 190, value: 'rumanía', label: 'Romania' },
  { id: 191, value: 'rusia', label: 'Russian Federation' },
  { id: 192, value: 'sahara_occidental', label: 'Western Sahara' },
  { id: 193, value: 'samoa', label: 'Samoa' },
  { id: 194, value: 'samoa_americana', label: 'American Samoa' },
  { id: 195, value: 'san_bartolomé', label: 'Saint Barthélemy' },
  { id: 196, value: 'san_cristóbal_y_nieves', label: 'Saint Kitts and Nevis' },
  { id: 197, value: 'san_marino', label: 'San Marino' },
  { id: 198, value: 'san_martín_(francia)', label: 'San Martín (Francia)' },
  {
    id: 199,
    value: 'san_pedro_y_miquelón',
    label: 'Saint Pierre and Miquelon',
  },
  {
    id: 200,
    value: 'san_vicente_y_las_granadinas',
    label: 'Saint Vincent and the Grenadines',
  },
  { id: 201, value: 'santa_elena', label: 'Saint Helena' },
  { id: 202, value: 'santa_lucía', label: 'Santa Lucia' },
  { id: 203, value: 'santo_tomé_y_príncipe', label: 'Sao Tome and Principe' },
  { id: 204, value: 'senegal', label: 'Senegal' },
  { id: 205, value: 'serbia', label: 'Serbia' },
  { id: 206, value: 'seychelles', label: 'Seychelles' },
  { id: 207, value: 'sierra_leona', label: 'Sierra Leone' },
  { id: 208, value: 'singapur', label: 'Singapore' },
  { id: 209, value: 'siria', label: 'Syrian Arab Republic' },
  { id: 210, value: 'somalia', label: 'Somalia' },
  { id: 211, value: 'sri_lanka', label: 'Sri lanka' },
  { id: 212, value: 'sudáfrica', label: 'South Africa' },
  { id: 213, value: 'sudán', label: 'Sudan' },
  { id: 214, value: 'suecia', label: 'Sweden' },
  { id: 215, value: 'suiza', label: 'Switzerland' },
  { id: 216, value: 'surinám', label: 'Suriname' },
  { id: 217, value: 'svalbard_y_jan_mayen', label: 'Svalbard and Jan Mayen' },
  { id: 218, value: 'swazilandia', label: 'Swaziland' },
  { id: 219, value: 'tadjikistán', label: 'Tajikistan' },
  { id: 220, value: 'tailandia', label: 'Thailand' },
  { id: 221, value: 'taiwán', label: 'Taiwan' },
  { id: 222, value: 'tanzania', label: 'Tanzania, United Republic of' },
  {
    id: 223,
    value: 'territorio_británico_del_océano_índico',
    label: 'British Indian Ocean Territory',
  },
  {
    id: 224,
    value: 'territorios_australes_y_antárticas_franceses',
    label: 'French Southern Territories',
  },
  { id: 225, value: 'timor_oriental', label: 'Timor-Leste' },
  { id: 226, value: 'togo', label: 'Togo' },
  { id: 227, value: 'tokelau', label: 'Tokelau' },
  { id: 228, value: 'tonga', label: 'Tonga' },
  { id: 229, value: 'trinidad_y_tobago', label: 'Trinidad and Tobago' },
  { id: 230, value: 'tunez', label: 'Tunisia' },
  { id: 231, value: 'turkmenistán', label: 'Turkmenistan' },
  { id: 232, value: 'turquía', label: 'Turkey' },
  { id: 233, value: 'tuvalu', label: 'Tuvalu' },
  { id: 234, value: 'ucrania', label: 'Ukraine' },
  { id: 235, value: 'uganda', label: 'Uganda' },
  { id: 236, value: 'uruguay', label: 'Uruguay' },
  { id: 237, value: 'uzbekistán', label: 'Uzbekistan' },
  { id: 238, value: 'vanuatu', label: 'Vanuatu' },
  { id: 239, value: 'venezuela', label: 'Venezuela' },
  { id: 240, value: 'vietnam', label: 'Viet Nam' },
  { id: 241, value: 'wallis_y_futuna', label: 'Wallis and Futuna' },
  { id: 242, value: 'yemen', label: 'Yemen' },
  { id: 243, value: 'yibuti', label: 'Djibouti' },
  { id: 244, value: 'zambia', label: 'Zambia' },
  { id: 245, value: 'zimbabue', label: 'Zimbabwe' },
]

export default {
  futbolistas,
  sino,
  sinonc,
  nivelesEducativos,
  formulasPresidenciales,
  formulasPresidencialesPost,
  generos,
  generos_ingles,
  ultimaVezConsumo,
  frecuencias,
  frecuenciasEvento,
  nivelesCreencia,
  nivelesSeguridad,
  acuerdoDesacuerdo,
  interes,
  equipos,
  equiposMadrePadre,
  azul_o_rojo,
  evps_juego,
  paises,
  condiciones_previas,
  ingresos,
}
