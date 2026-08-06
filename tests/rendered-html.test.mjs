import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Kristi Kim UX Portfolio<\/title>/i);
  assert.match(html, /Kristi Kim/);
  assert.match(html, /marker-highlight/);
  assert.match(html, /Researcher,/);
  assert.match(html, /&amp; Frontend Developer\./);
  assert.match(html, /Recent graduate in Human Centered Design and Engineering/i);
  assert.match(html, /University of Washington/i);
  assert.match(html, /Product Designer/);
  assert.match(html, /thoughtful AI experiences/);
  assert.match(html, /combining research, design/);
  assert.match(html, /and code/);
  assert.match(html, /intuitive products/);
  assert.match(html, /put people first/);
  assert.doesNotMatch(html, /class="eyebrow">UX portfolio/);
  assert.match(html, /krisooti08@gmail\.com/);
  assert.match(html, />Copy</);
  assert.doesNotMatch(html, /Selected product, mobile, and service design work/);
  assert.doesNotMatch(html, /hello@example\.com/);
  assert.doesNotMatch(html, /<span class="marker-highlight">Work<\/span>/);
  assert.match(html, /About/);
  assert.match(html, /Playground/);
  assert.doesNotMatch(html, /Resume ↗/);
  assert.doesNotMatch(html, /136-JmSMxNNClZBRh74sGuPs39FnmjjCZ/);
  assert.match(html, /Contact/);
  assert.doesNotMatch(html, /Feel free to contact me/);
  assert.doesNotMatch(html, /I shape quiet digital products/);
  assert.match(html, /I&#x27;m currently in Seattle/);
  assert.match(html, /MindBridge/);
  assert.match(html, /Tmind AI/);
  assert.doesNotMatch(html, /AI-powered platform that helps therapists-in-training/);
  assert.match(html, /Haven/);
  assert.match(html, /Leafy/);
  assert.doesNotMatch(html, /Coming Soon/);
  assert.doesNotMatch(html, /New Project/);
  assert.doesNotMatch(html, /A new AI-focused product experience is currently in development/);
  assert.doesNotMatch(html, /Stay tuned/);
  assert.match(html, /tmind-thumbnail/);
  assert.match(html, /tmind-gradient/);
  assert.match(html, /haven-group-4\.png/);
  assert.match(html, /Haven desktop and tablet designer matching mockups/);
  assert.match(html, /Leafy/);
  assert.ok(html.indexOf("Leafy") < html.indexOf("Haven"));
  assert.doesNotMatch(html, /<span class="category-tag">UX Research<\/span>/);
  assert.doesNotMatch(html, /<span class="category-tag">Product Design<\/span>/);
  assert.doesNotMatch(html, /<span class="category-tag">Product Strategy<\/span>/);
  assert.doesNotMatch(html, /<span class="category-tag">High-Fidelity UI<\/span>/);
  assert.match(html, /Smart Plant Care/);
  assert.doesNotMatch(html, /<span class="category-tag">Mobile UX<\/span>/);
  assert.doesNotMatch(html, /<span class="category-tag">IoT<\/span>/);
  assert.doesNotMatch(html, /Music player|Warm On A Cold Night|HONNE/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/);
});

test("server-renders the redesigned about page", async () => {
  const response = await render("/about");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>About - Kristi Kim<\/title>/i);
  assert.match(html, /Hi there! I&#x27;m Kristi/);
  assert.match(html, /Human-Centered Design &amp; Engineering/);
  assert.match(html, /This is me :\)/);
  assert.match(html, /Playground/);
  assert.match(html, /Resume ↗/);
  assert.match(html, /136-JmSMxNNClZBRh74sGuPs39FnmjjCZ/);
  assert.match(html, /Kristi in Seattle/);
  assert.doesNotMatch(html, /My café adventures|Scent notes|My dogs|cafe day|tiny rituals|home team/);
  assert.doesNotMatch(html, /Postcards/);
  assert.doesNotMatch(html, /meet my dog, Hodoo|Hodoo, Kristi&#x27;s dog|\/videos\/hodoo\.mov/);
  assert.doesNotMatch(html, /Music I Design To|Music player|HONNE/);
});

test("server-renders the playground page", async () => {
  const response = await render("/playground");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Playground - Kristi Kim<\/title>/i);
  assert.match(html, /Archive \(2026\)/);
  assert.doesNotMatch(html, /<figcaption>|\[<!-- -->0[1-6]<!-- -->\]/);
  assert.doesNotMatch(
    html,
    /Fourth of July fireworks|First time in NY|UW alum|Apollo Bagels|A spring day with Hodoo|Fresh flowers/,
  );
  assert.match(html, /playground-dog\.jpg/);
  assert.match(html, /playground-flowers\.jpg/);
  assert.doesNotMatch(html, /playground-cherry-blossoms\.jpg|Cherry blossom season/);
});

test("server-renders the MindBridge case study", async () => {
  const response = await render("/work/tmind-ai");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /AI-Powered Supervisor Matching for Therapists-in-Training/);
  assert.doesNotMatch(html, /Resume ↗/);
  assert.doesNotMatch(html, /136-JmSMxNNClZBRh74sGuPs39FnmjjCZ/);
  assert.match(html, /Tmind AI/);
  assert.match(html, /Sponsor<\/dt><dd[^>]*>Tmind AI<\/dd>/);
  assert.match(html, /case-sidebar/);
  assert.match(html, /mindbridge-case-content/);
  assert.match(html, /centered-case-content/);
  assert.match(html, /tmind\.png/);
  assert.match(html, /mindbridge-research-board\.png/);
  assert.match(html, /User Interviews/);
  assert.match(html, /Participants/);
  assert.match(html, /4 Therapists-in-Training/);
  assert.match(html, /2 Licensed Supervisors/);
  assert.match(html, /What We Explored/);
  assert.match(html, /Key Discussion Topics/);
  assert.match(html, /Explainability/);
  assert.match(html, /Human Control/);
  assert.match(html, /Research Synthesis/);
  assert.match(html, /Design Opportunities/);
  assert.match(html, /Transparent Matching/);
  assert.match(html, /User Control/);
  assert.match(html, /Meaningful Fit/);
  assert.match(html, /make AI recommendations easier to understand/);
  assert.match(html, /Translating Research into Structure/);
  assert.doesNotMatch(html, /Finding #1/);
  assert.doesNotMatch(html, /Removed percentage scores/);
  assert.match(html, /Filtering Supervisors/);
  assert.match(html, /Request Supervision/);
  assert.match(html, /\/videos\/tmind-filter\.mp4/);
  assert.match(html, /\/videos\/tmind-request\.mp4/);
  assert.match(html, /tmind-filter-poster\.jpg/);
  assert.match(html, /tmind-request-poster\.jpg/);
  assert.match(html, /Advanced supervisor filter demo/);
  assert.match(html, /Supervisor request flow demo/);
  assert.match(html, /Design System/);
  assert.match(html, /mindbridge-design-system\.png/);
  assert.match(html, /Design system: typography, components, and color palette/);
  assert.doesNotMatch(html, /Filter Chips/);
  assert.match(html, /How might we help users confidently find the right supervisor/);
  assert.match(html, /six 30-minute interviews/);
  assert.match(html, /AI should support human decision making/);
});

test("server-renders the Haven case study", async () => {
  const response = await render("/work/Haven");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Haven - Kristi Kim<\/title>/i);
  assert.match(html, /Helping homeowners confidently find the right interior designer/);
  assert.match(html, /Protothon 2026/);
  assert.match(html, /24 Hours/);
  assert.match(html, /How might we help homeowners confidently evaluate/);
  assert.match(html, /moving from inspiration to renovation planning/);
  assert.match(html, /ca\.png/);
  assert.match(html, /Competitive feature analysis/);
  assert.match(html, /object-contain/);
  assert.match(html, /Budget Estimation/i);
  assert.match(html, /haven-protothon\.svg/);
  assert.match(html, /Protothon 2026 graphic illustration/);
  assert.match(html, /Final Haven prototype direction/);
  assert.match(html, /Prototype demos/);
  assert.match(html, /\/videos\/haven1\.mp4/);
  assert.match(html, /\/videos\/haven2\.mp4/);
  assert.match(html, /haven-demo-01-poster\.jpg/);
  assert.match(html, /haven-demo-02-poster\.jpg/);
  assert.match(html, /Haven prototype demo 01/);
  assert.match(html, /Haven prototype demo 02/);
  assert.match(html, /Design for decision-making, not discovery/);
});

test("server-renders the Leafy case study", async () => {
  const response = await render("/work/Leafy");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Leafy - Kristi Kim<\/title>/i);
  assert.match(html, /Turning real-time plant data into timely, personalized care/);
  assert.match(html, /Mobile UX/);
  assert.match(html, /How might we help plant owners understand/);
  assert.match(html, /Market Analysis/);
  assert.match(html, /Validate/);
  assert.match(html, /Indoor Plant Market Growth/);
  assert.match(html, /\$20\.68B/);
  assert.match(html, /Plant Care Challenges/);
  assert.match(html, /Initial Hypothesis/);
  assert.match(html, /Meet PlantPal/);
  assert.match(html, /Meet your personalized PlantPal, a friendly companion for everyday plant care/);
  assert.match(html, /\*AI Integration/);
  assert.match(html, /leafy-character-gif\.gif/);
  assert.match(html, /leafy-character-growing\.mov/);
  assert.match(html, /Plant care at a glance/);
  assert.match(html, /leafy-widget-system\.png/);
  assert.match(html, /Today&#x27;s Task widget demo/);
  assert.match(html, /\/videos\/leafy-widget\.mp4/);
  assert.match(html, /\/videos\/leafy-data\.mp4/);
  assert.match(html, /\/videos\/leafy-scan\.mp4/);
  assert.match(html, /\/videos\/leafy-scan2\.mp4/);
  assert.match(html, /leafy-widget-poster\.jpg/);
  assert.match(html, /AI Diagnosis/);
  assert.match(html, /Data should reduce decisions/);
});
