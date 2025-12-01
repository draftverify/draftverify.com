---
layout: default
title: "F-3 — Identity Architecture Overview"
permalink: /docs/identity-architecture/
description: "High-level architecture of the DraftVerify Identity Stack, including object classes, registry relationships, and verification pathways."
---

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-3</div>

# Identity Architecture Overview

<p style="font-size:0.95rem;color:#6b7280;">
Version 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

This document provides a **high-level architectural map** of the DraftVerify Identity Stack — the system that connects physical draft equipment to digital registry objects.

It defines the major identity classes, relationships, and pathways used throughout the verification lifecycle.

---

## 1. Purpose of the Identity Architecture

The architecture exists to ensure:

- every NA draft source has a **single, unambiguous identity**  
- identity can be verified **before pour**, not after an error  
- physical labels and NFC tags link to a **secure cloud registry**  
- breweries, distributors, and venues all interact with the same source of truth  

This creates a **closed-loop verification system**.

---

## 2. Core Identity Objects

DraftVerify defines five primary object classes:

### **1. Brewery Object**  
Contains producer identity, product catalog, and registry permissions.

### **2. Product Object**  
Represents a specific NA draft beverage  
**Example:** IPA, Lager, Stout.

### **3. Keg Object**  
Each keg is assigned:

- Keg ID  
- Brewery ID  
- Product mapping  
- Packaging date  
- NFC UID(s)  
- Verification history  

### **4. Coupler Tag Object**  
The identity point at the moment of connection.  
Includes:

- NFC UID  
- Associated keg  
- Last verification event  

### **5. Line Tag Object**  
Maps the keg to the faucet.  
Contains:

- Draft line identifier  
- Venue ID  
- Faucet mapping  

---

## 3. Identity Relationships (Simplified)

The DraftVerify Identity Stack forms a **one-directional, error-resistant chain**:

**Brewery → Product → Keg → Coupler Tag → Line Tag → Faucet**

This ensures:

- the identity of every draft source is preserved  
- operators always scan the correct tag at the correct moment  
- the registry maintains a complete identity trail  

---

## 4. Verification Pathway

Each pour follows a consistent validation path:

1. **Operator scans the Coupler Tag**  
   - Confirms the keg matches a Product and Brewery  
   - Pulls registry data (name, style, ABV, packaging date)

2. **System validates registry fields**  
   - Confirms NFC UID match  
   - Confirms keg status (active, expired, flagged)

3. **Optional Line Tag confirmation**  
   - Ensures keg-to-faucet mapping  
   - Prevents cross-connection or mislabeled lines

4. **Verification event is stored**  
   - Operator ID  
   - Timestamp  
   - Location  
   - Tap number / faucet ID  

This produces a **real-time identity guarantee**.

---

## 5. Architectural Principles

DraftVerify identity architecture is built on:

### **Single Source of Truth**  
The registry controls all product, keg, and tag identity.

### **Scan-Based Verification**  
Operators scan **before** pouring, ensuring real-world accuracy.

### **Redundant Physical Signals**  
Color coding + NFC + printed labels = layered protection.

### **Immutable Tag Identity**  
NFC UIDs are cryptographically unique and cannot be duplicated.

### **Venue Independence**  
Brewery identity stays intact regardless of where a keg goes.

---

## 6. Revision Control

All updates to the identity model are published in:

**F-3 — Identity Architecture Overview**

Other documents must reference and defer to the definitions here.

</div>
</section>
