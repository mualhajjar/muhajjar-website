import type { Role, T } from './types';

/**
 * Single source for personal and career content.
 * Every fact here comes from the Arabic and English CVs (October 2026).
 * Edit this file to update the site; no other file holds career facts.
 */
export const SITE_URL = 'https://muhajjar.com';

export const person = {
  name: { ar: 'منذر الحجار', en: 'Munther AlHajjar' } as T,
  title: {
    ar: 'مدير المشاريع الإعلامية وتطوير الأعمال',
    en: 'Media Project Manager & Business Development',
  } as T,
  location: { ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Saudi Arabia' } as T,
  email: 'mu.alhajjar@gmail.com',
  phoneDisplay: '+966 55 594 7624',
  phoneHref: 'tel:+966555947624',
  whatsapp: 'https://wa.me/966555947624',
  linkedin: 'https://linkedin.com/in/munther-alhajjar/',
  cv: { ar: '/files/Munther-AlHajjar-CV-AR.pdf', en: '/files/Munther-AlHajjar-CV-EN.pdf' } as T,
  /** Résumé folder (muhajjar.com/drive redirects to Google Drive). Used by the About page. */
  cvDrive: 'https://muhajjar.com/drive',
  coverLetter: {
    ar: '/files/Munther-AlHajjar-Cover-Letter-AR.pdf',
    en: '/files/Munther-AlHajjar-Cover-Letter-EN.pdf',
  } as T,
};

export const hero = {
  headline: {
    ar: 'أدير المشاريع، وأطوّر الأعمال، وأحوّل الرؤية إلى نتائج.',
    en: 'Managing Projects. Developing Business. Turning Vision into Results.',
  } as T,
  lead: {
    ar: 'مدير مشاريع إعلامية ومتخصص في تطوير الأعمال، بخبرة تتجاوز تسع سنوات في العقار والإعلام والمعارض والتسويق والشراكات الاستراتيجية.',
    en: 'Media project management and business development professional with 9+ years of experience across real estate, media, exhibitions, marketing, and strategic partnerships.',
  } as T,
};

export const metrics: { value: number; prefix?: string; suffix: string; label: T }[] = [
  { value: 9, suffix: '+', label: { ar: 'سنوات من الخبرة', en: 'Years of experience' } },
  { value: 100, suffix: '+', label: { ar: 'مشروع تمت إدارته', en: 'Projects managed' } },
  { value: 17, suffix: '+', label: { ar: 'عقدًا تم إغلاقه', en: 'Contracts closed' } },
  { value: 48, suffix: '%', label: { ar: 'نمو في المبيعات', en: 'Sales growth' } },
  { value: 94, suffix: '%', label: { ar: 'رضا العملاء', en: 'Customer satisfaction' } },
  { value: 350, suffix: '+', label: { ar: 'منتجًا تمت إدارته', en: 'Products managed' } },
];

export const overview: T = {
  ar: 'أعمل عند نقطة التقاء الإعلام بالتجارة: أدرس الفرصة وجدواها، وأعدّ طلبات العروض وأدير المناقصات، وأفاوض الشركاء والموردين، ثم أقود التنفيذ بانضباط في الجودة والتكلفة والجدول الزمني حتى الإقفال.',
  en: 'I work where media meets commerce: assessing opportunities and their feasibility, preparing RFPs and running bids, negotiating with partners and suppliers, then leading delivery with discipline on quality, cost, and schedule through to close.',
};

export const bio: T[] = [
  {
    ar: 'بدأت مسيرتي في الصفوف الأمامية للعمل التجاري، مشرفًا على فرق المبيعات وخدمة العملاء في إل جي للإلكترونيات، ثم انتقلت إلى التصميم والإنتاج: الهويات البصرية وواجهات المستخدم في براند هاوس، وأعمال الإضاءة في تصوير الأفلام الإعلانية مع EQEW، وتصميم المنتجات والتسويق في مجموعة أبريز.',
    en: 'My career began on the commercial front line, supervising sales and customer service teams at LG Electronics. I then moved into design and production: visual identities and interfaces at Brand House Agency, lighting on commercial film sets with EQEW Rental House, and product design and marketing at ABREEZ Group.',
  },
  {
    ar: 'في وكالة هوية الإعلامية تحوّل هذا الأساس الإبداعي إلى قيادة مشاريع؛ انتقلت من مساعد تنفيذي لمدير المشاريع إلى مدير للمشاريع الإعلامية، وأدرت أكثر من 41 مشروعًا إعلاميًا أسهمت في نمو المبيعات بنسبة 48% وتحقيق رضا عملاء بلغ 94%. وفي حرف جاليري توليت تطوير الأعمال وإدارة أكثر من 350 عملًا فنيًا في الخط العربي، وبنيت خط هدايا الشركات ومسار الطلب للشركات.',
    en: 'At HAWYIA Agency that creative grounding became project leadership. I progressed from executive assistant to media project manager, managing 41+ media projects that contributed to 48% sales growth and a 94% customer satisfaction rate. At Harf Gallery I took on business development and product management for 350+ Arabic calligraphy artworks, building the corporate gifting line and the B2B ordering journey.',
  },
  {
    ar: 'ومنذ 2022 في شركة السليمان العقارية، أشرفت على مشاريع الشركة وفرقها الإبداعية والهندسية، ثم جمعت منذ أكتوبر 2024 بين إدارة المشاريع الإعلامية وتطوير الأعمال: دراسات الجدوى، وطلبات العروض والمناقصات، والتفاوض مع الشركاء والموردين، وحوكمة الميزانيات والمشتريات عبر SAP MM، وعرض خطط العمل على المستثمرين ومتخذي القرار.',
    en: 'Since 2022 at Alsoliman Real Estate Company, I have overseen company projects and their creative and engineering teams. From October 2024 I have combined media project management with business development: feasibility studies, RFPs and bidding, partner and supplier negotiations, budget and procurement governance in SAP MM, and presenting business plans to investors and decision-makers.',
  },
];

export const experience: Role[] = [
  {
    title: { ar: 'مدير المشاريع الإعلامية وتطوير الأعمال', en: 'Media Project Manager & Business Development' },
    company: { ar: 'شركة السليمان العقارية', en: 'Alsoliman Real Estate Company' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    start: { ar: 'أكتوبر 2024', en: 'October 2024' },
    end: { ar: 'حتى الآن', en: 'Present' },
    promoted: true,
    points: [
      { ar: 'إعداد دراسات الجدوى للفرص والمناقصات والمنتجات الجديدة، وتحديد الموارد والتكاليف والجداول الزمنية بما يعظّم العائد على الاستثمار.', en: 'Feasibility studies for business opportunities, tenders, and new products, defining resources, costs, and timelines to maximise ROI.' },
      { ar: 'إعداد طلبات العروض (RFP) وإدارة المناقصات للفرص والمشاريع الجديدة.', en: 'RFP preparation and bidding management for tenders and new opportunities.' },
      { ar: 'اختيار الشركاء والوكالات ومقدمي الخدمات والتفاوض معهم، ومنهم منصات البيع وKnight Frank، على أساس الجودة والتكلفة وسرعة التسليم.', en: 'Selecting and negotiating with partners, agencies, and service providers, including sales platforms and Knight Frank, based on quality, cost, and delivery speed.' },
      { ar: 'الإشراف على إعداد الميزانيات والمشتريات وتتبع التكاليف، ورفع المستخلصات عبر SAP MM (PR · RFQ · PO · GR · SES)، وإدارة دورة المشتريات للتسويق والمبيعات.', en: 'Budget preparation, procurement, and cost governance, processing progress billings through SAP MM (PR · RFQ · PO · GR · SES) and owning the Marketing & Sales procurement cycle.' },
      { ar: 'إدارة العلاقة مع المستثمرين والعملاء ومتخذي القرار لعرض خطط العمل وإغلاق العقود.', en: 'Managing relationships with investors, clients, and decision-makers to present business plans and close contracts.' },
    ],
  },
  {
    title: { ar: 'مدير المشاريع', en: 'Project Manager' },
    company: { ar: 'شركة السليمان العقارية', en: 'Alsoliman Real Estate Company' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    start: { ar: 'أبريل 2022', en: 'April 2022' },
    end: { ar: 'أكتوبر 2024', en: 'October 2024' },
    points: [
      { ar: 'الإشراف الكامل على مشاريع الشركة، وتوجيه الفرق الإبداعية والهندسية لتحقيق الأهداف التشغيلية والتجارية مع تواصل مباشر مع العملاء.', en: 'Full oversight of company projects, directing creative and engineering teams toward operational and commercial objectives, with direct client communication.' },
      { ar: 'تطوير وتنفيذ اتفاقيات التعاون مع الوكالات الإعلانية والموردين لرفع الكفاءة في التكلفة والسرعة والجودة.', en: 'Cooperation agreements with advertising agencies and suppliers to improve cost efficiency, speed, and quality.' },
      { ar: 'وضع معايير الجودة وإجراءات الإقفال لضمان التسليم ضمن الميزانيات والجداول المعتمدة.', en: 'Quality benchmarks and closing procedures to keep projects within approved budgets and schedules.' },
      { ar: 'المساهمة في حملة التسويق العقاري المتكاملة لمشروع فلل البدر.', en: 'Contribution to the integrated development marketing campaign for Bader Villas.' },
    ],
  },
  {
    title: { ar: 'مدير تطوير الأعمال والمنتجات', en: 'Business Development & Product Manager' },
    company: { ar: 'حرف جاليري · وكالة هوية', en: 'Harf Gallery · HAWYIA Agency' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    start: { ar: 'أكتوبر 2021', en: 'October 2021' },
    end: { ar: 'أبريل 2022', en: 'April 2022' },
    promoted: true,
    points: [
      { ar: 'إدارة وتطوير أكثر من 350 عملًا فنيًا في الخط العربي، من التصميم حتى الإغلاق المالي.', en: 'Managed and developed 350+ Arabic calligraphy artworks from design through financial close.' },
      { ar: 'بناء كتالوج مجموعات اللوحات الفنية وخط هدايا الشركات، وتصميم مسار الطلب للشركات (B2B) من اختيار المنتج حتى إتمام الشراء.', en: 'Built the art collections catalogue and corporate gifting line, and designed the B2B ordering journey from product selection to purchase.' },
      { ar: 'تحليل اتجاهات السوق لتوجيه خطط الإنتاج، والتفاوض وإغلاق الصفقات مع العملاء والموردين.', en: 'Market analysis to guide production planning; negotiation and closing with clients and suppliers.' },
    ],
  },
  {
    title: { ar: 'مدير المشاريع الإعلامية', en: 'Media Project Manager' },
    company: { ar: 'وكالة هوية الإعلامية', en: 'HAWYIA Agency' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    start: { ar: 'أكتوبر 2020', en: 'October 2020' },
    end: { ar: 'أبريل 2022', en: 'April 2022' },
    points: [
      { ar: 'إدارة أكثر من 41 مشروعًا إعلاميًا أسهمت في نمو المبيعات بنسبة 48% وتحقيق رضا عملاء بنسبة 94%.', en: 'Managed 41+ media projects, contributing to 48% sales growth and a 94% customer satisfaction rate.' },
      { ar: 'بناء علاقات B2B مع شركات وعلامات تجارية جديدة لتوسيع قاعدة العملاء.', en: 'Built B2B relationships with new companies and brands to expand the client base.' },
    ],
  },
  {
    title: { ar: 'مساعد تنفيذي لمدير المشاريع', en: 'Executive Assistant to Project Manager' },
    company: { ar: 'وكالة هوية الإعلامية', en: 'HAWYIA Agency' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    start: { ar: 'مارس 2019', en: 'March 2019' },
    end: { ar: 'أكتوبر 2020', en: 'October 2020' },
    points: [
      { ar: 'تحليل الفرص التجارية الجديدة وإعداد العروض التقديمية ومتابعة التقدم نحو الأهداف.', en: 'Analysed new business opportunities, prepared presentations, and tracked progress toward goals.' },
      { ar: 'توثيق البيانات وتحليلها وإعداد التقارير الداعمة لاتخاذ القرار.', en: 'Documented and analysed data to produce reports that support decision-making.' },
    ],
  },
];

export const earlierExperience: { title: T; company: T; start: T; end: T }[] = [
  { title: { ar: 'مصمم منتجات وأخصائي تسويق', en: 'Product Designer & Marketing Specialist' }, company: { ar: 'مجموعة أبريز', en: 'ABREEZ Group' }, start: { ar: 'يوليو 2018', en: 'July 2018' }, end: { ar: 'مارس 2019', en: 'March 2019' } },
  { title: { ar: 'مساعد مدير الإضاءة', en: 'Gaffer Assistant' }, company: { ar: 'EQEW Rental House', en: 'EQEW Rental House' }, start: { ar: 'يونيو 2017', en: 'June 2017' }, end: { ar: 'يوليو 2018', en: 'July 2018' } },
  { title: { ar: 'مصمم جرافيك وتجربة مستخدم', en: 'Graphic & UI/UX Designer' }, company: { ar: 'وكالة براند هاوس', en: 'Brand House Agency' }, start: { ar: 'يناير 2016', en: 'January 2016' }, end: { ar: 'يونيو 2017', en: 'June 2017' } },
  { title: { ar: 'مشرف فريق المبيعات وخدمة العملاء', en: 'Sales & Customer Service Team Supervisor' }, company: { ar: 'إل جي للإلكترونيات', en: 'LG Electronics' }, start: { ar: 'نوفمبر 2013', en: 'November 2013' }, end: { ar: 'ديسمبر 2015', en: 'December 2015' } },
];

export const education: { title: T; school: T; dates: T; note?: T }[] = [
  { title: { ar: 'بكالوريوس إدارة الأعمال', en: 'Bachelor of Business Administration' }, school: { ar: 'جامعة Midocean', en: 'Midocean University' }, dates: { ar: 'يونيو 2026 · حتى الآن', en: 'June 2026 · Present' } },
  { title: { ar: 'دبلوم الاتصال وتقنيات الإعلام', en: 'Diploma in Communication and Media Technology' }, school: { ar: 'أكاديمية الأمير أحمد بن سلمان للإعلام التطبيقي', en: 'Prince Ahmed bin Salman Applied Media Academy' }, dates: { ar: '2016 · 2018', en: '2016 · 2018' }, note: { ar: 'المعدل التراكمي 4.56 من 5', en: 'GPA 4.56 / 5' } },
  { title: { ar: 'دبلوم علوم الاستعاضة السنية، تخصص تقويم الأسنان', en: 'Diploma in Dental Prosthetic Sciences, Orthodontics' }, school: { ar: 'جامعة دمشق', en: 'Damascus University' }, dates: { ar: '2010 · 2012', en: '2010 · 2012' } },
];

export const certifications: { title: T; issuer?: T; year?: string }[] = [
  { title: { ar: '35 ساعة تدريبية للتأهيل لاختبار PMP®، مطبّقة عمليًا', en: 'PMP® Exam Preparation · 35 contact hours, applied in practice' }, year: '2024' },
  { title: { ar: 'SAP ERP System Business Software', en: 'SAP ERP System Business Software' }, issuer: { ar: 'شهادة تدريب من SAP', en: 'SAP training certificate' }, year: '2024' },
  { title: { ar: 'برنامج Bitrix24', en: 'Bitrix24 Program' }, year: '2026' },
  { title: { ar: 'The Evolving Utilities Industry: Challenges and Opportunities', en: 'The Evolving Utilities Industry: Challenges and Opportunities' }, issuer: { ar: 'Skillsoft', en: 'Skillsoft' }, year: '2026' },
  { title: { ar: 'SHRM BASK 2025: Leadership and Navigation', en: 'SHRM BASK 2025: Leadership and Navigation' }, issuer: { ar: 'Skillsoft', en: 'Skillsoft' } },
  { title: { ar: 'البيع كالمحترفين', en: 'Selling Like a Pro' }, issuer: { ar: 'المدرب علي ذياب', en: 'Ali Thiab' }, year: '2023' },
  { title: { ar: 'أساسيات بناء استراتيجية العلامة التجارية', en: 'The Foundations of Building a Brand Strategy' }, issuer: { ar: 'هشام جبره', en: 'Hisham Jabrah' }, year: '2019' },
  { title: { ar: 'ورشة الخط العربي', en: 'Arabic Lettering Workshop' }, issuer: { ar: 'وائل مرقص', en: 'Wael Morcos' }, year: '2019' },
  { title: { ar: 'الشهادة الدولية في طب الأسنان', en: 'International Certificate in Dentistry' }, year: '2011' },
];

export const award = {
  title: { ar: 'جائزة العقارات الدولية', en: 'International Property Awards' } as T,
  /** Official (English) name, shown under the Arabic title. */
  official: 'International Property Awards',
  detail: {
    ar: 'أفريقيا والجزيرة العربية 2022 · فئة تسويق المشاريع العقارية، المملكة العربية السعودية',
    en: 'Africa & Arabia 2022 · Development Marketing, Saudi Arabia',
  } as T,
  note: {
    ar: 'جائزة مُنحت للشركة عن حملة فلل البدر، وكنت ضمن فريق الحملة.',
    en: 'Awarded to the company for the Bader Villas campaign; I was a member of the campaign team.',
  } as T,
};

export const languages: { name: T; level: T }[] = [
  { name: { ar: 'العربية', en: 'Arabic' }, level: { ar: 'اللغة الأم', en: 'Native' } },
  { name: { ar: 'الإنجليزية', en: 'English' }, level: { ar: 'متوسط', en: 'Intermediate' } },
];

/** Organisations the user has worked with (CVs, HAWYIA project list, and the user's own list). Logos in /public/images/logos. */
export const organisations: { logo: string; ext?: 'webp' | 'svg'; name: T }[] = [
  { logo: 'alsoliman-realestate', name: { ar: 'شركة السليمان العقارية', en: 'Alsoliman Real Estate' } },
  { logo: 'knight-frank', name: { ar: 'نايت فرانك', en: 'Knight Frank' } },
  { logo: 'sahab-company', name: { ar: 'سحاب', en: 'Sahab' } },
  { logo: 'albasateen-realestate', name: { ar: 'البساتين العقارية', en: 'Al-Basateen Real Estate' } },
  { logo: 'basma-realestate-valuation', name: { ar: 'بصمة للتقييم العقاري', en: 'Basmah Real Estate Appraisal' } },
  { logo: 'harf-gallery', name: { ar: 'حرف جاليري', en: 'Harf Gallery' } },
  { logo: 'lcgpa', name: { ar: 'هيئة المحتوى المحلي والمشتريات الحكومية', en: 'LCGPA' } },
  { logo: 'health-waqf-fund', name: { ar: 'صندوق الوقف الصحي', en: 'Health Endowment Fund' } },
  { logo: 'ncms-logo', name: { ar: 'NCMS', en: 'NCMS' } },
  { logo: 'barcode-realestate-valuation', name: { ar: 'باركود للتقييم العقاري', en: 'Barcode Real Estate Valuation' } },
  { logo: 'arabian-dyar-realestate', name: { ar: 'الديار العربية', en: 'Arabian Dyar' } },
  { logo: 'alajlan-brothers', name: { ar: 'أبناء عبدالعزيز العجلان', en: 'Abdulaziz Alajlan Sons' } },
  { logo: 'alsubaie-charity', name: { ar: 'مؤسسة السبيعي الخيرية', en: 'Alsubaie Charitable Foundation' } },
  { logo: 'riyadh-front', name: { ar: 'واجهة الرياض', en: 'Riyadh Front' } },
  { logo: 'almashreq-hotel', name: { ar: 'فندق المشرق', en: 'Al Mashreq Hotel' } },
  { logo: 'alkhoyool-realestate', name: { ar: 'الخيول العربية العقارية', en: 'Al Khayool Al Arabiah Real Estate' } },
  { logo: 'albuyut-almaktabiya', name: { ar: 'البيوت المكتبية', en: 'Al Buyut Al-Maktabiya' } },
  { logo: 'alnakhla-compound', name: { ar: 'كمباوند النخلة', en: 'Al Nakhlah Compound' } },
  { logo: 'qusour-al-amariyah', name: { ar: 'مخطط قصور العمارية', en: 'Qusour Al-Amariyah Plan' } },
  { logo: 'bader-contracting', ext: 'svg', name: { ar: 'شركة بدر للمقاولات', en: 'Bader Contracting Company' } },
];
