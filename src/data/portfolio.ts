import heroAsset from "@/assets/Gemini_Generated_Image_qolgrdqolgrdqolg.jpg.asset.json";
import portraitAsset from "@/assets/Gemini_Generated_Image_4ua3dc4ua3dc4ua3.jpg.asset.json";
import formalAsset from "@/assets/Gemini_Generated_Image_gix5ldgix5ldgix5.jpg.asset.json";
import eventAsset from "@/assets/Gemini_Generated_Image_1xhh5c1xhh5c1xhh.jpg.asset.json";
import banner1Asset from "@/assets/Picsart_23-08-23_07-28-06-198.jpg.asset.json";
import banner2Asset from "@/assets/Picsart_23-08-23_07-43-55-416.jpg.asset.json";

/* --- Batch uploaded September 2026: certificates, badges, brand banner --- */
import cibCertThumb from "@/assets/cib-certificate.jpg.asset.json";
import cibCertFull from "@/assets/cib-certificate-original.jpg.asset.json";
import mintCertThumb from "@/assets/mint-ambassador-certificate.jpg.asset.json";
import mintCertFull from "@/assets/mint-ambassador-certificate-original.jpg.asset.json";
import mintCertPdf from "@/assets/mint-ambassador-certificate.pdf.asset.json";
import iihlCertThumb from "@/assets/forced-displacement-certificate.jpg.asset.json";
import iihlCertFull from "@/assets/forced-displacement-certificate-original.jpg.asset.json";
import iihlCertPdf from "@/assets/forced-displacement-certificate.pdf.asset.json";
import clBadgeThumb from "@/assets/aspire-community-leader-badge.png.asset.json";
import clBadgeFull from "@/assets/aspire-community-leader-badge-original.png.asset.json";
import dlBadgeThumb from "@/assets/aspire-domain-leader-badge.png.asset.json";
import dlBadgeFull from "@/assets/aspire-domain-leader-badge-original.png.asset.json";
import majlisBadgeThumb from "@/assets/majlis-badge.png.asset.json";
import majlisBadgeFull from "@/assets/majlis-badge-original.png.asset.json";
import signatureBannerThumb from "@/assets/signature-banner.jpg.asset.json";
import signatureBannerFull from "@/assets/signature-banner-original.jpg.asset.json";
import myStoryCover from "@/assets/my-story-cover.jpg.asset.json";
import myStoryPdf from "@/assets/tawfik-abeid-my-story.pdf.asset.json";

export const images = {
  hero: heroAsset.url,
  portrait: portraitAsset.url,
  formal: formalAsset.url,
  event: eventAsset.url,
  banner1: banner1Asset.url,
  banner2: banner2Asset.url,
};

/**
 * Uploaded documents and badges.
 * `thumb` = optimized image used on the website.
 * `original` = untouched uploaded file, preserved and still served.
 */
export const media = {
  cibCertificate: { thumb: cibCertThumb.url, original: cibCertFull.url },
  mintCertificate: {
    thumb: mintCertThumb.url,
    original: mintCertFull.url,
    pdf: mintCertPdf.url,
  },
  forcedDisplacementCertificate: {
    thumb: iihlCertThumb.url,
    original: iihlCertFull.url,
    pdf: iihlCertPdf.url,
  },
  aspireCommunityLeaderBadge: { thumb: clBadgeThumb.url, original: clBadgeFull.url },
  aspireDomainLeaderBadge: { thumb: dlBadgeThumb.url, original: dlBadgeFull.url },
  majlisBadge: { thumb: majlisBadgeThumb.url, original: majlisBadgeFull.url },
  signatureBanner: {
    thumb: signatureBannerThumb.url,
    original: signatureBannerFull.url,
  },
  myStory: { thumb: myStoryCover.url, pdf: myStoryPdf.url },
};

/**
 * Academic documents (transcript and official yearly results) were uploaded but are
 * intentionally NOT published: they contain a national ID, seat numbers and grades.
 * The Education section below shows only non-sensitive study information.
 */
export const academicDocumentsPolicy =
  "Uploaded academic documents are kept private. Only degree and study information is shown.";

export type EducationEntry = {
  institution: string;
  qualification: string;
  period: string;
  detail?: string;
};

export const education: EducationEntry[] = [
  {
    institution: "Cairo University — Faculty of Law",
    qualification: "Bachelor of Laws (LLB)",
    period: "2022 — 2026",
    detail: "Arabic section. Full-time, regular enrolment.",
  },
  {
    institution: "International Institute of Humanitarian Law — Sanremo",
    qualification:
      "2nd Online Course on Forced Displacement for Students and Junior Professionals",
    period: "9 — 27 February 2026",
    detail: "Department of International Refugee Law and Migration Law.",
  },
  {
    institution: "Aspire Institute",
    qualification: "Aspire Leaders Program",
    period: "2024",
    detail: "30 hours of coursework across the three programme phases.",
  },
];

/** TODO: replace with a real hosted CV file when available. */
export const CV_URL = "#cv-placeholder";


export type ExperienceKind =
  | "Volunteer"
  | "Internship"
  | "Program"
  | "Employment"
  | "Team role";

export type Experience = {
  id: string;
  date: string;
  role: string;
  organization: string;
  kind: ExperienceKind;
  summary: string;
  bullets: string[];
  /** Thumbnail — placeholder until a specific photo is provided. */
  thumbnail: string | null;
  gallery: string[];
  /** TODO: add certificate image URL. */
  certificateImage: string | null;
  /** TODO: add LinkedIn post URL. */
  linkedInPost: string | null;
  /** TODO: confirm organization URL. */
  organizationUrl: string | null;
  learned: string;
};

export const experiences: Experience[] = [
  {
    id: "aspire-community-leader-giza",
    date: "Apr 2026 — Present",
    role: "Community Leader — Giza",
    organization: "Aspire Institute",
    kind: "Volunteer",
    summary: "Volunteer role building a local community of Aspire leaders in Giza.",
    bullets: [
      "Convene Aspire alumni in Giza around shared learning and peer support.",
      "Coordinate community sessions and keep participation consistent month to month.",
    ],
    thumbnail: null,
    gallery: [],
    certificateImage: null,
    linkedInPost: null,
    organizationUrl: "https://aspireinstitute.org/",
    learned:
      "Community work is mostly follow-through: showing up on schedule matters more than any single event.",
  },
  {
    id: "raise-usam-operations-intern",
    date: "Apr 2026 — Present",
    role: "Intern — Program Management & Operations",
    organization: "RAISE Summit / USAM Innovation Fund",
    kind: "Internship",
    summary: "Internship supporting program management and day-to-day operations.",
    bullets: [
      "Support planning and tracking across program workstreams.",
      "Prepare documents and coordinate logistics with internal teams.",
    ],
    thumbnail: null,
    gallery: [],
    certificateImage: null,
    linkedInPost: null,
    organizationUrl: null,
    learned:
      "Operations rewards clarity — a simple shared tracker prevents most last-minute problems.",
  },
  {
    id: "harvard-alumni-summit-mea",
    date: "Jan 2026",
    role: "Speaker Liaison",
    organization: "Harvard Alumni Summit MEA — Grand Egyptian Museum",
    kind: "Volunteer",
    summary: "Volunteer speaker liaison during the summit programme.",
    bullets: [
      "Accompanied speakers through arrival, briefing, and session timing.",
      "Coordinated with the programme team to keep sessions on schedule.",
    ],
    thumbnail: null,
    gallery: [],
    certificateImage: null,
    linkedInPost: null,
    organizationUrl: null,
    learned:
      "Hosting senior guests is a craft of calm timing and clear, short information.",
  },
  {
    id: "riseup-2026-satellite",
    date: "Jan — Feb 2026",
    role: "Satellite Team Volunteer",
    organization: "RiseUp Summit 2026",
    kind: "Volunteer",
    summary: "Volunteer on the satellite team supporting summit activities.",
    bullets: [
      "Supported satellite activations alongside the core summit team.",
      "Assisted attendees and helped keep venue flow orderly.",
    ],
    thumbnail: null,
    gallery: [],
    certificateImage: null,
    linkedInPost: null,
    organizationUrl: "https://riseupsummit.com/",
    learned: "Large events run on small, reliable handoffs between volunteers.",
  },
  {
    id: "aspire-community-domain-leader",
    date: "Oct 2025 — Jan 2026",
    role: "Community & Domain Leader",
    organization: "Aspire Institute",
    kind: "Volunteer",
    summary: "Volunteer leadership role across a community domain of Aspire leaders.",
    bullets: [
      "Led communication and engagement within an assigned leader domain.",
      "Encouraged peer collaboration across cohorts and locations.",
    ],
    thumbnail: null,
    gallery: [],
    certificateImage: null,
    linkedInPost: null,
    organizationUrl: "https://aspireinstitute.org/",
    learned:
      "Leading peers works through invitation and consistency, not authority.",
  },
  {
    id: "career180-her-mark",
    date: "Oct 2025",
    role: "Exhibition Team Member",
    organization: "Career 180 — Her Mark Expo",
    kind: "Team role",
    summary: "Exhibition team member supporting expo operations.",
    bullets: [
      "Supported exhibitor and visitor coordination on the exhibition floor.",
      "Helped with setup, wayfinding, and on-site problem solving.",
    ],
    thumbnail: null,
    gallery: [],
    certificateImage: null,
    linkedInPost: null,
    organizationUrl: "https://career180.com/",
    learned: "Floor work teaches you to read a room and act before being asked.",
  },
  {
    id: "riseup-2025-workshops",
    date: "May 2025",
    role: "Workshops Team Volunteer",
    organization: "RiseUp Summit 2025",
    kind: "Volunteer",
    summary: "Volunteer supporting workshop sessions during the summit.",
    bullets: [
      "Prepared workshop rooms and supported facilitators between sessions.",
      "Managed attendee entry and session timing.",
    ],
    thumbnail: null,
    gallery: [],
    certificateImage: null,
    linkedInPost: null,
    organizationUrl: "https://riseupsummit.com/",
    learned:
      "A workshop feels effortless only when the setup behind it is rehearsed.",
  },
  {
    id: "soliya-global-circles",
    date: "2025 and 2026",
    role: "Virtual Exchange Participant",
    organization: "Soliya Global Circles",
    kind: "Program",
    summary: "Cross-cultural virtual exchange programme participant.",
    bullets: [
      "Took part in facilitated dialogue sessions with international peers.",
      "Practised listening and perspective-taking on contested topics.",
    ],
    thumbnail: null,
    gallery: [],
    certificateImage: null,
    linkedInPost: null,
    organizationUrl: "https://www.soliya.net/",
    learned:
      "Dialogue across borders improves when you slow down and ask one more question.",
  },
  {
    id: "cib-summer-internship",
    date: "Aug 2024",
    role: "Summer Intern",
    organization: "Commercial International Bank (CIB) Egypt",
    kind: "Internship",
    summary: "Summer internship in a banking environment.",
    bullets: [
      "Observed and supported day-to-day banking operations.",
      "Learned client-facing standards and internal process discipline.",
    ],
    thumbnail: null,
    gallery: [],
    certificateImage: null,
    linkedInPost: null,
    organizationUrl: "https://www.cibeg.com/",
    learned:
      "Regulated environments taught me how much of trust is documentation.",
  },
  {
    id: "icareer-egbank-trainee",
    date: "Jul 2024",
    role: "Sales & Career Development Trainee",
    organization: "iCareer and EG BANK",
    kind: "Program",
    summary: "Training programme in sales and career development.",
    bullets: [
      "Completed structured training in sales communication and pitching.",
      "Worked in teams on applied career-development exercises.",
    ],
    thumbnail: null,
    gallery: [],
    certificateImage: null,
    linkedInPost: null,
    organizationUrl: "https://www.egbank.com/",
    learned: "Persuasion is preparation — knowing the other person's problem first.",
  },
  {
    id: "aspire-leaders-fellow",
    date: "Apr — Aug 2024",
    role: "Aspire Leaders Program Fellow",
    organization: "Aspire Institute",
    kind: "Program",
    summary: "Global leadership development programme fellow.",
    bullets: [
      "Completed the three-phase Aspire Leaders curriculum.",
      "Collaborated with an international cohort on leadership projects.",
    ],
    thumbnail: null,
    gallery: [],
    certificateImage: null,
    linkedInPost: null,
    organizationUrl: "https://aspireinstitute.org/",
    learned:
      "Leadership began to look less like a title and more like a set of habits.",
  },
  {
    id: "aplus-customer-service",
    date: "May 2014 — Sep 2018",
    role: "Customer Service Representative",
    organization: "A Plus, Egypt",
    kind: "Employment",
    summary: "Customer-facing role handling requests and service issues.",
    bullets: [
      "Handled customer requests and resolved service issues directly.",
      "Maintained a calm, consistent standard of service over several years.",
    ],
    thumbnail: null,
    gallery: [],
    certificateImage: null,
    linkedInPost: null,
    organizationUrl: null,
    learned:
      "Years of customer contact built the patience the rest of my work relies on.",
  },
];

export const affiliations = [
  "Cairo University Faculty of Law",
  "Aspire Institute",
  "CIB Egypt",
  "EG BANK",
  "iCareer",
  "Soliya",
  "International Institute of Humanitarian Law — Sanremo",
  "RiseUp Summit",
  "Harvard Alumni Summit MEA",
  "Career 180",
  "USAM Innovation Fund",
];

export const credentialCategories = [
  "All",
  "Leadership",
  "Legal & International",
  "Data & AI",
  "Banking & Professional Development",
] as const;

export type CredentialCategory = (typeof credentialCategories)[number];

export type Credential = {
  title: string;
  issuer: string;
  date: string;
  category: Exclude<CredentialCategory, "All">;
  /** TODO: add certificate image URL. */
  image: string | null;
  /** TODO: add credential verification URL. */
  url: string | null;
};

export const credentials: Credential[] = [
  {
    title: "Aspire Leaders Program — Certificate of Completion",
    issuer: "Aspire Institute",
    date: "2024",
    category: "Leadership",
    image: null,
    url: null,
  },
  {
    title: "Certificate of Service",
    issuer: "Aspire Institute",
    date: "2026",
    category: "Leadership",
    image: null,
    url: null,
  },
  {
    title: "Forced Displacement Course",
    issuer: "International Institute of Humanitarian Law, Sanremo",
    date: "Date to be added",
    category: "Legal & International",
    image: null,
    url: null,
  },
  {
    title: "Global Circles",
    issuer: "Soliya",
    date: "2025",
    category: "Legal & International",
    image: null,
    url: null,
  },
  {
    title: "AI Career Essentials",
    issuer: "ALX Africa",
    date: "Date to be added",
    category: "Data & AI",
    image: null,
    url: null,
  },
  {
    title: "Data Literacy in Practice",
    issuer: "SAS",
    date: "Date to be added",
    category: "Data & AI",
    image: null,
    url: null,
  },
  {
    title: "Data Literacy Essentials",
    issuer: "SAS",
    date: "Date to be added",
    category: "Data & AI",
    image: null,
    url: null,
  },
  {
    title: "MINT Ambassador",
    issuer: "iCareer × EG BANK",
    date: "2024",
    category: "Banking & Professional Development",
    image: null,
    url: null,
  },
  {
    title: "Introduction to Blockchain Technology",
    issuer: "EYouth",
    date: "Date to be added",
    category: "Data & AI",
    image: null,
    url: null,
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  /** TODO: add related external link. */
  link?: string | null;
  span?: "tall" | "wide" | "normal";
};

export const gallery: GalleryItem[] = [
  {
    src: images.hero,
    alt: "Tawfik Abeid, studio portrait in a navy jacket",
    caption: "Studio portrait, 2026",
    span: "tall",
  },
  {
    src: images.event,
    alt: "Tawfik Abeid at a legal community event backdrop",
    caption: "Legal community event, Cairo",
    span: "wide",
  },
  {
    src: images.portrait,
    alt: "Tawfik Abeid, professional headshot",
    caption: "Professional headshot",
  },
  {
    src: images.banner1,
    alt: "Tawfik Abeid standing in front of a law community banner",
    caption: "Event participation",
  },
  {
    src: images.formal,
    alt: "Tawfik Abeid, formal portrait",
    caption: "Formal portrait",
    span: "tall",
  },
  {
    src: images.banner2,
    alt: "Tawfik Abeid holding a programme folder at an event venue",
    caption: "On site at an event venue",
  },
];

export const skills = [
  {
    group: "Legal & Analytical",
    items: [
      "Legal Research",
      "Case Analysis",
      "Contract Law",
      "Civil Procedure",
      "Legal Writing",
      "Critical Thinking",
    ],
  },
  {
    group: "Leadership & Operations",
    items: [
      "Community Building",
      "Event Management",
      "Project Planning",
      "Team Coordination",
      "Stakeholder Communication",
    ],
  },
  {
    group: "Professional",
    items: [
      "Customer Service",
      "Presentation Skills",
      "Personal Branding",
      "Research",
      "Google Workspace",
      "Problem Solving",
    ],
  },
  {
    group: "Languages",
    items: ["Arabic — Native", "English — B1, actively developing toward B2+"],
  },
];

export const contact = {
  email: "tawfiqabeid@gmail.com",
  phone: "+20 112 230 6544",
  linkedin: "https://www.linkedin.com/in/tawfikabeid/",
  location: "Giza, Egypt",
};
