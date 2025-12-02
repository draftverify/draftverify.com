---
layout: default
title: "Technology — DraftVerify Registry & NFC Identity Layer"
permalink: /technology/
description: "Inside DraftVerify: the NFC identity layer, registry, and verification engine that power non-alcoholic draft compliance from keg to faucet."
---

<style>
  /* Simple, calm technology page */

  .tech-hero{
    max-width:860px;
    margin:0 auto 40px;
    padding:32px 24px 30px;
    border-radius:24px;
    background:linear-gradient(145deg,#0d1b2a 0%,#020617 70%);
    color:#e5e7eb;
    box-shadow:0 26px 70px rgba(15,23,42,.55);
  }
  .tech-hero-eyebrow{
    font-size:0.78rem;
    letter-spacing:.08em;
    text-transform:uppercase;
    opacity:.75;
    margin-bottom:6px;
  }
  .tech-hero h1{
    margin:0 0 10px;
    font-size:2rem;
    color:#f9fafb;
  }
  .tech-hero p.lead{
    margin:0 0 14px;
    font-size:0.98rem;
    line-height:1.7;
    color:#e5e7eb;
  }
  .tech-hero-list{
    margin:0 0 14px 18px;
    padding:0;
    font-size:0.9rem;
    color:#e5e7eb;
  }
  .tech-hero-list li{
    margin-bottom:4px;
  }
  .tech-hero-note{
    margin-top:10px;
    font-size:0.82rem;
    color:#cbd5f5;
  }

  .tech-section-intro{
    max-width:760px;
    margin:0 auto 10px;
    text-align:center;
    font-size:0.95rem;
    color:#4b5563;
  }

  .tech-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:22px;
    margin-top:22px;
  }
  .tech-card{
    background:#ffffff;
    border-radius:16px;
    padding:20px 18px 18px;
    box-shadow:0 10px 30px rgba(15,23,42,.06);
  }
  .tech-card h3{
    margin:0 0 6px;
    font-size:1.08rem;
    color:#111827;
  }
  .tech-card p{
    margin:0;
    font-size:0.9rem;
    color:#4b5563;
  }
  .tech-card ul{
    margin:8px 0 0 16px;
    padding:0;
    font-size:0.86rem;
    color:#4b5563;
  }
  .tech-card ul li{
    margin-bottom:3px;
  }

  .tech-steps{
    max-width:860px;
    margin:18px auto 0;
    padding:18px 18px 16px;
    border-radius:16px;
    background:#0f172a;
    color:#e5e7eb;
    border:1px solid rgba(15,23,42,.5);
  }
  .tech-steps-list{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:16px;
    margin-top:10px;
  }
  .tech-steps-item h4{
    margin:0 0 4px;
    font-size:0.95rem;
    color:#facc15;
  }
  .tech-steps-item p{
    margin:0;
    font-size:0.86rem;
    color:#e5e7eb;
  }

  @media (max-width:768px){
    .tech-hero{
      padding:24px 18px 22px;
      border-radius:18px;
    }
    .tech-hero h1{font-size:1.7rem;}
  }
</style>

<!-- HERO -->
<section class="section">
  <div class="container">
    <div class="tech-hero">
      <div class="tech-hero-eyebrow">
        DraftVerify Technology · NFC Identity Layer & Registry
      </div>

      <h1>The Technology Behind DraftVerify</h1>

      <p class="lead">
        DraftVerify links <strong>NFC tags on real hardware</strong> with a
        <strong>cloud registry</strong> and <strong>verification engine</strong>, so every
        non-alcoholic draft tap can be identified, checked, and proven over time.
      </p>

      <ul class="tech-hero-list">
        <li>NFC identity for kegs, couplers, and faucets.</li>
        <li>Registry that understands sites, taps, and tags.</li>
        <li>Verification events that create an audit trail.</li>
      </ul>

      <a class="btn gold" href="#architecture">See How It Fits Together</a>

      <div class="tech-hero-note">
        The technology follows the same rules described in the F-Series Standards Library — it’s the
        implementation layer for what’s written down on paper.
      </div>
    </div>
  </div>
</section>

<!-- AT A GLANCE -->
<section class="section" id="overview">
  <div class="container">
    <h2 class="h2 center">At a Glance</h2>
    <p class="tech-section-intro">
      Three building blocks work together: identity on hardware, a registry in the cloud, and simple
      verification workflows for people who touch the taps.
    </p>

    <div class="tech-grid">
      <div class="tech-card">
        <h3>NFC Tags on Hardware</h3>
        <p>
          Industrial-grade NFC tags attached to kegs, couplers, and (where needed) faucets.
          Each tag is unique and linked to one place in the system.
        </p>
        <ul>
          <li>Cold-room and moisture compatible</li>
          <li>Scannable with standard NFC devices</li>
          <li>Mapped directly to DraftVerify IDs</li>
        </ul>
      </div>

      <div class="tech-card">
        <h3>DraftVerify Registry</h3>
        <p>
          A cloud registry that understands sites, taps, tags, and events. It’s the
          single source of truth for what “NA” means on each tap.
        </p>
        <ul>
          <li>Site & tap configuration</li>
          <li>Tag lifecycle and status</li>
          <li>Exportable logs for QA / legal</li>
        </ul>
      </div>

      <div class="tech-card">
        <h3>Verification Engine</h3>
        <p>
          Each scan and checklist becomes an event with a timestamp, location, and person attached.
          That event history is what makes the system defensible.
        </p>
        <ul>
          <li>Verification, change, and cleaning events</li>
          <li>Incident recording where needed</li>
          <li>Append-only history for audits</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT FITS TOGETHER -->
<section class="section" id="architecture" style="background:#f8fafc;">
  <div class="container">
    <h2 class="h2 center">How It Fits Together</h2>
    <p class="tech-section-intro">
      From the brewery’s packaging line to the tap handle at a venue, DraftVerify follows the same simple
      pattern: tag it, register it, connect it, and keep a record.
    </p>

    <div class="tech-steps">
      <strong style="font-size:0.9rem;">End-to-end flow</strong>
      <div class="tech-steps-list">
        <div class="tech-steps-item">
          <h4>1. Tag & Encode</h4>
          <p>Breweries tag NA kegs and couplers and link each tag to the correct product and asset.</p>
        </div>
        <div class="tech-steps-item">
          <h4>2. Register</h4>
          <p>Tags are activated in the DraftVerify Registry and assigned to lines, faucets, and sites.</p>
        </div>
        <div class="tech-steps-item">
          <h4>3. Scan & Check</h4>
          <p>Distributors and venues scan tags when connecting kegs, doing checks, or cleaning lines.</p>
        </div>
        <div class="tech-steps-item">
          <h4>4. Prove & Improve</h4>
          <p>Breweries and groups pull reports to show how NA taps were handled and where to improve.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHO USES THE TECH -->
<section class="section" id="teams">
  <div class="container">
    <h2 class="h2 center">Who Uses the Technology</h2>
    <p class="tech-section-intro">
      DraftVerify is designed so breweries, distributors, and venues all see the same truth — just from
      their own angle.
    </p>

    <div class="tech-grid">
      <div class="tech-card">
        <h3>Breweries</h3>
        <p>
          See where NA kegs are, which taps are verified, and how often they’re being checked and cleaned.
        </p>
        <ul>
          <li>Footprint of verified NA taps</li>
          <li>Tap-level event history</li>
          <li>Evidence for QA and brand teams</li>
        </ul>
      </div>

      <div class="tech-card">
        <h3>Distributors</h3>
        <p>
          Prove that NA draft was kept separate from alcoholic stock through the warehouse and on the truck.
        </p>
        <ul>
          <li>Warehouse and route checkpoints</li>
          <li>Exception & incident logging</li>
          <li>Support for SLAs and contracts</li>
        </ul>
      </div>

      <div class="tech-card">
        <h3>Venues & Groups</h3>
        <p>
          Make NA taps easy to identify and run day-to-day, even with staff turnover and multiple locations.
        </p>
        <ul>
          <li>Clear “this tap is NA” identity</li>
          <li>Simple checklists instead of manuals</li>
          <li>Multi-venue snapshots for operators</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- WHY IT MATTERS -->
<section class="section" id="trust" style="background:#f8fafc;">
  <div class="container">
    <h2 class="h2 center">Why the Technology Matters</h2>
    <p class="tech-section-intro">
      The goal isn’t just “an app”. It’s a clean, long-term record of how non-alcoholic taps were handled,
      in case anyone ever asks.
    </p>

    <div class="tech-grid">
      <div class="tech-card">
        <h3>Less Guesswork</h3>
        <p>
          When a complaint or question comes in, you can follow the data instead of relying on memory or
          handwritten notes.
        </p>
      </div>

      <div class="tech-card">
        <h3>Proof on Demand</h3>
        <p>
          Exportable logs and snapshots make it easier to talk to insurers, regulators, or large accounts
          about NA draft safety.
        </p>
      </div>

      <div class="tech-card">
        <h3>Same Story Everywhere</h3>
        <p>
          The registry, tags, and standards library all use the same language, so everyone is working from
          one shared definition of “NA draft done right”.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section-sm">
  <div class="container">
    <div class="cta-band">
      <div>
        <div class="kicker">See It in Your World</div>
        <h3 style="margin:.3rem 0 0;">Plug DraftVerify into your NA taps, routes, and venues.</h3>
      </div>
      <div>
        <a class="btn primary" href="{{ '/onboarding/' | relative_url }}">Start Onboarding</a>
        <a class="btn ghost" href="{{ '/pricing/' | relative_url }}" style="margin-left:8px;">View Pricing</a>
      </div>
    </div>
  </div>
</section>
