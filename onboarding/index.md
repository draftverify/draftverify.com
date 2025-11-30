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
      <p style="color:#6b7280;font-size:14px;margin-top:4px;">
        Tell us who you are, how many taps you run, and what you need DraftVerify to help with.
      </p>

      <!-- FormSubmit form -->
      <!-- IMPORTANT: Replace YOUR_FORMSUBMIT_URL_HERE with your FormSubmit endpoint -->
      <form action="https://formsubmit.co/YOUR_FORMSUBMIT_URL_HERE" method="POST" id="dv-form">

        <!-- FormSubmit config -->
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_subject" value="New DraftVerify Onboarding Submission">
        <input type="hidden" name="_next" value="https://draftverify.com/thank-you.html">
        <input type="hidden" name="_cc" value="sales@draftverify.com">
        <input type="text" name="_honey" style="display:none">

        <!-- ROLE -->
        <h4 style="margin-top:24px;margin-bottom:8px;">Who are you?</h4>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-bottom:16px;">
          <div>
            <label>Organization type <span style="color:#eab308;font-size:11px;">Required</span></label>
            <select id="role" name="Role" required style="width:100%;margin-top:4px;">
              <option value="Restaurant / Bar / Venue">Restaurant / Bar / Venue</option>
              <option value="Distributor">Distributor</option>
              <option value="Brewery">Brewery</option>
            </select>
          </div>

          <div>
            <label>Number of locations</label>
            <input name="Locations" type="number" min="1" placeholder="e.g. 1" style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label>Country</label>
            <input name="Country" type="text" placeholder="e.g. Canada" style="width:100%;margin-top:4px;">
          </div>
        </div>

        <!-- COMPANY -->
        <h4 style="margin-top:24px;margin-bottom:8px;">Company & Contact</h4>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-bottom:16px;">
          <div>
            <label>Legal business name <span style="color:#eab308;font-size:11px;">Required</span></label>
            <input name="Legal Business Name" type="text" required placeholder="e.g. Norris Hospitality Inc." style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label>Trading / Public name</label>
            <input name="Trading Name" type="text" placeholder="e.g. Angel & Live Taproom" style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label>Website</label>
            <input name="Website" type="url" placeholder="https://example.com" style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label>Primary contact name <span style="color:#eab308;font-size:11px;">Required</span></label>
            <input name="Contact Name" type="text" required placeholder="Full name" style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label>Role / Title</label>
            <input name="Contact Role" type="text" placeholder="e.g. General Manager" style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label>Email <span style="color:#eab308;font-size:11px;">Required</span></label>
            <input name="email" type="email" required placeholder="name@company.com" style="width:100%;margin-top:4px;">
          </div>

          <div>
            <label>Phone</label>
            <input name="Phone" type="tel" placeholder="+1 555 123 4567" style="width:100%;margin-top:4px;">
          </div>
        </div>

        <!-- ADDRESS -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-bottom:16px;">
          <div>
            <label>Street address <span style="color:#eab308;font-size:11px;">Required</span></label>
            <input name="Street" required type="text" placeholder="123 Example Ave." style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label>City</label>
            <input name="City" type="text" placeholder="City" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label>Province / State</label>
            <input name="Province/State" type="text" placeholder="Province / State" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label>Postal / ZIP</label>
            <input name="Postal/ZIP" type="text" placeholder="Postal / ZIP" style="width:100%;margin-top:4px;">
          </div>
        </div>

        <!-- DRAFT PROGRAM -->
        <h4 style="margin-top:24px;margin-bottom:8px;">Draft Program Details</h4>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-bottom:16px;">
          <div>
            <label>Total taps on site</label>
            <input name="Total Taps" type="number" placeholder="e.g. 12" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label>Non-alcoholic taps today</label>
            <input name="NA Taps" type="number" placeholder="e.g. 2" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label>Estimated monthly NA volume</label>
            <input name="Estimated Monthly NA Volume" type="text" placeholder="e.g. 4–6 kegs/month" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label>Current suppliers</label>
            <input name="Suppliers" type="text" placeholder="e.g. Local brewery, Distributor X" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label>POS system</label>
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

        <!-- Distributor/Brewery Specific -->
        <h4 style="margin-top:24px;margin-bottom:8px;">Distributor / Brewery Details</h4>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-bottom:16px;">
          <div>
            <label>Territories served (if distributor)</label>
            <input name="Territories Served" type="text" placeholder="e.g. ON, QC, MI" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label>On-premise accounts served</label>
            <input name="On-premise Accounts Served" type="number" placeholder="e.g. 120" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label>Annual draft volume</label>
            <input name="Annual Draft Volume" type="text" placeholder="e.g. 2,500 kegs/year" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label>Handles NA draft?</label>
            <select name="Handles NA Draft" style="width:100%;margin-top:4px;">
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
              <option>Planning to add soon</option>
            </select>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-bottom:16px;">
          <div>
            <label>Annual production volume (brewery)</label>
            <input name="Annual Production Volume" type="text" placeholder="e.g. 5,000 hl/year" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label>NA share of production</label>
            <input name="NA Share" type="text" placeholder="e.g. 10% of total" style="width:100%;margin-top:4px;">
          </div>
          <div>
            <label>Brands produced</label>
            <input name="Brands" type="text" placeholder="e.g. Angel’s Edge, Live Lager" style="width:100%;margin-top:4px;">
          </div>
        </div>

        <!-- MESSAGE -->
        <label style="font-size:13px;font-weight:600;margin-top:16px;">Anything else we should know?</label>
        <textarea name="Message" rows="4" placeholder="Tell us about your program, timelines, or challenges…" style="width:100%;margin-top:4px;"></textarea>

        <!-- SUBMIT BUTTON -->
        <button type="submit" class="btn gold" style="margin-top:24px;width:100%;padding:14px;font-size:16px;">
          Submit Onboarding
        </button>

      </form>

    </div>
  </div>
</section>
