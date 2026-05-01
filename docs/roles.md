# Roles & Permissions - Early Review Platform (MVP)

## Overview

The platform has 3 core roles:

- Brand
- Reviewer
- Admin / Ops

Each role has clearly defined permissions and boundaries.  
Admin always has override authority across the system.

---

# 1. Brand Role

## 1.1 Description

Brands are customers of the platform.

They create campaigns to:

- Get product trials
- Collect feedback
- Collect UGC (images/videos)

---

## 1.2 Brand Capabilities

### Account & Profile

Brand can:

- Sign up
- Log in
- Create and update profile

---

### Campaign Management

Brand can:

- Create campaign
- View campaign
- View campaign status
- View campaign performance

Brand cannot:

- Make major edits after payment (without admin)

---

### Campaign Configuration

Brand can define:

- Product URL
- Product details
- Campaign objective
- Feedback requirements
- UGC requirements
- Reviewer count (fixed in MVP)
- Campaign instructions

---

### Payment

Brand can:

- Pay campaign amount (reimbursement + platform fee)

Brand cannot:

- Modify payment after confirmation

---

### Claim Management

Brand can:

- View claims
- View reviewer details
- View order proof
- Approve claims
- Reject claims

---

### Submission Management

Brand can:

- View feedback
- View UGC (images/videos)
- Approve submission
- Return submission for correction

Rules:

- Cannot demand positive feedback
- Cannot tie approval to rating
- Can only request improvements or corrections

---

### Reporting

Brand can view:

- Total claims
- Approved claims
- Rejected claims
- Pending claims
- UGC submitted
- Campaign spend
- Campaign completion summary

---

## 1.3 Brand Restrictions

Brand cannot:

- Edit campaign after payment (core fields locked)
- Change product URL after payment
- Change reimbursement amount after payment
- Change reviewer count after payment
- Directly assign reviewers
- Release reimbursements
- Override admin decisions

---

# 2. Reviewer Role

## 2.1 Description

Reviewers are users who:

- Claim campaigns
- Purchase products
- Submit feedback
- Submit UGC
- Receive reimbursement

---

## 2.2 Reviewer Capabilities

### Account & Profile

Reviewer can:

- Sign up
- Log in
- Complete profile
- Add category preferences
- Add social links
- Add payout details

---

### Campaign Interaction

Reviewer can:

- View campaigns
- Accept/decline invites
- Claim available slots

---

### Purchase & Claim

Reviewer can:

- Purchase product externally (Amazon)
- Submit:
  - Order ID
  - Invoice/proof

---

### Submission

Reviewer can:

- Submit feedback
- Upload images
- Upload videos
- Submit final task

---

### Resubmission

Reviewer can:

- Edit rejected submissions
- Re-upload corrected UGC
- Resubmit for approval

---

### Status Tracking

Reviewer can view:

- Claim status
- Submission status
- Reimbursement status

---

## 2.3 Reviewer Status Tags (Admin Assigned)

Reviewer can be categorized as:

- New → signed up but incomplete
- Good → profile complete
- Great → category match
- Priority → experienced + UGC capable
- Blocked → fraud or repeated issues

---

## 2.4 Reviewer Restrictions

Reviewer cannot:

- Claim more than 1 slot per campaign
- Submit fake or duplicate order IDs
- Submit incomplete proof
- Demand reimbursement without approval
- Modify submission after final approval
- Bypass deadlines

---

# 3. Admin / Ops Role

## 3.1 Description

Admin is the control layer of the platform.

Admin is responsible for:

- Campaign approval
- Reviewer management
- Claim validation
- Fraud handling
- Reimbursement control

Admin has full override authority.

---

## 3.2 Admin Capabilities

### Campaign Control

Admin can:

- View all campaigns
- Approve campaign
- Reject campaign
- Pause campaign
- Close campaign
- Edit campaign (post-payment if needed)

---

### Reviewer Management

Admin can:

- View all reviewers
- Assign reviewer status tags
- Invite reviewers to campaigns
- Restrict reviewer access
- Block reviewers

---

### Claim Control

Admin can:

- View all claims
- Review order proofs
- Approve claims
- Reject claims
- Flag suspicious claims
- Override brand decisions

---

### Submission Control

Admin can:

- View all submissions
- Review feedback & UGC
- Approve submissions
- Return submissions
- Override brand decisions

---

### Reimbursement Control

Admin can:

- View reimbursement pipeline
- Mark reimbursement as:
  - Processing
  - Paid
- Handle:
  - Failed payouts
  - Delayed payouts
  - Disputes

---

### Fraud & Risk Control

Admin can:

- Detect duplicate order IDs
- Flag fake invoices
- Block fraudulent users
- Pause suspicious campaigns

---

### System Monitoring

Admin can track:

- Campaign performance
- Claim completion rates
- Reviewer participation
- Fraud cases
- Payment status

---

## 3.3 Admin Authority Rules

- Admin has final say in disputes
- Admin can override brand decisions
- Admin can override reviewer actions
- Admin controls reimbursement release
- Admin controls campaign visibility

---

# 4. Permission Matrix (Simplified)

| Action                          | Brand | Reviewer | Admin |
|--------------------------------|------|----------|-------|
| Create campaign                | Yes  | No       | Yes   |
| Approve campaign              | No   | No       | Yes   |
| View campaigns                | Yes  | Yes      | Yes   |
| Claim campaign                | No   | Yes      | No    |
| Submit order proof            | No   | Yes      | No    |
| Approve claim                 | Yes  | No       | Yes   |
| Submit feedback/UGC           | No   | Yes      | No    |
| Approve feedback/UGC          | Yes  | No       | Yes   |
| Release reimbursement         | No   | No       | Yes   |
| Invite reviewers              | No   | No       | Yes   |
| Block user                    | No   | No       | Yes   |
| View reports                  | Yes  | Limited  | Yes   |

---

# 5. MVP Simplifications

For the pilot:

- Admin handles most decisions manually
- No automation in reviewer matching
- No auto-approval flows
- No decentralized payout system
- No advanced role hierarchy (single admin role)

---

# 6. Key Design Principle

The system should enforce:

- Clear separation of responsibilities
- Admin-first control architecture
- Limited brand control post-payment
- Strict reviewer validation before payout
