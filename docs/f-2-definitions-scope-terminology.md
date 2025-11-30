---
layout: default
title: "F-2 — Definitions, Scope & Terminology"
permalink: /docs/f-2-definitions-scope-terminology/
description: "Authoritative terminology and definitions governing all DraftVerify standards, identity structures, and verification procedures."
---

<div class="kicker">DraftVerify Standards Library · F-2</div>

# Definitions, Scope & Terminology

<p style="font-size:0.95rem;color:#6b7280;">
Version 1.0 · Publication Date: 2025-01-01 · Status: Active<br>
© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

This document is the **authoritative glossary** for the DraftVerify Standards Library.  
It defines all terminology, identity structures, object classes, digital registry fields,  
and NA draft system vocabulary referenced throughout documents F-1 through F-40.

Where terminology conflicts occur, **F-2 controls**.

---

## 1. Scope of This Document

### 1.1 Purpose

This document establishes:

- standardized vocabulary  
- precise technical definitions  
- identity architecture terminology  
- data model definitions  
- operative language (“shall,” “should,” etc.)  
- classification rules for NA draft system components  

It ensures interoperability, consistency, and global clarity.

### 1.2 Applicability

Applies to **all DraftVerify standards**, including:

- physical identification (ID-series)  
- brewery, distributor, venue protocols  
- digital registry specifications  
- verification and audit standards  
- legal and certification frameworks  

### 1.3 Hierarchy

Definitions in **F-2 override**:

- terms used in other DraftVerify standards  
- external definitions  
- informal industry usage  

---

## 2. Normative Language

### 2.1 Shall

Indicates a **mandatory requirement**.

### 2.2 Shall Not / Must Not

Indicates a **prohibited action** and non-compliance.

### 2.3 Should

Indicates a **recommended practice**, unless a documented constraint exists.

### 2.4 May

Indicates a **permitted action** within standard boundaries.

### 2.5 Is Considered / Is Not Considered

Used for formal classification determinations.

---

## 3. Core NA Draft Definitions

### 3.1 Non-Alcoholic Beverage (NA Beverage)

A beverage meeting local legal NA thresholds for alcohol content  
(for example, less than or equal to 0.5% ABV depending on jurisdiction).

### 3.2 NA Draft System

Any draft-dispense system serving NA beverages, comprising:

- keg  
- coupler  
- beer line  
- tower  
- faucet  
- gas system  
- digital identity and records (DraftVerify layer)  

### 3.3 NA Draft Pathway

The continuous chain from **keg → faucet** associated with an NA product.

### 3.4 Mixed Draft Environment

A system where alcoholic and NA draft products coexist.

### 3.5 Dedicated NA System

A draft system exclusively serving NA beverages.

### 3.6 Cross-Contact

Unintended mixing between alcoholic and NA pathways.

---

## 4. Identity Architecture (DIA) Definitions

### 4.1 DraftVerify Identity Architecture (DIA)

The combined physical and digital identity system for NA draft.

### 4.2 Serialized Tag

A uniquely encoded DraftVerify identifier with:

- DV identity string  
- NDEF record  
- JSON metadata  
- registry activation record  

### 4.3 Digital Activation

The process of linking a serialized tag to a component and registry entry.

### 4.4 Identity Chain

The continuous set of identities associated with one NA pathway:

- keg  
- coupler  
- line  
- faucet  

### 4.5 Object Class Codes

| Code | Object      |
|------|-------------|
| KG   | Keg         |
| CP   | Coupler     |
| LN   | Beer Line   |
| TW   | Tower       |
| FT   | Faucet      |
| GS   | Gas System  |
| VT   | Venue       |
| BR   | Brewery     |
| DS   | Distributor |

### 4.6 Identity States

| State | Meaning              |
|-------|----------------------|
| A     | Active               |
| I     | Inactive (not yet activated) |
| L     | Locked Out           |
| R     | Retired              |
| X     | Exception (flagged)  |

---

## 5. Digital Registry & Data Definitions

### 5.1 DraftVerify Registry

Authoritative database capturing:

- tag identifiers  
- activation data  
- verification events  
- custody transfers  
- audit trails  
- exception flags  

### 5.2 DV Identity String

Official, globally unique DV identity  
(for example: `DV-KG-2025-HOPCO-00412`).

### 5.3 NDEF Record

The NFC record containing the DV identity and associated data.

### 5.4 UID (Hardware ID)

Unchangeable NFC chip ID.  
Distinct from DV identity.  
Never used as the official identity.

### 5.5 Verification Event

A documented compliance check recorded in the Registry.

### 5.6 Custody Event

Record showing transfer of responsibility:

- brewery → distributor  
- distributor → venue  
- venue → venue  

### 5.7 Activation Record

Record linking identity to component, user, timestamp, and batch.

### 5.8 Exception Flag

System-level marker indicating irregularity.

---

## 6. Physical System Definitions

### 6.1 Keg (KG)

Primary vessel containing NA beverage.

### 6.2 Coupler (CP)

Hardware connecting keg valve to beer line.

### 6.3 Beer Line (LN)

Tubing delivering beverage to tower.

### 6.4 Tower (TW)

Structure housing line-to-faucet transition.

### 6.5 Faucet (FT)

Final dispense mechanism.

### 6.6 Gas System (GS)

CO₂ or N₂ system driving product through lines.

### 6.7 Shared Tower

Tower serving both alcoholic and NA products.

### 6.8 Rerouted Line

Line temporarily reassigned to a new product.

### 6.9 Line Break

Loss of continuous NA identity chain.

---

## 7. Identification System Definitions (ID-Series)

### 7.1 Keg Collar Tag

Primary visual identity device for NA kegs.

### 7.2 Coupler Tag

Serialized identifier installed at the coupler connection point.

### 7.3 Line Identity Tag

Identification markers applied along beer lines.

### 7.4 Faucet Marker

Visual signal at the faucet level clearly indicating NA product.

### 7.5 Visual Lexicon

Unified graphical system including:

- color codes  
- shapes  
- symbol geometry  
- label layouts  
- spacing rules  

### 7.6 Durability Standard

Minimum environmental performance requirements for IDs.

---

## 8. Brewery-Level Definitions

### 8.1 Serialization

Assignment of a unique DV identity to a component or batch.

### 8.2 Encoding

Writing DV identity to an NFC tag.

### 8.3 Locking

Applying write-protection to an encoded tag.

### 8.4 Activation Preparation

Steps performed before products ship to ensure identities are ready for use.

### 8.5 Rejected Tag

A tag that fails validation and is destroyed or permanently disabled.

---

## 9. Distributor-Level Definitions

### 9.1 Custody Chain

Documented record of product movement and responsibility.

### 9.2 Exception Handling

Procedures for damaged, misconfigured, or mismatched components.

### 9.3 Segregated Transport

Physical separation of NA and alcoholic kegs in transit.

---

## 10. Venue-Level Definitions

### 10.1 First Verification

Initial site-wide compliance confirmation when DraftVerify is implemented.

### 10.2 Daily Verification

Routine staff-level checks.

### 10.3 Weekly Verification

Manager-level compliance review.

### 10.4 Locked-Out Component

Component temporarily removed from service due to non-compliance.

---

## 11. Incident Response Definitions

### 11.1 Mis-Serve

Serving an alcoholic beverage as NA.

### 11.2 Cross-Contact Event

Any contamination between NA and alcoholic systems.

### 11.3 Incident Report

Formal record of any mis-serve or near-miss event.

### 11.4 Corrective Action

Required steps to restore compliance and prevent recurrence.

---

## 12. Certification & Mark Use Definitions

### 12.1 Certification Mark

DraftVerify symbols and badges granted to compliant operators.

### 12.2 Certification Levels

| Level            | Meaning                          |
|------------------|----------------------------------|
| Self-Verified    | Internal compliance only         |
| Brewery-Verified | Verified by product manufacturer |
| DV-Verified      | Verified by DraftVerify review   |

### 12.3 Misuse of Mark

Any unauthorized or deceptive use of the mark.

---

## 13. Legal Definitions

### 13.1 Intellectual Property (IP)

All DV identity structures, workflows, data schemas, naming conventions,  
and document language.

### 13.2 Proprietary Framework

The combined identity, digital, and procedural system unique to DraftVerify.

### 13.3 Derivative Standard

Any competing or modified standard built using DraftVerify concepts — prohibited.

---

## 14. Revision Definitions

### 14.1 Minor Revision

Small clarification; no structural change to compliance.

### 14.2 Major Revision

Structural change affecting compliance or implementation.

### 14.3 Governance Authority

DraftVerify Standards Initiative (DVSI).

---

## 15. Copyright & IP Notice

All definitions, terms, identity structures, workflows, and data models contained within  
this document are the exclusive intellectual property of:

**DraftVerify™ Standards Initiative**

No part may be:

- reproduced  
- modified  
- redistributed  
- incorporated into competing standards  

without written authorization.

For permissions: `legal@draftverify.com`
