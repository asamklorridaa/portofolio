import { useState } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronUp, Mail, MessageCircle } from "lucide-react";

/** Pergerakan naik + membesar kartu: tween biar halus, tanpa pantulan spring */
const cardLift = {
  duration: 0.45,
  ease: [0.25, 0.1, 0.25, 1] as const,
};
/** Ikon area preview: spring lebih empuk saat hover */
const iconHoverSpring = { type: "spring" as const, stiffness: 280, damping: 22, mass: 0.9 };
const contentEase = [0.22, 1, 0.36, 1] as const;

interface Props {
  title: string;
  description: string;
  icon: string;
  price: string;
  tags: readonly string[];
  whatsappUrl: string;
  emailUrl: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  price,
  tags,
  whatsappUrl,
  emailUrl,
  className,
}: Props) {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <motion.div
      className={cn(
        "group/card relative isolate flex flex-col h-full w-full min-w-0 border border-border rounded-xl overflow-hidden hover:ring-2 cursor-default hover:ring-muted",
        className
      )}
      initial={false}
      whileHover={{
        scale: 1.006,
        boxShadow: "0 20px 45px -20px color-mix(in oklab, var(--foreground) 14%, transparent)",
      }}
      transition={{
        boxShadow: cardLift,
        scale: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      }}
      style={{ transformOrigin: "50% 0%" }}
    >
      {/* Glow lembut dari belakang kartu saat hover */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-px -z-10 rounded-[14px] opacity-0 blur-xl transition-opacity duration-300",
          "bg-[radial-gradient(70%_65%_at_50%_0%,hsl(var(--primary)/0.25),transparent_72%)]",
          "group-hover/card:opacity-100"
        )}
      />

      {/* Area kartu: klik untuk buka/tutup deskripsi (sama pola dengan work experience) */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={detailOpen}
        aria-label={detailOpen ? "Sembunyikan deskripsi layanan" : "Tampilkan deskripsi lengkap"}
        className={cn(
          "group flex min-w-0 flex-1 flex-col text-left outline-none",
          "cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        )}
        onClick={() => setDetailOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setDetailOpen((v) => !v);
          }
        }}
      >
        <div className="relative shrink-0 w-full h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
          <motion.div
            className="text-7xl opacity-80"
            transition={iconHoverSpring}
            whileHover={{ scale: 1.08 }}
          >
            {icon}
          </motion.div>
        </div>

        <div className="flex min-w-0 flex-col gap-3 p-6 pb-3">
          <div className="flex items-start gap-2">
            <h3 className="min-w-0 flex-1 font-semibold leading-snug">{title}</h3>
            <span className="relative mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center">
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{ opacity: detailOpen ? 0 : 1, scale: detailOpen ? 0.85 : 1 }}
                transition={{ duration: 0.2, ease: contentEase }}
              >
                <ChevronRight
                  className={cn(
                    "h-4 w-4 text-muted-foreground stroke-2",
                    "opacity-0 group-hover:opacity-100"
                  )}
                  aria-hidden
                />
              </motion.span>
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{ opacity: detailOpen ? 1 : 0, scale: detailOpen ? 1 : 0.85 }}
                transition={{ duration: 0.22, ease: contentEase, delay: detailOpen ? 0.04 : 0 }}
              >
                <ChevronUp className="h-4 w-4 text-muted-foreground stroke-2" aria-hidden />
              </motion.span>
            </span>
          </div>

          <div
            className={cn(
              "relative min-h-0 overflow-hidden motion-reduce:transition-none",
              "transition-[max-height] duration-[450ms] [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1)]",
              detailOpen ? "max-h-[min(120rem,280vh)]" : "max-h-[4.875rem]"
            )}
          >
            <motion.p
              initial={false}
              animate={{
                opacity: detailOpen ? 1 : 0.94,
                y: detailOpen ? 0 : -1,
              }}
              transition={{ duration: 0.3, ease: contentEase }}
              className="text-pretty font-sans text-xs leading-relaxed text-muted-foreground"
            >
              {description}
            </motion.p>
            {!detailOpen && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background via-background/80 to-transparent"
              />
            )}
          </div>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="pointer-events-none w-fit whitespace-nowrap rounded-full border border-border px-2.5 py-1 text-[11px] leading-none font-medium"
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quote + actions — di luar tombol expand agar link valid */}
      <div className="mt-auto w-full min-w-0 px-6 pb-6 pt-0">
          <div className="max-w-full rounded-lg border border-border bg-muted/40 p-4 space-y-3">
            <p className="text-center text-sm text-muted-foreground leading-snug break-words">
              {price}
            </p>
            <div className="flex w-full min-w-0 flex-col gap-2 md:flex-row md:gap-3">
              <Button
                asChild
                variant="default"
                size="lg"
                className="h-11 w-full min-w-0 max-w-full shrink gap-2 md:flex-1 md:basis-0"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5 shrink-0" aria-hidden />
                  Chat
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 w-full min-w-0 max-w-full shrink gap-2 border-border bg-background hover:bg-accent md:flex-1 md:basis-0"
              >
                <a href={emailUrl}>
                  <Mail className="size-5 shrink-0" aria-hidden />
                  Email
                </a>
              </Button>
            </div>
          </div>
      </div>
    </motion.div>
  );
}
