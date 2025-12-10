---
layout: default
title: "How DraftVerify Works"
permalink: /how-it-works/
description: "See exactly how DraftVerify is deployed in a venue, brewery, or chain — from first system mapping to ongoing verification and annual review."
---

<style>
  /* Reuse Standards styling for consistent look */

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

  .how-steps{
    max-width:860px;
    margin:26px auto 0;
  }
  .how-step{
    display:flex;
    gap:16px;
    align-items:flex-start;
    padding:14px 0;
    border-bottom:1px solid #e5e7eb;
  }
  .how-step:last-child{
    border-bottom:none;
  }
  .how-step-number{
    flex:0 0 28px;
    height:28px;
    border-radius:999px;
    background:#0f172a;
    color:#f9fafb;
    font-size:0.82rem;
    font-weight:600;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:2px;
  }
  .how-step-body h3{
    margin:0 0 4px;
    font-size:1rem;
    color:#111827;
  }
  .how-step-body p{
    margin:0 0 6px;
    font-size:0.9rem;
    color:#4b5563;
  }
  .how-step-body ul{
    margin:0;
    padding-left:18px;
    font-size:0.86rem;
    color:#4b5563;
  }
  .how-step-body ul li{
    margin-bottom:3px;
  }

  @media (max-width:768px){
    .std-hero{
      padding:24px 18px 22px;
      border-radius:18px;
    }
    .std-hero h1{font-size:1.7rem;}
    .how-step{
      flex-direction:row;
    }
  }
</style>

<!-- HERO -->
<section class="section">
  <div class="container">
    <div class="std-hero">
      <div class="std-hero-eyebrow">
        Deployment Journey · Venues · Breweries · Chains
      </div>

      <h1>How DraftVerify Works</h1>

      <p class="lead">
        DraftVerify adds a physical identification system and a digital verification layer to your existing
        draft setup. The hardware does not need to be rebuilt; it needs to be clearly marked, mapped, and
        checked in a consistent way.
      </p>

      <ul>
        <li>Map the current draft system and identify where NA lives.</li>
        <li>Apply standardized tags from keg → coupler → line → faucet.</li>
        <li>Activate each NA path in the DraftVerify Registry.</li>
        <li>Run simple, repeatable verification checks over time.</li>
      </ul>

      <a class="btn gold" href="#steps">See the Step-by-Step Journey</a>

      <div class="std-hero-note">
        The steps below describe a typical venue or brewery deployment. Chains and groups follow the same
        pattern, with a pilot phase and then a structured rollout to additional locations.
      </div>
    </div>
  </div>
</section>

<!-- OVERVIEW -->
<section class="section" id="overview">
  <div class="container">
    <h2 class="h2 center">From First Photos to Verified NA Taps</h2>
    <p class="std-section-intro">
      DraftVerify is not a rebuild of your draft system. It is a layer placed on top of your existing hardware
      that makes the NA path obvious and verifiable, both physically and digitally.
    </p>

    <div class="std-series-grid">
      <div class="std-series-card">
        <div class="std-series-label">Layer 1</div>
        <h3>Physical Identification</h3>
        <p>
          Kegs, couplers, lines, and faucets used for NA are given standardized tags and markings so anyone
          can follow the NA path without guesswork.
        </p>
        <ul>
          <li>Keg ID tags and coupler tags.</li>
          <li>Line wraps and faucet identifiers.</li>
          <li>Tower stickers where shared towers are in use.</li>
        </ul>
      </div>

      <div class="std-series-card">
        <div class="std-series-label">Layer 2</div>
        <h3>Digital Registry</h3>
        <p>
          Each NA path is recorded in the DraftVerify Registry, linking physical tags to a specific venue,
          tap, and product.
        </p>
        <ul>
          <li>Tag IDs associated with venues and taps.</li>
          <li>Verification events logged over time.</li>
          <li>Change history when systems are reconfigured.</li>
        </ul>
      </div>

      <div class="std-series-card">
        <div class="std-series-label">Layer 3</div>
        <h3>Verification &amp; Records</h3>
        <p>
          Staff and reps use simple checklists and workflows to confirm that NA paths remain correct as kegs
          and lines change.
        </p>
        <ul>
          <li>Daily/weekly front-of-house checks.</li>
          <li>Monthly full verification passes.</li>
          <li>Annual program review for key partners.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- STEP-BY-STEP -->
<section class="section" id="steps" style="background:#f7f9fc;">
  <div class="container">
    <h2 class="h2 center">The Deployment Journey</h2>
    <p class="std-section-intro">
      A typical venue or brewery implementation follows seven clear steps. Most of the work is mapping what
      already exists and making it visible and verifiable.
    </p>

    <div class="how-steps">

      <div class="how-step">
        <div class="how-step-number">1</div>
        <div class="how-step-body">
          <h3>Discovery &amp; System Mapping</h3>
          <p>
            The process starts with a structured look at your current draft system — especially where NA
            lives today or where it is planned.
          </p>
          <ul>
            <li>Collect photos of the cooler, tower, and existing labels.</li>
            <li>Identify active and planned NA taps.</li>
            <li>Outline keg → coupler → line → faucet paths for NA.</li>
          </ul>
        </div>
      </div>

      <div class="how-step">
        <div class="how-step-number">2</div>
        <div class="how-step-body">
          <h3>Tag Plan &amp; Starter Kit</h3>
          <p>
            Based on the map, a tag plan is created and a DraftVerify Starter Kit is prepared with the exact
            mix of tags and identifiers required for the site.
          </p>
          <ul>
            <li>Assign tag positions to each NA keg, coupler, line, and faucet.</li>
            <li>Prepare the Starter Kit with hardware and quick-start guide.</li>
            <li>Confirm any special cases (shared towers, rotating guest taps, etc.).</li>
          </ul>
        </div>
      </div>

      <div class="how-step">
        <div class="how-step-number">3</div>
        <div class="how-step-body">
          <h3>Onsite Installation</h3>
          <p>
            Tags are installed during a scheduled window. This can be done by venue staff, a brewery rep,
            or a service partner using the tag plan.
          </p>
          <ul>
            <li>Attach tags to the mapped keg, coupler, line, and faucet points.</li>
            <li>Apply tower stickers or badges where required.</li>
            <li>Verify that physical layout matches the documented map.</li>
          </ul>
        </div>
      </div>

      <div class="how-step">
        <div class="how-step-number">4</div>
        <div class="how-step-body">
          <h3>Registry Activation</h3>
          <p>
            Once tags are onsite, each NA path is activated in the DraftVerify Registry so physical tags and
            digital records match.
          </p>
          <ul>
            <li>Register the venue and its NA taps.</li>
            <li>Link tag IDs to specific taps and products.</li>
            <li>Create the first verification event as a clean baseline.</li>
          </ul>
        </div>
      </div>

      <div class="how-step">
        <div class="how-step-number">5</div>
        <div class="how-step-body">
          <h3>Staff Training &amp; Daily Checks</h3>
          <p>
            Front-of-house and relevant back-of-house staff learn how to recognize NA tags and perform a
            simple check at the start of shifts.
          </p>
          <ul>
            <li>Identify the NA tap at the tower and in the cooler.</li>
            <li>Check that the tagged NA keg is connected to the tagged NA line.</li>
            <li>Confirm any changes are recorded instead of improvised.</li>
          </ul>
        </div>
      </div>

      <div class="how-step">
        <div class="how-step-number">6</div>
        <div class="how-step-body">
          <h3>Monthly Verification Pass</h3>
          <p>
            A manager, brewery rep, or distributor performs a deeper verification at a regular interval to
            confirm that the NA path remains correct.
          </p>
          <ul>
            <li>Walk the full path from NA keg to NA faucet.</li>
            <li>Confirm tags, connections, and registry entries align.</li>
            <li>Log a verification event for traceability.</li>
          </ul>
        </div>
      </div>

      <div class="how-step">
        <div class="how-step-number">7</div>
        <div class="how-step-body">
          <h3>Annual Review &amp; Program Adjustments</h3>
          <p>
            For key venues, breweries, and chains, DraftVerify can be reviewed annually as part of broader
            safety, QA, or brand programs.
          </p>
          <ul>
            <li>Summarize verification history and any incidents.</li>
            <li>Update tag plans for new taps, towers, or products.</li>
            <li>Align policy language with the latest standard revision.</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- USE CASES -->
<section class="section">
  <div class="container">
    <h2 class="h2 center">Single Sites, Flagships, and Chains</h2>
    <p class="std-section-intro">
      The same deployment steps apply whether you are a single bar adding one NA tap or a chain planning a
      multi-city rollout. The difference is scope, not method.
    </p>

    <div class="std-series-grid">
      <div class="std-series-card">
        <div class="std-series-label">Single Venue</div>
        <h3>One Tap, Done Right</h3>
        <p>
          For individual bars and restaurants, DraftVerify can be implemented as a focused project around
          one or two NA taps.
        </p>
        <ul>
          <li>Fast mapping and installation.</li>
          <li>Simple staff training modules.</li>
          <li>Verification built into existing routines.</li>
        </ul>
      </div>

      <div class="std-series-card">
        <div class="std-series-label">Brewery Flagships</div>
        <h3>Showcase Installations</h3>
        <p>
          Breweries can use their own taprooms as flagship DraftVerify installs, setting expectations for
          partner venues and distributors.
        </p>
        <ul>
          <li>Reference layout for field teams.</li>
          <li>Live example for visitors and trade partners.</li>
          <li>A testbed for new NA draft practices.</li>
        </ul>
      </div>

      <div class="std-series-card">
        <div class="std-series-label">Chains &amp; Groups</div>
        <h3>Pilots and Rollouts</h3>
        <p>
          Groups start with a pilot set of locations, validate the workflow, then extend DraftVerify across
          the wider network with shared training and policy language.
        </p>
        <ul>
          <li>Defined pilot scope and success criteria.</li>
          <li>Template procedures for additional locations.</li>
          <li>Network-wide visibility on NA taps and checks.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section-sm">
  <div class="container">
    <div class="cta-band">
      <div>
        <div class="kicker">Ready to Map Your System</div>
        <h3 style="margin:.3rem 0 0;">Start with a simple discovery: map your NA taps and decide where DraftVerify fits.</h3>
      </div>
      <div>
        <a class="btn primary" href="{{ '/contact/' | relative_url }}">Request a Starter Kit</a>
        <a class="btn ghost" href="{{ '/solutions/' | relative_url }}" style="margin-left:8px;">See Who It’s For</a>
      </div>
    </div>
  </div>
</section>
