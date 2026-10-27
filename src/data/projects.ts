import type { Project, ProjectCategory, T } from './types';

/**
 * Selected projects. Each statement is limited to what the CVs say.
 * Imagery comes from portfolio documents (HAWYIA Agency portfolios and the
 * International Property Awards submission) and is attributed on every page.
 */
export const categories: { id: ProjectCategory; label: T }[] = [
  { id: 'real-estate', label: { ar: 'العقار', en: 'Real Estate' } },
  { id: 'brand', label: { ar: 'استراتيجية العلامة', en: 'Brand Strategy' } },
  { id: 'events', label: { ar: 'الفعاليات', en: 'Events' } },
  { id: 'media', label: { ar: 'الإعلام', en: 'Media' } },
];

const HAWYIA_SRC: T = { ar: 'الصور من ملف أعمال وكالة هوية', en: 'Images: HAWYIA Agency portfolio' };

export const projects: Project[] = [
  {
    slug: 'alsoliman-business-compound',
    featured: true,
    name: { ar: 'السليمان بزنس كمباوند', en: 'Al-Sulaiman Business Compound' },
    summary: { ar: 'فعالية إطلاق لثلاثة أيام دعمت تأمين تمويل بقيمة 90 مليون ريال.', en: 'A three-day launch event that supported securing SAR 90 million in funding.' },
    categories: ['events', 'real-estate'],
    date: { ar: 'ديسمبر 2025', en: 'December 2025' },
    context: { ar: 'شركة السليمان العقارية', en: 'Alsoliman Real Estate Company' },
    overview: {
      ar: 'تدشين مشروع السليمان بزنس كمباوند عبر فعالية امتدت ثلاثة أيام، سبقتها دورة تحضير مكثفة استمرت 45 يومًا، وشهدت الإعلان عن شراكات استراتيجية.',
      en: 'The launch of Al-Sulaiman Business Compound through a three-day event, preceded by an intensive 45-day preparation cycle and featuring strategic partnership announcements.',
    },
    role: {
      ar: 'تخطيط فعالية الإطلاق وتنفيذها، وتيسير إعلانات الشراكات الاستراتيجية، ودعم جهود تأمين تمويل المشروع.',
      en: 'Planned and executed the launch event, facilitated the strategic partnership announcements, and supported the effort to secure project funding.',
    },
    scope: [
      { ar: 'تخطيط فعالية إطلاق لثلاثة أيام', en: 'Planning a three-day launch event' },
      { ar: 'إدارة دورة تحضير مدتها 45 يومًا', en: 'Managing a 45-day preparation cycle' },
      { ar: 'تنسيق إعلانات الشراكات الاستراتيجية', en: 'Coordinating strategic partnership announcements' },
    ],
    deliverables: [
      { ar: 'فعالية التدشين', en: 'Launch event' },
      { ar: 'برنامج إعلانات الشراكات', en: 'Partnership announcement programme' },
    ],
    results: [
      { value: '90M', label: { ar: 'ريال تمويل للمشروع، أسهمتُ في دعم تأمينه', en: 'SAR in project funding I supported securing' } },
      { value: '45', label: { ar: 'يومًا من التحضير', en: 'Days of preparation' } },
      { value: '3', label: { ar: 'أيام لفعالية الإطلاق', en: 'Days of launch event' } },
    ],
    plate: { word: { ar: '3 أيام', en: '3 days' }, sub: { ar: 'إطلاق · ديسمبر 2025', en: 'Launch · December 2025' } },
  },
  {
    slug: 'bader-villas',
    featured: true,
    name: { ar: 'فلل البدر', en: 'Bader Villas' },
    summary: { ar: 'حملة تسويق عقاري متكاملة لأكثر من 400 وحدة، فازت بجائزة دولية.', en: 'An integrated development marketing campaign for 400+ units that won an international award.' },
    categories: ['real-estate', 'media'],
    context: { ar: 'شركة السليمان العقارية', en: 'Alsoliman Real Estate Company' },
    date: { ar: 'جائزة 2022', en: 'Award 2022' },
    overview: {
      ar: 'حملة تسويق تطويري متكاملة لمشروع سكني يضم أكثر من 400 وحدة بقيمة سوقية تتجاوز 350 مليون ريال، جمعت بين شراكات مع بنك محلي ومنصات عقارية رقمية، ونظام إدارة علاقات العملاء، والتسويق عبر المؤثرين، وتجربة الواقع الافتراضي 360°.',
      en: 'An integrated development marketing campaign for a residential project of 400+ units with a market value exceeding SAR 350 million, combining partnerships with a local bank and digital real estate platforms, CRM, influencer marketing, and a 360° VR experience.',
    },
    role: {
      ar: 'عضو في فريق الحملة؛ أسهمت في الحملة المتكاملة ضمن دوري مديرًا للمشاريع في شركة السليمان العقارية.',
      en: 'Member of the campaign team, contributing to the integrated campaign as Project Manager at Alsoliman Real Estate Company.',
    },
    scope: [
      { ar: 'شراكات مع بنك محلي ومنصات عقارية رقمية', en: 'Bank and digital real estate platform partnerships' },
      { ar: 'إدارة علاقات العملاء CRM', en: 'CRM' },
      { ar: 'التسويق عبر المؤثرين', en: 'Influencer marketing' },
      { ar: 'تجربة الواقع الافتراضي 360°', en: '360° VR marketing' },
    ],
    deliverables: [
      { ar: 'حملة تسويقية متكاملة بين القنوات الرقمية والميدانية', en: 'Integrated digital and on-ground campaign' },
    ],
    results: [
      { value: '400+', label: { ar: 'وحدة سكنية', en: 'Residential units' } },
      { value: '350M+', label: { ar: 'ريال قيمة سوقية', en: 'SAR market value' } },
      { value: '1.39M+', label: { ar: 'ظهور', en: 'Impressions' } },
    ],
    cover: { key: 'bader-villa', alt: { ar: 'تصوّر لإحدى فلل مشروع فلل البدر', en: 'Rendering of a Bader Villas residence' } },
    gallery: [
      { key: 'bader-cover', alt: { ar: 'غلاف ملف المشاركة في الجائزة', en: 'Award submission cover' }, caption: { ar: 'ملف المشاركة في الجائزة', en: 'Award submission' } },
      { key: 'bader-highway', alt: { ar: 'لوحات إعلانية على الطرق الرئيسية', en: 'Highway billboards' }, caption: { ar: 'لوحات الطرق', en: 'Highway billboards' } },
      { key: 'bader-showvilla', alt: { ar: 'الفيلا النموذجية', en: 'Show villa' }, caption: { ar: 'الفيلا النموذجية', en: 'Show villa' } },
      { key: 'bader-museum', alt: { ar: 'معرض مواصفات البناء', en: 'Building specifications showroom' }, caption: { ar: 'معرض المواصفات', en: 'Specifications showroom' } },
      { key: 'bader-exhibition', alt: { ar: 'جناح المشروع في معرض عقاري', en: 'Project stand at a property exhibition' }, caption: { ar: 'المعارض العقارية', en: 'Property exhibitions' } },
      { key: 'bader-billboard', alt: { ar: 'الحملة الخارجية', en: 'Outdoor campaign' }, caption: { ar: 'الحملة الخارجية', en: 'Outdoor campaign' } },
    ],
    imageSource: { ar: 'الصور من ملف المشاركة في جائزة International Property Awards', en: 'Images: International Property Awards submission portfolio' },
  },
  {
    slug: 'sukina-compound',
    featured: true,
    name: { ar: 'سكينة كمباوند · مكة المكرمة', en: 'Sukina Compound · Makkah' },
    summary: { ar: 'المساهمة في الإطلاق الاستراتيجي وتنفيذ فعالية التدشين.', en: 'Contribution to the strategic launch and event execution.' },
    categories: ['events', 'real-estate'],
    date: { ar: 'مارس 2026', en: 'March 2026' },
    context: { ar: 'مكة المكرمة', en: 'Makkah' },
    overview: {
      ar: 'إطلاق مشروع سكينة كمباوند في مكة المكرمة وتنفيذ فعالية تدشينه في مارس 2026.',
      en: 'The launch of Sukina Compound in Makkah and the execution of its launch event in March 2026.',
    },
    role: {
      ar: 'المساهمة في الإطلاق الاستراتيجي للمشروع وتنفيذ فعالية التدشين.',
      en: 'Contributed to the strategic launch and the execution of the launch event.',
    },
    scope: [
      { ar: 'الإطلاق الاستراتيجي', en: 'Strategic launch' },
      { ar: 'تنفيذ الفعالية', en: 'Event execution' },
    ],
    deliverables: [{ ar: 'فعالية التدشين', en: 'Launch event' }],
    results: [],
    plate: { word: { ar: 'مكة', en: 'Makkah' }, sub: { ar: 'مارس 2026', en: 'March 2026' } },
  },
  {
    slug: 'alsoliman-brand-development',
    featured: true,
    name: { ar: 'تطوير العلامة التجارية للسليمان العقارية', en: 'Al-Sulaiman Real Estate Brand Development' },
    summary: { ar: 'تطوير الهوية التجارية وبناء الاستراتيجية التسويقية للشركة.', en: 'Brand identity development and overarching marketing strategy.' },
    categories: ['brand', 'real-estate'],
    context: { ar: 'شركة السليمان العقارية', en: 'Alsoliman Real Estate Company' },
    overview: {
      ar: 'تطوير الهوية التجارية لشركة السليمان العقارية وبناء استراتيجيتها التسويقية الشاملة، بهدف تعزيز تموضعها في السوق وقيمة علامتها.',
      en: 'Developing the brand identity of Al-Sulaiman Real Estate and its overarching marketing strategy to strengthen market positioning and brand equity.',
    },
    role: {
      ar: 'قيادة تطوير الهوية التجارية والاستراتيجية التسويقية.',
      en: 'Led the brand identity development and the overarching marketing strategy.',
    },
    scope: [
      { ar: 'تطوير الهوية التجارية', en: 'Brand identity development' },
      { ar: 'التموضع التسويقي الاستراتيجي', en: 'Strategic marketing positioning' },
      { ar: 'اتساق العلامة وتموضعها في السوق', en: 'Brand consistency and market positioning' },
    ],
    deliverables: [
      { ar: 'الهوية التجارية', en: 'Brand identity' },
      { ar: 'الاستراتيجية التسويقية', en: 'Marketing strategy' },
    ],
    results: [],
    plate: { word: { ar: 'السليمان', en: 'Alsoliman' }, sub: { ar: 'الهوية والاستراتيجية', en: 'Identity & strategy' } },
    plateLogo: 'alsoliman-realestate',
  },
  {
    slug: 'yamam-luxury-residential-compound',
    name: { ar: 'مجمع يمام السكني الفاخر', en: 'Yamam Luxury Residential Compound' },
    summary: { ar: 'استراتيجية العلامة والتسويق متعدد القنوات لتوليد عملاء محتملين.', en: 'Brand strategy and multi-channel marketing for lead generation.' },
    categories: ['real-estate', 'brand'],
    overview: {
      ar: 'استراتيجية علامة تجارية وحملات تسويق متعددة القنوات لمجمع سكني فاخر، بهدف رفع الوعي بالعلامة وتوليد عملاء محتملين ذوي قيمة عالية.',
      en: 'Brand strategy and multi-channel marketing campaigns for a luxury residential compound, aimed at building brand awareness and generating high-value leads.',
    },
    role: {
      ar: 'قيادة استراتيجية العلامة التجارية والتسويق متعدد القنوات.',
      en: 'Led the brand strategy and multi-channel marketing campaigns.',
    },
    scope: [
      { ar: 'استراتيجية العلامة', en: 'Brand strategy' },
      { ar: 'الهوية البصرية', en: 'Visual identity' },
      { ar: 'التسويق متعدد القنوات', en: 'Multi-channel marketing' },
      { ar: 'توليد العملاء المحتملين', en: 'Lead generation' },
    ],
    deliverables: [
      { ar: 'استراتيجية العلامة', en: 'Brand strategy' },
      { ar: 'حملات تسويقية متعددة القنوات', en: 'Multi-channel campaigns' },
    ],
    results: [],
    cover: { key: 'yamam-aerial', alt: { ar: 'منظر جوي لمجمع يمام', en: 'Aerial view of Yamam' } },
    gallery: [{ key: 'yamam-identity', alt: { ar: 'تطبيقات الهوية البصرية لمجمع يمام', en: 'Yamam identity applications' }, caption: { ar: 'تطبيقات الهوية', en: 'Identity applications' } }],
    imageSource: HAWYIA_SRC,
  },
  {
    slug: 'sahab-govtech',
    name: { ar: 'سحاب', en: 'Sahab GovTech' },
    summary: { ar: 'تنفيذ الهوية البصرية بالكامل لجهة سعودية في التقنية الحكومية.', en: 'End-to-end visual identity execution for a Saudi government technology entity.' },
    categories: ['brand', 'media'],
    overview: {
      ar: 'تنفيذ الهوية البصرية من البداية إلى النهاية لسحاب، إحدى الجهات السعودية البارزة في مجال التقنية الحكومية.',
      en: 'End-to-end visual identity execution for Sahab, a prominent Saudi government technology entity.',
    },
    role: { ar: 'تنفيذ الهوية البصرية بالكامل.', en: 'Delivered the end-to-end visual identity execution.' },
    scope: [{ ar: 'تنفيذ الهوية البصرية', en: 'Visual identity execution' }],
    deliverables: [{ ar: 'الهوية البصرية وتطبيقاتها', en: 'Visual identity and its applications' }],
    results: [],
    cover: { key: 'sahab-award', alt: { ar: 'تطبيقات هوية سحاب', en: 'Sahab identity applications' } },
    gallery: [{ key: 'sahab-web', alt: { ar: 'الحضور الرقمي لسحاب', en: 'Sahab digital presence' }, caption: { ar: 'الحضور الرقمي', en: 'Digital presence' } }],
    imageSource: HAWYIA_SRC,
  },
  {
    slug: 'saudi-bankruptcy-authority',
    name: { ar: 'هيئة الإفلاس السعودية', en: 'Saudi Bankruptcy Authority' },
    summary: { ar: 'المشاركة في إطلاق الهوية البصرية الرسمية.', en: 'Participation in the official visual identity rollout.' },
    categories: ['brand', 'events'],
    overview: {
      ar: 'المشاركة في إطلاق الهوية البصرية الرسمية، مع ضمان الالتزام الكامل بالعلامة والتفاعل مع الجمهور.',
      en: 'Participation in the official visual identity rollout, ensuring full brand compliance and public engagement.',
    },
    role: { ar: 'عضو في فريق إطلاق الهوية البصرية.', en: 'Participated in the visual identity rollout.' },
    scope: [
      { ar: 'إطلاق الهوية البصرية', en: 'Visual identity rollout' },
      { ar: 'الالتزام بمعايير العلامة', en: 'Brand compliance' },
    ],
    deliverables: [{ ar: 'مواد إطلاق الهوية', en: 'Identity rollout materials' }],
    results: [],
    cover: { key: 'bankruptcy-event', alt: { ar: 'فعالية إطلاق الهوية', en: 'Identity launch event' } },
    gallery: [{ key: 'bankruptcy-infographic', alt: { ar: 'إنفوجرافيك توعوي', en: 'Awareness infographic' }, caption: { ar: 'محتوى توعوي', en: 'Awareness content' } }],
    imageSource: HAWYIA_SRC,
  },
  {
    slug: 'al-basateen-real-estate',
    name: { ar: 'البساتين العقارية', en: 'Al-Basateen Real Estate' },
    summary: { ar: 'الهوية البصرية والمواد التسويقية والترويجية لمشاريع الشركة.', en: 'Visual identity, marketing collateral, and promotional assets.' },
    categories: ['real-estate', 'brand'],
    overview: {
      ar: 'تطوير الهوية البصرية والمواد التسويقية والترويجية لمشاريع شركة البساتين العقارية.',
      en: 'Visual identity, marketing collateral, and promotional assets for Al-Basateen Real Estate developments.',
    },
    role: { ar: 'تطوير الهوية البصرية ومواد التسويق.', en: 'Developed the visual identity and marketing materials.' },
    scope: [
      { ar: 'الهوية البصرية', en: 'Visual identity' },
      { ar: 'المواد التسويقية والترويجية', en: 'Marketing and promotional materials' },
    ],
    deliverables: [
      { ar: 'الهوية البصرية', en: 'Visual identity' },
      { ar: 'المواد التسويقية', en: 'Marketing collateral' },
    ],
    results: [],
    plate: { word: { ar: 'البساتين', en: 'Al-Basateen' }, sub: { ar: 'هوية ومواد تسويقية', en: 'Identity & collateral' } },
    plateLogo: 'albasateen-realestate',
  },
  {
    slug: 'basmah-real-estate-appraisal',
    name: { ar: 'بصمة للتقييم العقاري وإدارة الممتلكات', en: 'Basmah Real Estate Appraisal & Property Management' },
    summary: { ar: 'تطوير الهوية المؤسسية وتموضع العلامة.', en: 'Corporate identity development and brand positioning.' },
    categories: ['brand', 'real-estate'],
    overview: {
      ar: 'تطوير الهوية المؤسسية والتموضع الاستراتيجي للعلامة لشركة بصمة للتقييم العقاري وإدارة الممتلكات.',
      en: 'Corporate identity development and strategic brand positioning for Basmah Real Estate Appraisal & Property Management.',
    },
    role: { ar: 'إدارة تطوير الهوية المؤسسية وتموضع العلامة.', en: 'Directed the corporate identity development and brand positioning.' },
    scope: [
      { ar: 'الهوية المؤسسية', en: 'Corporate identity' },
      { ar: 'تموضع العلامة', en: 'Brand positioning' },
    ],
    deliverables: [{ ar: 'الهوية المؤسسية وتطبيقاتها', en: 'Corporate identity and applications' }],
    results: [],
    cover: { key: 'basmah-billboard', alt: { ar: 'حملة بصمة الإعلانية', en: 'Basmah advertising campaign' } },
    gallery: [
      { key: 'basmah-office', alt: { ar: 'تطبيق الهوية في مقر الشركة', en: 'Identity applied at the office' }, caption: { ar: 'تطبيق الهوية', en: 'Identity in place' } },
      { key: 'basmah-infographic', alt: { ar: 'إنفوجرافيك الإنجازات', en: 'Achievements infographic' }, caption: { ar: 'إنفوجرافيك', en: 'Infographic' } },
    ],
    imageSource: HAWYIA_SRC,
  },
  {
    slug: 'saad-alqahtani-law-firm',
    name: { ar: 'مكتب سعد القحطاني للمحاماة', en: 'Saad Al-Qahtani Law Firm' },
    summary: { ar: 'دليل الهوية البصرية والموقع الإلكتروني الرسمي.', en: 'Brand identity manual and official website.' },
    categories: ['brand', 'media'],
    overview: {
      ar: 'تصميم وإنتاج دليل الهوية البصرية والموقع الإلكتروني الرسمي للمكتب، لبناء حضور مؤسسي ورقمي متسق.',
      en: 'Design and production of the brand identity manual and official website, establishing a cohesive corporate and digital presence.',
    },
    role: { ar: 'تصميم وإنتاج دليل الهوية والموقع الإلكتروني.', en: 'Designed and produced the brand identity manual and website.' },
    scope: [
      { ar: 'دليل الهوية البصرية', en: 'Brand identity manual' },
      { ar: 'الموقع الإلكتروني الرسمي', en: 'Official website' },
    ],
    deliverables: [
      { ar: 'دليل الهوية', en: 'Identity manual' },
      { ar: 'الموقع الإلكتروني', en: 'Website' },
    ],
    results: [],
    cover: { key: 'alqahtani-stationery', alt: { ar: 'المطبوعات المكتبية لمكتب القحطاني', en: 'Al-Qahtani stationery' } },
    imageSource: HAWYIA_SRC,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
