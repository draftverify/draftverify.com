---
layout: default
title: "F-3 — Identity Architecture Overview"
permalink: /docs/identity-architecture/
description: "High-level architecture of the DraftVerify Identity Stack, including object classes, relationships, and verification pathways."
---

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-3</div>

# Identity Architecture Overview

<p style="font-size:0.95rem;color:#6b7280;">
Version 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

The **Identity Architecture** defines how all DraftVerify identity objects—kegs, couplers, lines, faucets, NFC tags, and Registry entries—connect into a unified identity system.  
It ensures that any operator at any stage can confirm **what product is being served**, **where it came from**, and **whether it is non-alcoholic**.

This architecture forms the backbone of the DraftVerify Standard.

---

## 1. Purpose of the Identity Architecture

The DraftVerify Identity Architecture exists to:

- Ensure **single-source identity** for every draft object  
- Eliminate ambiguity during keg changes and line assignments  
- Support **pre-pour verification** for NA safety  
- Provide a full digital **chain of custody**  
- Allow breweries, distributors, and venues to operate with a **shared identity language**  
- Enable auditing, investigations, and certification  

It creates a **closed-loop identity system** from brewery to faucet.

---

## 2. Core Identity Objects

The architecture defines **five primary identity classes**, each with mandatory fields and required relationships.

### 2.1 Brewery Object  
Represents the producing brewery.

Includes:

- brewery name  
- brewery ID  
- product catalog  
- serialization permissions  
- activation rights  

### 2.2 Product Object  
Represents an individual NA draft beverage.

Includes:

- product name  
- style  
- category (NA mandatory)  
- brand information  
- packaging attributes  
- color coding rules  

### 2.3 Keg Object  
Represents a single physical keg.

Includes:

- Keg ID  
- Product mapping  
- Brewery ID  
- Production/batch data  
- Serialized NFC ID(s)  
- Activation and verification history  
- Status (active, retired, mismatch, etc.)  

Kegs are the **origin point** of the identity chain.

### 2.4 Coupler Tag Object  
The **primary digital identity point**.

Includes:

- unique NFC UID  
- product assignment  
- keg linkage  
- verification history  
- activation date  

Must be scanned **before the coupler engages**.

### 2.5 Line Tag Object  
Represents a single beverage line.

Includes:

- line identifier  
- category color  
- product mapping  
- venue ID  
- optional faucet linkage  

---

## 3. Identity Relationships

DraftVerify defines a strict, hierarchical relationship model:

### 3.1 Parent → Child Structure  

| Parent Object | Child Object(s) |
|---------------|------------------|
| Brewery | Products |
| Product | Kegs |
| Keg | Coupler Tag |
| Coupler | Line |
| Line | Faucet Marker |

Each object inherits identity context from its parent.

### 3.2 One-to-One Links  
- A coupler tag may only be linked to **one** product.  
- A product may be linked to **many** kegs.  
- A keg may only have **one active coupler tag**.

### 3.3 One-to-Many Links  
- A brewery may produce many products.  
- A venue may operate many lines.  

### 3.4 Registry Guarantees  
The Registry enforces:

- identity uniqueness  
- child-to-parent validity  
- verification event integrity  

No object can exist without its parent being valid.

---

## 4. Identity Pathway (From Brewery to Faucet)

DraftVerify defines the complete identity flow from origin to consumer:

### Step 1 — Brewery Identity  
Brewery creates/owns product identities.

### Step 2 — Product Identity  
Product is registered and assigned category metadata.

### Step 3 — Keg Identity  
Each keg receives:

- collar  
- NA banding  
- coupler tag  
- Registry entry  

### Step 4 — Coupler Identity  
NFC tag is scanned at tapping.

### Step 5 — Line Identity  
Line tag connects the keg to the service path.

### Step 6 — Faucet Identity  
Optional marker provides consumer-facing clarity.

This creates a **traceable, auditable, complete identity pathway**.

---

## 5. Verification Architecture

Verification exists at multiple layers for redundancy:

### 5.1 Physical Verification  
- keg collar  
- coupler tag  
- line tag  
- faucet marker  

### 5.2 Digital Verification  
Registry confirms:

- product identity  
- activation state  
- tag assignment  
- verification history  

### 5.3 Operational Verification  
Operators receive:

- instructions  
- identity matches  
- mismatch warnings  

Verification must occur **before connection**.

---

## 6. Digital Registry Architecture

The Registry is the **source of truth**.

Each identity object contains:

### 6.1 Required Fields  
- Object ID  
- Parent Object ID  
- Status  
- Activation timestamps  
- Verification events  
- Notes (where applicable)  

### 6.2 Integrity Rules  
- No duplicate NFC assignments  
- No reassignment of coupler tags  
- No keg activation without product mapping  
- No verification event without an active tag  

### 6.3 Event Logging  
Every verification event logs:

- timestamp  
- NFC UID  
- related identity objects  
- confirmation status  

---

## 7. Category & Color Architecture

DraftVerify uses a universal color syntax:

| Category | Color | Requirement |
|---------|--------|-------------|
| Non-Alcoholic | Gold | Mandatory |
| Alcoholic (optional) | Blue | Recommended |
| Seasonal | Teal | Optional |
| House / Staff | Grey | Optional |

This color language is referenced in:

- coupler tags  
- line tags  
- keg collars  
- faucet markers  
- venue diagrams  
- digital tools  

Gold must always indicate NA.

---

## 8. System Integrity & Non-Compliance States

Objects may enter special states:

### 8.1 “Mismatch”  
Physical identity does not match digital identity.

### 8.2 “Inactive”  
Tag has never been activated and cannot be used.

### 8.3 “Retired”  
Tag or keg removed permanently from service.

### 8.4 “Compromised”  
Tag damaged, unscannable, or tampered with.

### 8.5 “Suspended”  
Identity temporarily invalid (audit/incident).

Only “Active” objects may be used in service.

---

## 9. Cross-Document Integration

The identity architecture is referenced by:

- **F-4** Risk Profile  
- **F-5** Legal Basis  
- **F-6–F-10** Physical Identity Documents  
- **F-12–F-14** Brewery Standards  
- **F-17–F-21** Operational Logging  
- **F-28–F-31** Registry & Digital Standards  
- **F-32–F-40** Certification & Governance  

F-3 defines *how everything connects*.  
Other documents define *how everything must operate*.

---

## 10. Copyright & IP

All identity structures, definitions, diagrams, relationships, and architectural rules are the protected intellectual property of:

**DraftVerify™ Standards Initiative**

Unauthorized reproduction or use in competing systems is prohibited.

</div>
</section>
