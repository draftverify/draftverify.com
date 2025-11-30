
### Encoding Rules
- Brewery code must remain consistent across all NA SKUs.  
- Sequential numbers must **never reset within a calendar year**.  
- Each tag must map exactly 1:1 to a single keg.  

Any deviation invalidates the tag.

  </div>
</section>



<!-- SECTION 4 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 4.0 Serialization Workflow

Breweries must follow these steps **in order**:

### **Step 1 — Retrieve Next Available Serial Number**
Via the serialization sheet/API:
- find the highest-issued number  
- increment by one  

### **Step 2 — Prepare Tag for Writing**
- verify tag has not been pre-encoded  
- ensure tag UID is readable  
- ensure no password lock exists  

### **Step 3 — Encode Data Payload**
Write the following fields:

| Field | Description |
|-------|-------------|
| **Primary Serial** | DV-KG-YYYY-BREWERYCODE-##### |
| **Brewery Name** | full legal name |
| **Product Variety** | SKU or beer style |
| **Keg Size** | 20L, 30L, 50L |
| **Activation Status** | set to 'UNACTIVATED' |
| **Timestamp** | automated UTC encoding time |

### **Step 4 — Validate Payload**
System must verify:

- successful write  
- UID matches logged UID  
- checksum passes  
- payload formatting matches schema  

### **Step 5 — Apply Tag to Keg**
Placement:
- near collar  
- upright orientation  
- free from condensation  

### **Step 6 — Mark Serialization Sheet / API**
Status changes from:
- **BLANK** → **ENCODED** (not yet activated)  

### **Step 7 — Transfer to Conditioning / Cold Storage**
Tags remain unactivated until shipping or final inspection.

  </div>
</section>



<!-- SECTION 5 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 5.0 Activation Rules (Digital)

A tag becomes **live** only after:

1. brewery completes serialization  
2. brewery or distributor triggers activation  
3. registry confirms:  
   - serial is unused  
   - UID matches  
   - payload is valid  
4. activation event is logged  

### Activation Must Occur:
- **before shipment** OR  
- **during distributor intake**  

Unactivated tags in the field are non-compliant.

  </div>
</section>



<!-- SECTION 6 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 6.0 Exception Handling & Rejection Criteria

Tags must be rejected immediately if:

- serialization string is malformed  
- UID cannot be read  
- duplicate serial is detected  
- checksum mismatch occurs  
- encoding tool reports write failure  
- tag is physically damaged  

Rejected tags must be logged as **VOID** and never reused.

Breweries must maintain a 3% buffer of backup tags for replacements.

  </div>
</section>



<!-- SECTION 7 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 7.0 Recordkeeping & Audit Requirements

Breweries must retain:

- serialization logs  
- encoding timestamps  
- UID → serial mapping  
- exception reports  
- activation events  
- shipping records  

All records must be kept for **minimum 3 years** or longer if local regulations require.

DraftVerify reserves the right to audit serialization practices at any time.

  </div>
</section>



<!-- SECTION 8 -->
<section class="section">
  <div class="container" style="max-width:820px" markdown="1">

## 8.0 Intellectual Property Notice

The serialization schema, encoding workflow, tag placement, and digital identity rules are proprietary to DraftVerify™.

Unauthorized reproduction or adaptation within:

- brewery software  
- RFID/NFC products  
- third-party standards  
- distributor systems  
- POS or ERP systems  

is strictly prohibited.

© 2025 DraftVerify Standards Initiative. All rights reserved.

  </div>
</section>
