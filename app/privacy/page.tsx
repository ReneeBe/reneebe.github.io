import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Renee Berger's Chrome extensions and macOS apps: Theme Generator, Persist, TabSweep, and OnTrack.",
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
        Last updated: June 1, 2026
      </p>
      <p
        className="mb-14 text-base"
        style={{ color: "color-mix(in srgb, var(--foreground) 40%, transparent)" }}
      >
        This policy covers the Chrome extensions{" "}
        <strong style={{ color: "var(--foreground)" }}>Theme Generator</strong>,{" "}
        <strong style={{ color: "var(--foreground)" }}>Persist</strong>, and{" "}
        <strong style={{ color: "var(--foreground)" }}>TabSweep</strong>, and the macOS app{" "}
        <strong style={{ color: "var(--foreground)" }}>OnTrack</strong>, all developed by Renee Berger.
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
            title: "TabSweep",
            body: (
              <div className="flex flex-col gap-4">
                <p>
                  TabSweep is a side-panel extension that uses AI to triage your open Chrome tabs into
                  intent-based groups so you can close, focus, or natively group them in bulk.
                </p>
                <div>
                  <p className="mb-2 font-semibold" style={{ color: "var(--foreground)" }}>
                    What data is sent:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li>
                      When you click <em>Sweep these tabs</em>, the titles and URLs of your currently open
                      tabs are sent to a Cloudflare Worker (MagicLink), which calls Anthropic Claude to
                      group them by intent. No data is sent without this explicit action.
                    </li>
                    <li>
                      Page contents, browsing history, favicons, and per-tab metadata are never read or
                      transmitted. Internal Chrome pages (<code>chrome://</code>, <code>chrome-extension://</code>,
                      <code>devtools://</code>, <code>about:</code>, <code>view-source:</code>) are filtered out
                      before any request.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold" style={{ color: "var(--foreground)" }}>
                    What is stored:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li>
                      Nothing persistent. TabSweep does not save data between sessions, locally or on the
                      server. Tab titles and URLs are processed in real time and are not logged or retained.
                    </li>
                  </ul>
                </div>
                <p>
                  The hosted demo is rate-limited per visitor via a hashed IP address with no account or
                  signup. If you exceed the daily quota, the extension links you to the GitHub repo so you
                  can fork the project and plug in your own AI key.
                </p>
              </div>
            ),
          },
          {
            title: "OnTrack",
            body: (
              <div className="flex flex-col gap-4">
                <p>
                  OnTrack is a macOS menu bar app that watches your Google Calendar events and displays a small
                  custom banner on screen a few minutes before each event begins.
                </p>
                <div>
                  <p className="mb-2 font-semibold" style={{ color: "var(--foreground)" }}>
                    What data is sent:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li>
                      When you sign in, the app uses Google&apos;s OAuth 2.0 flow (PKCE) to request a read-only
                      access token for your Google Calendar. Authentication happens directly between your machine
                      and Google&apos;s servers — no data passes through any server controlled by Renee Berger.
                    </li>
                    <li>
                      While running, the app periodically calls the Google Calendar API to fetch your upcoming
                      events for the calendars you&apos;ve selected. These requests go directly from your machine
                      to Google. The app has no backend.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold" style={{ color: "var(--foreground)" }}>
                    What is stored locally:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li>
                      OAuth access and refresh tokens are stored in the macOS{" "}
                      <strong style={{ color: "var(--foreground)" }}>Keychain</strong>, scoped to the OnTrack
                      app bundle. Only OnTrack can read them.
                    </li>
                    <li>
                      Your connected account list (email, display name, which calendars to watch) is stored in
                      the app&apos;s local <code>UserDefaults</code> on your device. Your calendar events
                      themselves are never written to disk — they live only in memory.
                    </li>
                  </ul>
                </div>
                <p>
                  OnTrack does not collect analytics, display ads, or transmit your calendar data anywhere other
                  than between your machine and Google. You can disconnect any account or quit the app at any
                  time. Disconnecting an account removes its tokens from the Keychain and revokes the local
                  reference; you may also revoke OnTrack&apos;s access to your Google account at{" "}
                  <a
                    href="https://myaccount.google.com/permissions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                    style={{ color: "var(--foreground)" }}
                  >
                    myaccount.google.com/permissions
                  </a>
                  .
                </p>
              </div>
            ),
          },
          {
            title: "Permissions",
            body: (
              <div className="flex flex-col gap-4">
                <p>
                  <strong style={{ color: "var(--foreground)" }}>Theme Generator</strong> and{" "}
                  <strong style={{ color: "var(--foreground)" }}>Persist</strong> request:
                </p>
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
                <p>
                  <strong style={{ color: "var(--foreground)" }}>TabSweep</strong> requests:
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-1">
                  <li>
                    <strong style={{ color: "var(--foreground)" }}>sidePanel</strong> — to render the TabSweep UI
                    in Chrome&apos;s side panel.
                  </li>
                  <li>
                    <strong style={{ color: "var(--foreground)" }}>tabs</strong> — to read the titles and URLs of
                    your open tabs, focus a tab when you click it, and close tabs when you trigger a close action.
                  </li>
                  <li>
                    <strong style={{ color: "var(--foreground)" }}>tabGroups</strong> — to create native Chrome tab
                    groups when you click &ldquo;Group in Chrome.&rdquo;
                  </li>
                </ul>
                <p>
                  <strong style={{ color: "var(--foreground)" }}>OnTrack</strong> requests:
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-1">
                  <li>
                    <strong style={{ color: "var(--foreground)" }}>Google Calendar (read-only)</strong> — to fetch
                    your calendar list and upcoming events.
                  </li>
                  <li>
                    <strong style={{ color: "var(--foreground)" }}>Network (outbound)</strong> — to communicate
                    with Google&apos;s OAuth and Calendar API endpoints.
                  </li>
                  <li>
                    <strong style={{ color: "var(--foreground)" }}>Keychain (own items only)</strong> — to store
                    OAuth tokens securely.
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
                  Requests from the Chrome extensions are routed through Cloudflare Workers. No analytics services,
                  trackers, or advertising networks are used by any of these products.
                </p>
                <p>
                  When Theme Generator calls an AI API, the request is subject to the privacy policy of Google
                  (Gemini) or Anthropic (Claude), depending on which API key is used. TabSweep calls Anthropic
                  (Claude) via the MagicLink worker; that traffic is subject to Anthropic&apos;s privacy policy.
                </p>
                <p>
                  OnTrack communicates directly with Google&apos;s OAuth and Calendar API servers from your
                  machine. Traffic to and from Google is subject to{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                    style={{ color: "var(--foreground)" }}
                  >
                    Google&apos;s privacy policy
                  </a>
                  . No Renee-hosted server is involved.
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
