---
layout: default
title: "DraftVerify Standard v1.0 — Non-Alcoholic Draft Systems"
permalink: /standards/
description: "The official DraftVerify Standard v1.0 — a combined physical and digital framework for identifying, separating, and verifying non-alcoholic draft systems from keg to faucet."
---

<style>
  /* Local tweaks just for this page */

  .std-hero-card{
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
  .std-hero-card::after{
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
  .std-hero-meta{
    font-size:0.8rem;
    color:#e5e7eb;
    opacity:.85;
    margin-bottom:10px;
    display:flex;
    flex-wrap:wrap;
    gap:6px;
    align-items:center;
  }
  .std-hero-meta span.dot{
    opacity:.6;
  }
  .std-hero-bullets{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    margin:14px 0 18px;
    font-size:0.8rem;
  }
  .std-pill{
    display:inline-flex;
    align-items:center;
    padding:4px 10px;
    border-radius:999px;
    border:1px solid rgba(148,163,184,.6);
    background:rgba(15,23,42,.8);
    color:#e5e7eb;
    font-size:0.78rem;
    font-weight:500;
    white-space:nowrap;
  }
  .std-hero-ctas{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    margin-top:8px;
    position:relative;
    z-index:1;
  }
  .std-hero-ctas .btn-primary-local{
    background:#facc15;
    color:#111827;
    border:none;
  }
  .std-hero-ctas .btn-secondary-local{
    background:rgba(15,23,42,.85);
    border:1px solid rgba(148,163,184,.8);
    color:#e5e7eb;
    font-weight:500;
  }
  .std-hero-subcopy{
    font-size:0.8rem;
    color:#e5e7eb;
    opacity:.8;
    margin-top:14px;
  }

  .std-quick-nav{
    max-width:980px;
    margin:0 auto 40px;
    padding:12px 20px;
    border-radius:14px;
  }
  .std-quick-nav-header{
    font-size:0.8rem;
    text-transform:uppercase;
    letter-spacing:.08em;
    color:#6b7280;
    margin-bottom:8px;
  }
  .std-quick-nav-links{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
  }

  .chip-series{
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

  .std-feature-list li{
    margin-bottom:4px;
  }

  @media (max-width:768px){
    .std-hero-card{
      padding:24px 20px 22px;
      margin-bottom:28px;
    }
    .doc-index-list{columns:1;}
  }
</style>

<!-- HERO -->
<section class="hero hero-simple">
  <div class="container">
    <div class="std-hero-card reveal">
      <div class="std-hero-meta">
        <span>DraftVerify Standard v1.0</span>
        <span class="dot">•</span>
        <span>NA Draft Systems</span>
        <span class="dot">•</span>
        <span>F-1–F-40 Library</span>
      </div>

      <h1 style="margin:0 0 10px;color:#f9fafb;">
        DraftVerify Standard v1.0
      </h1>

      <p style="max-width:720px;margin:0 0 8px;font-size:0.98rem;line-height:1.7;color:#e5e7eb;">
        The global standard for <strong>non-alcoholic draft integrity</strong> — a combined 
        <strong>physical identification system</strong> and <strong>digital traceability layer</strong> that keeps 
        NA draft lines clearly marked, separated, and verifiable from <strong>keg → line → faucet</strong>.
      </p>

      <div class="std-hero-bullets">
        <span class="std-pill">NA Safety &amp; Mis-serve Prevention</span>
        <span class="std-pill">NFC Identity &amp; Registry</span>
        <span class="std-pill">F-Series Standards Library (F-1–F-40)</span>
      </div>

      <div class="std-hero-ctas">
        <a class="btn btn-primary-local" href="#standard-overview">
          See How the Standard Works
        </a>
        <a class="btn btn-secondary-local" href="#standards-library">
          Browse the F-Series Library
        </a>
      </div>

      <p class="std-hero-subcopy">
        Formal PDFs are available in English and German. Web documents below reflect the same v1.0 content.
      </p>
    </div>
  </div>
</section>

<!-- QUICK NAV -->
<section class="section-sm">
  <div class="container">
    <div class="card std-quick-nav">
      <div class="std-quick-nav-header">Jump to</div>
      <div class="std-quick-nav-links">
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
      Use the PDF versions for legal, compliance, and internal documentation. The web library below mirrors the
      same v1.0 content for easier browsing and linking.
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
    <h2 class="h2 center">A Structured F-1–F-40 Library — Not a Wall of Links</h2>

    <p style="max-width:820px;margin:0 auto 16px;text-align:center;">
      The DraftVerify Standards Library defines the <strong>physical, digital, operational, legal, and verification</strong>
      framework for non-alcoholic draft.  
      Start with the Foundation series, then dive into the series that matches your role.
    </p>

    <p style="max-width:820px;margin:0 auto 32px;text-align:center;font-size:0.9rem;color:#666;">
      Each card highlights a <strong>series</strong> and a few <strong>key documents</strong>.  
      A full F-1–F-40 index is available at the bottom of this section.
    </p>

    <!-- BROWSE BY SERIES -->
    <div class="grid cols-3" style="max-width:1080px;margin:0 auto;gap:24px;align-items:stretch;">

      <!-- FOUNDATION SERIES -->
      <div class="card series-card">
        <div class="chip-series">Foundation · F-1–F-5</div>
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
        <div class="chip-series">Identification · F-6–F-10</div>
        <h3>What NA Looks Like on Hardware</h3>
        <p>
          How to mark NA kegs, couplers, lines, and faucets so anyone can follow the NA path in seconds — 
          plus the visual lexicon behind the system.
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
        <div class="chip-series">Breweries · F-11–F-14</div>
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
