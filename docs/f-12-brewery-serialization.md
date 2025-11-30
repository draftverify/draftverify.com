---
layout: default
title: "F-12 — Brewery NFC Tag Serialization SOP"
permalink: /docs/brewery-serialization/
description: "Mandatory DraftVerify procedure for encoding, locking, validating, and assigning NFC tags to non-alcoholic kegs at the brewery."
---

<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

<div class="kicker">DraftVerify Standards Library · F-12</div>
# Brewery NFC Tag Serialization SOP
<p style="font-size:0.95rem;color:#6b7280;">
Version 1.0 · Publication Date: 2025-01-01 · Status: Active  
<br>© 2025 DraftVerify™ Standards Initiative. All rights reserved.
</p>

This SOP defines the **mandatory serialization method** for all NFC-based DraftVerify tags assigned to non-alcoholic kegs at the brewery.

It establishes strict rules for:
- digital identity formatting  
- encoding & locking procedures  
- serialization numbering sequence  
- activation workflow  
- rejection protocol  
- audit & chain-of-custody compliance  

Every serialized tag becomes part of the **global DraftVerify Registry** and must meet all requirements to be considered valid.

  </div>
</section>


<!-- SECTION 1 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 1.0 Purpose

This SOP ensures that each NA keg receives:

- a **globally unique, non-duplicable digital identity**  
- a tamper-protected NFC tag  
- an immutable chain-of-custody record beginning at the brewery  
- a cryptographically unique ID that cannot be reassigned  

Serialization is the foundation of the DraftVerify verification layer.

  </div>
</section>


<!-- SECTION 2 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 2.0 Required Equipment

Breweries must use:

- **DraftVerify NFC Tags** (NTAG213/215/216 or approved equivalent)  
- **DraftVerify Encoder App** (mobile/desktop)  
- **Serialization Sheet or API Integration**  
- **Secure WiFi or LTE connection**  
- **Designated NA-only encoding workstation**  
- **Optional: QR failover labels**

All NFC tags must be:

- inventoried upon arrival  
- stored dry and dust-free  
- kept below 45°C  
- protected from magnetic interference  

Tags without confirmed inventory records are **prohibited**.

  </div>
</section>


<!-- SECTION 3 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 3.0 Digital Identity Schema (MANDATORY)

Each NFC tag must encode the official DraftVerify identity string:

### **DV-KG-YYYY-BREWERYCODE-#####**

Where:

| Segment | Definition |
|--------|------------|
| **DV** | DraftVerify system prefix |
| **KG** | Object class = keg |
| **YYYY** | Year of serialization |
| **BREWERYCODE** | 3–6 character brewery identifier |
| **#####** | Zero-padded sequential serial number |

### Example  
**DV-KG-2025-HOPCO-00412**

This identity must be used **exactly as written**—no substitutions or internal formats permitted.

  </div>
</section>
<!-- SECTION 4 -->
<section class="section">
  <div class="container" style="max-width:820px">

    <h2>4.0 Required NFC Encoding Fields</h2>

    <p>Each NFC tag must contain the following records:</p>

    <h3>4.1 Primary NDEF Text Record (MANDATORY)</h3>
    <pre>DV-KG-YYYY-BREWERYCODE-#####</pre>

    <h3>4.2 Secondary JSON Metadata (MANDATORY)</h3>
    <pre>{
  "dv_version": "1.0",
  "object": "keg",
  "brewery": "BREWERYCODE",
  "year": "YYYY",
  "serial": "#####"
}</pre>

    <h3>4.3 Optional URL Pointer</h3>
    <pre>https://registry.draftverify.com/keg/DV-KG-YYYY-BREWERYCODE-#####</pre>

    <h3>4.4 Tag Locking Requirements</h3>
    <ul>
      <li>Write-lock must be applied</li>
      <li>Password protection (if supported)</li>
      <li>UID must remain readable and unaltered</li>
    </ul>
    <p><strong>Any unlocked or relockable tag is invalid.</strong></p>

  </div>
</section>



<!-- SECTION 5 -->
<section class="section">
  <div class="container" style="max-width:820px">

    <h2>5.0 Serialization Workflow (FOLLOW IN EXACT ORDER)</h2>

    <ol>
      <li>Retrieve next available serial number</li>
      <li>Scan blank NFC tag</li>
      <li>Confirm the tag has no existing NDEF records</li>
      <li>Encode primary identity</li>
      <li>Encode JSON metadata</li>
      <li>Validate format using DraftVerify Encoder</li>
      <li>Apply write-lock</li>
      <li>Log serialization in system/API</li>
      <li>Affix tag to keg coupler location</li>
      <li>Proceed to activation workflow (see F-13)</li>
    </ol>

    <p><strong>Skipping, altering, or reordering any step is a violation of the DraftVerify Standard.</strong></p>

  </div>
</section>



<!-- SECTION 6 -->
<section class="section">
  <div class="container" style="max-width:820px">

    <h2>6.0 Rejection Criteria</h2>

    <p>A tag must be rejected if:</p>

    <ul>
      <li>Serialization format is incorrect</li>
      <li>UID conflict or corruption detected</li>
      <li>Tag does not lock fully</li>
      <li>Encoding fails or partially writes</li>
      <li>Physical damage is present</li>
      <li>Serial number already exists in registry</li>
    </ul>

    <p>Rejected tags must be immediately:</p>

    <ul>
      <li>Recorded in the rejection log</li>
      <li>Marked as destroyed</li>
      <li>Physically disposed of</li>
    </ul>

    <p><strong>No rejected tag may enter the supply chain.</strong></p>

  </div>
</section>



<!-- SECTION 7 -->
<section class="section">
  <div class="container" style="max-width:820px">

    <h2>7.0 Activation Requirements</h2>

    <p>Activation (defined in F-13) must include:</p>

    <ul>
      <li>Linking NFC identity → batch → product</li>
      <li>Confirming NA-only production path</li>
      <li>Adding staff ID and timestamp</li>
      <li>Confirming transfer to NA-only cold room</li>
    </ul>

    <p><strong>Any keg shipped without activation is NOT DraftVerify compliant.</strong></p>

  </div>
</section>
<!-- SECTION 8 -->
<section class="section">
  <div class="container" style="max-width:820px">

    <h2>8.0 Traceability & Chain-of-Custody</h2>

    <p>The brewery must maintain the following records for every serialized tag:</p>

    <ul>
      <li>Serialization log (identity → tag UID → timestamp → staff ID)</li>
      <li>Tag inventory log (received → used → rejected → destroyed)</li>
      <li>UID integrity records</li>
      <li>Rejected tag log</li>
      <li>Batch linkage record</li>
      <li>Activation record (see F-13)</li>
    </ul>

    <p>
      These records form the <strong>first stage of the DraftVerify chain-of-custody</strong> and must be available
      for audit review at any time.
    </p>

    <p><strong>Minimum retention requirement: 24 months.</strong></p>

  </div>
</section>



<!-- SECTION 9 -->
<section class="section">
  <div class="container" style="max-width:820px">

    <h2>9.0 Audit Protocol</h2>

    <p>DraftVerify may audit any brewery participating in the standard. Audit scope includes:</p>

    <ul>
      <li>Serialization accuracy and identity formatting</li>
      <li>UID collision checks</li>
      <li>Inventory vs. applied tag reconciliation</li>
      <li>Rejected tag volumes vs. explanations</li>
      <li>Activation compliance for all NA kegs</li>
      <li>Chain-of-custody completeness</li>
    </ul>

    <p>Non-compliance may result in:</p>

    <ul>
      <li>Temporary suspension from DraftVerify</li>
      <li>Revocation of certification status</li>
      <li>Immediate halt to tag shipments</li>
      <li>Mandatory corrective action plan</li>
    </ul>

    <p>
      <strong>Audit failure remains on record for 12 months.</strong>
    </p>

  </div>
</section>



<!-- SECTION 10 -->
<section class="section">
  <div class="container" style="max-width:820px">

    <h2>10.0 Intellectual Property Notice</h2>

    <p>
      All serialization schemas, identity structures, encoding formats, workflows, locking rules, and
      registry-linkage processes described in this SOP are the exclusive intellectual property of the
      <strong>DraftVerify™ Standards Initiative</strong>.
    </p>

    <p>
      Unauthorized reproduction, modification, adaptation, or distribution is strictly prohibited under
      international copyright law.
    </p>

    <p>
      Any attempt to recreate, reverse-engineer, or implement these systems without written authorization
      constitutes copyright infringement and may result in immediate legal action.
    </p>

  </div>
</section>
