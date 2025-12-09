---
layout: default
title: "DraftVerify — The Global Standard for Non-Alcoholic Draft"
description: "The world’s first complete identity, verification, and traceability system for non-alcoholic draft — combining Keg Tags, NFC Coupler Tags, and the DraftVerify Registry."
---

<style>
/* FULL-WIDTH MOBILE IMAGES — OPTION A */
.fullwidth-img {
  width: 100%;
  max-width: 1200px;
  margin: 28px auto;
  display: block;
  border-radius: 18px;
}

/* On mobile, let images go truly edge-to-edge */
@media (max-width: 768px) {
  .fullwidth-img {
    width: 100vw;
    max-width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    border-radius: 0;
  }
}
</style>


<!-- HERO -->
<section style="padding:60px 0 40px;background:#ffffff;">
  <div class="container" style="max-width:760px;margin:0 auto;text-align:center;">

    <h1 style="font-size:2rem;line-height:1.3;margin-bottom:16px;">
      The Global Standard for Non-Alcoholic Draft
    </h1>

    <p style="font-size:1rem;color:#444;line-height:1.55;margin-bottom:32px;">
      Alcoholic draft has followed strict standards for decades. Non-alcoholic draft has none — and 
      mix-ups happen every day. DraftVerify establishes the world’s first identity and verification 
      system for NA draft, ensuring every keg is correctly connected and confidently served.
    </p>

    <!-- Clean Buttons -->
    <div style="display:flex;flex-direction:column;gap:14px;align-items:center;margin-bottom:20px;">

      <a href="{{ '/contact/' | relative_url }}" 
         class="btn primary"
         style="width:100%;max-width:280px;text-align:center;">
        Request a Starter Kit
      </a>

      <a href="https://www.draftverify.com/standards/" 
         class="btn gold"
         style="width:100%;max-width:280px;text-align:center;">
        View NA Draft Standard
      </a>

    </div>

  </div>

  <!-- HERO IMAGE (1.png) -->
  <img 
    src="{{ '/assets/1.png' | relative_url }}" 
    alt="DraftVerify app verifying a non-alcoholic keg connection"
    class="fullwidth-img">
</section>




<!-- WHY IT EXISTS -->
<section class="section center">
  <div class="container">
    <div class="kicker">Why It Exists</div>
    <h2 class="h2">The NA Draft Era Needs More Than Stickers</h2>

    <p style="max-width:820px;margin:0 auto;">
      NA beverages now sit on draft towers everywhere — but coolers, lines, and couplers were never 
      designed to keep NA identity clear. The #1 cause of NA draft mix-ups occurs at the coupler 
      connection, long before anyone pulls a handle. 
    </p>

    <!-- IMAGE 2: crowded cooler / keg stack (2.png) -->
    <img 
      src="{{ '/assets/2.png' | relative_url }}" 
      alt="Draft cooler full of stainless kegs showing why clear NA identity matters"
      class="fullwidth-img">

    <p style="max-width:820px;margin:30px auto 0;">
      DraftVerify replaces ad-hoc tape and handwriting with a unified identification and verification 
      system that keeps NA lines obvious and auditable from <strong>keg → coupler → line → faucet</strong>.
    </p>
  </div>
</section>




<!-- 3 PILLARS -->
<section class="section" style="background:#f7f9fc;">
  <div class="container center">
    <div class="kicker">The System</div>
    <h2 class="h2">The Three Pillars of DraftVerify</h2>

    <p style="max-width:780px;margin:0 auto 24px;">
      DraftVerify defines the minimum identification and verification requirements for any venue 
      serving non-alcoholic draft — creating clarity, consistency, and traceability across operations.
    </p>

    <div class="grid cols-3" style="margin-top:32px;">

      <div class="card reveal">
        <h3>Keg Tags</h3>
        <img 
          src="{{ '/assets/3.png' | relative_url }}" 
          alt="DraftVerify Keg Tag on a stainless keg"
          style="width:100%;max-width:140px;margin:12px auto 18px;display:block;">
        <p>
          Brewery-applied identity that clearly designates non-alcoholic kegs before they 
          ever enter shared cold storage.
        </p>
      </div>

      <div class="card reveal">
        <h3>NFC Coupler Tags</h3>
        <img 
          src="{{ '/assets/4.png' | relative_url }}" 
          alt="DraftVerify NFC Coupler Tag card held near a coupler"
          style="width:100%;max-width:140px;margin:12px auto 18px;display:block;">
        <p>
          A credit-card sized NFC tag that confirms the exact keg at the moment of connection — 
          where most mix-ups happen.
        </p>
      </div>

      <div class="card reveal">
        <h3>Digital Registry</h3>
        <img 
          src="{{ '/assets/5.png' | relative_url }}" 
          alt="DraftVerify Digital Registry interface on a screen"
          style="width:100%;max-width:160px;margin:12px auto 18px;display:block;">
        <p>
          A cloud registry that records verification events and gives multi-location visibility 
          into how NA draft is being served.
        </p>
      </div>

    </div>
  </div>
</section>




<!-- HOW IT WORKS -->
<section class="section">
  <div class="container">
    <div class="kicker">How It Works</div>
    <h2 class="h2">Identity That Follows the Entire Pathway</h2>

    <p>
      This procedure is designed to be performed in under 10 seconds on a busy night. Once a keg is 
      tagged and verified, its identity doesn’t rely on memory or handwriting — it follows the entire 
      system, end-to-end, through a consistent, repeatable routine:
    </p>

    <ol style="margin-top:20px;">
      <li>Keg arrives already designated as NA via Keg Tag.</li>
      <li>Staff scan the NFC Coupler Tag to confirm the correct keg before connecting.</li>
      <li>The chosen line is marked as NA and traced to the tower.</li>
      <li>The NA faucet is clearly identified for staff and guests.</li>
      <li>Verification logs are stored automatically in the DraftVerify Registry.</li>
    </ol>

    <p style="margin-top:20px;">
      The result is a system that’s easy to follow on busy nights and consistent across venues.
    </p>
  </div>
</section>




<!-- CTA -->
<section class="section-sm">
  <div class="container">
    <div class="cta-band reveal">
      <div>
        <div class="kicker">Get Started</div>
        <h3 style="margin:.3rem 0 0;">Equip your venue with the world’s first NA draft standard.</h3>
      </div>
      <div>
        <a class="btn primary" href="{{ '/contact/' | relative_url }}">Request a Starter Kit</a>
      </div>
    </div>
  </div>
</section>
