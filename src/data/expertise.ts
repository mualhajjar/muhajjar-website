import type { T } from './types';

export const expertiseGroups: { id: string; title: T; text: T; items: T[] }[] = [
  {
    id: 'delivery',
    title: { ar: 'إدارة المشاريع والحوكمة', en: 'Project Delivery & Governance' },
    text: {
      ar: 'قيادة المشروع من الخطة حتى الإقفال، مع ضبط الميزانية والجودة والجدول ووضوح المسؤوليات.',
      en: 'Leading projects from plan to close, with control of budget, quality, schedule, and accountability.',
    },
    items: [
      { ar: 'إدارة المشاريع والبرامج', en: 'Project & Program Management' },
      { ar: 'حوكمة الميزانيات والتكاليف', en: 'Budget & Cost Governance' },
      { ar: 'تطبيق مؤشرات الأداء', en: 'KPI Implementation' },
      { ar: 'إدارة أصحاب المصلحة', en: 'Stakeholder Management' },
    ],
  },
  {
    id: 'commercial',
    title: { ar: 'تطوير الأعمال والتعاقد', en: 'Business Development & Contracts' },
    text: {
      ar: 'دراسة الفرصة وجدواها، وطرحها، والتفاوض عليها حتى توقيع العقد.',
      en: 'Assessing opportunities, taking them to market, and negotiating them through to signature.',
    },
    items: [
      { ar: 'تطوير الأعمال', en: 'Business Development' },
      { ar: 'تحليل السوق ودراسات الجدوى', en: 'Market Analysis & Feasibility Studies' },
      { ar: 'إعداد طلبات العروض والمناقصات', en: 'RFP Development & Tendering' },
      { ar: 'إدارة العقود والتفاوض', en: 'Contract Management & Negotiation' },
      { ar: 'الشراكات الاستراتيجية', en: 'Strategic Partnerships' },
    ],
  },
  {
    id: 'procurement',
    title: { ar: 'المشتريات والأنظمة', en: 'Procurement & Systems' },
    text: {
      ar: 'دورة مشتريات موثقة من طلب الشراء حتى المستخلص، وعلاقات منظمة مع الموردين.',
      en: 'A documented procurement cycle from purchase request to progress billing, and structured supplier relationships.',
    },
    items: [
      { ar: 'المشتريات وإدارة الموردين', en: 'Procurement & Supplier Management' },
      { ar: 'SAP ERP (MM)', en: 'SAP ERP (MM)' },
      { ar: 'Bitrix24 CRM', en: 'Bitrix24 CRM' },
    ],
  },
  {
    id: 'media',
    title: { ar: 'الإعلام والعلامة والعقار', en: 'Media, Brand & Real Estate' },
    text: {
      ar: 'خلفية في الإنتاج الإعلامي والهويات البصرية، موظفة في تسويق المشاريع العقارية وإطلاقها.',
      en: 'A background in media production and visual identity, applied to marketing and launching real estate projects.',
    },
    items: [
      { ar: 'الإنتاج الإعلامي', en: 'Media Production' },
      { ar: 'التسويق العقاري', en: 'Real Estate Marketing' },
      { ar: 'استراتيجية العلامة والهوية', en: 'Brand Strategy & Identity' },
      { ar: 'الفعاليات والمعارض', en: 'Events & Exhibitions' },
    ],
  },
];

/** How an engagement runs — drawn from the responsibilities in the CV. */
export const process: { title: T; text: T }[] = [
  { title: { ar: 'دراسة الفرصة', en: 'Assess' }, text: { ar: 'تحليل السوق والجدوى، وتحديد الموارد والتكلفة والجدول الزمني.', en: 'Market and feasibility analysis; resources, cost, and timeline defined.' } },
  { title: { ar: 'الطرح والتعاقد', en: 'Contract' }, text: { ar: 'إعداد طلب العروض، وتقييم المتقدمين، والتفاوض، وتوقيع العقد.', en: 'RFP, bid evaluation, negotiation, and contract signature.' } },
  { title: { ar: 'التنفيذ والحوكمة', en: 'Deliver' }, text: { ar: 'إدارة الفرق والموردين، وتتبع الميزانية والجودة عبر SAP MM.', en: 'Teams and suppliers managed; budget and quality tracked in SAP MM.' } },
  { title: { ar: 'الإقفال', en: 'Close' }, text: { ar: 'التسليم ضمن الميزانية والجدول، والإقفال الفني والمالي.', en: 'Delivery within budget and schedule; technical and financial close.' } },
];
