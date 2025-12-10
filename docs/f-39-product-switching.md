---
layout: default
title: "F-39 — Product Switching & Line Reuse Protocol"
permalink: /docs/product-switching/
description: "Standardized protocol for safely switching draft products and reusing lines while maintaining NA identity integrity, preventing contamination, and preserving the DraftVerify verification chain."
---

<section class="section">
<div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-39</div>

# Product Switching & Line Reuse Protocol

<p style="font-size:0.95rem;color:#6b7280;">
Version 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

F-39 defines the rules and procedures for **switching draft products** and **reusing existing draft lines** under the DraftVerify Standard.  
Because NA draft requires strict identity and safety controls, switching products introduces risk:

- mis-serve  
- cross-contamination  
- incorrect identity mapping  
- digital misalignment  
- faucet-side inconsistencies  

This protocol ensures safe transitions between products while preserving the DraftVerify identity chain.

---

## 1. Purpose of This Protocol

This protocol exists to:

- Ensure NA draft is **never** served through a line with alcoholic residue  
- Maintain correct mapping between **keg → coupler → line → faucet**  
- Prevent identity drift during product rotation  
- Provide clear rules for NA vs alcoholic switching  
- Support operational flexibility without compromising safety  

NA draft can only be served through a line that meets all DraftVerify reuse criteria.

---

## 2. Scope

Applies to:

- Bars and restaurants  
- Breweries and taprooms  
- Stadium and venue draft systems  
- Distributors assisting with line changes  
- Any operator serving NA draft under DraftVerify  

Covers:

- Product switching workflow  
- Line reuse eligibility  
- Cleaning and sanitation rules  
- Verification and documentation  
- Mapping updates for DraftVerify Registry  

---

## 3. Switching Rules Overview

### 3.1 NA ↔ NA Switching  
Allowed if:

- Line is flushed  
- Correct Line Tag is applied  
- Verification checks pass  

### 3.2 Alcoholic → NA Switching  
**Not permitted** unless the operator completes:

- Full chemical clean  
- 100% confirmed flush  
- Line audit  
- Identity reset  

This protects NA consumers from accidental alcohol exposure.

### 3.3 NA → Alcoholic Switching  
Allowed, but:

- NA Line Tag must be removed  
- Faucet identifier updated  
- Registry mapping reset  

### 3.4 Temporary Rotations  
Short-term events (pop-ups, seasonals) must follow the same rules as permanent changes.

---

## 4. Product Switching Workflow

### Step 1 — Deactivate Current Product  
Operator must:

- Close keg  
- Remove coupler  
- Remove existing Line Tag  
- Remove or update Faucet ID  

### Step 2 — Cleaning & Flushing  
Minimum requirements:

- Warm rinse  
- Chemical clean according to system guidelines  
- Final cold rinse  

For alcoholic → NA transitions:  
**Full deep clean required.**

### Step 3 — Identity Reset  
Before connecting a new keg, operator must:

- Update the line map  
- Apply new Line Tag (F-8)  
- Update faucet identifier (F-9)  
- Remove any old digital references  

### Step 4 — Connect New Keg  
Standards:

- Inspect Coupler Tag (F-7)  
- Ensure zip-tie is intact  
- Verify collar and sidewall band  

### Step 5 — DraftVerify Verification  
Scan Coupler Tag and confirm:

- Product name  
- Category  
- Brewery  
- Activation status  

If mismatched:  
**Do not connect. Quarantine immediately.**

### Step 6 — Documentation  
Operator must log:

- Date & time  
- Previous product  
- New product  
- Staff initials  
- Cleaning confirmation  
- Verification scan  

---

## 5. Line Reuse Eligibility Rules

To reuse a line for NA draft, it must meet all of the following:

| Requirement | Description |
|------------|-------------|
| **Cleaning completed** | Rinse → chemical cycle → final rinse |
| **No alcoholic residue** | Required for NA switching |
| **New Line Tag applied** | Must reflect correct identity |
| **Faucet ID updated** | Old identifiers must be removed |
| **Registry mapping updated** | Digital identity must match physical |
| **Verification successful** | NFC scan must confirm correct product |

If any element fails → **line cannot be reused for NA draft**.

---

## 6. Identity Mismatch Handling

If identity does not match:

- Do not allow the tap to open  
- Remove keg from service  
- Check for incorrect Line Tag  
- Confirm faucet label accuracy  
- Re-scan Coupler Tag  
- Document mismatch in venue logs  
- Notify distributor and DraftVerify (if required)

Identity mismatches are treated as potential mis-serve events.

---

## 7. Documentation Requirements

Operators must maintain:

### 7.1 Switching Logs  
- Old product  
- New product  
- Cleaning confirmation  
- Staff initials  
- Notes on unusual conditions  

### 7.2 Verification Logs  
- NFC scan timestamp  
- DTI  
- Product identity  

### 7.3 System Map Updates  
Every switch must result in:

- Updated line map  
- Updated faucet list  
- Updated cooler diagram  

---

## 8. Distributor Responsibilities During Switching

Distributors assisting with product switching must:

- Verify identity before delivering replacement kegs  
- Confirm Coupler Tag integrity  
- Provide correct Line Tags and identifiers (if requested)  
- Report any identity issues observed at the venue  

Distributors must never reconnect kegs without verification.

---

## 9. Safety Considerations

- Never run alcoholic and NA products through the same line without deep cleaning  
- Never mix Line Tags from different systems  
- Never bypass verification scanning  
- Never reuse a coupler tag  
- Never rotate NA onto a faucet still labeled as alcoholic  

Failure to follow these rules may cause:

- Mis-serve  
- Regulatory breaches  
- Consumer safety risks  
- Venue liability  

---

## 10. Compliance Requirements

A venue is **F-39 compliant** when:

- All product switches follow the required workflow  
- All NA transitions meet deep-clean rules  
- All identity elements match (Line Tag, Faucet ID, Coupler Tag, Registry)  
- Verification scans are logged  
- Documentation is complete and accessible  

Non-compliance may result in:

- Audit failure  
- Mandatory retraining  
- Certification suspension  

---

## 11. Summary

The Product Switching & Line Reuse Protocol ensures:

- Identity integrity during all product transitions  
- Safe handling of NA draft  
- Accurate line mapping  
- Reliable verification  
- Prevention of cross-contamination  
- Consistency across all venues and distributors  

F-39 is essential for preserving trust in NA draft service and ensuring accurate, safe pours every time.

</div>
</section>
