---
layout: default
title: "F-3 — Identity Architecture Overview"
permalink: /docs/f-3-identity-architecture-overview/
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
- breweries, distributors, and venues all interact with the same identity source of truth

This creates a **closed-loop verification system**.

---

## 2. Core Identity Objects

DraftVerify defines five primary object classes:

### **1. Brewery Object**  
Contains producer identity, product catalog, and registry permissions.

### **2. Product Object**  
Represents a specific NA draft beverage (ex: IPA, Lager, Stout).

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

