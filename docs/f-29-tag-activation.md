---
layout: default
title: "F-29 — Tag Activation Rules"
permalink: /docs/tag-activation/
description: "Official activation rules governing how DraftVerify Coupler Tags (DTIs) are activated, validated, and bound to brewery products within the DraftVerify Registry."
---

<section class="section">
<div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-29</div>

# Tag Activation Rules

<p style="font-size:0.95rem;color:#6b7280;">
Version 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

This document defines the **official rules for activating DraftVerify Coupler Tags (DTIs)**, binding them to brewery products, and ensuring they enter circulation in a **secure, validated, and tamper-resistant** state.

DTI activation is the moment a tag becomes part of the DraftVerify Identity Chain.  
Errors at activation lead to downstream misidentification, mis-serve risk, and failed compliance audits.  
These rules ensure consistent, verifiable activation across all breweries.

---

## 1. Purpose of Activation Rules

Tag activation ensures that:

- Each DTI is assigned to **one product**, permanently  
- Brewery activation matches Registry expectations  
- No tag enters circulation without verification  
- Tampering, mislabeling, and duplication are eliminated  
- Downstream distributors and venues receive correct identities  
- Registry data remains authoritative and consistent  

Activation protects consumers, breweries, distribution partners, and venues.

---

## 2. Scope

These rules apply to:

- All DraftVerify Coupler Tags  
- All breweries participating in DraftVerify  
- All activation workflows (manual, app-based, or automated)  
- All future DTI versions  

Activation must occur **before kegs leave the brewery**.

---

## 3. Activation Prerequisites

Before a tag can be activated, the following must be complete:

### 3.1 Brewery Verification  
Brewery must be validated in the Registry:

- Approved Brewery ID  
- Authorized activation personnel  
- Trained in F-12 and F-13 workflows  

### 3.2 Product Registration  
Product must exist in the Registry with:

- Product ID  
- Style  
- NA classification  
- Visual identity  

### 3.3 Physical Tag Inspection  
Activation personnel must confirm:

- Correct DraftVerify NA banding  
- DTI printed clearly and scannable  
- No damage, bends, or adhesive problems  
- NFC chip functioning (test scan required)  

If the physical tag fails inspection → **tag must be retired**.

---

## 4. Activation Workflow (Standard v1.0)

Activation follows the official brewery process defined in F-13.

### Step 1 — Scan the DTI  
Using an NFC-enabled device:

- Tap the coupler tag  
- The activation page loads  
- System verifies the tag is in **Inactive** state  

### Step 2 — Select Product  
Brewery selects the product (SKU) being packaged.

### Step 3 — Confirm Assignment  
System displays:

- Brewery name  
- Product name  
- DTI  
- NFC UID  
- Activation technician ID  

Technician must confirm all are correct.

### Step 4 — Activate Tag  
Registry transitions tag from:

**Inactive → Active**

Once activated:

- Product assignment is permanent  
- Tag may not be reused  
- Tag may not be reassigned  
- Tag becomes part of compliance framework  

### Step 5 — Affix Tag to Keg  
Tag must be zip-tied to the coupler flange following:

- F-7 Coupler Tag Standard  
- Brewery SOP for placement  
- Tamper-resistant fastening  

Tag must not spin freely or be placed on moving components.

---

## 5. Permanent Assignment Rules

Once activated:

- DTI **cannot** be edited  
- Product mapping **cannot** be changed  
- Brewery assignment **cannot** be changed  
- Tag **cannot** be reprogrammed or reused  

A DTI is **one identity for life**, even after keg retirement.

---

## 6. Rejection Conditions

A tag **cannot** be activated if:

- It is already Active  
- It is Retired  
- It is in Error state  
- Its NFC UID does not match the Registry record  
- Product selected does not match the Brewery’s product list  
- Tag fails physical inspection  
- The page indicates a mismatch warning  

If a tag fails activation:

- Quarantine immediately  
- Report using brewery discrepancy form  
- Replace with a new DTI  

---

## 7. Error State Triggers

The Registry automatically sets a tag to **Error** if:

- DTI reused in multiple activations  
- NFC UID collision is detected  
- Product mismatch at scan  
- Verification loop inconsistency  
- Improper activation sequence detected  

Tags in Error state must be:

1. Quarantined  
2. Investigated  
3. Retired  

Never reassigned.

---

## 8. Activation Logging Requirements

Registry must store:

- DTI  
- Brewery ID  
- Product ID  
- Timestamp  
- Technician identity  
- NFC UID  
- Device type  
- Location (if enabled)  

Activation logs are immutable.

---

## 9. Activation Audit Requirements

Breweries must maintain:

- Weekly activation logs  
- Tag usage counts  
- Discrepancy reports  
- Quarantined tag list  

Auditors verify:

- Activation integrity  
- Product mapping accuracy  
- Tag affixation compliance  
- Discrepancy handling  

Misactivation is grounds for temporary loss of DraftVerify certification.

---

## 10. Summary

Tag activation is the **gateway to the entire DraftVerify Identity System**.  
Correct activation ensures:

- Product identity integrity  
- Downstream traceability  
- Accurate distributor and venue workflows  
- Predictable compliance outcomes  
- Protection against mis-serve and liability  

Once activated, a DTI becomes a permanent, auditable identity that must remain intact for the full lifecycle of the keg.

</div>
</section>
