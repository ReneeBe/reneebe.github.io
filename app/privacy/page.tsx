import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Renee Berger's Chrome extensions: Theme Generator and Persist.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-4 flex items-center gap-4">
        <p
          className="text-xs font-mono uppercase tracking-widest"
          style={{ color: "color-mix(in srgb, var(--foreground) 30%, transparent)" }}
        >
          privacy policy
        </p>
        <div className="h-px flex-1" style={{ background: "color-mix(in srgb, var(--foreground) 5%, transparent)" }} />
      </div>

      <h1
        className="mb-4 text-5xl font-black tracking-tight sm:text-6xl"
        style={{ fontFamily: "var(--font-heading)", color: "var(--foreground)" }}
      >
        Privacy
        <br />
        <span className="gradient-text">Policy.</span>
      </h1>

      <p
        className="mb-2 text-sm"
        style={{ color: "color-mix(in srgb, var(--foreground) 35%, transparent)" }}
      >
        Last updated: March 23, 2025
      </p>
      <p
        className="mb-14 text-base"
        style={{ color: "color-mix(in srgb, var(--foreground) 40%, transparent)" }}
      >
        This policy covers the Chrome extensions{" "}
        <strong style={{ color: "var(--foreground)" }}>Theme Generator</strong> and{" "}
        <strong style={{ color: "var(--foreground)" }}>Persist</strong>, developed by Renee Berger.
      </p>

      <div className="flex flex-col gap-10">
        {[
          {
            title: "Overview",
            body: (
              <p>
                Both extensions are designed with privacy in mind. Neither extension collects personal information,
                displays ads, or sells any data to third parties. Data flows only occur when you explicitly trigger
                an action — generating a theme or capturing a page.
              </p>
            ),
          },
          {
            title: "Theme Generator",
            body: (
              <div className="flex flex-col gap-4">
                <p>
                  Theme Generator lets you describe a visual style in plain text and injects an AI-generated CSS
                  theme into any webpage.
                </p>
                <div>
                  <p className="mb-2 font-semibold" style={{ color: "var(--foreground)" }}>
                    What data is sent:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li>
                      The theme description you type is sent to a Cloudflare Worker, which calls an AI API
                      (Google Gemini or Anthropic Claude) to generate CSS variables.
                    </li>
                    <li>
                      If you provide your own Gemini or Anthropic API key in the settings, that key is included
                      in the request to the worker so the AI call is made on your behalf.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold" style={{ color: "var(--foreground)" }}>
                    What is stored locally:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li>
                      Any API keys you enter are stored only in <code>chrome.storage.local</code> on your device.
                      They are never logged or retained by the server.
                    </li>
                    <li>
                      Saved themes are stored locally in <code>chrome.storage.local</code> and never leave your
                      device.
                    </li>
                  </ul>
                </div>
                <p>
                  Theme descriptions sent to the worker are processed in real time and are not stored or logged.
                  The extension&apos;s content script runs on all pages solely to receive theme injection
                  instructions from the popup — it does not read or transmit page content.
                </p>
              </div>
            ),
          },
          {
            title: "Persist",
            body: (
              <div className="flex flex-col gap-4">
                <p>
                  Persist lets you capture a page&apos;s URL, title, and visible text content and store it so
                  your AI agents can access it.
                </p>
                <div>
                  <p className="mb-2 font-semibold" style={{ color: "var(--foreground)" }}>
                    What data is sent:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li>
                      When you click <em>Capture This Page</em>, the current page&apos;s URL, title, and visible
                      body text are sent to a Cloudflare Worker. No data is sent without this explicit action.
                    </li>
                    <li>
                      Your write token is included with each request to authenticate you with the server.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold" style={{ color: "var(--foreground)" }}>
                    What is stored locally:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li>
                      Your write token, read token, and optional custom server URL are stored in{" "}
                      <code>chrome.storage.local</code> on your device only.
                    </li>
                  </ul>
                </div>
                <p>
                  Captured page content is stored on the Cloudflare Worker and accessible only via your tokens.
                  You can delete any captured item at any time from within the extension. Items marked as{" "}
                  <em>Private</em> are not shared externally.
                </p>
              </div>
            ),
          },
          {
            title: "Permissions",
            body: (
              <div className="flex flex-col gap-4">
                <p>Both extensions request the following Chrome permissions:</p>
                <ul className="list-disc pl-5 flex flex-col gap-1">
                  <li>
                    <strong style={{ color: "var(--foreground)" }}>activeTab</strong> — to access the currently
                    active tab when you trigger an action.
                  </li>
                  <li>
                    <strong style={{ color: "var(--foreground)" }}>storage</strong> — to save your settings and
                    data locally on your device.
                  </li>
                  <li>
                    <strong style={{ color: "var(--foreground)" }}>scripting</strong> — to inject theme CSS into
                    pages (Theme Generator) or to read page content on capture (Persist).
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: "Third-party services",
            body: (
              <div className="flex flex-col gap-4">
                <p>
                  Requests from both extensions are routed through Cloudflare Workers. No analytics services,
                  trackers, or advertising networks are used.
                </p>
                <p>
                  When Theme Generator calls an AI API, the request is subject to the privacy policy of Google
                  (Gemini) or Anthropic (Claude), depending on which API key is used.
                </p>
              </div>
            ),
          },
          {
            title: "Contact",
            body: (
              <p>
                Questions or concerns? Email{" "}
                <a
                  href="mailto:reneelberger@gmail.com"
                  className="underline underline-offset-4"
                  style={{ color: "var(--foreground)" }}
                >
                  reneelberger@gmail.com
                </a>
                .
              </p>
            ),
          },
        ].map(({ title, body }) => (
          <section key={title}>
            <h2
              className="mb-3 text-xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              {title}
            </h2>
            <div
              className="text-base leading-relaxed"
              style={{ color: "color-mix(in srgb, var(--foreground) 55%, transparent)" }}
            >
              {body}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
