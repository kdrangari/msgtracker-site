/*
export default function Privacy() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: 24 }}>
      <h1>Privacy Policy</h1>
      <p>
        MsgTracker only tracks metadata, links, and attachment information.
        We do not read or modify email or message content, and we do not sell user data.
      </p>
      <p>Email: support@msgtracker.me</p>
    </main>
  );
}
*/

import Head from "next/head";
import styles from "../styles/privacy.module.css";

const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "data-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Information" },
  { id: "gmail", title: "Gmail Integration (Read-Only)" },
  { id: "whatsapp", title: "WhatsApp Business Platform" },
  { id: "sharing", title: "Data Sharing" },
  { id: "security", title: "Security" },
  { id: "retention", title: "Data Retention" },
  { id: "rights", title: "Your Rights" },
  { id: "contact", title: "Contact" }
];

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | MsgTracker</title>
        <meta
          name="description"
          content="MsgTracker Privacy Policy — how we collect, use, and protect data for Gmail read-only tracking and WhatsApp Business messaging."
        />
        <meta name="robots" content="index,follow" />
      </Head>

      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <a className={styles.brand} href="https://www.msgtracker.me">
              MsgTracker
            </a>
            <nav className={styles.nav}>
              <a href="/terms">Terms</a>
              <a href="/privacy" aria-current="page">
                Privacy
              </a>
            </nav>
          </div>
        </header>

        <main className={styles.container}>
          <div className={styles.grid}>
            {/* Main content */}
            <article className={styles.article}>
              <h1 className={styles.h1}>Privacy Policy</h1>
              <p className={styles.sub}>
                <span className={styles.muted}>Last modified:</span> July 2025
              </p>

              {/* Mobile TOC */}
              <details className={styles.tocMobile}>
                <summary className={styles.tocSummary}>Table of contents</summary>
                <ol className={styles.tocList}>
                  {SECTIONS.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`}>
                        {i + 1}. {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>

              {/* Sections */}
              <section id="introduction" className={styles.section}>
                <h2 className={styles.h2}>1. Introduction</h2>
                <p>
                  MsgTracker (“we”, “our”, “us”) provides outbound communication tracking and reporting.
                  This policy explains what information we collect, why we collect it, and how you can control it.
                </p>
              </section>

              <section id="data-we-collect" className={styles.section}>
                <h2 className={styles.h2}>2. Information We Collect</h2>
                <ul className={styles.ul}>
                  <li>
                    <strong>Account information:</strong> name, email, authentication details.
                  </li>
                  <li>
                    <strong>Usage & logs:</strong> basic diagnostics and security logs to operate the service reliably.
                  </li>
                  <li>
                    <strong>Integrations data:</strong> metadata required to generate your reports (see below).
                  </li>
                </ul>
              </section>

              <section id="how-we-use" className={styles.section}>
                <h2 className={styles.h2}>3. How We Use Information</h2>
                <ul className={styles.ul}>
                  <li>To provide tracking dashboards and reports.</li>
                  <li>To secure accounts and prevent abuse.</li>
                  <li>To support billing and subscriptions (payments handled by Stripe; we don’t store card numbers).</li>
                  <li>To provide customer support via support@msgtracker.me.</li>
                </ul>
              </section>

              <section id="gmail" className={styles.section}>
                <h2 className={styles.h2}>4. Gmail Integration (Read-Only)</h2>
                <p>
                  With your consent, MsgTracker accesses Gmail in <strong>read-only</strong> mode to track:
                </p>
                <ul className={styles.ul}>
                  <li><strong>Email metadata</strong> (recipient, subject, timestamp, message/thread identifiers).</li>
                  <li><strong>Links</strong> contained in emails you send (extracted for reporting).</li>
                  <li><strong>Attachment metadata</strong> (file name/type/size when available).</li>
                </ul>
                <div className={styles.callout}>
                  <strong>We do not:</strong> modify your mailbox, delete messages, or send emails on your behalf.
                </div>
              </section>

              <section id="whatsapp" className={styles.section}>
                <h2 className={styles.h2}>5. WhatsApp Business Platform</h2>
                <p>
                  If you use MsgTracker to send WhatsApp messages via the WhatsApp Business Platform, we record:
                </p>
                <ul className={styles.ul}>
                  <li><strong>Message metadata</strong> (recipient, timestamp, message id).</li>
                  <li><strong>Delivery status</strong> (sent/delivered/read when provided).</li>
                  <li><strong>Links and document/media metadata</strong> (file name/type/size when available).</li>
                </ul>
              </section>

              <section id="sharing" className={styles.section}>
                <h2 className={styles.h2}>6. Data Sharing</h2>
                <p>We share data only with service providers needed to operate the product, including:</p>
                <ul className={styles.ul}>
                  <li>Google (Gmail API) for authorized read-only access.</li>
                  <li>Meta (WhatsApp Business Platform) for message delivery and status events.</li>
                  <li>Stripe for subscription billing.</li>
                  <li>Hosting and infrastructure providers (for uptime, logging, and security).</li>
                </ul>
                <p>We do not sell your data.</p>
              </section>

              <section id="security" className={styles.section}>
                <h2 className={styles.h2}>7. Security</h2>
                <ul className={styles.ul}>
                  <li>HTTPS encryption in transit.</li>
                  <li>Access controls and monitoring.</li>
                  <li>Secure storage of integration tokens.</li>
                </ul>
              </section>

              <section id="retention" className={styles.section}>
                <h2 className={styles.h2}>8. Data Retention</h2>
                <p>
                  We retain your data only as long as needed to provide the service and comply with legal obligations.
                  You can disconnect integrations and request deletion at any time.
                </p>
              </section>

              <section id="rights" className={styles.section}>
                <h2 className={styles.h2}>9. Your Rights</h2>
                <p>
                  Depending on your location, you may request access, correction, export, or deletion of your data.
                </p>
              </section>

              <section id="contact" className={styles.section}>
                <h2 className={styles.h2}>10. Contact</h2>
                <p>
                  Email: <a className={styles.link} href="mailto:support@msgtracker.me">support@msgtracker.me</a>
                </p>
              </section>

              <footer className={styles.footer}>
                <p className={styles.muted}>
                  © {new Date().getFullYear()} MsgTracker. All rights reserved.
                </p>
              </footer>
            </article>

            {/* Desktop sticky TOC */}
            <aside className={styles.aside}>
              <div className={styles.tocCard}>
                <div className={styles.tocTitle}>Table of contents</div>
                <ol className={styles.tocList}>
                  {SECTIONS.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`}>
                        {i + 1}. {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
