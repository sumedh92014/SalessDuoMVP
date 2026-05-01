# Data Model - Early Review Platform (MVP)

## Overview

This document defines the core data entities needed for the MVP prototype.

Core entities:

- User
- Brand
- Reviewer
- Campaign
- Slot
- Claim
- Submission
- Payment
- Reimbursement
- Notification

---

# 1. User

## Purpose

Base account entity for all users.

## Fields

- id
- name
- email
- password_hash
- role
- created_at
- updated_at

## Roles

- brand
- reviewer
- admin

---

# 2. Brand

## Purpose

Stores brand-specific profile information.

## Fields

- id
- user_id
- brand_name
- company_name
- website
- contact_email
- phone
- status
- created_at
- updated_at

## Status Values

- active
- restricted
- blocked

---

# 3. Reviewer

## Purpose

Stores reviewer profile and eligibility information.

## Fields

- id
- user_id
- full_name
- phone
- country
- state
- city
- category_interests
- social_profile_url
- can_submit_photos
- can_submit_videos
- payout_method
- payout_details
- reviewer_status
- created_at
- updated_at

## Reviewer Status Values

- new
- good
- great
- priority
- blocked

---

# 4. Campaign

## Purpose

Stores brand campaign details.

## Fields

- id
- brand_id
- product_title
- product_url
- product_image_url
- product_description
- product_price
- product_category
- brand_name
- seller_name
- asin_or_product_id
- marketplace
- reviewer_count
- reimbursement_amount
- campaign_objective
- feedback_requirements
- ugc_requirements
- purchase_deadline_days
- submission_deadline_days
- campaign_status
- payment_status
- total_reimbursement_pool
- platform_fee
- total_paid_amount
- created_at
- updated_at

## Campaign Status Values

- draft
- payment_pending
- paid
- under_admin_review
- live
- paused
- completed
- cancelled

## Payment Status Values

- unpaid
- pending
- paid
- failed
- refunded

---

# 5. Slot

## Purpose

Represents one available reviewer position in a campaign.

## Fields

- id
- campaign_id
- reviewer_id
- slot_status
- reserved_at
- reservation_expires_at
- frozen_at
- completed_at
- created_at
- updated_at

## Slot Status Values

- available
- reserved
- frozen
- completed
- expired

## Rules

- One slot belongs to one campaign
- One reviewer can hold only one slot per campaign
- Slot becomes frozen after purchase proof submission

---

# 6. Claim

## Purpose

Tracks reviewer purchase proof and claim progress.

## Fields

- id
- campaign_id
- reviewer_id
- slot_id
- order_id
- invoice_file_url
- claim_status
- rejection_reason
- admin_notes
- submitted_at
- approved_at
- rejected_at
- created_at
- updated_at

## Claim Status Values

- invited
- accepted
- slot_reserved
- purchase_proof_submitted
- slot_frozen
- approved
- rejected

## Validation Rules

- Order ID required
- Invoice/proof required
- Duplicate order ID not allowed
- Product should match campaign product

---

# 7. Submission

## Purpose

Stores feedback and UGC submitted by reviewer.

## Fields

- id
- campaign_id
- reviewer_id
- claim_id
- rating
- pros
- cons
- usage_experience
- product_quality
- packaging
- ease_of_use
- value_for_money
- likes_dislikes
- improvement_areas
- delivery_experience
- image_urls
- video_urls
- submission_status
- resubmission_comments
- submitted_at
- approved_at
- rejected_at
- created_at
- updated_at

## Submission Status Values

- task_pending
- submitted
- returned_for_resubmission
- resubmitted
- approved
- rejected

---

# 8. Payment

## Purpose

Tracks brand payment for campaign.

## Fields

- id
- campaign_id
- brand_id
- reimbursement_pool_amount
- platform_fee
- total_amount
- payment_status
- payment_method
- payment_reference_id
- paid_at
- failed_at
- refunded_at
- created_at
- updated_at

## Payment Status Values

- pending
- paid
- failed
- refunded

---

# 9. Reimbursement

## Purpose

Tracks reviewer reimbursement.

## Fields

- id
- campaign_id
- reviewer_id
- claim_id
- submission_id
- amount
- reimbursement_status
- payout_method
- payout_reference_id
- failure_reason
- approved_at
- processing_at
- paid_at
- failed_at
- created_at
- updated_at

## Reimbursement Status Values

- pending
- approved
- processing
- paid
- failed

## Rules

- Created after valid claim/submission flow
- Paid only after submission approval
- Controlled by admin/platform

---

# 10. Notification

## Purpose

Stores user notifications and event updates.

## Fields

- id
- user_id
- type
- title
- message
- read_status
- created_at

## Notification Types

- campaign_invite
- claim_submitted
- claim_approved
- claim_rejected
- submission_submitted
- submission_approved
- submission_returned
- reimbursement_processing
- reimbursement_paid

## Read Status Values

- unread
- read

---

# 11. Suggested Relationships

## User Relationships

- User has one Brand profile OR one Reviewer profile
- User role decides dashboard access

## Brand Relationships

- Brand has many Campaigns
- Brand has many Payments

## Reviewer Relationships

- Reviewer has many Claims
- Reviewer has many Submissions
- Reviewer has many Reimbursements

## Campaign Relationships

- Campaign belongs to Brand
- Campaign has many Slots
- Campaign has many Claims
- Campaign has many Submissions
- Campaign has many Reimbursements

## Slot Relationships

- Slot belongs to Campaign
- Slot may belong to Reviewer
- Slot may have one Claim

## Claim Relationships

- Claim belongs to Campaign
- Claim belongs to Reviewer
- Claim belongs to Slot
- Claim may have one Submission
- Claim may have one Reimbursement

## Submission Relationships

- Submission belongs to Claim
- Submission belongs to Reviewer
- Submission belongs to Campaign

## Payment Relationships

- Payment belongs to Brand
- Payment belongs to Campaign

## Reimbursement Relationships

- Reimbursement belongs to Reviewer
- Reimbursement belongs to Claim
- Reimbursement belongs to Submission

---

# 12. MVP Notes for Prototype

For the clickable MVP prototype:

- Use mock data
- File uploads can store mock URLs
- Payment can be simulated
- Reimbursement can be manually marked by admin
- Amazon product fetch can be mocked
- Auth can be simple role-based login
- No real payout integration required
