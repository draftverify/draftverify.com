---
layout: default
title: "NA Draft Service Operations Standard — DraftVerify"
description: "The operational standard governing how non-alcoholic beverages shall be identified, connected, verified, and served on draft, including mandatory NFC-enabled coupler tagging and the DraftVerify digital registry."
permalink: /cornerstone/how-to-serve-na-beer-on-tap/
---

<!-- HERO -->
<section class="hero hero-simple">
  <div class="container">
    <div class="hero-card reveal">
      <h1>NA Draft Service Operations Standard</h1>
      <p>
        The operational standard for safely connecting, identifying, verifying, and serving 
        non-alcoholic beverages on draft — including mandatory NFC-enabled Coupler Tags and the 
        DraftVerify Identification Pathway as defined in the DraftVerify Standard v1.0.
      </p>
    </div>
  </div>
</section>

<!-- OVERVIEW -->
<section class="section center">
  <div class="container">
    <div class="kicker">Overview</div>
    <h2 class="h2">Why NA Draft Requires a Modern, Verified Service Standard</h2>
    <p style="max-width:820px;margin:0 auto">
      Non-alcoholic (NA) draft introduces unique operational risks: misconnection at the coupler, 
      keg mix-ups in shared coolers, incorrect faucet routing, and the possibility of alcoholic 
      product being dispensed to a guest expecting NA.  
      These risks cannot be mitigated through visual labeling alone — a digital verification layer 
      is required.
    </p>

    <p style="max-width:820px;margin:20px auto 0;">
      This standard establishes the mandatory identification, coupler tagging, NFC authentication, 
      and verification procedures required to safely serve NA products on draft.  
      <strong>The only currently recognized system capable of meeting these requirements is DraftVerify.</strong>
    </p>
  </div>
</section>

<!-- 1. PURPOSE & SCOPE -->
<section class="section" id="purpose">
  <div class="container">
    <div class="kicker">1. Purpose & Scope</div>
    <h2 class="h2">What This Standard Establishes</h2>

    <h3>1.1 Purpose</h3>
    <p>
      To define the operational controls necessary to ensure beverages represented as non-alcoholic 
      are dispensed from draft systems free from contamination, misconnection, or misidentification.  
      This includes the required use of NFC-enabled identification hardware and the DraftVerify 
      Registry for digital verification.
    </p>

    <h3>1.2 Scope</h3>
    <ul>
      <li>All draft lines used to dispense NA beverages (beer, cocktails, RTDs, kombucha, nitro drinks)</li>
      <li>Bars, taprooms, restaurants, hotels, breweries, distributors, and multi-site operators</li>
      <li>All staff who handle, connect, or verify NA draft equipment</li>
    </ul>

    <p>
      The requirements of this document apply only when the DraftVerify Identification Pathway 
      and NFC-enabled Coupler Tag system are present.  
      Alternative methods do not meet the operational controls defined herein.
    </p>
  </div>
</section>

<!-- 2. SYSTEM DESIGN REQUIREMENTS -->
<section class="section" id="design" style="background:#f7f9fc">
  <div class="container">
    <div class="kicker">2. System Design Requirements</div>
    <h2 class="h2">How an NA Draft Line Shall Be Configured</h2>

    <h3>2.1 Dedicated or Controlled Lines</h3>
    <ul>
      <li>Lines intended for NA service shall be dedicated where feasible.</li>
      <li>If a line transitions between alcoholic and NA service, it shall undergo complete cleaning, 
        documentation, and digital re-verification before NA use.</li>
      <li>NA kegs shall be stored in defined cooler zones whenever site layout permits.</li>
    </ul>

    <h3>2.2 Mandatory Coupler Control</h3>
    <p>
      The coupler represents the highest-risk connection point for NA misidentification.  
      Therefore, all NA kegs <strong>must use a DraftVerify Coupler Tag containing an NFC-enabled 
      cryptographically unique ID.</strong>
    </p>
    <ul>
      <li>The Coupler Tag shall be attached at the keg’s connection point before delivery.</li>
      <li>The NFC ID shall correspond to the keg’s digital record in the DraftVerify Registry.</li>
      <li>The Coupler Tag shall remain attached for the entire service life of the keg.</li>
      <li>Venues shall not remove, alter, or reassign Coupler Tags.</li>
    </ul>

    <p>
      <strong>Coupler Tags are mandatory.</strong> Without them, the operational requirements of this 
      standard cannot be fulfilled.
    </p>
  </div>
</section>

<!-- 3. IDENTIFICATION PATHWAY -->
<section class="section" id="identification">
  <div class="container">
    <div class="kicker">3. Identification Pathway</div>
    <h2 class="h2">The Required Keg → Coupler → Line → Faucet Identification System</h2>

    <p>
      All NA draft service shall use the unified DraftVerify Identification Pathway.  
      This system ensures that every point in the draft chain communicates the same identity.
    </p>

    <div class="grid cols-4" style="margin-top:22px">
      <div class="card reveal">
        <h3>3.1 Keg Tag</h3>
        <p>
          Identifies the keg’s NA status, product name, batch data, and digital NFC ID (optional).
        </p>
      </div>

      <div class="card reveal">
        <h3>3.2 Coupler Tag (NFC)</h3>
        <p>
          Mandatory.  
          Cryptographically unique NFC ID scanned before each connection to confirm product identity.
        </p>
      </div>

      <div class="card reveal">
        <h3>3.3 Line Marker</h3>
        <p>
          Indicates correct routing from keg to tower, matching the Coupler Tag’s product identity.
        </p>
      </div>

      <div class="card reveal">
        <h3>3.4 Faucet Sticker</h3>
        <p>
          Identifies NA status at point of pour to staff and guests.
        </p>
      </div>
    </div>

    <p style="margin-top:20px;">
      All four components shall match the same product record in the DraftVerify Registry.
    </p>
  </div>
</section>

<!-- 4. NFC-BASED VERIFICATION -->
<section class="section" id="nfc" style="background:#f7f9fc">
  <div class="container">
    <div class="kicker">4. NFC-Based Verification Requirements</div>
    <h2 class="h2">Digital Confirmation of NA Draft Integrity</h2>

    <p>
      Staff shall perform NFC-based verification at the following points:
    </p>

    <ol>
      <li><strong>Before connecting the keg</strong> — scan the Coupler Tag to confirm identity.</li>
      <li><strong>After attaching the coupler</strong> — confirm the connected keg matches the line marker.</li>
      <li><strong>At the start of each service period</strong> — verify NA taps via NFC scan.</li>
      <li><strong>After any product change</strong> — document in the DraftVerify Registry.</li>
    </ol>

    <p>
      NFC verification shall be logged automatically with timestamp, staff ID, and line identity.
    </p>
  </div>
</section>

<!-- 5. DAILY SERVICE VERIFICATION -->
<section class="section" id="daily">
  <div class="container">
    <div class="kicker">5. Daily Verification</div>
    <h2 class="h2">The Required 60-Second NA Draft Verification Cycle</h2>

    <ol>
      <li>Scan the Coupler Tag (NFC) — confirm correct product.</li>
      <li>Trace the Line Marker — ensure routing matches the Registry.</li>
      <li>Inspect Faucet Sticker — confirm NA identity at point of pour.</li>
      <li>Perform a test pour if appropriate.</li>
      <li>Log verification in the DraftVerify Registry.</li>
    </ol>

    <p>
      If any element fails verification, the tap shall be treated as alcoholic until corrected.
    </p>
  </div>
</section>

<!-- 6. STAFF BEHAVIOUR REQUIREMENTS -->
<section class="section" id="training" style="background:#f7f9fc">
  <div class="container">
    <div class="kicker">6. Staff Behaviour Requirements</div>
    <h2 class="h2">Operational Expectations for NA Draft Service</h2>

    <ul>
      <li>Staff shall never assume a tap is NA without full identification and NFC verification.</li>
      <li>Any uncertainty shall pause service from that tap immediately.</li>
      <li>Staff shall not connect or reconnect NA kegs without scanning the Coupler Tag.</li>
      <li>Incidents shall be reported and logged without delay.</li>
    </ul>

    <blockquote style="margin-top:18px;">
      If you are not 100% certain the tap is non-alcoholic,  
      <strong>treat it as alcoholic until verified.</strong>
    </blockquote>
  </div>
</section>

<!-- 7. INCIDENT RESPONSE -->
<section class="section" id="incident">
  <div class="container">
    <div class="kicker">7. Incident Response</div>
    <h2 class="h2">What Shall Happen If Misidentification Is Suspected</h2>

    <ol>
      <li>Pause service immediately.</li>
      <li>Label the affected keg, line, or faucet as “Out of Service”.</li>
      <li>Scan Coupler Tag to confirm correct product.</li>
      <li>Trace routing from keg → tower → faucet.</li>
      <li>Flush and clean the line if misconnection is found.</li>
      <li>Rebuild the Identification Pathway if needed.</li>
      <li>Perform NFC verification and restore service only after compliance is confirmed.</li>
    </ol>

    <p>
      During investigation, use of “DraftVerify Certified” status for the affected line is suspended.
    </p>
  </div>
</section>

<!-- 8. CONFORMANCE -->
<section class="section center" id="conformance">
  <div class="container">
    <div class="kicker">8. Conformance</div>
    <h2 class="h2">Achieving Compliance With This Standard</h2>
    <p style="max-width:820px;margin:0 auto">
      Compliance with this standard requires the use of:  
      <strong>NFC-enabled Coupler Tags, Keg Tags, Line Markers, Faucet Stickers, and the DraftVerify Registry.</strong>
    </p>
    <p style="max-width:820px;margin:10px auto 0;">
      At the time of publication, the only system capable of meeting these operational, digital, 
      and identification requirements is <strong>DraftVerify</strong>.
    </p>
  </div>
</section>
