# Campaign Logic - Early Review Platform (MVP)

## Overview

This document defines the core backend logic governing:

- Campaign lifecycle
- Slot allocation
- Claim processing
- Submission flow
- Reimbursement logic

This is the most critical system layer for MVP.

---

# 1. Campaign Model

## 1.1 Core Rules

Each campaign:

- Is tied to **one product URL**
- Has **fixed reviewer count (slots)**
- Has **fixed reimbursement amount**
- Has **fixed objective**
- Has **fixed submission requirements**

Once payment is completed:

- Campaign becomes **locked**
- Only admin can modify it

---

## 1.2 Campaign Fields

Each campaign must store:

### Product Info
- product_title
- product_image
- product_url
- product_price
- product_category
- brand_name
- seller_name
- asin_or_product_id
- marketplace

### Campaign Config
- reviewer_count (default: 20)
- reimbursement_amount (per reviewer)
- campaign_objective
- feedback_requirements
- ugc_requirements
- purchase_deadline_days (default: 5)
- submission_deadline_days (default: 7)

### Payment Info
- total_reimbursement_pool
- platform_fee
- total_paid_amount
- payment_status

### Status
- campaign_status

---

## 1.3 Campaign Status Lifecycle

Campaign statuses:

- Draft
- Payment Pending
- Paid
- Under Admin Review
- Live
- Paused
- Closed / Completed
- Cancelled

---

# 2. Slot Logic

## 2.1 Slot Definition

- Each campaign has fixed number of slots
- 1 slot = 1 reviewer

Example:
- Campaign with 20 reviewers → 20 slots

---

## 2.2 Slot States

Each slot can be in:

- Available
- Reserved
- Frozen
- Completed
- Expired

---

## 2.3 Slot Reservation Logic

When reviewer accepts campaign:

1. Reviewer selects slot
2. Slot becomes:
   → Reserved

3. Reservation timer starts (e.g. 1 hour)

If reviewer does NOT submit proof within time:
→ Slot becomes Available again

---

## 2.4 Slot Freezing Logic

When reviewer submits:

- Order ID
- Invoice/proof

Then:

→ Slot becomes Frozen

This ensures:
- Slot cannot be taken by others
- Reviewer is locked into flow

---

# 3. Claim Logic

## 3.1 Claim Creation

A claim is created when:

- Reviewer selects slot
- Reviewer submits order proof

---

## 3.2 Claim Fields

Each claim must store:

- claim_id
- campaign_id
- reviewer_id
- slot_id
- order_id
- invoice_url
- claim_status
- timestamps

---

## 3.3 Claim Status Lifecycle

- Invited
- Accepted
- Slot Reserved
- Purchase Proof Submitted
- Slot Frozen
- Rejected (if invalid)
- Approved (valid proof)

---

## 3.4 Claim Validation Rules

System / Admin must check:

- Order ID is present
- Invoice is uploaded
- Order ID is not duplicate
- Product matches campaign product
- Price is valid (within expected range)

If failed:
→ Claim Rejected

---

# 4. Submission Logic

## 4.1 Submission Creation

Submission is created after:

- Product is received
- Reviewer completes task

---

## 4.2 Submission Fields

- submission_id
- claim_id
- reviewer_id
- campaign_id
- rating
- pros
- cons
- experience
- feedback_fields (JSON)
- images[]
- videos[]
- submission_status

---

## 4.3 Submission Status Lifecycle

- Task Pending
- Submitted
- Returned for Resubmission
- Resubmitted
- Approved
- Rejected

---

## 4.4 Submission Validation Rules

Submission must:

- Include mandatory feedback fields
- Match campaign objective
- Include required UGC (if applicable)

---

## 4.5 Resubmission Logic

If submission returned:

1. Reviewer edits submission
2. Uploads corrected content
3. Status → Resubmitted

---

# 5. Reimbursement Logic

## 5.1 Core Principle

Reimbursement is released ONLY after:

- Claim approved
- Submission approved

---

## 5.2 Reimbursement Fields

- reimbursement_id
- claim_id
- reviewer_id
- amount
- status

---

## 5.3 Reimbursement Status Lifecycle

- Pending
- Approved
- Processing
- Paid
- Failed

---

## 5.4 Reimbursement Flow

1. Submission approved
2. Reimbursement status → Approved
3. Admin triggers payout
4. Status → Processing
5. Status → Paid

---

## 5.5 Reimbursement Rules

- Amount is fixed per campaign
- Cannot exceed product price (pilot assumption)
- Platform controls payout (not brand)

---

# 6. Campaign Execution Flow

Full system sequence:

1. Brand creates campaign
2. Brand pays
3. Campaign → Under Admin Review
4. Admin approves
5. Campaign → Live
6. Admin invites reviewers
7. Reviewer accepts
8. Reviewer reserves slot
9. Reviewer submits proof
10. Slot frozen
11. Reviewer receives product
12. Reviewer submits feedback + UGC
13. Brand/Admin reviews submission
14. Submission approved
15. Reimbursement processed
16. Campaign progresses to completion

---

# 7. Campaign Completion Logic

Campaign is completed when:

- All slots are:
  - Completed OR
  - Expired

OR

- Admin manually closes campaign

Final status:
→ Closed / Completed

---

# 8. Fraud & Validation Logic (Basic MVP)

System should check:

- Duplicate order IDs
- Same invoice reused
- Suspicious rapid claims
- Missing proof

Admin can:

- Reject claim
- Block reviewer

---

# 9. Edge Case Handling (Core)

## 9.1 Reviewer Issues

- Missed purchase deadline → Slot released
- Fake proof → Claim rejected + user flagged
- Wrong product → Manual review
- Missed submission deadline → Flag + possible rejection

---

## 9.2 Campaign Issues

- Product out of stock → Pause campaign
- Product price change → Admin decision
- Campaign cancellation before live → Refund logic
- Campaign cancellation after live → Partial handling

---

## 9.3 Payment Issues

- Payment failure → Stay in draft
- Refund scenario → Admin controlled

---

# 10. Time Constraints (Pilot Defaults)

- Slot reservation expiry → ~1 hour
- Purchase deadline → 5 days
- Submission deadline → 7 days

---

# 11. Key System Constraints

- One reviewer = one slot per campaign
- Slots are finite and locked after proof
- Campaign is immutable after payment
- Reimbursement requires approval
- Admin has override authority

---

# 12. MVP Simplifications

- Manual reviewer assignment
- Manual fraud checks
- Manual reimbursement trigger
- No automated matching
- No dynamic pricing
- No partial reimbursements
- No wallet system

---

# 13. Critical Backend Principle

The system should strictly enforce:

Campaign → Slot → Claim → Submission → Approval → Reimbursement

No step should be skipped or bypassed.
