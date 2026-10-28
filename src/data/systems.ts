import type { T } from './types';

/**
 * Enterprise systems. Three evidence levels, kept strictly apart:
 * - experience: hands-on use stated in the CVs
 * - training:   documented training in the CVs
 * - interest:   platforms of interest, not yet confirmed as a skill
 * Move a platform up a level only after the user confirms it.
 */
export type Evidence = 'experience' | 'training' | 'interest';

export const evidenceLabels: Record<Evidence, { label: T; note: T }> = {
  experience: {
    label: { ar: 'خبرة عملية', en: 'Hands-on experience' },
    note: { ar: 'استخدام فعلي في العمل، موثّق في السيرة الذاتية.', en: 'Used in day-to-day work, as stated in my CV.' },
  },
  training: {
    label: { ar: 'تدريب موثّق', en: 'Documented training' },
    note: { ar: 'برنامج تدريبي مذكور في السيرة الذاتية.', en: 'A training programme listed in my CV.' },
  },
  interest: {
    label: { ar: 'منصات ذات صلة', en: 'Platforms of interest' },
    note: { ar: 'منصات أتابعها لصلتها بإدارة المشاريع، ولا أعرضها هنا كمهارة مثبتة.', en: 'Relevant platforms I follow; not presented here as a proven skill.' },
  },
};

export interface System {
  id: string;
  name: string;
  /** Short product category. */
  kind: T;
  evidence: Evidence;
  url: string;
  /** What I have done with it — only for experience/training. */
  mine?: T;
  /** Optional workflow shown as steps. */
  flow?: { code: string; label: T }[];
  /** What the platform supports in general (not a claim about me). */
  supports: T[];
  /** Evidence line shown under the card. */
  source: T;
}

export const systems: System[] = [
  {
    id: 'sap',
    name: 'SAP ERP · MM',
    kind: { ar: 'تخطيط موارد المؤسسات · إدارة المواد والمشتريات', en: 'Enterprise resource planning · Materials Management' },
    evidence: 'experience',
    url: 'https://www.sap.com/assetdetail/2025/06/8c8c71cd-0f7f-0010-bca6-c68f7e60039b.html',
    mine: {
      ar: 'في شركة السليمان العقارية أدير دورة المشتريات لإدارتي التسويق والمبيعات عبر وحدة MM: من طلب الشراء حتى صحيفة إدخال الخدمات، مع تتبع التكاليف التشغيلية والتنفيذية ورفع المستخلصات والمستحقات لضمان الالتزام بالميزانية.',
      en: 'At Alsoliman Real Estate I run the Marketing & Sales procurement cycle in the MM module, from purchase requisition to service entry sheet, tracking operational and execution costs and processing progress billings and payables to keep spending within budget.',
    },
    flow: [
      { code: 'PR', label: { ar: 'طلب شراء', en: 'Purchase requisition' } },
      { code: 'RFQ', label: { ar: 'طلب عروض أسعار', en: 'Request for quotation' } },
      { code: 'PO', label: { ar: 'أمر شراء', en: 'Purchase order' } },
      { code: 'GR', label: { ar: 'استلام', en: 'Goods receipt' } },
      { code: 'SES', label: { ar: 'صحيفة إدخال الخدمات', en: 'Service entry sheet' } },
    ],
    supports: [
      { ar: 'إدارة دورة المشتريات وتوثيقها', en: 'Procurement cycle management and documentation' },
      { ar: 'الالتزام بالميزانية وتتبع الإنفاق', en: 'Budget compliance and expenditure tracking' },
      { ar: 'حوكمة العمليات المالية', en: 'Financial process governance' },
    ],
    source: { ar: 'السيرة الذاتية: SAP MM (PR · RFQ · PO · GR · SES)، وشهادة تدريب SAP ERP 2024', en: 'CV: SAP MM (PR · RFQ · PO · GR · SES); SAP ERP training certificate, 2024' },
  },
  {
    id: 'bitrix24',
    name: 'Bitrix24',
    kind: { ar: 'إدارة علاقات العملاء وإدارة العمل', en: 'CRM and work management' },
    evidence: 'training',
    url: 'https://www.bitrix24.ae/en/',
    mine: {
      ar: 'أتممت برنامج Bitrix24 التدريبي عام 2026، وأطبّق من خلاله ممارسات الحوكمة إلى جانب SAP ERP.',
      en: 'I completed the Bitrix24 programme in 2026 and apply governance practices through it alongside SAP ERP.',
    },
    supports: [
      { ar: 'إدارة العلاقة مع العملاء وأصحاب المصلحة', en: 'Customer and stakeholder relationships' },
      { ar: 'متابعة مسار المبيعات والفرص', en: 'Sales pipeline and opportunity tracking' },
      { ar: 'تنسيق المهام والمشاريع والتقارير', en: 'Task, project, and reporting coordination' },
      { ar: 'أتمتة سير العمل والمتابعة', en: 'Workflow automation and follow-up' },
    ],
    source: { ar: 'السيرة الذاتية: برنامج Bitrix24 · 2026، وBitrix24 CRM ضمن الكفاءات', en: 'CV: Bitrix24 Program · 2026; Bitrix24 CRM in core competencies' },
  },
  {
    id: 'monday',
    name: 'monday.com',
    kind: { ar: 'إدارة المشاريع والعمل', en: 'Project and work management' },
    evidence: 'interest',
    url: 'https://monday.com/',
    supports: [
      { ar: 'تخطيط المشاريع ومتابعتها', en: 'Project planning and tracking' },
      { ar: 'توزيع المهام والمواعيد النهائية', en: 'Task assignment and deadlines' },
      { ar: 'الجداول الزمنية والمراحل والاعتماديات', en: 'Timelines, milestones, and dependencies' },
      { ar: 'وضوح أحمال الفريق ولوحات المتابعة', en: 'Team workload and progress dashboards' },
    ],
    source: { ar: 'غير مذكور في السيرة الذاتية', en: 'Not listed in my CV' },
  },
];
