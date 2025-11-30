---
layout: default
title: "DraftVerify Standard v1.0 — Non-Alcoholic Draft Systems"
permalink: /docs/standard-v1/
description: "The core DraftVerify Standard v1.0 for identifying, separating, and verifying non-alcoholic draft systems from keg to faucet."
---

<div class="doc-header">
  <p class="doc-kicker">DraftVerify Standards Library · F-1</p>
  <h1>DraftVerify Standard v1.0 — Non-Alcoholic Draft Systems</h1>
  <p class="doc-meta">
    Version: 1.0 · Publication Date: 2025-01-01 · Status: Active  
    © 2025 DraftVerify™ Standards Initiative. All rights reserved.
  </p>
</div>

---

## 1. Purpose, Scope, and Status

### 1.1 Purpose

The purpose of the DraftVerify Standard v1.0 is to provide a clear, repeatable, and verifiable framework for:

- **Identifying** non-alcoholic (NA) draft products and their dedicated pathways  
- **Separating** NA draft systems from alcoholic draft systems to prevent cross-contact  
- **Verifying** the integrity of NA draft service through a combined physical and digital approach  

This Standard exists to make NA draft service **understandable, explainable, auditable, and trusted** by venues, breweries, distributors, staff, and guests.

### 1.2 Scope

This Standard applies to:

- Draft systems serving beverages that are **non-alcoholic by legal definition** in their jurisdiction (e.g. ≤ 0.5% ABV where applicable)  
- Mixed draft environments where NA and alcoholic products coexist  
- Dedicated NA draft systems where differentiation and verification still provide value  
- Breweries, distributors, and venues that choose to adopt the DraftVerify system  

It covers:

- Physical identification of kegs, couplers, lines, and faucets used for NA draft  
- Digital registration and activation of NA draft connection points  
- Ongoing verification, recordkeeping, and incident response expectations  

This Standard does **not** cover:

- Packaged product labeling outside of draft service  
- Detailed mechanical design of draft equipment (keg shells, faucets, couplers, etc.)  
- Non-beverage draft systems (e.g., cleaning chemicals, gas systems alone)  

### 1.3 Status of This Standard

DraftVerify Standard v1.0 is a **voluntary, non-regulatory industry standard**.  
It does **not** replace any applicable laws, regulations, or health codes.  

Operators remain responsible for:

- Complying with all local, provincial/state, and federal regulations  
- Ensuring food safety and worker safety in their operations  

DraftVerify may update this Standard periodically. The most recent version is always the one published on:

**https://www.draftverify.com/standards/**

---

## 2. Key Concepts and Definitions

This section summarizes foundational terms. Full definitions are provided in **F-2: Definitions, Scope & Terminology**.

- **Non-Alcoholic (NA) Beverage**  
  A beverage that meets the legal criteria for non-alcoholic status in the jurisdiction of service (e.g. ≤ 0.5% ABV where applicable).

- **NA Draft Pathway**  
  The contiguous set of components used to move NA beverage from keg to faucet, including:  
  keg → coupler → beer line → tower (if used) → faucet.

- **Draft Identity Architecture (DIA)**  
  The structured way NA draft identities are applied and linked across physical and digital layers.

- **DraftVerify Tag**  
  A serialized identifier (physical tag and digital record) assigned to a specific connection point in the NA draft pathway (e.g. keg collar, coupler tag, line marker, faucet marker).

- **DraftVerify Registry**  
  The digital system where all NA-relevant tags, venues, products, and verification events are recorded and managed.

- **Verification Event**  
  A logged check where a trained person confirms that a given NA draft pathway remains compliant with this Standard.

- **Identity Lockout**  
  The process of marking a draft component as **non-compliant** or **out of service** within the Registry and/or physically, until corrective action is taken.

---

## 3. Structure of the DraftVerify System

### 3.1 Two-Layer Model

The DraftVerify Standard is built on two required layers:

1. **Physical Identification Layer**  
   Visual markers and tags that make NA draft obvious, traceable, and easy to follow along the hardware.

2. **Digital Traceability Layer**  
   A Registry-backed system that records:

   - which keg is connected where  
   - which product is on which line  
   - when verification events and changes occur  
   - who performed them  

A draft system is only considered **DraftVerify Compliant** when **both layers** are in place and aligned.

### 3.2 Identity Chain: Keg → Line → Faucet

Each NA draft pathway must be uniquely identifiable across three primary points:

1. **Keg Identity**  
   - Keg is marked with a DraftVerify-compliant NA collar and, where applicable, an encoded tag.  
   - The keg’s product, batch/lot, and NA status are known and recorded.

2. **Line Identity**  
   - The beer line used for NA is visually distinct from non-NA lines.  
   - Line segments and transitions (e.g., trunk line, jumper) are marked according to the Identification Standards.

3. **Faucet Identity**  
   - Faucets serving NA are clearly marked at the point of pour.  
   - The identity at the faucet must match the identity recorded at the line and keg.

### 3.3 Connection Points and Tags

Each NA draft component may receive one or more of the following tag types (as applicable):

- **Keg Collar Tag**  
- **Coupler Tag**  
- **Line Identification Tag(s)**  
- **Faucet Marker Tag**  

Tag specifications, formats, and placement rules are defined in:

- **ID-Series** (Documents 6–10)  
- **R-Series** (Documents 28–31)

---

## 4. Core Requirements

To be considered DraftVerify Compliant, an NA draft system must meet **all** of the following high-level requirements.

### 4.1 NA Separation

1. NA products must be served on pathways that are **fully flushed, cleaned, and dedicated** to the product currently in use.  
2. Mixed-use lines (NA and alcoholic) are **strongly discouraged**. Where unavoidable, strict controls defined in **System Design** and **Product Switching & Line Reuse Protocol** (Docs 24, 39) must be followed.  
3. Towers that serve both alcoholic and NA products must implement **Tower Sharing Standards** (Doc 25), including clear separation in:

   - faucet arrangement and labeling  
   - line routing inside towers  
   - line identification in trunk bundles  

### 4.2 Physical Identification

1. All NA draft kegs must be identified with a **DraftVerify-compliant keg collar** and any required digital tags.  
2. Each NA coupler must have a **coupler tag** that matches the keg and line identity it serves.  
3. NA beer lines must be visually marked at consistent intervals and at any transition point (e.g., wall plate, chase entry, trunk line entry).  
4. Faucets serving NA products must be clearly marked at the handle and/or faucet-level according to the **Faucet Identification Standard**.  
5. NA identification must remain **visible, durable, and readable** under typical operating conditions (lighting, moisture, cleaning).

### 4.3 Digital Activation and Registry Alignment

1. Each NA connection point (keg, coupler, line, faucet) that receives a DraftVerify tag must be **digitally activated** in the Registry before being used in service.  
2. A tag is considered **valid** only when:

   - it exists in the Registry  
   - it is associated with the correct venue, system, and product  
   - its status is **Active** (not locked out or retired)  

3. Any change that affects the NA pathway (different product, re-plumbed line, new faucet, etc.) must trigger an update in the Registry as defined in **System Modification Protocol** (Doc 27).  
4. Verification Events must be recorded according to **Verification Event Specification** (Doc 30).

### 4.4 Verification and Records

1. Venues must maintain, at minimum:

   - **Verification logs** (daily/weekly checks)  
   - **Cleaning logs** for NA lines (Doc 21)  
   - **Change logs** for system modifications (Doc 20)  
   - **Incident logs** when mis-serves or cross-contact events occur (Doc 22)  

2. Records may be maintained digitally, physically, or hybrid, but must be:

   - accessible for review  
   - complete, legible, and timestamped  
   - retained for the period required by the operator’s policy or local regulation  

3. Breweries and distributors must maintain their own upstream records in accordance with Docs 11–17.

---

## 5. Roles and Responsibilities

### 5.1 Breweries

Breweries that participate in DraftVerify are responsible for:

- Preparing NA kegs with accurate product and batch information  
- Applying NA-specific keg identification according to the **Keg Identification Standard**  
- Serializing and, where applicable, pre-encoding NA tags according to **Brewery NFC Tag Serialization SOP**  
- Communicating NA draft requirements to distribution partners and venues  

### 5.2 Distributors

Distributors are responsible for:

- Maintaining cold chain and NA separation during transport and storage  
- Ensuring NA kegs and associated tags are not misapplied or altered  
- Logging handoffs, exceptions, and returns  
- Coordinating with venues for correct NA setup where applicable  

### 5.3 Venues (Bars, Restaurants, Taprooms, Groups)

Venues are responsible for:

- Installing and configuring NA draft systems according to **Venue Setup & Verification Protocol**  
- Keeping NA components correctly tagged and easily identifiable  
- Performing routine verification checks and logging them  
- Ensuring staff are trained on NA draft expectations and mis-serve prevention  
- Responding to incidents according to **Incident Response & Mis-Serve Procedure**

### 5.4 DraftVerify Standards Initiative

DraftVerify is responsible for:

- Maintaining and publishing the current version of this Standard  
- Maintaining the DraftVerify Registry and tag specifications  
- Providing guidance and educational materials related to NA draft integrity  
- Updating standards based on field experience, safety findings, and technology improvements  

DraftVerify does **not** act as a regulator or enforcement agency.

---

## 6. Verification, Compliance, and Use of Mark

### 6.1 Verification Levels

Operators may participate at different levels, defined in more detail in **Compliance Audit Framework** (Doc 33):

- **Self-Verified**: Venue follows the Standard and maintains records without third-party audits.  
- **Brewery-Verified**: Brewery confirms participating venues meet the Standard for their NA brand(s).  
- **DraftVerify-Verified**: Audits and reviews performed according to DraftVerify’s formal audit process.

### 6.2 Conditions for Using the DraftVerify Mark

An operator may only use the DraftVerify name, marks, or visual identifiers where:

1. They are **actively following** this Standard and the relevant SOPs for their role.  
2. They maintain verifiable records that can be produced upon request.  
3. Their NA draft systems remain in **good standing** according to the Compliance Audit Framework.  

Misuse of the DraftVerify marks is prohibited and subject to enforcement, as outlined in **Use of Mark & Certification Policy** (Doc 32) and the site-wide Legal page.

---

## 7. Incident Response and Continuous Improvement

### 7.1 Mis-Serve or Cross-Contact Events

If a mis-serve or cross-contact incident occurs (e.g., alcoholic product served from an NA-marked faucet):

1. The affected line(s) and components must be immediately **locked out** from NA use.  
2. The incident must be documented according to **Incident Response & Mis-Serve Procedure** (Doc 22).  
3. The Registry must be updated to reflect the incident and any changes to the system.  
4. Corrective actions (e.g., re-cleaning, re-tagging, staff re-training) must be implemented before resuming NA service.

### 7.2 Field Findings and Feedback

Operators are encouraged to report:

- Confusing system scenarios  
- Edge cases not covered in this version  
- Safety concerns or recurring failure modes  

These reports inform future revisions, as defined in **Revision & Governance Policy** (Doc 40).

---

## 8. Relationship to Laws and Other Standards

This Standard is designed to be compatible with:

- Food safety regulations applicable to the venue’s jurisdiction  
- General draft system hygiene and cleaning standards  
- Accessibility and clear communication principles for guests  

Where there is any conflict between this Standard and law, **law prevails**.  
Operators should treat this Standard as an **additional layer** of clarity and control, not a substitute for regulation.

DraftVerify may reference external standards (e.g., DIN, ISO, NSF) for alignment. Such references do **not** imply endorsement, certification, or affiliation by those bodies.

---

## 9. Revision Policy

- **Version 1.0** is the initial release of the DraftVerify Standard for non-alcoholic draft systems.  
- Revisions will be published with incremented version numbers (e.g., 1.1, 1.2, 2.0) and clear change summaries.  
- Only the most recent version published on the DraftVerify website should be treated as current.  

Historical versions may be archived for reference but should not be used for new implementations.

---

## 10. Copyright and Intellectual Property

All content within this Standard — including structure, terminology, identity architecture, workflows, and definitions — is the intellectual property of the **DraftVerify Standards Initiative**.

No part of this document may be copied, adapted, or used to create derivative standards or competing frameworks without prior written permission.

For licensing and permissions:

- 📧 **legal@draftverify.com**  
- 🌐 **https://www.draftverify.com/legal/**

© 2025 DraftVerify™ Standards Initiative. All rights reserved.
