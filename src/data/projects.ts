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
  { id: 'products', label: { ar: 'المنتجات', en: 'Products' } },
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
    summary: { ar: 'حملة تسويق تطويري متكاملة فازت بجائزة International Property Awards لأفريقيا والجزيرة العربية عن فئة التسويق التطويري في السعودية.', en: 'An integrated development marketing campaign that won the International Property Awards Africa & Arabia, Development Marketing, Saudi Arabia.' },
    categories: ['real-estate', 'media'],
    context: { ar: 'شركة السليمان العقارية', en: 'Alsoliman Real Estate Company' },
    date: { ar: 'جائزة 2022', en: 'Award 2022' },
    overview: {
      ar: 'مشروع سكني في الرياض على أرض تتجاوز 95 ألف متر مربع، يضم أكثر من 400 وحدة بقيمة سوقية تتجاوز 350 مليون ريال. جمعت الحملة بين التسويق الميداني والرقمي: شراكة مع بنك محلي ومنصات عقارية رقمية، ونظام إدارة علاقات العملاء، والتسويق عبر المؤثرين، وتجربة الواقع الافتراضي 360°.',
      en: 'A residential project in Riyadh on a site of more than 95,000 square metres, with 400+ units and a market value exceeding SAR 350 million. The campaign combined on-ground and digital marketing: a local bank partnership and digital real estate platforms, CRM, influencer marketing, and a 360° VR experience.',
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
      { value: '95,000+', label: { ar: 'متر مربع مساحة المشروع', en: 'm² site area' } },
      { value: '83,000+', label: { ar: 'متر مربع مسطحات البناء', en: 'm² built-up area' } },
    ],
    campaign: [
      { value: '89.9M', label: { ar: 'ظهور للحملات الترويجية', en: 'Campaign impressions' } },
      { value: '54.3M', label: { ar: 'مشاهدة للحملات', en: 'Campaign views' } },
      { value: '11.5M', label: { ar: 'زيارة لموقع المشروع', en: 'Project website visits' } },
      { value: '1.39M', label: { ar: 'رسالة واتصال من مهتمين بالشراء', en: 'Messages and calls from interested buyers' } },
    ],
    channels: [
      {
        title: { ar: 'التسويق الميداني', en: 'On-ground marketing' },
        share: '40%',
        items: [
          { ar: 'لوحات الطرق الرئيسية', en: 'Highway billboards' },
          { ar: 'الفيلا النموذجية', en: 'Show villa' },
          { ar: 'متحف مواصفات البناء', en: 'Building specifications showroom' },
          { ar: 'المعارض العقارية', en: 'Property exhibitions' },
          { ar: 'التعاون مع المكاتب العقارية', en: 'Real estate broker partnerships' },
          { ar: 'هدايا المشترين وكوبونات الشركاء', en: 'Buyer gifts and partner coupons' },
          { ar: 'الكتيبات والإعلانات المطبوعة', en: 'Brochures and print advertising' },
          { ar: 'فريق الصيانة', en: 'Maintenance team' },
        ],
      },
      {
        title: { ar: 'التسويق الرقمي', en: 'Digital marketing' },
        share: '60%',
        items: [
          { ar: 'المؤثرون على سناب شات ويوتيوب', en: 'Snapchat and YouTube influencers' },
          { ar: 'المشاركة في LEAP 2022', en: 'LEAP 2022 participation' },
          { ar: 'معرض مستقبل العقار 2022', en: 'Future of Real Estate Exhibition 2022' },
          { ar: 'تجربة واقع افتراضي 360°', en: '360° virtual reality experience' },
          { ar: 'شراكة مع بنك محلي', en: 'Local bank partnership' },
          { ar: 'منصات عقارية رقمية', en: 'Digital real estate platforms' },
          { ar: 'موقع المشروع وتحسين الظهور SEO', en: 'Project website and SEO' },
          { ar: 'إدارة العملاء CRM', en: 'Customer management (CRM)' },
        ],
      },
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
    summary: { ar: 'الهوية البصرية والمواد التسويقية، وخطة تسويق رقمي لإطلاق مجتمع البساتين خلال 30 يومًا.', en: 'Visual identity, marketing collateral, and a 30-day digital marketing plan for the Al-Basateen community.' },
    categories: ['real-estate', 'brand', 'media'],
    overview: {
      ar: 'تطوير الهوية البصرية والمواد التسويقية والترويجية لمشاريع شركة البساتين العقارية، ومنها مجتمع البساتين ومشروعا بالمز وجاردنز، مع خطة تسويق رقمي تغطي منصات التواصل والموقع الإلكتروني وخدمات Google.',
      en: 'Visual identity, marketing collateral, and promotional assets for Al-Basateen Real Estate developments, including the Al-Basateen community and its Palms and Gardens projects, with a digital marketing plan covering social media, the website, and Google services.',
    },
    role: { ar: 'تطوير الهوية البصرية ومواد التسويق، وإعداد خطة التسويق الرقمي.', en: 'Developed the visual identity and marketing materials, and prepared the digital marketing plan.' },
    scope: [
      { ar: 'الهوية البصرية', en: 'Visual identity' },
      { ar: 'المواد التسويقية والترويجية', en: 'Marketing and promotional materials' },
      { ar: 'خطة التسويق الرقمي', en: 'Digital marketing plan' },
      { ar: 'محتوى منصات التواصل بالعربية والإنجليزية', en: 'Bilingual social media content' },
    ],
    deliverables: [
      { ar: 'الهوية البصرية', en: 'Visual identity' },
      { ar: 'المواد التسويقية', en: 'Marketing collateral' },
      { ar: 'خطة تسويق رقمي وخط زمني لـ 30 يومًا', en: 'Digital marketing plan and 30-day timeline' },
      { ar: 'تقويم محتوى تويتر وإنستغرام', en: 'Twitter and Instagram content calendar' },
    ],
    results: [],
    sections: [
      {
        title: { ar: 'أهداف التسويق الرقمي', en: 'Digital marketing goals' },
        items: [
          { ar: 'التواجد والظهور والانتشار', en: 'Presence, visibility, and reach' },
          { ar: 'التموضع بين المنافسين كمطور عقاري مثالي وبناء السمعة', en: 'Positioning against competitors as a model developer, and building reputation' },
          { ar: 'رفع الوعي عبر التسويق بالمحتوى', en: 'Raising awareness through content marketing' },
          { ar: 'تحويل الاهتمام إلى مبيعات', en: 'Turning interest into sales' },
        ],
      },
      {
        title: { ar: 'معايير المحتوى', en: 'Content standards' },
        items: [
          { ar: 'سلامة المحتوى من الأخطاء اللغوية', en: 'Error-free language' },
          { ar: 'الاختصار والتركيز بلغة متخصصة في العقار', en: 'Concise, focused, real-estate language' },
          { ar: 'العناية بالجانب البصري وجمال المشروع', en: 'Care for visuals and the project’s design' },
          { ar: 'الاستعداد المسبق للأسئلة والردود', en: 'Prepared answers for expected questions' },
          { ar: 'التوقيت المناسب للنشر والتفاعل', en: 'Well-timed posting and replies' },
        ],
      },
      {
        title: { ar: 'المحتوى والمنصات', en: 'Content and platforms' },
        items: [
          { ar: 'تويتر وإنستغرام بهوية حساب موحدة', en: 'Twitter and Instagram under one account identity' },
          { ar: 'الإنجليزية لغةً رئيسية والعربية لغةً ثانية، بنبرة رسمية', en: 'English first and Arabic second, in a formal tone' },
          { ar: 'محتوى تعريفي وتسويقي وتثقيفي وإخباري', en: 'Introductory, promotional, educational, and news content' },
          { ar: 'نصوص وتصاميم وفيديو وإنفوجرافيك', en: 'Copy, design, video, and infographics' },
        ],
      },
    ],
    tracks: [
      {
        title: { ar: 'منصات التواصل', en: 'Social media' },
        steps: [
          { ar: 'التحليل', en: 'Analysis' },
          { ar: 'تهيئة الحسابات', en: 'Account setup' },
          { ar: 'كتابة المحتوى', en: 'Copywriting' },
          { ar: 'تجهيز التصاميم', en: 'Design production' },
          { ar: 'النشر والتفاعل', en: 'Publishing and engagement' },
          { ar: 'الحملة الترويجية', en: 'Promotional campaign' },
        ],
      },
      {
        title: { ar: 'الموقع الإلكتروني', en: 'Website' },
        steps: [
          { ar: 'التحليل', en: 'Analysis' },
          { ar: 'التصميم', en: 'Design' },
          { ar: 'المحتوى', en: 'Content' },
          { ar: 'البرمجة', en: 'Development' },
          { ar: 'الإطلاق', en: 'Launch' },
        ],
      },
      {
        title: { ar: 'Google', en: 'Google' },
        steps: [
          { ar: 'تحسين الظهور SEO', en: 'SEO' },
          { ar: 'Google Ads', en: 'Google Ads' },
          { ar: 'Google Maps', en: 'Google Maps' },
        ],
      },
    ],
    plate: { word: { ar: 'البساتين', en: 'Al-Basateen' }, sub: { ar: 'هوية ومواد تسويقية', en: 'Identity & collateral' } },
    plateLogo: 'albasateen-realestate',
  },
  {
    slug: 'harf-gallery',
    name: { ar: 'حرف جاليري', en: 'Harf Gallery' },
    summary: { ar: 'تطوير أكثر من 350 عملًا فنيًا في الخط العربي، وخط هدايا الشركات، ومسار الطلب للشركات.', en: '350+ Arabic calligraphy artworks, a corporate gifting line, and a B2B ordering journey.' },
    categories: ['products', 'brand'],
    date: { ar: '2021 إلى 2022', en: '2021 to 2022' },
    context: { ar: 'وكالة هوية', en: 'HAWYIA Agency' },
    overview: {
      ar: 'معرض للوحات الخط العربي وهدايا الشركات. بُني كتالوج المجموعات على فئات (A+ وA وB وS)، يُقدَّم كل عمل فيها بعدة مقاسات على القماش، إلى جانب خط هدايا مكتبية وهدايا مع العود، ومنتجات مصاحبة مثل الأسورة والسبحة والساعة والقلم والعطر.',
      en: 'A gallery of Arabic calligraphy artworks and corporate gifts. The collections catalogue is organised in categories (A+, A, B and S), with each piece offered in several canvas sizes, alongside desktop gifts, gift sets with oud, and companion items such as bracelets, prayer beads, watches, pens, and fragrance.',
    },
    role: {
      ar: 'مدير تطوير الأعمال والمنتجات: إدارة وتطوير الأعمال الفنية من التصميم حتى الإغلاق المالي، وبناء الكتالوج وخط الهدايا، وتحليل السوق، والتفاوض مع العملاء والموردين.',
      en: 'Business Development & Product Manager: managed artworks from design to financial close, built the catalogue and gifting line, analysed the market, and negotiated with clients and suppliers.',
    },
    scope: [
      { ar: 'إدارة وتطوير أكثر من 350 عملًا فنيًا', en: 'Managing and developing 350+ artworks' },
      { ar: 'كتالوج مجموعات اللوحات', en: 'Art collections catalogue' },
      { ar: 'خط هدايا الشركات', en: 'Corporate gifting line' },
      { ar: 'مسار الطلب للشركات (B2B)', en: 'B2B ordering journey' },
      { ar: 'تحليل السوق وتوجيه خطط الإنتاج', en: 'Market analysis to guide production' },
    ],
    deliverables: [
      { ar: 'كتالوج المجموعات (A+ وA وB وS)', en: 'Collections catalogue (A+, A, B, S)' },
      { ar: 'هدايا مكتبية وهدايا مع العود', en: 'Desktop gifts and oud gift sets' },
      { ar: 'منتجات مصاحبة: أسورة، سبحة، ساعة، قلم، عطر', en: 'Companion items: bracelet, prayer beads, watch, pen, fragrance' },
    ],
    results: [{ value: '350+', label: { ar: 'عمل فني في الخط العربي', en: 'Arabic calligraphy artworks' } }],
    tracks: [
      {
        title: { ar: 'رحلة العميل (B2B)', en: 'Client journey (B2B)' },
        steps: [
          { ar: 'انتقاء المنتج', en: 'Select a product' },
          { ar: 'اعتماد السعر والكمية', en: 'Approve price and quantity' },
          { ar: 'إتمام الشراء', en: 'Complete the purchase' },
        ],
      },
    ],
    cover: { key: 'harf-interior', alt: { ar: 'داخل معرض حرف جاليري', en: 'Inside Harf Gallery' } },
    gallery: [
      { key: 'harf-room', alt: { ar: 'لوحة من مجموعة A+ في مساحة معيشة', en: 'An A+ collection piece in a living space' }, caption: { ar: 'من كتالوج المجموعات', en: 'From the collections catalogue' } },
      { key: 'harf-store', alt: { ar: 'واجهة حرف جاليري', en: 'Harf Gallery storefront' }, caption: { ar: 'واجهة المعرض', en: 'Gallery storefront' } },
      { key: 'harf-art', alt: { ar: 'لوحات حرف في مساحة استقبال', en: 'Harf artworks in a reception space' }, caption: { ar: 'تطبيق في المساحات', en: 'In situ' } },
      { key: 'harf-desk', alt: { ar: 'هدية مكتبية من حرف', en: 'Harf desktop gift' }, caption: { ar: 'هدايا مكتبية', en: 'Desktop gifts' } },
      { key: 'harf-oud', alt: { ar: 'طقم هدية مع العود', en: 'Gift set with oud' }, caption: { ar: 'هدايا مع العود', en: 'Gift sets with oud' } },
      { key: 'harf-giftbox', alt: { ar: 'علبة هدية من حرف', en: 'Harf gift box' }, caption: { ar: 'تغليف الهدايا', en: 'Gift packaging' } },
    ],
    galleryLayout: 'grid',
    imageSource: { ar: 'الصور من كتالوج حرف جاليري 2021 وعرض منتجات حرف', en: 'Images: Harf Gallery 2021 catalogue and Harf products presentation' },
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
