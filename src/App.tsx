import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code2, Cpu, Globe2, Layers, CheckCircle2, Send, Terminal, Loader2, Hexagon, ChevronDown } from 'lucide-react';

const SERVICES = [
  {
    title: 'Лендинги',
    desc: 'Кинематографичные лендинги с высокой конверсией для современных стартапов.',
    icon: Globe2,
  },
  {
    title: 'Разработка MVP',
    desc: 'Быстрая разработка для точной проверки ключевых гипотез продукта.',
    icon: Layers,
  },
  {
    title: 'Frontend-архитектура',
    desc: 'Масштабируемые React/Next.js системы, спроектированные для роста бизнеса.',
    icon: Code2,
  },
  {
    title: 'AI-Native интерфейсы',
    desc: 'Иммерсивные интерфейсы на базе LLM и генеративных моделей.',
    icon: Cpu,
  },
];

const ADVANTAGES = [
  'Релиз за 7 дней',
  'Motion-First подход',
  'Премиальная архитектура',
  'Готовность к продакшену',
];

const WORKFLOW = [
  { step: '01', title: 'Погружение и архитектура', desc: 'Определение границ продукта, целевой аудитории и идеального стека технологий.' },
  { step: '02', title: 'Визуальный и Motion дизайн', desc: 'Создание премиальной эстетики с аккуратной кинематографичной анимацией.' },
  { step: '03', title: 'Разработка', desc: 'Создание приложения на базе React, TypeScript и современных инструментов.' },
  { step: '04', title: 'Запуск и передача', desc: 'Деплой, оптимизация производительности и подготовка документации.' },
];

const FAQS = [
  {
    question: 'Сколько стоит разработка лендинга или MVP?',
    answer: 'Стоимость зависит от сложности проекта, количества уникальных экранов и необходимой функциональности. В эту стоимость входит полный цикл: от проектирования до деплоя.',
  },
  {
    question: 'Вы действительно можете сделать проект за 7 дней?',
    answer: 'Да, для стандартных лендингов и базовых MVP это реальный срок. Мы достигаем такой скорости за счет отлаженных процессов, использования готовых архитектурных паттернов и сфокусированной работы без лишних бюрократических задержек.',
  },
  {
    question: 'Что происходит после релиза? Вы оказываете поддержку?',
    answer: 'Конечно. После передачи проекта я предоставляю 14 дней бесплатной технической поддержки для исправления любых критических багов. Также возможно долгосрочное сопровождение и развитие проекта на основе подписки или почасовой оплаты.',
  },
  {
    question: 'Могу ли я сам вносить изменения на сайт после сдачи?',
    answer: 'Да. Код пишется максимально чисто и понятно. Если вам нужна возможность редактировать контент без разработчиков, мы можем интегрировать любую headless CMS (например, Sanity или Strapi) на этапе проектирования архитектуры.',
  }
];

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Cinematic Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-violet-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <Navbar />

      <main className="relative z-10 flex flex-col items-center">
        <HeroSection />
        <AdvantagesSection />
        <ServicesSection />
        <WorkflowSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-[#050505]/60 border-b border-white/5"
    >
      <div className="flex items-center gap-2 font-medium tracking-tight text-white md:px-8">
        <Hexagon className="w-5 h-5 text-indigo-400" fill="currentColor" fillOpacity="0.2" />
        <span className="text-sm tracking-widest uppercase font-display">V/Studio<span className="text-indigo-500">.</span></span>
      </div>
      <div className="hidden gap-8 text-sm font-medium md:flex text-slate-400">
        <a href="#expertise" className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 rounded-sm">Экспертиза</a>
        <a href="#process" className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 rounded-sm">Процесс работы</a>
        <a href="#faq" className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 rounded-sm">FAQ</a>
      </div>
      <div className="md:px-8">
        <a href="#contact" className="inline-block px-5 py-2 text-sm font-medium transition-colors border rounded-full text-slate-300 border-white/10 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          Обсудить проект
        </a>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[85vh] px-6 pt-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-semibold tracking-wide uppercase border rounded-full text-indigo-300 border-indigo-500/20 bg-indigo-500/10">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-indigo-400"></span>
            <span className="relative inline-flex w-2 h-2 rounded-full bg-indigo-500"></span>
          </span>
          Открыт для новых проектов
        </div>
        
        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-transparent font-display sm:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-b from-white to-white/50">
          Премиальные MVP и <br className="hidden sm:block" /> кинематографичные лендинги.
        </h1>
        
        <p className="max-w-2xl mx-auto mb-10 text-lg sm:text-xl text-slate-400">
          Для амбициозных стартапов.
          <span className="block mt-2 font-medium text-white">Релиз за 7 дней.</span>
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className="flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Начать проект <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#process" className="px-8 py-3.5 text-sm font-medium transition-colors border rounded-full text-slate-300 border-white/10 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Как я работаю
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="w-full max-w-6xl px-6 py-24 border-y border-white/5 bg-white/[0.01]">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {ADVANTAGES.map((adv, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            key={i} 
            className="flex items-center gap-2 text-sm font-semibold tracking-widest text-slate-400 sm:text-sm uppercase"
          >
            <CheckCircle2 className="w-4 h-4 text-slate-500" />
            {adv}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="expertise" className="w-full max-w-6xl px-6 py-32 scroll-mt-20">
      <div className="mb-16">
        <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white font-display">Ключевая экспертиза</h2>
        <p className="text-lg text-slate-400 max-w-xl">Фокус на создании производительных и визуально безупречных интерфейсов, вызывающих доверие.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              key={i}
              className="relative p-8 overflow-hidden transition-all duration-300 ease-out border rounded-3xl border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.2)] group"
            >
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-indigo-500/10 to-transparent group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 mb-6 border rounded-xl bg-white/5 border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="mb-3 text-xl font-medium text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{service.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="process" className="w-full max-w-6xl px-6 py-32 scroll-mt-20">
      <div className="mb-16">
        <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white font-display">Процесс работы</h2>
        <p className="text-lg text-slate-400 max-w-xl">Прозрачный и отлаженный процесс для быстрого запуска без потери качества.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {WORKFLOW.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            key={i}
            className="flex flex-col sm:flex-row gap-6 p-8 border border-white/5 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/10 transition-colors"
          >
            <span className="text-3xl font-mono opacity-50 text-indigo-400 font-medium shrink-0">{item.step}</span>
            <div>
              <h3 className="mb-2 text-xl font-medium text-white font-display">{item.title}</h3>
              <p className="leading-relaxed text-slate-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="w-full max-w-3xl px-6 py-32 scroll-mt-20">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white font-display">Ответы на вопросы</h2>
        <p className="text-lg text-slate-400">Всё, что вам нужно знать перед началом работы.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }: { question: string, answer: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="border border-white/5 rounded-2xl bg-white/[0.02] overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left transition-colors hover:bg-white/[0.02] focus:outline-none focus-visible:bg-white/5"
      >
        <span className="font-medium text-white pr-8">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-slate-400 leading-relaxed pt-2 border-t border-white/5">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 800);
  };

  return (
    <section id="contact" className="w-full max-w-4xl px-6 py-32 text-center scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden p-10 sm:p-20 border rounded-[3rem] border-white/10 bg-white/[0.02]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent pointer-events-none" />
        
        <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white font-display sm:text-5xl">
          Готовы создать <br className="hidden sm:block" /> что-то выдающееся?
        </h2>
        <p className="max-w-xl mx-auto mb-10 text-lg text-slate-400">
          Давайте обсудим ваш продукт. Сейчас принимаю новые проекты на следующий месяц.
        </p>
        
        {isSent ? (
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="relative z-10 max-w-md p-8 mx-auto border bg-indigo-500/10 border-indigo-500/20 rounded-3xl"
          >
            <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
            <h3 className="mb-2 text-2xl font-medium text-white font-display">Получено!</h3>
            <p className="text-slate-400">Спасибо за интерес. Вернусь с ответом в течение часа.</p>
          </motion.div>
        ) : (
          <form className="relative z-10 max-w-md mx-auto space-y-4 text-left" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="sr-only">Ваш Email</label>
              <input 
                id="email"
                type="email" 
                value={email}
                onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
                placeholder="ceo@startup.com" 
                className={`w-full px-5 py-4 transition-colors border bg-black/50 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${emailError ? 'border-rose-500' : 'border-white/10'}`}
              />
              {emailError && <p className="mt-2 text-sm text-rose-500">Пожалуйста, введите корректный email.</p>}
            </div>
            <div>
              <label htmlFor="details" className="sr-only">Опишите задачу</label>
              <textarea 
                id="details"
                placeholder="Кратко опишите задачу..." 
                rows={3} 
                className="w-full px-5 py-4 transition-colors border resize-none bg-black/50 border-white/10 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              aria-label="Отправить заявку"
              className="flex items-center justify-center w-full gap-2 px-6 py-4 font-medium text-white transition-colors bg-indigo-600 rounded-2xl hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>Отправка... <Loader2 className="w-4 h-4 ml-1 animate-spin" /></>
              ) : (
                <>Отправить заявку <Send className="w-4 h-4 ml-1" /></>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#020202]">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-6 px-6 py-12 mx-auto sm:flex-row md:px-12">
        <div className="flex items-center gap-2 font-medium text-white transition-opacity cursor-pointer opacity-80 hover:opacity-100">
           <Hexagon className="w-5 h-5 text-indigo-400" fill="currentColor" fillOpacity="0.2" />
           <span className="text-sm tracking-widest uppercase font-display">V/Studio<span className="text-indigo-500">.</span></span>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#" className="transition-colors hover:text-white">Telegram</a>
        </div>
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} Все права защищены.
        </div>
      </div>
    </footer>
  );
}

