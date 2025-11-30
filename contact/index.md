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
    <p>Share a few details about your organization, taps, and goals. We’ll review the info and follow up with next steps for DraftVerify deployment.</p>

    <div class="card" style="max-width:720px;margin:32px auto;padding:32px;">
      <h3>DraftVerify Onboarding Form</h3>

      <form action="https://formsubmit.co/info@draftverify.com"
            method="POST"
            class="dv-contact-form">

        <!-- Honeypot for spam protection -->
        <input type="text" name="_honey" style="display:none">

        <!-- Disable CAPTCHA -->
        <input type="hidden" name="_captcha" value="false">

        <!-- Redirect to a thank-you page after submitting -->
        <input type="hidden" name="_next" value="https://draftverify.com/thank-you">

        <!-- Set a clear subject line for rules/automation -->
        <input type="hidden" name="_subject" value="DraftVerify Onboarding – New submission">

        <!-- PROFILE -->
        <h4>Profile</h4>

        <label>
          Organization type<br>
          <select name="role" required>
            <option value="Restaurant / Bar / Venue" selected>Restaurant / Bar / Venue</option>
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

        <!-- COMPANY & CONTACT -->
        <h4>Company & contact</h4>

        <label>
          Legal business name<br>
          <input type="text" name="legal_business_name" placeholder="e.g. Norris Hospitality Inc." required>
        </label>

        <label>
          Trading / public name<br>
          <input type="text" name="trading_name" placeholder="e.g. Angel & Live Taproom">
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
          Phone (with country code)<br>
          <input type="text" name="phone" placeholder="+1 647 555 1234">
        </label>

        <label>
          Street address<br>
          <input type="text" name="street" placeholder="123 Example Ave." required>
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
          Postal / ZIP code<br>
          <input type="text" name="postal">
        </label>

        <!-- DRAFT PROGRAM -->
        <h4>Draft program</h4>

        <label>
          Total taps on site<br>
          <input type="number" name="total_taps" min="0" placeholder="e.g. 12">
        </label>

        <label>
          Non-alcoholic taps today<br>
          <input type="number" name="na_taps" min="0" placeholder="e.g. 2">
        </label>

        <label>
          Estimated monthly NA draft volume (kegs/month)<br>
          <input type="text" name="na_volume" placeholder="e.g. 4–6 kegs/month">
        </label>

        <label>
          Current beer / NA suppliers<br>
          <input type="text" name="suppliers" placeholder="e.g. Local brewery, Distributor X">
        </label>

        <label>
          POS system<br>
          <select name="pos_system">
            <option value="" selected>Select POS</option>
            <option>Square</option>
            <option>Toast</option>
            <option>Lightspeed</option>
            <option>TouchBistro</option>
            <option>Other</option>
          </select>
        </label>

        <!-- Distributor-specific (optional) -->
        <h4>Distributor details (if applicable)</h4>

        <label>
          Territories served<br>
          <input type="text" name="territories" placeholder="e.g. ON, QC, MI">
        </label>

        <label>
          On-premise accounts served (approx.)<br>
          <input type="number" name="on_premise_accounts" min="0" placeholder="e.g. 120">
        </label>

        <label>
          Annual draft volume<br>
          <input type="text" name="annual_draft_volume" placeholder="e.g. 2,500 kegs/year">
        </label>

        <label>
          Do you currently handle non-alcoholic draft?<br>
          <select name="handles_na_draft">
            <option value="" disabled selected>Select one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Planning to add soon">Planning to add soon</option>
          </select>
        </label>

        <!-- Brewery-specific (optional) -->
        <h4>Brewery details (if applicable)</h4>

        <label>
          Annual production volume<br>
          <input type="text" name="annual_production" placeholder="e.g. 5,000 hl/year">
        </label>

        <label>
          Non-alcoholic share of production<br>
          <input type="text" name="na_share" placeholder="e.g. 10% of total">
        </label>

        <label>
          Draft formats (keg sizes)<br>
          <input type="text" name="keg_formats" placeholder="e.g. 20L, 30L">
        </label>

        <label>
          Number of NA draft accounts<br>
          <input type="number" name="na_draft_accounts" min="0" placeholder="e.g. 18">
        </label>

        <!-- OPERATIONS & GOALS -->
        <h4>Operations & goals</h4>

        <label>
          Who manages your draft lines?<br>
          <select name="line_manager">
            <option value="" selected>Select one</option>
            <option>In-house team</option>
            <option>Third-party draft service</option>
            <option>Shared (brewery + venue)</opt
