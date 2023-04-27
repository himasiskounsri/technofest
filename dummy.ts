import { Competition, NavItem, Seminar } from "@/types/types";

export const COMPETITIONS: Competition[] = [
  {
    id: "1",
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    imageSrc: "/images/competition1.png",
    // TODO: Ganti nama variabel
    pathName: "uiuxdesign",
    contactPersons: [
      {
        name: "Honolulu",
        whatsapp: "082177662832",
      },
      {
        name: "Honolulu",
        whatsapp: "082177662832",
      },
    ],
  },
  {
    id: "2",
    name: "Poster",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    imageSrc: "/images/competition2.png",
    // TODO: Ganti nama variabel
    pathName: "poster",
    contactPersons: [
      {
        name: "Honolulu",
        whatsapp: "082177662832",
      },
      {
        name: "Honolulu",
        whatsapp: "082177662832",
      },
    ],
  },
  {
    id: "3",
    name: "Competitive Programming",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    imageSrc: "/images/competition3.png",
    // TODO: Ganti nama variabel
    pathName: "competitiveprogramming",
    contactPersons: [
      {
        name: "Honolulu",
        whatsapp: "082177662832",
      },
      {
        name: "Honolulu",
        whatsapp: "082177662832",
      },
    ],
  },
  {
    id: "4",
    name: "Essay",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    imageSrc: "/images/competition4.png",
    // TODO: Ganti nama variabel
    pathName: "essay",
    contactPersons: [
      {
        name: "Honolulu",
        whatsapp: "082177662832",
      },
      {
        name: "Honolulu",
        whatsapp: "082177662832",
      },
    ],
  },
];

export const SEMINARS: Seminar[] = [
  {
    id: "1",
    name: "Seminar Technofest",
    description:
      "Meet Material Design 3, Material Design’s most personal design system yet. The Material 3 Design Kit provides a comprehensive introduction to the design system, with styles and components to help you get started.",
    persons: [
      {
        name: "Prof. Dr. DR. K. H. Eve, S.Kom. M.Kom. Lc.",
        title: "CEO SpaceX",
        role: "Pembicara 1",
      },
      {
        name: "Prof. Dr. DR. K. H. Eve, S.Kom. M.Kom. Lc.",
        title: "CEO SpaceX",
        role: "Pembicara 1",
      },
      {
        name: "Prof. Dr. DR. K. H. Eve, S.Kom. M.Kom. Lc.",
        title: "CEO SpaceX",
        role: "Pembicara 1",
      },
    ],
    // imageSrc: "/seminar/seminar",
    pathName: "seminar",
    contactPersons: [
      {
        name: "Honolulu",
        whatsapp: "082177662832",
      },
      {
        name: "Honolulu",
        whatsapp: "082177662832",
      },
    ],
  },
];

export const HOME = {
  about: {
    title: "Tentang",
    subtitle: "Selamat Datang di Technofest 2023",
    content:
      "Technology Festival adalah festival tahunan yang diadakan oleh Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya. Terdiri dari perlombaan dan seminar yang bertujuan untuk memotivasi kaum muda, terutama mahasiswa agar dapat berinovasi di dunia teknologi yang semakin maju. Technology Festival juga bertujuan untuk menyalurkan minat dan bakat anak muda melalui ajang perlombaan yang akan dilaksanakan pada acara tersebut.",
    imageUrl: "",
  },
  competitions: {
    title: "Kompetisi",
    subtitle: "Kompetisi",
    listOfCompetition: COMPETITIONS,
  },
  faqs: [
    {
      question: "Kamu ini terbuat dari apa?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Kamu ini terbuat dari apa?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Kamu ini terbuat dari apa?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
};

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Kompetisi",
    children: [
      {
        label: "UI/UX Design",
        subLabel: "Trending Design to inspire you",
        href: "/kompetisi/uiuxdesign",
      },
      {
        label: "Poster",
        subLabel: "Up-and-coming Designers",
        href: "/kompetisi/poster",
      },
      {
        label: "Competitive Programming",
        subLabel: "Trending Design to inspire you",
        href: "/kompetisi/competitiveprogramming",
      },
      {
        label: "Essay",
        subLabel: "Up-and-coming Designers",
        href: "/kompetisi/essay",
      },
    ],
  },
  {
    label: "Seminar",
    children: [
      {
        label: "Seminar",
        subLabel: "Find your dream design job",
        href: "/seminar/seminar",
      },
    ],
  },
  {
    label: "Agenda",
    href: "/#milestones",
  },
  {
    label: "Tentang",
    href: "/#about",
  },
];
