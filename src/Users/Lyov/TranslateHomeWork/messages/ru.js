import { LOCALES } from "../locale";

const ru = {
  [LOCALES.Russian]: {
    title: 'Архитектура React: как структурировать и организовать приложение React',
    desc: 'Нет единого мнения о том, как правильно организовать приложение React. React дает вам большую свободу, но вместе с этой свободой приходит и ответственность за выбор собственной архитектуры. Часто бывает так, что тот, кто изначально настраивает приложение, почти все кидает в папку компонентов, а может и компоненты и контейнеры, если использовал Redux, но я предлагаю другой путь получше. Мне нравится тщательно подходить к организации своих приложений, чтобы их было легко использовать, понимать и расширять.',
    desc1: 'Я собираюсь показать вам то, что я считаю интуитивно понятной и масштабируемой системой для крупномасштабных производственных приложений React. Основная концепция, которую я считаю важной, заключается в том, чтобы сделать архитектуру сосредоточенной на функциях, а не на типах, организуя только общие компоненты на глобальном уровне и модульно объединяя все остальные связанные объекты в локализованном представлении.'
  }
}
export default ru