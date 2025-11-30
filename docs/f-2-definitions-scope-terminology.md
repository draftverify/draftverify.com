---
layout: default
title: "F-2 — Definitions, Scope & Terminology"
permalink: /docs/f-2-definitions-scope-terminology/
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

## 1. Purpose of This Document

This document defines the **official DraftVerify terminology** used across all standards, SOPs, operational documents, and certification materials.

All other DraftVerify documents reference and inherit definitions from this one.  
If any conflict in wording arises, **this document takes precedence**.

Using consistent terminology ensures:

- technical clarity  
- legal defensibility  
- global standardization  
- enforceability of DraftVerify intellectual property  
- alignment across breweries, distributors, venues, and auditors  

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">

## 2. Foundational Terms

### 2.1 Non-Alcoholic (NA) Beverage  
A beverage that meets the legal definition of non-alcoholic in the jurisdiction where it is served  
(e.g., ≤ 0.5% ABV in many markets).

### 2.2 Alcoholic Beverage  
Any beverage exceeding the jurisdiction’s legal threshold for NA classification.

### 2.3 NA Draft System  
A draft system, or portion thereof, used to store, transport, and dispense NA beverages from keg to faucet.

### 2.4 Mixed Draft Environment  
Any environment where NA and alcoholic draft coexist—shared cold rooms, shared towers, shared equipment.

### 2.5 NA Draft Pathway  
The continuous physical route taken by NA product:  
**keg → coupler → line → tower → faucet**.

This is the primary object DraftVerify protects and verifies.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">

## 3. Identity System Terms

### 3.1 Draft Identity Architecture (DIA)  
The structured identity system underlying all DraftVerify standards, including:

- physical identification  
- digital traceability  
- tag structure  
- naming conventions  
- workflow definitions  

### 3.2 DraftVerify Tag  
A serialized identifier (NFC, QR, or visual-only) assigned to an NA connection point.  
Each tag has a corresponding **digital record** in the DraftVerify Registry.

### 3.3 Tag Activation  
Digital assignment of a physical tag to:

- a venue  
- a product  
- a connection point  
- an activation timestamp  

Inactive tags are **not valid**.

### 3.4 Identity Match  
Condition where keg → coupler → line → faucet all reflect the same DraftVerify identity.

Identity mismatch = **non-compliance**.

### 3.5 Identity Lockout  
State applied to a tag or component that cannot be used until corrective action restores compliance.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">

## 4. Draft System Components

### 4.1 Keg Collar  
A required visual identifier marking a keg as NA, containing:

- product identity  
- batch information  
- serialization  
- DraftVerify indicators  

### 4.2 Coupler  
The connector that mates keg to system.  
A key reference point for:

- coupler tagging  
- switching logs  
- verification checks  

### 4.3 Beer Line  
Tubing transporting beverage from keg to tower; includes:

- jumpers  
- trunk lines  
- python bundles  
- wall chases  
- manifolds  

### 4.4 Faucet  
The dispense point.  
Faucets serving NA must carry required DraftVerify identification.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">

## 5. Digital System Terms

### 5.1 DraftVerify Registry  
The authoritative database recording:

- active tags  
- inactive tags  
- system configurations  
- verification events  
- cleaning and change logs  
- incident reports  
- audit outcomes  

The Registry is **the final source of truth**.

### 5.2 Verification Event  
A logged confirmation that:

- NA identity is intact  
- tags are present and correct  
- product matches the Registry  
- no cross-contact or mis-serve risk exists  

Verification events occur:

- daily  
- weekly  
- per-keg-change  
- after cleaning  
- during system modification  

### 5.3 System Configuration Record (SCR)  
A structured record containing:

- number of NA taps  
- tower layout  
- line routing  
- identification plan  
- verification schedule  

Required for all DraftVerify-compliant venues.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">

## 6. Compliance & Audit Terms

### 6.1 DraftVerify Compliance  
Status of any operator fully meeting applicable sections of the DraftVerify Standard and SOPs.

### 6.2 Non-Compliance Condition  
Any condition that breaks:

- identity  
- recordkeeping  
- tag activation  
- required verification  
- NA separation  
- physical visibility requirements  

### 6.3 Corrective Action Event  
Triggered when non-compliance occurs. Includes:

- documentation  
- cause identification  
- lockout of affected components  
- restoration of compliance  
- logging completion  

### 6.4 Mis-Serve  
Serving alcoholic product as NA, whether intentional or accidental.  
Highest-severity incident category.

### 6.5 Cross-Contact  
Alcoholic and NA products sharing pathways without proper cleaning—even if not served.

Triggers immediate lockout.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">

## 7. Operational Terms

### 7.1 Product Switching Event  
Replacing one NA product with another on the same line.  
Requires:

- cleaning  
- reactivation  
- verification logging  

### 7.2 Line Reuse Event  
Switching a line from alcoholic → NA or NA → alcoholic.  
Requires strict compliance with:

- line reuse SOP  
- cleaning  
- digital verification  
- Registry updates  

### 7.3 System Modification Event  
Any change to routing, tower layout, faucets, gas system, couplers, or keg positions.  
Triggers re-verification and potential re-tagging.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">

## 8. Scope of Application

### 8.1 Venues  
Bars, restaurants, cafés, breweries, stadiums, hotels, retail stations, and multi-site groups.

### 8.2 Breweries  
Responsible for:

- keg prep  
- batch accuracy  
- identity application  
- tag pre-programming (when applicable)  

### 8.3 Distributors  
Responsible for:

- cold chain continuity  
- separation of NA in storage  
- proper handoff documentation  
- maintaining identity integrity  

### 8.4 Draft Technicians  
Responsible for:

- installation  
- routing  
- faucet assignment  
- verification checks  

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">

## 9. Governance & Change Management

### 9.1 Document Authority  
This document overrides all other DraftVerify documents in cases of terminology conflict.

### 9.2 Terminology Expansion  
New terms may be added as technology and field usage evolve.

### 9.3 Term Conflicts  
If two DraftVerify documents conflict,  
**F-2 prevails**.

### 9.4 Revision Triggers  
Updates may occur due to:

- field feedback  
- safety findings  
- technology changes  
- legal/regulatory changes  

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px">

## 10. Copyright

This terminology, structure, and identity system is  
**© 2025 DraftVerify Standards Initiative**.

It may **not** be copied, adapted, rewritten, or used to create competing standards or derivative systems.

For permissions:  
📧 legal@draftverify.com  
🌐 https://www.draftverify.com/legal/

  </div>
</section>
