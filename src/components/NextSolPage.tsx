import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/data/resume";
import {
  Palette,
  Smartphone,
  Laptop,
  Globe,
  Zap,
  DollarSign,
  Star,
  MessageCircle,
  PenTool,
  Image,
  Layers,
  Wrench,
  RefreshCw,
  Cpu,
  HardDrive,
  Settings,
  Code,
  LayoutTemplate,
  AppWindow,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const WHATSAPP_URL = DATA.contact.social.WhatsApp.url;

const services = [
  {
    icon: Palette,
    title: "Design",
    description:
      "Desain UI/UX, logo, branding, dan konten visual yang profesional untuk kebutuhan digital Anda.",
    tags: ["UI/UX Design", "Logo & Branding", "Poster", "Social Media"],
  },
  {
    icon: Smartphone,
    title: "Servis HP",
    description:
      "Perbaikan hardware dan software smartphone, instal ulang sistem, hingga penggantian komponen.",
    tags: ["Perbaikan Hardware", "Instal Ulang", "Ganti Part"],
  },
  {
    icon: Laptop,
    title: "Servis Laptop",
    description:
      "Maintenance, upgrade hardware, dan troubleshooting laptop untuk performa optimal.",
    tags: ["Maintenance", "Upgrade", "Troubleshooting"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Pembuatan landing page, company profile, hingga web app sederhana yang modern dan responsif.",
    tags: ["Landing Page", "Company Profile", "Web App"],
  },
];

const whyNextSol = [
  {
    icon: Zap,
    title: "Cepat & Responsif",
    description: "Pengerjaan tepat waktu dengan komunikasi yang aktif setiap saat.",
  },
  {
    icon: DollarSign,
    title: "Harga Fleksibel",
    description: "Tarif yang transparan dan bisa disesuaikan dengan kebutuhan.",
  },
  {
    icon: Star,
    title: "Hasil Berkualitas",
    description: "Setiap pekerjaan dikerjakan dengan standar kualitas tinggi.",
  },
  {
    icon: MessageCircle,
    title: "Bisa Konsultasi",
    description: "Gratis konsultasi sebelum pengerjaan untuk hasil terbaik.",
  },
];

export default function NextSolPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section id="nextsol-hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col gap-4">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
              yOffset={8}
              text="NextSol"
            />
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 2}
              className="text-xl font-medium text-muted-foreground"
              text="Solusi Digital & Teknologi untuk Kamu"
            />
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <p className="text-muted-foreground max-w-lg leading-relaxed">
                Layanan all-in-one mulai dari desain kreatif, servis perangkat HP & laptop,
                hingga pembuatan website. Satu tempat, semua beres.
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="nextsol-cta-contact"
                >
                  <Button size="lg">Hubungi Saya</Button>
                </a>
                <a href="#nextsol-services" id="nextsol-cta-services">
                  <Button variant="outline" size="lg">
                    Lihat Layanan
                  </Button>
                </a>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── Layanan Section ──────────────────────────────────────────── */}
      <section id="nextsol-services">
        <div className="flex min-h-0 flex-col gap-y-8">
          {/* Section Label */}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col gap-y-3 items-center justify-center">
              <div className="flex items-center w-full">
                <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                  <span className="text-background text-sm font-medium">Layanan</span>
                </div>
                <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
                Apa yang Bisa Saya Bantu?
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed text-balance text-center">
                Empat layanan utama yang siap membantu kebutuhan digital dan teknis Anda.
              </p>
            </div>
          </BlurFade>

          {/* Service Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {services.map((service, idx) => (
              <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 6 + idx * 0.05}>
                <div className="flex flex-col h-full border border-border rounded-xl p-6 gap-4 hover:ring-2 hover:ring-muted transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="size-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kenapa NextSol? Section ───────────────────────────────────── */}
      <section id="nextsol-why">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Kenapa NextSol?</h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whyNextSol.map((item, idx) => (
              <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 12 + idx * 0.05}>
                <div className="flex gap-3 items-start p-4 border border-border rounded-xl hover:ring-2 hover:ring-muted transition-all duration-200">
                  <CheckCircle className="size-5 text-primary flex-none mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-sm">{item.title}</span>
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </span>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── About NextSol CTA ─────────────────────────────────────────── */}
      <section id="nextsol-about-cta">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="flex items-center justify-between gap-4 py-4 border-y border-border">
            <div className="flex flex-col gap-1">
              <span className="font-semibold">Kenali NextSol Lebih Dalam</span>
              <span className="text-sm text-muted-foreground">
                Lihat identitas brand, logo, dan visi layanan kami.
              </span>
            </div>
            <a href="/nextsol/about" id="nextsol-about-link">
              <Button variant="outline" size="sm" className="flex-none gap-1.5">
                About NextSol
                <ArrowRight className="size-3.5" />
              </Button>
            </a>
          </div>
        </BlurFade>
      </section>

      {/* ── CTA Final Section ─────────────────────────────────────────── */}
      <section id="nextsol-contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="border rounded-xl p-10 relative">
            {/* Label badge */}
            <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
              <span className="text-background text-sm font-medium">Kontak</span>
            </div>

            {/* Flickering grid background */}
            <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Punya masalah di device atau butuh website?
              </h2>
              <p className="mx-auto max-w-lg text-muted-foreground text-balance">
                Ceritakan kebutuhan Anda dan saya siap membantu segera. Chat langsung via WhatsApp.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="nextsol-final-cta"
              >
                <Button size="lg">Chat Sekarang</Button>
              </a>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
