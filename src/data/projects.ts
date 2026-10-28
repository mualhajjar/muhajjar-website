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
    name: { ar: 'السليمان بزنس كمباوند', en: 'Alsoliman Business Compound' },
    summary: {
      ar: 'قدتُ إدارة وتنفيذ فعالية افتتاح مجمع مكاتب فاخر في الرياض امتدت ثلاثة أيام، ودعمت جهود تأمين تمويل بقيمة 90 مليون ريال.',
      en: 'I led the three-day opening of a premium office compound in Riyadh and supported securing SAR 90 million in project funding.',
    },
    categories: ['events', 'real-estate'],
    date: { ar: 'ديسمبر 2025', en: 'December 2025' },
    context: { ar: 'شركة السليمان العقارية · الرياض', en: 'Alsoliman Real Estate Company · Riyadh' },
    overview: {
      ar: 'مجمع مكاتب فاخر من تطوير شركة السليمان العقارية في حي النرجس شمال الرياض، على طريق الأمير فيصل بن بندر بن عبدالعزيز وقريبًا من طريق الملك سلمان وطريق أنس بن مالك. يضم 22 مكتبًا بنماذج متنوعة، بمساحات عمل مفتوحة ونوافذ ممتدة من الأرض حتى السقف وأسطح خضراء، ويستهدف الشركات والهيئات.',
      en: 'A premium office compound by Alsoliman Real Estate in Al Narjis, north Riyadh, on Prince Faisal bin Bandar bin Abdulaziz Road near King Salman Road and Anas bin Malik Road. It offers 22 offices in varied layouts, with open-plan workspaces, floor-to-ceiling windows, and green rooftop terraces, and is aimed at companies and institutions.',
    },
    facts: [
      { value: '24,000', label: { ar: 'م² مساحة الأرض', en: 'm² land area' } },
      { value: '76,000+', label: { ar: 'م² مساحات البناء', en: 'm² built-up area' } },
      { value: '22', label: { ar: 'مكتبًا فاخرًا', en: 'Premium offices' } },
      { value: '1,100+', label: { ar: 'موقف سيارات', en: 'Parking spaces' } },
    ],
    factsAt: 'intro',
    challenge: {
      ar: 'افتتاح وجهة أعمال راقية يعني أن تجتمع عناصر كثيرة في موعد واحد وبمستوى واحد: موردون ووكالات ومقدمو خدمات، ومواد إعلامية وتسويقية، وتجهيزات ميدانية، واعتمادات من الإدارة. وقد سبقت الفعالية التي امتدت ثلاثة أيام دورةُ تحضير مدتها 45 يومًا.',
      en: 'Opening a premium business destination means bringing many parts together on one date and to one standard: suppliers, agencies and service providers, media and marketing materials, on-site preparations, and management approvals. The three-day event followed a 45-day preparation cycle.',
    },
    lead: {
      title: { ar: 'قائد إدارة وتنفيذ الافتتاح', en: 'Opening Event Lead' },
      summary: {
        ar: 'تولّيت المسؤولية المباشرة عن إدارة افتتاح السليمان بزنس كمباوند وتنفيذه، من التخطيط والتحضير حتى التنفيذ الميداني والتنسيق بين جميع الأطراف المشاركة.',
        en: 'I was directly responsible for managing and delivering the Alsoliman Business Compound opening, from planning and preparation through on-site execution and coordination of every party involved.',
      },
      groups: [
        {
          title: { ar: 'قيادة الفعالية', en: 'Event leadership' },
          items: [
            { ar: 'قدت تخطيط فعالية الافتتاح وتنظيمها وإدارة تنفيذها.', en: 'Led the planning, organisation, and delivery of the opening event.' },
            { ar: 'حوّلت أهداف الافتتاح إلى خطة تنفيذية بالمهام والجداول الزمنية والمتطلبات التشغيلية والمخرجات.', en: 'Turned the opening objectives into an execution plan of tasks, timelines, operational requirements, and deliverables.' },
            { ar: 'أشرفت على جاهزية جميع عناصر الفعالية، وقدت التنسيق الميداني ومعالجة التحديات أثناء التنفيذ.', en: 'Oversaw readiness of every element, and directed on-site coordination and problem-solving during the event.' },
          ],
        },
        {
          title: { ar: 'الموردون والوكالات', en: 'Suppliers & agencies' },
          items: [
            { ar: 'أدرت التنسيق مع الموردين والوكالات ومقدمي الخدمات المشاركين في التنفيذ.', en: 'Managed coordination with the suppliers, agencies, and service providers involved.' },
            { ar: 'تابعت نطاقات العمل والمواصفات الفنية والجودة ومواعيد التسليم.', en: 'Followed up scopes of work, technical specifications, quality, and delivery dates.' },
            { ar: 'تأكدت من تكامل التجهيزات والخدمات الميدانية وجاهزيتها قبل الافتتاح وأثناءه.', en: 'Ensured on-site set-ups and services were complete and ready before and during the opening.' },
          ],
        },
        {
          title: { ar: 'الإنتاج الإعلامي والتسويقي', en: 'Media & marketing production' },
          items: [
            { ar: 'قدت تنسيق إنتاج المواد الإعلامية والتسويقية الداعمة لإطلاق المشروع.', en: 'Led the coordination of media and marketing materials supporting the launch.' },
            { ar: 'أدرت متابعة المخرجات المرئية من تصوير وفيديو ومحتوى ترويجي وفق نطاق العمل المعتمد.', en: 'Managed visual deliverables, including photography, video, and promotional content, within the approved scope.' },
            { ar: 'حرصت على اتساق المواد مع هوية المشروع ومستوى تقديمه بوصفه وجهة أعمال راقية.', en: 'Kept materials consistent with the project identity and its positioning as a premium business destination.' },
          ],
        },
        {
          title: { ar: 'أصحاب المصلحة', en: 'Stakeholders' },
          items: [
            { ar: 'قدت التنسيق بين الإدارة والفرق الداخلية والموردين والجهات المشاركة.', en: 'Directed coordination among management, internal teams, suppliers, and partners.' },
            { ar: 'تابعت الاعتمادات والملاحظات والقرارات التنفيذية المرتبطة بالفعالية.', en: 'Followed up approvals, feedback, and execution decisions for the event.' },
            { ar: 'حرصت على اتساق الرسائل التسويقية وتجربة الحضور مع الأهداف التجارية للمشروع.', en: 'Aligned marketing messages and the guest experience with the project’s commercial goals.' },
          ],
        },
      ],
    },
    film: { vimeoId: '1220414895', title: { ar: 'افتتاح السليمان بزنس كمباوند', en: 'Alsoliman Business Compound Opening' }, ratio: 1.894 },
    outcome: {
      ar: 'اكتمل الافتتاح في ديسمبر 2025 عبر فعالية امتدت ثلاثة أيام شهدت الإعلان عن شراكات استراتيجية. وعلى مستوى المشروع، حصل على تمويل بقيمة 90 مليون ريال، وكان دوري دعم جهود تأمينه.',
      en: 'The opening was completed in December 2025 with a three-day event that included strategic partnership announcements. At project level, SAR 90 million in funding was secured; my part was supporting that effort.',
    },
    sections: [
      {
        title: { ar: 'مرافق المجمع', en: 'Amenities' },
        items: [
          { ar: 'مواقف سيارات تحت الأرض، منها مواقف كبار الشخصيات وذوي الإعاقة', en: 'Underground parking, including VIP and accessible bays' },
          { ar: 'نادٍ رياضي ونادٍ اجتماعي', en: 'Gym and clubhouse' },
          { ar: 'مصليات ومجلس ضيافة', en: 'Prayer halls and a guest majlis' },
          { ar: 'استقبال فاخر وأنظمة أمن', en: 'Premium reception and security' },
          { ar: 'مكاتب ذكية بمساحات مرنة وأسطح خضراء', en: 'Smart offices with flexible layouts and green rooftop terraces' },
        ],
      },
    ],
    officialUrl: 'https://alsoliman.com.sa/ar/project/The-Business-Compound',
    role: {
      ar: 'قائد إدارة وتنفيذ الافتتاح: المسؤولية المباشرة عن التخطيط والموردين والمخرجات الإعلامية والتنفيذ الميداني.',
      en: 'Opening Event Lead: direct responsibility for planning, suppliers, media deliverables, and on-site execution.',
    },
    scope: [],
    deliverables: [],
    results: [
      { value: '3', label: { ar: 'أيام لفعالية الافتتاح', en: 'Days of opening event' } },
      { value: '45', label: { ar: 'يومًا من التحضير', en: 'Days of preparation' } },
      { value: '90M', label: { ar: 'ريال تمويل للمشروع، دعمتُ جهود تأمينه', en: 'SAR project funding I supported securing' } },
    ],
    plate: { word: { ar: '3 أيام', en: '3 days' }, sub: { ar: 'افتتاح · ديسمبر 2025', en: 'Opening · December 2025' } },
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
    slug: 'sakenah-compound',
    featured: true,
    name: { ar: 'سكينة كمباوند · مكة المكرمة', en: 'Sakenah Compound · Makkah' },
    summary: {
      ar: 'قدتُ إدارة وتنفيذ حفل افتتاح مجمع سكني متكامل داخل حدود الحرم المكي الشريف.',
      en: 'I led the opening event of an integrated residential compound within the boundaries of the Haram in Makkah.',
    },
    categories: ['events', 'real-estate'],
    date: { ar: 'مارس 2026', en: 'March 2026' },
    context: { ar: 'شركة السليمان العقارية · مكة المكرمة', en: 'Alsoliman Real Estate Company · Makkah' },
    overview: {
      ar: 'مجمع سكني متكامل من تطوير شركة السليمان العقارية، يقع داخل حدود الحرم المكي الشريف على تلّة في وسط مكة المكرمة. يضم شققًا من الاستوديو حتى ثلاث غرف نوم، ومرافق منها نادٍ رياضي ومسبح وحدائق مفتوحة ومناطق ألعاب وحضانة للأطفال ومجلس ضيافة. وهو مشروع سكني، على خلاف السليمان بزنس كمباوند المكتبي.',
      en: 'An integrated residential compound by Alsoliman Real Estate, within the boundaries of the Haram on a hill in central Makkah. It offers apartments from studios to three bedrooms, with amenities including a sports club, swimming pool, open gardens, children’s play areas and nursery, and a guest majlis. It is a residential project, unlike the office-led Alsoliman Business Compound.',
    },
    lead: {
      title: { ar: 'قائد إدارة وتنفيذ حفل الافتتاح', en: 'Opening Event Lead' },
      summary: {
        ar: 'تولّيت المسؤولية المباشرة عن قيادة حفل افتتاح سكينة كمباوند وإدارته: التخطيط والتحضير والتنسيق والتنفيذ.',
        en: 'I was directly responsible for leading and managing the Sakenah Compound opening: planning, preparation, coordination, and execution.',
      },
      groups: [
        {
          title: { ar: 'قيادة الحفل وتنفيذه', en: 'Event leadership & execution' },
          items: [
            { ar: 'قدت تخطيط حفل الافتتاح وتنظيمه وتنفيذه المباشر.', en: 'Led the planning, organisation, and direct execution of the opening event.' },
            { ar: 'أعددت الخطة التنفيذية وتابعت الجدول الزمني والمهام والمتطلبات التشغيلية.', en: 'Prepared the execution plan and managed the timeline, tasks, and operational requirements.' },
            { ar: 'أشرفت على جاهزية موقع الحفل والتجهيزات، وأدرت التنسيق الميداني أثناء الحفل.', en: 'Oversaw venue readiness and set-ups, and managed on-site coordination during the event.' },
          ],
        },
        {
          title: { ar: 'الموردون ومقدمو الخدمات', en: 'Vendors & suppliers' },
          items: [
            { ar: 'أدرت التنسيق مع الموردين والوكالات ومقدمي الخدمات المشاركين في الافتتاح.', en: 'Managed the suppliers, agencies, and service providers involved in the opening.' },
            { ar: 'تابعت نطاقات العمل والجودة والمواصفات ومواعيد التسليم.', en: 'Followed up scopes of work, quality, specifications, and deadlines.' },
            { ar: 'تأكدت من تكامل التجهيزات والخدمات ومعالجة الملاحظات التنفيذية.', en: 'Ensured set-ups and services came together and execution issues were resolved.' },
          ],
        },
        {
          title: { ar: 'المواد الإعلامية والتسويقية', en: 'Media & marketing materials' },
          items: [
            { ar: 'قدت تنسيق إعداد المواد الإعلامية والتسويقية الخاصة بالافتتاح.', en: 'Directed the coordination of media and marketing materials for the opening.' },
            { ar: 'تابعت إنتاج الفيديو والتصوير والمحتوى المرئي والمواد الترويجية بحسب نطاق العمل.', en: 'Followed video, photography, visual content, and promotional production within scope.' },
            { ar: 'حرصت على اتساق العرض والمواد مع هوية المشروع وتموضعه في السوق.', en: 'Kept the presentation and materials aligned with the project identity and market positioning.' },
          ],
        },
        {
          title: { ar: 'التنسيق مع أصحاب المصلحة', en: 'Stakeholder coordination' },
          items: [
            { ar: 'قدت التنسيق بين الإدارة والفرق الداخلية والموردين والجهات المشاركة.', en: 'Led coordination among management, internal teams, suppliers, and partners.' },
            { ar: 'تابعت الاعتمادات والمتطلبات التشغيلية لضمان جاهزية عناصر الحفل.', en: 'Followed approvals and operational requirements to keep every element ready.' },
            { ar: 'أسهمت في تقديم تجربة متكاملة للحضور تعكس مكانة المشروع.', en: 'Helped deliver a complete guest experience that reflects the project’s standing.' },
          ],
        },
      ],
    },
    film: { vimeoId: '1240078861', title: { ar: 'حفل افتتاح مشروع سكينة كمباوند في مكة المكرمة', en: 'Sakenah Compound opening ceremony, Makkah' }, ratio: 16 / 9 },
    facts: [
      { value: '11,043', label: { ar: 'م² مساحة الأرض', en: 'm² land area' } },
      { value: '47,040', label: { ar: 'م² مساحة البناء', en: 'm² built-up area' } },
      { value: '276', label: { ar: 'وحدة سكنية', en: 'Residential units' } },
      { value: '290', label: { ar: 'موقفًا', en: 'Parking spaces' } },
    ],
    factsAt: 'end',
    sections: [
      {
        title: { ar: 'نماذج الوحدات', en: 'Unit types' },
        items: [
          { ar: 'استوديو · 14 وحدة · من 50 م²', en: 'Studio · 14 units · from 50 m²' },
          { ar: 'غرفة نوم واحدة · 68 وحدة · من 80 م²', en: 'One bedroom · 68 units · from 80 m²' },
          { ar: 'غرفتا نوم · 155 وحدة · من 115 م²', en: 'Two bedrooms · 155 units · from 115 m²' },
          { ar: 'ثلاث غرف نوم · 39 وحدة · من 140 م²', en: 'Three bedrooms · 39 units · from 140 m²' },
        ],
      },
      {
        title: { ar: 'مرافق المجمع', en: 'Amenities' },
        items: [
          { ar: 'نادٍ رياضي ومسبح', en: 'Sports club and swimming pool' },
          { ar: 'حدائق مفتوحة ومناطق ترفيهية', en: 'Open gardens and recreation areas' },
          { ar: 'مناطق ألعاب وحضانة للأطفال', en: 'Children’s play areas and nursery' },
          { ar: 'استقبال فاخر وجلسات ومجلس ضيافة', en: 'Premium reception, lounges, and a guest majlis' },
        ],
      },
    ],
    officialUrl: 'https://alsoliman.com.sa/ar/project/%D8%B3%D9%83%D9%8A%D9%86%D8%A9-%D9%83%D9%85%D8%A8%D8%A7%D9%88%D9%86%D8%AF-%D9%85%D9%83%D8%A9-%D8%A7%D9%84%D9%85%D9%83%D8%B1%D9%85%D8%A9',
    role: {
      ar: 'قائد إدارة وتنفيذ حفل الافتتاح: المسؤولية المباشرة عن التخطيط والموردين والمواد الإعلامية والتنفيذ.',
      en: 'Opening Event Lead: direct responsibility for planning, suppliers, media materials, and execution.',
    },
    scope: [],
    deliverables: [],
    results: [],
    plate: { word: { ar: 'مكة', en: 'Makkah' }, sub: { ar: 'افتتاح · مارس 2026', en: 'Opening · March 2026' } },
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
