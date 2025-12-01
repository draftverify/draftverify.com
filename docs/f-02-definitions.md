---
layout: default
title: "F-2 — Definitions, Scope & Terminology"
permalink: /docs/definitions/
description: "Authoritative terminology and definitions governing all DraftVerify standards, identity structures, and verification procedures."
---

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-2</div>

# Definitions, Scope & Terminology

<p style="font-size:0.95rem;color:#6b7280;">
Version 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

The **F-2 Definitions Standard** is the authoritative glossary for the DraftVerify Standards Library.  
All terms used across F-1 through F-40 derive their meaning from this document.  
Where terminology conflicts occur, **F-2 controls**.

This document ensures the entire DraftVerify ecosystem—physical ID, digital registry, verification logic, and operational procedures—uses **consistent, unambiguous language**.

---

## 1. Purpose

The purpose of this standard is to:

- Establish a unified vocabulary for the DraftVerify identity system  
- Prevent ambiguity in verification workflows  
- Create consistent naming conventions across breweries, distributors, and venues  
- Define object classes, registry fields, and physical tag terminology  
- Serve as the reference point for all standards in the F-Series  

---

## 2. Scope

This standard applies to:

- All DraftVerify identity objects (kegs, couplers, lines, faucets, NFC tags)  
- Digital registry structures  
- Verification events and logs  
- Brewery, distributor, and venue workflows  
- Naming conventions used in training, documentation, and signage  

Every other standard document references F-2 when defining:

- labels  
- states  
- object types  
- color codes  
- registry fields  
- operator vocabulary  

---

## 3. Key Terminology

### 3.1 Non-Alcoholic Draft (NA Draft)  
A beverage served on draft containing **0.5% ABV or less**, per regulatory definition.

### 3.2 Identity Object  
Any physical or digital entity that possesses a unique DraftVerify identity.

Includes:

- keg  
- coupler  
- draft line  
- faucet  
- NFC tag  
- line tag  
- digital registry record  

### 3.3 Verification  
The process of confirming the identity of a draft source using any combination of:

- NFC scanning  
- visual identification  
- registry match  
- operator confirmation  
- color and symbol checks  

Verification must occur **before every coupler connection**.

### 3.4 NFC Identity Tag  
A tamper-resistant, serialized tag containing a **cryptographically unique ID**, linked to a single product identity in the DraftVerify Registry.

Tags cannot be reused or reassigned.

### 3.5 Registry Entry  
A digital record binding:

- brewery  
- product  
- batch  
- tag IDs  
- status  
- activation history  
- verification logs  

The Registry is the **source of truth** for all DraftVerify objects.

### 3.6 Coupler Tag  
The NFC tag applied directly adjacent to the coupler engagement point.  
This is the **primary digital identity point** used to confirm the correct keg before connection.

### 3.7 Line Tag  
A physical identifier attached to the beverage line (30–45 cm from the coupler) indicating product identity and category.

### 3.8 Faucet Marker (Optional)  
A service-side identifier that provides consumer-facing clarity on NA identity.

### 3.9 Verification Signal  
Any data point confirming identity, including:

- NFC UID  
- registry match  
- color-coded hardware  
- label text  
- operator confirmation  

Multiple verification signals create redundancy and prevent mis-serve.

---

## 4. Naming Conventions

### 4.1 Product Naming  
Products must follow this structure:

**Brewery · Product Name · Style · NA**

Example:

**Brave River · Horizon IPA · NA**

### 4.2 Keg Identity  
Each keg record must include:

- Brewery ID  
- Product ID  
- Batch / Production code  
- NFC Tag ID  
- Activation date  
- Status  

### 4.3 Document Citation  
Standards must be referenced using:

**F-X — Document Title**

Example:  
“See **F-7 — Coupler Tag Standard** for placement requirements.”

---

## 5. Identity Architecture Terms  
(Referenced by **F-3**)  

### 5.1 Parent Object  
An object containing subordinate identities (e.g., Brewery → Products).

### 5.2 Child Object  
An identity object linked to a parent object (e.g., Keg → Product).

### 5.3 Verification Path  
The sequence of identity objects from keg → coupler → line → faucet.

### 5.4 Identity State  
Registry-defined conditions including:

- Active  
- In Transit  
- Verified  
- Deactivated  
- Retired  

Identity states determine whether a product may be served.

---

## 6. Operator Terminology

### 6.1 “Scan Before You Connect”  
The core operational principle of DraftVerify:  
**NFC verification must occur prior to attaching the coupler.**

### 6.2 “NA Gold”  
The mandatory visual color for non-alcoholic pathway identification.

### 6.3 “Non-Compliant”  
Any keg, coupler, line, or faucet lacking required DraftVerify identifiers.

### 6.4 “Mismatch”  
A condition where a physical identifier does not match the Registry record.

---

## 7. Terminology Control

All terminology in the DraftVerify ecosystem must:

- Match exactly the definitions in F-2  
- Use the naming conventions provided  
- Avoid synonyms unless explicitly defined  

If a term is used in:

- packaging  
- training  
- registry fields  
- digital systems  
- verification logic  
- brewery documents  

…it must use the F-2 definition.

---

## 8. Revision Policy

All updates to terminology occur in this document.  
No other standard may redefine a term.

Requests for terminology changes may be submitted to:

📧 **standards@draftverify.com**

---

## 9. Copyright

All terminology, naming structures, definitions, and identity classifications are copyrighted intellectual property of:

**DraftVerify™ Standards Initiative**  

Unauthorized reproduction or use in competing systems is prohibited.

</div>
</section>
