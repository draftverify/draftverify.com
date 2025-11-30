---
layout: default
title: "F-2 — Definitions, Scope & Terminology"
permalink: /docs/f-2/
description: "Core definitions, terminology, and scope used across all DraftVerify Standards."
---

<div class="doc-header">
  <p class="doc-kicker">DraftVerify Standards Library · F-2</p>
  <h1>Definitions, Scope & Terminology</h1>
  <p class="doc-meta">
    Version: 1.0 · Publication Date: 2025-01-01 · Status: Active  
    © 2025 DraftVerify™ Standards Initiative. All rights reserved.
  </p>
</div>

---

# 1. Purpose of This Document

This document defines the **official DraftVerify terminology** used across all standards, SOPs, operational documents, and certification materials.

All other DraftVerify documents reference and inherit definitions from this one.  
If a conflict ever arises in wording, the definitions in this document take precedence.

Using consistent terminology ensures:

- technical clarity  
- legal defensibility  
- alignment across breweries, distributors, venues, and auditors  
- enforceability of DraftVerify trademarks and copyrights  
- global standardization over time  

---

# 2. Foundational Terms

### **2.1 Non-Alcoholic (NA) Beverage**
A beverage that meets the legal definition of non-alcoholic in the jurisdiction where it is served (e.g., ≤ 0.5% ABV in many markets).

### **2.2 Alcoholic Beverage**
Any beverage exceeding the jurisdiction’s legal threshold for non-alcoholic classification.

### **2.3 NA Draft System**
A draft system, or portion thereof, used to store, transport, and dispense NA beverages from keg to faucet.

### **2.4 Mixed Draft Environment**
Any venue where alcoholic and non-alcoholic draft beverages coexist in shared equipment, shared towers, shared cold rooms, or shared staff workflows.

### **2.5 NA Draft Pathway**
The continuous physical route taken by NA product from keg → coupler → line → tower → faucet.

This is the central object being identified, protected, and verified.

---

# 3. Identity System Terms

### **3.1 Draft Identity Architecture (DIA)**
The structured identity system used across all DraftVerify standards.  
It includes the physical identification layer, digital traceability layer, naming conventions, tag structures, and workflows that unify NA draft identity.

### **3.2 DraftVerify Tag**
A serialized identifier assigned to a DraftVerify connection point. Tags may be:

- NFC-enabled  
- QR-enhanced (if applicable)  
- visual-only markers (for redundancy)  

Each tag has a corresponding **digital record** in the DraftVerify Registry.

### **3.3 Tag Activation**
The process of digitally assigning a physical tag to:

- a specific NA product  
- a specific venue  
- a specific connection point  
- a specific date of activation  

A tag is not valid until activated.

### **3.4 Identity Match**
The condition where the *keg*, *coupler*, *line*, *tower position*, and *faucet* all reflect the same DraftVerify identity.

Identity mismatch triggers a **non-compliance condition**.

### **3.5 Identity Lockout**
Digital or physical restriction applied to a tag, keg, line, or faucet that cannot be used for NA service until corrective action is taken.

---

# 4. Draft System Components

### **4.1 Keg Collar**
A visual ring identifying the keg as NA. May contain:

- product name  
- batch information  
- serialization code  
- DraftVerify ID  

### **4.2 Coupler**
The connector that mates the keg to the draft system. For DraftVerify purposes, couplers are reference points for:

- coupler tags  
- product switching events  
- verification checkpoints  

### **4.3 Beer Line**
Tubing used to convey beverage from keg to tower. May include:

- jumpers  
- trunk lines  
- python bundles  
- wall chases  
- manifolds  

### **4.4 Faucet**
The point of dispense. Faucets serving NA must include:

- NA faucet identification marks  
- DraftVerify faucet tags (if applicable)  
- Identity consistency with keg → line → faucet

---

# 5. Digital System Terms

### **5.1 DraftVerify Registry**
The authoritative digital database containing:

- active and inactive tags  
- venue records  
- system configuration  
- verification logs  
- change logs  
- incident reports  
- audit outcomes  

The Registry is the final source of truth.

### **5.2 Verification Event**
A logged activity confirming that:

- NA identity is intact  
- tags are present and correct  
- product matches the digital record  
- no cross-contact or mis-serve risk exists  

Verification may be:

- daily  
- weekly  
- per-keg-change  
- triggered by cleaning  
- triggered by system modification  

### **5.3 System Configuration Record (SCR)**
A structured document capturing:

- number of NA taps  
- system design  
- tower layout  
- line routing  
- identification plan  
- verification schedule  

Required for both single venues and groups.

---

# 6. Compliance & Audit Terms

### **6.1 DraftVerify Compliance**
Status of a venue, brewery, or distributor that meets all applicable sections of the Standard.

Compliance levels are defined in Document F-5.

### **6.2 Non-Compliance Condition**
Any failure that breaks:

- identity  
- recordkeeping  
- required verification  
- tag activation  
- physical identification visibility  
- NA separation  

### **6.3 Corrective Action Event**
A process triggered when non-compliance occurs. It includes:

- documenting the issue  
- identifying the cause  
- locking out affected components  
- restoring compliance  
- recording completion  

### **6.4 Mis-Serve**
Any instance where an alcoholic beverage is:

- served through an NA faucet  
- served through an NA-marked line  
- presented to a guest as NA  

This is a high-severity incident.

### **6.5 Cross-Contact**
Any instance where alcoholic and NA products share pathways without proper cleaning and flushing, whether or not served to a guest.

Cross-contact incidents trigger immediate review and lockout.

---

# 7. Operational Terms

### **7.1 Product Switching Event**
Replacing one NA product with another on the same line. Requires:

- updated tag activation  
- cleaning protocol  
- verification log entry  

### **7.2 Line Reuse Event**
Switching a line from alcoholic → NA (or vice versa).  
Requires strict compliance with:

- Line reuse SOP  
- Verification  
- Cleaning  
- Registry update  

Defined in Document S-9 and ID-4.

### **7.3 System Modification Event**
Any changes to:

- line routing  
- tower configuration  
- keg location  
- faucet reassignment  
- coupler type  
- gas system  

Requires:

- re-verification  
- registry update  
- potential re-tagging  

---

# 8. Scope of Application

### **8.1 Venues**
Bars, restaurants, cafés, breweries, hotels, stadiums, retail growler stations, and multi-site groups.

### **8.2 Breweries**
Producers of NA beverages responsible for:

- keg preparation  
- batch record accuracy  
- keg identity application  
- tag pre-programming (if applicable)  

### **8.3 Distributors**
Parties responsible for:

- transport  
- storage  
- cold chain protection  
- NA separation in warehouses and vehicles  
- handoff documentation  

### **8.4 Draft Technicians**
May be:

- brewery staff  
- third-party technicians  
- in-house venue technicians  
Responsible for:

- installation  
- line routing  
- faucet swapping  
- system verification  

---

# 9. Governance and Change Management

### **9.1 Document Authority**
This Definitions document is authoritative over all other DraftVerify documents.

### **9.2 Terminology Expansion**
New terms may be added as:

- technology evolves  
- new beverage categories adopt the standard  
- new tag types are introduced  

### **9.3 Term Conflicts**
If two DraftVerify documents conflict in terminology:

1. F-2 Definitions prevails.  
2. The conflicting document must be updated.

### **9.4 Revision Triggers**
Revisions may be triggered by:

- industry feedback  
- safety findings  
- technology updates (e.g., new NFC tags)  
- legal or regulatory changes  

Revision policy is defined in Document F-40.

---

# 10. Copyright

This terminology, structure, and identity system is © 2025 DraftVerify Standards Initiative.

It may **not** be copied, adapted, reworded, or used to create competing standards or derivative systems.

For permissions:  
📧 legal@draftverify.com  
🌐 https://www.draftverify.com/legal/

