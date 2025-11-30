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
Version 1.0 · Publication Date: 2025-01-01 · Status: Active<br>
© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

This document is the **authoritative glossary** for the DraftVerify Standards Library.  
It defines all terminology, identity structures, object classes, digital registry fields,  
and NA draft system vocabulary referenced throughout documents F-1 through F-40.

Where terminology conflicts occur, **F-2 controls**.

  </div>
</section>


<!-- SECTION 1 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 1. Scope of This Document

### **1.1 Purpose**
This document establishes:

- standardized vocabulary  
- precise technical definitions  
- identity architecture terminology  
- data model definitions  
- operative language used in all DraftVerify Standards  

F-2 provides the **linguistic and structural foundation** for compliance, certification,  
identity accuracy, and digital verification.

### **1.2 Applicability**
F-2 applies to all:

- breweries  
- distributors  
- venues  
- auditors  
- DraftVerify partners  
- digital registry clients  
- implementers of ID-Series standards  

Any entity using or referencing DraftVerify materials must interpret terms as defined here.

### **1.3 Status**
This is a **normative, controlling document**.  
It is not optional and must be applied to all DraftVerify-related activities.

  </div>
</section>


<!-- SECTION 2 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 2. Definitions

### **2.1 Beverage & Category Terms**

**NA Beverage**  
A beverage meeting legal criteria for non-alcoholic classification in its jurisdiction.

**Alcoholic Beverage**  
Any beverage exceeding local NA thresholds (e.g., >0.5% ABV in Canada/USA).

**Mixed Draft System**  
A draft system containing **both** NA and alcoholic pathways.

**Dedicated NA System**  
A draft system containing **only** non-alcoholic pathways.

---

### **2.2 Draft Pathway Terms**

**Draft Pathway**  
The uninterrupted physical route from keg → coupler → line → tower → faucet.

**NA Draft Pathway**  
A pathway exclusively dedicated to NA beverage service.

**Component**  
Any hardware element along the pathway (keg, coupler, jumper, trunk, tower, faucet).

**System Break**  
Any interruption to identity, tagging, or digital activation, invalidating compliance.

---

### **2.3 Identification & Tagging Terms**

**Serialized Tag**  
A uniquely identified physical tag with a cryptographically-unique NFC ID or  
machine-readable code.

**Identity Architecture (DIA)**  
DraftVerify’s layered system of object identifiers, component classes, tag placement  
rules, and digital registry references enabling end-to-end traceability.

**Identity Chain**  
The continuous linkage between all identification elements across the NA pathway.

**Keg Collar (ID-1)**  
Top-mounted identification marking for NA kegs.

**Coupler Tag (ID-2)**  
Serialized tag affixed near the keg valve/coupler connection.

**Line Tag (ID-3)**  
Identification label or NFC marker applied along the beverage line.

**Faucet Marker (ID-4)**  
Visible identifier at the face of service (tower or faucet).

---

### **2.4 Digital Registry Terms**

**Digital Activation**  
The process of linking serialized tags to registry objects and verifying  
their status.

**Registry Object**  
Any digital record representing a tagged component, beverage, batch, or system state.

**Verification Event**  
A logged interaction confirming identity, cleanliness, status, or pathway integrity.

**Change Log**  
Registry entries documenting modifications to tagged components or system structure.

**Incident Record**  
A documented event indicating mis-serve, cross-contact, or integrity failure.

---

### **2.5 Compliance & Certification Terms**

**DraftVerify-Verified**  
A venue, brewery, or distributor meeting all standards and passing required audits.

**Self-Verified**  
A venue following F-Series requirements without external audit.

**Corrective Action**  
Required operational steps following a mis-serve, system failure, or identity break.

**Mark Usage**  
Authorized placement of the DraftVerify certification mark per F-32.

  </div>
</section>


<!-- SECTION 3 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 3. Terminology Rules

### **3.1 Operative Language**
DraftVerify uses standard normative terms:

- **Must** — mandatory requirement  
- **Shall** — compliance-critical requirement  
- **Should** — recommended best practice  
- **May** — optional practice  
- **Can** — describes capability, not permission  

### **3.2 Precedence**
Where contradictions occur:

1. F-2 — Definitions (this document)  
2. F-1 — Core Standard  
3. ID-Series standards (physical components)  
4. VX-Series standards (digital verification)  
5. CX-Series documents (compliance, mark use, incident response)

F-2 overrides all terminology conflicts.

  </div>
</section>


<!-- SECTION 4 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 4. Governance & Updates

### **4.1 Living Glossary**
Terminology evolves with:

- new field findings  
- updates to digital systems  
- identity architecture changes  
- new components or tag formats  
- future revisions of DraftVerify Standards  

### **4.2 Change Control**
Proposed modifications must be submitted to:

📧 **standards@draftverify.com**

Changes are reviewed and published at the discretion of  
the DraftVerify Standards Initiative.

  </div>
</section>


<!-- SECTION 5 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 5. Copyright & Intellectual Property

All terminology, identity structures, and digital schemas defined in this document  
are the exclusive property of the:

### **DraftVerify™ Standards Initiative**

No terms may be:

- copied  
- repurposed  
- adapted into competing systems  
- redistributed  
- reformatted into competing standards  

without explicit written authorization.

For permissions:  
📧 **legal@draftverify.com**  
🌐 <https://www.draftverify.com/legal/>

© 2025 DraftVerify™ Standards Initiative. All rights reserved.

  </div>
</section>
