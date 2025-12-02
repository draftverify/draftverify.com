---
layout: default
title: "Technology — DraftVerify Registry & NFC Identity Layer"
permalink: /technology/
description: "Inside DraftVerify: the NFC identity layer, registry, and verification engine that power non-alcoholic draft compliance from keg to faucet."
---

<style>
/* ===========================
   Modern SaaS Technology Page
   Clean • Minimal • Premium
=========================== */

/* HERO */
.tech-hero {
  max-width: 960px;
  margin: 0 auto 60px;
  padding: 56px 48px;
  border-radius: 28px;
  background: linear-gradient(155deg, #0d1b2a 0%, #0a0f1a 100%);
  color: #e6e9ef;
  box-shadow: 0 40px 120px rgba(0,0,0,0.45);
  position: relative;
  overflow: hidden;
}
.tech-hero::after {
  content: "";
  position: absolute;
  right: -60px;
  bottom: -60px;
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, #22c55e33 0%, transparent 70%);
}
.tech-hero-meta {
  font-size: 0.78rem;
  letter-spacing: .04em;
  opacity: .75;
  margin-bottom: 14px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  text-transform: uppercase;
}
.tech-hero h1 {
  margin: 0 0 16px;
  font-size: 2.4rem;
  font-weight: 650;
  line-height: 1.2;
  color: #f9fafb;
}
.tech-hero p.lead {
  font-size: 1.08rem;
  line-height: 1.7;
  max-width: 720px;
  color: #d1d5db;
  margin-bottom: 28px;
}

/* TAG ROW */
.tech-pill-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}
.tech-pill {
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  font-size: 0.78rem;
  color: #e5e7eb;
  backdrop-filter: blur(4px);
}

/* CTA ROW */
.tech-cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.tech-btn-primary {
  background: #facc15;
  color: #111827;
  padding: 12px 22px;
  border-radius: 10px;
  font-weight: 600;
  border: none;
}
.tech-btn-secondary {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.22);
  color: #e5e7eb;
  padding: 12px 22px;
  border-radius: 10px;
  font-weight: 500;
}

/* SECTION HEADINGS */
.section-title {
  text-align: center;
  margin-bottom: 8px;
}
.section-subtext {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 26px;
  opacity: .85;
}

/* DIAGRAM BLOCK */
.dv-diagram {
  max-width: 900px;
  margin: 0 auto 40px;
  padding: 24px;
  border-radius: 20px;
  background: #0f172a;
  border: 1px solid rgba(255,255,255,0.08);
  color: #e2e8f0;
}
.dv-diagram-cols {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 24px;
  margin-top: 12px;
}
.dv-diagram-col h4 {
  margin: 0 0 6px;
  font-size: 1rem;
  color: #facc15;
}
.dv-diagram-col p {
  margin: 0;
  opacity: .88;
  font-size: 0.95rem;
}

/* SIMPLE FEATURE GRID */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 28px;
  margin-top: 34px;
}
.feature-card {
  background: white;
  padding: 26px;
  border-radius: 16px;
  box-shadow: 0 14px 40px rgba(0,0,0,0.05);
}
.feature-card h3 {
  margin-top: 0;
  font-size: 1.2rem;
}
.feature-card p {
  font-size: 0.95rem;
  color: #374151;
}

</style>

<!-- ===========================
        HERO SECTION
=========================== -->
<section class="hero hero-simple">
  <div class="container">
    
    <div class="tech-hero">

      <div class="tech-hero-meta">
        <span>DraftVerify Technology</span>
        <span>•</span>
        <span>NFC Identity Layer</span>
        <span>•</span>
        <span>Registry & Verification Engine</span>
      </div>

      <h1>The Technology Behind DraftVerify</h1>

      <p class="lead">
        DraftVerify links <strong>NFC-tagged hardware</strong> (kegs, couplers & faucets) with a 
        <strong>cloud registry</strong> and <strong>verification engine</strong> that ensures non-alcoholic 
        draft lines are correctly identified, separated, and provable — across breweries, distributors, and venues.
      </p>

      <div class="tech-pill-row">
        <span class="tech-pill">NFC identity on hardware</span>
        <span class="tech-pill">DraftVerify Registry</span>
        <span class="tech-pill">Verification logs</span>
        <span class="tech-pill">Multi-venue visibility</span>
      </div>

      <div class="tech-cta-row">
        <a href="#architecture" class="tech-btn-primary">See the Architecture</a>
        <a href="#components" class="tech-btn-secondary">Explore Components</a>
      </div>

    </div>

  </div>
</section>

<!-- ===========================
        QUICK NAV
=========================== -->
<section class="section-sm">
  <div class="container">
    <div class="card" style="max-width:900px;margin:0 auto;padding:18px 24px;border-radius:14px;">
      <div style="font-size:0.8rem;color:#6b7280;margin-bottom:6px;text-transform:uppercase;letter-spacing:.08em;">
        On this page
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        <a href="#architecture" class="pill">Architecture Overview</a>
        <a href="#components" class="pill">Core Components</a>
        <a href="#data-model" class="pill">Data Model</a>
        <a href="#workflows" class="pill">Workflows</a>
        <a href="#teams" class="pill">For Breweries & Venues</a>
        <a href="#trust" class="pill">Security & Trust</a>
      </div>
    </div>
  </div>
</section>

<!-- ===========================
       ARCHITECTURE
=========================== -->
<section class="section" id="architecture">
  <div class="container">

    <h2 class="section-title">Architecture Overview</h2>
    <p class="section-subtext">
      NFC tags connect real-world draft hardware to a structured cloud registry.  
      Every keg, coupler, line, faucet, and venue becomes a first-class object.
    </p>

    <div class="dv-diagram">
      <strong>System Flow</strong>

      <div class="dv-diagram-cols">

        <div class="dv-diagram-col">
          <h4>1. Tag & Encode</h4>
          <p>Breweries attach NFC tags to NA kegs and couplers and link IDs to registry objects.</p>
        </div>

        <div class="dv-diagram-col">
          <h4>2. Register</h4>
          <p>Tags are activated in the DraftVerify Registry and assigned to lines, faucets, and venues.</p>
        </div>

        <div class="dv-diagram-col">
          <h4>3. Scan & Verify</h4>
          <p>Staff scan tags during connection, checks, and cleaning. Each scan becomes a verifiable event.</p>
        </div>

        <div class="dv-diagram-col">
          <h4>4. Audit</h4>
          <p>Breweries and groups export compliance logs, incident history, and tap-level snapshots.</p>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- ===========================
       COMPONENTS
=========================== -->
<section class="section" id="components" style="background:#f8fafc;">
  <div class="container">

    <h2 class="section-title">Core Components</h2>
    <p class="section-subtext">
      DraftVerify is built as a layered system: identity on hardware → registry → verification engine.
    </p>

    <div class="feature-grid">

      <div class="feature-card">
        <h3>NFC Identity Layer</h3>
        <p>Industrial-grade NFC tags for kegs, couplers, and faucets. Each tag is uniquely mapped to registry objects.</p>
      </div>

      <div class="feature-card">
        <h3>DraftVerify Registry</h3>
        <p>The cloud platform that understands sites, taps, identity structures, and verification events.</p>
      </div>

      <div class="feature-card">
        <h3>Verification Engine</h3>
        <p>Every scan becomes an immutable event tied to timestamps, assets, and personnel.</p>
      </div>
    </div>

  </div>
</section>

<!-- ===========================
       DATA MODEL
=========================== -->
<section class="section" id="data-model">
  <div class="container">

    <h2 class="section-title">Data Model</h2>
    <p class="section-subtext">
      Every object in a draft system — venue, tower, tap, keg, coupler — has a structured identity.
    </p>

    <div class="feature-grid">

      <div class="feature-card">
        <h3>Sites & Taps</h3>
        <p>Venues become Sites with fully mapped tap configurations and NA-only line assignment.</p>
      </div>

      <div class="feature-card">
        <h3>Tags & IDs</h3>
        <p>DraftVerify IDs link NFC tags to physical objects and lifecycle history.</p>
      </div>

      <div class="feature-card">
        <h3>Events & Logs</h3>
        <p>Verification events record who did what, where, when — and why.</p>
      </div>
    </div>

  </div>
</section>

<!-- ===========================
       WORKFLOWS
=========================== -->
<section class="section" id="workflows" style="background:#f8fafc;">
  <div class="container">

    <h2 class="section-title">Workflows</h2>
    <p class="section-subtext">Clean, simple flows for breweries, distributors, and venues.</p>

    <div class="feature-grid">
      
      <div class="feature-card">
        <h3>Brewery Workflow</h3>
        <p>Tag kegs → encode → activate → push to distributor or venue footprint.</p>
      </div>

      <div class="feature-card">
        <h3>Distributor Workflow</h3>
        <p>Scan at intake, storage, and loading to prove NA-only pathways.</p>
      </div>

      <div class="feature-card">
        <h3>Venue Workflow</h3>
        <p>Scan before connecting a keg, complete checklists, verify cleaning events.</p>
      </div>

    </div>

  </div>
</section>

<!-- ===========================
       TEAMS
=========================== -->
<section class="section" id="teams">
  <div class="container">

    <h2 class="section-title">Built for Breweries, Distributors & Venues</h2>
    <p class="section-subtext">Different roles, one unified source of truth.</p>

    <div class="feature-grid">

      <div class="feature-card">
        <h3>Breweries</h3>
        <p>Know exactly where your NA kegs are and how they were handled, poured, and maintained.</p>
      </div>

      <div class="feature-card">
        <h3>Distributors</h3>
        <p>Demonstrate correct storage, transport, and segregation from alcoholic stock.</p>
      </div>

      <div class="feature-card">
        <h3>Venues</h3>
        <p>Make NA taps foolproof for staff with clear identity, checklists, and verifiable steps.</p>
      </div>

    </div>

  </div>
</section>

<!-- ===========================
       TRUST
=========================== -->
<section class="section" id="trust" style="background:#f8fafc;">
  <div class="container">

    <h2 class="section-title">Security & Trust</h2>
    <p class="section-subtext">
      DraftVerify is designed for long-term compliance and audit readiness.
    </p>

    <div class="feature-grid">

      <div class="feature-card">
        <h3>Immutable Logs</h3>
        <p>Events are append-only, providing defensible compliance records for years.</p>
      </div>

      <div class="feature-card">
        <h3>Access Control</h3>
        <p>Brewery, distributor, venue, and group views are permission-scoped.</p>
      </div>

      <div class="feature-card">
        <h3>Standards-Aligned</h3>
        <p>Every field maps directly to the F-Series Standards Library.</p>
      </div>

    </div>

  </div>
</section>

<!-- ===========================
       CTA
=========================== -->
<section class="section-sm">
  <div class="container">
    <div class="cta-band reveal">
      <div>
        <div class="kicker">See DraftVerify in Action</div>
        <h3 style="margin:.3rem 0;">Bring clarity, ownership & proof to your NA taps.</h3>
      </div>
      <div>
        <a class="btn primary" href="/onboarding/">Start Onboarding</a>
        <a class="btn ghost" href="/pricing/" style="margin-left:10px;">View Pricing</a>
      </div>
    </div>
  </div>
</section>
