import type { T } from './types';

/**
 * Media work at HAWYIA Agency (2019 to 2022).
 * Sources: HAWYIA portfolios (2019, 2021), "Profiles & Annual Reports",
 * "Marketing Solutions 2020", the CSR presentation (2021), and the user's own
 * list of projects he worked on at HAWYIA (المشاريع التي عملت بها في هوية.xlsx).
 */

export interface WorkItem {
  key: string; // image key in images.json
  title: T;
  text?: T;
}

/** Real-estate launch toolkit — from HAWYIA's "Marketing Solutions" proposal (2020). */
export const toolkit: WorkItem[] = [
  { key: 'kit-360', title: { ar: 'تصوير 360 درجة', en: '360° photography' }, text: { ar: 'عرض المشروع بزاوية كاملة، مع إمكانية نشره على خرائط Google وتجارب الواقع الافتراضي.', en: 'The project shown in full 360°, ready for Google Maps and VR viewing.' } },
  { key: 'kit-saleskit', title: { ar: 'حقيبة التسويق والمبيعات', en: 'Sales & marketing kit' }, text: { ar: 'الملف التسويقي والبطاقات والمطبوعات التي يحتاجها فريق البيع.', en: 'Brochures, cards, and printed tools for the sales team.' } },
  { key: 'kit-gifts', title: { ar: 'الهدايا الترويجية', en: 'Promotional gifts' }, text: { ar: 'صندوق أو حقيبة فاخرة بهدايا تحمل هوية المشروع.', en: 'A premium box or bag of branded gifts.' } },
  { key: 'kit-3dfilm', title: { ar: 'الفيلم التعريفي 3D', en: '3D introductory film' }, text: { ar: 'كتابة وإخراج ومونتاج فيلم يعرض المشروع قبل اكتماله.', en: 'Scripted, directed, and edited film showing the project before completion.' } },
  { key: 'kit-maquette', title: { ar: 'مجسم المشروع', en: 'Project maquette' }, text: { ar: 'ماكيت يبرز تفاصيل المشروع وأسلوب الحياة فيه.', en: 'A scale model that brings out the project’s details and lifestyle.' } },
  { key: 'kit-website', title: { ar: 'الموقع الإلكتروني', en: 'Project website' }, text: { ar: 'تصميم موقع المشروع وبرمجته، تعريفيًا كان أو للبيع.', en: 'Design and build of the project site, informational or for sales.' } },
  { key: 'kit-salescenter', title: { ar: 'مراكز المبيعات', en: 'Sales centres' }, text: { ar: 'تجهيز مكاتب البيع وتصميمها الداخلي وشاشات العرض.', en: 'Fit-out, interiors, and display screens for sales offices.' } },
  { key: 'kit-exhibition', title: { ar: 'المعارض العقارية', en: 'Property exhibitions' }, text: { ar: 'تصميم الأجنحة وتجهيزها للمشاركة في المعارض.', en: 'Stand design and build for property exhibitions.' } },
  { key: 'kit-hoarding', title: { ar: 'السور الخارجي والأعلام', en: 'Site hoarding & flags' }, text: { ar: 'تخطيط أسوار الموقع وتصميمها وتنفيذها لتصبح مساحة إعلانية.', en: 'Site hoardings planned, designed, and installed as advertising space.' } },
  { key: 'kit-3dsign', title: { ar: 'الشعار المجسم', en: '3D signage' }, text: { ar: 'تنفيذ الشعارات بمجسمات ضخمة عند مداخل المشاريع.', en: 'Large-scale 3D logos at project entrances.' } },
  { key: 'kit-neighborhood', title: { ar: 'تطوير خدمات الحي', en: 'Neighbourhood services' }, text: { ar: 'لوحات إرشادية ومرافق ومسارات تعزز تجربة السكان.', en: 'Wayfinding, amenities, and paths that improve residents’ experience.' } },
  { key: 'kit-campaign', title: { ar: 'الحملات التسويقية', en: 'Marketing campaigns' }, text: { ar: 'حملات ترويجية في الطرق والصحف والقنوات الرقمية.', en: 'Promotional campaigns across outdoor, press, and digital channels.' } },
];

/** Profiles and annual reports — HAWYIA "Profiles & Annual Reports". */
export const reports: WorkItem[] = [
  { key: 'rep-bankruptcy', title: { ar: 'هيئة الإفلاس', en: 'Bankruptcy Commission' }, text: { ar: 'ملف تعريفي', en: 'Corporate profile' } },
  { key: 'rep-bussma', title: { ar: 'بصمة العقارية', en: 'Bussma Real Estate' }, text: { ar: 'ملف تعريفي', en: 'Corporate profile' } },
  { key: 'rep-yamam', title: { ar: 'مجمع يمام', en: 'Yamam Compound' }, text: { ar: 'ملف تعريفي', en: 'Project profile' } },
  { key: 'rep-bouvardia', title: { ar: 'بوفارديا', en: 'Bouvardia' }, text: { ar: 'ملف تعريفي', en: 'Project profile' } },
];

/** Social-responsibility work — HAWYIA CSR presentation (2021). */
export const csr: WorkItem[] = [
  { key: 'csr-healthwaqf', title: { ar: 'صندوق الوقف الصحي', en: 'Health Endowment Fund' }, text: { ar: 'الهوية والحملات التوعوية', en: 'Identity and awareness campaigns' } },
  { key: 'csr-subaie-booth', title: { ar: 'مؤسسة السبيعي الخيرية', en: 'Alsubaie Charitable Foundation' }, text: { ar: 'الهوية الجديدة وتطبيقاتها', en: 'New identity and its applications' } },
  { key: 'csr-traof', title: { ar: 'جمعية تراؤف لرعاية الأيتام', en: 'Traof Orphan Care Society' }, text: { ar: 'الهوية الجديدة والمحتوى', en: 'New identity and content' } },
  { key: 'csr-subaie', title: { ar: 'مؤسسة السبيعي الخيرية', en: 'Alsubaie Charitable Foundation' }, text: { ar: 'المطبوعات المؤسسية', en: 'Corporate stationery' } },
];

export type Sector = 're' | 'gov' | 'third' | 'biz';
export const sectors: { id: Sector; label: T }[] = [
  { id: 're', label: { ar: 'عقاري', en: 'Real estate' } },
  { id: 'gov', label: { ar: 'حكومي', en: 'Government' } },
  { id: 'third', label: { ar: 'القطاع غير الربحي', en: 'Non-profit' } },
  { id: 'biz', label: { ar: 'تجاري وصناعي', en: 'Commercial & industrial' } },
];

/** The user's own list of media projects he worked on at HAWYIA. */
export const directory: { name: T; note: T; s: Sector }[] = [
  { s: 're', name: { ar: 'بوفارديا سيتي', en: 'Bouvardia City' }, note: { ar: 'الهوية البصرية الشاملة · الديار العربية، جدة', en: 'Full visual identity · Arabian Dyar, Jeddah' } },
  { s: 're', name: { ar: 'مخططات الرميح في العمارية', en: 'Al-Rumaih Plans, Al-Ammariyah' }, note: { ar: 'تسويق مخططات سكنية', en: 'Residential plan marketing' } },
  { s: 'biz', name: { ar: 'مصنع حلول المعادن', en: 'Metal Solutions Factory' }, note: { ar: 'صناعي', en: 'Industrial' } },
  { s: 'third', name: { ar: 'مؤسسة السبيعي الخيرية', en: 'Alsubaie Charitable Foundation' }, note: { ar: 'مؤسسة مانحة', en: 'Grant-making foundation' } },
  { s: 'third', name: { ar: 'جمعية تراؤف لرعاية الأيتام', en: 'Traof Orphan Care Society' }, note: { ar: 'حفر الباطن', en: 'Hafr Al-Batin' } },
  { s: 're', name: { ar: 'بصمة العقارية', en: 'Bussma Real Estate' }, note: { ar: 'تقييم وإدارة الأملاك العقارية', en: 'Real estate valuation and property management' } },
  { s: 'gov', name: { ar: 'لجنة الإفلاس', en: 'Bankruptcy Commission' }, note: { ar: 'جهة حكومية', en: 'Government entity' } },
  { s: 'gov', name: { ar: 'سحاب', en: 'Sahab' }, note: { ar: 'تابعة للهلال الأحمر السعودي', en: 'Affiliated with the Saudi Red Crescent' } },
  { s: 'biz', name: { ar: 'Black River', en: 'Black River' }, note: { ar: 'قهوة مختصة', en: 'Specialty coffee' } },
  { s: 'third', name: { ar: 'صندوق الوقف الصحي', en: 'Health Endowment Fund' }, note: { ar: 'وزارة الصحة', en: 'Ministry of Health' } },
  { s: 'gov', name: { ar: 'العمل المرن', en: 'Flexible Work' }, note: { ar: 'برنامج حكومي', en: 'Government programme' } },
  { s: 'gov', name: { ar: 'إكسير', en: 'Exir' }, note: { ar: 'تنظيم قطاع مستحضرات التجميل · هيئة الغذاء والدواء', en: 'Cosmetics sector regulation · SFDA' } },
  { s: 'biz', name: { ar: 'أكوون', en: 'Akooon' }, note: { ar: 'نظام CRM لإدارة المشاريع والمهام', en: 'CRM for projects and tasks' } },
  { s: 'biz', name: { ar: 'قاعة نيارة للاحتفالات', en: 'Nayara Events Hall' }, note: { ar: 'قاعات مناسبات', en: 'Events venue' } },
  { s: 're', name: { ar: 'تسق', en: 'Tasq' }, note: { ar: 'تطوير عقاري', en: 'Real estate development' } },
  { s: 'biz', name: { ar: 'كايزن', en: 'KAIZEN' }, note: { ar: 'محطات وقود', en: 'Fuel stations' } },
  { s: 'biz', name: { ar: 'جوبار الخليج', en: 'Jobar Al-Khaleej' }, note: { ar: 'تعدين', en: 'Mining' } },
  { s: 'biz', name: { ar: 'سكة 8', en: 'Sekka 8' }, note: { ar: 'مقهى', en: 'Café' } },
  { s: 'biz', name: { ar: 'أسواق هلا', en: 'Hala Markets' }, note: { ar: 'تجزئة', en: 'Retail' } },
  { s: 're', name: { ar: 'بالمز', en: 'Palms' }, note: { ar: 'مجتمع البساتين', en: 'Al-Basateen community' } },
  { s: 'biz', name: { ar: 'Prestige', en: 'Prestige' }, note: { ar: 'خدمات', en: 'Services' } },
  { s: 'biz', name: { ar: 'مجدول', en: 'Majdool' }, note: { ar: 'مطاعم', en: 'Restaurant' } },
  { s: 'biz', name: { ar: 'برنامج تقدير', en: 'Taqdeer programme' }, note: { ar: 'برنامج تقني', en: 'Software programme' } },
  { s: 're', name: { ar: 'تليد', en: 'Taleed' }, note: { ar: 'مجمع سكني', en: 'Residential compound' } },
  { s: 're', name: { ar: 'باركود', en: 'Barcode' }, note: { ar: 'تقييم عقاري', en: 'Real estate valuation' } },
  { s: 'gov', name: { ar: 'التقرير السنوي لرئاسة هيئة الأمر بالمعروف', en: 'Annual report, Commission for the Promotion of Virtue' }, note: { ar: 'تقرير سنوي', en: 'Annual report' } },
  { s: 'gov', name: { ar: 'تقرير الزراعة', en: 'Agriculture report' }, note: { ar: 'تقرير قطاعي', en: 'Sector report' } },
  { s: 'gov', name: { ar: 'NCMS', en: 'NCMS' }, note: { ar: 'جهة حكومية', en: 'Government entity' } },
  { s: 're', name: { ar: 'أعمال المدائن للتطوير والاستثمار العقاري', en: 'Aamal Al-Madain Real Estate Development' }, note: { ar: 'تطوير واستثمار عقاري', en: 'Real estate development and investment' } },
  { s: 'biz', name: { ar: 'مجموعة المحيسن', en: 'Al-Muhaisen Group' }, note: { ar: 'الشركة الأم', en: 'Parent company' } },
  { s: 'biz', name: { ar: 'مادن', en: 'Maden' }, note: { ar: 'فنادق', en: 'Hotels' } },
  { s: 'third', name: { ar: 'جمعية تعلّم', en: 'Taallam Society' }, note: { ar: 'تحفيظ القرآن الكريم', en: 'Quran education' } },
  { s: 're', name: { ar: 'القيروان قيت', en: 'Qairawan Gate' }, note: { ar: 'العجلان', en: 'Alajlan' } },
  { s: 're', name: { ar: 'مستودعات خازن', en: 'Khazen Warehouses' }, note: { ar: 'أبناء عبدالعزيز العجلان', en: 'Abdulaziz Alajlan Sons' } },
  { s: 're', name: { ar: 'أبتاون', en: 'Uptown' }, note: { ar: 'مشروع عقاري', en: 'Real estate project' } },
  { s: 're', name: { ar: 'جاردنز', en: 'Gardens' }, note: { ar: 'مجتمع البساتين', en: 'Al-Basateen community' } },
  { s: 're', name: { ar: 'الشقري', en: 'Alshegrey' }, note: { ar: 'مجموعة الشقري للاستثمار', en: 'Alshegrey Investment Group' } },
  { s: 'gov', name: { ar: 'هيئة المحتوى المحلي والمشتريات الحكومية', en: 'LCGPA' }, note: { ar: 'جهة حكومية', en: 'Government entity' } },
];
