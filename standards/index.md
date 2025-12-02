---
layout: default
title: "DraftVerify Standard v1.0 — Non-Alcoholic Draft Systems"
description: "The official DraftVerify Standard v1.0 — a combined physical and digital framework for identifying, separating, and verifying non-alcoholic draft systems from keg to faucet."
---

<style>
  /* Local tweaks just for this page */

  /* HERO */
  .hero-standard-card{
    max-width:980px;
    margin:0 auto 40px;
    padding:32px 32px 26px;
    border-radius:20px;
    background:radial-gradient(circle at top left,#0d3b66 0,#020617 55%,#020617 100%);
    color:#e5e7eb;
    box-shadow:0 26px 70px rgba(15,23,42,.55);
    position:relative;
    overflow:hidden;
  }
  .hero-standard-card::after{
    content:"";
    position:absolute;
    right:-80px;
    bottom:-80px;
    width:260px;
    height:260px;
    background:radial-gradient(circle,#22c55e 0,transparent 60%);
    opacity:.18;
    pointer-events:none;
  }
  .hero-standard-meta{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    font-size:0.8rem;
    color:#e5e7eb;
    opacity:.85;
    margin-bottom:10px;
  }
  .hero-standard-meta span{
    display:inline-flex;
    align-items:center;
    gap:6px;
  }
  .hero-standard-tags{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    margin:12px 0 18px;
    font-size:0.8rem;
  }
  .hero-standard-tags .pill{
    background:rgba(15,23,42,.85);
    border:1px solid rgba(148,163,184,.5);
    color:#e5e7eb;
  }
  .hero-standard-ctas{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    margin-top:8px;
    position:relative;
    z-index:1;
  }
  .hero-standard-ctas .btn-primary-local{
    background:#facc15;
    color:#111827;
    border:none;
  }
  .hero-standard-ctas .btn-secondary-local{
    background:rgba(15,23,42,.85);
    border:1px solid rgba(148,163,184,.8);
    color:#e5e7eb;
    font-weight:500;
  }
  .hero-standard-subcopy{
    font-size:0.8rem;
    color:#e5e7eb;
    opacity:.8;
    margin-top:14px;
  }

  /* Quick nav */
  .standard-quick-nav{
    max-width:980px;
    margin:0 auto 40px;
    padding:12px 20px;
    border-radius:14px;
  }
  .standard-quick-nav-header{
    font-size:0.8rem;
    text-transform:uppercase;
    letter-spacing:.08em;
    color:#6b7280;
    margin-bottom:8px;
  }
  .standard-quick-nav-links{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
  }

  /* Series cards */
  .series-card .chip{
    display:inline-block;
    padding:4px 10px;
    border-radius:999px;
    background:#eef2ff;
    color:#3730a3;
    font-size:0.75rem;
    font-weight:500;
    margin-bottom:6px;
  }
  .series-card p.small-links{
    font-size:0.82rem;
    color:#6b7280;
    margin-top:10px;
  }
  .series-card p.small-links a{
    text-decoration:underline;
    text-underline-offset:2px;
  }

  /* Index */
  .doc-index{
    max-width:900px;
    margin:32px auto 0;
    text-align:left;
  }
  .doc-index summary{
    cursor:pointer;
    font-weight:600;
    font-size:0.95rem;
  }
  .doc-index-card{
    margin-top:12px;
    padding:16px 18px;
    border-radius:14px;
    background:#ffffff;
    border:1px solid #e5e7eb;
  }
  .doc-index-list{
    padding-left:18px;
    margin-top:12px;
    columns:2;
    column-gap:32px;
  }
  .doc-index-list li{
    font-size:0.9rem;
    margin-bottom:4px;
    break-inside:avoid;
  }

  /* Local CTA tweaks */
  .cta-band .btn-ghost-local{
    border-radius:999px;
    border:1px solid #d1d5db;
    background:#ffffff;
    color:#111827;
  }

  @media (max-width:768px){
    .hero-standard-card{
      padding:24px 20px 22px;
      margin-bottom:28px;
    }
    .doc-index-list{columns:1;}
  }
</style>

<!-- HERO -->
<section class="hero hero-simple">
  <div class="container">
    <div class="hero-standard-card reveal">
      <div class="hero-standard-meta">
        <span>DraftVerify Standard v1.0</span>
        <span>•</span>
        <span>NA Draft Systems</span>
        <span>•</span>
        <span>F-1–F-40 Library</span>
      </div>

      <h1 style="margin:0 0 10px;color:#f9fafb;">
        DraftVerify Standard v1.0
      </h1>

      <p style="max-width:720px;margin:0 0 12px;font-size:0.98rem;line-height:1.7;color:#e5e7eb;">
        DraftVerify is the global standard for non-alcoholic draft integrity — a combined 
        <strong>physical identification system</strong> and <strong>digital traceability layer</strong> that keeps 
        NA draft lines clearly marked, separated, and verifiable from <strong>keg → line → faucet</strong>.
      </p>

      <div class="hero-standard-tags">
        <span class="pill">NA Safety &amp; Mis-serve Prevention</span>
        <span class="pill">NFC Identity &amp; Registry</span>
        <span class="pill">F-Series Standards Library</span>
      </div>

      <div class="hero-standard-ctas">
        <a class="btn btn-primary-local" href="#standard-overview">
          See How the Standard Works
        </a>
        <a class="btn btn-secondary-local" href="#standards-library">
          Browse the F-Series Library
        </a>
      </div>

      <p class="hero-standard-subcopy">
        Formal PDFs are available in English and German. Web documents below reflect the same v1.0 content.
      </p>
    </div>
  </div>
</section>

<!-- QUICK NAV -->
<section class="section-sm">
  <div class="container">
    <div class="card standard-quick-nav">
      <div class="standard-quick-nav-header">Jump to</div>
      <div class="standard-quick-nav-links">
        <a href="#downloads" class="pill">Downloads (PDF)</a>
        <a href="#standards-library" class="pill">Standards Library</a>
        <a href="#standard-overview" class="pill">What It Is</a>
        <a href="#how-it-works" class="pill">How It Works</a>
        <a href="#technology" class="pill">Digital Layer</a>
        <a href="#core-requirements" class="pill">Core Requirements</a>
        <a href="#applications" class="pill">Where It Applies</a>
        <a href="#audiences" class="pill">Who It’s For</a>
      </div>
    </div>
  </div>
</section>

<!-- DOWNLOADS -->
<section class="section center" id="downloads">
  <div class="container">
    <div class="kicker">Downloads</div>
    <h2 class="h2">Official DraftVerify Standard v1.0 PDFs</h2>
    <p style="max-width:760px;margin:0 auto">
      Use the PDF versions for contracts, internal standards binders, and formal reference. 
      The English and German editions carry the same version, clauses, and numbering.
    </p>

    <p style="margin-top:18px">
      <a class="btn gold" href="{{ '/standard-en.pdf' | relative_url }}">Download English PDF</a>
      <a class="btn gold" href="{{ '/standard-de.pdf' | relative_url }}" style="margin-left:10px">Download German PDF</a>
    </p>

    <p style="margin-top:14px;font-size:0.9rem;color:#666;">
      Having trouble? Right-click → “Save link as…”, or open directly:<br>
      <a href="{{ '/standard-en.pdf' | relative_url }}">/standard-en.pdf</a> · 
      <a href="{{ '/standard-de.pdf' | relative_url }}">/standard-de.pdf</a>
    </p>
  </div>
</section>

<!-- STANDARDS LIBRARY -->
<section class="section" id="standards-library" style="background:#f7f9fc;">
  <div class="container">
    <div class="kicker center">DraftVerify Standards Library</div>
    <h2 class="h2 center">A Structured Library, Not a Wall of Links</h2>

    <p style="max-width:820px;margin:0 auto 16px;text-align:center;">
      The DraftVerify Standards Library is a structured body of work that defines the full physical, digital,
      operational, legal, and verification framework for non-alcoholic draft.  
      Browse by series below for a quick mental model, then open the specific document you need.
    </p>

    <p style="max-width:820px;margin:0 auto 32px;text-align:center;font-size:0.9rem;color:#666;">
      Each card highlights a <strong>series</strong> and a few <strong>key documents</strong>.  
      A full F-1–F-40 index is available at the bottom of this section.
    </p>

    <!-- BROWSE BY SERIES -->
    <div class="grid cols-3" style="max-width:1080px;margin:0 auto;gap:24px;align-items:stretch;">

      <!-- FOUNDATION SERIES -->
      <div class="card series-card">
        <div class="chip">Foundation · F-1–F-5</div>
        <h3>Core Standard &amp; Rationale</h3>
        <p>
          The big-picture view: what DraftVerify is, why NA draft needs its own standard, 
          and the shared language used across every other document.
        </p>
        <p class="small-links">
          Key docs:<br>
          <a href="/docs/standard-v1/">F-1 Standard v1.0</a> ·
          <a href="/docs/definitions/">F-2 Definitions</a> ·
          <a href="/docs/identity-architecture/">F-3 Identity Architecture</a> ·
          <a href="/docs/risk-profile/">F-4 Risk Profile</a> ·
          <a href="/docs/legal-basis/">F-5 Legal Basis</a>
        </p>
      </div>

      <!-- IDENTIFICATION SERIES -->
      <div class="card series-card">
        <div class="chip">Identification · F-6–F-10</div>
        <h3>What NA Looks Like on Hardware</h3>
        <p>
          How to physically mark NA kegs, couplers, lines, and faucets so anyone can follow the NA path 
          in seconds — plus the visual lexicon behind the system.
        </p>
        <p class="small-links">
          Key docs:<br>
          <a href="/docs/keg-id/">F-6 Keg ID</a> ·
          <a href="/docs/coupler-tags/">F-7 Coupler Tags</a> ·
          <a href="/docs/line-id/">F-8 Line ID</a> ·
          <a href="/docs/faucet-id/">F-9 Faucet ID</a> ·
          <a href="/docs/visual-lexicon/">F-10 Visual Lexicon</a>
        </p>
      </div>

      <!-- BREWERY SERIES -->
      <div class="card series-card">
        <div class="chip">Breweries · F-11–F-14</div>
        <h3>Preparing &amp; Shipping NA Kegs</h3>
        <p>
          Brewery-side playbooks for tagging, encoding, activating, and documenting NA draft before 
          it ever leaves the facility.
        </p>
        <p class="small-links">
          Key docs:<br>
          <a href="/docs/brewery-implementation/">F-11 Implementation Guide</a> ·
          <a href="/docs/brewery-serialization/">F-12 Serialization SOP</a> ·
          <a href="/docs/brewery-activation/">F-13 Activation Workflow</a> ·
          <a href="/docs/brewery-records/">F-14 Records</a>
        </p>
      </div>

      <!-- DISTRIBUTOR SERIES -->
      <div class="card series-card">
        <div class="chip">Distributors · F-15–F-17</div>
        <h3>Chain-of-Custody &amp; Handling</h3>
        <p>
          How distributors keep NA separated, documented, and traceable through warehouses, trucks,
          and transfers between partners.
        </p>
        <p class="small-links">
          Key docs:<br>
          <a href="/docs/distributor-protocol/">F-15 Distributor Protocol</a> ·
          <a href="/docs/distributor-transport/">F-16 Transport &amp; Storage</a> ·
          <a href="/docs/distributor-logs/">F-17 Verification Logs</a>
        </p>
      </div>

      <!-- VENUE SERIES -->
      <div class="card series-card">
        <div class="chip">Venues · F-18–F-23</div>
        <h3>Running NA Draft Day-to-Day</h3>
        <p>
          Everything a venue needs: setup, daily/weekly checks, cleaning and change logs,
          and how to respond if something goes wrong.
        </p>
        <p class="small-links">
          Key docs:<br>
          <a href="/docs/venue-setup/">F-18 Venue Setup</a> ·
          <a href="/docs/venue-checklist/">F-19 Verification Checklist</a> ·
          <a href="/docs/change-log/">F-20 Change Log SOP</a> ·
          <a href="/docs/cleaning-log/">F-21 Cleaning Log SOP</a> ·
          <a href="/docs/incident-response/">F-22 Incident Response</a> ·
          <a href="/docs/staff-training/">F-23 Staff Training</a>
        </p>
      </div>

      <!-- SYSTEM DESIGN SERIES -->
      <div class="card series-card">
        <div class="chip">System Design · F-24–F-27</div>
        <h3>Engineering &amp; Modifications</h3>
        <p>
          For designers, installers, and technicians: how to build NA-compatible systems, 
          share towers safely, manage gas, and make changes without breaking compliance.
        </p>
        <p class="small-links">
          Key docs:<br>
          <a href="/docs/system-design/">F-24 System Design</a> ·
          <a href="/docs/tower-sharing/">F-25 Tower Sharing</a> ·
          <a href="/docs/gas-management/">F-26 Gas Management</a> ·
          <a href="/docs/system-modification/">F-27 System Modification</a>
        </p>
      </div>

      <!-- DIGITAL SERIES -->
      <div class="card series-card">
        <div class="chip">Digital · F-28–F-31</div>
        <h3>Registry &amp; Data Model</h3>
        <p>
          The digital backbone: how tags, sites, taps, and events are represented, activated, and logged 
          inside the DraftVerify Registry.
        </p>
        <p class="small-links">
          Key docs:<br>
          <a href="/docs/registry-spec/">F-28 Registry Spec</a> ·
          <a href="/docs/tag-activation/">F-29 Tag Activation</a> ·
          <a href="/docs/verification-events/">F-30 Verification Events</a> ·
          <a href="/docs/audit-log/">F-31 Audit Log Framework</a>
        </p>
      </div>

      <!-- CERTIFICATION SERIES -->
      <div class="card series-card">
        <div class="chip">Programs · F-32–F-34</div>
        <h3>Mark Use, Audits &amp; Multi-Venue</h3>
        <p>
          When and how the DraftVerify mark may be used, what audits look like, and 
          how multi-venue programs are structured.
        </p>
        <p class="small-links">
          Key docs:<br>
          <a href="/docs/certification-policy/">F-32 Certification Policy</a> ·
          <a href="/docs/compliance-audit/">F-33 Compliance Audit</a> ·
          <a href="/docs/multi-venue/">F-34 Multi-Venue Requirements</a>
        </p>
      </div>

      <!-- ADVANCED SERIES -->
      <div class="card series-card">
        <div class="chip">Advanced · F-35–F-40</div>
        <h3>Risk, Field Work &amp; Governance</h3>
        <p>
          Deeper analysis and field tools: contamination risk, failure modes, field audit guides,
          education material, product switching, and how the standard evolves over time.
        </p>
        <p class="small-links">
          Key docs:<br>
          <a href="/docs/contamination-report/">F-35 Contamination Report</a> ·
          <a href="/docs/failure-modes/">F-36 Failure Modes</a> ·
          <a href="/docs/audit-handbook/">F-37 Audit Handbook</a> ·
          <a href="/docs/education-handbook/">F-38 Education Handbook</a> ·
          <a href="/docs/product-switching/">F-39 Product Switching</a> ·
          <a href="/docs/governance-policy/">F-40 Governance Policy</a>
        </p>
      </div>

    </div>

    <!-- FULL INDEX -->
    <div class="doc-index">
      <details>
        <summary>View full F-1–F-40 document index</summary>
        <div class="doc-index-card">
          <ol class="doc-index-list">
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
            <li><a href="/docs/distributor-protocol/">F-15 — Distributor Protocol (D-Series)</a></li>
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
        </div>
      </details>
    </div>

  </div>
</section>

<!-- WHAT IT IS -->
<section class="section center" id="standard-overview">
  <div class="container">
    <div class="kicker">What It Is</div>
    <h2 class="h2">A Unified Physical + Digital Standard</h2>
    <p style="max-width:820px;margin:0 auto">
      The DraftVerify Standard defines how non-alcoholic draft must be identified, separated, and verified 
      in mixed or dedicated draft systems. It combines a clear visual language on the hardware with a required 
      digital registry that records which keg, line, and faucet are part of the NA draft path.
    </p>
    <p style="max-width:820px;margin:16px auto 0">
      A system is only considered <strong>DraftVerify compliant</strong> when both layers are in place:
      visible NA identification at the point of pour, and active digital records backing every serialized tag.
    </p>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="section center" id="how-it-works">
  <div class="container">
    <div class="kicker">How It Works</div>
    <h2 class="h2">Identification → Activation → Verification</h2>
    <p>Three pieces that work together in any venue or group.</p>

    <div class="grid cols-3" style="margin-top:22px">
      <div class="card reveal">
        <div class="chip">1. Physical Identification</div>
        <h3>Make NA Lines Obvious</h3>
        <p>
          Kegs, lines, and faucets used for non-alcoholic products are clearly marked so teams can follow the 
          NA path from the cooler to the tap in seconds.
        </p>
      </div>

      <div class="card reveal">
        <div class="chip">2. Digital Activation</div>
        <h3>Link Tags to the Registry</h3>
        <p>
          Each NA connection point receives a serialized DraftVerify tag and is digitally activated in the 
          DraftVerify Registry — creating a traceable record for that keg → line → faucet.
        </p>
      </div>

      <div class="card reveal">
        <div class="chip">3. Ongoing Verification</div>
        <h3>Keep It Compliant</h3>
        <p>
          Venues perform simple checks and maintain logs so NA lines stay correctly identified, separated from 
          alcoholic lines, and aligned with the digital record over time.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- TECHNOLOGY (REQUIRED DIGITAL LAYER) -->
<section class="section" id="technology" style="background:#f7f9fc">
  <div class="container center">
    <div class="kicker">Digital Enforcement Layer</div>
    <h2 class="h2">Required Traceability Behind Every Tag</h2>
    <p style="max-width:820px;margin:0 auto">
      DraftVerify is not just stickers on hardware. The digital platform is a required part of the standard — 
      providing traceability, accountability, and proof that NA draft systems are being managed correctly over time.
    </p>

    <ul class="feature-list" style="max-width:720px;margin:30px auto 0;text-align:left">
      <li><strong>Serialized DraftVerify tags</strong> assigned to NA kegs, lines, and faucets.</li>
      <li><strong>Mandatory digital activation</strong> of each tag in the DraftVerify Registry.</li>
      <li><strong>Verification logs</strong> capturing who checked what, where, and when.</li>
      <li><strong>Change and cleaning records</strong> for system modifications and maintenance.</li>
      <li><strong>Multi-venue visibility</strong> for breweries, groups, and distributors.</li>
    </ul>

    <p style="max-width:820px;margin:24px auto 0">
      <strong>A DraftVerify tag is only considered valid when digitally activated in the DraftVerify Registry 
      and linked to the verified connection point.</strong>  
      Physical tags without an active record are not compliant with the standard.
    </p>
  </div>
</section>

<!-- CORE REQUIREMENTS SUMMARY -->
<section class="section" id="core-requirements">
  <div class="container">
    <div class="kicker center">Core Requirements</div>
    <h2 class="h2 center">What the DraftVerify Standard Covers</h2>

    <div class="grid cols-3" style="margin-top:22px">
      <div class="card reveal">
        <h3>Separation</h3>
        <p>
          NA draft pathways are kept isolated from alcoholic lines. Equipment reuse and tower sharing are 
          controlled and documented to prevent cross-contact.
        </p>
      </div>
      <div class="card reveal">
        <h3>Identification</h3>
        <p>
          NA components are visibly distinguished at the keg, along the beer line, and on the faucet. Staff can 
          follow the NA path visually without guesswork.
        </p>
      </div>
      <div class="card reveal">
        <h3>Verification &amp; Records</h3>
        <p>
          Operators maintain verification records, cleaning logs, change logs, and tag data in the DraftVerify 
          Registry, supporting audits and incident response.
        </p>
      </div>
    </div>

    <div style="max-width:860px;margin:30px auto 0;font-size:0.98rem;line-height:1.6">
      <h3 class="h3">High-Level Structure of the Standard</h3>
      <ul>
        <li><strong>Definitions &amp; Scope</strong> — What counts as non-alcoholic, where the standard applies, and what is out of scope.</li>
        <li><strong>System Identification</strong> — Requirements for visible, durable NA labeling and serialized tags.</li>
        <li><strong>Physical Separation &amp; Cross-Contact Prevention</strong> — Rules for shared towers, gas management, and line reuse.</li>
        <li><strong>Handling &amp; Storage</strong> — Cold chain and handling guidance for NA kegs.</li>
        <li><strong>Verification Protocol</strong> — Initial verification, annual renewal, and post-modification review.</li>
        <li><strong>Documentation &amp; Recordkeeping</strong> — Verification records, change logs, cleaning logs, and identification plans.</li>
        <li><strong>Use of Mark &amp; Incident Response</strong> — When the “DraftVerify Certified” mark may be used, and how to respond to issues.</li>
        <li><strong>Registry &amp; Tag Serialization</strong> — How DV-SITE-YYYY-##### style tags are issued, tracked, and referenced.</li>
        <li><strong>Revision Policy</strong> — How and when the standard is reviewed and updated.</li>
      </ul>
    </div>
  </div>
</section>

<!-- WHERE IT APPLIES -->
<section class="section" id="applications">
  <div class="container">
    <div class="kicker center">Where It Applies</div>
    <h2 class="h2 center">Built for Non-Alcoholic Draft Across Categories</h2>

    <div class="grid cols-3" style="margin-top:22px">
      <div class="card reveal">
        <h3>Non-Alcoholic Beer</h3>
        <p>The core use case — keeping NA and alcoholic beer lines clearly separated and correctly identified.</p>
      </div>
      <div class="card reveal">
        <h3>Kombucha</h3>
        <p>Applies the same identification and traceability principles to live and fermented beverages on draft.</p>
      </div>
      <div class="card reveal">
        <h3>Nitro Coffee</h3>
        <p>Brings clarity and consistency to nitrogen-driven NA systems in cafés, taprooms, and hybrid venues.</p>
      </div>
    </div>
  </div>
</section>

<!-- WHO IT'S FOR -->
<section class="section center" id="audiences" style="background:#f7f9fc">
  <div class="container">
    <div class="kicker center">Who It’s For</div>
    <h2 class="h2 center">From Single Venues to National Groups</h2>

    <div class="grid cols-3" style="margin-top:22px">
      <div class="card reveal">
        <h3>Bars &amp; Restaurants</h3>
        <p>Make NA taps easy to locate, explain, and trust — even with frequent staff turnover.</p>
      </div>
      <div class="card reveal">
        <h3>Breweries &amp; Taprooms</h3>
        <p>Protect NA brands with a clear, repeatable standard for how they’re poured on site and in partner venues.</p>
      </div>
      <div class="card reveal">
        <h3>Distributors &amp; Groups</h3>
        <p>Roll out a recognizable, traceable system for NA draft across multiple sites and operators.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section-sm">
  <div class="container">
    <div class="cta-band reveal">
      <div>
        <div class="kicker">Get Started</div>
        <h3 style="margin:.3rem 0 0;">Bring the DraftVerify Standard to your venues.</h3>
      </div>
      <div>
        <a class="btn primary" href="{{ '/contact/' | relative_url }}">Request a Starter Kit</a>
        <a class="btn btn-ghost-local" href="{{ '/pricing/' | relative_url }}" style="margin-left:10px;">View Pricing</a>
      </div>
    </div>
  </div>
</section>
