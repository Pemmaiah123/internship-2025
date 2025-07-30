// Load Bootstrap
const bootstrapCSS = document.createElement("link");
bootstrapCSS.rel = "stylesheet";
bootstrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
document.head.appendChild(bootstrapCSS);

const bootstrapJS = document.createElement("script");
bootstrapJS.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
document.head.appendChild(bootstrapJS);

bootstrapJS.onload = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    document.body.style.overflowX = "hidden";
    
    // ====== TOP NAVBAR ======
    const nav = document.createElement("nav");
    nav.className = "navbar bg-white border-bottom w-100";

    const container = document.createElement("div");
    container.className = "container-fluid d-flex flex-wrap justify-content-between align-items-start";

    const logo = document.createElement("a");
    logo.className = "navbar-brand fw-bold d-flex align-items-center";
    logo.href = "#";
    const logoImg = document.createElement("img");
    logoImg.src = "pumasai.svg";
    logoImg.alt = "PumasAI";
    logoImg.width = 200;
    logoImg.className = "me-2";
    logo.appendChild(logoImg);

    const navWrapper = document.createElement("div");
    navWrapper.className = "mx-auto d-flex flex-column align-items-center";

    const topRow = document.createElement("div");
    topRow.className = "d-flex gap-4";
    ["Company", "Media", "Career", "Resources"].forEach(text => {
      const link = document.createElement("a");
      link.href = "#";
      link.className = "nav-link text-dark fw-semibold";
      link.textContent = text;
      topRow.appendChild(link);
    });

    const bottomRow = document.createElement("div");
    bottomRow.className = "d-flex gap-4 mt-1";
    ["Our Products", "Our Services", "Our Customers"].forEach(text => {
      const link = document.createElement("a");
      link.href = "#";
      link.className = "nav-link text-dark fw-semibold";
      link.textContent = text;
      bottomRow.appendChild(link);
    });

    navWrapper.append(topRow, bottomRow);

    const contactBtn = document.createElement("a");
    contactBtn.href = "#";
    contactBtn.className = "btn btn-outline-dark fw-semibold mb-2";
    contactBtn.textContent = "Contact Us";

    container.append(logo, navWrapper, contactBtn);
    nav.appendChild(container);
    app.appendChild(nav);

    // ====== HERO SECTION ======
    const hero = document.createElement("section");
    hero.className = "text-center py-5 px-3 text-dark";
    hero.style.backgroundImage = "url('background.jpg')";
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    hero.style.minHeight = "70vh";

    const heading = document.createElement("h2");
    heading.className = "fw-bold display-6";
    heading.textContent = "We help you deliver better treatments to patients faster";

    const subheading = document.createElement("p");
    subheading.className = "lead mb-4";
    subheading.textContent = "Work with us to find the shortest development path for regulatory approval";

    const info = document.createElement("p");
    info.className = "fs-5 mb-4";
    const span = document.createElement("span");
    span.className = "fw-bold";
    span.innerHTML = "Know more about our Strategic & Scientific Consulting";
    info.appendChild(span);

    const sectionBtn = document.createElement("a");
    sectionBtn.className = "btn btn-outline-dark px-4 py-2 fw-semibold";
    sectionBtn.textContent = "Contact Us";
    sectionBtn.href = "#";

    const btnBox = document.createElement("div");
    btnBox.className = "mt-3";
    btnBox.appendChild(sectionBtn);

    hero.append(heading, subheading, info, btnBox);
    app.appendChild(hero);

    // ====== MINI NAVBAR (Sticky) ======
    const miniNav = document.createElement("div");
    miniNav.className = "d-flex justify-content-between align-items-center px-4 py-3 border-bottom bg-light sticky-top";

    const miniLogo = document.createElement("img");
    miniLogo.src = "logo1.svg";
    miniLogo.alt = "Mini Logo";
    miniLogo.style.height = "40px";

    const miniLinks = document.createElement("div");
    miniLinks.className = "d-flex gap-4";

    [
      { text: "Model Informed Drug Development (MIDD)", target: "#midd" },
      { text: "Regulatory Submission", target: "#regulatory" }
    ].forEach(item => {
      const link = document.createElement("a");
      link.href = item.target;
      link.className = "fw-semibold text-dark text-decoration-none";
      link.textContent = item.text;
      miniLinks.appendChild(link);
    });

    miniNav.append(miniLogo, miniLinks);
    app.appendChild(miniNav);

    // ====== MIDD SECTIONS ======
    const middWrapper = document.createElement("div");
    middWrapper.id = "midd";

    // Title
    const title = document.createElement("h3");
    title.className = "fw-bold  text-center my-5";
    title.textContent = "Model Informed Drug Development (MIDD) Services";
    middWrapper.appendChild(title);

    // Dose Translation Section
    const doseSection = createSection(
      "midd.png",
      "Dose Translation, Rationale, and Justification",
      [
        "Establishing the appropriate dosing regimens is critical to maximizing safety and efficacy for patients and clinical trial participants.",
        "Our pharmacologists and pharmacometricians are experts in dose translation, selection, and justification across all therapeutic areas, modalities, and stages of development.",
        "Utilizing Modeling & Simulation, including the Bayesian approach, proves invaluable in guiding dose selection. Our prowess in this arena is exemplified by the impressive capabilities of Project Optimus."
      ],
      false
    );
    middWrapper.appendChild(doseSection);

    // Bridging & Extrapolation
    const bridge = createSection(
      "bridging-extrapolation.png",
      "Bridging & Extrapolation Approaches 505(B)(2) Pathway",
      [
        "When planning your pediatric development or 505(b)(2) development program, you must determine how to support the efficacy and safety.",
        "You can leverage existing knowledge to bridge efficacy and safety to the new population or new product or new dosing regimen.",
        "We specialize in the nuanced science of extrapolating pediatric efficacy."
      ],
      true
    );
    middWrapper.appendChild(bridge);

    // Modeling & Simulation
    const modeling = createSection(
      "modeling.png",
      "Modeling and Simulation",
      [
        "Using modeling and simulation, existing data can be leveraged to provide critical insights on product safety and effectiveness as related to drug concentration.",
        "They can guide trial design, provide evidence of effectiveness and support labeling."
      ],
      false
    );
    middWrapper.appendChild(modeling);
    
    app.appendChild(middWrapper);

    // ====== HELPER FUNCTION ======
    function createSection(image, subtitle, paras, imageLeft = false) {
      const section = document.createElement("section");
      section.className = "container py-5";

      const row = document.createElement("div");
      row.className = "row align-items-center";

      const imgCol = document.createElement("div");
      imgCol.className = "col-md-6 text-center";
      const img = document.createElement("img");
      img.src = image;
      img.className = "img-fluid";
      img.alt = subtitle;
      imgCol.appendChild(img);

      const textCol = document.createElement("div");
      textCol.className = "col-md-6";
      const h5 = document.createElement("h5");
      h5.className = " mb-3";
      h5.textContent = subtitle;
      textCol.appendChild(h5);

      paras.forEach(pText => {
        const p = document.createElement("p");
        p.textContent = pText;
        textCol.appendChild(p);
      });

      if (imageLeft) {
        row.append(imgCol, textCol);
      } else {
        row.append(textCol, imgCol);
      }

      section.appendChild(row);
      return section;
    }
   // === TESTIMONIAL SECTION ===
const section = document.createElement("section");
section.className = "py-5 text-center";
section.style.background = "#f8f9fa";

// Heading
const head = document.createElement("h2");
head.className = "fw-bold display-5 mb-4";
head.textContent = "Testimonials";
section.appendChild(head);

// Carousel
const carousel = document.createElement("div");
carousel.className = "carousel slide mx-auto";
carousel.id = "testimonialCarousel";
carousel.setAttribute("data-bs-ride", "carousel");
carousel.style.maxWidth = "900px";

// Inner content
const carouselInner = document.createElement("div");
carouselInner.className = "carousel-inner p-4 bg-white rounded shadow";

// Slides data
const slides = [
  {
    text: "We are impressed by the quality and breadth of the experience of PumasAI scientists...",
    name: "Husain A. PhD",
    title: "Director, Head of Clinical Pharmacology and Pharmacometrics",
    org: "Moderna"
  },
  {
    text: "Working with PumasAI has transformed our approach to drug development...",
    name: "Dr. Alice B.",
    title: "Chief Scientific Officer",
    org: "Biogenix"
  },
  {
    text: "PumasAI's consulting services are top-tier. Their team brings deep expertise...",
    name: "John M.",
    title: "VP, Regulatory Affairs",
    org: "NextPharma"
  }
];

// Create each slide
slides.forEach((slide, index) => {
  const item = document.createElement("div");
  item.className = "carousel-item" + (index === 0 ? " active" : "");

  const quote = document.createElement("p");
  quote.className = "fs-5 fw-semibold";
  quote.textContent = slide.text;

  const name = document.createElement("h5");
  name.className = "fw-bold mt-4";
  name.textContent = slide.name;

  const title = document.createElement("p");
  title.className = "text-muted mb-1";
  title.textContent = slide.title;

  const org = document.createElement("p");
  org.className = "text-danger fw-semibold";
  org.textContent = slide.org;

  item.append(quote, name, title, org);
  carouselInner.appendChild(item);
});

// Prev button
const prevBtn = document.createElement("button");
prevBtn.className = "carousel-control-prev";
prevBtn.type = "button";
prevBtn.setAttribute("data-bs-target", "#testimonialCarousel");
prevBtn.setAttribute("data-bs-slide", "prev");

const prevIcon = document.createElement("span");
prevIcon.className = "carousel-control-prev-icon bg-danger rounded-circle p-3";
prevIcon.setAttribute("aria-hidden", "true");

const prevText = document.createElement("span");
prevText.className = "visually-hidden";
prevText.textContent = "Previous";

prevBtn.append(prevIcon, prevText);

// Next button
const nextBtn = document.createElement("button");
nextBtn.className = "carousel-control-next";
nextBtn.type = "button";
nextBtn.setAttribute("data-bs-target", "#testimonialCarousel");
nextBtn.setAttribute("data-bs-slide", "next");

const nextIcon = document.createElement("span");
nextIcon.className = "carousel-control-next-icon bg-danger rounded-circle p-3";
nextIcon.setAttribute("aria-hidden", "true");

const nextText = document.createElement("span");
nextText.className = "visually-hidden";
nextText.textContent = "Next";

nextBtn.append(nextIcon, nextText);

// Combine carousel
carousel.append(carouselInner, prevBtn, nextBtn);
section.appendChild(carousel);

// Append everything to #app
document.getElementById("app").appendChild(section);

  });
};