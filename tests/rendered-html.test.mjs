import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
  assert.match(html, /intro-highlight/);
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
  assert.match(html, /Tmind AI/);
  assert.match(html, /A minimal AI chat experience designed for clearer thinking/);
  assert.match(html, /Northline/);
  assert.match(html, /Fieldnotes/);
  assert.match(html, /UX Research/);
  assert.match(html, /Product Design/);
  assert.match(html, /Accessibility/);
  assert.match(html, /Healthcare/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/);
});
