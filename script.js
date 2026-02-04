const defaultConfig = {
  groom_name: "Fadli",
  bride_name: "Valery",
  event_date: "Jumat, 13 Februari 2026",
  akad_time: "08:00 AM",
  event_time: "13:00 PM - Selesai",
  venue_name: "Kediaman mempelai wanita",
  venue_address:
    "Perum. Griya Talago Permata, Blok B4, Aua Kuniang, Payakumbuh Selatan",
  maps_link_satu: "https://maps.app.goo.gl/kc4eRTdjDdwkJRPg7",
  maps_link_dua: "https://maps.app.goo.gl/Nvb71SvFhm66wNaYA",
  bank_name_valery: "BNI",
  account_number: "1234567890",
  bank_name_fadli: "BNI",
  account_number_fadli: "",
  account_name: "Valery Raesya",
  background_color: "#b7dcff",
  surface_color: "#ffffff",
  text_color: "#ffffff",
  primary_action_color: "#d3aa5b",
  secondary_action_color: "#a88034",
};

let currentSection = "cover";
let countdownInterval = null;

// Initialize SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues,
  });
} else {
  onConfigChange(defaultConfig);
}

// loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("app-container").style.visibility = "visible";
  document.body.classList.remove("loading");
  
  const items = document.querySelectorAll(".reveal");
  const cards = document.querySelectorAll(".story-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  cards.forEach(card => observer.observe(card));
  items.forEach((el) => observer.observe(el));
});

async function onConfigChange(config) {
  const groomName = config.groom_name || defaultConfig.groom_name;
  const brideName = config.bride_name || defaultConfig.bride_name;
  const eventDate = config.event_date || defaultConfig.event_date;
  const eventTime = config.event_time || defaultConfig.event_time;
  const akadTime = config.akad_time || defaultConfig.akad_time; 
  const venueName = config.venue_name || defaultConfig.venue_name;
  const venueAddress = config.venue_address || defaultConfig.venue_address;
  const bankNameValery = config.bank_name_valery || defaultConfig.bank_name_valery;
  const bankNameFadli = config.bank_name_fadli || defaultConfig.bank_name_fadli;
  const accountNumberValery = config.account_number_valery || defaultConfig.account_number_valery;
  const accountNumberFadli = config.account_number_fadli || defaultConfig.account_number_fadli;
  const accountName = config.account_name || defaultConfig.account_name;
  const bgColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor =
    config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryColor =
    config.secondary_action_color || defaultConfig.secondary_action_color;

  // Update text content
  const groomNameDisplay = document.getElementById("groom-name-display");
  if (groomNameDisplay) groomNameDisplay.textContent = groomName;

  const brideNameDisplay = document.getElementById("bride-name-display");
  if (brideNameDisplay) brideNameDisplay.textContent = brideName;

  const eventDateCover = document.getElementById("event-date-cover");
  if (eventDateCover) eventDateCover.textContent = eventDate;

  const groomNameMain = document.getElementById("groom-name-main");
  if (groomNameMain) groomNameMain.textContent = groomName;

  const brideNameMain = document.getElementById("bride-name-main");
  if (brideNameMain) brideNameMain.textContent = brideName;

  const akadDate = document.getElementById("akad-date");
  if (akadDate) akadDate.textContent = eventDate;

  const akadTimeContent = document.getElementById("akad-time");
  if (akadTimeContent) akadTimeContent.textContent = akadTime;

  const resepsiDate = document.getElementById("resepsi-date");
  if (resepsiDate) resepsiDate.textContent = eventDate;

  const resepsiTime = document.getElementById("resepsi-time");
  if (resepsiTime) resepsiTime.textContent = eventTime;

  const venueNameDisplay = document.getElementById("venue-name-display");
  if (venueNameDisplay) venueNameDisplay.textContent = venueName;

  const venueAddressDisplay = document.getElementById("venue-address-display");
  if (venueAddressDisplay) venueAddressDisplay.textContent = venueAddress;

  const bankNameDisplay = document.getElementById("bank-name-display");
  if (bankNameDisplay) bankNameDisplay.textContent = bankNameValery;

  const accountNumberDisplay = document.getElementById(
    "account-number-display-valery",
  );
  if (accountNumberDisplay) accountNumberDisplay.textContent = accountNumberValery;

  const bankNameDisplayFadli = document.getElementById("bank-name-display-fadli");
  if (bankNameDisplayFadli) bankNameDisplayFadli.textContent = bankNameFadli;

  const accountNumberDisplayFadli = document.getElementById(
    "account-number-display-fadli",
  );
  if (accountNumberDisplayFadli) accountNumberDisplayFadli.textContent = accountNumberFadli;

  const accountNameDisplay = document.getElementById("account-name-display");
  if (accountNameDisplay) accountNameDisplay.textContent = accountName;

  const coupleNamesFooter = document.getElementById("couple-names-footer");
  if (coupleNamesFooter)
    coupleNamesFooter.textContent = `${groomName} & ${brideName}`;

  // Update colors
  document.documentElement.style.setProperty("--bg-color", bgColor);
  document.documentElement.style.setProperty("--surface-color", surfaceColor);
  document.documentElement.style.setProperty("--text-color", textColor);
  document.documentElement.style.setProperty("--primary-color", primaryColor);
  document.documentElement.style.setProperty(
    "--secondary-color",
    secondaryColor,
  );

  // Apply background colors to sections
  const coverBg = document.getElementById("cover-bg");
  //   if (coverBg) coverBg.style.background = `linear-gradient(135deg, ${bgColor} 0%, ${adjustColor(bgColor, -20)} 50%, ${adjustColor(bgColor, 20)} 100%)`;
  if (coverBg) {
    coverBg.style.backgroundImage = "url('img/bg.png')";
    coverBg.style.backgroundSize = "cover";
    coverBg.style.backgroundPosition = "center";
    coverBg.style.backgroundRepeat = "no-repeat";
    coverBg.style.minHeight = "10010%";
  }

  // Update button colors
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach((btn) => {
    if (btn.id === "open-invitation-btn") {
      btn.style.background = `linear-gradient(to right, ${primaryColor}, #e0cc9f)`;
      btn.style.borderImage = `linear-gradient(to right, ${primaryColor}, #e0cc9f)`;
    } else if (btn.id === "maps-btn-satu" || btn.id === "copy-account-btn" || btn.id === "maps-btn-dua") {
      btn.style.background = `linear-gradient(to right, #e0cc9f, ${primaryColor})`;
    }
  });
}

function adjustColor(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, Math.min(255, (num >> 16) + amt));
  const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amt));
  const B = Math.max(0, Math.min(255, (num & 0x0000ff) + amt));
  return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

// Initialize event listeners
document
  .getElementById("open-invitation-btn")
  .addEventListener("click", openInvitation);
document.getElementById("maps-btn-satu").addEventListener("click", openMapSatu);
document.getElementById("maps-btn-dua").addEventListener("click", openMapsDua);
document
  .getElementById("copy-account-btn")
  .addEventListener("click", copyAccountNumber);
function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ background_color: value });
        },
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ surface_color: value });
        },
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ text_color: value });
        },
      },
      {
        get: () =>
          config.primary_action_color || defaultConfig.primary_action_color,
        set: (value) => {
          config.primary_action_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ primary_action_color: value });
        },
      },
      {
        get: () =>
          config.secondary_action_color || defaultConfig.secondary_action_color,
        set: (value) => {
          config.secondary_action_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ secondary_action_color: value });
        },
      },
    ],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined,
  };
}

function openInvitation() {
  const coverPage = document.getElementById("cover-page");
  const videoSection = document.getElementById("video-section");
  const mainContent = document.getElementById("main-content");
  const video = document.getElementById("opening-video");
  const music = document.getElementById("weddingMusic");

  // pastikan section lain tampil
  videoSection.classList.remove("hidden");
  videoSection.style.display = "block";
  mainContent.style.display = "block";

  // fade out cover
  coverPage.style.transition = "opacity 0.5s ease";
  coverPage.style.opacity = "0";

  // tunggu animasi selesai
    coverPage.style.display = "none";

  // SCROLL KE VIDEO (INI PENTING!)
  videoSection.scrollIntoView({ behavior: "smooth" });

  // play video (user gesture aman)
  video.play().catch(() => {});

  music.play().catch(() => {});
  music.loop = true;
  music.volume = 0.5;
}

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9c1ff1b7257da8fa',t:'MTc2OTA5NDI3MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    //Video Style
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Wedding Countdown (13 February 2026)
const weddingDate = new Date("2026-02-13T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      "<h3>🎉 Today is the Wedding Day! 🎉</h3>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  toastMessage.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("toast-notification");

  setTimeout(() => {
    toast.classList.add("hidden");
    toast.classList.remove("toast-notification");
  }, 3000);
}

function openMapSatu() {
  const config = window.elementSdk ? window.elementSdk.config : {};
  const mapsLinkSatu = config.maps_link_satu || defaultConfig.maps_link_satu;
  window.open(mapsLinkSatu, "_blank", "noopener,noreferrer");
}

function openMapsDua() {
  const config = window.elementSdk ? window.elementSdk.config : {};
  const mapsLinkDua = config.maps_link_dua || defaultConfig.maps_link_dua;
  window.open(mapsLinkDua, "_blank", "noopener,noreferrer");
}

function copyAccountNumber() {
  const config = window.elementSdk ? window.elementSdk.config : {};
  const accountNumber = config.account_number || defaultConfig.account_number;

  navigator.clipboard
    .writeText(accountNumber)
    .then(() => {
      showToast("Nomor rekening berhasil disalin!");
    })
    .catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = accountNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showToast("Nomor rekening berhasil disalin!");
    });
}

function mapToEditPanelValues(config) {
  return new Map([
    ["groom_name", config.groom_name || defaultConfig.groom_name],
    ["bride_name", config.bride_name || defaultConfig.bride_name],
    ["event_date", config.event_date || defaultConfig.event_date],
    ["event_time", config.event_time || defaultConfig.event_time],
    ["venue_name", config.venue_name || defaultConfig.venue_name],
    ["venue_address", config.venue_address || defaultConfig.venue_address],
    ["maps_link_satu", config.maps_link_satu || defaultConfig.maps_link_satu],
    ["maps_link_dua", config.maps_link_dua || defaultConfig.maps_link_dua],
    ["bank_name", config.bank_name || defaultConfig.bank_name],
    ["account_number", config.account_number || defaultConfig.account_number],
    ["account_name", config.account_name || defaultConfig.account_name],
  ]);
}

const revealElements = document.querySelectorAll('.card-reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');     // muncul saat masuk viewport
    }else{
      entry.target.classList.remove('show');  // hilang saat keluar viewport
    }
  });
}, {
  threshold: 0.1 // trigger saat 20% elemen terlihat
});
revealElements.forEach(el => observer.observe(el));


// Insert invitee name
window.addEventListener("DOMContentLoaded", () => {
  const name = getQueryParam("name");
  const firstScreen = document.getElementById("firstScreenName");
  if(name){
    const formattedName = decodeURIComponent(name).split(" ").map(
      w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    ).join(" ");
    firstScreen.textContent = `Kepada Yth. ${formattedName},`;
  }
});


