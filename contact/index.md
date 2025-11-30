---
title: Contact
description: Get in touch with DraftVerify to start verification, request onboarding, or ask a question.
permalink: /contact/
layout: default
---

<section class="section">
  <div class="container">
    <div class="kicker">Contact</div>
    <h2 class="h2">Talk to DraftVerify</h2>
    <p>Send us a message and we’ll respond quickly with next steps.</p>

    <div class="card" style="max-width:720px;margin:32px auto;padding:32px;">

      <form action="https://formsubmit.co/info@draftverify.com"
            method="POST"
            class="dv-contact-form">

        <!-- FormSubmit config -->
        <input type="text" name="_honey" style="display:none">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://draftverify.com/thank-you.html">
        <input type="hidden" name="_subject" value="New DraftVerify Contact Message">

        <label>
          Your name<br>
          <input type="text" name="name" required>
        </label>

        <label>
          Email<br>
          <input type="email" name="email" required>
        </label>

        <label>
          Organization (optional)<br>
          <input type="text" name="org">
        </label>

        <label>
          Message<br>
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit" class="btn gold">Send Message</button>
      </form>

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
</style>
