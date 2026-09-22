---
layout: default
title: "F-7 — Coupler Tag Standard"
permalink: /docs/coupler-tags/
description: "The DraftVerify Standard for NFC-enabled coupler tagging, ensuring accurate product identification at the exact moment a keg is connected."
---

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-7</div>

# Coupler Tag Standard

<p style="font-size:0.95rem;color:#6b7280;">
Version: 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2026 DraftVerify™ Standards Initiative. All rights reserved.
</p>

> **Document control — DV v2.0 · Normative Physical/Digital Identity Requirement.** Requirements expressed using **shall** are mandatory where applicable to a claim of DraftVerify conformity. **Should** indicates a recommendation; **may** permission; **can** capability or possibility. DraftVerify is a private, voluntary standard and certification program. It is not legislation, government approval, or regulatory accreditation. Public access to this document grants no licence to use DraftVerify marks or to reproduce, adapt, redistribute, translate, or commercially incorporate substantial protected expression except as permitted by law or written licence.


The coupler is the **single most critical control point** in the entire draft workflow.  
The Coupler Tag provides a permanent, verifiable, cryptographically unique identity at the **exact moment a keg is connected** — ensuring what is tapped is exactly what it claims to be.

This Standard exists to eliminate tapping errors, prevent NA mis-serves, and provide a digital audit trail for operators.

---

## 1. Purpose

This Standard establishes:

- a **tamper-resistant digital identity point**  
- product confirmation *before* tapping  
- unified tagging across breweries, distributors, and venues  
- verification that takes **under 2 seconds**  
- an audit log proving correct tapping behavior  

---

## 2. Scope

This Standard applies to:

- breweries producing NA draft  
- distributors handling NA kegs  
- venues serving NA products on tap  
- any DraftVerify-certified operator  

Optional (recommended):

- alcoholic brands requiring identity protection  
- premium products needing traceability  

This Standard defines:

- tag hardware  
- NFC encoding  
- URL format  
- registry mapping  
- placement rules  
- verification workflow  
- compliance criteria  

---

## 3. Hardware Requirements

Coupler Tags shall:

- use NFC-enabled chipsets (NTAG213 or better)  
- include DraftVerify NA banding for NA products  
- withstand cold storage, condensation, and abrasion  
- use permanent or tamper-resistant adhesive or rings  
- remain readable from 1–2 cm  

Tags shall meet durability requirements described in **F-6 — Keg Identification Standard**.

---

## 4. Placement Requirements

The Coupler Tag shall be placed:

- directly beside the **spear/coupler flange**  
- within **25 mm** of the engagement point  
- fully visible to operators during changeover  
- unobstructed by clamps, tape, or hoses  

Incorrect placement constitutes a compliance failure.

---

## 5. Identity & URL Structure

Every coupler tag encodes a DraftVerify verification URL:

`https://verify.draftverify.com/t/{TAG-ID}`

Scanning this URL displays:

- brewery name  
- product identity  
- NA/alcoholic classification  
- tag status (active / inactive / retired)  
- optional venue-level verification logging  

**TAG-ID** characteristics:

- globally unique  
- cryptographically generated  
- permanently assigned  
- never reused or reassigned  

---

## 6. Programming & Assignment

### 6.1 Centralized Programming (v1.0 Standard)
For v1.0:

- all tags are pre-programmed by DraftVerify  
- breweries **do not** program tags  
- product-specific bags ensure correct usage  

This prevents mis-encoded tags and reduces friction.

### 6.2 Product Lock-In

Once assigned:

- a tag cannot be repurposed  
- a tag cannot be reprogrammed  
- damaged tags shall be retired  

### 6.3 Future Programming Options (Not Included in v1.0)

Future versions may introduce:

- mobile programming tools  
- bulk desktop encoders  
- automated brewery serialization workflows  

These are out of scope for v1.0.

---

## 7. Verification Workflow

### Step 1 — Visual Check  
Operator sees a DraftVerify Coupler Tag before tapping.

### Step 2 — NFC Scan  
Using any NFC-enabled smartphone:

- operator taps the tag  
- the verification page opens  
- identity is confirmed instantly  

### Step 3 — Confirm Identity  
The verification page shall show:

- brewery  
- product  
- category (NA highlighted)  

### Step 4 — Connect  
Operator connects the coupler only after identity verification.

### Step 5 — Audit Logging  
If enabled, each scan records:

- timestamp  
- tag ID  
- verification event  

These logs support traceability and compliance.

---

## 8. Roles & Responsibilities

### Breweries  
- apply correct tags  
- ensure placement integrity  
- report damaged tags  

### Distributors  
- avoid covering, removing, or damaging tags  
- maintain tag visibility  

### Venues  
- scan tags before tapping  
- keep coupler areas unobstructed  
- report incorrect tag results  

---

## 9. Compliance Requirements

A venue is compliant when:

- each NA keg has a Coupler Tag  
- tags are visible and scannable  
- identity is verified before tapping  
- tags remain intact and active  

Non-compliant kegs may not enter service.

---

## 10. Summary

The Coupler Tag is the **primary digital identity point** in the DraftVerify ecosystem.  
By enforcing standardized programming, placement, and verification, DraftVerify delivers:

- reduced mis-tapping  
- safer NA draft service  
- improved operational clarity  
- stronger brand protection  
- full traceability and accountability  

</div>
</section>
