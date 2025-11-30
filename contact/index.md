---
title: Contact
description: Get in touch with DraftVerify to start verification, request training, or ask a question.
permalink: /contact/
layout: default
---

<section class="section">
  <div class="container">
    <div class="kicker">Contact</div>
    <h2 class="h2">Talk to DraftVerify</h2>
    <p>Tell us about your venue(s), beverage categories, and timelines. We’ll respond quickly with next steps.</p>

    <!-- CONTACT FORM CARD -->
    <div class="card" style="max-width:720px;margin:32px auto;padding:32px;">
      <h3>Contact Form</h3>

      <form action="https://formsubmit.co/info@draftverify.com"
            method="POST"
            class="dv-contact-form">

        <!-- FormSubmit config -->
        <input type="hidden" name="_captcha" value="false">

        <!-- EXACT REDIRECT YOU REQUESTED -->
        <input type="hidden" name="_next" value="https://www.draftverify.com/thank-you.html">

        <input type="hidden" name="_subject" value="New DraftVerify Contact Message">
        <input type="text" name="_honey" style="display:none">

        <label>
          Name<br>
          <input type="text" name="name" required>
        </label>

        <label>
          Email<br>
          <input type="email" name="email" required>
        </label>

        <label>
          Message<br>
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit" class="btn gold">Send Message</button>
      </form>
    </div>

    <!-- DIRECT EMAIL SECTION -->
    <div class="card" style="max-width:720px;margin:32px auto;padding:32px;text-align:center;">
      <h3>Email Us Directly</h3>
      <p>You can also reach us anytime at:</p>

      <p>
        <a href="mailto:info@draftverify.com" class="btn primary" style="margin-top:12px;">
          info@draftverify.com
        </a>
      </p>

      <p style="margin-top:12px;color:#0d3b66;font-weight:600;">
        Include your venue name, city, and number of taps for fastest response.
      </p>
    </div>

  </div>
</section>

<style>
  .dv-contact-form {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  .dv-contact-form label {
    font-size: 16px;
    font-weight: 600;
    color: #0d3b66;
  }

  .dv-contact-form input,
  .dv-contact-form textarea {
    font-size: 16px;
    padding: 14px 16px;
    border-radius: 12px;
    border: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
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

  .btn.primary {
    background: #0d3b66;
    color: #fff;
    padding: 14px 20px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
  }
  .btn.primary:hover {
    background: #0a2c4b;
  }
</style>
