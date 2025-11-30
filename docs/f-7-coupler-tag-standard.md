---
layout: default
title: "F-7 — Coupler Tag Standard"
permalink: /docs/f-7-coupler-tag-standard/
description: "Mandatory DraftVerify Standard for the design, placement, durability, and serialized digital identity requirements of coupler-mounted non-alcoholic draft identification tags."
---

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-7</div>
# Coupler Tag Standard
<p style="font-size:0.95rem;color:#6b7280;">
Version: 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

The coupler tag is the **final control point** in the DraftVerify identity chain and the tag that staff interact with at the **moment of greatest risk** — keg changeover.

This document defines the **mandatory requirements** for coupler tag design, placement, serialization, digital identity, durability, and compliance under the DraftVerify Standard v1.0.

  </div>
</section>



<!-- SECTION 1 — PURPOSE -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 1.0 Purpose

The coupler tag ensures that:

- non-alcoholic identity is visible at the exact point of keg connection  
- staff are prevented from accidentally connecting an alcoholic keg to an NA line  
- the digital DraftVerify Registry identity matches the physical keg in use  
- chain-of-custody and activation begin at the keg engagement point  
- mis-serve and cross-contact risk are reduced to near-zero  

Coupler tags are **mandatory** for all NA kegs in DraftVerify-compliant service.

  </div>
</section>



<!-- SECTION 2 — APPROVED TAG TYPES -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 2.0 Approved Coupler Tag Types

DraftVerify authorizes two coupler tag categories:

### 2.1 NFC-Enabled Coupler Tag (Primary Standard)

The NFC-enabled tag is the **preferred and default** implementation.

It must:

- contain an NFC NTAG (213 / 215 / 216 or approved equivalent)  
- be encoded with a **globally unique DraftVerify digital identity**  
- follow all encoding rules in **F-12 — Brewery NFC Tag Serialization SOP**  
- include DraftVerify non-alcoholic (NA) banding and insignia  
- be physically readable and scannable at the keg coupler location  

### 2.2 Non-NFC Physical Coupler Tag (Fallback)

Used only when:

- NFC is temporarily unavailable, or  
- a distributor or venue is in transition toward full NFC compliance  

It must:

- display the serialized DraftVerify Tag ID in human-readable form  
- include DraftVerify NA color banding  
- be tamper-resistant once applied  

Fallback tags must be logged and replaced with NFC-enabled tags at the earliest feasible opportunity.

  </div>
</section>



<!-- SECTION 3 — DIGITAL IDENTITY & ENCODING -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 3.0 Digital Identity & Encoding Requirements

For NFC-enabled coupler tags, the following requirements apply.

### 3.1 Identity Schema

Each tag must encode the official DraftVerify identity string:

DV-KG-YYYY-BREWERYCODE-#####

Where:

- DV = DraftVerify system prefix  
- KG = object class (keg / coupler identity)  
- YYYY = year of serialization  
- BREWERYCODE = 3–6 character brewery identifier  
- ##### = zero-padded sequential serial number  

The full schema is defined in F-12.

### 3.2 NDEF Primary Record

The primary NDEF record must contain the identity string exactly as defined above.

### 3.3 JSON Metadata Record

A secondary record (text or JSON) must store the following fields:

- dv_version  
- object (set to “coupler”)  
- brewery (BREWERYCODE)  
- year (YYYY)  
- serial (#####)  

### 3.4 Optional URL Pointer

If used, the URL pointer must follow the format:

https://registry.draftverify.com/keg/DV-KG-YYYY-BREWERYCODE-#####

### 3.5 Tag Locking

After encoding, all NFC coupler tags must:

- be write-locked  
- apply password protection if supported  
- be verified using a DraftVerify-approved encoder  

Unsecured or partially encoded tags are **not valid** under this Standard.

  </div>
</section>



<!-- SECTION 4 — VISUAL REQUIREMENTS -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 4.0 Visual Design Requirements

Coupler tags must clearly indicate non-alcoholic identity.

### 4.1 Color System

Tags must use the DraftVerify NA color system:

- NA Gold Band (primary program), or  
- NA Blue Band (alternate program, if applicable)  

The band must be:

- continuous around the visible edge or face  
- non-reflective  
- minimum 16 mm in height where space allows  

### 4.2 Typography

Printed text must:

- use a bold sans-serif typeface  
- be at least 7 mm in height for NA statements  
- use uppercase for critical wording  

### 4.3 Required Printed Elements

Each coupler tag must display:

- the serialized DraftVerify ID (or shortened human-readable form if space-limited)  
- “NON-ALCOHOLIC DRAFT” or “NA DRAFT”  
- the DraftVerify insignia or approved mark  

No brewery may alter or substitute these required elements.

  </div>
</section>



<!-- SECTION 5 — PLACEMENT REQUIREMENTS -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 5.0 Placement Requirements

The coupler tag must be installed:

- directly adjacent to the keg spear / coupler flange  
- in a position visible to staff **as they attach the coupler**  
- not obstructed by gas lines, safety locks, or other hardware  
- within approximately 25 mm of the engagement point, where feasible  

The purpose of this location is to ensure that **no staff member can connect a keg without seeing the NA identifier**.

Incorrect placement is a non-compliance condition.

  </div>
</section>



<!-- SECTION 6 — DURABILITY REQUIREMENTS -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 6.0 Durability Requirements

Coupler tags must withstand:

- condensation and moisture  
- cold storage temperatures  
- routine handling during keg rotation  
- contact with sanitizers and cleaning chemicals  
- vibration and impact during transport  

Minimum functional durability: **90 days** under typical cold-chain conditions.

Damaged or unreadable tags must be replaced before the keg re-enters service.

  </div>
</section>



<!-- SECTION 7 — VERIFICATION & CHAIN-OF-CUSTODY -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 7.0 Verification & Chain-of-Custody

At the point of keg connection, staff must:

- confirm the presence of a coupler tag  
- visually verify that the tag indicates NA draft  
- ensure the serialized ID matches the intended line identity  
- confirm that the tag is in an Active state in the DraftVerify Registry  

Distributors must:

- verify alignment between lot, product, and tag identity  
- ensure NA-only segregation in storage and transport  
- report any inconsistencies or damaged tags  

Failure to perform these checks removes the system from DraftVerify compliance.

  </div>
</section>



<!-- SECTION 8 — NON-COMPLIANCE CONDITIONS -->
<section class="section">
  <div className="container" style="max-width:820px" markdown="1">

## 8.0 Non-Compliance Conditions

A keg is **not** DraftVerify-compliant if its coupler tag is:

- missing  
- damaged or illegible  
- incorrectly placed or rotated out of sight  
- not encoded using the DraftVerify identity schema  
- not write-locked or otherwise secure  
- not activated in the DraftVerify Registry  
- mismatched to the product or line configuration  

Such kegs must not be connected to any NA draft line.

  </div>
</section>



<!-- SECTION 9 — RELATED DOCUMENTS -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 9.0 Related Standards

This document must be applied together with:

- **F-6 — Keg Identification Standard**  
- **F-8 — Beer Line Identification Standard**  
- **F-12 — Brewery NFC Tag Serialization SOP**  
- **F-13 — Brewery Activation Workflow**  
- **F-18 — Venue Setup & Verification Protocol**

  </div>
</section>



<!-- SECTION 10 — COPYRIGHT -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 10.0 Copyright & Intellectual Property

All coupler tag specifications, visual systems, placement rules, and digital identity models in this document are the protected intellectual property of the **DraftVerify™ Standards Initiative**.

Use in:

- derivative or competing standards  
- commercial certification frameworks  
- inspection or audit programs  
- training or education materials  

is prohibited without prior written authorization.

© 2025 DraftVerify™ Standards Initiative. All rights reserved.

  </div>
</section>
