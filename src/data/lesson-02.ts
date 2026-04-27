import { LessonData } from "@/lib/types";

import monitorImg from "@/assets/lesson-02/monitor.jpg";
import keyboardMouseImg from "@/assets/lesson-02/keyboard-mouse.jpg";
import systemUnitImg from "@/assets/lesson-02/system-unit.jpg";
import partsLabeledImg from "@/assets/lesson-02/что такое комп.png";
import powerButtonImg from "@/assets/lesson-02/power-button.jpg";
import shutdownMenuImg from "@/assets/lesson-02/shutdown-menu.jpg";
import digitalDevicesImg from "@/assets/lesson-02/digital-devices.jpg";
import devicesComputerImg from "@/assets/lesson-02/устройства компьютера.jpg";

import monitorVideo from "@/assets/lesson-02/videos/Monitor_displays_pictures.mp4";
import keyboardMouseVideo from "@/assets/lesson-02/videos/Hand_pressing_keyboard.mp4";
import powerOnVideo from "@/assets/lesson-02/videos/Computer_wakes_up.mp4";
import VideoGeneration from "@/assets/lesson-02/videos/Video_Generation_Request.mp4";
import typingHandsVideo from "@/assets/lesson-02/videos/Mouse_and_monitor.mp4";
import systemUnitBrainVideo from "@/assets/lesson-02/videos/Computer_activation_and.mp4";
import digitalDevicesVideo from "@/assets/lesson-02/videos/Animation_for_first_2026.mp4";
import partsLabeledVideo from "@/assets/lesson-02/videos/Animation_computer_operation.mp4";
import animationScenarioVideo from "@/assets/lesson-02/videos/Animation_scenario_working.mp4";

export const lesson02: LessonData = {
  id: "lesson-02",
  title: { kk: "Компьютермен танысу", ru: "Знакомство с компьютером", en: "Meet the Computer" },
  description: {
    kk: "Компьютер құрылғылары, оны іске қосу және өшіру",
    ru: "Устройства компьютера, включение и выключение",
    en: "Computer devices, turning on and off",
  },
  emoji: "🖥️",
  color: "from-blue-400 to-indigo-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Компьютермен танысу", ru: "Знакомство с компьютером", en: "Meet the Computer" },
      subtitle: {
        kk: "Компьютер қандай құрылғылардан тұрады?",
        ru: "Из каких устройств состоит компьютер?",
        en: "What devices make up a computer?",
      },
      emoji: "🖥️",
      color: "from-blue-400 to-indigo-500",
    },
    {
      type: "topic",
      title: { kk: "1-сурет. Цифрлық құрылғылар", ru: "Рис. 1. Цифровые устройства", en: "Pic. 1. Digital devices" },
      text: {
        kk: "Қандай құрылғылар бейнеленген? Қайсысының қызметі басқаларынан өзгеше? Компьютер не үшін қажет деп ойлайсың?",
        ru: "Какие устройства изображены? У какого функция отличается? Зачем нужен компьютер?",
        en: "What devices do you see? Which one is different? Why do we need a computer?",
      },
      image: digitalDevicesImg,
      videos: [digitalDevicesVideo],
    },
    {
      type: "topic",
      title: { kk: "Жаңа білім: Компьютер дегеніміз не?", ru: "Что такое компьютер?", en: "What is a computer?" },
      text: {
        kk: "Компьютер — ақпаратпен жұмыс істеуге арналған электрондық құрылғы. Ол төрт негізгі бөліктен тұрады: монитор, жүйелік блок, пернетақта, тінтуір.",
        ru: "Компьютер — электронное устройство для работы с информацией. Состоит из 4 частей: монитор, системный блок, клавиатура, мышь.",
        en: "A computer is an electronic device for working with information. It has 4 main parts: monitor, system unit, keyboard, mouse.",
      },
      image: partsLabeledImg,
      videos: [partsLabeledVideo],
    },
    {
      type: "rules",
      title: { kk: "2-сурет. Компьютердің құрылғылары", ru: "Рис. 2. Устройства компьютера", en: "Pic. 2. Computer devices" },
      image: devicesComputerImg,
      points: [
        { kk: "🖥️ Монитор — мәтінді, цифрлар мен суреттерді көрсетеді", ru: "🖥️ Монитор — показывает текст, цифры и картинки", en: "🖥️ Monitor — shows text, numbers and pictures" },
        { kk: "🗄️ Жүйелік блок — компьютердің ішкі құрылғылары орналасады", ru: "🗄️ Системный блок — содержит внутренние устройства", en: "🗄️ System unit — holds internal devices" },
        { kk: "⌨️ Пернетақта — компьютерге мәтін енгізеді", ru: "⌨️ Клавиатура — вводит текст в компьютер", en: "⌨️ Keyboard — enters text" },
        { kk: "🖱️ Тінтуір — меңзермен басқарып, команда береді", ru: "🖱️ Мышь — управляет курсором и даёт команды", en: "🖱️ Mouse — controls the cursor and gives commands" },
      ],
      emoji: "🧩",
    },
    {
      type: "topic",
      title: { kk: "Монитор", ru: "Монитор", en: "Monitor" },
      text: {
        kk: "Монитор — теледидарға ұқсас экран. Онда мәтін, сандар, суреттер мен видео көрінеді.",
        ru: "Монитор похож на телевизор. На нём видны текст, цифры, картинки и видео.",
        en: "The monitor looks like a TV. It shows text, numbers, pictures and videos.",
      },
      image: monitorImg,
      videos: [monitorVideo],
    },
    {
      type: "topic",
      title: { kk: "Пернетақта және тінтуір", ru: "Клавиатура и мышь", en: "Keyboard and Mouse" },
      text: {
        kk: "Пернетақта арқылы әріп пен сан енгіземіз. Тінтуір экрандағы меңзерді басқарады және команда береді.",
        ru: "Клавиатурой вводим буквы и цифры. Мышь управляет курсором и даёт команды.",
        en: "We type letters and numbers with the keyboard. The mouse moves the cursor and gives commands.",
      },
      image: keyboardMouseImg,
      videos: [keyboardMouseVideo, typingHandsVideo],
    },
    {
      type: "topic",
      title: { kk: "Жүйелік блок — компьютердің «миы»", ru: "Системный блок — «мозг»", en: "System Unit — the \"brain\"" },
      text: {
        kk: "Жүйелік блоктың ішінде процессор, жад және басқа маңызды құрылғылар орналасқан. Ол барлық есептеуді жүргізеді.",
        ru: "Внутри системного блока — процессор, память и другие важные устройства. Он выполняет все вычисления.",
        en: "Inside the system unit are the processor, memory and other parts. It performs all computations.",
      },
      image: systemUnitImg,
      videos: [systemUnitBrainVideo],
    },
    {
      type: "topic",
      title: { kk: " Компьютерді іске қосу", ru: "Включение компьютера", en: "Turning on" },
      text: {
        kk: "Жүйелік блокты және мониторды сыртқы батырмамен іске қосады. Күт — компьютер жүктеледі.",
        ru: "Системный блок и монитор включают внешней кнопкой. Подожди — компьютер загружается.",
        en: "Press the external buttons on the system unit and monitor. Wait while it loads.",
      },
      image: powerButtonImg,
      videos: [powerOnVideo],
    },
    {
      type: "topic",
      title: { kk: "Компьютерді өшіру", ru: "Выключение", en: "Turning off" },
      text: {
        kk: "Өшіру үшін: Іске қосу → Өшіру (Пуск → Выключение). Ешқашан жүйелік блоктан өшірме!",
        ru: "Выключение: Пуск → Выключение. Никогда не выключай через системный блок!",
        en: "To turn off: Start → Shut down. Never power-off via the system unit!",
      },
      image: shutdownMenuImg,
      videos: [animationScenarioVideo],
    },
    {
      type: "interactive",
      title: { kk: "Ойлан, тап, жаз", ru: "Подумай, найди, напиши", en: "Think and find" },
      items: [
        {
          type: "choice",
          question: { kk: "Қай құрылғы мәтінді көрсетеді?", ru: "Какое устройство показывает текст?", en: "Which one shows text?" },
          options: [
            { kk: "Тінтуір", ru: "Мышь", en: "Mouse" },
            { kk: "Монитор", ru: "Монитор", en: "Monitor" },
            { kk: "Жүйелік блок", ru: "Системный блок", en: "System unit" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Меңзерді не басқарады?", ru: "Что управляет курсором?", en: "What controls the cursor?" },
          options: [
            { kk: "Пернетақта", ru: "Клавиатура", en: "Keyboard" },
            { kk: "Тінтуір", ru: "Мышь", en: "Mouse" },
            { kk: "Монитор", ru: "Монитор", en: "Monitor" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Компьютердің «миы» қайда?", ru: "Где «мозг» компьютера?", en: "Where is the brain?" },
          options: [
            { kk: "Мониторда", ru: "В мониторе", en: "In monitor" },
            { kk: "Тінтуірде", ru: "В мыши", en: "In mouse" },
            { kk: "Жүйелік блокта", ru: "В системном блоке", en: "In system unit" },
          ],
          correctIndex: 2,
        },
        {
          type: "choice",
          question: { kk: "Компьютерді қалай дұрыс өшіру керек?", ru: "Как правильно выключить?", en: "Correct way to shut down?" },
          options: [
            { kk: "Сымнан суыру", ru: "Выдернуть из розетки", en: "Unplug it" },
            { kk: "Іске қосу → Өшіру", ru: "Пуск → Выключение", en: "Start → Shut down" },
            { kk: "Мониторды сөндіру", ru: "Выключить монитор", en: "Turn off monitor" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Әріп енгізу үшін қандай құрылғы қажет?", ru: "Чем вводят буквы?", en: "What types letters?" },
          options: [
            { kk: "Тінтуір", ru: "Мышь", en: "Mouse" },
            { kk: "Пернетақта", ru: "Клавиатура", en: "Keyboard" },
            { kk: "Монитор", ru: "Монитор", en: "Monitor" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Сәйкестендір", ru: "Соедини", en: "Match" },
      items: [
        {
          type: "match",
          instruction: { kk: "Құрылғыны қызметімен сәйкестендір", ru: "Соедини устройство с функцией", en: "Match device to function" },
          pairs: [
            { left: { kk: "🖥️ Монитор", ru: "🖥️ Монитор", en: "🖥️ Monitor" }, right: { kk: "Көрсетеді", ru: "Показывает", en: "Displays" } },
            { left: { kk: "⌨️ Пернетақта", ru: "⌨️ Клавиатура", en: "⌨️ Keyboard" }, right: { kk: "Мәтін енгізеді", ru: "Вводит текст", en: "Enters text" } },
            { left: { kk: "🖱️ Тінтуір", ru: "🖱️ Мышь", en: "🖱️ Mouse" }, right: { kk: "Меңзерді басқарады", ru: "Управляет курсором", en: "Moves cursor" } },
            { left: { kk: "🗄️ Жүйелік блок", ru: "🗄️ Системный блок", en: "🗄️ System unit" }, right: { kk: "Есептеуді жүргізеді", ru: "Выполняет вычисления", en: "Computes" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Компьютерді іске қосу", ru: "Включение компьютера", en: "Turning on the computer" },
      video: VideoGeneration,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Компьютер — ақпаратпен жұмыс істейтін электрондық құрылғы", ru: "Компьютер — электронное устройство для работы с информацией", en: "A computer is an electronic device for information" },
        { kk: "4 негізгі бөлік: монитор, жүйелік блок, пернетақта, тінтуір", ru: "4 части: монитор, системный блок, клавиатура, мышь", en: "4 parts: monitor, system unit, keyboard, mouse" },
        { kk: "Қосу — батырмамен, өшіру — Пуск → Өшіру", ru: "Включение — кнопкой, выключение — Пуск → Выключение", en: "Power on — button; off — Start → Shut down" },
      ],
      emoji: "🏆",
    },
  ],
};
