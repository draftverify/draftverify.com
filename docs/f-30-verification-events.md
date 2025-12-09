---
layout: default
title: "F-30 — Verification Event Specification"
permalink: /docs/verification-events/
description: "The formal specification defining how DraftVerify verification events are generated, logged, interpreted, and used for compliance, audit fidelity, and identity chain protection."
---

<section class="section">
<div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-30</div>

# Verification Event Specification

<p style="font-size:0.95rem;color:#6b7280;">
Version 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

This document defines the **structure, purpose, and processing rules** for all verification events within the DraftVerify ecosystem.

Verification events are generated whenever a Coupler Tag (DTI) is scanned, whether at the brewery, distributor, venue, or during audit.  
These events form the **audit backbone** of the DraftVerify Identity Chain and allow traceability, accountability, and compliance validation across the full NA draft supply chain.

---

## 1. Purpose of Verification Events

Verification events provide:

- **Identity confirmation** at critical operational moments  
- **Traceability** of who interacted with which keg and when  
- **Compliance documentation** for audits and insurance  
- **Chain-of-custody protection** across breweries, distributors, and venues  
- **Detection of inconsistencies** (wrong product, wrong venue, inactive tag)  
- **Historical analysis** for safety and system improvements  

Verification events are core to DraftVerify’s accountability model.

---

## 2. Scope

This specification applies to:

- All Coupler Tag scans  
- All DraftVerify-integrated apps and hardware  
- All brewery, distributor, and venue scanning workflows  
- Any automated or manual verification trigger  
- Audit and compliance systems using event logs  

Events are stored permanently in the DraftVerify Registry.

---

## 3. Event Types

Verification events fall into the following categories:

### 3.1 Activation Event  
Generated when a tag transitions from **Inactive → Active**.  
Defined in F-29 and F-13.

### 3.2 Brewery Verification Event  
Occurs when brewery staff scan a tag during packaging, QC, or pre-shipment checks.

### 3.3 Distributor Verification Event  
Generated when distributors scan tags during receiving, loading, or delivery.

### 3.4 Venue Verification Event  
Occurs when venue staff scan tags before tapping or during daily/weekly checks.

### 3.5 Audit Verification Event  
Triggered by DraftVerify auditors during compliance or spot-check inspections.

### 3.6 System Verification Event  
Generated automatically when internal systems confirm data consistency.

---

## 4. Event Data Structure

Every Verification Event must include the following fields:

### 4.1 Required Fields

| Field | Description |
|-------|-------------|
| **event_id** | Unique UUID for the event |
| **event_type** | One of the defined types (Activation, Distributor Verification, etc.) |
| **timestamp_utc** | ISO 8601 timestamp in UTC |
| **dti** | DraftVerify Tag ID |
| **nfc_uid** | NFC chip UID at scan time |
| **brewery_id** | Brewery associated with the DTI |
| **product_id** | Product linked to the DTI |
| **scan_source** | App, device, or system that generated the event |
| **scan_user** | ID or credential of the individual (if applicable) |

### 4.2 Optional Fields

| Field | Description |
|-------|-------------|
| **venue_id** | If the scan occurs at a venue |
| **distributor_id** | If the scan occurs at a distributor |
| **geo** | Approximate geolocation (if enabled) |
| **notes** | Optional operator notes |
| **system_flag** | Error / warning / mismatch indicators |

### 4.3 System Flags

System flags identify issues such as:

- `PRODUCT_MISMATCH`  
- `TAG_INACTIVE`  
- `TAG_RETIRED`  
- `UID_COLLISION`  
- `VENUE_MISMATCH`  
- `SCAN_OUT_OF_SEQUENCE`  

Flags are used in compliance scoring and audit workflows.

---

## 5. Event Lifecycle

Each event follows a defined lifecycle:

### 5.1 Event Generation  
Triggered automatically by scanning or system logic.

### 5.2 Validation  
Registry confirms:

- Product identity  
- Tag status  
- Data consistency  
- User permissions  

### 5.3 Storage  
Event is written to immutable storage.

### 5.4 Indexing  
Events indexed by:

- DTI  
- Brewery  
- Distributor  
- Venue  
- Timestamp  

### 5.5 Audit Availability  
Events are immediately queryable for compliance, traceability, and dispute resolution.

---

## 6. Typical Verification Scenarios

### 6.1 Brewery → Distributor Transfer  
Events document:

- Final brewery check  
- Distributor receiving check  
- Any discrepancies  

### 6.2 Distributor → Venue Delivery  
Events confirm:

- Correct product sent  
- Correct product received  
- No tag tampering  
- Route integrity  

### 6.3 Venue Tapping Process  
Events confirm:

- Correct identity before tapping  
- Staff compliance  
- NA vs alcoholic separation maintained  

### 6.4 Audit Spot Check  
Auditor scans any keg to confirm:

- Venue compliance  
- Identity consistency  
- Mapping correctness (line-to-keg)  

---

## 7. Event Retention & Security

### 7.1 Retention  
Events must be stored **for a minimum of 5 years**.

### 7.2 Security Controls
- Encryption in transit  
- Encryption at rest  
- Role-based access control  
- Immutable event history  

### 7.3 Privacy Considerations  
No personal data beyond optional operator ID is collected.  
Geolocation is coarse and optional.

---

## 8. Event Integrity Rules

Verification events must not be:

- Edited  
- Overwritten  
- Deleted  
- Backdated  
- Reordered  

Any attempt to alter historical events must generate a **system alert**.

---

## 9. Compliance Use Cases

Verification events support:

### 9.1 Chain-of-Custody Audits  
Proof of handling integrity.

### 9.2 Venue Compliance Scores  
Frequency and correctness of verification.

### 9.3 Brewery Activation Audits  
Alignment between activation workflow and downstream scans.

### 9.4 Discrepancy Resolution  
Clear answers to:

- “Who scanned this?”  
- “When?”  
- “Where was it last confirmed?”  

### 9.5 Regulatory & Insurance Documentation  
Objective, timestamped compliance evidence.

---

## 10. Summary

Verification events are the **operational heartbeat** of DraftVerify:

- They prove identity.  
- They protect the NA supply chain.  
- They enforce accountability.  
- They provide audit-ready documentation.  
- They ensure DraftVerify remains the industry standard for safe NA draft service.

The entire DraftVerify ecosystem depends on accurate, immutable verification events to guarantee product integrity and consumer safety.

</div>
</section>
