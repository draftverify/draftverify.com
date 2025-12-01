---
layout: default
title: "F-13 — Brewery Activation Workflow"
permalink: /docs/brewery-activation/
description: "Official DraftVerify workflow for attaching, activating, and verifying coupler tags on non-alcoholic draft kegs at the brewery level."
---

<section class="section">
<div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-13</div>

# Brewery Activation Workflow

<p style="font-size:0.95rem;color:#6b7280;">
Version 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

This document defines the **official brewery workflow** for attaching serialized DraftVerify Coupler Tags and activating them in the DraftVerify Registry.  

The brewery activation process creates the **first verifiable identity event** in the DraftVerify system and ensures that every NA keg enters distribution with a correct, traceable identity.

Activation links the physical keg → Coupler Tag → Registry → Verification URL.

---

## 1. Purpose of Activation

Activation ensures:

- Every NA keg has a **unique, verifiable digital identity**
- The Coupler Tag is correctly attached and active before leaving the brewery
- Registry data matches the physical keg
- Distributors and venues receive error-free identity through scanning
- The full NA draft chain begins with **certainty at the brewery**

Without proper activation, identity failures may occur downstream.

---

## 2. Responsibilities

### 2.1 Brewery Responsibilities
Brewery packaging or cellar staff must:

- Attach the correct serialized Coupler Tag to each NA keg  
- Confirm the tag is securely zip-tied  
- Activate the tag using the DraftVerify Activation App (mobile-friendly)  
- Verify product mapping, batch data, and keg readiness  
- Report damaged or missing tags to DraftVerify

### 2.2 DraftVerify Responsibilities

- Provide pre-programmed and serialized Coupler Tags  
- Maintain registry accuracy  
- Provide support for activation issues  
- Retire tags when damaged or mis-assigned  

---

## 3. Required Materials

Each activation station must have:

- DraftVerify serialized Coupler Tags (pre-programmed and product-specific)
- 2.5–3.5 mm nylon zip ties (provided by DraftVerify)
- A mobile phone or tablet with NFC capability
- Internet access (Wi-Fi or cellular)
- Activation login credentials (provided by DraftVerify)

Optional:

- Printed “DraftVerify Activation Quick Guide”
- Replacement zip ties
- Tag retirement bags for damaged identifiers

---

## 4. Pre-Activation Preparation

Before tagging begins:

### 4.1 Sort Tags by Product
DraftVerify supplies tags in product-specific bags (e.g., “NA IPA”, “NA Lager”).  
These must **never be mixed**.

### 4.2 Prepare the Kegs
Check:

- Keg is full and sealed  
- Collar is applied  
- Correct product label is attached  
- Coupler area is clean and dry  

### 4.3 Remove Prior-Use Materials
If the keg is being reused:

- Remove old adhesive labels
- Remove any previous program tags (cut and discard)

Kegs may **never** have two Coupler Tags installed.

---

## 5. Tag Installation (Zip-Tie Method — Mandatory)

DraftVerify Coupler Tags must be **zip-tied**, not adhesive.

### 5.1 Installation Steps

1. Position the tag on the **coupler flange**, NFC antenna facing outward.
2. Loop the nylon zip tie through the tag slot and around the flange.
3. Pull tight so the tag cannot rotate freely.
4. Trim excess tie length flush.
5. Confirm:
   - Tag is visible  
   - Tag is secure  
   - Tag sits within 25 mm of the engagement point  

Incorrectly installed tags must be reinstalled before activation.

---

## 6. Activation Workflow

Once the tag is properly installed:

### **Step 1 — Scan the Tag**
- Tap the Coupler Tag with an NFC-enabled phone.
- The browser opens the DraftVerify Activation Page:
  `https://verify.draftverify.com/t/{DTI}`

### **Step 2 — Authenticate**
- Staff log in using brewery activation credentials.

### **Step 3 — Confirm Product**
Select or verify:

- Brewery  
- Product identity  
- Style  
- Category (NA — gold-highlighted)

The page automatically loads the serialized **DraftVerify Tag ID (DTI)**.

### **Step 4 — Enter Batch Information**
Fields may include:

- Batch / lot ID  
- Packaging date  
- Keg size (standard / slim / torpedo)  
- Notes (optional)

### **Step 5 — Confirm Keg Type**
Identify whether this is:

- Permanent NA line keg  
- Seasonal NA keg  
- Pilot NA keg  

(Optional fields are supported.)

### **Step 6 — Finalize Activation**
Press **“Activate Tag”**.

The system:

- Links the DTI to the brewery + product + batch  
- Records timestamp  
- Sets tag status to **Active**  
- Creates the first verification event  

### **Step 7 — Activation Confirmation**
The browser will display:

**“Tag Successfully Activated”**  
with a green status banner.

---

## 7. Post-Activation Checks

After activation:

- Scan the tag again to ensure the identity displays correctly  
- Check that NA is highlighted clearly  
- Confirm that the product matches the keg collar  
- Ensure no duplicate tags exist  

Distributors and venues depend on this accuracy.

---

## 8. Error Handling & Tag Retirement

### 8.1 Damaged Tags
If a tag is:

- Cracked  
- Not scanning  
- Incorrectly encoded  

…it must be **retired**.

### 8.2 Misassigned Tags
If the wrong product was activated:

- Mark as **Retired** in the Activation App  
- Apply a new tag  
- Re-activate correctly

### 8.3 Missing Tags
A keg must **never** leave without an active Coupler Tag.

---

## 9. Compliance Requirements

Activation is considered compliant when:

- The correct serialized tag is attached  
- The tag is properly zip-tied  
- The DTI is Activated  
- Registry identity matches the physical product  
- All fields are correctly entered  

Non-activated kegs are **not DraftVerify compliant**.

---

## 10. Summary

The Brewery Activation Workflow ensures:

- Reliable NA identification  
- Verified digital identity before distribution  
- Accurate registry mapping  
- A secure foundation for all downstream verification  

Correct activation ensures a **safe, auditable, and globally consistent** NA draft ecosystem.

</div>
</section>
