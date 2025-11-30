---
title: Onboarding
description: Start DraftVerify onboarding for venues, distributors, and breweries.
permalink: /onboarding/
layout: default
---

<section class="section">
  <div class="container">
    <div class="kicker">Onboarding</div>
    <h2 class="h2">Tell us about your draft program</h2>
    <p>This form gives us the details needed to configure DraftVerify for your taps. It takes 3–5 minutes.</p>

    <div class="card" style="max-width:860px;margin:32px auto;padding:32px;">
      <h3>DraftVerify Onboarding Form</h3>

      <form action="https://formsubmit.co/info@draftverify.com"
            method="POST"
            class="dv-onboarding-form">

        <!-- FormSubmit config -->
        <input type="text" name="_honey" style="display:none">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://draftverify.com/thank-you">
        <input type="hidden" name="_subject" value="DraftVerify Onboarding – New submission">

        <!-- PROFILE -->
        <h4>Profile</h4>

        <div class="dv-two-col">
          <label>
            Organization type<br>
            <select name="role" required>
              <option value="Restaurant / Bar / Venue">Restaurant / Bar / Venue</option>
              <option value="Distributor">Distributor</option>
              <option value="Brewery">Brewery</option>
            </select>
          </label>

          <label>
            Number of locations<br>
            <input type="number" name="locations" min="1" placeholder="e.g. 1">
          </label>

          <label>
            Country<br>
            <input type="text" name="country" placeholder="e.g. Canada" required>
          </label>
        </div>

        <!-- COMPANY & CONTACT -->
        <h4>Company & Contact</h4>

        <div class="dv-two-col">
          <label>
            Legal business name<br>
            <input type="text" name="legal_business_name" required>
          </label>

          <label>
            Trading / public name<br>
            <input type="text" name="trading_name">
          </label>

          <label>
            Website<br>
            <input type="url" name="website" placeholder="https://example.com">
          </label>

          <label>
            Primary contact name<br>
            <input type="text" name="contact_name" required>
          </label>

          <label>
            Role / title<br>
            <input type="text" name="contact_role" placeholder="e.g. General Manager">
          </label>

          <label>
            Email<br>
            <input type="email" name="email" required>
          </label>

          <label>
            Phone<br>
            <input type="text" name="phone" placeholder="+1 555 123 4567">
          </label>

          <label>
            Street address<br>
            <input type="text" name="street" required>
          </label>

          <label>
            City<br>
            <input type="text" name="city" required>
          </label>

          <label>
            Province / State<br>
            <input type="text" name="region">
          </label>

          <label>
            Postal / ZIP<br>
            <input type="text" name="postal">
          </label>
        </div>

        <!-- DRAFT PROGRAM -->
        <h4>Draft Program</h4>

        <div class="dv-two-col">
          <label>
            Total taps on site<br>
            <input type="number" name="total_taps" placeholder="e.g. 12">
          </label>

          <label>
            Non-alcoholic taps today<br>
            <input type="number" name="na_taps" placeholder="e.g. 2">
          </label>

          <label>
            Estimated monthly NA volume (kegs/month)<br>
            <input type="text" name="na_volume" placeholder="e.g. 4–6 kegs">
          </label>

          <label>
            Current beer / NA suppliers<br>
            <input type="text" name="suppliers" placeholder="e.g. Local brewery, Distributor X">
          </label>

          <label>
            POS system<br>
            <select name="pos_system">
              <option value="">Select POS</option>
              <option>Square</option>
              <option>Toast</option>
              <option>Lightspeed</option>
              <option>TouchBistro</option>
              <option>Other</option>
            </select>
          </label>
        </div>

        <!-- DISTRIBUTOR -->
        <h4>Distributor Details (if applicable)</h4>

        <div class="dv-two-col">
          <label>
            Territories served<br>
            <input type="text" name="territories">
          </label>

          <label>
            On-premise accounts served<br>
            <input type="number" name="on_premise_accounts">
          </label>

          <label>
            Annual draft volume<br>
            <input type="text" name="annual_draft_volume">
          </label>

          <label>
            Handle NA draft today?<br>
            <select name="handles_na_draft">
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
              <option>Planning to add</option>
            </select>
          </label>
        </div>

        <!-- BREWERY -->
        <h4>Brewery Details (if applicable)</h4>

        <div class="dv-two-col">
          <label>
            Annual production volume<br>
            <input type="text" name="annual_production">
          </label>

          <label>
            NA share of production<br>
            <input type="text" name="na_share">
          </label>

          <label>
            Keg formats<br>
            <input type="text" name="keg_formats" placeholder="e.g. 20L, 30L">
          </label>

          <label>
            Number of NA draft accounts<br>
            <input type="number" name="na_draft_accounts">
          </label>
        </div>

        <!-- OPS & GOALS -->
        <h4>Operations & Goals</h4>

        <div class="dv-two-col">
          <label>
            Who manages your draft lines?<br>
            <select name="line_manager">
              <option value="">Select</option>
              <option>In-house team</option>
              <option>Third-party service</option>
              <option>Shared</option>
            </select>
          </label>

          <label>
            Line-cleaning frequency<br>
            <select name="cleaning_frequency">
              <option value="">Select</option>
              <option>Every 1–2 weeks</option>
              <option>Every 3–4 weeks</option>
              <option>Less frequent</option>
              <option>Varies</option>
            </select>
          </label>
        </div>

        <label>
          What are you hoping DraftVerify will help with?<br>
          <textarea name="goals" rows="3"></textarea>
        </label>

        <label>
          Anything else we should know?<br>
          <textarea name="notes" rows="4"></textarea>
        </label>

        <label style="display:flex;align-items:flex-start;gap:8px;">
          <input type="checkbox" name="confirmed" required style="margin-top:4px;">
          <span>I confirm the information provided is accurate.</span>
        </label>

        <button type="submit" class="btn gold">Submit Onboarding</button>
      </form>
    </div>
  </div>
</section>

<style>
  /* GLOBAL FIXES FOR ONBOARDING UI/UX */
  .dv-onboarding-form {
    display: flex;
    flex-direction: column;
    gap: 26px !important;
  }

  .dv-onboarding-form h4 {
    font-size: 18px !important;
    font-weight: 700 !important;
    margin-top: 30px !important;
    margin-bottom: 4px !important;
    color: #0d3b66 !important;
  }

  .dv-onboarding-form label {
    font-size: 16px !important;
    font-weight: 600 !important;
    color: #0d3b66 !important;
  }

  .dv-onboarding-form input,
  .dv-onboarding-form select,
  .dv-onboarding-form textarea {
    font-size: 16px !important;
    padding: 14px 16px !important;
    border-radius: 12px !important;
    width: 100% !important;
    border: 1px solid #ccc !important;
    box-sizing: border-box !important;
  }

  .dv-onboarding-form textarea {
    min-height: 100px;
    resize: vertical;
  }

  .dv-onboarding-form .btn.gold {
    background: #BFA14A;
    padding: 16px 22px !important;
    border-radius: 12px !important;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 18px !important;
    cursor: pointer;
    transition: 0.2s ease;
  }

  .dv-onboarding-form .btn.gold:hover {
    background: #a98f40;
    transform: translateY(-1px);
  }

  .dv-two-col {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 26px !important;
  }

  @media (max-width: 720px) {
    .dv-two-col {
      grid-template-columns: 1fr !important;
    }
  }
</style>
