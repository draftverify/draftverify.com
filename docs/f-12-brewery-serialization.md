---
layout: default
title: "F-12 — Brewery NFC Tag Serialization SOP"
permalink: /docs/brewery-serialization/
description: "Standard operating procedure for encoding, assigning, and managing DraftVerify NFC tags at the brewery level."
---

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-12</div>

# Brewery NFC Tag Serialization SOP

<p style="font-size:0.95rem;color:#6b7280;">
Version 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

This document defines the **official encoding, assignment, and handling rules** for NFC-enabled DraftVerify tags used at the brewery level.

It ensures:
- unique, non-reusable digital identities  
- correct product mapping  
- consistent verification behavior  
- secure onboarding of non-alcoholic (NA) draft products  

This SOP applies to all breweries producing NA draft under the DraftVerify Standard.

---
## 1. Purpose

The purpose of this SOP is to enforce:
- a complete, traceable identity chain  
- standardized NFC encoding rules  
- correct serialization workflows  
- elimination of tag reuse  
- correct mapping to DraftVerify Registry records  

Compliance with this SOP is **mandatory for all NA kegs.**

---
## 2. Scope

This SOP applies to:
- All NFC-enabled coupler tags supplied by DraftVerify  
- All NA draft products produced by the brewery  
- All production, packaging, and cellaring staff  
- Any contractor or distributor performing tagging on the brewery’s behalf  

Tags may only be used for:
- non-alcoholic draft products  
- optional alcoholic products enrolled in brand-protection programs  

---
## 3. Tag Components & Identity Fields

Each NFC tag contains **three identity layers**:

### 3.1 Physical Tag Surface
Printed on the tag:
- DraftVerify NA gold band  
- Brewery name (optional for Version 1.0)  
- Product name (optional for Version 1.0)  
- Short alphanumeric label (matches digital identity)

### 3.2 DraftVerify Tag ID (DTI)
This is the authoritative serialized ID.

**Example:**  
`DV-NA-47QJ9X2H`

**Encodes:**
- **DV** = DraftVerify Standard  
- **NA** = Non-alcoholic category  
- **47QJ9X2H** = randomized 8–10 character secure ID  

DTI is never reused.

### 3.3 NFC Payload
The NFC chip encodes:
- verification URL  
- redirect instruction  
- DTI identity  
- security checksum  

---
## 4. Verification URL Structure

Every coupler tag encodes a permanent verification URL:

`https://verify.draftverify.com/t/{DTI}`

**Examples:**  
`https://verify.draftverify.com/t/DV-NA-47QJ9X2H`  
`https://verify.draftverify.com/t/DV-NA-9KQ82DLM`

When scanned, the verification page displays:
- Brewery  
- Product identity  
- Category (Non-Alcoholic clearly highlighted)  
- Tag status (Active / Retired / Invalid)  
- Optional batch notes  
- Administrative metadata (hidden from public view)

---
## 5. Serialization Rules (Critical)

Serialization must follow these rules:

### 5.1 Tags must be pre-programmed by DraftVerify  
For Version 1.0, breweries **do not encode their own tags**.

### 5.2 Tags cannot be cloned  
Copying NFC payloads is prohibited.

### 5.3 Tags cannot be reassigned  
Once a DTI belongs to a product, **it is permanent**.

### 5.4 Tags cannot be reused  
Damaged, peeled, or incorrectly applied tags must be retired.

### 5.5 Tags must match Registry product identity  
The product name, category, and batch in the Registry must match the physical keg.

---
## 6. Brewery Workflow

### Step 1 — Receive serialized tag kits
Each kit contains:
- product-specific tags  
- written instructions  
- batch manifest  
- tag inventory list  

### Step 2 — Verify tag manifest
Brewer confirms:
- correct product  
- correct tag count  
- no visible defects  

### Step 3 — Apply tags during kegging
Tags are applied:
- after filling  
- before capping  
- on the coupler collar area  
- on clean, dry steel  

### Step 4 — Confirm Registry mapping
Brewer checks the accompanying manifest:
- DTI → product  
- DTI → batch  
- DTI → fill date  

### Step 5 — Complete packaging log
The following must be recorded:
- date applied  
- staff initials  
- batch number  
- quantity applied  
- any tags damaged or retired  

---
## 7. Handling Errors & Mismatches

### 7.1 Damaged tag  
Retire immediately and replace.

### 7.2 Wrong tag applied to the wrong keg  
Action:
1. Quarantine keg  
2. Remove tag  
3. Apply correct tag  
4. Update packaging log  

### 7.3 Unscannable tag  
Action:
- Replace tag  
- Mark original as retired  

### 7.4 Registry mismatch  
Brewery must contact DraftVerify support.

---
## 8. Security & Anti-Tamper Requirements

- Tags must be stored securely  
- Access limited to authorized production staff  
- No duplication or reprinting of DraftVerify tags  
- Unused tags must be locked after production runs  
- Retired tags must be destroyed  

---
## 9. Documentation Requirements

Breweries must maintain:
- Tag applications logs  
- Batch manifests  
- Kegging logs  
- Registry mapping confirmations  
- Error/mismatch reports  

Logs must be kept for **12 months minimum**.

---
## 10. Compliance Requirements

A brewery is compliant when:
- All NA kegs have serialized tags  
- Serialization logs are complete  
- No reused tags exist  
- Registry mapping is correct  
- Verification scans behave correctly  

Non-compliance may result in:
- temporary suspension  
- tagging kit replacement  
- re-training  
- audit review  

---
## 11. Related Documents

Use F-12 together with:
- **F-6 — Keg Identification Standard**  
- **F-7 — Coupler Tag Standard**  
- **F-13 — Brewery Activation Workflow**  
- **F-14 — Brewery Documentation & Records**  
- **F-28 — DraftVerify Registry Specification**

---
## 12. Copyright & IP

All encoding rules, tag structures, identity schemas, and serialization workflows are proprietary to the **DraftVerify™ Standards Initiative**.

Unauthorized use is strictly prohibited.

© 2025 DraftVerify™ Standards Initiative. All rights reserved.

</div>
</section>
