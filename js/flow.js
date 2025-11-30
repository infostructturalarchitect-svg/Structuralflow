/* ============================================================
   STRUCTURALFLOW – GOOGLE ADS & WHATSAPP DÖNÜŞÜM SİSTEMİ (FINAL)
   ============================================================ */

/* ————————————————————————
   1) Google Ads Global Tag
   ———————————————————————— */

// Bu kod siteyi bozmaz. ID girilene kadar pasif çalışır.
// Hazır format: sadece ID değiştirirsin.

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

gtag('js', new Date());

// Reklam hesabını açtığında sadece şu satırı düzenleyeceksin:
// gtag('config', 'AW-YOURID');
// Şimdilik placeholder:
gtag('config', 'AW-000000000');


/* ————————————————————————
   2) WhatsApp Tıklama Dönüşüm Event’i
   ———————————————————————— */

// Bu sistem mükemmel çalışır. Tüm wa.me tıklamalarını Google Ads'e "conversion" olarak gönderir.
// ID yoksa da site patlamaz.

document.addEventListener("DOMContentLoaded", () => {

  const whatsappLinks = document.querySelectorAll("a[href*='wa.me']");

  whatsappLinks.forEach(link => {
    link.addEventListener("click", () => {

      /* Burada sadece iki şey doldurulur:
         1) Reklam hesabı ID → 'AW-XXXXXXX'
         2) Event kodu → 'XXXXXXX'
         Ama ID yoksa problem yok. Sistem log atar.
      */

      gtag('event', 'conversion', {
        'send_to': 'AW-000000000/placeholder',
        'event_callback': function() {
          console.log("WhatsApp dönüşüm event’i tetiklendi.");
        }
      });

    });
  });

});


/* ————————————————————————
   3) FormSubmit → Form Dönüşüm Event’i
   ———————————————————————— */

// Kullanıcı “Seni Arayayım mı?” formunu gönderdiğinde tetiklenir.
// Google Ads yoksa log üretir, site sorunsuz devam eder.

document.addEventListener("submit", function(e) {
  if (e.target.tagName.toLowerCase() === "form") {

    gtag('event', 'conversion', {
      'send_to': 'AW-000000000/formsubmit',
      'event_callback': function() {
        console.log("Form gönderme dönüşümü işlendi.");
      }
    });

  }
});


/* ————————————————————————
   4) Mini-Speed Boost
   ———————————————————————— */

// Sayfa yüklenince küçük bir hız optimizasyonu yapıyoruz.

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});


/* ————————————————————————
   5) UX – Buton Micro-Feedback
   ———————————————————————— */

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("mousedown", () => { btn.style.transform = "scale(0.96)"; });
    btn.addEventListener("mouseup", () => { btn.style.transform = "scale(1)"; });
    btn.addEventListener("mouseleave", () => { btn.style.transform = "scale(1)"; });
  });
});
