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
  assert.match(html, /<title>Kristi - UX Portfolio<\/title>/i);
  assert.match(html, /Kristi/);
  assert.match(html, /flower-mark/);
  assert.match(html, /marker-highlight/);
  assert.match(html, /Recent graduate from the University of Washington/);
  assert.match(html, /B\.S\. in Human Centered Design &amp; Engineering/);
  assert.match(html, /Hi there, I&#x27;m/);
  assert.doesNotMatch(html, /class="eyebrow">UX portfolio/);
  assert.match(html, /krisooti08@gmail\.com/);
  assert.doesNotMatch(html, /Selected product, mobile, and service design work/);
  assert.doesNotMatch(html, /hello@example\.com/);
  assert.match(html, /Work/);
  assert.match(html, /About/);
  assert.match(html, /Contact/);
  assert.doesNotMatch(html, /Feel free to contact me/);
  assert.doesNotMatch(html, /I shape quiet digital products/);
  assert.match(html, /I&#x27;m currently in Seattle/);
  assert.match(html, /MindBridge/);
  assert.match(html, /AI-powered platform that helps therapists-in-training/);
  assert.match(html, /Northline/);
  assert.match(html, /northline-card\.png/);
  assert.match(html, /Desktop mockup of the Haven designer discovery interface/);
  assert.match(html, /Fieldnotes/);
  assert.match(html, /UX Research/);
  assert.match(html, /Product Design/);
  assert.match(html, /Accessibility/);
  assert.match(html, /Healthcare/);
  assert.doesNotMatch(html, /Music player|Warm On A Cold Night|HONNE/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/);
});

test("server-renders the redesigned about page", async () => {
  const response = await render("/about");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>About - Kristi Kim<\/title>/i);
  assert.match(html, /Hi there! I&#x27;m Kristi/);
  assert.match(html, /Human Centered Design &amp; Engineering/);
  assert.match(html, /This is me :\)/);
  assert.match(html, /Kristi in Seattle/);
  assert.doesNotMatch(html, /meet my dog, Hodoo|Hodoo, Kristi&#x27;s dog|\/videos\/hodoo\.mov/);
  assert.doesNotMatch(html, /Music I Design To|Music player|HONNE/);
});

test("server-renders the MindBridge case study", async () => {
  const response = await render("/work/tmind-ai");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /MindBridge/);
  assert.match(html, /<dt>Sponsor<\/dt><dd>Tmind AI<\/dd>/);
  assert.match(html, /case-sidebar/);
  assert.match(html, /Large hero mockup/);
  assert.match(html, /mindbridge-matching-screen\.png/);
  assert.match(html, /MindBridge clinical supervisor matching recommendations screen/);
  assert.match(html, /mindbridge-research-board\.png/);
  assert.match(html, /mindbridge-ai-trust-note\.png/);
  assert.match(html, /mindbridge-filter\.png/);
  assert.match(html, /mindbridge-message-typed\.png/);
  assert.match(html, /mindbridge-supervisor-profile\.png/);
  assert.match(html, /How might we help users confidently find the right supervisor/);
  assert.match(html, /User interviews/i);
  assert.match(html, /Transparent AI recommendations with matching rationale/);
  assert.match(html, /transparency over automation/i);
});
