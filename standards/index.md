---
layout: default
title: "DraftVerify Standard v1.0 — Non-Alcoholic Draft Systems"
permalink: /standards/
description: "The official DraftVerify Standard v1.0 — a combined physical and digital framework for identifying, separating, and verifying non-alcoholic draft systems from keg to faucet."
---

<style>
  /* Simple, calm Standards page */

  .std-hero{
    max-width:880px;
    margin:0 auto 40px;
    padding:32px 24px 30px;
    border-radius:24px;
    background:linear-gradient(145deg,#0d1b2a 0%,#020617 70%);
    color:#e5e7eb;
    box-shadow:0 26px 70px rgba(15,23,42,.55);
  }
  .std-hero-eyebrow{
    font-size:0.78rem;
    letter-spacing:.08em;
    text-transform:uppercase;
    opacity:.75;
    margin-bottom:6px;
  }
  .std-hero h1{
    margin:0 0 10px;
    font-size:2rem;
    color:#f9fafb;
  }
  .std-hero p.lead{
    margin:0 0 14px;
    font-size:0.98rem;
    line-height:1.7;
    color:#e5e7eb;
  }
  .std-hero ul{
    margin:0 0 16px 18px;
    padding:0;
    font-size:0.9rem;
    color:#e5e7eb;
  }
  .std-hero ul li{
    margin-bottom:4px;
  }
  .std-hero-note{
    margin-top:10px;
    font-size:0.82rem;
    color:#cbd5f5;
  }

  .std-section-intro{
    max-width:760px;
    margin:0 auto 10px;
    text-align:center;
    font-size:0.95rem;
    color:#4b5563;
  }

  .std-series-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:22px;
    margin-top:22px;
  }
  .std-series-card{
    background:#ffffff;
    border-radius:16px;
    padding:20px 18px 18px;
    box-shadow:0 10px 30px rgba(15,23,42,.06);
  }
  .std-series-label{
    font-size:0.78rem;
    text-transform:uppercase;
    letter-spacing:.08em;
    color:#6b7280;
    margin-bottom:4px;
  }
  .std-series-card h3{
    margin:0 0 6px;
    font-size:1.08rem;
    color:#111827;
  }
  .std-series-card p{
    margin:0 0 8px;
    font-size:0.9rem;
    color:#4b5563;
  }
  .std-series-card ul{
    margin:0;
    padding-left:16px;
    font-size:0.86rem;
    color:#4b5563;
  }
  .std-series-card ul li{
    margin-bottom:3px;
  }

  .std-index details{
    max-width:860px;
    margin:28px auto 0;
    font-size:0.9rem;
  }
  .std-index summary{
    cursor:pointer;
    font-weight:600;
    list-style:none;
  }
  .std-index summary::-webkit-details-marker{display:none;}
  .std-index-list{
    margin-top:10px;
    padding-left:18px;
    columns:2;
    column-gap:26px;
  }
  .std-index-list li{
    margin-bottom:4px;
    break-inside:avoid;
  }

  @media (max-width:768px){
    .std-hero{
      padding:24px 18px 22px;
      border-radius:18px;
    }
    .std-hero h1{font-size:1.7rem;}
    .std-index-list{columns:1;}
  }
</style>

<!-- HERO -->
<section class="section">
  <div class="container">
    <div class="std-hero">
      <div class="std-hero-eyebrow">
        DraftVerify Standard v1.0 · NA Draft Systems · F-1–F-40 Library
      </div>

      <h1>DraftVerify Standard v1.0</h1>

      <p class="lead">
        The global standard for <strong>non-alcoholic draft integrity</strong> — a combined
        <strong>physical identification system</strong> and <strong>digital traceability framework</strong>
        that keeps NA draft lines clearly marked, separated, and verifiable from
        <strong>keg → line → faucet</strong>.
      </p>

      <ul>
        <li>Specifies how NA draft must be identified, separated, and documented alongside alcoholic lines.</li>
        <li>Backed by the DraftVerify Registry for tags, taps, and verification events.</li>
        <li>Maintained as the F-1–F-40 DraftVerify Standards Library.</li>
      </ul>

      <a class="btn gold" href="#how-it-works">See How the Standard Works</a>

      <div class="std-hero-note">
        Formal PDFs are available in English and German. Web pages below mirror the same v1.0 content. 
        Where wording differs, the PDF text is canonical.
      </div>
    </div>
  </div>
</section>

<!-- DOWNLOADS -->
<section class="section-sm" id="downloads">
  <div class="container center">
    <h2 class="h2">Download the Formal PDFs</h2>
    <p class="std-section-intro">
      Use these for contracts, legal review, or internal policies. They contain the canonical wording of
      DraftVerify Standard v1.0.
    </p>

    <p>
      <a class="btn primary" href="{{ '/standard-en.pdf' | relative_url }}">English PDF</a>
      <a class="btn ghost" href="{{ '/standard-de.pdf' | relative_url }}" style="margin-left:8px;">German PDF</a>
    </p>
  </div>
</section>

<!-- WHAT IT DOES -->
<section class="section" id="how-it-works">
  <div class="container">
    <h2 class="h2 center">What the Standard Covers</h2>
    <p class="std-section-intro">
      DraftVerify takes a simple obligation — <strong>if a tap is sold as non-alcoholic, it must always be
      non-alcoholic</strong> — and turns it into enforceable requirements for hardware, records, and checks
      across the draft system.
    </p>

    <div class="grid cols-3" style="margin-top:22px">
      <div class="card">
        <h3>Physical Identification</h3>
        <p>
          Kegs, couplers, lines, and faucets used for NA products are clearly marked so anyone can follow
          the NA path from cooler to tap without guesswork.
        </p>
      </div>
      <div class="card">
        <h3>Digital Activation</h3>
        <p>
          Each NA connection point receives a serialized DraftVerify tag and is recorded in the DraftVerify
          Registry as part of a specific keg → line → faucet path.
        </p>
      </div>
      <div class="card">
        <h3>Ongoing Verification</h3>
        <p>
          Simple checklists and logs keep NA lines separated from alcoholic lines over time, with records
          available for audits, complaints, incident reviews, or insurance.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- LIBRARY OVERVIEW -->
<section class="section" id="library" style="background:#f7f9fc;">
  <div class="container">
    <h2 class="h2 center">The F-Series Library at a Glance</h2>
    <p class="std-section-intro">
      The standard is published as <strong>F-1–F-40</strong>. Most stakeholders only need the series that
      matches their role — the rest is available when deeper technical detail is required.
    </p>

    <div class="std-series-grid">

      <div class="std-series-card">
        <div class="std-series-label">F-1–F-5 · Foundation</div>
        <h3>What DraftVerify Is &amp; Why It Exists</h3>
        <p>Core standard, definitions, risk profile, and legal / compliance basis for NA draft separation.</p>
        <ul>
          <li><a href="/docs/standard-v1/">F-1 DraftVerify Standard v1.0</a></li>
          <li><a href="/docs/definitions/">F-2 Definitions &amp; Scope</a></li>
          <li><a href="/docs/risk-profile/">F-4 NA Draft Risk Profile</a></li>
        </ul>
      </div>

      <div class="std-series-card">
        <div class="std-series-label">F-6–F-10 · Identification</div>
        <h3>What NA Looks Like on Hardware</h3>
        <p>How to physically mark kegs, couplers, lines, and faucets for NA use.</p>
        <ul>
          <li><a href="/docs/keg-id/">F-6 Keg Identification</a></li>
          <li><a href="/docs/coupler-tags/">F-7 Coupler Tags</a></li>
          <li><a href="/docs/line-id/">F-8 Line Identification</a></li>
        </ul>
      </div>

      <div class="std-series-card">
        <div class="std-series-label">F-11–F-17 · Breweries &amp; Distributors</div>
        <h3>Preparing &amp; Moving NA Kegs</h3>
        <p>Tagging, activation, records, and chain-of-custody requirements.</p>
        <ul>
          <li><a href="/docs/brewery-implementation/">F-11 Brewery Implementation Guide</a></li>
          <li><a href="/docs/brewery-serialization/">F-12 Serialization SOP</a></li>
          <li><a href="/docs/distributor-protocol/">F-15 Distributor Protocol</a></li>
        </ul>
      </div>

      <div class="std-series-card">
        <div class="std-series-label">F-18–F-23 · Venues</div>
        <h3>Running NA Draft Day-to-Day</h3>
        <p>Setup, daily checks, cleaning, change logs, and incident response.</p>
        <ul>
          <li><a href="/docs/venue-setup/">F-18 Venue Setup</a></li>
          <li><a href="/docs/venue-checklist/">F-19 Verification Checklist</a></li>
          <li><a href="/docs/incident-response/">F-22 Incident Response</a></li>
        </ul>
      </div>

      <div class="std-series-card">
        <div class="std-series-label">F-24–F-31 · System &amp; Digital</div>
        <h3>System Design &amp; Registry</h3>
        <p>Tower sharing, gas management, and the DraftVerify Registry specification.</p>
        <ul>
          <li><a href="/docs/system-design/">F-24 System Design</a></li>
          <li><a href="/docs/tower-sharing/">F-25 Tower Sharing</a></li>
          <li><a href="/docs/registry-spec/">F-28 Registry Spec</a></li>
        </ul>
      </div>

      <div class="std-series-card">
        <div class="std-series-label">F-32–F-40 · Programs &amp; Governance</div>
        <h3>Marks, Audits &amp; Long-Term Care</h3>
        <p>Use of mark, audits, multi-venue programs, education, and governance.</p>
        <ul>
          <li><a href="/docs/certification-policy/">F-32 Certification Policy</a></li>
          <li><a href="/docs/compliance-audit/">F-33 Compliance Audit</a></li>
          <li><a href="/docs/governance-policy/">F-40 Governance Policy</a></li>
        </ul>
      </div>

    </div>

    <!-- Full index kept collapsed so it doesn’t clutter -->
    <div class="std-index">
      <details>
        <summary>View full F-1–F-40 document index (v1.0)</summary>
        <ol class="std-index-list">
          <li><a href="/docs/standard-v1/">F-1 — DraftVerify Standard v1.0</a></li>
          <li><a href="/docs/definitions/">F-2 — Definitions, Scope &amp; Terminology</a></li>
          <li><a href="/docs/identity-architecture/">F-3 — Identity Architecture Overview</a></li>
          <li><a href="/docs/risk-profile/">F-4 — NA Draft Risk Profile &amp; Rationale</a></li>
          <li><a href="/docs/legal-basis/">F-5 — Legal &amp; Compliance Basis for NA Separation</a></li>
          <li><a href="/docs/keg-id/">F-6 — Keg Identification Standard</a></li>
          <li><a href="/docs/coupler-tags/">F-7 — Coupler Tag Standard</a></li>
          <li><a href="/docs/line-id/">F-8 — Beer Line Identification Standard</a></li>
          <li><a href="/docs/faucet-id/">F-9 — Faucet Identification Standard</a></li>
          <li><a href="/docs/visual-lexicon/">F-10 — Visual Lexicon: Colors, Shapes, Symbols</a></li>
          <li><a href="/docs/brewery-implementation/">F-11 — Brewery Implementation Guide</a></li>
          <li><a href="/docs/brewery-serialization/">F-12 — Brewery NFC Tag Serialization SOP</a></li>
          <li><a href="/docs/brewery-activation/">F-13 — Brewery Activation Workflow</a></li>
          <li><a href="/docs/brewery-records/">F-14 — Brewery Documentation &amp; Records</a></li>
          <li><a href="/docs/distributor-protocol/">F-15 — Distributor Protocol</a></li>
          <li><a href="/docs/distributor-transport/">F-16 — Distributor Transport &amp; Storage Requirements</a></li>
          <li><a href="/docs/distributor-logs/">F-17 — Distributor Verification &amp; Reconciliation Logs</a></li>
          <li><a href="/docs/venue-setup/">F-18 — Venue Setup &amp; Verification Protocol</a></li>
          <li><a href="/docs/venue-checklist/">F-19 — Daily / Weekly Verification Checklist</a></li>
          <li><a href="/docs/change-log/">F-20 — Change Log SOP</a></li>
          <li><a href="/docs/cleaning-log/">F-21 — Cleaning Log SOP</a></li>
          <li><a href="/docs/incident-response/">F-22 — Incident Response &amp; Mis-Serve Procedure</a></li>
          <li><a href="/docs/staff-training/">F-23 — NA Draft Staff Training Manual</a></li>
          <li><a href="/docs/system-design/">F-24 — System Design Requirements</a></li>
          <li><a href="/docs/tower-sharing/">F-25 — Tower Sharing Standards</a></li>
          <li><a href="/docs/gas-management/">F-26 — Gas Management &amp; Pressure Safety</a></li>
          <li><a href="/docs/system-modification/">F-27 — System Modification Protocol</a></li>
          <li><a href="/docs/registry-spec/">F-28 — DraftVerify Registry Specification</a></li>
          <li><a href="/docs/tag-activation/">F-29 — Tag Activation Rules</a></li>
          <li><a href="/docs/verification-events/">F-30 — Verification Event Specification</a></li>
          <li><a href="/docs/audit-log/">F-31 — Audit Log &amp; Traceability Framework</a></li>
          <li><a href="/docs/certification-policy/">F-32 — Use of Mark &amp; Certification Policy</a></li>
          <li><a href="/docs/compliance-audit/">F-33 — Compliance Audit Framework</a></li>
          <li><a href="/docs/multi-venue/">F-34 — Multi-Venue Program Requirements</a></li>
          <li><a href="/docs/contamination-report/">F-35 — NA Draft Safety &amp; Contamination Report</a></li>
          <li><a href="/docs/failure-modes/">F-36 — NA Draft System Failure Modes Guide</a></li>
          <li><a href="/docs/audit-handbook/">F-37 — Field Audit Handbook</a></li>
          <li><a href="/docs/education-handbook/">F-38 — Distributor &amp; Venue Education Handbook</a></li>
          <li><a href="/docs/product-switching/">F-39 — Product Switching &amp; Line Reuse Protocol</a></li>
          <li><a href="/docs/governance-policy/">F-40 — Revision &amp; Governance Policy</a></li>
        </ol>
      </details>
    </div>

  </div>
</section>

<!-- CTA -->
<section class="section-sm">
  <div class="container">
    <div class="cta-band">
      <div>
        <div class="kicker">Put the Standard to Work</div>
        <h3 style="margin:.3rem 0 0;">Implement DraftVerify Standard v1.0 across breweries, routes, and venues.</h3>
      </div>
      <div>
        <a class="btn primary" href="{{ '/onboarding/' | relative_url }}">Start Onboarding</a>
        <a class="btn ghost" href="{{ '/pricing/' | relative_url }}" style="margin-left:8px;">View Pricing</a>
      </div>
    </div>
  </div>
</section>
