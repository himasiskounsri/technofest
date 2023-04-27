export interface User {
  name: string;
  email: string;
  password: string;
  role?: string;
  nim?: string;
  nis?: string;
  whatsapp?: string;
  line?: string;
  institution?: string;
  gender?: "M" | "F";
  photoSrc?: string;
}

export interface Enrollment {
  id: string;
  event: Event;
  participants: Participant[];
}

export interface Participant {
  id: string;
  user: User;
  role?: "leader" | "member";
}

export interface ContactPerson {
  name: string;
  whatsapp?: string;
  line?: string;
  instagram?: string;
}

export interface Milestone {
  date: Date;
  name: string;
  description: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  faqs?: Faq[];
  // TODO: Nullable hanya sementara
  milestones?: Milestone[];
  imageSrc?: string;
  pathName: string;
  contactPersons?: ContactPerson[];
}

export interface Seminar extends Event {
  persons: Person[];
}

export interface Competition extends Event {}

// TODO: Namanya jangan person :)
export interface Person {
  name: string;
  title: string;
  role: string;
  // TODO: Nullable hanya sementara
  imageSrc?: string;
  dateOfBirth?: Date;
}

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export interface Faq {
  question: string;
  answer: string;
}
