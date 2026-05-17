import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Globe, Layers, Smartphone } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function NextSolAboutPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-10 relative">
      {/* ── Back Navigation ─────────────────────────────────────────── */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <a href="/nextsol" id="nextsol-back-link">
          <Button variant="ghost" size="sm" className="gap-1.5 -ml-2 text-muted-foreground">
            <ArrowLeft className="size-3.5" />
            Kembali ke NextSol
          </Button>
        </a>
      </BlurFade>

      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section id="about-hero">
        <div className="flex flex-col gap-4">
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 2}
            className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
            yOffset={8}
            text="About NextSol"
          />
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              NextSol adalah layanan digital & teknologi yang hadir sebagai solusi tunggal
              untuk kebutuhan desain, servis perangkat, dan pembuatan website.
            </p>
          </BlurFade>
        </div>
      </section>

      <Separator />

      {/* ── Brand Identity Section ───────────────────────────────────── */}
      <section id="brand-identity">
        <div className="flex flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-bold">Brand Identity</h2>
          </BlurFade>

          {/* ── Primary Logo Block ─── */}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Primary Logo
                </span>
              </div>

              {/* Logo Display Area */}
              <div className="border border-border rounded-xl bg-background flex items-center justify-center min-h-60 px-8 py-12">
                {/* Primary logo image - replace src when asset is ready */}
                <img
                  src="/nextsol/logo-primary.png"
                  alt="NextSol Primary Logo"
                  className="max-h-40 max-w-full object-contain"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    const placeholder = el.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = "flex";
                  }}
                />
                {/* Placeholder shown when image is missing */}
                <div
                  className="hidden flex-col items-center gap-3 text-muted-foreground"
                  aria-hidden="true"
                >
                  <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Layers className="size-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium">NextSol</span>
                  <span className="text-xs text-center max-w-40">
                    Tempatkan file <code className="text-xs bg-muted px-1 rounded">logo-primary.png</code> di{" "}
                    <code className="text-xs bg-muted px-1 rounded">public/nextsol/</code>
                  </span>
                </div>
              </div>

              {/* Primary Logo Description */}
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Logo utama NextSol dirancang dengan prinsip kesederhanaan dan keterbacaan tinggi,
                  mencerminkan brand yang modern, teknologis, dan terpercaya. Elemen visual dipilih
                  untuk menyampaikan kesan profesional sekaligus mudah diingat.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Filosofi desain berpusat pada konsep "solusi" — setiap elemen logo merepresentasikan
                  koneksi antara kebutuhan klien dan jawaban yang cepat dan tepat dari NextSol.
                </p>
              </div>
            </div>
          </BlurFade>

          <Separator />

          {/* ── Makna Logo ─── */}
          <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold">Makna Logo 1</h3>
              </div>

              {/* Logo Display Area */}
              <div className="border border-border rounded-xl bg-muted/30 flex items-center justify-center min-h-48 px-8 py-10">
                <img
                  src="/nextsol/makna-1.png"
                  alt="Makna Logo 1"
                  className="max-h-40 max-w-full object-contain"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    const placeholder = el.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = "flex";
                  }}
                />
                <div
                  className="hidden flex-col items-center gap-3 text-muted-foreground"
                  aria-hidden="true"
                >
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe className="size-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">NS</span>
                  <span className="text-xs text-center max-w-40">
                    Tempatkan file <code className="text-xs bg-muted px-1 rounded">makna-1.png</code> di{" "}
                    <code className="text-xs bg-muted px-1 rounded">public/nextsol/</code>
                  </span>
                </div>
              </div>

              {/* Secondary Logo Description */}
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Makna pertama logo NextSol mencerminkan siluet seorang atlet yang sedang berlari, melambangkan semangat untuk terus bergerak maju dalam mengejar kemenangan, kesuksesan, dan kejayaan tanpa henti.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* ── Makna Logo 2 ─── */}
          <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold">Makna Logo 2</h3>
              </div>

              {/* Logo Display Area */}
              <div className="border border-border rounded-xl bg-muted/30 flex items-center justify-center min-h-48 px-8 py-10">
                <img
                  src="/nextsol/makna-2.png"
                  alt="NextSol Makna 2"
                  className="max-h-40 max-w-full object-contain"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    const placeholder = el.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = "flex";
                  }}
                />
                <div
                  className="hidden flex-col items-center gap-3 text-muted-foreground"
                  aria-hidden="true"
                >
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe className="size-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">NS</span>
                  <span className="text-xs text-center max-w-40">
                    Tempatkan file <code className="text-xs bg-muted px-1 rounded">makna-2.png</code> di{" "}
                    <code className="text-xs bg-muted px-1 rounded">public/nextsol/</code>
                  </span>
                </div>
              </div>

              {/* Makna Logo 2 Description */}
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Kedua logo NextSol membentuk wajah tersenyum sebagai simbol keramahan, kenyamanan, dan kepuasan pelanggan. Elemen ini juga mencerminkan bahwa NextSol mengutamakan pelayanan yang humanis, mudah didekati, dan berfokus pada pengalaman terbaik bagi pelanggan.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* ── Makna Logo ─── */}
          <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold">Makna Logo</h3>
              </div>

              {/* Logo Display Area */}
              <div className="border border-border rounded-xl bg-muted/30 flex items-center justify-center min-h-48 px-8 py-10">
                <img
                  src="/nextsol/makna-3.png"
                  alt="Makna Logo 3"
                  className="max-h-40 max-w-full object-contain"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    const placeholder = el.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = "flex";
                  }}
                />
                <div
                  className="hidden flex-col items-center gap-3 text-muted-foreground"
                  aria-hidden="true"
                >
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe className="size-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">NS</span>
                  <span className="text-xs text-center max-w-40">
                    Tempatkan file <code className="text-xs bg-muted px-1 rounded">makna-3.png</code> di{" "}
                    <code className="text-xs bg-muted px-1 rounded">public/nextsol/</code>
                  </span>
                </div>
              </div>

              {/* Secondary Logo Description */}
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Makna ketiga logo NextSol adalah tanpak 2 huruf S yang menyatu dan di flip secara horizontal, yang menyambung pada bagiaan punggung huruf S, yang mengartikan sambungan kata Sol dari NextSol yang artinya adalah Solution. Karna visi kami membantu memecahkan sebuah masalah yang dihadapi oleh pelanggan. 
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <Separator />

      {/* ── Brand Description Section ─────────────────────────────────── */}
      <section id="brand-description">
        <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
          <div className="flex min-h-0 flex-col gap-y-4">
            <h2 className="text-xl font-bold">Tentang NextSol</h2>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <p>
                NextSol adalah layanan teknologi dan digital yang berfokus pada tiga bidang utama:
                desain kreatif, servis perangkat, dan pembuatan website. Didirikan dengan visi
                menjadi penyedia jasa teknologi yang dapat diandalkan, NextSol hadir untuk menjembatani kebutuhan digital
                pengguna dan solusi yang cepat, terjangkau, serta berkualitas.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { icon: Layers, label: "Design" },
                { icon: Smartphone, label: "Servis HP & Laptop" },
                { icon: Globe, label: "Website Development" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2"
                >
                  <item.icon className="size-4 rounded overflow-hidden object-contain" />
                  <span className="text-foreground text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
