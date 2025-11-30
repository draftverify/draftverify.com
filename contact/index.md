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

  <!-- OPERATIONS & GOALS -->

  <h4>Operations & goals</h4>

  <label>
    Who manages your draft lines?<br>
    <select name="line_manager">
      <option value="" selected>Select one</option>
      <option>In-house team</option>
      <option>Third-party draft service</option>
      <option>Shared (brewery + venue)</option>
    </select>
  </label>

  <label>
    Typical line-cleaning frequency<br>
    <select name="cleaning_frequency">
      <option value="" selected>Select one</option>
      <option>Every 1–2 weeks</option>
      <option>Every 3–4 weeks</option>
      <option>Less frequent</option>
      <option>Varies by line / venue</option>
    </select>
  </label>

  <label>
    What are you hoping DraftVerify will help with?<br>
    <textarea name="goals" rows="3" placeholder="E.g. reduce risk of NA mix-ups, standardize across 3 venues…"></textarea>
  </label>

  <label>
    Anything else we should know?<br>
    <textarea name="notes" rows="4" placeholder="Optional context, timelines, or constraints."></textarea>
  </label>

  <label style="display:flex;align-items:flex-start;gap:8px;">
    <input type="checkbox" name="confirmed" required style="margin-top:4px;">
    <span>I confirm the information provided is accurate to the best of my knowledge.</span>
  </label>

  <!-- THIS is the submit button -->
  <button type="submit" class="btn gold">Submit onboarding details</button>
</form>
