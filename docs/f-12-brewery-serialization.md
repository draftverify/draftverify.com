---
layout: default
title: "F-12 — Brewery NFC Tag Serialization SOP"
permalink: /docs/brewery-serialization/
description: "Official DraftVerify SOP for encoding, serializing, validating, and assigning NFC tags to non-alcoholic kegs at the brewery level."
---

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-12</div>
# Brewery NFC Tag Serialization SOP
<p style="font-size:0.95rem;color:#6b7280;">
Version: 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

This document defines the **mandatory serialization procedure** for NFC-enabled DraftVerify tags assigned to non-alcoholic draft kegs at the brewery.

It provides the full workflow for:
- digital identity structure  
- mandatory encoding fields  
- serialization sequences  
- activation rules  
- rejection logic  
- audit and traceability requirements  

Every NFC tag issued under this SOP becomes part of the **global DraftVerify digital identity system**, ensuring NA kegs are fully traceable from brewery → distributor → venue.

  </div>
</section>



<!-- SECTION 1 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 1.0 Purpose

The purpose of this SOP is to:

- establish a universal, duplicational-resistant identity format  
- ensure each NA keg receives a **cryptographically-unique** identity  
- prevent tag reuse, duplication, or reassignment  
- maintain chain-of-custody integrity  
- allow breweries to produce consistent, auditable digital records  

Serialization is the foundation of the DraftVerify verification layer.

  </div>
</section>



<!-- SECTION 2 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 2.0 Required Materials & Tools

Breweries must use:

- **DraftVerify NFC Tags** (NTAG213/215/216 or approved equivalent)  
- **DraftVerify Encoding App** (mobile or desktop)  
- **Serialization Sheet or API Integration**  
- **Secure WiFi or Cellular Connection**  
- **Workstation in NA-Only Kegging Area**  
- **Optional QR Failover Labels** (hybrid systems only)

All NFC tags must be:

- stored dry  
- protected from strong magnets  
- kept below 45°C  
- inventoried and tracked  

Untracked tags are **not permitted** for use.

  </div>
</section>



<!-- SECTION 3 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 3.0 Digital Identity Structure (Mandatory)

Each NFC tag must encode the official DraftVerify identity string:

### **DV-KG-YYYY-BREWERYCODE-#####**

Where:

| Segment | Description |
|--------|-------------|
| **DV** | DraftVerify master prefix |
| **KG** | Identifies object type = keg |
| **YYYY** | Year of serialization |
| **BREWERYCODE** | 3–6 character alphanumeric brewery code |
| **#####** | Sequential 5-digit ID, zero-padded |

### Example  
**DV-KG-2025-ATB-00412**

This identity is the **sole globally valid identity** for the keg.  
Brewery-internal numbers may not replace or modify it.

  </div>
</section>



<!-- SECTION 4 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 4.0 Mandatory NFC Fields to Encode

Each NFC tag must contain:

1. **Primary Identifier (NDEF Text Record)**  
   - `DV-KG-YYYY-BREWERYCODE-#####`

2. **Secondary Metadata (JSON Block)**  
   ```json
   {
     "dv_version": "1.0",
     "type": "keg",
     "brewery": "BREWERYCODE",
     "year": "YYYY",
     "serial": "#####"
   }
