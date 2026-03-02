// YEAR
document.getElementById("year").textContent = new Date().getFullYear();

/* =========================
   MENU DATA (AGGIUNTI TUTTI I PRODOTTI CHE SI VEDONO NEL MENU)
   Se vuoi 100% perfetto al grammo, mandami lista testuale e li allineo 1:1.
========================= */
const MENU = {
  burgers: [
    { name:"Cheese Smash", price:"37 zł", desc:"2× patty wołowe • 4× cheddar • pikle • sos smash.", chips:["classic","cheddar","best"], icon:"./images/cheese.png" },
    { name:"Bacon Smash",  price:"39 zł", desc:"2× patty wołowe • cheddar • 3× bekon • pikle • sos smash.", chips:["bacon","double","top"], icon:"./images/bacon.png" },
    { name:"Dirty Smash",  price:"46 zł", desc:"2× patty wołowe • cheddar • panierowany smażony ser • jajko sadzone • 2× bekon • sos smash.", chips:["signature","extra","new"], icon:"./images/cheese.png" },
    { name:"Honey Onion Smash", price:"39 zł", desc:"2× patty wołowe • cheddar • 2× bekon • karmelizowana cebula • musztarda francuska • sos smash.", chips:["sweet","bacon","top"], icon:"Illustrazioni e icone-06.png" },
    { name:"Flora Smash",  price:"39 zł", desc:"2× patty wołowe • cheddar • świeża sałatka • pomidor • sos smash • lekki winegret.", chips:["fresh","classic","light"], icon:"Illustrazioni e icone-03.png" },
    { name:"Chicken Smash", price:"37 zł", desc:"Kurczak w chrupiącej panierce • świeża sałata • sos Cezar.", chips:["chicken","crispy","cezar"], icon:"Illustrazioni e icone-05.png" },
    { name:"Crispy Chicken", price:"41 zł", desc:"Kurczak w panierce • cheddar • bekon • pomidor • prażona cebulka • sos Cezar • sos musztardowo-miodowy.", chips:["chicken","bacon","new"], icon:"Illustrazioni e icone-04.png" },
    { name:"Vege Smash", price:"39 zł", desc:"Burger z czerwonej fasoli • cheddar • pomidor • rukola • sos smash • aromatyczny sos truflowy.", chips:["vege","truffle","top"], icon:"Illustrazioni e icone-02.png" },
    { name:"Mac’n Smash", price:"44 zł", desc:"2× patty wołowe • cheddar • 2× bekon • kremowe mac & cheese (makaron) • jalapeño • sos smash.", chips:["extra","cheddar","spicy"], icon:"mac.png" }
  ],

  sides: [
    { name:"Frytki", price:"14 zł", desc:"Złociste i chrupkie — rozpierają podniebienie każdym kęsem.", chips:["crispy","classic"], icon:"Illustrazioni e icone-05.png" },
    { name:"Frytki (king size)", price:"18 zł", desc:"Większa porcja złocistych frytek. Idealne do sosów.", chips:["bigger","crispy"], icon:"Illustrazioni e icone-05.png" },
    { name:"Frytki z batatów", price:"23 zł", desc:"Słone na zewnątrz, delikatnie słodkie w środku. Idealny balans.", chips:["sweet","top"], icon:"Illustrazioni e icone-04.png" },
    { name:"Dirty Frytki", price:"23 zł", desc:"Frytki z kremowym sosem serowym — dodaj chrupiący bekon.", chips:["cheddar","loaded"], icon:"Illustrazioni e icone-05.png" },
    { name:"Dirty Frytki + bekon", price:"27 zł", desc:"Dirty frytki z dodatkowym chrupiącym bekonem.", chips:["bacon","loaded"], icon:"Illustrazioni e icone-03.png" },
    { name:"Stripsy z kurczaka", price:"20 zł", desc:"Soczyste kawałki kurczaka w chrupiącej panierce — klasyk.", chips:["chicken","crispy"], icon:"Illustrazioni e icone-04.png" },
    { name:"Krążki cebulowe (10 szt.)", price:"11 zł", desc:"Chrupiące, złociste krążki cebulowe — idealne do maczania.", chips:["onion","crispy"], icon:"Illustrazioni e icone-02.png" },
    { name:"Trójkąty serowe (5 szt.)", price:"14 zł", desc:"Kremowy ser cheddar + ostry papryczek, chrupka panierka nachos.", chips:["cheddar","crispy"], icon:"Illustrazioni e icone-06.png" },
    { name:"Frybox SmashBu", price:"53 zł", desc:"Box: krążki cebulowe + stripsy z kurczaka + trójkąty serowe + frytki + 2 sosy do wyboru.", chips:["box","best","new"], icon:"Illustrazioni e icone-05.png" }
  ],

  addons: [
    { name:"Mięso (extra)", price:"10 zł", desc:"Dodatkowy patty wołowy do burgera.", chips:["extra"], icon:"Illustrazioni e icone-06.png" },
    { name:"Ser (extra)", price:"6 zł", desc:"Dodatkowy ser.", chips:["cheddar"], icon:"Illustrazioni e icone-05.png" },
    { name:"Jalapeño", price:"2 zł", desc:"Podkręć ostrość.", chips:["spicy"], icon:"Illustrazioni e icone-04.png" },
    { name:"Panierowany ser", price:"10 zł", desc:"Smażony ser w panierce.", chips:["cheese","top"], icon:"Illustrazioni e icone-02.png" },
    { name:"Jajko", price:"4 zł", desc:"Jajko sadzone do burgera.", chips:["egg"], icon:"Illustrazioni e icone-03.png" },
    { name:"Bekon", price:"6 zł", desc:"Chrupiący bekon.", chips:["bacon"], icon:"Illustrazioni e icone-03.png" },

    { name:"Zestaw: frytki king size", price:"+4 zł", desc:"Dodaj frytki king size do zestawu.", chips:["set"], icon:"Illustrazioni e icone-05.png" },
    { name:"Zestaw: dirty frytki", price:"+10 zł", desc:"Podmień frytki na dirty frytki.", chips:["set","loaded"], icon:"Illustrazioni e icone-05.png" },
    { name:"Zestaw: dirty frytki + bekon", price:"+14 zł", desc:"Dirty frytki z bekonem w zestawie.", chips:["set","bacon"], icon:"Illustrazioni e icone-03.png" },
    { name:"Podkręć ostrość (do burgera)", price:"+1 zł", desc:"Dowolnego burgera możesz zamówić w wybranym poziomie ostrości.", chips:["spicy"], icon:"Illustrazioni e icone-04.png" }
  ],

  sauces: [
    { name:"Czosnkowy", price:"3 zł", desc:"Klasyczny sos czosnkowy.", chips:["dip"], icon:"Illustrazioni e icone-04.png" },
    { name:"Smash sos", price:"3 zł", desc:"Firmowy sos SmashBu.", chips:["signature"], icon:"Illustrazioni e icone-06.png" },
    { name:"Truflowy", price:"3 zł", desc:"Aromatyczny truflowy.", chips:["truffle"], icon:"Illustrazioni e icone-02.png" },
    { name:"Sriracha-mayo", price:"3 zł", desc:"Pikantny mayo.", chips:["spicy"], icon:"Illustrazioni e icone-04.png" },
    { name:"Cezar", price:"3 zł", desc:"Sos Cezar.", chips:["cezar"], icon:"Illustrazioni e icone-05.png" },
    { name:"Musztardowo-miodowy", price:"3 zł", desc:"Słodko-ostry miodowo-musztardowy.", chips:["sweet"], icon:"Illustrazioni e icone-03.png" }
  ],

  drinks: [
    { name:"Soft drink", price:"10 zł", desc:"Klasyk do smash — wybierz ulubiony smak.", chips:["cold","classic"], icon:"Illustrazioni e icone-04.png" }
  ],

  shakes: [
    { name:"Milkshake", price:"18 zł", desc:"Kremowy, gęsty, słodki. Idealny po burgerze.", chips:["sweet","creamy"], icon:"Illustrazioni e icone-04.png" }
  ]
};

/* =========================
   MENU RENDER (responsive safe)
========================= */
const grid = document.getElementById("menuGrid");
const tabBtns = document.querySelectorAll(".tabBtn");

function chipClass(label){
  const l = (label || "").toLowerCase();
  if (["best","cheddar","classic","box"].includes(l)) return "chip chip--y";
  if (["signature","extra","top","new","truffle"].includes(l)) return "chip chip--p";
  return "chip chip--c";
}

function renderMenu(key){
  const items = MENU[key] || [];
  grid.innerHTML = items.map(it => {
    const chips = (it.chips || []).slice(0,3).map(c => `<span class="${chipClass(c)}">${c}</span>`).join("");
    return `
      <article class="menuItem">
        <div class="menuThumb"><img src="${it.icon}" alt=""></div>
        <div class="menuBody">
          <div class="menuTop">
            <h3 class="menuName">${it.name}</h3>
            <div class="price">${it.price}</div>
          </div>
          <p class="menuDesc">${it.desc}</p>
          <div class="metaRow">${chips}</div>
        </div>
      </article>
    `;
  }).join("");
}

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderMenu(btn.dataset.tab);
  });
});
renderMenu("burgers");

/* =========================
   REVIEWS (BEST GOOGLE PICKS from your paste)
========================= */
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps"; // <-- incolla qui link reale profilo SmashBu su Google Maps

const REVIEWS = [
  { name:"Marcin Skórski", date:"6 ore fa", rating:5, text:"Rewelacja 😀", source:"Google" },
  { name:"Sebastian Klęk (Local Guide)", date:"5 dni temu", rating:5, text:"Obsługa bardzo miła i dbająca o czystość. Frytki zalane sosem serowym a mimo to nadal chrupiące. Sam sos serowy jeden z najlepszych jakich jadłem. Smash: już po pierwszym kęsie wiem że osoba robiąca go wie o co chodzi. Jesteście na podium. Do zobaczenia za rok 🤜🤛🍔🍟", source:"Google" },
  { name:"Maciek Skubi", date:"5 dni temu", rating:5, text:"Od lokalu, przez obsługę i finalnie do jedzenia - wszystko 10/10 :) Zdecydowanie najlepszy smash jakiego jadłem, można polecić.", source:"Google" },
  { name:"xy z", date:"5 dni temu", rating:5, text:"Najlepsze smashe jakie zjadłem w życiu, solidne porcje, dobry stosunek ceny do jakości, przemiła obsługa 100/10 :)", source:"Google" },
  { name:"Jamie OG bruv", date:"5 dni temu", rating:5, text:"Najlepsze miejsce na burgera w mieście! Nowoczesny klimat, świetne wrażenie. Burgery idealnie wysmażone i soczyste, porcje konkretne, obsługa błyskawiczna. Polecam każdemu!", source:"Google" },
  { name:"José L. Pulido Luján", date:"2 tyg. temu", rating:5, text:"Jakość produktu zdecydowanie lepsza niż u konkurencji. Oscar i Katerzyna byli wspaniali — mówili po włosku i opowiedzieli historię o Sardynii. Dirty Smash była szalona. Volveremos!", source:"Google" },
  { name:"Aleksandra Orzoł (Local Guide)", date:"2 tyg. temu", rating:5, text:"Polecam! Pyszne burgery i frytki! Obsługa też pierwsza klasa.", source:"Google" },
  { name:"Mario (Local Guide)", date:"2 tyg. temu", rating:5, text:"Świetne miejsce na gastro mapie Gdańska! Ser w panierce robi robotę!! Dirty fryty z serem i bekonem klasa!!", source:"Google" },
  { name:"Remigiusz Górtowski (Local Guide)", date:"3 tyg. temu", rating:5, text:"Klimatyczne miejsce, świetnie urządzone. Krótkie menu. Burger: miękka buła, dobre mięso, chrupiący bekon i bardzo smaczny sos. Wrócę na kilka pozycji.", source:"Google" },
  { name:"Agnieszka Makara (Local Guide)", date:"18 tyg. temu", rating:5, text:"Pyszne smash burgery, mięso idealnie wypieczone, bułki maślane świeże i bardzo smaczne. Do tego przemiła obsługa. Na pewno wrócę. Serdecznie polecam!!", source:"Google" }
];

function stars(n){
  const r = Math.max(1, Math.min(5, Number(n) || 5));
  return "★★★★★".slice(0, r) + "☆☆☆☆☆".slice(0, 5 - r);
}
function initials(name){
  const s = (name || "").trim();
  if(!s) return "SB";
  const parts = s.split(/\s+/).slice(0,2);
  return parts.map(p => p[0]?.toUpperCase() || "").join("") || "SB";
}

function renderReviews(){
  const track = document.getElementById("reviewsTrack");
  const link = document.getElementById("googleReviewsLink");
  if(!track) return;

  if(link) link.href = GOOGLE_REVIEWS_URL;

  track.innerHTML = REVIEWS.map(r => `
    <article class="revCard">
      <div class="accentLine"></div>

      <div class="revTop">
        <div class="revUser">
          <div class="revAvatar" aria-hidden="true"><span>${initials(r.name)}</span></div>
          <div class="revMeta">
            <p class="revName" title="${r.name}">${r.name}</p>
            <p class="revDate">${r.date}</p>
          </div>
        </div>

        <div class="revRight">
          <span class="revStars" aria-label="Ocena ${r.rating} na 5">${stars(r.rating)}</span>
          <span class="revBadge">${r.source}</span>
        </div>
      </div>

      <div class="revBody">
        <p class="revText">“${r.text}”</p>
      </div>

      <div class="revFooter">
        <div class="revHint">Zweryfikowane opinie</div>
        <a class="revLink" href="${GOOGLE_REVIEWS_URL}" target="_blank" rel="noopener">Google ↗</a>
      </div>
    </article>
  `).join("");
}

function initReviewsNav(){
  const track = document.getElementById("reviewsTrack");
  const prev = document.getElementById("revPrev");
  const next = document.getElementById("revNext");
  if(!track || !prev || !next) return;

  const scrollByCard = (dir) => {
    const card = track.querySelector(".revCard");
    const gap = 16;
    const w = card ? card.getBoundingClientRect().width : 320;
    track.scrollBy({ left: dir * (w + gap), behavior: "smooth" });
  };

  prev.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));
}

/* =========================
   LIGHTBOX
========================= */
const lb = document.getElementById("lb");
const lbImg = document.getElementById("lbImg");
const lbTitle = document.getElementById("lbTitle");
const lbClose = document.getElementById("lbClose");
const lbPrev = document.getElementById("lbPrev");
const lbNext = document.getElementById("lbNext");
const gItems = Array.from(document.querySelectorAll(".gItem"));
let gIdx = 0;

function openLb(i){
  gIdx = (i + gItems.length) % gItems.length;
  const it = gItems[gIdx];
  lbImg.src = it.getAttribute("data-full");
  lbImg.alt = it.getAttribute("data-title") || "";
  lbTitle.textContent = it.getAttribute("data-title") || "";
  lb.classList.add("is-open");
  lb.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}
function closeLb(){
  lb.classList.remove("is-open");
  lb.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  lbImg.src="";
}
gItems.forEach((el,i)=>el.addEventListener("click",()=>openLb(i)));
lbClose.addEventListener("click", closeLb);
lbPrev.addEventListener("click", ()=>openLb(gIdx-1));
lbNext.addEventListener("click", ()=>openLb(gIdx+1));
lb.addEventListener("click",(e)=>{ if(e.target===lb) closeLb(); });
window.addEventListener("keydown",(e)=>{
  if(!lb.classList.contains("is-open")) return;
  if(e.key==="Escape") closeLb();
  if(e.key==="ArrowLeft") openLb(gIdx-1);
  if(e.key==="ArrowRight") openLb(gIdx+1);
});

/* =========================
   FLOATERS: random offsets + safe parallax
========================= */
const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const floaters = Array.from(document.querySelectorAll(".floater"));
function rand(min,max){ return Math.random()*(max-min)+min; }

function initFloaters(){
  floaters.forEach(el=>{
    el.style.setProperty("--tx", rand(-14,14)+"px");
    el.style.setProperty("--ty", rand(-12,12)+"px");
    const dur = parseFloat(getComputedStyle(el).getPropertyValue("--dur")) || rand(10,18);
    el.style.setProperty("--dur",(dur+rand(-1.1,1.1)).toFixed(2)+"s");
  });
}
initFloaters();

if(!prefersReduced){
  const isCoarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  if(!isCoarse){
    let mx=0,my=0,raf=null;
    window.addEventListener("mousemove",(e)=>{
      const w=window.innerWidth||1, h=window.innerHeight||1;
      mx=(e.clientX/w-0.5)*2; my=(e.clientY/h-0.5)*2;
      if(raf) return;
      raf=requestAnimationFrame(()=>{
        floaters.forEach(el=>{
          const depth=parseFloat(el.dataset.depth||"12");
          const px=mx*depth, py=my*depth;
          el.style.transform=`translate3d(calc(var(--tx,0px) + ${px}px), calc(var(--ty,0px) + ${py}px), 0) rotate(var(--rot,0deg))`;
        });
        raf=null;
      });
    },{passive:true});
  }else{
    let t0=performance.now();
    function tick(now){
      const t=(now-t0)/1000;
      floaters.forEach(el=>{
        const depth=parseFloat(el.dataset.depth||"12");
        const px=Math.sin(t*0.35)*(depth*0.25);
        const py=Math.cos(t*0.28)*(depth*0.25);
        el.style.transform=`translate3d(calc(var(--tx,0px) + ${px}px), calc(var(--ty,0px) + ${py}px), 0) rotate(var(--rot,0deg))`;
      });
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
}

/* INIT AFTER DOM READY */
document.addEventListener("DOMContentLoaded", () => {
  renderReviews();
  initReviewsNav();
});