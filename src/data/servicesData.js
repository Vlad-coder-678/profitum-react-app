import Image1 from "../images/services_1.jpg";
import Image2 from "../images/services_2.jpg";
import Image3 from "../images/services_3.jpg";
import Image4 from "../images/services_4.jpg";
import Image5 from "../images/services_5.jpg";

import avatar_JK from "../images/ourTeam_JK1_1280x960.jpg";
import avatar_IM from "../images/ourTeam_IM1_1280x960.jpg";

export const servicesData = [
  {
    title: {
      RU: "Диагностика текущего состояния бизнеса",
      EN: "Diagnostics of the current state of the business",
    },
    desc: {
      RU: (
        <div>
          <p>
            Комплексный финансовый анализ хозяйственно-коммерческой деятельности
          </p>
        </div>
      ),
      EN: (
        <div>
          <p>
            Comprehensive financial analysis of economic and commercial
            activities
          </p>
        </div>
      ),
    },
    result: {
      RU: (
        <div>
          <p>Получишь конкретные рекомендации</p>
          <ul>
            <li>Как блокировать слабые звенья бизнеса</li>
            <li>Как развить сильные стороны НЕЗАТРАТНЫМИ методами</li>
            <li>Мы определим точки роста и развития вашего бизнеса</li>
          </ul>
          <p>Вам останется только внедрить всё в жизнь.</p>
        </div>
      ),
      EN: (
        <div>
          <p>You will receive specific recommendations</p>
          <ul>
            <li>How to block weak links in your business</li>
            <li>How to build strengths with COST-EFFECTIVE methods</li>
            <li>
              We will determine the points of growth and development of your
              business
            </li>
          </ul>
          <p>You just have to implement everything in life.</p>
        </div>
      ),
    },
    labelHomePage: { RU: "Подробнее", EN: "Details" },
    pathHomePage: "/services/#diagnostics",
    labelServicesPage: {
      RU: "Записаться на консультацию",
      EN: "Sign up for a consultation",
    },
    pathServicesPage: "#",
    idCard: "diagnostics",
    image: Image1,
    alt: { RU: "Аудит и анализ бизнеса", EN: "Business audit and analysis" },
    manager: {
      name: { RU: "Екатерина Картасова", EN: "Jekaterina Kartasova" },
      image: avatar_JK,
      alt: { RU: "Коммерческий директор", EN: "buisness manager" },
    },
    sayThanks: `Photo by <a href="https://unsplash.com/@kmuza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Carlos Muza</a> on <a href="https://unsplash.com/s/photos/business?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    `,
  },
  {
    title: {
      RU: "Бизнес-моделирование, прогнозирование и анализ",
      EN: "Business modeling, forecasting and analysis",
    },
    desc: {
      RU: (
        <div>
          <ul>
            <li>Разработка и обновление бизнес-плана</li>
            <li>Моделирование нового бизнеса ( стартап ) или продукта.</li>
            <li>Создание финансовой модели и анализ чувствительности</li>
            <li>Бюджеты и сметы тактических операций</li>
            <li>Сопровождение</li>
          </ul>
        </div>
      ),
      EN: (
        <div>
          <ul>
            <li>Development and updating of a business plan</li>
            <li>Modeling a new business (startup) or product.</li>
            <li>Financial model creation and sensitivity analysis</li>
            <li>Tactical Operations Budgets and Estimates</li>
            <li>Accompaniment</li>
          </ul>
        </div>
      ),
    },
    result: {
      RU: (
        <div>
          <p>Внедрим пошагово все разработанные рекомендации</p>
          <p>
            Измерим прогресс в поставленные сроки используя показатели
            разработанные с учетом потребностей вашей компании.
          </p>
        </div>
      ),
      EN: (
        <div>
          <p>
            We will implement all the developed recommendations step by step
          </p>
          <p>
            We will measure progress in the set time frame using indicators
            designed with the needs of your company in mind.
          </p>
        </div>
      ),
    },
    labelHomePage: { RU: "Подробнее", EN: "Details" },
    pathHomePage: "/services/#modeling",
    labelServicesPage: {
      RU: "Записаться на консультацию",
      EN: "Sign up for a consultation",
    },
    pathServicesPage: "#",
    idCard: "modeling",
    image: Image2,
    alt: { RU: "Консалт", EN: "Consult" },
    manager: {
      name: { RU: "Екатерина Картасова", EN: "Jekaterina Kartasova" },
      image: avatar_JK,
      alt: { RU: "Коммерческий директор", EN: "buisness manager" },
    },
    sayThanks: `Photo by <a href="https://unsplash.com/@naomi365photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">vu anh</a> on <a href="https://unsplash.com/s/photos/house?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   `,
  },
  {
    title: {
      RU: "Управление денежными средствами и анализ денежных потоков",
      EN: "Cash management and cash flow analysis",
    },
    desc: {
      RU: (
        <div>
          <p>Вы не понимаете куда уходят ваши деньги?</p>
        </div>
      ),
      EN: (
        <div>
          <p>Do you understand where your money is going?</p>
        </div>
      ),
    },
    result: {
      RU: (
        <div>
          <p>
            Мы поможем разобраться и научим управлять Вас денежными потоками
            вашего бизнеса.
          </p>
          <ul>
            <li>Сделаем Анализ денежных потоков</li>
            <li>
              Научим Управлять денежными средствами Вас и вашего фин директора
            </li>
            <li>покажем, как избежать кассовых разрывов</li>
            <li>Снизим комиссии и расходы</li>
            <li>
              Внедрим Оптимизацию и инструменты для повышения эффективности
            </li>
          </ul>

          <p>В каждой компании есть 3 источника денежных средств:</p>
          <p>Операционная деятельность, Инвестиционная и Финансовая.</p>
          <ul>
            <li>Первая - всем понятная.</li>
            <li>Вторая - на что тратятся приходящие средства.</li>
            <li>Третья - как привлекаются новые вливания.</li>
          </ul>
          <p>
            Актуальный вопрос для развивающихся компаний. Можно ли обойтись
            своими средствами? Нужно ли привлекать чужой капиталл? Брать
            кредиты?
          </p>
          <p>На все эти вопросы вы найдёте ответы, заказав эту услугу.</p>
        </div>
      ),
      EN: (
        <div>
          <p>
            We will help you figure it out and teach you how to manage your cash
            flows your business.
          </p>
          <ul>
            <li>Let's do a cash flow analysis</li>
            <li>
              We will teach you and your financial director to manage money
            </li>
            <li>Show you how to avoid cash gaps</li>
            <li>We will reduce commissions and expenses</li>
            <li>
              We will implement Optimization and tools to improve efficiency
            </li>
          </ul>

          <p>Each company has 3 sources of funds:</p>
          <p>Operations, Investment and Financial.</p>
          <ul>
            <li>The first one is clear to everyone.</li>
            <li>The second is what the incoming funds are spent on.</li>
            <li>The third is how new infusions are attracted.</li>
          </ul>
          <p>
            An urgent question for developing companies. Is it possible to get
            by by your own means? Do I need to attract someone else's capital?
            Take loans?
          </p>
          <p>
            You will find answers to all these questions by ordering this
            service.
          </p>
        </div>
      ),
    },
    labelHomePage: { RU: "Подробнее", EN: "Details" },
    pathHomePage: "/services/#control",
    labelServicesPage: {
      RU: "Записаться на консультацию",
      EN: "Sign up for a consultation",
    },
    pathServicesPage: "#",
    idCard: "control",
    image: Image3,
    alt: {
      RU: "Управление денежными средствами и анализ денежных потоков",
      EN: "Cash management and cash flow analysis",
    },
    manager: {
      name: { RU: "Екатерина Картасова", EN: "Jekaterina Kartasova" },
      image: avatar_JK,
      alt: { RU: "Коммерческий директор", EN: "buisness manager" },
    },
    sayThanks: `Photo by <a href="https://unsplash.com/@heybeautimagazine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nicola Styles</a> on <a href="https://unsplash.com/s/photos/okay?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    `,
  },
  {
    title: {
      RU: "Планирование увеличения прибыли",
      EN: "Planning to increase profits",
    },
    desc: {
      RU: (
        <div>
          <p>У вас нет конкурентов?</p>
          <p>Вы понимаете, что клиент готов платить за ваш товар больше?</p>
          <p>Качество ваших услуг/товара заслуживает большей оплаты?</p>
          <p>Хотите делать меньше, а получать больше?</p>
        </div>
      ),
      EN: (
        <div>
          <p>Don't have any competitors?</p>
          <p>
            Do you understand that the client is willing to pay more for your
            product?
          </p>
          <p>
            Does the quality of your service / product deserve more payment?
          </p>
          <p>Want to do less and get more?</p>
        </div>
      ),
    },
    result: {
      RU: (
        <div>
          <p>Пора сделать</p>
          <ul>
            <li>Анализ цен</li>
            <li>Программы сокращения расходов</li>
            <li>Анализ поставщиков и переговоры</li>
            <li>Анализ, планирование и реализация аутсорсинга</li>
            <li>
              Моделирование альтернативных сценариев и анализ чувствительности
            </li>
          </ul>
        </div>
      ),
      EN: (
        <div>
          <p>Time to do</p>
          <ul>
            <li>Price analysis</li>
            <li>Cost reduction programs</li>
            <li>Supplier analysis and negotiations</li>
            <li>Analysis, planning and implementation of outsourcing</li>
            <li>Alternative scenario modeling and sensitivity analysis</li>
          </ul>
        </div>
      ),
    },
    labelHomePage: { RU: "Подробнее", EN: "Details" },
    pathHomePage: "/services/#profit",
    labelServicesPage: {
      RU: "Записаться на консультацию",
      EN: "Sign up for a consultation",
    },
    pathServicesPage: "#",
    idCard: "profit",
    image: Image4,
    alt: { RU: "Финансовый рост", EN: "Financial growth" },
    manager: {
      name: { RU: "Екатерина Картасова", EN: "Jekaterina Kartasova" },
      image: avatar_JK,
      alt: { RU: "Коммерческий директор", EN: "buisness manager" },
    },
    sayThanks: `Photo by <a href="https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Micheile Henderson</a> on <a href="https://unsplash.com/s/photos/finance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    `,
  },
  {
    title: {
      RU: "Коучинг личностного роста руководителя и команды",
      EN: "Coaching the personal growth of the leader and the team",
    },
    desc: {
      RU: (
        <div>
          <ul>
            <li>Коучинг топ менеджеров.</li>
            <li>Развитие персонала.</li>
            <li>Сплочение команды.</li>
          </ul>
          <p>
            Все статистические данные и сухие инструменты маркетинга на
            увеличение прибыли вряд ли сработают, если в голове руководителя
            каша.
          </p>
        </div>
      ),
      EN: (
        <div>
          <ul>
            <li>Coaching for top managers.</li>
            <li>Staff development.</li>
            <li>Team building.</li>
          </ul>
          <p>
            All statistics and dry marketing tools on increased profits are
            unlikely to work if the head of the head porridge.
          </p>
        </div>
      ),
    },
    result: {
      RU: (
        <div>
          <p>Поэтому параллельно мы проводим</p>
          <ol>
            <li>индивидуальный коучинг руководителей</li>
            <li>
              групповой коучинг для постановки личных целей роста каждого в
              рамках работы в компании /или для решения конкретной проблемы
            </li>
          </ol>
          <ul>
            <li>Выстраиваем личные цели на заданный период жизни</li>
            <li>Гармонизируем сферы развития</li> <li>Расширение сознания</li>
            <li>Внедрение новых взглядов, убеждений</li>
            <li>Безболезненная интеграция в общество следующего ранга</li>
          </ul>
        </div>
      ),
      EN: (
        <div>
          <p>Therefore, in parallel we carry out</p>
          <ol>
            <li>individual executive coaching</li>
            <li>
              group coaching to set personal growth goals for everyone within
              work in a company / or to solve a specific problem
            </li>
          </ol>
          <ul>
            <li>We build personal goals for a given period of life</li>
            <li>Harmonizing development spheres</li>
            <li>Expansion of consciousness</li>
            <li>Introducing new views, beliefs</li>
            <li>Painless integration into the next rank society</li>
          </ul>
        </div>
      ),
    },
    labelHomePage: { RU: "Подробнее", EN: "Details" },
    pathHomePage: "/services/#coaching",
    labelServicesPage: {
      RU: "Записаться на консультацию",
      EN: "Sign up for a consultation",
    },
    pathServicesPage: "#",
    idCard: "coaching",
    image: Image5,
    alt: { RU: "Финансовый рост", EN: "Financial growth" },
    manager: {
      name: { RU: "Ирина Мезенцева", EN: "Irina Mezentseva" },
      image: avatar_IM,
      alt: { RU: "личный коуч", EN: "personal coach" },
    },
    sayThanks: `Photo by <a href="https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Micheile Henderson</a> on <a href="https://unsplash.com/s/photos/finance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    `,
  },
];

const forReklam = `
это доп инфа для рекламы

Целевая аудитория:
Руководители предприятий, руководители и специалисты финансовых служб, финансовые директора, финансовые менеджеры, главные бухгалтеры, бухгалтеры коммерческих организаций, руководители и специалисты плановых и экономических служб.
Цель программы:
Освоение современных методов финансового анализа, формирование практических навыков и умений по анализу важнейших форм финансовой отчетности предприятия, изучение основных критериев кредитоспособности предприятия и оценки эффективности его инвестиций, освоение навыков прогнозирования банкротства, понимание формирования рейтинга предприятия, формирование навыков по использованию в управлении предприятием компьютерных технологий в сфере финансового анализа.
Основные темы программы:
Формирование финансовой отчетности предприятия как информационной базы анализа
Анализ финансового положения (расчет показателей ликвидности, платежеспособности, финансовой устойчивости) по данным «Бухгалтерского баланса» (ф. №1)
Анализ финансовых результатов (расчет показателей деловой активности, рентабельности) по данным «Отчета о финансовых результатах» (ф. №2)
Анализ «Отчета об изменениях капитала» (ф. №4)
Анализ денежных потоков (от инвестиционной, финансовой и операционной деятельности) по данным ф. №5. Формирование «Отчета о движении денежных средств» (ф. №5) прямым и косвенным методами
Анализ «Пояснений к бухгалтерскому балансу и отчету о финансовых результатах»
Анализ и прогнозирование банкротства: зарубежные и отечественные методики
Анализ и оценка кредитоспособности: опыт российских банков
Анализ и оценка структуры и стоимости капитала, средневзвешенная стоимость капитала компании
Основы финансовых расчетов и их использование в финансовом анализе
Анализ инвестиционной деятельности предприятия: оценка эффективности инвестиций статическими и динамическими методами
Анализ безубыточности (маржинальный анализ): графический, аналитический методы, метод уравнений
Рейтинговая оценка предприятия
Анализ и оценка стоимости предприятия: затратный, доходный, сравнительный подходы
Анализ и оценка деловой репутации компании

Как узнать, идет ли дело в правильном направлении? Мы можем помочь с планированием, моделированием и прогнозированием, а затем 
Когда ваша прибыль нуждается в улучшении, PROFITUM дает объективное представление о потребностях вашей компании и предлагает внести изменения без ущерба для видения или ценностей вашей компании.
`;
