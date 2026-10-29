import { TRACKING_ENABLED } from '../config';
import type { T } from './types';

/**
 * Privacy notice. It describes the site as built: no forms, no accounts, two browser-storage
 * keys, Vimeo players on two case studies, and Meta Pixel only when configured and accepted.
 * Update it whenever an integration is added or removed.
 */
export const privacySections: { id: string; title: T; body: T[] }[] = [
  {
    id: 'summary',
    title: { ar: 'باختصار', en: 'In short' },
    body: [
      {
        ar: 'هذا موقع تعريفي شخصي. لا يحتوي على نماذج أو حسابات، ولا يطلب منك أي بيانات. التواصل يتم عبر روابط البريد وواتساب ولينكدإن، فتنتقل إلى تلك الخدمات مباشرة.',
        en: 'This is a personal portfolio site. It has no forms or accounts and does not ask you for any data. Contact happens through email, WhatsApp, and LinkedIn links that take you straight to those services.',
      },
    ],
  },
  {
    id: 'storage',
    title: { ar: 'ما يحفظه المتصفح', en: 'What your browser stores' },
    body: [
      {
        ar: 'يحفظ الموقع في متصفحك اختيار المظهر (فاتح أو داكن)' + (TRACKING_ENABLED ? '، واختيارك بشأن قياس الإعلانات' : '') + '. هذه القيم تبقى على جهازك ولا تُرسل إلى أي جهة.',
        en: 'The site stores your theme choice (light or dark)' + (TRACKING_ENABLED ? ' and your advertising-measurement choice' : '') + ' in your browser. These values stay on your device and are not sent anywhere.',
      },
      {
        ar: 'قد يحتفظ مزوّد الاستضافة بسجلات تقنية قياسية للطلبات (مثل عنوان IP ونوع المتصفح) لأغراض التشغيل والأمان.',
        en: 'The hosting provider may keep standard technical request logs (such as IP address and browser type) for operation and security.',
      },
    ],
  },
  ...(TRACKING_ENABLED
    ? [
        {
          id: 'meta-pixel',
          title: { ar: 'قياس الإعلانات (Meta Pixel)', en: 'Advertising measurement (Meta Pixel)' },
          body: [
            {
              ar: 'عند موافقتك فقط، يُحمَّل Meta Pixel من شركة Meta لقياس زيارات الصفحات والنقر على وسائل التواصل (البريد وواتساب والهاتف) وفتح السيرة الذاتية، بهدف قياس نتائج الإعلانات وإعادة الوصول إلى زوار الموقع على فيسبوك وإنستغرام.',
              en: 'Only if you accept, Meta Pixel from Meta is loaded to measure page visits, clicks on contact options (email, WhatsApp, phone), and opening the résumé, so that ad results can be measured and site visitors can be reached again on Facebook and Instagram.',
            },
            {
              ar: 'لا يُرسل الموقع إلى Meta بريدك أو رقمك أو أي نص تكتبه، والاكتشاف التلقائي للأحداث معطّل. قد تضع Meta ملف تعريف ارتباط باسم \u2066_fbp\u2069 وتعالج بيانات جهازك وفق سياسة الخصوصية الخاصة بها.',
              en: 'The site does not send Meta your email address, phone number, or anything you type, and automatic event detection is switched off. Meta may set a cookie named _fbp and process device data under its own privacy policy.',
            },
            {
              ar: 'إذا رفضت أو أرسل متصفحك إشارة Global Privacy Control فلن يُحمَّل Pixel. ويمكنك سحب الموافقة في أي وقت من زر «إعدادات الخصوصية»، فيتوقف القياس وتُحذف ملفات Meta من هذا الموقع.',
              en: 'If you decline, or your browser sends a Global Privacy Control signal, the Pixel is not loaded. You can withdraw consent at any time with the “Privacy settings” button; measurement stops and Meta’s cookies for this site are removed.',
            },
          ] as T[],
        },
      ]
    : []),
  {
    id: 'embeds',
    title: { ar: 'محتوى من خدمات أخرى', en: 'Content from other services' },
    body: [
      {
        ar: 'صفحتا افتتاح السليمان بزنس كمباوند وسكينة كمباوند تعرضان فيلمين من Vimeo بإعداد «عدم التتبع». عند تشغيلهما تنطبق سياسة Vimeo. وروابط واتساب ولينكدإن وGoogle Drive تخضع لسياسات تلك الخدمات.',
        en: 'The Alsoliman Business Compound and Sakenah Compound case studies show films from Vimeo with its “do not track” setting. Vimeo’s policy applies when they play. WhatsApp, LinkedIn, and Google Drive links are covered by those services’ policies.',
      },
    ],
  },
  {
    id: 'contact',
    title: { ar: 'التواصل', en: 'Contact' },
    body: [
      {
        ar: 'لأي سؤال عن الخصوصية في هذا الموقع: mu.alhajjar@gmail.com',
        en: 'For any privacy question about this site: mu.alhajjar@gmail.com',
      },
    ],
  },
];
