---
layout: default
title: "F-2 — Definitions, Scope & Terminology"
permalink: /docs/f-2/
description: "Core definitions, terminology, and scope used across all DraftVerify Standards."
---

<section class="section">
  <div class="container" style="max-width:820px">
    <div class="kicker">DraftVerify Standards Library · F-2</div>
    <h1>Definitions, Scope &amp; Terminology</h1>
    <p style="font-size:0.95rem;color:#6b7280;">
      Version: 1.0 · Publication Date: 2025-01-01 · Status: Active<br>
      © 2025 DraftVerify™ Standards Initiative. All rights reserved.
    </p>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">
    <h2 class="h2">1. Purpose of This Document</h2>
    <p>
      This document defines the <strong>official DraftVerify terminology</strong> used across all standards, SOPs,
      operational documents, and certification materials.
    </p>
    <p>
      All other DraftVerify documents reference and inherit definitions from this one. If any conflict in wording arises,
      the definitions in this document take precedence.
    </p>
    <p>Using consistent terminology ensures:</p>
    <ul>
      <li>Technical clarity</li>
      <li>Legal defensibility</li>
      <li>Alignment across breweries, distributors, venues, and auditors</li>
      <li>Enforceability of DraftVerify trademarks and copyrights</li>
      <li>Global standardization over time</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">
    <h2 class="h2">2. Foundational Terms</h2>

    <h3 class="h3">2.1 Non-Alcoholic (NA) Beverage</h3>
    <p>
      A beverage that meets the legal definition of non-alcoholic in the jurisdiction where it is served
      (e.g., ≤ 0.5% ABV in many markets).
    </p>

    <h3 class="h3">2.2 Alcoholic Beverage</h3>
    <p>
      Any beverage exceeding the jurisdiction’s legal threshold for non-alcoholic classification.
    </p>

    <h3 class="h3">2.3 NA Draft System</h3>
    <p>
      A draft system, or portion of a system, used to store, transport, and dispense NA beverages from keg to faucet.
    </p>

    <h3 class="h3">2.4 Mixed Draft Environment</h3>
    <p>
      Any venue where alcoholic and non-alcoholic draft beverages coexist in shared equipment, shared towers, shared cold
      rooms, or shared staff workflows.
    </p>

    <h3 class="h3">2.5 NA Draft Pathway</h3>
    <p>
      The continuous physical route taken by NA product from keg → coupler → line → tower (if present) → faucet. This is
      the central object being identified, protected, and verified by DraftVerify.
    </p>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">
    <h2 class="h2">3. Identity System Terms</h2>

    <h3 class="h3">3.1 Draft Identity Architecture (DIA)</h3>
    <p>
      The structured identity system used across all DraftVerify standards. It includes the physical identification layer,
      digital traceability layer, naming conventions, tag structures, and workflows that unify NA draft identity.
    </p>

    <h3 class="h3">3.2 DraftVerify Tag</h3>
    <p>
      A serialized identifier assigned to a DraftVerify connection point. Tags may be NFC-enabled, QR-enhanced (where
      applicable), or visual-only markers for redundancy. Each tag has a corresponding digital record in the DraftVerify
      Registry.
    </p>

    <h3 class="h3">3.3 Tag Activation</h3>
    <p>
      The process of digitally assigning a physical tag to a specific NA product, venue, connection point, and activation
      date. A tag is not considered valid until it is activated in the DraftVerify Registry.
    </p>

    <h3 class="h3">3.4 Identity Match</h3>
    <p>
      The condition where the keg, coupler, line, tower position, and faucet all reflect the same DraftVerify identity.
      Identity mismatch triggers a non-compliance condition.
    </p>

    <h3 class="h3">3.5 Identity Lockout</h3>
    <p>
      A digital or physical restriction applied to a tag, keg, line, or faucet that cannot be used for NA service until
      corrective action is taken and the identity is restored to a compliant state.
    </p>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">
    <h2 class="h2">4. Draft System Components</h2>

    <h3 class="h3">4.1 Keg Collar</h3>
    <p>
      A visual ring identifying the keg as NA. It may contain product name, batch information, serialization, and
      DraftVerify identity elements, as defined in the Keg Identification Standard.
    </p>

    <h3 class="h3">4.2 Coupler</h3>
    <p>
      The connector that mates the keg to the draft system. For DraftVerify purposes, couplers are key reference points
      for coupler tags, product switching events, and verification checkpoints.
    </p>

    <h3 class="h3">4.3 Beer Line</h3>
    <p>
      Tubing used to convey beverage from keg to tower. This may include jumpers, trunk lines, python bundles, wall
      chases, and manifolds.
    </p>

    <h3 class="h3">4.4 Faucet</h3>
    <p>
      The point of dispense. Faucets serving NA must include NA faucet identification marks and, where applicable,
      DraftVerify faucet tags. Faucet identity must align with keg and line identity.
    </p>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">
    <h2 class="h2">5. Digital System Terms</h2>

    <h3 class="h3">5.1 DraftVerify Registry</h3>
    <p>
      The authoritative digital database containing active and inactive tags, venue records, system configurations,
      verification logs, change logs, incident reports, and audit outcomes. The Registry is the final source of truth.
    </p>

    <h3 class="h3">5.2 Verification Event</h3>
    <p>
      A logged activity confirming that NA identity is intact, tags are present and correct, product matches the digital
      record, and no cross-contact or mis-serve risk exists. Verification may be daily, weekly, per-keg-change, or
      triggered by cleaning or modification events.
    </p>

    <h3 class="h3">5.3 System Configuration Record (SCR)</h3>
    <p>
      A structured record capturing the number of NA taps, system design, tower layout, line routing, identification
      plan, and verification schedule for a venue or group. SCRs support auditing and long-term traceability.
    </p>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">
    <h2 class="h2">6. Compliance &amp; Audit Terms</h2>

    <h3 class="h3">6.1 DraftVerify Compliance</h3>
    <p>
      The status of a venue, brewery, or distributor that meets all applicable sections of the DraftVerify Standard and
      associated SOPs for their role, as defined in the Compliance Audit Framework.
    </p>

    <h3 class="h3">6.2 Non-Compliance Condition</h3>
    <p>
      Any failure that breaks identity, recordkeeping, required verification, tag activation, physical identification
      visibility, or NA separation requirements.
    </p>

    <h3 class="h3">6.3 Corrective Action Event</h3>
    <p>
      A process triggered when non-compliance occurs. It includes documenting the issue, identifying the cause, locking
      out affected components, restoring compliance, and recording completion.
    </p>

    <h3 class="h3">6.4 Mis-Serve</h3>
    <p>
      Any instance where an alcoholic beverage is served through an NA faucet, served through an NA-marked line, or
      presented to a guest as NA when it is not. Mis-serves are treated as high-severity incidents.
    </p>

    <h3 class="h3">6.5 Cross-Contact</h3>
    <p>
      Any instance where alcoholic and NA products share pathways without proper cleaning and flushing, whether or not
      the product is served to a guest. Cross-contact incidents trigger immediate review and lockout of affected
      pathways.
    </p>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">
    <h2 class="h2">7. Operational Terms</h2>

    <h3 class="h3">7.1 Product Switching Event</h3>
    <p>
      Replacing one NA product with another on the same line. Requires updated tag activation, adherence to cleaning
      protocol, and a verification log entry.
    </p>

    <h3 class="h3">7.2 Line Reuse Event</h3>
    <p>
      Switching a line from alcoholic → NA or NA → alcoholic. Requires strict compliance with line reuse SOP, including
      cleaning, verification, and Registry updates.
    </p>

    <h3 class="h3">7.3 System Modification Event</h3>
    <p>
      Any changes to line routing, tower configuration, keg location, faucet reassignment, coupler type, or gas system
      that affect NA pathways. Requires re-verification, Registry update, and potential re-tagging.
    </p>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">
    <h2 class="h2">8. Scope of Application</h2>

    <h3 class="h3">8.1 Venues</h3>
    <p>
      Bars, restaurants, cafés, breweries, hotels, stadiums, retail growler stations, and multi-site groups that serve
      NA draft.
    </p>

    <h3 class="h3">8.2 Breweries</h3>
    <p>
      Producers of NA beverages responsible for keg preparation, batch record accuracy, keg identity application, and
      tag pre-programming (where applicable).
    </p>

    <h3 class="h3">8.3 Distributors</h3>
    <p>
      Parties responsible for transport, storage, cold chain protection, NA separation in warehouses and vehicles, and
      handoff documentation.
    </p>

    <h3 class="h3">8.4 Draft Technicians</h3>
    <p>
      Brewery staff, third-party technicians, or in-house venue technicians responsible for installation, line routing,
      faucet swaps, and system verification.
    </p>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">
    <h2 class="h2">9. Governance and Change Management</h2>

    <h3 class="h3">9.1 Document Authority</h3>
    <p>
      This Definitions document is authoritative over all other DraftVerify documents where terminology is concerned.
    </p>

    <h3 class="h3">9.2 Terminology Expansion</h3>
    <p>
      New terms may be added as technology evolves, new beverage categories adopt the standard, or new tag types are
      introduced.
    </p>

    <h3 class="h3">9.3 Term Conflicts</h3>
    <p>
      If two DraftVerify documents conflict in terminology, this document (F-2) prevails and the conflicting document
      must be updated.
    </p>

    <h3 class="h3">9.4 Revision Triggers</h3>
    <p>
      Revisions may be triggered by industry feedback, safety findings, technology updates, or legal and regulatory
      changes, as detailed further in the Revision &amp; Governance Policy.
    </p>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">
    <h2 class="h2">10. Copyright</h2>
    <p>
      This terminology, structure, and identity system is © 2025 DraftVerify Standards Initiative.
      It may not be copied, adapted, reworded, or used to create competing standards or derivative systems without
      express written permission.
    </p>
    <p>
      For permissions:<br>
      📧 <a href="mailto:legal@draftverify.com">legal@draftverify.com</a><br>
      🌐 <a href="{{ '/legal/' | relative_url }}">https://www.draftverify.com/legal/</a>
    </p>
  </div>
</section>
