import type { T } from './types';

/**
 * Photographs from the user's own "memories" folder (also on Google Drive),
 * used as visual interludes between sections. Captions stay descriptive and
 * make no claims beyond what each photo shows.
 */
export interface Moment {
  key: string;
  alt: T;
  caption: T;
}

const m = (key: string, ar: string, en: string, altAr: string, altEn: string): Moment => ({
  key,
  caption: { ar, en },
  alt: { ar: altAr, en: altEn },
});

export const moments = {
  event: m('m01-event', 'في قلب الحدث', 'At the heart of the event', 'منصة عرض في معرض بإضاءة مسرحية', 'An exhibition stage under theatrical lighting'),
  site: m('m02-construction-site', 'من الموقع', 'On site', 'فريق المشروع في موقع إنشاء', 'The project team at a construction site'),
  siteTeam: m('m03-team', 'فريق واحد', 'One team', 'فريق العمل أمام الرافعات في موقع المشروع', 'The team in front of the cranes on site'),
  stage: m('m04-bankruptcy-commission', 'لحظة تكريم', 'A moment of recognition', 'صورة جماعية على منصة حفل', 'A group photo on an event stage'),
  booth: m('m05-bussma', 'في المعارض', 'At the exhibitions', 'جناح في معرض عقاري', 'A stand at a property exhibition'),
  studio: m('m06-alajlan-project', 'في الاستوديو', 'In the studio', 'مراجعة تصاميم مشروع في المكتب', 'Reviewing project designs at the office'),
  planning: m('m07-planning', 'التخطيط على الجدار', 'Planning on the wall', 'لوحة تخطيط مشروع مثبتة على جدار من الطوب', 'A project planning board on a brick wall'),
  office: m('m08-team-office', 'بيئة العمل', 'The workplace', 'الفريق في مكتب الوكالة', 'The team at the agency office'),
  team: m('m09-team', 'الفريق', 'The team', 'الفريق في جلسة عمل', 'The team at a working session'),
  presentation: m('m10-presentation', 'من العرض إلى القرار', 'From pitch to decision', 'عرض تقديمي على شاشة في قاعة اجتماعات', 'A presentation on screen in a meeting room'),
  gathering: m('m11-team-gathering', 'نجاح مشترك', 'Shared success', 'لقاء جماعي للفريق', 'A team gathering'),
  awards: m('m12-awards', 'التقدير', 'Recognition', 'صورة جماعية مع دروع التكريم', 'A group photo with recognition plaques'),
  portrait: m('m13-portrait', 'حوار', 'In conversation', 'منذر الحجار في حديث خلال فعالية', 'Munther AlHajjar in conversation at an event'),
  gallery: m('m14-harf-gallery', 'حرف جاليري', 'Harf Gallery', 'شعار حرف جاليري بين لوحات الخط العربي', 'The Harf Gallery mark among calligraphy artworks'),
};

export const atWorkVideo = {
  src: '/media/at-work.mp4',
  poster: '/media/at-work-poster.jpg',
  caption: { ar: 'يوم عمل', en: 'A working day' } as T,
  alt: { ar: 'منذر الحجار في مكتبه أثناء العمل', en: 'Munther AlHajjar at work at his desk' } as T,
};
