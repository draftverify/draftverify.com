---
title: Contact
description: Get in touch with DraftVerify to start verification, request training, or ask a question.
---

<section class="section">
  <div class="container">
    <div class="kicker">Contact</div>
    <h2 class="h2">Talk to DraftVerify</h2>
    <p>Tell us about your venue(s), beverage categories, and timelines. We’ll respond quickly with next steps.</p>

    <div class="card" style="max-width:720px;margin:22px auto">
      <h3>Email</h3>
      <p><a class="btn primary" href="mailto:standards@draftverify.com">standards@draftverify.com</a></p>
      <p>Include your venue name, city, number of taps, and any details about your current draft setup.</p>
    </div>

    <div class="card" style="max-width:720px;margin:32px auto;padding:32px;">
      <h3>Contact & Onboarding Form</h3>

      <!-- Updated form action with BOTH inboxes -->
      <form action="https://formsubmit.co/info@draftverify.com,draftverify@outlook.com" method="POST" class="dv-contact-form">

        <!-- Honeypot for spam protection -->
        <input type="text" name="_honey" style="display:none">

        <!-- Disable CAPTCHA -->
        <input type="hidden" name="_captcha" value="false">

        <!-- Redirect to a thank-you page after submitting -->
        <input type="hidden" name="_next" value="https://draftverify.com/thank-you">

        <label>
          Name<br>
          <input type="text" name="name" required>
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
          Venue / Company<br>
          <input type="text" name="company" required>
        </label>

        <label>
          Country<br>
          <input type="text" name="country" required>
        </label>

        <label>
          City / Region<br>
          <input type="text" name="city" required>
        </label>

        <label>
          Number of taps (total)<br>
          <input type="text" name="taps" required>
        </label>

        <label>
          Do you currently serve non-alcoholic draft?<br>
          <select name="na_draft" required>
            <option value="" disabled selected>Select one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Planning to start">Planning to start</option>
          </select>
        </label>

        <label>
          What prompted your interest in DraftVerify?<br>
          <select name="reason" required>
            <option value="" disabled selected>Select one</option>
            <option value="Prevent contamination">Prevent contamination</option>
            <option value="Launch NA draft">Launch NA draft</option>
            <option value="Brewery/distributor recommendation">Brewery/distributor recommendation</option>
            <option value="Customer demand">Customer demand</option>
            <option value="Staff training">Staff training</option>
            <option value="Certification">Certification</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Anything else you want to share?<br>
          <textarea name="message" rows="4" placeholder="Tell us about your system, brands, or timelines..."></textarea>
        </label>

        <button type="submit" class="btn gold">Submit</button>
      </form>

    </div>
  </div>
</section>

<style>
  .dv-contact-form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .dv-contact-form label {
    font-weight: 600;
    color: #0d3b66;
    font-size: 15px;
  }

  .dv-contact-form input,
  .dv-contact-form select,
  .dv-contact-form textarea {
    width: 100%;
    margin-top: 6px;
    padding: 11px 13px;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 15px;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    box-sizing: border-box;
  }

  .dv-contact-form textarea {
    resize: vertical;
    min-height: 100px;
  }

  .dv-contact-form .btn.gold {
    margin-top: 8px;
    background: #BFA14A;
    color: #fff;
    padding: 13px 18px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: background 0.2s ease, transform 0.05s ease;
  }

  .dv-contact-form .btn.gold:hover {
    background: #a98f40;
    transform: translateY(-1px);
  }
</style>
