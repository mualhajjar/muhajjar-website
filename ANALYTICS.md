# القياس والربط · Meta Pixel و Google Search Console

> الملخص: الموقع جاهز للقياس لكنه **مطفأ افتراضيًا**. لا يُحمَّل أي سكربت تتبع ولا تظهر نافذة الموافقة حتى يُضاف معرّف Pixel صحيح. بعد إضافته لا يعمل Pixel إلا بعد موافقة الزائر.

---

## 1. Meta Pixel

### أين أضع المعرّف؟ (اختر طريقة واحدة)

**الطريقة المقترحة — متغيّر في GitHub (دون تعديل الكود):**

1. افتح المستودع `mualhajjar/muhajjar-website` ← **Settings** ← **Secrets and variables** ← **Actions** ← تبويب **Variables**.
2. **New repository variable**: الاسم `META_PIXEL_ID`، والقيمة رقم الـPixel (أرقام فقط، مثل `1234567890123456`).
3. شغّل النشر: **Actions** ← **Build and publish** ← **Run workflow** (أو ادفع أي تعديل إلى فرع `source`).

**أو في الملف:** ضع الرقم في `META_PIXEL_ID_IN_FILE` داخل `src/config.ts` ثم ادفع إلى `source`.

أين أجد الرقم؟ Meta Events Manager ← Data sources ← اختر الـPixel (Dataset) ← الرقم الظاهر تحت الاسم (Dataset ID / Pixel ID). المعرّف ليس سرًّا؛ يظهر في صفحات أي موقع يستخدمه.

يطبع سجل البناء سطرًا يؤكد الحالة: `Meta Pixel: on (…), consent required` أو `off`. وإن كان المعرّف غير رقمي يظهر تحذير ويبقى Pixel مطفأً بدل أن يُنشر معطوبًا.

### كيف تعمل الموافقة

| الحالة | ما يحدث |
| --- | --- |
| أول زيارة | تظهر لوحة «قياس الإعلانات» أسفل الصفحة، بزرين متساويين: «موافق» و«رفض». الصفحة تبقى قابلة للاستخدام. |
| قبل الاختيار أو بعد «رفض» | لا يُطلب `fbevents.js` ولا تُنشأ ملفات تعريف ارتباط. |
| «موافق» | يُحمَّل Pixel ويُرسل `PageView`، ثم يُرسل في كل صفحة لاحقة. |
| سحب الموافقة | زر «إعدادات الخصوصية» في التذييل وصفحة `/privacy/` يعيد فتح اللوحة. «رفض» يرسل `consent revoke` ويحذف `_fbp` و`_fbc`. |
| المتصفح يرسل Global Privacy Control | يُعامل كرفض، ولا تظهر اللوحة (يستطيع الزائر الموافقة من «إعدادات الخصوصية»). |

يُحفظ الاختيار في المتصفح فقط (`localStorage`، المفتاح `mh-consent`). لإعادة سؤال الجميع بعد تغيير جوهري في سياسة الخصوصية: ارفع `VERSION` في `src/analytics.ts`.

### الأحداث المرسلة

| الحدث | النوع | متى | البيانات |
| --- | --- | --- | --- |
| `PageView` | قياسي | كل صفحة بعد الموافقة | لا شيء إضافي |
| `Contact` | قياسي | النقر على رابط البريد، أو زر «نسخ» البريد، أو واتساب، أو الهاتف | `method`: `email` / `copy_email` / `whatsapp` / `phone` |
| `ViewResume` | مخصص | النقر على رابط السيرة الذاتية | لا شيء |
| `OutboundClick` | مخصص | النقر على رابط لينكدإن | `destination: linkedin` |

- **لا تُرسل بيانات شخصية**: لا بريد ولا رقم هاتف ولا نص مكتوب.
- **الاكتشاف التلقائي معطّل** (`autoConfig: false`)، فلا يقرأ Meta نصوص الأزرار أو محتوى الصفحة.
- الأحداث مربوطة بعنوان الرابط (mailto: / wa.me / tel: / muhajjar.com/drive / linkedin.com/in)، فأي رابط جديد من هذه الأنواع يُقاس تلقائيًا. لإضافة زر آخر: أضف `data-track="…"` وعرّفه في `classify()` داخل `src/analytics.ts`.

**اقتراح لإعداد الإعلانات:** في Events Manager اجعل `Contact` حدث التحويل الرئيسي للحملات، واستخدم `PageView` و`ViewResume` لبناء جماهير إعادة الاستهداف (Custom Audiences).

### كيف أتحقق أنه يعمل

1. ثبّت إضافة **Meta Pixel Helper** في Chrome.
2. افتح https://muhajjar.com في نافذة خاصة: يجب أن تظهر لوحة الموافقة، وأن **لا** يكتشف Pixel Helper أي Pixel.
3. اضغط «موافق»: يظهر Pixel بالمعرّف الصحيح وحدث `PageView`.
4. اضغط «محادثة واتساب» أو «راسلني بالبريد»: يظهر `Contact`.
5. في **Events Manager ← Test events** أدخل `https://muhajjar.com` وكرّر الخطوات لترى الأحداث مباشرة.
6. اضغط «إعدادات الخصوصية» ثم «رفض»، وحدّث الصفحة: لا يُحمَّل Pixel.

### التزامات الخصوصية

- صفحة الخصوصية `/privacy/` و`/en/privacy/` تتحدث تلقائيًا: قسم Meta Pixel يظهر فقط عند وجود معرّف.
- تشترط شروط Meta Business Tools وجود إشعار خصوصية وموافقة حيث يلزم القانون؛ كلاهما متوفر. هذه ليست استشارة قانونية؛ راجع متطلبات نظام حماية البيانات الشخصية (PDPL) إن كانت الحملات تستهدف جمهورًا واسعًا.

---

## 2. Google Search Console

### ما هو جاهز في الموقع

- `https://muhajjar.com/sitemap.xml`: كل الصفحات العامة بالعربية والإنجليزية (38 رابطًا) مع روابط `hreflang` المتبادلة.
- `https://muhajjar.com/robots.txt`: يسمح بالزحف ويشير إلى الـsitemap.
- رابط `canonical` لكل صفحة، وصفحات 404 عليها `noindex`، وتحويل دائم (301) من `http://` و`www.` إلى `https://muhajjar.com/`.
- لم يكن في المشروع أي ملف أو وسم تحقق سابق من Google (فُحص الفرعان `source` و`main`)، فلا يوجد ما يُحفظ.

### طريقة التحقق المقترحة: نطاق كامل (Domain property) عبر DNS

لماذا؟ تغطي `https://` و`http://` و`www` وأي نطاق فرعي في خاصية واحدة، ولا تعتمد على ملفات الموقع، فلا تضيع عند إعادة النشر.

1. https://search.google.com/search-console ← **Add property** ← **Domain** ← اكتب `muhajjar.com`.
2. انسخ سجل TXT الذي تعرضه Google (يبدأ بـ `google-site-verification=`).
3. في Hostinger: **hPanel ← Domains ← muhajjar.com ← DNS / Nameservers ← DNS records** ← أضف سجلًا: النوع `TXT`، الاسم `@`، القيمة: النص المنسوخ، TTL الافتراضي. (إن كانت إدارة DNS لدى جهة أخرى فأضفه هناك.)
4. ارجع إلى Search Console واضغط **Verify** (قد يستغرق ظهور السجل من دقائق إلى ساعات).
5. بعد التحقق: **Sitemaps** ← أرسل `sitemap.xml`.
6. **URL inspection** ← افحص `https://muhajjar.com/` و`https://muhajjar.com/en/` واطلب الفهرسة.

### بديل: وسم HTML (URL-prefix property)

إن لم يتوفر وصول إلى DNS: أضف الخاصية بنوع **URL prefix** = `https://muhajjar.com/`، واختر **HTML tag**، وانسخ قيمة `content` فقط، ثم ضعها في متغيّر GitHub باسم `GOOGLE_SITE_VERIFICATION` (أو في `GOOGLE_SITE_VERIFICATION_IN_FILE` داخل `src/config.ts`) وأعد النشر. يُضاف الوسم إلى الصفحة الرئيسية تلقائيًا. ويمكن بدلًا من ذلك وضع ملف `googleXXXX.html` الذي تعطيه Google داخل `public/` وسيُنشر كما هو.

### ما يحتاجه مالك الموقع

- صلاحية حساب Google الذي سيملك الخاصية.
- صلاحية DNS للنطاق (hPanel) — أو صلاحية متغيرات GitHub في حالة الوسم.
- لا يلزم أي تعديل في الكود للطريقة المقترحة.

---

## English summary

- **Meta Pixel** is off until an ID is set (GitHub Actions variable `META_PIXEL_ID`, or `src/config.ts`). With an ID it loads only after the visitor clicks *Accept*; *Decline*, withdrawal, and Global Privacy Control keep it off. Events: `PageView`, `Contact {method}`, custom `ViewResume` and `OutboundClick {destination}`. No personal data, `autoConfig` off. Verify with Meta Pixel Helper and Events Manager → Test events.
- **Search Console**: sitemap and robots are live. Recommended: a *Domain* property verified with a DNS TXT record in Hostinger hPanel, then submit `sitemap.xml`. Fallback: HTML tag via `GOOGLE_SITE_VERIFICATION`, or drop Google's HTML file into `public/`.
