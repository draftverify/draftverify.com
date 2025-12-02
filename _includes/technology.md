---
layout: default
title: "Technology — DraftVerify Registry & NFC Identity Layer"
permalink: /technology/
description: "Inside DraftVerify: the NFC identity layer, registry, and verification engine that power non-alcoholic draft compliance from keg to faucet."
---

<style>
  /* Local styling just for this page */

  .tech-hero-card{
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
  .tech-hero-card::after{
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
  .tech-hero-meta{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    font-size:0.8rem;
    color:#e5e7eb;
    opacity:.85;
    margin-bottom:10px;
  }
  .tech-hero-tags{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    margin:12px 0 18px;
    font-size:0.8rem;
  }
  .tech-hero-tags .pill{
    background:rgba(15,23,42,.85);
    border:1px solid rgba(148,163,184,.5);
    color:#e5e7eb;
  }
  .tech-hero-ctas{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    margin-top:8px;
    position:relative;
    z-index:1;
  }
  .tech-hero-ctas .btn-primary-local{
    background:#facc15;
    color:#111827;
    border:none;
  }
  .tech-hero-ctas .btn-secondary-local{
    background:rgba(15,23,42,.85);
    border:1px solid rgba(148,163,184,.8);
    color:#e5e7eb;
    font-weight:500;
  }
  .tech-hero-subcopy{
    font-size:0.8rem;
    color:#e5e7eb;
    opacity:.8;
    margin-top:14px;
  }

  .tech-quick-nav{
    max-width:980px;
    margin:0 auto 40px;
    padding:12px 20px;
    border-radius:14px;
  }
  .tech-quick-nav-header{
    font-size:0.8rem;
    text-transform:uppercase;
    letter-spacing:.08em;
    color:#6b7280;
    margin-bottom:8px;
  }
  .tech-quick-nav-links{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
  }

  .chip-tech{
    display:inline-block;
    padding:4px 10px;
    border-radius:999px;
    background:#eef2ff;
    color:#3730a3;
    font-size:0.75rem;
    font-weight:500;
    margin-bottom:6px;
  }

  .tech-diagram{
    max-width:900px;
    margin:28px auto 0;
    padding:18px 18px;
    border-radius:16px;
    background:#020617;
    color:#e5e7eb;
    border:1px solid rgba(148,163,184,.5);
    font-size:0.88rem;
  }
  .tech-diagram-cols{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:18px;
    margin-top:12px;
  }
  .tech-diagram-col h4{
    font-size:0.9rem;
    margin:0 0 4px;
    color:#facc15;
  }
  .tech-diagram-col p{
    margin:0;
    color:#e5e7eb;
    opacity:.9;
  }

  .tech-list-compact li{
    margin-bottom:4px;
  }

  .persona-label{
    font-size:0.78rem;
    text-transform:uppercase;
    letter-spacing:.08em;
    color:#6b7280;
    margin-bottom:4px;
  }

  @media (max-width:768px){
    .tech-hero-card{
      padding:24px 20px 22px;
      margin-bottom:28px;
    }
  }
</style>

<!-- HERO -->
<section class="hero hero-simple">
  <div class="container">
    <div class="tech-hero-card reveal">
      <div class="tech-hero-meta">
        <span>DraftVerify Technology</span>
        <span>•</span>
        <span>NFC Identity Layer</span>
        <span>•</span>
        <span>Registry &amp; Verification Engine</span>
      </div>

      <h1 style="margin:0 0 10px;color:#f9fafb;">
        The Technology Behind DraftVerify
      </h1>

      <p style="max-width:720px;margin:0 0 12px;font-size:0.98rem;line-height:1.7;color:#e5e7eb;">
        DraftVerify combines <strong>NFC tags on hardware</strong> with a <strong>cloud registry</strong> and 
        <strong>verification engine</strong> that keeps non-alcoholic draft lines correctly identified, 
        separated, and provable — across breweries, distributors, and venues.
      </p>

      <div class="tech-hero-tags">
        <span class="pill">NFC-enabled keg &amp; coupler tags</span>
        <span class="pill">DraftVerify Registry</span>
        <span class="pill">Verification events &amp; audit logs</span>
        <span class="pill">Multi-venue visibility</span>
      </div>

      <div class="tech-hero-ctas">
        <a class="btn btn-primary-local" href="#architecture">
          See the Architecture
        </a>
        <a class="btn btn-secondary-local" href="#components">
          Explore Core Components
        </a>
      </div>

      <p class="tech-hero-subcopy">
        Built to feel like modern SaaS — but designed around the realities of cold rooms, kegs, and tap handles.
      </p>
    </div>
  </div>
</section>

<!-- QUICK NAV -->
<section class="section-sm">
  <div class="container">
    <div class="card tech-quick-nav">
      <div class="tech-quick-nav-header">On this page</div>
      <div class="tech-quick-nav-links">
        <a href="#architecture" class="pill">Architecture Overview</a>
        <a href="#components" class="pill">Core Components</a>
        <a href="#data-model" class="pill">Data Model &amp; Tags</a>
        <a href="#workflows" class="pill">Workflows</a>
        <a href="#for-teams" class="pill">For Breweries, Distributors &amp; Venues</a>
        <a href="#trust" class="pill">Security &amp; Trust</a>
      </div>
    </div>
  </div>
</section>

<!-- ARCHITECTURE OVERVIEW -->
<section class="section" id="architecture">
  <div class="container">
    <div class="kicker center">Architecture</div>
    <h2 class="h2 center">NFC on Hardware, Registry in the Cloud</h2>
    <p style="max-width:820px;margin:0 auto 14px;text-align:center;">
      DraftVerify treats each non-alcoholic draft connection point as a <strong>first-class object</strong>: 
      kegs, couplers, lines, faucets, and venues all get an identity in the Registry.  
      NFC tags connect the physical world to that digital record.
    </p>

    <div class="tech-diagram">
      <strong style="font-size:0.9rem;">High-Level Flow</strong>
      <div class="tech-diagram-cols">
        <div class="tech-diagram-col">
          <h4>1. Tag &amp; Encode</h4>
          <p>
            Breweries tag NA kegs and couplers with DraftVerify NFC tags and encode the identity to match 
            the Registry record.
          </p>
        </div>
        <div class="tech-diagram-col">
          <h4>2. Activate in Registry</h4>
          <p>
            Each tag is activated in the DraftVerify Registry and linked to a specific keg, line, faucet, 
            and venue (where applicable).
          </p>
        </div>
        <div class="tech-diagram-col">
          <h4>3. Scan &amp; Verify</h4>
          <p>
            Staff scan tags in the field to confirm they’re connected to the right NA keg → line → faucet path, 
            logging verification events in real time.
          </p>
        </div>
        <div class="tech-diagram-col">
          <h4>4. Audit &amp; Prove</h4>
          <p>
            Verification logs, change records, and incident reports can be pulled by breweries, distributors, 
            or groups to prove compliance.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CORE COMPONENTS -->
<section class="section" id="components" style="background:#f7f9fc;">
  <div class="container">
    <div class="kicker center">Core Components</div>
    <h2 class="h2 center">What Powers DraftVerify</h2>

    <div class="grid cols-3" style="margin-top:22px;">
      <div class="card reveal">
        <div class="chip-tech">NFC Identity Layer</div>
        <h3>DraftVerify Tags</h3>
        <p>
          Industrial-grade NFC tags for kegs, couplers, and other hardware. Each one carries a unique 
          DraftVerify ID and is tied to a digital record in the Registry.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Unique per keg / coupler / faucet</li>
          <li>Durable, cold-room &amp; moisture compatible</li>
          <li>Scannable with standard NFC-enabled devices</li>
        </ul>
      </div>

      <div class="card reveal">
        <div class="chip-tech">Cloud Platform</div>
        <h3>DraftVerify Registry</h3>
        <p>
          A cloud-hosted registry that understands sites, taps, tags, verification events, and audit history. 
          It’s the single source of truth for NA draft identities.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Per-site &amp; multi-site dashboards</li>
          <li>Tag lifecycle &amp; status tracking</li>
          <li>Exportable audit trails</li>
        </ul>
      </div>

      <div class="card reveal">
        <div class="chip-tech">Verification Engine</div>
        <h3>Checks &amp; Events</h3>
        <p>
          Every scan, change, and cleaning cycle becomes a structured event. Events are linked to 
          specific tags, users, and timestamps so compliance isn’t guesswork.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Verification events &amp; checklists</li>
          <li>Change logs &amp; cleaning logs</li>
          <li>Incident capture &amp; resolution notes</li>
        </ul>
      </div>
    </div>

    <div class="grid cols-3" style="margin-top:22px;">
      <div class="card reveal">
        <div class="chip-tech">Access Layers</div>
        <h3>Role-Based Views</h3>
        <p>
          Breweries, distributors, and venues see different slices of the same truth. 
          Each role has an appropriate level of visibility and control.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Per-venue operational views</li>
          <li>Distributor territory views</li>
          <li>Brewery / brand portfolio views</li>
        </ul>
      </div>

      <div class="card reveal">
        <div class="chip-tech">APIs (Roadmap)</div>
        <h3>Integration Hooks</h3>
        <p>
          The Registry is designed to connect into existing brewery, distributor, or group systems, 
          so DraftVerify can sit alongside your existing tech stack.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Planned API access to site &amp; tag data</li>
          <li>Webhook-friendly event model</li>
          <li>CSV &amp; report exports from day one</li>
        </ul>
      </div>

      <div class="card reveal">
        <div class="chip-tech">Standards-Driven</div>
        <h3>F-Series Alignment</h3>
        <p>
          The platform is built directly on top of the <strong>F-1–F-40 Standards Library</strong>, 
          so technology, SOPs, and compliance language all match.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Every field maps to an F-series document</li>
          <li>Checklists reflect the published standard</li>
          <li>Easy to reference for legal &amp; QA teams</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- DATA MODEL & TAGS -->
<section class="section" id="data-model">
  <div class="container">
    <div class="kicker center">Data Model</div>
    <h2 class="h2 center">How DraftVerify Thinks About Your Draft System</h2>
    <p style="max-width:840px;margin:0 auto 20px;text-align:center;">
      Under the hood, DraftVerify is a structured map of real-world hardware: 
      <strong>Sites → Systems → Kegs → Lines → Faucets</strong>, all stitched together by NFC tags and events.
    </p>

    <div class="grid cols-3" style="margin-top:22px;">
      <div class="card reveal">
        <h3>Sites &amp; Taps</h3>
        <p>
          Each venue becomes a <strong>Site</strong> in the Registry. Within that site, individual taps, towers, 
          and lines are modeled so every NA connection can be uniquely identified.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Site profiles &amp; contact info</li>
          <li>Tap &amp; tower configuration</li>
          <li>NA vs alcoholic line designation</li>
        </ul>
      </div>

      <div class="card reveal">
        <h3>Tags &amp; IDs</h3>
        <p>
          DraftVerify issues structured IDs (e.g. <code>DV-SITE-2025-00123</code>) that link NFC tags to specific 
          objects. The ID scheme is documented in the F-28 Registry Spec.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Per-tag identity &amp; status</li>
          <li>Associated product &amp; system</li>
          <li>Full lifecycle history</li>
        </ul>
      </div>

      <div class="card reveal">
        <h3>Verification Events</h3>
        <p>
          Every time someone checks a tap, changes a product, or cleans a line, it becomes an 
          <strong>event</strong> recorded against that tag and site.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Who did what, where, and when</li>
          <li>Pre-defined event types (verify, clean, change)</li>
          <li>Exportable for audits &amp; insurance</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- WORKFLOWS -->
<section class="section" id="workflows" style="background:#f7f9fc;">
  <div class="container">
    <div class="kicker center">Workflows</div>
    <h2 class="h2 center">What It Feels Like to Use DraftVerify</h2>

    <div class="grid cols-3" style="margin-top:22px;">
      <div class="card reveal">
        <div class="chip-tech">Brewery</div>
        <h3>Tag &amp; Activate Kegs</h3>
        <p>
          Breweries assign NFC tags to NA kegs and couplers, associate SKUs and batch info, 
          and activate them in the Registry before they leave the facility.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Scan tag → select NA SKU</li>
          <li>Link to facility &amp; batch</li>
          <li>Push to distributor / venue footprint</li>
        </ul>
      </div>

      <div class="card reveal">
        <div class="chip-tech">Distributor</div>
        <h3>Verify Handling &amp; Transfers</h3>
        <p>
          Distributors scan tagged kegs during intake, storage, and loading, confirming they remain 
          in NA-only pathways and logging any exceptions or incidents.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Check-in / check-out scans</li>
          <li>Warehouse zone assignment</li>
          <li>Proof of separation from alcoholic stock</li>
        </ul>
      </div>

      <div class="card reveal">
        <div class="chip-tech">Venue</div>
        <h3>Connect, Check, &amp; Log</h3>
        <p>
          Venues scan coupler and faucet tags as they connect NA kegs, confirm the correct SKU on the 
          correct NA line, and log routine checks and cleaning.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Pre-connection verification scan</li>
          <li>Daily / weekly checklists</li>
          <li>Change &amp; cleaning logs baked in</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- PERSONA VALUE -->
<section class="section" id="for-teams">
  <div class="container">
    <div class="kicker center">For Your Teams</div>
    <h2 class="h2 center">Different Views, Same Source of Truth</h2>

    <div class="grid cols-3" style="margin-top:22px;">
      <div class="card reveal">
        <div class="persona-label">For Breweries</div>
        <h3>Protect the NA Brand</h3>
        <p>
          See where your NA kegs are, how they’re connected, and how often they’re being checked. 
          When a complaint appears, you can follow the data instead of guesswork.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Footprint map of verified NA taps</li>
          <li>Per-venue compliance snapshots</li>
          <li>Evidence for QA, legal, and sales teams</li>
        </ul>
      </div>

      <div class="card reveal">
        <div class="persona-label">For Distributors</div>
        <h3>Prove You Handled It Right</h3>
        <p>
          Show breweries and groups that NA draft was physically separated, correctly stored, 
          and delivered into the right lines — with a digital trail to back it up.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Warehouse &amp; route visibility</li>
          <li>Exception logging for incidents</li>
          <li>Reports that support SLAs &amp; contracts</li>
        </ul>
      </div>

      <div class="card reveal">
        <div class="persona-label">For Venues &amp; Groups</div>
        <h3>Make NA Draft Easy to Run</h3>
        <p>
          Bar teams see exactly which tap is NA, what product is on it, and what checks they need to complete. 
          Managers get proof that it’s actually happening.
        </p>
        <ul class="tech-list-compact" style="font-size:0.9rem;margin-top:10px;padding-left:18px;">
          <li>Simple checklists, not dense manuals</li>
          <li>Clear visuals at the point of pour</li>
          <li>Multi-venue oversight for operators</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- TRUST & SECURITY -->
<section class="section" id="trust" style="background:#f7f9fc;">
  <div class="container">
    <div class="kicker center">Trust &amp; Reliability</div>
    <h2 class="h2 center">Designed for Audit Trails, Not Just Apps</h2>
    <p style="max-width:820px;margin:0 auto 16px;text-align:center;">
      DraftVerify is designed so that, years from now, you can still show <strong>what was on that NA tap</strong> 
      and <strong>how it was managed</strong> — even if staff have changed and hardware has moved on.
    </p>

    <div class="grid cols-3" style="margin-top:22px;">
      <div class="card reveal">
        <h3>Immutable Event History</h3>
        <p>
          Verification events, changes, and incidents are stored as append-only records, providing a 
          defensible history for QA, legal, and insurance reviews.
        </p>
      </div>
      <div class="card reveal">
        <h3>Role-Based Access</h3>
        <p>
          Breweries, distributors, and venue groups see only what they need. Sensitive data is scoped 
          to the correct level of responsibility.
        </p>
      </div>
      <div class="card reveal">
        <h3>Standards-Backed Design</h3>
        <p>
          Every field and workflow is backed by the DraftVerify Standards Library, so the technology 
          and the paper standard never drift apart.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section-sm">
  <div class="container">
    <div class="cta-band reveal">
      <div>
        <div class="kicker">See It in Your Draft World</div>
        <h3 style="margin:.3rem 0 0;">Plug DraftVerify into your NA taps, routes, and venues.</h3>
      </div>
      <div>
        <a class="btn primary" href="{{ '/onboarding/' | relative_url }}">Start Onboarding</a>
        <a class="btn ghost" href="{{ '/pricing/' | relative_url }}" style="margin-left:10px;">View Pricing</a>
      </div>
    </div>
  </div>
</section>
