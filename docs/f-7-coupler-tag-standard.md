---
layout: default
title: "F-7 — Coupler Tag Standard"
permalink: /docs/coupler-tag-standard/
description: "The global standard for NFC-enabled coupler tagging, ensuring accurate product identification at the exact moment a keg is connected."
---

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-7</div>
# Coupler Tag Standard
<p style="font-size:0.95rem;color:#6b7280;">
Version: 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

The coupler is the single most important interaction point in the entire draft workflow.  
The **Coupler Tag** provides a permanent, verifiable, cryptographically-unique identity at the exact moment a keg is connected — ensuring that what’s about to be tapped is truly what it claims to be.  
This matters most for **non-alcoholic (NA)** draft, where mis-taps pose safety, regulatory, and reputational risks.

---

## 1. Purpose

The Coupler Tag Standard establishes:

- A **tamper-resistant digital identity point**  
- A way to confirm product identity *before* tapping  
- A consistent tagging method across breweries, distributors, and venues  
- A verification process that takes **less than 2 seconds**  
- An audit trail proving correct tapping procedures  

The goal is **certainty at the point of connection**.

---

## 2. Scope

This standard applies to:

- Breweries producing NA draft  
- Distributors delivering NA kegs  
- Venues serving NA products on tap  
- Any DraftVerify-certified operator  

Optional (recommended):

- Alcoholic products requiring brand protection, loss-prevention, or identity tracking

This standard defines:

- Tag hardware  
- NFC programming  
- URL structure  
- Registry mapping  
- Physical placement  
- Verification workflow  
- Minimum compliance requirements  

## 6. Programming & Assignment

### 6.1 Centralized Programming (Version 1.0 Standard)
For this release of the DraftVerify Standard:
- All coupler tags are programmed by DraftVerify prior to shipment.  
- Tags arrive in clearly labeled product-specific bags.  
- Breweries simply apply the correct tags to the correct non-alcoholic kegs.

This eliminates technical friction and ensures accuracy.

### 6.2 Product Lock-In
Once a coupler tag is assigned to a product:
- It may not be reassigned to another product.  
- It may not be reused.  
- Damaged tags must be retired and replaced, not reprogrammed.

### 6.3 Optional Future Brewery-Side Programming
Future versions may introduce:
- A DraftVerify programming app  
- On-site programming hardware  
- Bulk programming workflows  

These remain outside the scope of Version 1.0.

---

## 7. Verification Workflow

### Step 1 — Visual Check
Staff sees the coupler with a DraftVerify tag attached before tapping.

### Step 2 — NFC Scan
Before the coupler is connected:
- Staff taps the tag using any NFC-enabled phone.  
- The phone opens a verification page through the tag’s encoded URL.

### Step 3 — Confirmation
The verification page displays:
- Brewery name  
- Product identity  
- Category (non-alcoholic clearly highlighted)  
- Style details  
- Tag status (must be active)  

### Step 4 — Connection
Once confirmed, staff attach the coupler and prepare the keg for service.

### Step 5 — Logging
The scan is recorded in the DraftVerify Registry, including:
- Tag identifier  
- Timestamp  
- High-level venue reference (where enabled)  

These logs support audits, investigations, and responsible draft handling.

---

## 8. Roles & Responsibilities

### 8.1 Breweries
- Apply coupler tags to all non-alcoholic kegs.  
- Use correct tags for correct products.  
- Report damaged or missing tags for retirement.

### 8.2 Distributors
- Ensure tagged kegs remain intact during transport.  
- Avoid covering or damaging coupler tags.  
- Report mismatches or missing tags to breweries or DraftVerify.

### 8.3 Venues
- Scan before connecting new kegs.  
- Do not remove or cover coupler tags.  
- Maintain visibility and cleanliness of the coupler area.  
- Report suspicious or incorrect scan results.

---

## 9. Compliance Requirements

A venue is considered compliant with F-7 when:
- All non-alcoholic kegs have a DraftVerify coupler tag.  
- Tags are scannable at the moment of connection.  
- Staff verify identity before attaching the coupler.  
- Tags remain intact, visible, and unobstructed.  
- Missing or damaged tags are replaced promptly.

Alcoholic products may optionally use coupler tags for brand protection, but non-alcoholic products are the mandatory category.

---

## 10. Summary

The coupler tag is the **primary digital identity point** in the DraftVerify ecosystem.  
By standardizing placement, programming, and verification, DraftVerify provides a fast, reliable, and secure method for confirming keg identity at the exact moment it matters.

The result:
- Clearer workflows  
- Safer service  
- Fewer errors  
- Stronger brand protection  
- Documented accountability across the entire draft system  

</div>
</section>
