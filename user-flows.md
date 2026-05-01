# User Flows - Early Review Platform (MVP)

## Overview

This document defines all core user journeys across:

- Brand
- Reviewer
- Admin

The flows are written in strict step-by-step format so they can be directly translated into UI screens and navigation logic.

---

# 1. Brand Flow

## 1.1 Brand Onboarding Flow

1. Brand signs up
2. Brand logs in
3. Brand completes profile:
   - Brand name
   - Email
   - Company details (optional for MVP)
4. Brand lands on dashboard

---

## 1.2 Campaign Creation Flow

1. Brand clicks "Create Campaign"
2. Brand enters product URL
3. Platform (or mock) fetches product details OR brand fills manually:
   - Product title
   - Image
   - Price
   - Category
   - ASIN / product ID
4. Brand selects:
   - Campaign objective
   - Feedback requirements
   - UGC requirements (photos/videos)
5. Brand selects reviewer count (default: 20 for MVP)
6. Brand reviews campaign preview:
   - Product details
   - Campaign objective
   - Requirements
   - Total cost (reimbursement + platform fee)
7. Brand proceeds to payment
8. After payment:
   - Campaign status → "Paid"
   - Campaign becomes locked
9. Campaign moves to Admin Review

---

## 1.3 Campaign Lifecycle (Brand POV)

Campaign statuses move as:

Draft → Payment Pending → Paid → Under Admin Review → Live → Closed

---

## 1.4 Claim Review Flow (Brand)

1. Brand opens campaign
2. Views list of claims
3. Clicks a claim
4. Views:
   - Reviewer details
   - Order ID
   - Invoice/proof
5. Brand action:
   - Approve claim
   - Reject claim

---

## 1.5 Feedback & UGC Review Flow

1. Brand opens submission
2. Views:
   - Feedback
   - Images
   - Videos
3. Brand action:
   - Approve submission
   - Return for resubmission with comments

Rules:
- Cannot ask for positive feedback
- Can only ask for corrections/improvements

---

## 1.6 Campaign Completion Flow

1. All slots filled OR timeline completed
2. All submissions processed
3. Campaign marked as:
   - Completed
4. Brand views final report:
   - Claims summary
   - UGC assets
   - Spend summary

---

# 2. Reviewer Flow

## 2.1 Reviewer Onboarding Flow

1. Reviewer signs up
2. Reviewer logs in
3. Completes profile:
   - Name
   - Email
   - Location
   - Category interests
   - Social profile
   - Photo/video capability
   - Payment details
4. Reviewer enters waitlist or dashboard

---

## 2.2 Campaign Access Flow

Two possible entry paths:

### A. Invite-Based (Pilot Preferred)

1. Reviewer receives invite
2. Opens campaign
3. Views:
   - Product details
   - Requirements
   - Reimbursement
   - Timeline
4. Chooses:
   - Accept
   - Decline

---

### B. Browse-Based

1. Reviewer opens dashboard
2. Views all live campaigns
3. Clicks campaign
4. Views campaign details

---

## 2.3 Claim Flow

1. Reviewer accepts campaign
2. Selects available slot
3. Slot reserved temporarily (e.g. 1 hour)
4. Reviewer purchases product
5. Reviewer submits:
   - Order ID
   - Invoice / proof
6. Slot becomes:
   - Frozen (after proof submission)
7. Status → "Purchase Proof Submitted"

---

## 2.4 Product Usage Flow

1. Reviewer receives product
2. Uses/tests product
3. Prepares feedback and UGC

---

## 2.5 Feedback & UGC Submission Flow

1. Reviewer opens campaign task
2. Submits:
   - Rating
   - Pros
   - Cons
   - Experience
   - Additional parameters
3. Uploads:
   - Images
   - Videos
4. Submits final task
5. Status → "Submitted"

---

## 2.6 Resubmission Flow

If submission is returned:

1. Reviewer sees comments
2. Edits feedback / uploads new UGC
3. Resubmits
4. Status → "Resubmitted"

---

## 2.7 Reimbursement Flow

1. Submission approved
2. Status → "Approved"
3. Reimbursement triggered
4. Status → "Processing"
5. Final status → "Reimbursed"

---

## 2.8 Reviewer Status Lifecycle

Full lifecycle:

Invited → Accepted → Slot Reserved → Purchase Proof Submitted → Slot Frozen → Task Pending → Submitted → Returned → Resubmitted → Approved → Reimbursement Processing → Reimbursed

---

# 3. Admin Flow

## 3.1 Campaign Approval Flow

1. Admin views "Pending Campaigns"
2. Opens campaign
3. Verifies:
   - Product URL
   - Price
   - Stock
   - Objective
   - Requirements
4. Admin action:
   - Approve → Campaign goes Live
   - Reject → Back to brand

---

## 3.2 Reviewer Assignment Flow (Pilot)

1. Admin selects campaign
2. Views reviewer pool
3. Filters reviewers based on:
   - Category match
   - Profile completion
   - Priority tag
4. Selects reviewers
5. Sends invites manually

---

## 3.3 Claim Review Flow (Admin Override)

1. Admin views claims
2. Reviews:
   - Order ID
   - Invoice
3. Flags suspicious claims
4. Overrides decision if needed:
   - Approve
   - Reject

---

## 3.4 Submission Review Flow (Admin Override)

1. Admin views submissions
2. Reviews feedback & UGC
3. Overrides if required:
   - Approve
   - Return

---

## 3.5 Reimbursement Flow

1. Admin views approved submissions
2. Tracks reimbursement status
3. Marks:
   - Processing
   - Paid
4. Handles:
   - Failed payments
   - Delays
   - Disputes

---

## 3.6 Campaign Monitoring Flow

Admin monitors:

- Slot filling status
- Invites sent
- Accepted vs declined
- Proof submissions
- Pending submissions
- Approval rate
- Reimbursement progress

---

# 4. End-to-End System Flow (Critical for Codex)

1. Brand creates campaign
2. Brand pays
3. Admin approves campaign
4. Campaign goes live
5. Admin invites reviewers
6. Reviewer accepts campaign
7. Reviewer claims slot
8. Reviewer purchases product
9. Reviewer submits proof
10. Reviewer receives product
11. Reviewer submits feedback + UGC
12. Brand/Admin approves submission
13. Platform releases reimbursement
14. Campaign completes

---

# 5. Time-Based Rules (Pilot)

- Slot reservation expiry: ~1 hour
- Purchase deadline: within 5 days of claim
- Submission deadline: within 7 days of product delivery/purchase

---

# 6. Key Constraints

- One reviewer = one slot per campaign
- Campaign has fixed number of slots
- Campaign locked after payment
- Reviewer cannot edit claim after submission
- Reimbursement only after approval
- Platform (admin) has final authority on disputes

---

# 7. Pilot-Specific Simplifications

- Manual reviewer assignment
- Manual reimbursement handling
- Manual fraud checks
- No automated matching
- No complex wallet system
- No affiliate tracking in MVP
