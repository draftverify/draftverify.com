---
layout: default
title: "F-28 — DraftVerify Registry Specification"
permalink: /docs/registry-spec/
description: "DraftVerify v2.0 technical specification for controlled identity, certificate status, verification events, state transitions, and registry integrity."
---

<section class="section">
<div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-28 · Normative Registry Specification</div>

# DraftVerify Registry Specification

<p style="font-size:0.95rem;color:#6b7280;">
Version 2.0 · Publication Date: 2026-09-22 · Status: Published / Effective  
<br>Document ID: DV-F-28-v2.0  
<br>© 2026 DraftVerify™ Standards Initiative. All rights reserved.
</p>

> **Authority.** The DraftVerify Registry is the controlling DraftVerify record for identifiers, applicable verification events, mappings, and certificate status. This does not make the Registry a government record or public regulatory database.

## 1. Core object classes

The Registry shall support controlled records for, as applicable:

- organizations;
- sites;
- products;
- kegs or containers;
- DraftVerify identifiers;
- lines and points of service;
- verification events;
- change events;
- incidents;
- certificates; and
- certificate status history.

## 2. Identifier integrity

Each DraftVerify-controlled identifier shall be unique within its namespace.

The Registry shall prevent or detect:

- duplicate active identifier assignment;
- conflicting active product assignment;
- unauthorized reassignment;
- invalid state transitions; and
- use of a retired or revoked identifier where prohibited.

## 3. Required states

Identifier and certificate objects shall use defined states.

At minimum, certificate states shall include:

- **Pending**;
- **Active**;
- **Suspended**;
- **Withdrawn**;
- **Expired**.

A public certification claim is valid only while the applicable certificate state is **Active**, unless a written program rule expressly permits another status representation.

## 4. Certificate object

A certificate record shall include:

- certificate ID;
- holder;
- scope;
- applicable Standard version;
- issue date;
- expiry or review date where applicable;
- current status;
- status effective timestamp; and
- link to the decision record or controlled internal reference.

## 5. Verification event

A verification event shall include, where applicable:

- unique event ID;
- timestamp;
- identifier;
- expected identity;
- observed identity;
- result;
- site or system context;
- actor or device reference; and
- exception or mismatch information.

## 6. Change history

Material changes to controlled identity, mapping, or certificate status shall create a durable history entry.

The system shall not silently overwrite historical status evidence needed to reconstruct a material event.

## 7. Access control

Permissions shall be role-based.

Administrative functions capable of changing identity, mappings, certificate status, or evidence records shall be restricted to authorized roles.

## 8. Security controls

The Registry shall implement controls appropriate to its risk, including:

- authentication for privileged actions;
- authorization checks;
- protection against identifier enumeration or abuse where appropriate;
- logging of privileged changes;
- backup and recovery controls;
- reasonable rate limiting or abuse detection; and
- protection of secrets and credentials.

The public F-Series does not disclose security-sensitive implementation details that would materially weaken the Registry.

## 9. Evidence integrity

Where a Registry record is used as certification evidence:

- the source shall be identifiable;
- material edits shall be attributable;
- the time basis shall be recorded;
- correction shall preserve the original material history where feasible; and
- unauthorized alteration shall be investigated.

## 10. Privacy and data minimization

The Registry shall collect and expose only information reasonably necessary for its stated operational and certification purposes.

Public certificate validation should disclose sufficient information to validate certificate identity, scope, version, and status without unnecessarily disclosing confidential operational information.

## 11. Interface versioning

Machine-readable interfaces shall be versioned.

A breaking interface change shall not silently change the meaning of an existing identifier, status, or verification result.

## 12. Controlling status

If a printed certificate, badge, screenshot, exported report, or third-party record conflicts with the current DraftVerify Registry certificate status, the Registry status controls for DraftVerify purposes.

## 13. Proprietary implementation

This document publishes functional requirements necessary to understand DraftVerify conformity. It does not require DraftVerify to publish source code, security secrets, fraud-detection logic, private audit logic, credentials, or other confidential implementation details.

</div>
</section>
