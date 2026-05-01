# Admin Panel - Early Review Platform (MVP)

## Overview

The Admin Panel is the control center of the platform.

Admin is responsible for:

- Campaign approval
- Reviewer management
- Claim validation
- Submission moderation
- Reimbursement control
- Fraud handling

Admin has **full override authority** across all flows.

---

# 1. Admin Dashboard

## Purpose

Provide a high-level snapshot of platform activity.

## Key Metrics

- Total campaigns
- Live campaigns
- Pending campaign approvals
- Total claims
- Pending claims
- Total submissions
- Pending submissions
- Reimbursements pending
- Reimbursements completed
- Flagged/fraud cases

## Sections

- Campaign Overview
- Claim Overview
- Submission Overview
- Payment/Reimbursement Overview
- Alerts / Flags

---

# 2. Campaign Management

## 2.1 Campaign List View

Admin should see:

- Campaign ID
- Brand name
- Product name
- Reviewer count
- Slots filled
- Campaign status
- Payment status
- Created date

## Filters

- Status (Draft / Paid / Live / Paused / Completed)
- Category
- Brand
- Date range

---

## 2.2 Campaign Detail View

Admin can view:

### Product Details

- Product title
- Product image
- Product URL
- Price
- Category
- ASIN / product ID
- Seller

### Campaign Config

- Reviewer count
- Objective
- Feedback requirements
- UGC requirements
- Timeline

### Payment Info

- Total reimbursement pool
- Platform fee
- Total paid amount
- Payment status

---

## 2.3 Campaign Actions

Admin can:

- Approve campaign → Status = Live
- Reject campaign → Back to brand
- Pause campaign
- Resume campaign
- Close campaign
- Cancel campaign

---

## 2.4 Campaign Overrides

Admin can:

- Edit campaign after payment (if required)
- Adjust reviewer count (optional for MVP)
- Handle stock issues
- Pause campaign if product unavailable

---

# 3. Reviewer Management

## 3.1 Reviewer List View

Admin should see:

- Reviewer name
- Email
- Location
- Category interests
- Profile completion status
- Reviewer status tag
- Total claims
- Approval rate (optional)

---

## 3.2 Reviewer Detail View

Admin can view:

- Full profile
- Social links
- UGC capability
- Claim history
- Submission history
- Reimbursement history

---

## 3.3 Reviewer Status Management

Admin can assign:

- New
- Good
- Great
- Priority
- Blocked

---

## 3.4 Reviewer Actions

Admin can:

- Invite reviewer to campaign
- Restrict reviewer
- Block reviewer
- Unblock reviewer
- View fraud flags

---

# 4. Reviewer Assignment (Pilot Critical)

## Flow

1. Admin opens campaign
2. Views reviewer pool
3. Filters reviewers:
   - Category match
   - Profile completion
   - Status tag
4. Selects reviewers
5. Sends invites manually

## Priority Order

- Priority
- Great
- Good
- New

Blocked reviewers should NEVER be invited.

---

# 5. Claim Management

## 5.1 Claim List View

Admin sees:

- Claim ID
- Campaign
- Reviewer
- Order ID
- Claim status
- Submission status
- Flags (if any)

---

## 5.2 Claim Detail View

Admin can view:

- Reviewer details
- Campaign details
- Order ID
- Invoice/proof
- Submission link (if exists)

---

## 5.3 Claim Actions

Admin can:

- Approve claim
- Reject claim
- Flag claim as suspicious
- Override brand decision

---

## 5.4 Fraud Checks

Admin should check:

- Duplicate order IDs
- Fake invoices
- Mismatch product
- Suspicious patterns

---

# 6. Submission Management

## 6.1 Submission List View

Admin sees:

- Submission ID
- Reviewer
- Campaign
- Status
- Approval state

---

## 6.2 Submission Detail View

Admin can view:

- Feedback content
- Images
- Videos
- Resubmission comments (if any)

---

## 6.3 Submission Actions

Admin can:

- Approve submission
- Return for resubmission
- Reject submission
- Override brand decision

---

# 7. Reimbursement Management

## 7.1 Reimbursement List View

Admin sees:

- Reimbursement ID
- Reviewer
- Campaign
- Amount
- Status

---

## 7.2 Reimbursement Statuses

- Pending
- Approved
- Processing
- Paid
- Failed

---

## 7.3 Reimbursement Actions

Admin can:

- Approve reimbursement
- Mark as processing
- Mark as paid
- Mark as failed

---

## 7.4 Dispute Handling

Admin handles:

- Reviewer complaints
- Brand complaints
- Payment delays
- Invalid submissions

Admin decision is final.

---

# 8. Notifications & Alerts

Admin should be notified for:

- New campaign submitted
- Pending campaign approval
- Claims awaiting review
- Submissions awaiting approval
- Failed payments
- Fraud flags

---

# 9. Campaign Monitoring Dashboard

Admin can track per campaign:

- Total slots
- Slots filled
- Slots pending
- Claims submitted
- Submissions pending
- Approval rate
- Reimbursement progress

---

# 10. Edge Case Controls

Admin should be able to handle:

## Campaign Issues

- Product out of stock → Pause campaign
- Product removed → Cancel campaign
- Price change → Manual decision

## Reviewer Issues

- Fake proof → Reject + block
- Wrong product → Reject
- Missed deadline → Flag + release slot

## Payment Issues

- Payment failure → Retry
- Refund scenarios → Manual handling

---

# 11. Permissions Summary

Admin can:

- Access all data
- Override any decision
- Modify campaign post-payment
- Control reimbursement
- Block users
- Pause system flows

Admin cannot:

- Be restricted by brand or reviewer actions

---

# 12. MVP Simplifications

- Manual reviewer assignment
- Manual fraud checks
- Manual reimbursement handling
- No automated decision engine
- No advanced analytics dashboards
- No role hierarchy within admin

---

# 13. Key Principle

Admin panel should act as:

**Single source of truth + control layer for all workflows**

All critical transitions must be visible and controllable from admin.
