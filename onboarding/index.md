---
title: Onboarding
description: Start DraftVerify onboarding for venues, distributors, and breweries.
permalink: /onboarding/
layout: default
---

<section class="section">
  <div class="container">

    <div class="kicker">Start Verification</div>
    <h2 class="h2">Tell us about your draft program</h2>
    <p style="max-width:840px">
      This onboarding form gives us the details we need to configure DraftVerify for your taps.
      It takes about 3–5 minutes and saves a lot of back-and-forth emails.
    </p>

    <div class="card" style="max-width:860px;margin:32px auto;padding:32px;">
      <h3>DraftVerify Onboarding Form</h3>
      <p style="color:var(--muted,#6b7280);font-size:14px;margin-top:4px;">
        Tell us who you are, how many taps you run, and what you need DraftVerify to help with.
      </p>

      <!-- FormSubmit form -->
      <!-- Replace YOUR_FORMSUBMIT_URL_HERE with the URL FormSubmit gives you -->
      <form action="https://formsubmit.co/YOUR_FORMSUBMIT_URL_HERE" method="POST">

        <!-- FormSubmit config -->
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_subject" value="New DraftVerify Onboarding Submission">
        <!-- Change this to your real thank-you page if you like -->
        <input type="hidden" name="_next" value="https://www.draftverify.com/thanks/">
        <!-- Optional CC; remove if you don't need it -->
        <input type="hidden" name="_cc" value="sales@draftverify.com">
        <!-- Honeypot spam trap -->
        <input type="text" name="_honey" style="display:none">

        <!-- PROFILE -->
        <h4 style="margin-top:24px;margin-bottom:8px;">Profile</h4>
        <p style="font-size:13px;color:var(--muted,#6b7280);margin-top:0;margin-bottom:16px;">
          Pick the option that best describes you.
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-bottom:16px;">
          <div>
            <label for="role" style="font-size:13px;font-weight:600;">Organization type <span style="color:#eab308;font-size:11px;text-transform:uppercase;letter-spacing:.12em;">Required</span></label>
            <select id="role" name="Role" required style="width:100%;margin-top:4px;">
              <option value="Restaurant / Bar / Venue" selected>Restaurant / Bar / Venue</option>
              <option value="Distributor">Distributor</option>
              <option value="Brewery">Brewery</option>
            </select>
          </div>

          <div>
            <label for="locations" style="font-size:13px;font-weight:600;">Number of locations</label>
            <input id="locations" name="Locations" type="number" min="1" placeholder="e.g. 1" style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label for="country" style="font-size:13px;font-weight:600;">Country</label>
            <input id="country" name="Country" type="text" placeholder="e.g. Canada" style="width:100%;margin-top:4px;">
          </div>
        </div>

        <!-- COMPANY -->
        <h4 style="margin-top:24px;margin-bottom:8px;">Company & contact</h4>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-bottom:16px;">
          <div>
            <label style="font-size:13px;font-weight:600;">Legal business name
              <span style="color:#eab308;font-size:11px;text-transform:uppercase;letter-spacing:.12em;">Required</span>
            </label>
            <input name="Legal Business Name" type="text" placeholder="e.g. Norris Hospitality Inc." required style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label style="font-size:13px;font-weight:600;">Trading / public name</label>
            <input name="Trading Name" type="text" placeholder="e.g. Angel & Live Taproom" style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label style="font-size:13px;font-weight:600;">Website</label>
            <input name="Website" type="url" placeholder="https://example.com" style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label style="font-size:13px;font-weight:600;">Primary contact name
              <span style="color:#eab308;font-size:11px;text-transform:uppercase;letter-spacing:.12em;">Required</span>
            </label>
            <input name="Contact Name" type="text" placeholder="Your full name" required style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label style="font-size:13px;font-weight:600;">Role / title</label>
            <input name="Contact Role" type="text" placeholder="e.g. General Manager" style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label style="font-size:13px;font-weight:600;">Email
              <span style="color:#eab308;font-size:11px;text-transform:uppercase;letter-spacing:.12em;">Required</span>
            </label>
            <input name="email" type="email" placeholder="name@company.com" required style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label style="font-size:13px;font-weight:600;">Phone</label>
            <input name="Phone" type="tel" placeholder="+1 555 123 4567" style="width:100%;margin-top:4px;">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-bottom:16px;">
          <div>
            <label style="font-size:13px;font-weight:600;">Street address
              <span style="color:#eab308;font-size:11px;text-transform:uppercase;letter-spacing:.12em;">Required</span>
            </label>
            <input name="Street" type="text" placeholder="123 Example Ave." required style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;">City</label>
            <input name="City" type="text" placeholder="City" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;">Province / State</label>
            <input name="Province/State" type="text" placeholder="Province / State" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;">Postal / ZIP</label>
            <input name="Postal/ZIP" type="text" placeholder="Postal / ZIP" style="width:100%;margin-top:4px;">
          </div>
        </div>

        <!-- DRAFT PROGRAM -->
        <h4 style="margin-top:24px;margin-bottom:8px;">Draft program</h4>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-bottom:16px;">
          <div>
            <label style="font-size:13px;font-weight:600;">Total taps on site</label>
            <input name="Total Taps" type="number" min="0" placeholder="e.g. 12" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;">Non-alcoholic taps today</label>
            <input name="NA Taps" type="number" min="0" placeholder="e.g. 2" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;">Estimated monthly NA volume</label>
            <input name="Estimated Monthly NA Volume" type="text" placeholder="e.g. 4–6 kegs/month" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;">Current beer / NA suppliers</label>
            <input name="Suppliers" type="text" placeholder="e.g. Local brewery, Distributor X" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;">POS system</label>
            <select name="POS System" style="width:100%;margin-top:4px;">
              <option value="">Select POS</option>
              <option>Square</option>
              <option>Toast</option>
              <option>Lightspeed</option>
              <option>TouchBistro</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <!-- Distributor / brewery specifics (optional fields; fine if blank) -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-bottom:16px;">
          <div>
            <label style="font-size:13px;font-weight:600;">Territories served (if distributor)</label>
            <input name="Territories Served" type="text" placeholder="e.g. ON, QC, MI" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;">On-premise accounts served</label>
            <input name="On-premise Accounts Served" type="number" min="0" placeholder="e.g. 120" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;">Annual draft volume</label>
            <input name="Annual Draft Volume" type="text" placeholder="e.g. 2,500 kegs/year" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;">Handles NA draft?</label>
            <select name="Handles NA Draft" style="width:100%;margin-top:4px;">
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
              <option>Planning to add soon</option>
            </select>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-bottom:16px;">
          <div>
            <label style="font-size:13px;font-weight:600;">Annual production volume (if brewery)</label>
            <input name="Annual Production Volume" type="text" placeholder="e.g. 5,000 hl/year" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;">NA share of production</label>
            <input name="NA Share" type="text" placeholder="e.g. 10% of total" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <lab
