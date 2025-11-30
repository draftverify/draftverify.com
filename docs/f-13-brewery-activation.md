---
layout: default
title: "F-13 — Brewery Activation Workflow"
permalink: /docs/brewery-activation/
description: "Official DraftVerify workflow for activating serialized NFC tags on non-alcoholic kegs prior to shipment or distributor intake."
---

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-13</div>
# Brewery Activation Workflow
<p style="font-size:0.95rem;color:#6b7280;">
Version: 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

This document defines the **mandatory activation workflow** for NFC-enabled DraftVerify tags once the keg has completed packaging, conditioning, and serialization.

Activation is the moment a DraftVerify tag becomes **live in the registry** and enters the official traceability chain.  
Without activation, a tag is not valid and a keg cannot be considered DraftVerify-compliant.

  </div>
</section>



<!-- SECTION 1 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 1.0 Purpose of Activation

Activation creates the **first official digital record** for that keg:

- confirming its serialized identity  
- pairing the NFC tag with the keg’s physical state  
- establishing the initial compliance event  
- entering the keg into the DraftVerify Registry  
- enabling downstream verification (distributors, venues, audits)  

Activation also marks the keg as **ready for commercial distribution** under the DraftVerify Standard.

  </div>
</section>



<!-- SECTION 2 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 2.0 Preconditions for Activation

A keg may only be activated when all the following requirements are met:

- serialization has been completed (see F-12)  
- the keg is filled, sealed, and pressure-tested  
- labels, collars, and NA identification markers are applied  
- keg has completed conditioning (if applicable)  
- brewery QC/QA approval is recorded  
- no discrepancies exist in the serialization sheet  
- NFC tag passes initial read and checksum test  

A keg with a failed tag must be re-serialized before activation.

  </div>
</section>



<!-- SECTION 3 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 3.0 Activation Workflow (Mandatory Sequence)

Activation must follow this exact order:

---

### **Step 1 — Scan the NFC Tag**
- Use DraftVerify’s mobile app or desktop scanner  
- Confirm UID is readable  
- Confirm no previous activation exists  

---

### **Step 2 — Retrieve the Serialized Record**
System automatically fetches:

- DV-KG-YYYY-BREWERYCODE-#####  
- brewery name  
- product style  
- keg size  
- encoding timestamp  

If the record does not exist → reject.

---

### **Step 3 — Assign Production Metadata**
Brewery must add:

| Field | Description |
|-------|------------|
| **Production Batch** | Batch code or lot number |
| **Fill Date** | UTC automated timestamp |
| **Packaging Line** | Line 1, Line 2, Mobile, etc. |
| **QA Status** | PASS / HOLD |
| **Temperature at Activation** | Optional but recommended |

Metadata must be accurate — no placeholders allowed.

---

### **Step 4 — Change Status to “ACTIVATED”**
System logs:

- activation timestamp  
- user ID of activating staff  
- device ID  
- geolocation (if enabled)  
- checksum validation  

Record becomes permanent and immutable.

---

### **Step 5 — Physically Inspect the Tag**
Ensure:

- placement is correct  
- adhesive is secure  
- tag surface is dry  
- no tearing or bending is present  

Replace tag if needed (requires re-serialization).

---

### **Step 6 — Approve for Shipment**
The keg is now eligible for:

- distributor pickup  
- brewery direct delivery  
- internal taproom distribution  

Activation must occur **before** the keg leaves brewery custody.

---

  </div>
</section>



<!-- SECTION 4 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 4.0 Invalid Activation Events

Activation is **invalid** if:

- a non-serialized tag is activated  
- serial number does not match registry records  
- duplicate activation is attempted  
- tag UID mismatch occurs  
- payload checksum fails  
- production metadata is missing  
- tag is activated after shipment  

Invalid activation events must be logged and the keg quarantined.

  </div>
</section>



<!-- SECTION 5 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 5.0 Activation Failure Protocol

If activation fails:

1. quarantine keg  
2. remove defective tag  
3. assign replacement tag  
4. re-serialize (per F-12)  
5. reattempt activation  
6. document failure in the registry  

Breweries must maintain a 3–5% buffer of spare tags.

  </div>
</section>



<!-- SECTION 6 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 6.0 Post-Activation Handling

After activation, kegs must:

- be stored in the designated NA cold zone  
- remain segregated from alcoholic kegs  
- be protected from condensation that may affect tag adhesion  
- be shipped using NA-verified transport vehicles when possible  

All post-activation handling is captured in **D-Series Distributor Protocols**.

  </div>
</section>



<!-- SECTION 7 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 7.0 Audit & Traceability Requirements

Breweries must maintain the following:

- activation logs  
- staff user IDs  
- device IDs  
- production metadata  
- serial → activation mapping  
- exceptions and failures  
- shipping confirmations  

DraftVerify auditors may conduct random or scheduled audits.

Failure to provide activation records constitutes non-compliance.

  </div>
</section>



<!-- SECTION 8 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 8.0 Intellectual Property Notice

This activation workflow, including the digital sequence, state transitions, and metadata structure, is proprietary to DraftVerify™.

Unauthorized replication in:

- brewery management software  
- RFID/NFC products  
- competing verification platforms  
- ERP or POS integrations  

is strictly prohibited.

© 2025 DraftVerify Standards Initiative. All rights reserved.

  </div>
</section>
