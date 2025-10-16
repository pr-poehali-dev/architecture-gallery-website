import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Residential Complex",
      category: "Жилые комплексы",
      image: "https://cdn.poehali.dev/projects/82ef5eed-d0d0-45d9-af58-07a3f9bfc741/files/ecd1f0dc-6e51-4df3-b88c-30722dbb29f8.jpg",
      description: "Современный жилой комплекс с панорамными окнами",
      fullDescription: "Многофункциональный жилой комплекс на 300 квартир с развитой инфраструктурой. Проект включает подземный паркинг, детские площадки, зоны отдыха и фитнес-центр. Фасады здания выполнены из высококачественных материалов с использованием панорамного остекления.",
      area: "45,000 м²",
      year: "2023",
      location: "Москва, Россия"
    },
    {
      id: 2,
      title: "Luxury Villa",
      category: "Частные дома",
      image: "https://cdn.poehali.dev/projects/82ef5eed-d0d0-45d9-af58-07a3f9bfc741/files/0d332033-40f4-4470-8d5a-d686a0165df3.jpg",
      description: "Роскошная вилла с геометрическим дизайном",
      fullDescription: "Эксклюзивная частная вилла с инновационным архитектурным решением. Проект сочетает минимализм и функциональность, создавая уникальное пространство для жизни. Большие окна обеспечивают естественное освещение и панорамный вид на ландшафт.",
      area: "850 м²",
      year: "2024",
      location: "Подмосковье, Россия"
    },
    {
      id: 3,
      title: "Office Interior",
      category: "Коммерческие пространства",
      image: "https://cdn.poehali.dev/projects/82ef5eed-d0d0-45d9-af58-07a3f9bfc741/files/beeb9001-6b7a-4f90-97eb-819373e57f35.jpg",
      description: "Минималистичный офисный интерьер",
      fullDescription: "Современное офисное пространство для IT-компании. Открытая планировка с зонами для совместной работы, переговорными комнатами и зонами отдыха. Использованы натуральные материалы: мрамор, дерево и стекло.",
      area: "2,500 м²",
      year: "2023",
      location: "Москва, Россия"
    }
  ];

  const services = [
    {
      id: 1,
      icon: "Building2",
      title: "Архитектурное проектирование",
      description: "Разработка концепций и полных архитектурных проектов",
      fullDescription: "Комплексное архитектурное проектирование жилых, коммерческих и общественных зданий. Мы создаём концепции, которые учитывают все аспекты: функциональность, эстетику, экологичность и экономическую эффективность.",
      features: ["Эскизное проектирование", "Рабочая документация", "Авторский надзор", "3D визуализация"],
      duration: "от 2 месяцев"
    },
    {
      id: 2,
      icon: "Home",
      title: "Дизайн интерьеров",
      description: "Создание уникальных интерьерных решений",
      fullDescription: "Разработка индивидуальных интерьерных решений для жилых и коммерческих помещений. Создаём пространства, которые отражают характер владельца и отвечают всем функциональным требованиям.",
      features: ["Планировочные решения", "Подбор материалов", "Комплектация мебелью", "Дизайн-проект"],
      duration: "от 1 месяца"
    },
    {
      id: 3,
      icon: "Ruler",
      title: "Градостроительство",
      description: "Проектирование городских пространств",
      fullDescription: "Разработка мастер-планов и концепций развития территорий. Создаём комфортную городскую среду с продуманной инфраструктурой, зонированием и транспортной доступностью.",
      features: ["Мастер-планирование", "Благоустройство территории", "Концепции развития", "Анализ территории"],
      duration: "от 3 месяцев"
    },
    {
      id: 4,
      icon: "Lightbulb",
      title: "Консалтинг",
      description: "Экспертные консультации по проектам",
      fullDescription: "Профессиональные консультации на всех этапах проектирования и строительства. Помогаем избежать ошибок, оптимизировать бюджет и найти лучшие архитектурные решения.",
      features: ["Технический аудит", "Оптимизация проектов", "Экспертиза документации", "Сопровождение проекта"],
      duration: "от 1 недели"
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Архитектурное бюро Мамешина</h1>
            <div className="hidden md:flex gap-8">
              {["home", "services", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {section === "home" && "Главная"}
                  {section === "services" && "Услуги"}
                  {section === "projects" && "Проекты"}
                  {section === "contact" && "Контакты"}
                </button>
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: Math.max(1 - scrollY / 500, 0)
          }}
        >
          <img 
            src="https://cdn.poehali.dev/projects/82ef5eed-d0d0-45d9-af58-07a3f9bfc741/files/18bf96fd-0e13-4f12-813b-a1e48243b603.jpg"
            alt="Architecture background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="container mx-auto max-w-6xl">
          <div 
            className="text-center mb-16 animate-fade-in"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: Math.max(1 - scrollY / 400, 0)
            }}
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              Создаём пространства<br />будущего
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Архитектурное бюро полного цикла. Проектируем жилые комплексы, частные дома и коммерческие объекты.
            </p>
            <Button size="lg" onClick={() => scrollToSection("services")} className="hover-scale">
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h3 className="text-5xl font-bold mb-4">Услуги</h3>
            <p className="text-lg text-muted-foreground">Полный спектр архитектурных услуг</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="p-8 hover-scale border-2 transition-all duration-300 hover:border-primary cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="mb-4">
                  <Icon name={service.icon} size={48} className="text-primary" />
                </div>
                <h4 className="font-bold mb-3 text-xl">{service.title}</h4>
                <p className="text-muted-foreground text-lg">{service.description}</p>
                <Button variant="ghost" className="mt-4 p-0 h-auto story-link">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h3 className="text-5xl font-bold mb-4">Проекты</h3>
            <p className="text-lg text-muted-foreground">Избранные работы нашего бюро</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden group cursor-pointer hover-scale border-0 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground">{project.description}</p>
                  <Button 
                    variant="ghost" 
                    className="mt-4 p-0 h-auto story-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project.id);
                    }}
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold mb-4">Контакты</h3>
            <p className="text-lg opacity-90">Свяжитесь с нами для обсуждения вашего проекта</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Icon name="Mail" size={32} className="mx-auto mb-3 opacity-90" />
              <p className="font-medium mb-1">Email</p>
              <p className="opacity-80">mameshin@mail.ru</p>
            </div>
            <div className="text-center">
              <Icon name="Phone" size={32} className="mx-auto mb-3 opacity-90" />
              <p className="font-medium mb-1">Телефон</p>
              <p className="opacity-80">+7 (962) 501-10-97</p>
            </div>
            <div className="text-center">
              <Icon name="MapPin" size={32} className="mx-auto mb-3 opacity-90" />
              <p className="font-medium mb-1">Адрес</p>
              <p className="opacity-80"></p>
            </div>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Mameshin Architect. Все права защищены.</p>
        </div>
      </footer>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (() => {
            const project = projects.find(p => p.id === selectedProject);
            if (!project) return null;
            
            return (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold mb-2">{project.title}</DialogTitle>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">{project.category}</p>
                </DialogHeader>
                
                <div className="space-y-6 mt-4">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Площадь</p>
                      <p className="font-semibold text-lg">{project.area}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Год</p>
                      <p className="font-semibold text-lg">{project.year}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Локация</p>
                      <p className="font-semibold text-lg">{project.location}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-3">О проекте</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button className="flex-1" onClick={() => scrollToSection("contact")}>
                      <Icon name="Mail" size={18} className="mr-2" />
                      Обсудить проект
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={() => setSelectedProject(null)}>
                      Закрыть
                    </Button>
                  </div>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>

      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedService && (() => {
            const service = services.find(s => s.id === selectedService);
            if (!service) return null;
            
            return (
              <>
                <DialogHeader>
                  <div className="mb-4">
                    <Icon name={service.icon} size={56} className="text-primary" />
                  </div>
                  <DialogTitle className="text-3xl font-bold mb-2">{service.title}</DialogTitle>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                </DialogHeader>
                
                <div className="space-y-6 mt-4">
                  <div>
                    <h4 className="text-xl font-bold mb-3">Описание услуги</h4>
                    <p className="text-muted-foreground leading-relaxed">{service.fullDescription}</p>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <h4 className="text-xl font-bold mb-4">Что входит в услугу</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="font-semibold">Сроки выполнения</span>
                    </div>
                    <p className="text-muted-foreground">{service.duration}</p>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button className="flex-1" onClick={() => {
                      setSelectedService(null);
                      scrollToSection("contact");
                    }}>
                      <Icon name="Mail" size={18} className="mr-2" />
                      Заказать услугу
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={() => setSelectedService(null)}>
                      Закрыть
                    </Button>
                  </div>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold">ARCHBUREAU</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8">
            {["home", "services", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-left text-lg py-3 px-4 rounded-lg transition-all ${
                  activeSection === section 
                    ? "bg-primary text-primary-foreground font-semibold" 
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {section === "home" && "Главная"}
                {section === "services" && "Услуги"}
                {section === "projects" && "Проекты"}
                {section === "contact" && "Контакты"}
              </button>
            ))}
          </nav>
          <div className="mt-auto pt-8 border-t border-border">
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@archbureau.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Index;