---
layout: default
title: "F-28 — DraftVerify Registry Specification"
permalink: /docs/registry-spec/
description: "Technical specification defining the data model, event handling, state transitions, and security rules for the DraftVerify Identity Registry."
---

<section class="section">
<div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-28</div>

# DraftVerify Registry Specification

<p style="font-size:0.95rem;color:#6b7280;">
Version 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

The DraftVerify Registry is the **authoritative source of truth** for keg identity, coupler tag state, verification events, and product mapping.  
This specification defines the data structures, allowed state transitions, validation rules, and security requirements.

The Registry exists to ensure every NA draft pour traces back to a verifiable, tamper-resistant identity.

---

## 1. Purpose of the Registry

The DraftVerify Registry provides:

- A single, canonical identity system for NA draft  
- Validation of all Coupler Tag scans  
- Tracking of keg → coupler → line → faucet mapping  
- Immutable logging of verification events  
- Manufacturer and distributor accountability  
- Security against mislabeling or tampering  

The Registry enforces the DraftVerify Standard and underpins all compliance workflows.

---

## 2. Core Data Objects

The Registry contains four primary object classes:

---

### 2.1 Brewery Object

**Fields:**

- Brewery ID  
- Brewery name  
- Product catalog  
- Activation permissions  
- Contact & compliance info  

---

### 2.2 Product Object

**Fields:**

- Product ID  
- Brewery ID  
- Product name  
- Style  
- NA classification  
- Verification settings  

---

### 2.3 Keg Object

Each keg registered in DraftVerify must include:

**Fields:**

- Keg ID  
- Brewery ID  
- Product ID  
- Packaging date  
- Activation date  
- Coupler Tag (DTI)  
- Verification history  

---

### 2.4 Coupler Tag Object (DTI)

Identity fields:

- DTI (DraftVerify Tag ID)  
- Assigned Product ID  
- Assigned Brewery  
- NFC UID  
- Tag state (Active / Inactive / Retired / Error)  
- Last verification timestamp  
- Coupler Tag version  

---

### 2.5 Line Mapping Object

Maps keg identity through the draft system.

Fields:

- Venue ID  
- Line ID  
- Faucet ID  
- Product ID  
- Active DTI  
- Last modification timestamp  

---

## 3. Tag States & Rules

DraftVerify tags may exist in the following states:

### **Active**  
- Valid  
- Assigned to a product  
- Ready for verification scans  

### **Inactive**  
- Encoded but not yet activated  
- Cannot be used at a venue  

### **Retired**  
- Permanently invalid  
- Cannot re-enter circulation  

### **Error**  
Triggered when:

- Mismatched product identity  
- Duplicate NFC UID detected  
- Attempted reuse of tag  
- Assignment conflict  

---

## 4. Allowed State Transitions

| From | To | Allowed? | Notes |
|------|----|----------|-------|
| Inactive | Active | ✔ | Upon brewery activation |
| Active | Retired | ✔ | Tag damaged or taken out of service |
| Active | Error | ✔ | Auto-trigger on conflict |
| Error | Retired | ✔ | Required after investigation |
| Retired | Active | ❌ | Never allowed |
| Retired | Inactive | ❌ | Never allowed |

Tags never return to circulation after retirement.

---

## 5. Verification Event Structure

Every NFC scan creates a **Verification Event** stored in the Registry.

### Fields:

- Event ID  
- Timestamp  
- DTI  
- Brewery ID  
- Product ID  
- Venue ID (if provided)  
- Device type (iOS, Android)  
- Result (Match / Mismatch / Error)  

Events must be immutable for compliance reasons.

---

## 6. Product Assignment Rules

A Coupler Tag (DTI):

- **Must** be assigned to exactly one product  
- **Must not** be reused  
- **Cannot** be reassigned after retirement  
- **Cannot** be shared between SKUs  

Brewery must initiate activation through:

- F-13 Activation Workflow  
- Secure activation API (future version)  

---

## 7. Line Mapping Rules

Line Mapping ensures product identity integrity from keg → faucet.

Rules:

- Each line may be mapped to **one** active product  
- Reassignment requires F-27 System Modification Protocol  
- Mapping must match Line Tag physical identifiers  
- Registry must log all changes with timestamp + technician information  

Mapping violations trigger an **Error** state.

---

## 8. Security Requirements

The Registry must enforce:

### 8.1 NFC UID Matching  
NFC UID must match the encoded DTI record.

### 8.2 Immutable Logs  
All events and mappings must be append-only.

### 8.3 Role-Based Permissions  
Only authorized roles may:

- Activate tags  
- Reassign lines  
- Modify product identity  

### 8.4 Duplicate Detection  
Registry must automatically detect:

- Duplicate DTIs  
- Duplicate NFC UIDs  
- Conflicting product assignments  

### 8.5 Rate Limiting  
Prevents brute-force scanning or automated misuse.

---

## 9. Error Handling & Alerts

System must trigger alerts when:

- Scan identity mismatch  
- Tag in Error state is scanned  
- Mapping does not match venue configuration  
- Unassigned tag is used at a venue  
- NFC UID conflict detected  

Responses may include:

- Quarantine recommendation  
- Required brewery/distributor investigation  
- Temporary suspension of compliance status  

---

## 10. API Structure (Version 1.0 — Read-Only)

The DraftVerify Registry provides:

### `/registry/v1/tags/{DTI}`  
Returns tag identity & product mapping.

### `/registry/v1/products/{ProductID}`  
Returns product metadata.

### `/registry/v1/verify/{DTI}`  
Records a verification event + returns result.

Write-access endpoints planned for v2.

---

## 11. Audit Requirements

Registry maintains:

- Full verification event logs  
- Mapping history  
- Activation & retirement logs  
- Discrepancy reports  

Must be available during:

- Compliance audits (F-33)  
- Contamination investigations (F-35)  
- Field inspections (F-37)  

---

## 12. Summary

The DraftVerify Registry is the backbone of NA draft identity.  
It ensures:

- Trustworthy verification  
- Secure product identity  
- Full system traceability  
- Accurate mapping in every venue  
- Reliable compliance enforcement  

Without the Registry, NA draft identity cannot be guaranteed.

</div>
</section>
