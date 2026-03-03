const pptxgen = require("/sessions/vigilant-stoic-knuth/.npm-global/lib/node_modules/pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Thomas Serre";
pres.title = "CPSY 1950 Template";

// ========================================================
// COLOR PALETTE (exact values from uploaded template slides)
// ========================================================
const C = {
  indigo: "4F46E5",      // Primary: titles, bold labels
  darkBg: "0F172A",      // Title/section slide background
  navyBar: "162D50",     // Figure slide header bar
  white: "FFFFFF",
  black: "000000",       // Theme dk1 (kept for reference, not used)
  bodyText: "334155",    // Body text (slate-700, explicit on slides)
  mutedText: "64748B",   // Slate gray for figure captions
  tealAccent: "0891B2",  // Teal accent (bullet color on title slide)
  labelAccent: "0E7490", // Teal for spacing runs on title slide
};

// ========================================================
// POSITIONING CONSTANTS (exact EMU→inch from uploaded template)
// ========================================================
// Title placeholder: x=311700 (0.34"), y=228600 (0.25"), cx=8520600 (9.32"), cy=523200 (0.57")
// Body placeholder:  x=311700 (0.34"), y=1191850 (1.30"), cx=8520600 (9.32"), cy varies
// Citation (subTitle, idx=2): x=-3870 (≈0"), y=4726261 (5.17"), cx=4046100 (4.42"), cy=411900 (0.45")
// Citation font: Zilla Slab Light 12pt italic (original from Google Slides layout)
// Slide number: x=8472458 (9.27"), y=4663217 (5.10"), cx=548700 (0.60"), cy=393600 (0.43")

const TITLE_PH = { x: 0.34, y: 0.25, w: 9.32, h: 0.57 };
const BODY_PH  = { x: 0.34, y: 1.30, w: 9.32 };
const CITE_PH  = { x: 0, y: 5.17, w: 4.42, h: 0.45 };
const SLDNUM   = { x: 9.27, y: 5.10, w: 0.60, h: 0.43 };

// Citation font: Zilla Slab Light 12pt italic (original)
const CITE_FONT = "Zilla Slab Light";
const CITE_SIZE = 12;

// ========================================================
// SLIDE MASTERS
// ========================================================

// 1. TITLE SLIDE (dark background — matches layout "QUESTION")
// Single body placeholder with stacked paragraphs: course label, subtitle, title, tagline
pres.defineSlideMaster({
  title: "CPSY_TITLE",
  background: { color: C.darkBg },
  objects: [
    // Main text area (matches body idx=1: x=0, y≈0, cx=9144000, cy=3854100)
    {
      placeholder: {
        options: {
          name: "title",
          type: "title",
          x: 0, y: 0.04, w: 10, h: 4.22,
          align: "center",
          valign: "middle",
          fontSize: 38, fontFace: "Outfit", bold: true,
          color: C.white,
        },
        text: "(Lecture title)",
      },
    },
    // Subtitle / tagline area (matches body idx=2: x=914400, y=3977640)
    {
      placeholder: {
        options: {
          name: "subtitle",
          type: "body",
          x: 1.0, y: 4.35, w: 8.0, h: 0.9,
          align: "center",
          fontSize: 20, fontFace: "Outfit",
          color: C.bodyText,
        },
        text: "(Tagline or guiding question)",
      },
    },
  ],
});

// 2. SECTION DIVIDER (dark background, left-aligned with vertical bar)
pres.defineSlideMaster({
  title: "CPSY_SECTION",
  background: { color: C.darkBg },
  objects: [
    // Vertical accent bar
    { rect: { x: 0.85, y: 1.7, w: 0.04, h: 1.8, fill: { color: C.indigo } } },
    // Section title
    {
      placeholder: {
        options: {
          name: "title",
          type: "title",
          x: 1.1, y: 1.7, w: 8.0, h: 1.0,
          align: "left",
          fontSize: 36, fontFace: "Outfit", bold: true,
          color: C.white,
        },
        text: "(Section title)",
      },
    },
    // Section subtitle
    {
      placeholder: {
        options: {
          name: "subtitle",
          type: "body",
          x: 1.1, y: 2.8, w: 8.0, h: 0.6,
          align: "left",
          fontSize: 18, fontFace: "Outfit",
          color: C.indigo,
        },
        text: "(Guiding question or subtitle)",
      },
    },
  ],
});

// 3. CONTENT SLIDE (white bg — matches layout "TITLE_AND_BODY")
// Three placeholders: title (center), body (left bullets), citation (bottom-left)
pres.defineSlideMaster({
  title: "CPSY_CONTENT",
  background: { color: C.white },
  objects: [
    // Title — CENTER ALIGNED (algn="ctr" in layout)
    {
      placeholder: {
        options: {
          name: "title",
          type: "title",
          x: TITLE_PH.x, y: TITLE_PH.y, w: TITLE_PH.w, h: TITLE_PH.h,
          align: "center",
          fontSize: 28, fontFace: "Outfit", bold: true,
          color: C.indigo,
          margin: [5, 10, 5, 10],
        },
        text: "(Slide title)",
      },
    },
    // Body — left-aligned bullets
    {
      placeholder: {
        options: {
          name: "body",
          type: "body",
          x: BODY_PH.x, y: BODY_PH.y, w: BODY_PH.w, h: 3.6,
          align: "left",
          fontSize: 16, fontFace: "Outfit",
          color: C.bodyText,
          valign: "top",
          lineSpacingMultiple: 1.15,
          margin: [5, 10, 5, 10],
        },
        text: "(Body content)",
      },
    },
    // Citation / reference (subTitle placeholder, bottom-left)
    // Font: Zilla Slab Light 12pt italic; color: #334155 (consistent with body text)
    {
      placeholder: {
        options: {
          name: "citation",
          type: "body",
          x: CITE_PH.x, y: CITE_PH.y, w: CITE_PH.w, h: CITE_PH.h,
          align: "left",
          valign: "bottom",
          fontSize: CITE_SIZE, fontFace: CITE_FONT, italic: true,
          color: C.bodyText,
          margin: [10, 10, 10, 10],
        },
        text: "",
      },
    },
  ],
});

// 4. FIGURE SLIDE (white bg, dark header bar for paper reference)
pres.defineSlideMaster({
  title: "CPSY_FIGURE",
  background: { color: C.white },
  objects: [
    // Dark header bar (navy #162D50)
    { rect: { x: 0, y: 0, w: 10, h: 0.65, fill: { color: C.navyBar } } },
    // Paper reference in header bar (Outfit bold white)
    {
      placeholder: {
        options: {
          name: "paperRef",
          type: "body",
          x: 0.5, y: 0.08, w: 9.0, h: 0.5,
          align: "left",
          valign: "middle",
          fontSize: 16, fontFace: "Outfit", bold: true,
          color: C.white,
          margin: 0,
        },
        text: "(Author et al. (Year) — Figure N)",
      },
    },
    // Figure title — CENTER ALIGNED
    {
      placeholder: {
        options: {
          name: "title",
          type: "title",
          x: TITLE_PH.x, y: 0.85, w: TITLE_PH.w, h: 0.45,
          align: "center",
          fontSize: 20, fontFace: "Outfit", bold: true,
          color: C.bodyText,
          margin: 0,
        },
        text: "(Figure title)",
      },
    },
    // Image area
    {
      placeholder: {
        options: {
          name: "body",
          type: "body",
          x: 1.0, y: 1.35, w: 8.0, h: 3.6,
          align: "center",
          fontSize: 14, fontFace: "Calibri",
          color: C.mutedText,
        },
        text: "(Place figure image here)",
      },
    },
  ],
});

// 5. TWO-COLUMN CONTENT SLIDE
pres.defineSlideMaster({
  title: "CPSY_TWO_COL",
  background: { color: C.white },
  objects: [
    // Title — CENTER ALIGNED
    {
      placeholder: {
        options: {
          name: "title",
          type: "title",
          x: TITLE_PH.x, y: TITLE_PH.y, w: TITLE_PH.w, h: TITLE_PH.h,
          align: "center",
          fontSize: 28, fontFace: "Outfit", bold: true,
          color: C.indigo,
          margin: [5, 10, 5, 10],
        },
        text: "(Slide title)",
      },
    },
    // Left column
    {
      placeholder: {
        options: {
          name: "colLeft",
          type: "body",
          x: BODY_PH.x, y: BODY_PH.y, w: 4.35, h: 3.6,
          align: "left",
          fontSize: 16, fontFace: "Outfit",
          color: C.bodyText,
          valign: "top",
          lineSpacingMultiple: 1.15,
        },
        text: "(Left column)",
      },
    },
    // Right column
    {
      placeholder: {
        options: {
          name: "colRight",
          type: "body",
          x: 5.1, y: BODY_PH.y, w: 4.35, h: 3.6,
          align: "left",
          fontSize: 16, fontFace: "Outfit",
          color: C.bodyText,
          valign: "top",
          lineSpacingMultiple: 1.15,
        },
        text: "(Right column)",
      },
    },
    // Citation (bottom-left, Zilla Slab Light 12pt italic #334155)
    {
      placeholder: {
        options: {
          name: "citation",
          type: "body",
          x: CITE_PH.x, y: CITE_PH.y, w: CITE_PH.w, h: CITE_PH.h,
          align: "left",
          valign: "bottom",
          fontSize: CITE_SIZE, fontFace: CITE_FONT, italic: true,
          color: C.bodyText,
          margin: [10, 10, 10, 10],
        },
        text: "",
      },
    },
  ],
});

// ========================================================
// EXAMPLE SLIDES (one per master)
// ========================================================

// Slide 1: Title slide
let s1 = pres.addSlide({ masterName: "CPSY_TITLE" });
s1.addText([
  { text: "CPSY 1950", options: { fontSize: 16, fontFace: "Outfit", bold: true, color: C.indigo, breakLine: true, paraSpaceAfter: 4 } },
  { text: "Deep Learning in Brains, Minds & Machines", options: { fontSize: 20, fontFace: "Outfit", color: C.indigo, breakLine: true, paraSpaceAfter: 3.2 } },
  { text: "", options: { fontSize: 16, breakLine: true, paraSpaceAfter: 7.6 } },
  { text: "The three levers of deep learning", options: { fontSize: 38, fontFace: "Outfit", bold: true, color: C.white, paraSpaceAfter: 12 } },
], { placeholder: "title" });
s1.addText("Architectures, training objectives & datasets", { placeholder: "subtitle" });

// Slide 2: Section divider
let s2 = pres.addSlide({ masterName: "CPSY_SECTION" });
s2.addText("Section Title", { placeholder: "title" });
s2.addText("What question does this section address?", { placeholder: "subtitle" });

// Slide 3: Content slide (matching uploaded slide 2 exactly)
let s3 = pres.addSlide({ masterName: "CPSY_CONTENT" });
s3.addText("Where we are in the course", { placeholder: "title" });
s3.addText([
  { text: "Weeks 1–2: ", options: { bold: true, color: C.indigo, bullet: { code: "25CF" }, indentLevel: 0 } },
  { text: "What is NeuroAI? Why study brains and machines together?", options: { color: C.bodyText, breakLine: true } },
  { text: "This week: ", options: { bold: true, color: C.indigo, bullet: { code: "25CF" }, indentLevel: 0 } },
  { text: "How AI systems are trained (data, training objectives & architectures)", options: { color: C.bodyText, breakLine: true } },
  { text: "Your reading: ", options: { bold: true, color: C.indigo, bullet: { code: "25CF" }, indentLevel: 0 } },
  { text: 'Serre (2019) "Deep Learning: The Good, the Bad, and the Ugly"', options: { color: C.bodyText, breakLine: true } },
], { placeholder: "body" });
// Citation in Georgia italic (substitute for Zilla Slab Light)
s3.addText("Serre (2019)", { placeholder: "citation" });

// Slide 4: Figure slide
let s4 = pres.addSlide({ masterName: "CPSY_FIGURE" });
s4.addText("Binz et al. (Nature 2025) — Figure 1", { placeholder: "paperRef" });
s4.addText("Psych-101 dataset and Centaur architecture", { placeholder: "title" });
s4.addText("(Place figure image here)", { placeholder: "body" });

// Slide 5: Two-column
let s5 = pres.addSlide({ masterName: "CPSY_TWO_COL" });
s5.addText("Comparison: Method A vs. Method B", { placeholder: "title" });
s5.addText([
  { text: "Method A", options: { bold: true, color: C.indigo, breakLine: true } },
  { text: "Uses supervised learning", options: { bullet: { code: "25CF" }, breakLine: true } },
  { text: "Requires labeled data", options: { bullet: { code: "25CF" } } },
], { placeholder: "colLeft" });
s5.addText([
  { text: "Method B", options: { bold: true, color: C.indigo, breakLine: true } },
  { text: "Uses self-supervised learning", options: { bullet: { code: "25CF" }, breakLine: true } },
  { text: "No labels needed", options: { bullet: { code: "25CF" } } },
], { placeholder: "colRight" });

// ========================================================
// SAVE
// ========================================================
const outPath = "/sessions/vigilant-stoic-knuth/mnt/cpsy1950/cpsy1950_template.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("Template saved to: " + outPath);
}).catch(err => {
  console.error("Error:", err);
});
