import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Astro } from "@/components/ui/svgs/astro";
import { Figma } from "@/components/ui/svgs/figma";
import { Affinity } from "@/components/ui/svgs/affinity";
import { MicrosoftOffice } from "@/components/ui/svgs/msoffice";
import { Canva } from "@/components/ui/svgs/canva";
import { VSCode } from "@/components/ui/svgs/vscode";
import { Cisco } from "@/components/ui/svgs/cisco";
import { MikroTik } from "@/components/ui/svgs/mikrotik";

export const DATA = {
  name: "Fachri Ahsani - Cyber Security Engineer",
  initials: "FA",
  url: "https://asamklorridaa.vercel.app",
  location: "Banyumas, Indonesia",
  locationLink: "https://www.google.com/maps/place/banyumas",
  description:
    "Mahasiswa aktif Politeknik Negeri Cilacap jurusan Rekayasa Keamanan Cyber. Memiliki minat dalam dunia teknologi informasi dan Digital Production.",
  summary:
    "Saat ini saya merupakan mahasiswa aktif [Politeknik Negeri Cilacap](https://pmb.pnc.ac.id/) jurusan [Rekayasa Keamanan Cyber](https://jkb.pnc.ac.id/siber/) yang memiliki ketertarikan besar pada dunia teknologi informasi, keamanan siber, dan digital production. Saya senang mempelajari berbagai teknologi baru, mengembangkan keterampilan di bidang IT, serta membangun proyek kreatif dan modern yang menggabungkan aspek desain, teknologi, dan pengalaman pengguna.",
  avatarUrl: "/fachri.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: false,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    services: {
      order: 6, enabled: true,
      label: "Services",
      heading: "Jasa & Layanan",
      text: "Saya menawarkan berbagai jasa di bidang keamanan siber, dan digital production. Hubungi saya untuk kebutuhan Anda.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 8, enabled: true,
      heading: "My Recent Documentations",
    },
    contact: {
      order: 9, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Ingin berkomunikasi? Kirim pesan langsung melalui Email atau WhatsApp yang tersedia.",
    },
  },
  photos: [
    { src: "/photos/cyber3.jpg", alt: "Foto pengumuman juara kompetisi cyber security" },
    { src: "/photos/cyber2.jpg", alt: "Foto dengan lawan kompetisi cyber security" },
    { src: "/photos/cyber1.jpg", alt: "Foto dengan lawan kompetisi cyber security" },
    { src: "/photos/pkl1.jpg", alt: "Foto PKL dengan pembimbing" },
    
  ],
  skills: [
    { name: "Astro", icon: Astro },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Figma", icon: Figma },
    { name: "Affinity", icon: Affinity },
    { name: "Microsoft Office", icon: MicrosoftOffice },
    { name: "Canva", icon: Canva },
    { name: "VS Code", icon: VSCode },
    { name: "Cisco", icon: Cisco },
    { name: "MikroTik", icon: MikroTik },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "fachriahsani86@gmail.com",
    tel: "+62 895-3419-36712",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/asamklorridaa",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/62895341936712?text=Halo, setelah melihat website profil Anda, saya tertarik untuk berkomunikasi lebih lanjut dengan Anda. Apakah Anda bersedia untuk berdiskusi lebih lanjut?",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:fachriahsani86@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    // {
    //   company: "Meridian Labs",
    //   href: "https://meridian.so",
    //   badges: ["Founder"],
    //   location: "Austin, TX",
    //   title: "Co-founder & Engineer",
    //   logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
    //   start: "January 2023",
    //   end: undefined,
    //   description:
    //     "Building a suite of developer productivity tools focused on local-first architecture and offline sync. Grew to 1,200 paying customers within the first year. Responsible for the full stack - product, engineering, and growth.",
    // },
    // {
    //   company: "Stripe",
    //   href: "https://stripe.com",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer Intern",
    //   logoUrl: "https://www.google.com/s2/favicons?domain=stripe.com&sz=128",
    //   start: "May 2022",
    //   end: "August 2022",
    //   description:
    //     "Worked on the Payments Infrastructure team. Built an internal load-testing framework in Go that reduced regression testing time by 60%. Contributed to the migration of legacy billing logic to a new event-driven architecture using Kafka.",
    // },
    // {
    //   company: "Cloudflare",
    //   href: "https://cloudflare.com",
    //   badges: [],
    //   location: "Remote",
    //   title: "Software Engineer Intern",
    //   logoUrl: "https://www.google.com/s2/favicons?domain=cloudflare.com&sz=128",
    //   start: "September 2021",
    //   end: "December 2021",
    //   description:
    //     "Joined the Workers team during a co-op term. Implemented a new dashboard UI for monitoring Worker invocation metrics using React and D3. Added support for custom error boundaries in the Workers runtime sandbox.",
    // },
    // {
    //   company: "Datadog",
    //   href: "https://datadoghq.com",
    //   badges: [],
    //   location: "New York, NY",
    //   title: "Software Engineer Intern",
    //   logoUrl: "https://www.google.com/s2/favicons?domain=datadoghq.com&sz=128",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Built new alert correlation features in the Incidents product using Python and React. Improved p99 query latency on the metrics explorer by 40% through query plan optimizations in PostgreSQL.",
    // },
    {
      company: "Telkom Akses",
      href: "https://telkomakses.co.id",
      badges: [],
      location: "Purwokerto, Indonesia",
      title: "Helpdesk Support",
      logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEjklEQVR4Ab2WA7QjSRiFa2zbtm3btu1O1rZtY2zbnmfbNrNPcaf2Vk5nt9LBJKM65wv+rvrvLTd5nBJWl8wGKvD2nXLk2RaIVgcJ4fUIxbdHcG1S/lkbWMnEJQNnw2o5rDcf+IAPQmqRiu6J1CEdw+qRg2g8lR9ixCsjdp8z8I28bWg9QtB2Pp5rpDo5oKHr4jXM7v+SGnuBilyv+iO5gTOw3Y74bFDG1fkrpJ4b0xRah1RHgjzWGN9xbM5Z/Hg5s4HfWJxLPpVvi/ozZeJRyFff3TkeyyVIAzXNxuqS1vhdwBtArCtBeddsztzzov+e1yU6xEazZ+4aeJVLUoT/9YPrmeOfsRgPelfXIg6KZKPzHdZM+UdZ5btlifqC3uidSmZAhxjbkhOBStYmC+J13RYPqU7Ko/FNPhlELiMWwcckRMTfBDkycRFsdbC7yoOWbJ3ZX4C1SUU09pOLuQMzCyrbER+I+HnUMeD7vjMDHlHt6tOEKcNpyvLZNHnZLJowcTCNbFPHVQNbZVPaGewGOt6kjbiwQyivEBTjIw/ujTMU5FNRr6cmUaQmk0hFnY7qc3Oo6tgBmjBpiDPxMiYYhOOZrRvwGyjCYubrFICRhC+KXYqGEN+rFJS6q2fPlplMJuoIY1kZzf/tOxrRoro9AyK4CDxAGf+MmUAszkZ8165dTSHupVQoKWP3r78aRK2WGv5RmTGq1VQURRsjxTcu08jWtV2dFhGcBs2te65QVIX4TYs4RqDoU2HnD/Fj+okRLWrQiGbVaOygzjTzdSXVpafYmFAdP0jDG1Z8mAENhJ8PtbMwCcRftYjjd4iwS2ALpiLwkSeKalePFl08Y20CI5O2ZaWznseAobwm3/v6IE/qeRoMtGdxdvuh0UZ7CSNb1aKlXvetTGiiI2hky5r2xE9i6zXEHWK/QHC9JM56v9HqQKpLqiJBkj0T8eMHsh1iMWBeH8kLp/4vLN2A9s4CuYGj0tBngYZ2juTlQLQx0aA8RuGe1Sjk/fQV33OPYO6kc2YgTDJwc+tW25NT2suHgc0o5H73mfWOuHXVIq4Dw4krBfOfJU3BUYd3Ay4UJPSSG8h660UrA2VB/hYDJVjt3V01kCKNwHVBEBzWQ8Lm8l2R+9VHVgZKfTz4KdDgWwWKzOBmROwumCyfgvuSgTSchE6vTphoyKaD3YBsDZTcuW59Hpw87MphlAEa8wa+4M6A5eQhJbi2+YV0bdTgrmlGjcbKQOargmu3pMzAcGCQDMRhFJq7sHCrvvr885cP7d6tS46N1el1OtFYUkJjB3R0JKoDPmAzqE/4smXLFpbwNjcKHlgLDk3gzqiOOrst9Rnvvf665vR331zHtHwj7ZiTYC/4BCxnr/cB1Z33qD8oYsmwKC1nghKj0Xb79u3lJZONwVIQwurwBhDLYXUJSgBOPC/gVpEENrJrWJa4BGSAFKBCTARy8TIwc+fOneSxinKnsjwSbbaMhCugbgGYK23fxy+LFy9mIzEYQ3wT6JwIa8BZCHclT6NAnI3GUPARuApCQBC4CN4EfdetW/dEtP4FLrXg7oD19okAAAAASUVORK5CYII=",
      start: "April 2026",
      end: "Mei 2026",
      description:
        "Bekerja sebagai helpdesk support di perusahaan telekomunikasi terbesar kedua di Indonesia. Bertanggung jawab untuk menangani masalah teknis pelanggan, termasuk troubleshooting jaringan, konfigurasi perangkat, dan eskalasi ke tim teknis jika diperlukan. Meningkatkan kepuasan pelanggan dengan menyelesaikan masalah secara efisien dan memberikan dukungan yang ramah.",
    },
    {
      company: "CV. Saung Information Technology Bumiayu",
      href: "https://saungitbumiayu.site",
      badges: [],
      location: "Bumiayu, Indonesia",
      title: "Internship Trainee",
      logoUrl: "data:image/png;base64,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",
      start: "April 2025",
      end: "Oktober 2025",
      description:
        "PKL (Praktik Kerja Lapangan) di CV. Saung Information Technology Bumiayu, sebuah perusahaan yang bergerak di bidang teknologi informasi. Selama PKL, saya mengajar dan memberikan pelatihan kepada siswa SMK dan pelanggan kursus tentang Teknik Komputer dan Jaringan.",
    },
  ],
  education: [
    // {
    //   school: "Founder Fellowship SF",
    //   href: "https://foundersfellowship.io",
    //   degree: "Cohort 4 - Founder in Residence",
    //   logoUrl: "https://avatar.vercel.sh/founder-fellowship?size=40",
    //   start: "2023",
    //   end: "2023",
    // },
    // {
    //   school: "University of British Columbia",
    //   href: "https://ubc.ca",
    //   degree: "Bachelor of Science, Computer Science",
    //   logoUrl: "https://www.google.com/s2/favicons?domain=ubc.ca&sz=128",
    //   start: "2018",
    //   end: "2023",
    // },
    {
      school: "Politeknik Negeri Cilacap",
      href: "https://pmb.pnc.ac.id",
      degree: "Diploma 4 Rekayasa Keamanan Cyber",
      logoUrl: "https://www.google.com/s2/favicons?domain=pmb.pnc.ac.id&sz=128",
      start: "2026",
      end: "Present",
    },
    {
      school: "SMK Muhammadiyah 1 Ajibarang",
      href: "https://smkmuh1ajb.sch.id",
      degree: "Teknik Komputer dan Jaringan",
      logoUrl: "data:image/png;base64,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",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Stackwise",
      href: "https://stackwise.dev",
      dates: "March 2024 - Present",
      active: true,
      description:
        "Built an AI-powered code review tool that integrates with GitHub PRs and provides context-aware feedback based on your team's codebase conventions. Used by 300+ engineering teams.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://stackwise.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/example-website.webp",
      video: "",
    },
    {
      title: "Logport",
      href: "https://logport.io",
      dates: "October 2023 - February 2024",
      active: true,
      description:
        "Open-source structured logging dashboard for Node.js and Python services. Ingest logs via a lightweight SDK, query them with a SQL-like syntax, and set up alerts in minutes.",
      technologies: [
        "Next.js",
        "TypeScript",
        "ClickHouse",
        "TailwindCSS",
        "Shadcn UI",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://logport.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alexmercer-dev/logport",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Formbase",
      href: "https://formbase.dev",
      dates: "June 2023 - September 2023",
      active: true,
      description:
        "A headless form backend that handles submissions, spam filtering, file uploads, and email notifications - no server required. Drop in one script tag and you're done.",
      technologies: [
        "Astro",
        "TypeScript",
        "Cloudflare Workers",
        "TailwindCSS",
        "Stripe",
        "Resend",
      ],
      links: [
        {
          type: "Website",
          href: "https://formbase.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alexmercer-dev/formbase",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/example-website.png",
      video: "",
    },
    {
      title: "Patchwork",
      href: "https://patchwork.run",
      dates: "February 2023 - May 2023",
      active: false,
      description:
        "A visual diff tool for design tokens and Tailwind config changes. Connect it to your repo and get a live preview of how a config change affects every component in your design system.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://patchwork.run",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
  services: [
    // {
    //   title: "Penetration Testing",
    //   description:
    //     "Melakukan security testing komprehensif pada sistem dan aplikasi Anda untuk mengidentifikasi celah keamanan sebelum dimanfaatkan oleh pihak jahat.",
    //   price: "Hubungi untuk quote",
    //   icon: "🛡️",
    //   technologies: ["Burp Suite", "Nmap", "Metasploit", "Wireshark"],
    //   whatsappMessage: "Halo, saya tertarik dengan layanan Penetration Testing. Bisakah kita diskusi lebih lanjut?",
    //   image: "",
    // },
    // {
    //   title: "Network Configuration & Security",
    //   description:
    //     "Konfigurasi jaringan enterprise dengan fokus pada keamanan menggunakan teknologi Cisco dan MikroTik, termasuk firewall, VPN, dan security protocols.",
    //   price: "Hubungi untuk quote",
    //   icon: "🌐",
    //   technologies: ["Cisco", "MikroTik", "VPN", "Firewall"],
    //   whatsappMessage: "Halo, saya tertarik dengan layanan Network Configuration & Security. Bisakah kita diskusi lebih lanjut?",
    //   image: "",
    // },
    {
      title: "Security Awareness Training",
      description:
        "Program pelatihan keamanan siber untuk karyawan organisasi Anda guna meningkatkan kesadaran dan mengurangi risiko human error.",
      price: "Hubungi untuk quote",
      icon: "📚",
      technologies: ["Booklet", "Best Practices", "Capture The Flag", "Jeopardy"],
      whatsappMessage: "Halo, saya tertarik dengan layanan Security Awareness Training. Bisakah kita diskusi lebih lanjut?",
      image: "",
    },
    // {
    //   title: "Web Development & Design",
    //   description:
    //     "Membangun website modern responsif dengan teknologi latest seperti Astro, Next.js, dan React. Dilengkapi dengan SEO optimization dan performance tuning.",
    //   price: "Hubungi untuk quote",
    //   icon: "💻",
    //   technologies: ["Astro", "Next.js", "React", "Tailwind CSS"],
    //   whatsappMessage: "Halo, saya tertarik dengan layanan Web Development & Design. Bisakah kita diskusi lebih lanjut?",
    //   image: "",
    // },
    {
      title: "Digital Production & Content",
      description:
        "Layanan produksi konten digital termasuk desain grafis, video editing, dan content creation menggunakan tools profesional.",
      price: "Hubungi untuk quote",
      icon: "🎨",
      technologies: ["Figma", "Affinity", "Canva"],
      whatsappMessage: "Halo, saya tertarik dengan layanan Digital Production & Content. Bisakah kita diskusi lebih lanjut?",
      image: "",
    },
  ],
  hackathons: [
    {
      title: "PNW Hacks 2022",
      dates: "October 14th - 16th, 2022",
      location: "Seattle, Washington",
      description: "Built a real-time collaborative code review tool using WebSockets and Monaco Editor. Won best developer tool.",
      image: "https://avatar.vercel.sh/pnw-hacks?size=40",
      win: "Best Developer Tool",
      links: [],
    },
    {
      title: "nwHacks 2022",
      dates: "January 15th - 16th, 2022",
      location: "Vancouver, BC",
      description: "Created an accessibility-first browser extension that rewrites complex legal documents into plain English using GPT-3.",
      image: "https://avatar.vercel.sh/nwhacks-2022?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2021",
      dates: "September 17th - 19th, 2021",
      location: "Waterloo, Ontario (Remote)",
      description: "Built a distributed key-value store in Go with a Raft consensus implementation from scratch. Finalist in the systems track.",
      image: "https://avatar.vercel.sh/hackthenorth-2021?size=40",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/raftdb",
        },
      ],
    },
    {
      title: "DubHacks 2021",
      dates: "October 9th - 10th, 2021",
      location: "Seattle, Washington",
      description: "Developed a carbon footprint tracker that integrates with Google Maps to suggest lower-emission commute alternatives.",
      image: "https://avatar.vercel.sh/dubhacks-2021?size=40",
      win: "Best Sustainability Hack",
      links: [],
    },
    {
      title: "StormHacks 2021",
      dates: "April 24th - 25th, 2021",
      location: "Burnaby, BC (Remote)",
      description: "Built a multiplayer browser game where players collaboratively debug a shared codebase before a timer runs out.",
      image: "https://avatar.vercel.sh/stormhacks-2021?size=40",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/bugout",
        },
      ],
    },
    {
      title: "HackCamp 2020",
      dates: "November 14th - 15th, 2020",
      location: "Vancouver, BC (Remote)",
      description: "Created a CLI tool that automatically generates unit test scaffolding from TypeScript function signatures using static analysis.",
      image: "https://avatar.vercel.sh/hackcamp-2020?size=40",
      win: "1st Place Overall",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/testgen",
        },
      ],
    },
    {
      title: "cmd-f 2020",
      dates: "March 7th - 8th, 2020",
      location: "Vancouver, BC",
      description: "Built a mobile-first job board specifically for junior developers, aggregating listings from GitHub Jobs, HN Who's Hiring, and LinkedIn.",
      image: "https://avatar.vercel.sh/cmd-f-2020?size=40",
      links: [],
    },
    {
      title: "nwHacks 2020",
      dates: "January 11th - 12th, 2020",
      location: "Vancouver, BC",
      description: "Developed a peer-to-peer study session platform with live video, shared whiteboards, and Pomodoro timers.",
      image: "https://avatar.vercel.sh/nwhacks-2020?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2019",
      dates: "September 13th - 15th, 2019",
      location: "Waterloo, Ontario",
      description: "Built an API rate-limit visualizer that tracks usage across multiple providers and surfaces anomalies in real time.",
      image: "https://avatar.vercel.sh/hackthenorth-2019?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/ratelens",
        },
      ],
    },
    {
      title: "DeltaHacks V",
      dates: "January 18th - 19th, 2019",
      location: "Hamilton, Ontario",
      description: "Created a VS Code extension that suggests variable names based on type signatures and surrounding code context using a local ML model.",
      image: "https://avatar.vercel.sh/deltahacks-v?size=40",
      links: [],
    },
    {
      title: "StormHacks 2019",
      dates: "March 2nd - 3rd, 2019",
      location: "Burnaby, BC",
      description: "Built a network latency heatmap tool that visualises CDN performance across regions using real user data injected via a lightweight JS snippet.",
      image: "https://avatar.vercel.sh/stormhacks-2019?size=40",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],
} as const;
