import { LessonData } from "@/lib/types";

import computerLabImg from "@/assets/lesson-01/computer-lab.jpg";
import classroomRulesImg from "@/assets/lesson-01/classroom-rules.jpg";
import correctPostureImg from "@/assets/lesson-01/correctPosture.jpg";
import prohibitedActionsImg from "@/assets/lesson-01/prohibited-actions.jpg";
import safetyTipsImg from "@/assets/lesson-01/distanceFrom.jpg";
import futureCityImg from "@/assets/lesson-01/future-city.jpg";
import postureComparisonImg from "@/assets/lesson-01/рисунок4.jpg";
import ruleBreakersImg from "@/assets/lesson-01/donttouch.jpg";

import computerLabVideo from "@/assets/lesson-01/videos/Видеопроект.mp4";
import correctPostureVideo from "@/assets/lesson-01/videos/Видеопроект 2.mp4";
import prohibitedActionsVideo from "@/assets/lesson-01/videos/Student_finger_touches.mp4";
import eyeRestVideo from "@/assets/lesson-01/videos/Computer_behavior_for.mp4";
import digitalLessonVideo from "@/assets/lesson-01/videos/Computer_science_office_202604211212.mp4";
import straightBackVideo from "@/assets/lesson-01/videos/Пример.mp4";
import correctDistanceVideo from "@/assets/lesson-01/videos/correct-distance.mp4.asset.json";
import noFoodVideo from "@/assets/lesson-01/videos/Animation_for_first.mp4";
import washHandsVideo from "@/assets/lesson-01/videos/Water_damages_electronics.mp4";
import futureCityVideo from "@/assets/lesson-01/videos/animation_202604211200.mp4";
import BoyThinkingVideo from "@/assets/lesson-01/videos/Boy_thinking.mp4"

export const lesson01: LessonData = {
  id: "lesson-01",
  title: { kk: "Денсаулық және компьютер", ru: "Здоровье и компьютер", en: "Health and Computer" },
  description: {
    kk: "Информатика кабинетіндегі тәртіп ережелері",
    ru: "Правила поведения в кабинете информатики",
    en: "Rules of conduct in the computer lab",
  },
  emoji: "🏥",
  color: "from-green-400 to-teal-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Денсаулық және компьютер", ru: "Здоровье и компьютер", en: "Health and Computer" },
      subtitle: {
        kk: "Болашақ қаласына саяхат жасайық!",
        ru: "Отправимся в город будущего!",
        en: "Let's travel to the city of the future!",
      },
      emoji: "💻",
      color: "from-green-400 to-teal-500",
    },
    {
      type: "video",
      title: { kk: "Болашақтың қаласы", ru: "Город будущего", en: "City of the Future" },
      video: futureCityVideo,
    },
    {
      type: "topic",
      title: { kk: "Информатика кабинеті", ru: "Кабинет информатики", en: "Computer Lab" },
      text: {
        kk: "Суретте информатика кабинеті бейнеленген. Кабинетте әр оқушының жеке отырып жұмыс істеуі үшін компьютерлер қойылған. Цифрлық сауаттылық сабағы информатика кабинетінде өтеді.",
        ru: "На рисунке — кабинет информатики. Для каждого ученика стоит отдельный компьютер. Урок цифровой грамотности проходит здесь.",
        en: "The picture shows a computer lab. Each student has their own computer. The digital literacy lesson takes place here.",
      },
      image: computerLabImg,
      videos: [computerLabVideo, digitalLessonVideo],
    },
    {
      type: "rules",
      title: { kk: "Информатика кабинетіндегі ережелер", ru: "Правила в кабинете информатики", en: "Computer Lab Rules" },
      points: [
        { kk: "1️⃣ Кабинетке мұғалімнің рұқсатынсыз кіруге болмайды", ru: "1️⃣ Без разрешения учителя в кабинет входить нельзя", en: "1️⃣ Don't enter the lab without teacher's permission" },
        { kk: "2️⃣ Компьютерде тек мұғалімнің рұқсатымен жұмыс істейміз", ru: "2️⃣ За компьютером работаем только с разрешения учителя", en: "2️⃣ Use the computer only with teacher's permission" },
        { kk: "3️⃣ Экран мен көздің арасы 50–70 см болсын", ru: "3️⃣ Расстояние от глаз до экрана — 50–70 см", en: "3️⃣ Keep eyes 50–70 cm from screen" },
        { kk: "4️⃣ Үзіліссіз 15 минуттан артық отырма", ru: "4️⃣ Не сиди подряд более 15 минут", en: "4️⃣ Don't sit longer than 15 minutes nonstop" },
        { kk: "5️⃣ Арқаңды тік ұста, аяғыңды еденге қой", ru: "5️⃣ Спина прямая, ноги на полу", en: "5️⃣ Back straight, feet on floor" },
      ],
      emoji: "📋",
      image: classroomRulesImg,
    },
    {
      type: "topic",
      title: { kk: "3-сурет. Дұрыс отыру", ru: "Рис. 3. Правильная посадка", en: "Pic. 3. Correct Posture" },
      text: {
        kk: "Компьютердің алдында дұрыс отырған оқушыны белгіле. Арқаңды тік ұста, аяғыңды еденге қой, экранға тым жақын отырма.",
        ru: "Найди ученика, который сидит правильно. Спина прямая, ноги на полу, не наклоняйся слишком близко к экрану.",
        en: "Find the student sitting correctly. Back straight, feet on floor, don't lean too close to the screen.",
      },
      image: correctPostureImg,
      videos: [correctPostureVideo, straightBackVideo, correctDistanceVideo.url],
    },
    {
      type: "topic",
      title: { kk: "4-сурет. Кім дұрыс отыр?", ru: "Рис. 4. Кто сидит правильно?", en: "Pic. 4. Who sits right?" },
      text: {
        kk: "Қай оқушы дұрыс отыр? Қалғандарының қандай қатесі бар? Дұрыс отырмаудың зияны қандай?",
        ru: "Какой ученик сидит правильно? Какие ошибки у остальных? Чем вредна неправильная посадка?",
        en: "Which one is sitting right? What mistakes do the others make? Why is bad posture harmful?",
      },
      image: postureComparisonImg,
      videos: [BoyThinkingVideo],
    },
    {
      type: "topic",
      title: { kk: "Тыйым салынған әрекеттер", ru: "Запрещённые действия", en: "Prohibited Actions" },
      text: {
        kk: "❌ Монитордың экранын қолмен ұстама. ❌ Компьютердің сымдарын ұстама. ❌ Пернетақтаны су қолмен баспа. ❌ Кабинетке тамақ алып кірме. ❌ Жүйелік блоктан өшірме.",
        ru: "❌ Не трогай экран руками. ❌ Не трогай провода. ❌ Не нажимай мокрыми руками. ❌ Не приноси еду. ❌ Не выключай через системный блок.",
        en: "❌ Don't touch the screen. ❌ Don't touch cables. ❌ No wet hands on keyboard. ❌ No food. ❌ Don't unplug the system unit.",
      },
      image: ruleBreakersImg,
      videos: [prohibitedActionsVideo, noFoodVideo, washHandsVideo],
    },
    {
      type: "topic",
      title: { kk: "Есіңде сақта!", ru: "Запомни!", en: "Remember!" },
      text: {
        kk: "Экран мен көздің арасы 50–70 см болуы керек. Компьютердің алдында үзіліссіз 15 минуттан артық отырма. Көзіңе демалыс бер!",
        ru: "Расстояние от глаз до экрана — 50–70 см. Не сиди дольше 15 минут подряд. Дай отдых глазам!",
        en: "Eye-to-screen distance: 50–70 cm. Don't sit longer than 15 minutes. Rest your eyes!",
      },
      image: safetyTipsImg,
      videos: [eyeRestVideo],
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Мониторға қанша қашықтықта отыру керек?", ru: "На каком расстоянии сидеть от монитора?", en: "How far from the monitor?" },
          options: [
            { kk: "10–20 см", ru: "10–20 см", en: "10–20 cm" },
            { kk: "50–70 см", ru: "50–70 см", en: "50–70 cm" },
            { kk: "2 метр", ru: "2 метра", en: "2 meters" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Үзіліссіз неше минут отыруға болады?", ru: "Сколько минут можно сидеть без перерыва?", en: "Max nonstop minutes?" },
          options: [
            { kk: "5 минут", ru: "5 минут", en: "5 minutes" },
            { kk: "15 минут", ru: "15 минут", en: "15 minutes" },
            { kk: "60 минут", ru: "60 минут", en: "60 minutes" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Кабинетке кім рұқсат береді?", ru: "Кто разрешает войти в кабинет?", en: "Who lets you in?" },
          options: [
            { kk: "Дос", ru: "Друг", en: "Friend" },
            { kk: "Мұғалім", ru: "Учитель", en: "Teacher" },
            { kk: "Өзім", ru: "Сам", en: "Myself" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Компьютермен жұмыс істегенде не істеуге болмайды?", ru: "Что нельзя делать за компьютером?", en: "What's NOT allowed?" },
          options: [
            { kk: "Тамақ ішу", ru: "Есть еду", en: "Eat food" },
            { kk: "Тапсырма орындау", ru: "Выполнять задания", en: "Do tasks" },
            { kk: "Көзге демалыс беру", ru: "Давать отдых глазам", en: "Rest eyes" },
          ],
          correctIndex: 0,
        },
        {
          type: "choice",
          question: { kk: "Қай әрекет дұрыс?", ru: "Какое действие правильное?", en: "Which is correct?" },
          options: [
            { kk: "Экранды саусақпен басу", ru: "Тыкать пальцем в экран", en: "Poke screen with finger" },
            { kk: "Сабақтан кейін қолды жуу", ru: "Мыть руки после урока", en: "Wash hands after class" },
            { kk: "Сымды жұлу", ru: "Дёргать провод", en: "Pull the cable" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Қауіпсіз/қауіпті — сәйкестендір", ru: "Безопасно/опасно — соедини", en: "Safe/Dangerous — match" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Әрекетті дұрыс санатқа сәйкестендір",
            ru: "Соедини действие с категорией",
            en: "Match the action to category",
          },
          pairs: [
            { left: { kk: "Арқаны тік ұстау", ru: "Держать спину прямо", en: "Straight back" }, right: { kk: "✅ Дұрыс", ru: "✅ Правильно", en: "✅ Correct" } },
            { left: { kk: "Экранды қолмен ұстау", ru: "Трогать экран рукой", en: "Touch the screen" }, right: { kk: "❌ Қате", ru: "❌ Неверно", en: "❌ Wrong" } },
            { left: { kk: "Қолды жуу", ru: "Мыть руки", en: "Wash hands" }, right: { kk: "✅ Дұрыс", ru: "✅ Правильно", en: "✅ Correct" } },
            { left: { kk: "Тамақ алып кіру", ru: "Принести еду", en: "Bring food" }, right: { kk: "❌ Қате", ru: "❌ Неверно", en: "❌ Wrong" } },
            { left: { kk: "Сым жұлу", ru: "Дёргать провод", en: "Pull cable" }, right: { kk: "❌ Қате", ru: "❌ Неверно", en: "❌ Wrong" } },
            { left: { kk: "Көзге демалыс", ru: "Отдых глазам", en: "Rest eyes" }, right: { kk: "✅ Дұрыс", ru: "✅ Правильно", en: "✅ Correct" } },
          ],
        },
      ],
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Кабинетке тек мұғалімнің рұқсатымен кіреміз", ru: "В кабинет — только с разрешения учителя", en: "Enter only with teacher's OK" },
        { kk: "Экран мен көздің арасы 50–70 см", ru: "Расстояние до экрана 50–70 см", en: "Eye-to-screen 50–70 cm" },
        { kk: "Үзіліссіз 15 минуттан артық отырма", ru: "Не сиди более 15 минут подряд", en: "Max 15 min nonstop" },
        { kk: "Сабақтан кейін қолыңды жу", ru: "После урока вымой руки", en: "Wash hands after class" },
      ],
      emoji: "⭐",
    },
  ],
};
