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
    <p style="max-width:840px">
      This form provides the details we need to configure DraftVerify for your taps.
      It takes 3–5 minutes and saves a lot of back-and-forth.
    </p>

    <div class="card" style="max-width:860px;margin:32px auto;padding:32px;">
      <h3>DraftVerify Onboarding Form</h3>

      <form action="https://formsubmit.co/info@draftverify.com"
            method="POST"
            class="dv-onboarding-form">

        <!-- FormSubmit config -->
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://www.draftverify.com/thank-you.html">
        <input type="hidden" name="_subject" value="DraftVerify Onboarding – New Submission">
        <input type="text" name="_honey" style="display:none">

        <!-- PROFILE -->
        <h4>Profile</h4>

        <div class="dv-two-col">
          <label>
            Organization type<br>
            <select id="orgType" name="role" required>
              <option value="Restaurant">Restaurant / Bar / Venue</option>
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
            Website or social link<br>
            <input type="text" name="website" placeholder="e.g. website or Instagram">
          </label>

          <label>
            Primary contact name<br>
            <input type="text" name="contact_name" required>
          </label>

          <label>
            Role / title<br>
            <input type="text" name="contact_role">
          </label>

          <label>
            Email<br>
            <input type="email" name="email" required>
          </label>

          <label>
            Phone<br>
            <input type="text" name="phone">
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

        <!-- RESTAURANT SECTION -->
        <div id="restaurantSection" class="conditional-section">
          <h4>Restaurant / Venue Draft Program</h4>

          <div class="dv-two-col">
            <label>
              Total taps on site<br>
              <input type="number" name="total_taps_restaurant" placeholder="e.g. 12">
            </label>

            <label>
              NA taps today<br>
              <input type="number" name="na_taps_restaurant" placeholder="e.g. 2">
            </label>

            <label>
              Monthly NA draft volume (kegs)<br>
              <input type="text" name="na_volume_restaurant" placeholder="e.g. 4–6">
            </label>

            <label>
              Suppliers<br>
              <input type="text" name="suppliers_restaurant">
            </label>

            <label>
              Line-cleaning frequency<br>
              <select name="cleaning_frequency_restaurant">
                <option value="">Select</option>
                <option>Every 1–2 weeks</option>
                <option>Every 3–4 weeks</option>
                <option>Less frequent</option>
              </select>
            </label>

            <label>
              Who manages your draft lines?<br>
              <select name="line_manager_restaurant">
                <option value="">Select</option>
                <option>In-house</option>
                <option>Third-party</option>
                <option>Shared</option>
              </select>
            </label>
          </div>
        </div>

        <!-- DISTRIBUTOR SECTION -->
        <div id="distributorSection" class="conditional-section">
          <h4>Distributor Details</h4>

          <div class="dv-two-col">
            <label>
              Territories served<br>
              <input type="text" name="territories_distributor">
            </label>

            <label>
              On-premise accounts served<br>
              <input type="number" name="accounts_distributor">
            </label>

            <label>
              Annual draft volume<br>
              <input type="text" name="annual_volume_distributor">
            </label>

            <label>
              Handle NA draft today?<br>
              <select name="handles_na_distributor">
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
                <option>Planning to add</option>
              </select>
            </label>
          </div>
        </div>

        <!-- BREWERY SECTION -->
        <div id="brewerySection" class="conditional-section">
          <h4>Brewery Details</h4>

          <div class="dv-two-col">
            <label>
              Annual production volume<br>
              <input type="text" name="production_brewery">
            </label>

            <label>
              NA share of production<br>
              <input type="text" name="na_share_brewery">
            </label>

            <label>
              Keg formats<br>
              <input type="text" name="keg_formats_brewery">
            </label>

            <label>
              Number of NA draft accounts<br>
              <input type="number" name="na_accounts_brewery">
            </label>
          </div>
        </div>

        <!-- FINAL QUESTIONS -->
        <h4>Your Goals</h4>

        <label>
          What do you want DraftVerify to help with?<br>
          <textarea name="goals" rows="3"></textarea>
        </label>

        <label>
          Additional notes<br>
          <textarea name="notes" rows="4"></textarea>
        </label>

        <button type="submit" class="btn gold">Submit Onboarding</button>
      </form>
    </div>
  </div>
</section>

<!-- CONDITIONAL LOGIC -->
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const orgType = document.getElementById("orgType");
    const restaurantSection = document.getElementById("restaurantSection");
    const distributorSection = document.getElementById("distributorSection");
    const brewerySection = document.getElementById("brewerySection");

    function updateVisibility() {
      const value = orgType.value;

      restaurantSection.style.display = value === "Restaurant" ? "block" : "none";
      distributorSection.style.display = value === "Distributor" ? "block" : "none";
      brewerySection.style.display = value === "Brewery" ? "block" : "none";
    }

    orgType.addEventListener("change", updateVisibility);
    updateVisibility();
  });
</script>

<style>
  .dv-onboarding-form {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  .dv-onboarding-form h4 {
    font-size: 18px;
    margin-top: 30px;
    margin-bottom: 4px;
    color: #0d3b66;
    font-weight: 700;
  }

  .dv-onboarding-form label {
    font-size: 16px;
    font-weight: 600;
    color: #0d3b66;
  }

  .dv-onboarding-form input,
  .dv-onboarding-form select,
  .dv-onboarding-form textarea {
    font-size: 16px;
    padding: 14px 16px;
    border-radius: 12px;
    border: 1px solid #ccc;
    width: 100%;
  }

  .dv-two-col {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 26px;
  }

  @media (max-width: 720px) {
    .dv-two-col {
      grid-template-columns: 1fr;
    }
  }

  .conditional-section {
    display: none;
  }

  .btn.gold {
    background: #bfa14a;
    color: #fff;
    padding: 16px 22px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
  }

  .btn.gold:hover {
    background: #a98f40;
    transform: translateY(-1px);
  }
</style>
