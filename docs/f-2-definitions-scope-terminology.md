---
layout: default
title: "F-2 — Definitions, Scope & Terminology"
permalink: /docs/f-2-definitions/
description: "Authoritative definitions and terminology used in all DraftVerify standards, protocols, and identity frameworks."
---

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-2</div>
# Definitions, Scope & Terminology  
<p style="font-size:0.95rem;color:#6b7280;">
Version: 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

This document provides the **authoritative vocabulary** for the DraftVerify Standard v1.0 and the complete 40-document standard library.  
Where definitions conflict, **this document overrides all others**.

  </div>
</section>



<!-- SECTION 1 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 1.0 Scope of This Document

This document establishes:

- the **formal terminology** used in all DraftVerify standards  
- the boundaries of what counts as “non-alcoholic draft”  
- classification rules for beverages, hardware, tags, and digital records  
- required interpretation rules that apply across all documents  

This document **must be read before any other DraftVerify standard**.

  </div>
</section>



<!-- SECTION 2 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 2.0 Foundational Definitions

### 2.1 Non-Alcoholic Beverage (NA Beverage)
A beverage that meets the **legal definition of non-alcoholic** in the jurisdiction where it is served.  
Common thresholds include:

- **≤ 0.5% ABV** (North America & EU)  
- **≤ 0.05% ABV** (strict jurisdictions)  

The legal definition takes precedence.

### 2.2 NA Draft
Any NA beverage dispensed through a pressurized draft system that includes keg, coupler, line, tower, and faucet.

### 2.3 NA Draft Pathway
The continuous physical chain from:

**keg → coupler → line → chiller → tower → faucet**

A pathway is either **NA** or **Alcoholic** — it cannot be both simultaneously.

### 2.4 Cross-Contact
Any event where an NA pathway becomes exposed to alcoholic product.  
This includes:

- mis-serves  
- incorrect hookups  
- shared lines without approved switching protocol  
- contaminated couplers, lines, or faucets  

Cross-contact requires immediate lockout and logging.

### 2.5 Mixed Draft System
A system where NA and alcoholic products coexist on the same tower, in the same cooler, or within the same draft infrastructure.

### 2.6 NA Identity Architecture (NIA)
The structured labeling system that visually and digitally identifies NA draft hardware.

NIA includes:

- keg collars  
- sidewall markers  
- coupler tags  
- line ID tags  
- faucet markers  
- serialized identity encoding  
- color and symbol requirements  

NIA is defined in **ID-Series documents** (ID-1 through ID-5).

  </div>
</section>



<!-- SECTION 3 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 3.0 DraftVerify Tag System (Core Terminology)

### 3.1 DraftVerify Tag
A serialized identifier assigned to NA hardware.  
Tags exist in two realms:

- **Physical Tag** — a sticker label, collar, or NFC marker  
- **Digital Tag** — the corresponding record in the DraftVerify Registry  

### 3.2 Serialized Tag Number (STN)
A unique identifier following the structure:

**DV-SITE-YEAR-#####**

Example:  
**DV-CA027-2025-00432**

Used for audits, traceability, and incident tracking.

### 3.3 Digital Activation
The event where a physical tag is:

1. **assigned**  
2. **verified**  
3. **activated** in the Registry  

A tag is only valid after activation.

### 3.4 Identity Lockout
A status applied when:

- cross-contact occurs  
- a tag is missing or damaged  
- the Registry record is incomplete  
- service integrity cannot be verified  

Identity lockout prevents the use of the affected NA line.

  </div>
</section>



<!-- SECTION 4 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 4.0 Operational Definitions

### 4.1 Verification Event
A documented check of the NA pathway.  
Includes:

- tag presence  
- correct placement  
- correct activation  
- cleaning cycle confirmation  
- identity continuity  

### 4.2 Cleaning Cycle
Any cleaning event involving:

- line cleaning  
- coupler cleaning  
- faucet disassembly  
- system modification  

Cleaning cycles must be logged.

### 4.3 System Modification Event
Any meaningful change to draft hardware, including:

- adding a new NA line  
- changing keg positions  
- replacing hardware  
- reassigning couplers  
- tower maintenance  
- glycol system work  

All modifications require Registry updates.

  </div>
</section>



<!-- SECTION 5 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 5.0 Role Definitions

### 5.1 Brewery
Any producer responsible for manufacturing NA products.  
Responsible for:

- proper keg labeling  
- tag assignment  
- documentation  
- communicating line requirements  

### 5.2 Distributor
Any entity handling storage and transport of NA kegs.  
Responsible for:

- cold chain  
- NA segregation  
- delivery documentation  

### 5.3 Venue
A bar, restaurant, stadium, hotel, café, taproom, or retailer serving the NA product on draft.

### 5.4 Operator
An individual performing the work at the venue (bartender, tech, manager).

### 5.5 Service Technician
External contractor or brewery rep servicing draft hardware.

### 5.6 DraftVerify Initiative
The organization maintaining standards, registry, and training systems.

  </div>
</section>



<!-- SECTION 6 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 6.0 Interpretation Rules

These rules govern how all DraftVerify standards must be interpreted:

1. **Definitions in this document override all others.**  
2. **“Must”** indicates a required action.  
3. **“Should”** indicates a strong recommendation.  
4. **“May”** indicates optional practices.  
5. Terms are singular unless explicitly plural.  
6. When hardware or software versions conflict with the standard, the **standard prevails**.  
7. Operators remain responsible for legal compliance in their jurisdiction.  

  </div>
</section>



<!-- SECTION 7 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 7.0 Copyright & Intellectual Property

All terms, definitions, classification systems, and structures contained in this document are the **intellectual property of the DraftVerify Standards Initiative**.

No component may be:

- copied  
- adapted  
- rewritten  
- republished  
- used in competing standards  
- used in derivative technical frameworks  

without written permission.

For permissions:  
📧 **legal@draftverify.com**

© 2025 DraftVerify™ Standards Initiative. All rights reserved.

  </div>
</section>
