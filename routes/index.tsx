import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Bike,
  Building2,
  Check,
  ChevronRight,
  Dumbbell,
  MapPin,
  MessageCircle,
  PartyPopper,
  Waves,
  Wifi,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import facadeAsset from "../assets/nex-one-fachada.jpg.asset.json";
import fitnessAsset from "../assets/nex-one-fitness.jpg.asset.json";
import poolAsset from "../assets/nex-one-piscina.jpg.asset.json";
import logoBrownAsset from "../assets/revenda-logo-brown.png.asset.json";
import logoLightAsset from "../assets/revenda-logo-light.png.asset.json";
import floorplanPdf from "../assets/Cópia de AF_ONE_007_26_DIGITAL_NEXONE_BELA_CINTRA_BOOK_CLIENTE (2) 2 (1).pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nex One Bela Cintra | Revenda Imóvel" },
      {
        name: "description",
        content:
          "Studios disponíveis no Nex One Bela Cintra, de 20 a 32 m², no coração da Consolação em São Paulo.",
      },
      { property: "og:title", content: "Nex One Bela Cintra | Revenda Imóvel" },
      {
        property: "og:description",
        content: "Studios de 20 a 32 m² em um dos endereços mais estratégicos de São Paulo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const floorplanPageByArea = {
  "20": 12,
  "25": 15,
  "32": 20,
} as const;

const units = [
  { number: "305", type: "HIS", area: "25,39 m²", price: "R$ 357.050,00" },
  { number: "306", type: "R2V", area: "20,47 m²", price: "R$ 406.180,00" },
  { number: "307", type: "R2V", area: "20,45 m²", price: "R$ 405.780,00" },
  { number: "205", type: "HIS", area: "25,39 m²", price: "R$ 357.050,00" },
  { number: "206", type: "R2V", area: "20,47 m²", price: "R$ 406.180,00" },
  { number: "207", type: "R2V", area: "20,45 m²", price: "R$ 405.780,00" },
  { number: "304", type: "R2V", area: "32,30 m²", price: "R$ 640.920,00" },
  { number: "204", type: "R2V", area: "32,30 m²", price: "R$ 640.920,00" },
];

const amenities = [
  { icon: PartyPopper, label: "Lounge festas" },
  { icon: Wifi, label: "Coworking" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: Bike, label: "Gourmet com churrasqueira" },
  { icon: Waves, label: "Piscina no rooftop" },
  { icon: Building2, label: "Wellness" },
];

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#topo" className="brand-mark" aria-label="Revenda Imóvel — início">
      <img
        src={inverse ? logoLightAsset.url : logoBrownAsset.url}
        alt="Revenda Imóvel"
        className="brand-logo"
      />
    </a>
  );
}

function Index() {
  const [sent, setSent] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("");

  const whatsappBaseUrl = "https://wa.me/5511981799032";

  function whatsappUrl(unit?: string) {
    const unitDetails = units.find((item) => item.number === unit);
    const message = unitDetails
      ? `Olá! Tenho interesse na unidade ${unitDetails.number} do Nex One Bela Cintra, com ${unitDetails.area}, no valor de ${unitDetails.price}. Gostaria de mais informações.`
      : "Olá! Tenho interesse no Nex One Bela Cintra e gostaria de receber mais informações sobre as unidades disponíveis.";

    return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  }

  function chooseUnit(unit: string) {
    setSelectedUnit(unit);
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  }

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main id="topo" className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="site-container flex h-24 items-center justify-between">
          <BrandMark inverse />
          <nav className="hidden items-center gap-8 text-sm font-medium text-hero-foreground/80 md:flex" aria-label="Navegação principal">
            <a href="#empreendimento" className="transition-colors hover:text-hero-foreground">O empreendimento</a>
            <a href="#unidades" className="transition-colors hover:text-hero-foreground">Unidades</a>
            <a href="#localizacao" className="transition-colors hover:text-hero-foreground">Localização</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="button button-whatsapp" aria-label="Conversar pelo WhatsApp">
              <MessageCircle size={17} /> <span className="hidden lg:inline">WhatsApp</span>
            </a>
            <a href="#contato" className="button button-light">Falar com especialista</a>
          </div>
        </div>
      </header>

      <section className="hero-section relative flex min-h-[92svh] items-end" aria-labelledby="hero-title">
        <img src={facadeAsset.url} alt="Fachada do Nex One Bela Cintra" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="site-container relative z-10 pb-16 pt-36 text-hero-foreground md:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6 text-brand-soft">Nex One · Bela Cintra</p>
            <h1 id="hero-title" className="font-display text-5xl font-semibold leading-[0.96] md:text-7xl lg:text-8xl">
              Seu lugar no centro de tudo.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-hero-foreground/82 md:text-xl">
              Studios de 20 a 32 m² em um dos endereços mais desejados de São Paulo.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#unidades" className="button button-primary">Ver unidades <ArrowRight size={17} /></a>
              <a href="#empreendimento" className="button button-ghost">Conhecer o projeto <ArrowDown size={17} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="empreendimento" className="section-space bg-background">
        <div className="site-container grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="eyebrow text-primary">Viver onde a vida pulsa</p>
            <h2 className="section-title mt-5 max-w-2xl">Um verdadeiro privilégio urbano.</h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Na Rua Pedro Taques, 77, o Nex One Bela Cintra entrega a conveniência e a modernidade essenciais para quem vive o dinamismo de São Paulo.
            </p>
            <div className="mt-10 grid grid-cols-3 border-y border-border py-6">
              <div><strong className="stat">1</strong><span className="stat-label">torre</span></div>
              <div className="border-x border-border px-5"><strong className="stat">412</strong><span className="stat-label">unidades</span></div>
              <div className="pl-5"><strong className="stat">20–32</strong><span className="stat-label">m²</span></div>
            </div>
          </div>
          <div className="image-frame relative aspect-[4/3] overflow-hidden">
            <img src={poolAsset.url} alt="Piscina no rooftop com vista para São Paulo" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute bottom-0 left-0 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Piscina no rooftop</div>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-dark text-brand-dark-foreground">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-brand-soft">Estrutura completa</p>
              <h2 className="section-title mt-5 max-w-2xl">Tudo para viver bem, sem sair de casa.</h2>
            </div>
            <p className="max-w-sm leading-relaxed text-brand-dark-foreground/65">Ambientes pensados para o seu ritmo, do trabalho ao descanso.</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-px bg-brand-line md:grid-cols-3 lg:grid-cols-6">
            {amenities.map(({ icon: Icon, label }) => (
              <div key={label} className="amenity bg-brand-dark">
                <Icon size={27} strokeWidth={1.5} className="text-brand-soft" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="unidades" className="section-space bg-brand-wash">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary">Disponibilidade</p>
            <h2 className="section-title mt-5">Escolha a sua unidade.</h2>
            <p className="mt-5 text-muted-foreground">Valores e disponibilidade informados no material recebido.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {units.map((unit) => (
              <article key={unit.number} className="unit-card group overflow-hidden">
                <div className="-mx-6 -mt-6 mb-5 h-40 overflow-hidden border-b border-border bg-black">
                  <iframe
                    title={`Planta ilustrativa da unidade ${unit.number}, ${unit.area}`}
                    src={`${floorplanPdf}#page=${floorplanPageByArea[unit.area.slice(0, 2) as keyof typeof floorplanPageByArea]}&view=FitH`}
                    className="border-0"
                    style={{
                      width: "720px",
                      height: "405px",
                      transform: "scale(0.5)",
                      transformOrigin: "top left",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <span className="availability"><Check size={12} /> Disponível</span>
                  <span className="text-sm font-medium text-muted-foreground">{unit.type}</span>
                </div>
                <h3 className="mt-8 text-4xl font-semibold">{unit.number}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Unidade · {unit.area}</p>
                <div className="mt-7 border-t border-border pt-5">
                  <span className="block text-xs uppercase text-muted-foreground">Valor</span>
                  <strong className="mt-1 block text-lg">{unit.price}</strong>
                </div>
                <a
                  href="#contato"
                  onClick={(event) => {
                    event.preventDefault();
                    chooseUnit(unit.number);
                  }}
                  className="mt-6 flex items-center justify-between text-sm font-semibold text-primary"
                >
                  Quero saber mais <ChevronRight size={17} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`${floorplanPdf}#page=${floorplanPageByArea[unit.area.slice(0, 2) as keyof typeof floorplanPageByArea]}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-xs font-medium text-muted-foreground underline underline-offset-4"
                >
                  Abrir planta no PDF
                </a>
                <a href={whatsappUrl(unit.number)} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-foreground">
                  <MessageCircle size={16} className="text-primary" /> Consultar no WhatsApp
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">Disponibilidade e valores sujeitos a alteração sem aviso prévio. Consulte as condições com um especialista.</p>
        </div>
      </section>

      <section id="localizacao" className="section-space bg-background">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[480px] overflow-hidden">
            <img src={fitnessAsset.url} alt="Espaço fitness do Nex One Bela Cintra" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="lg:pl-10">
            <p className="eyebrow text-primary">Consolação · São Paulo</p>
            <h2 className="section-title mt-5">Conectado ao melhor da cidade.</h2>
            <div className="mt-9 space-y-1">
              {[
                ["Rua da Consolação", "1 min a pé"],
                ["Metrô Higienópolis–Mackenzie", "8 min a pé"],
                ["Shopping Frei Caneca", "10 min a pé"],
                ["Hospital Sírio-Libanês", "12 min a pé"],
              ].map(([place, time]) => (
                <div key={place} className="flex items-center justify-between gap-6 border-b border-border py-4">
                  <span className="flex items-center gap-3 font-medium"><MapPin size={17} className="text-primary" />{place}</span>
                  <span className="text-sm text-muted-foreground">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="section-space bg-primary text-primary-foreground">
        <div className="site-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow text-primary-foreground/70">Atendimento personalizado</p>
            <h2 className="section-title mt-5">Vamos encontrar a unidade ideal para você.</h2>
            <p className="mt-6 max-w-md leading-relaxed text-primary-foreground/75">Preencha seus dados e nossa equipe entrará em contato para apresentar todas as condições.</p>
          </div>
          {sent ? (
            <div className="success-panel">
              <span className="success-icon"><Check size={26} /></span>
              <h3 className="mt-6 text-2xl font-semibold">Interesse registrado.</h3>
              <p className="mt-2 text-primary-foreground/70">Nossa equipe entrará em contato com você.</p>
            </div>
          ) : (
            <form onSubmit={submitLead} className="grid gap-4 rounded-sm bg-background p-6 text-foreground md:grid-cols-2 md:p-8">
              <label className="field md:col-span-2"><span>Nome</span><input required name="name" maxLength={100} autoComplete="name" placeholder="Como podemos chamar você?" /></label>
              <label className="field"><span>Telefone</span><input required name="phone" type="tel" inputMode="tel" minLength={8} maxLength={20} autoComplete="tel" placeholder="(11) 99999-9999" /></label>
              <label className="field"><span>E-mail</span><input required name="email" type="email" maxLength={255} autoComplete="email" placeholder="voce@email.com" /></label>
              <label className="field md:col-span-2"><span>Unidade de interesse</span><select name="unit" value={selectedUnit} onChange={(event) => setSelectedUnit(event.target.value)}><option value="" disabled>Selecione uma unidade</option>{units.map((unit) => <option key={unit.number} value={unit.number}>Unidade {unit.number} · {unit.area} · {unit.price}</option>)}</select></label>
              <button type="submit" className="button button-dark mt-2 md:col-span-2">Quero receber mais informações <ArrowRight size={17} /></button>
              <a href={whatsappUrl(selectedUnit)} target="_blank" rel="noreferrer" className="button button-outline md:col-span-2">
                <MessageCircle size={17} /> Prefiro conversar pelo WhatsApp
              </a>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-brand-dark py-10 text-brand-dark-foreground">
        <div className="site-container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <BrandMark inverse />
          <div className="max-w-2xl text-xs leading-relaxed text-brand-dark-foreground/55 md:text-right">
            <p>Nex One Bela Cintra · Rua Pedro Taques, 77 — Consolação, São Paulo.</p>
            <p className="mt-2">Imagens meramente ilustrativas. As informações do Memorial de Incorporação e do Memorial de Vendas prevalecem sobre este material.</p>
          </div>
        </div>
      </footer>

      <a href={whatsappUrl(selectedUnit)} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Conversar com a Revenda Imóvel pelo WhatsApp">
        <MessageCircle size={24} />
        <span>WhatsApp</span>
      </a>
    </main>
  );
}