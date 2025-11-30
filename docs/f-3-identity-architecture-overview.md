---
layout: default
title: "F-3 — DraftVerify Identity Architecture (DIA)"
permalink: /docs/identity-architecture/
description: "The hierarchical identity architecture governing all physical and digital components in DraftVerify non-alcoholic draft systems."
---

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-3</div>
# DraftVerify Identity Architecture (DIA)
<p style="font-size:0.95rem;color:#6b7280;">
Version: 1.0 · Status: Active · Publication Date: 2025-01-01  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

The DraftVerify Identity Architecture (DIA) defines the **hierarchical identity system** used across all 
non-alcoholic draft components — from product to faucet.  
It ensures every component in the NA draft pathway can be **identified, verified, and traced** through a 
common structured framework backed by the DraftVerify Registry.

This document forms the technical foundation for the **entire standards library**.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 1. Purpose and Scope

### 1.1 Purpose
The DIA establishes:

- a **consistent identity format** for all draft objects  
- strict **parent → child hierarchical relationships**  
- rules governing activation, state, lineage, and associations  
- how identity transitions occur during kegging, transport, installation, and service  
- how the DraftVerify Registry encodes, stores, and validates these relationships  

### 1.2 Scope
The DIA applies to all objects governed by the DraftVerify Standard, including:

- Products  
- Batches  
- Kegs  
- Couplers  
- Lines  
- Towers  
- Faucets  
- Events and change logs  

Any NA draft system using DraftVerify must adhere to this architecture.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 2. Hierarchical Identity Model

The DraftVerify identity chain follows a **top-down lineage structure**:

```
Product → Batch → Keg → Coupler → Line → Faucet
```

Each level inherits constraints from the level above it.  
Each child entity **cannot exist independently** and must reference its parent.

### 2.1 Parent/Child Rules
A child object must:

- reference exactly one parent  
- inherit identity constraints defined at that level  
- maintain referential integrity in the Registry  
- be invalid if parent status is invalid  

### 2.2 Why Hierarchy is Mandatory
Hierarchy ensures:

- traceable chain-of-custody  
- clean contamination control logic  
- auditable activation workflows  
- digital matching between physical components  

This structure also forms a strong IP moat because the identity logic is unique, detailed, and difficult to reproduce without infringing the architecture.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 3. Identity Format and Serialization

Each object follows a structured identity format:

### 3.1 General Format
```
DV-<OBJECT>-<YEAR>-<SITE/BREWERY>-<SERIAL>
```

### 3.2 Object Code List

| Object | Code | Example |
|--------|------|---------|
| Product | PROD | DV-PROD-2025-HOPCO-0001 |
| Batch | BATCH | DV-BATCH-2025-HOPCO-0194 |
| Keg | KEG | DV-KEG-2025-HOPCO-00412 |
| Coupler | CPL | DV-CPL-2025-HOPCO-00412-A |
| Line | LINE | DV-LINE-2025-HOPCO-L01 |
| Tower | TWR | DV-TWR-2025-HOPCO-02 |
| Faucet | FCT | DV-FCT-2025-HOPCO-F01 |

### 3.3 Serialization Rules

- Serial numbers must be **zero-padded**  
- Serialization must be **monotonic** (no reuse)  
- Brewery/Site code must be 3–6 characters  
- Year is the year of original creation  

If any element fails validation, the identity is invalid.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 4. Identity Binding Rules

Identity binding refers to the required links between objects.

### 4.1 Mandatory Bindings
- A **Batch** must link to one Product  
- A **Keg** must link to one Batch  
- A **Coupler** must link to one Keg  
- A **Line** must link to one Coupler  
- A **Faucet** must link to one Line  

### 4.2 Binding Constraints
Bindings must:

- follow parent → child hierarchy  
- remain intact unless a controlled change is executed  
- be logged as a **Change Event** when modified  
- be reflected immediately in the Registry  

### 4.3 Invalid Binding Conditions
A binding is invalid if:

- the parent object is inactive  
- the parent identity is corrupted  
- the object is unverified  
- the hierarchy is broken at any point  

Invalid bindings force a **system lockout** until corrected.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 5. Identity States and Transitions

Every object in the hierarchy follows a controlled state machine.

### 5.1 Allowed States
- **Created**  
- **Serialized**  
- **Activated**  
- **In Service**  
- **Suspended**  
- **Retired**  

### 5.2 Trigger Events
Example transitions:

- Serialization → Created → Serialized  
- Activation → Serialized → Activated  
- Installation → Activated → In Service  
- Mis-Serve → In Service → Suspended  
- Decommissioning → Suspended → Retired  

Each state change creates a **state event record**.

### 5.3 Immutable History
Once recorded:

- no state may be deleted  
- no state may be overwritten  
- corrections require a formal Correction Event  

This is essential for audit integrity.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 6. Digital Registry Requirements

The DraftVerify Registry must maintain:

- complete identity records  
- binding and lineage relationships  
- state history  
- activation metadata  
- event logs  
- rejection logs  
- cross-check integrity validation  

Registry data forms the authoritative record for compliance, certification, and incident reconstruction.

### 6.1 Integrity Checks
The Registry must automatically validate:

- identity format  
- parent/child binding  
- state legality  
- activation consistency  
- uniqueness  

Any conflict forces an error and requires human review.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 7. Physical ↔ Digital Correspondence

The DIA requires that:

- **every physical tag** must have a **digital counterpart**  
- **every digital record** must correspond to a **physical component**  

If a physical component exists without a matching digital identity, the system is **non-compliant**.

If a digital identity exists without a matching physical component, activation is blocked.

  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 8. Identity Protection and IP Notice

All identity structures, serialization schemas, lineage rules, state machines, and architectural models 
defined by the DIA are the intellectual property of the DraftVerify™ Standards Initiative.

They may not be:

- reproduced  
- adapted  
- repurposed  
- restructured  
- reverse-engineered  

without written permission.

Violation constitutes the creation of an unauthorized derivative standard.

© 2025 DraftVerify™ Standards Initiative. All rights reserved.

  </div>
</section>
