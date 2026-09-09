const m = (path: string) => `/media/${path}`;

export const profile = {
  name: "Tawfik Abeid",
  title: "Fresh Law Graduate | Legal Operations, Compliance & Community Leadership",
  headline: "Fresh Law Graduate | Legal Operations, Compliance & Community Leadership",
  location: "Al-Mansouria, Giza, Egypt",
  aboutHeading: "Tawfik is a Fresh Law Graduate from Cairo University Faculty of Law, graduated 11 June 2026.",
  aboutBody1: "His studies centred on corporate law, civil procedure, contract law, and regulatory compliance — combining rigorous legal analysis with practical operations. His experience bridges the gap between law and technology, working to acquire skills in digital marketing and data analysis to understand legal and technical challenges and how to integrate them to serve modern businesses.",
  aboutBody2: "Alongside his legal qualification, he actively engages in international leadership initiatives, cross-functional operations, and community leadership. The through-line is collaboration: delivering structured, dependable results.",
  statusStudying: "LLB, Cairo University",
  statusGraduation: "Graduated June 2026",
};

export const images = {
  hero: m("portrait-glasses-office.jpg"),
  portrait: m("Gemini_Generated_Image_1xhh5c1xhh5c1xhh.jpg"),
  formal: m("Gemini_Generated_Image_1xhh5c1xhh5c1xhh.jpg"),
  eventDisputeMpl: m("Gemini_Generated_Image_1xhh5c1xhh5c1xhh.jpg"),
  harvardPanel: m("1769349522110.jpeg"),
  satelliteDayTeam: m("1772089628422.jpeg"),
  domainLeaderGroup: m("Badge from tawfi67kgamal via Gmail 2.png"),
  workshopsTeamNew: m("1747295971622-c0b4ec05-af58-4fe3-90f9-682689593286.jpg"),
  herMarkTeam: m("1761327268122-827322fc-19de-4745-b32c-bb4471704cac.jpg"),
  gemNightTeam: m("1772089628422.jpeg"),
  gem: m("1772089628422.jpeg"),
};

export const media = {
  graduationTranscript: {
    pdf: "/Academic_Transcript_Full.pdf",
  },
  aspireAlp: { image: m("cert-aspire-alp.jpg"), pdf: "/media/cert-aspire-alp.pdf" },
  aspireDomainCert: {
    image: m("cert-aspire-domain-leader.jpg"),
    pdf: "/media/cert-aspire-domain-leader.pdf",
  },
  aspireRecommendation: {
    image: m("aspire-domain-leader-recommendation.jpg"),
    pdf: "/media/aspire-domain-leader-recommendation.pdf",
  },
  communityLeaderBadge: { image: m("badge-community-leader.png") },
  domainLeaderBadge: { image: m("Badge from tawfi67kgamal via Gmail 2.png") },
  majlisBadge: { image: m("badge-majlis.png") },
  unv: { image: m("cert-unv-unfpa.jpg"), pdf: "/media/cert-unv-unfpa.pdf" },
  iihl: {
    image: m("cert-iihl-forced-displacement.jpg"),
    pdf: "/media/cert-iihl-forced-displacement.pdf",
  },
  cibData: { image: m("cert-cib-data-literacy.jpg"), pdf: "/media/cert-cib-data-literacy.pdf" },
  cibTalent: {
    image: m("cert-cib-emerging-talent.jpg"),
    pdf: "/media/cert-cib-emerging-talent.pdf",
  },
  mint: { image: m("cert-mint-ambassador.jpg"), pdf: "/media/cert-mint-ambassador.pdf" },
  gensea: { image: m("cert-gensea.png") },
  genseaCleanup: { image: m("cert-gensea-cleanup-leadership.png") },
  eyouth: { image: m("cert-eyouth-blockchain.png") },
  scholarx: { image: m("cert-scholarx-eu-opportunities.png") },
  sasLiteracy: { image: m("badge-sas-data-literacy.png") },
  alx: { image: m("cert-alx-aice.png") },
  skillsEmpowerment: { image: m("cert-skills-empowerment.png") },
  career180Retail: { image: m("cert-career180-retail.jpg") },
  fondi: { image: m("1720459853784.jpeg") },
  majlisMaster: { image: m("majlis-badge-new.png") },
};

export const academicDocumentsPolicy =
  "Official degree certificate, final grade records, and academic transcripts are fully verified and available upon request.";

export type EducationEntry = {
  institution: string;
  qualification: string;
  period: string;
  detail?: string;
  certificateUrl?: string;
};

export const education: EducationEntry[] = [
  {
    institution: "Cairo University — Faculty of Law",
    qualification: "Bachelor of Laws (LLB)",
    period: "September 2022 — 11 June 2026",
    detail:
      "Arabic section, regular enrolment. Completed four-year undergraduate law programme. Core subjects: Civil Law, Contract Law, Commercial Law, Civil Procedure, Public Law, and Administrative Law. Cumulative average: 16.12/20 (80.61%) — Overall Standing: Very Good. Complete academic transcript attached.",
    certificateUrl: "/Academic_Transcript_Full.pdf",
  },
  {
    institution:
      "International Institute of Humanitarian Law — Sanremo, Department of International Refugee Law and Migration Law",
    qualification:
      "2nd Online Course on Forced Displacement for Students and Junior Professionals",
    period: "9 — 27 February 2026",
    detail: "Certificate of participation in International Forced Displacement and Refugee Law frameworks.",
    certificateUrl: media.iihl.pdf,
  },
  {
    institution: "Aspire Institute",
    qualification: "Aspire Leaders Program Fellow — Curriculum developed with Harvard University faculty",
    period: "April 2024 — August 2024",
    detail:
      "Competitively selected from a highly international applicant pool. Module 1 (Personal Branding) included live sessions with Harvard Business School professors Karim Lakhani, Tarun Khanna, Tsedal Neeley, and Bryan Penprase. Module 2 (Global Masterclasses) featured interactive sessions with global leaders. Module 3 (Community Impact) culminated in a Capstone project proposing modern vocational academies to tackle employment and education challenges. Inducted into the Aspire Global Alumni Network.",
    certificateUrl: media.aspireAlp.pdf,
  },
];

export const CV_URL = "/media/Tawfik_Abeid_CV_2v.docx.pdf";

export type ExperienceKind =
  | "Volunteer"
  | "Internship"
  | "Program"
  | "Employment"
  | "Team role";

export type ProofLink = {
  label: string;
  href: string;
};

export type Experience = {
  id: string;
  date: string;
  role: string;
  organization: string;
  kind: ExperienceKind;
  summary: string;
  bullets: string[];
  thumbnail?: string | null;
  gallery?: string[];
  certificateImage?: string | null;
  linkedInPost: string | null;
  organizationUrl: string | null;
  proofLinks: ProofLink[];
  learned: string;
};

const linkedin: ProofLink = {
  label: "LinkedIn Profile",
  href: "https://www.linkedin.com/in/tawfikabeid/",
};

export const experiences: Experience[] = [
  {
    id: "aspire-community-leader-giza",
    date: "Apr 2026 — Present",
    role: "Community Leader — Giza",
    organization: "Aspire Institute",
    kind: "Volunteer",
    summary: "Competitively selected to lead and represent the Aspire Leaders alumni community across Giza.",
    bullets: [
      "Engages and coordinates Aspire Leaders alumni across Giza through structured initiatives.",
      "Designs professional development and community-building events for emerging leaders.",
      "Collaborates within Aspire's global regional leadership network.",
    ],
    thumbnail: media.communityLeaderBadge.image,
    gallery: [media.communityLeaderBadge.image],
    certificateImage: media.communityLeaderBadge.image,
    linkedInPost: "https://www.linkedin.com/in/tawfikabeid/",
    organizationUrl: "https://aspireinstitute.org/",
    proofLinks: [linkedin, { label: "Aspire Institute", href: "https://aspireinstitute.org/" }],
    learned: "Community leadership is about continuous follow-through and creating dependable peer support structures.",
  },
  {
    id: "unv-unfpa-palestine-marathon",
    date: "Mar — May 2026",
    role: "Online Volunteer",
    organization: "UN Volunteers / UNFPA",
    kind: "Volunteer",
    summary: "Digital advocacy and youth mobilization volunteer through the United Nations Volunteers program.",
    bullets: [
      "Contributed to the Global Youth Digital Mobilization for the Palestine Marathon — Virtual Edition.",
      "Maintained consistent weekly engagement (5 hrs/week over 8 weeks) supporting UN Sustainable Development Goal 3 (Good Health and Well-being).",
    ],
    thumbnail: media.unv.image,
    gallery: [media.unv.image],
    certificateImage: media.unv.image,
    linkedInPost: "https://www.linkedin.com/in/tawfikabeid/",
    organizationUrl: "https://www.unv.org/",
    proofLinks: [
      { label: "UNV Certificate of Appreciation (PDF)", href: media.unv.pdf },
      { label: "UN Volunteers", href: "https://www.unv.org/" },
    ],
    learned: "Asynchronous remote work demands personal accountability and disciplined time management.",
  },
  {
    id: "harvard-alumni-summit-mea",
    date: "Jan 2026 · 1 month",
    role: "Speaker Liaison",
    organization: "Harvard Alumni Association — Harvard Alumni Summit MEA",
    kind: "Volunteer",
    summary: "Primary point of contact for distinguished international speakers at the Grand Egyptian Museum.",
    bullets: [
      "Served as primary point of contact for high-profile international speakers, managing schedules and logistics throughout the event.",
      "Coordinated with the RiseUp organizing committee to ensure seamless session delivery and panel execution.",
    ],
    thumbnail: images.harvardPanel,
    gallery: [images.harvardPanel],
    certificateImage: null,
    linkedInPost: "https://www.linkedin.com/in/tawfikabeid/",
    organizationUrl: "https://www.harvard.edu/",
    proofLinks: [linkedin],
    learned: "High-stakes executive coordination requires composure, punctuality, and clear communication.",
  },
  {
    id: "riseup-2026-satellite",
    date: "Jan — Feb 2026 · 2 months",
    role: "Satellite Team Volunteer",
    organization: "RiseUp Summit 2026 | Grand Egyptian Museum",
    kind: "Volunteer",
    summary: "Managed on-ground external activities and engaged with the startup exhibition.",
    bullets: [
      "Managed on-ground external activities; proactively engaged with the Startup Exhibition.",
      "Connected directly with founders at the Startup Exhibition, analyzing diverse business models.",
    ],
    thumbnail: images.satelliteDayTeam,
    gallery: [images.satelliteDayTeam],
    certificateImage: null,
    linkedInPost: "https://www.linkedin.com/in/tawfikabeid/",
    organizationUrl: "https://riseupsummit.com/",
    proofLinks: [linkedin, { label: "RiseUp Summit", href: "https://riseupsummit.com/" }],
    learned: "Large-scale events run on dependable, rapid handoffs between on-ground volunteer teams.",
  },
  {
    id: "aspire-community-domain-leader",
    date: "Oct 2025 — Jan 2026 · 4 months",
    role: "Domain Leader (Volunteer)",
    organization: "Aspire Institute",
    kind: "Volunteer",
    summary: "Domain Leader facilitating online events and supporting community initiatives for first-generation leaders.",
    bullets: [
      "Facilitated online events and supported community initiatives empowering first-generation leaders worldwide.",
      "Awarded a Certificate of Service and a Letter of Recommendation from the Aspire Institute Programs & Partnerships team.",
    ],
    thumbnail: images.domainLeaderGroup,
    gallery: [images.domainLeaderGroup, media.aspireDomainCert.image],
    certificateImage: media.aspireDomainCert.image,
    linkedInPost: "https://www.linkedin.com/in/tawfikabeid/",
    organizationUrl: "https://aspireinstitute.org/",
    proofLinks: [
      { label: "Certificate of Service (PDF)", href: media.aspireDomainCert.pdf },
      { label: "Letter of Recommendation (PDF)", href: media.aspireRecommendation.pdf },
    ],
    learned: "Peer leadership works through open encouragement and fostering mutual respect.",
  },
  {
    id: "career180-her-mark",
    date: "Oct 2025 · 1 month",
    role: "Exhibition Team Member",
    organization: "Career 180 — Her Mark Expo | Nile University, Cairo",
    kind: "Team role",
    summary: "On-ground operations support for a premier regional women's empowerment conference.",
    bullets: [
      "Coordinated 15+ exhibition booths and supported hundreds of attendees alongside a team of 10+ volunteers.",
    ],
    thumbnail: images.herMarkTeam,
    gallery: [images.herMarkTeam],
    certificateImage: null,
    linkedInPost: "https://www.linkedin.com/in/tawfikabeid/",
    organizationUrl: "https://career180.com/",
    proofLinks: [linkedin, { label: "Career 180", href: "https://career180.com/" }],
    learned: "Floor operations demand proactive anticipation of exhibitor needs before issues escalate.",
  },
  {
    id: "riseup-2025-workshops",
    date: "May 2025 · 1 month",
    role: "Event Volunteer — Workshops Team",
    organization: "RiseUp Summit 2025 | Grand Egyptian Museum",
    kind: "Volunteer",
    summary: "Managed workshop registrations and logistics for presenters in a fast-paced, high-traffic environment.",
    bullets: [
      "Managed workshop registrations and logistics for presenters in a fast-paced, high-traffic international event environment.",
    ],
    thumbnail: images.workshopsTeamNew,
    gallery: [images.workshopsTeamNew],
    certificateImage: null,
    linkedInPost: "https://www.linkedin.com/in/tawfikabeid/",
    organizationUrl: "https://riseupsummit.com/",
    proofLinks: [linkedin, { label: "RiseUp Summit", href: "https://riseupsummit.com/" }],
    learned: "Workshop success depends on tight timekeeping and backstage technical readiness.",
  },
  {
    id: "soliya-global-circles",
    date: "Mar 2025 & Apr 2026",
    role: "Virtual Exchange Participant — Global Circles",
    organization: "Soliya (US Department of State–supported)",
    kind: "Program",
    summary: "Cross-cultural international dialogue on globally relevant issues.",
    bullets: [
      "Completed two rounds of structured cross-cultural dialogue with international peers, including \"Access to Vital Natural Resources: What Model for Tomorrow?\"",
      "Earned an official completion certificate (dated April 2025).",
    ],
    thumbnail: m("1744132716653.jpeg"),
    gallery: [m("1744132716653.jpeg")],
    certificateImage: m("1744132716653.jpeg"),
    linkedInPost: "https://www.linkedin.com/in/tawfikabeid/",
    organizationUrl: "https://www.soliya.net/",
    proofLinks: [linkedin, { label: "Soliya Global", href: "https://www.soliya.net/" }],
    learned: "Constructive dialogue requires suspending assumptions and understanding cultural contexts deeply.",
  },
  {
    id: "cib-summer-internship",
    date: "Aug 2024 · 1 month · Remote",
    role: "Summer Internship",
    organization: "Commercial International Bank (CIB Egypt)",
    kind: "Internship",
    summary: "Comprehensive banking program covering data literacy, financial indicators, fintech, and entrepreneurship.",
    bullets: [
      "Completed comprehensive training covering data literacy, financial indicators, fintech, cybersecurity, and entrepreneurship.",
      "Earned two Credly-verified SAS certifications: Data Literacy in Practice & Data Literacy Essential.",
      "Received 3 completion certificates: Digital Transformation (CIB), Financial Literacy & Entrepreneurial Skills (CIB × LinkedIn), and Human-Centric Interpersonal Skills (CIB × Frankfurt School of Finance).",
    ],
    thumbnail: media.cibTalent.image,
    gallery: [media.cibTalent.image, media.cibData.image],
    certificateImage: media.cibTalent.image,
    linkedInPost: "https://www.linkedin.com/in/tawfikabeid/",
    organizationUrl: "https://www.cibeg.com/",
    proofLinks: [
      { label: "CIB Internship Certificate (PDF)", href: media.cibTalent.pdf },
      { label: "Data Literacy Bootcamp (PDF)", href: media.cibData.pdf },
    ],
    learned: "Regulated environments reinforce the critical value of rigorous compliance and verified documentation.",
  },
  {
    id: "icareer-egbank-trainee",
    date: "Jul 2024 · 1 month · On-site",
    role: "Internship Trainee — Sales & Personal Development",
    organization: "iCareer × EG BANK",
    kind: "Program",
    summary: "Structured training in retail sales, financial literacy, entrepreneurship, and interview preparation.",
    bullets: [
      "Completed structured training in retail sales, financial literacy, entrepreneurship, CV writing, and interview skills.",
      "Awarded the joint MINT Ambassador Certificate (4-day program) by iCareer and EG BANK.",
    ],
    thumbnail: media.mint.image,
    gallery: [media.mint.image],
    certificateImage: media.mint.image,
    linkedInPost: "https://www.linkedin.com/in/tawfikabeid/",
    organizationUrl: "https://www.eg-bank.com/",
    proofLinks: [
      { label: "MINT Ambassador Certificate (PDF)", href: media.mint.pdf },
      linkedin,
    ],
    learned: "Effective sales communication starts with active listening and diagnosing the real client need.",
  },
  {
    id: "aspire-leaders-fellow",
    date: "Apr — Aug 2024 · 5 months",
    role: "Aspire Leaders Program Fellow",
    organization: "Aspire Institute — Curriculum developed with Harvard University faculty",
    kind: "Program",
    summary: "Rigorous global leadership development program, competitively selected from an international applicant pool.",
    bullets: [
      "Module 1 — Personal Branding: live sessions with Harvard Business School professors Karim Lakhani, Tarun Khanna, Tsedal Neeley, and Bryan Penprase on AI, global citizenship, leadership, and digital transformation.",
      "Module 2 — Global Masterclasses: interactive masterclasses with global leaders.",
      "Module 3 — Community Impact: designed a Capstone proposal for modern vocational academies to tackle employment and education challenges. Inducted into the Aspire Global Alumni Network.",
    ],
    thumbnail: media.aspireAlp.image,
    gallery: [media.aspireAlp.image],
    certificateImage: media.aspireAlp.image,
    linkedInPost: "https://www.linkedin.com/in/tawfikabeid/",
    organizationUrl: "https://aspireinstitute.org/",
    proofLinks: [
      { label: "Aspire Certificate of Completion (PDF)", href: media.aspireAlp.pdf },
      { label: "Aspire Institute", href: "https://aspireinstitute.org/" },
    ],
    learned: "Leadership is a daily practice of clear communication, ethical decision-making, and service.",
  },
  {
    id: "aplus-customer-service",
    date: "May 2014 — Sep 2018 · 4 yrs 5 mos",
    role: "Customer Service Representative",
    organization: "A Plus, Egypt",
    kind: "Employment",
    summary: "Frontline customer service, database setup, and conflict resolution.",
    bullets: [
      "Managed 50+ customer interactions daily, resolving inquiries and technical issues professionally.",
      "Built and maintained a full customer database from scratch.",
    ],
    linkedInPost: "https://www.linkedin.com/in/tawfikabeid/",
    organizationUrl: null,
    proofLinks: [linkedin],
    learned: "Frontline customer engagement develops patience, calm communication, and rapid problem resolution.",
  },
];

export const affiliations = [
  "Cairo University Faculty of Law",
  "Aspire Institute",
  "UN Volunteers",
  "UNFPA",
  "Commercial International Bank (CIB)",
  "EG BANK",
  "iCareer",
  "Soliya",
  "International Institute of Humanitarian Law — Sanremo",
  "RiseUp Summit",
  "Harvard Alumni Association",
  "Career 180",
  "ALX Africa",
  "EYouth",
  "Doha Debates",
  "EarthEcho International",
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
  credentialType?: string;
  image: string | null;
  imageOriginal?: string | null;
  document?: string | null;
  url: string | null;
  relatedExperienceId?: string | null;
};

export const credentials: Credential[] = [
  {
    title: "Bachelor of Laws (LLB) — Academic Record & Transcript",
    issuer: "Cairo University — Faculty of Law",
    date: "11 June 2026",
    category: "Legal & International",
    credentialType: "Bachelor's Degree",
    image: images.formal,
    document: "/Academic_Transcript_Full.pdf",
    url: "https://law.cu.edu.eg/",
  },
  {
    title: "Aspire Leaders Program — Certificate of Completion",
    issuer: "Aspire Institute",
    date: "August 2024",
    category: "Leadership",
    credentialType: "Certificate of Completion · Harvard Faculty Curriculum",
    image: media.aspireAlp.image,
    document: media.aspireAlp.pdf,
    url: "https://aspireinstitute.org/",
    relatedExperienceId: "aspire-leaders-fellow",
  },
  {
    title: "Certificate of Service — Domain Leader",
    issuer: "Aspire Institute",
    date: "October 2025 – January 2026",
    category: "Leadership",
    credentialType: "Volunteer Certificate of Service & Recommendation",
    image: media.aspireDomainCert.image,
    document: media.aspireDomainCert.pdf,
    url: "https://aspireinstitute.org/",
    relatedExperienceId: "aspire-community-domain-leader",
  },
  {
    title: "2nd Online Course on Forced Displacement",
    issuer: "International Institute of Humanitarian Law (Sanremo, Italy)",
    date: "February 2026",
    category: "Legal & International",
    credentialType: "International Refugee Law Certification",
    image: media.iihl.image,
    document: media.iihl.pdf,
    url: "https://iihl.org/",
  },
  {
    title: "Certificate of Appreciation — Online Volunteer",
    issuer: "United Nations Volunteers / UNFPA",
    date: "31 May 2026",
    category: "Leadership",
    credentialType: "UNV Official Appreciation Certificate",
    image: media.unv.image,
    document: media.unv.pdf,
    url: "https://www.unv.org/",
    relatedExperienceId: "unv-unfpa-palestine-marathon",
  },
  {
    title: "CIB Emerging Talent Summer Internship Certificate",
    issuer: "Commercial International Bank (CIB Egypt)",
    date: "August 2024",
    category: "Banking & Professional Development",
    credentialType: "Banking & Financial Services Training",
    image: media.cibTalent.image,
    document: media.cibTalent.pdf,
    url: "https://www.cibeg.com/",
    relatedExperienceId: "cib-summer-internship",
  },
  {
    title: "Digital Transformation & Data Literacy Bootcamp",
    issuer: "CIB Egypt × SAS",
    date: "August 2024",
    category: "Data & AI",
    credentialType: "Bootcamp Certificate of Attendance",
    image: media.cibData.image,
    document: media.cibData.pdf,
    url: "https://www.cibeg.com/",
    relatedExperienceId: "cib-summer-internship",
  },
  {
    title: "Data Literacy in Practice",
    issuer: "SAS",
    date: "August 2024",
    category: "Data & AI",
    credentialType: "Credly-Verified Digital Badge",
    image: media.sasLiteracy.image,
    url: "https://www.credly.com/badges/1e093f94-af53-4520-a9c5-3eb454e3a893/linked_in_profile",
  },
  {
    title: "Data Literacy Essential",
    issuer: "SAS",
    date: "August 2024",
    category: "Data & AI",
    credentialType: "Credly-Verified Digital Badge",
    image: media.sasLiteracy.image,
    url: "https://www.credly.com/badges/ae90d1c7-05ba-4294-8fbe-60dcb43dc10e/linked_in_profile",
  },
  {
    title: "AI Career Essentials (AICE)",
    issuer: "ALX Africa",
    date: "November 2024",
    category: "Data & AI",
    credentialType: "8-Week Applied AI Professional Program",
    image: media.alx.image,
    url: "https://intranet.alxswe.com/certificates/8ZPSxHz3nY",
  },
  {
    title: "MINT Ambassador Certificate",
    issuer: "iCareer × EG BANK",
    date: "July 2024",
    category: "Banking & Professional Development",
    credentialType: "Sales & Financial Literacy Intensive Program",
    image: media.mint.image,
    document: media.mint.pdf,
    url: "https://www.eg-bank.com/",
    relatedExperienceId: "icareer-egbank-trainee",
  },
  {
    title: "Introduction to Blockchain Technology",
    issuer: "EYouth Learning × Open Campus",
    date: "July 2024",
    category: "Data & AI",
    credentialType: "Certificate of Completion",
    image: media.eyouth.image,
    url: "https://experience.eyouthlearning.com/certificates/fc3e61bb37204af0ae9a59f82addcdc8",
  },
  {
    title: "Skills Empowerment Pathway — Phase 1",
    issuer: "American Center Cairo × Aspire Consulting",
    date: "September 2024",
    category: "Banking & Professional Development",
    credentialType: "Professional Skills Development Certificate",
    image: media.skillsEmpowerment.image,
    url: null,
  },
  {
    title: "Retail Program",
    issuer: "Career 180 and iCareer",
    date: "July 2024",
    category: "Banking & Professional Development",
    credentialType: "Certificate of Completion",
    image: media.career180Retail.image,
    url: "https://career180.com/",
  },
  {
    title: "Starter Certificate — English Conversation",
    issuer: "fondi Inc.",
    date: "July 2024",
    category: "Banking & Professional Development",
    credentialType: "Certificate of Completion",
    image: media.fondi.image,
    url: "https://credsverse.com/credentials/2a15498b-658a-4a56-aba9-b75836d229bc",
  },
  {
    title: "Majlis Master",
    issuer: "Doha Debates",
    date: "August 2026",
    category: "Leadership",
    credentialType: "Certificate of Completion",
    image: media.majlisMaster.image,
    url: "https://proof.recworks.io/verify/ea1b5c87-e747-434b-a5f1-be1d7d8554fe",
  },
  {
    title: "GenSea Stormwater Stewardship Challenge",
    issuer: "EarthEcho International",
    date: "2026",
    category: "Legal & International",
    credentialType: "Certificate of Participation",
    image: media.gensea.image,
    url: null,
  },
  {
    title: "GenSea Cleanup Challenge — Certificate of Leadership",
    issuer: "GenSea × EarthEcho International",
    date: "September 2026",
    category: "Leadership",
    credentialType: "Certificate of Leadership",
    image: media.genseaCleanup.image,
    url: null,
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  link?: string | null;
  span?: "tall" | "wide" | "normal";
  group?: "Portfolio" | "Archive";
  needsReview?: boolean;
};

export const gallery: GalleryItem[] = [
  {
    src: images.hero,
    alt: "Tawfik Abeid, professional portrait wearing glasses",
    caption: "Professional Portrait",
    span: "tall",
  },
  {
    src: images.formal,
    alt: "Tawfik Abeid at a legal community forum",
    caption: "Legal Community Forum",
    span: "tall",
  },
  {
    src: images.satelliteDayTeam,
    alt: "Full volunteer team at the Grand Egyptian Museum plaza",
    caption: "Grand Egyptian Museum, Giza",
    span: "wide",
  },
  {
    src: images.workshopsTeamNew,
    alt: "RiseUp Summit Workshops Team",
    caption: "RiseUp Summit — Workshops Team",
    span: "wide",
  },
  {
    src: images.herMarkTeam,
    alt: "Career 180 Her Mark Expo organizing team on stage",
    caption: "Her Mark Expo Team — Career 180",
    span: "wide",
  },
];

export const archiveGallery: GalleryItem[] = [
  {
    src: media.majlisBadge.image,
    alt: "Badge graphic reading MAJLIS",
    caption: "Majlis Community Badge",
    group: "Archive",
  },
  {
    src: media.scholarx.image,
    alt: "EU Opportunities Crash Course Certificate",
    caption: "ScholarX × EU Jeel Connect",
    group: "Archive",
  },
];

export const skills = [
  {
    group: "Legal & International",
    items: [
      "Human Rights Law",
      "International Humanitarian Law",
      "International Refugee Law",
      "Forced Displacement",
      "Civil Law & Contracts",
      "Civil Procedure Law",
      "Commercial & Corporate Law",
      "Administrative Law",
    ],
  },
  {
    group: "Leadership & Community",
    items: [
      "Leadership",
      "Community Building",
      "Community Development",
      "Event Management",
      "Cross-Cultural Communication",
      "Proposal Writing",
      "Personal Branding",
    ],
  },
  {
    group: "Professional & Digital",
    items: [
      "Artificial Intelligence (AI)",
      "Data Literacy in Practice",
      "Teamwork",
      "Sales",
      "Customer Support",
      "Fast Typing",
      "Sustainability & Environmental Awareness",
    ],
  },
  {
    group: "Languages",
    items: [
      "Arabic — Native",
      "English — B1 (actively developing toward B2+)",
    ],
  },
];

export const contact = {
  email: "tawfiqabeid@gmail.com",
  phone: "+20 112 230 6544",
  linkedin: "https://www.linkedin.com/in/tawfikabeid/",
  location: "Al-Mansouria, Giza, Egypt",
};