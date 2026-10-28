import type { T } from './types';

/**
 * Photographs from the user's "memories" folder (Google Drive), copied into
 * the site at /assets/images/moments/ so the site never depends on Drive links.
 *
 * Captions only state what the file name and the picture itself show.
 * No dates, places, or stories are added, and none of these photos is
 * presented as evidence of a specific client project.
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
  event: m('m01-event', 'فعالية', 'Event', 'شخصان يتحدثان في مساحة عرض بإضاءة مسرحية', 'Two people talking in an exhibition space under stage lighting'),
  site: m('m02-construction-site', 'موقع إنشاء', 'Construction site', 'مجموعة في موقع إنشاء أمام الرافعات', 'A group at a construction site in front of cranes'),
  siteTeam: m('m03-team', 'الفريق', 'Team', 'فريق يرتدي سترات السلامة في موقع إنشاء', 'A team in safety vests at a construction site'),
  stage: m('m04-bankruptcy-commission', 'لجنة الإفلاس', 'Bankruptcy Commission', 'صورة جماعية على منصة مؤتمر لجنة الإفلاس', 'A group photo on the Bankruptcy Commission conference stage'),
  booth: m('m05-bussma', 'بصمة', 'Bussma', 'جناح بصمة في معرض', 'The Bussma stand at an exhibition'),
  studio: m('m06-alajlan-project', 'مشروع العجلان', 'Alajlan project', 'جلسة عمل أمام الشاشات في المكتب', 'A working session at screens in the office'),
  planning: m('m07-planning', 'التخطيط', 'Planning', 'لوحة تخطيط مثبتة على جدار من الطوب', 'A planning board on a brick wall'),
  office: m('m08-team-office', 'مكتب الفريق', 'Team office', 'الفريق في المكتب', 'The team in the office'),
  team: m('m09-team', 'الفريق', 'Team', 'الفريق في المكتب أمام رفوف الكتب', 'The team in the office by the bookshelves'),
  presentation: m('m10-presentation', 'عرض تقديمي', 'Presentation', 'عرض تقديمي على شاشة في مساحة عمل', 'A presentation on screen in a workspace'),
  gathering: m('m11-team-gathering', 'لقاء الفريق', 'Team gathering', 'صورة جماعية للفريق في جلسة', 'A team group photo at a gathering'),
  awards: m('m12-awards', 'التكريم', 'Awards', 'صورة جماعية مع دروع التكريم', 'A group photo with award plaques'),
  portrait: m('m13-portrait', 'صورة شخصية', 'Portrait', 'صورة شخصية خلال فعالية', 'A portrait at an event'),
  gallery: m('m14-harf-gallery', 'حرف جاليري', 'Harf Gallery', 'شعار حرف جاليري بين لوحات الخط العربي', 'The Harf Gallery mark among calligraphy artworks'),
};

/** Order used by the visual journal. */
export const journal = [
  moments.event,
  moments.gallery,
  moments.planning,
  moments.presentation,
  moments.site,
  moments.portrait,
  moments.studio,
  moments.stage,
  moments.booth,
  moments.office,
  moments.siteTeam,
  moments.team,
  moments.awards,
  moments.gathering,
];

export const atWorkVideo = {
  src: '/assets/media/at-work.mp4',
  poster: '/assets/media/at-work-poster.jpg',
  caption: { ar: 'في المكتب', en: 'At the office' } as T,
  alt: { ar: 'منذر الحجار في مكتبه أثناء العمل', en: 'Munther AlHajjar at work at his desk' } as T,
};
