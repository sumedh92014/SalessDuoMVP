# MVP Features - Early Review Platform

## MVP Build Principle

Build only the core transaction engine first:

Brand creates campaign → Admin approves campaign → Reviewer claims campaign → Reviewer submits purchase proof → Reviewer submits feedback/UGC → Brand/Admin approves → Platform releases reimbursement.

Everything else should remain basic, manual, or configurable for the pilot.

## User Roles in MVP

The platform has three user roles:

- Brand
- Reviewer
- Admin / Ops

## Core MVP Objective

The MVP should allow SalesDuo to run pilot campaigns end-to-end with real brands and real reviewers.

The MVP must support:

- Brand onboarding
- Reviewer onboarding
- Campaign creation
- Campaign approval by admin
- Reviewer campaign discovery or invitation
- Campaign claiming
- Purchase proof submission
- Feedback and UGC submission
- Approval / rejection workflow
- Reimbursement status tracking
- Basic campaign reporting

## Reviewer Features

### Reviewer Account

Reviewers should be able to:

- Sign up
- Log in
- Complete basic profile
- Add payout/payment details
- Select product categories of interest
- Add social profile link
- Mention whether they can submit photos
- Mention whether they can submit videos

### Reviewer Campaign Discovery

Reviewers should be able to:

- View live campaigns
- View campaign details
- View product details
- Open Amazon/ecommerce product page
- See reimbursement amount
- See campaign objective
- See task requirements
- See submission timeline

### Reviewer Claim Flow

Reviewers should be able to:

- Accept or decline campaign invite
- Claim an available campaign slot
- Submit order ID
- Upload invoice or purchase proof
- View claim status

### Reviewer Claim Statuses

Reviewer claim status should include:

- Invited
- Accepted
- Slot Reserved
- Purchase Proof Submitted
- Slot Frozen
- Task Pending
- Submitted
- Returned for Resubmission
- Approved
- Reimbursement Processing
- Reimbursed
- Rejected

### Reviewer Feedback Submission

Reviewers should be able to submit structured feedback.

Feedback fields should include:

- Rating
- Pros
- Cons
- Usage experience
- Product quality
- Packaging
- Ease of use
- Value for money
- Likes / dislikes
- Improvement areas
- Delivery and overall experience

### Reviewer UGC Submission

Reviewers should be able to upload:

- Images
- Videos
- Final product proof if required

### Reviewer Resubmission

If a submission is rejected or returned, reviewer should be able to:

- View rejection/resubmission comments
- Edit feedback
- Upload corrected proof or UGC
- Resubmit for approval

### Reviewer Notifications

Reviewer should receive notifications for:

- Campaign invite
- Claim accepted
- Proof submitted
- Claim approved
- Claim rejected
- Feedback/UGC approved
- Feedback/UGC returned
- Reimbursement processing
- Reimbursement completed

## Brand Features

### Brand Account

Brands should be able to:

- Sign up
- Log in
- Complete brand profile

### Brand Campaign Creation

Brands should be able to create a campaign by adding:

- Product URL
- Product details
- Campaign objective
- Reviewer count
- Feedback requirements
- Photo requirements
- UGC/video requirements
- Campaign timeline

### Product Details

For the MVP prototype, product details can be manually entered or mocked.

Product fields should include:

- Product title
- Product image
- Product description
- Product category
- Product price
- Brand name
- Seller name
- ASIN/product ID
- Marketplace name
- Product URL

### Campaign Objectives

Brand should be able to select campaign objective:

- Basic feedback
- Feedback with photos
- Feedback with UGC video and photos

### Campaign Statuses

Campaign status should include:

- Draft
- Payment Pending
- Paid
- Under Admin Review
- Live
- Paused
- Closed / Completed
- Cancelled

### Brand Claim Management

Brands should be able to:

- View claims received
- View reviewer claim details
- View uploaded purchase proof
- Approve claim
- Reject claim
- Return submission for resubmission

### Brand Feedback & UGC Management

Brands should be able to:

- View submitted feedback
- View uploaded images
- View uploaded videos
- Approve feedback/UGC
- Return feedback/UGC with comments
- Download UGC assets

### Brand Spend Tracking

Brands should be able to view:

- Total campaign spend
- Reimbursement reserve
- Platform fee
- Approved reimbursements
- Pending reimbursements
- Rejected reimbursements

### Brand Reporting

Brand report should show:

- Total claims
- Approved claims
- Pending claims
- Rejected claims
- Feedback submitted
- UGC assets submitted
- Campaign completion summary
- Reimbursement/spend summary

## Admin Features

### Admin Dashboard

Admin should be able to view:

- All campaigns
- All brands
- All reviewers
- All claims
- Pending approvals
- Pending reimbursements
- Flagged claims
- Campaign status overview

### Campaign Admin Controls

Admin should be able to:

- Review campaign before it goes live
- Approve campaign
- Reject campaign
- Pause campaign
- Close campaign
- Change campaign status
- Verify product details
- Override campaign settings if required

### Reviewer Admin Controls

Admin should be able to:

- View reviewer profiles
- Assign reviewer status
- Invite reviewers to campaign
- Restrict reviewers
- Block reviewers
- View reviewer claim history
- View reviewer submission history

### Reviewer Status Tags

Reviewer status should include:

- New
- Good
- Great
- Priority
- Blocked

### Claim Admin Controls

Admin should be able to:

- View all claims
- Review submitted order proof
- Review invoice/purchase proof
- Approve proof
- Reject proof
- Flag suspicious claims
- Override claim status
- Release or track reimbursement

### Reimbursement Admin Controls

Admin should be able to:

- View reimbursement status
- Mark reimbursement as processing
- Mark reimbursement as paid
- Track delayed reimbursements
- Handle failed reimbursement cases

## Core Backend Features

### Campaign Logic

Backend should support:

- Campaign creation
- Campaign quantity tracking
- Slot reservation
- Slot expiry/release
- Campaign status management
- Claim allocation logic

### Claim Logic

Backend should support:

- Claim creation
- Order ID submission
- Invoice upload
- Duplicate order ID check
- Claim approval/rejection
- Claim status lifecycle

### Submission Logic

Backend should support:

- Feedback submission
- Image upload
- Video upload
- Approval workflow
- Rejection workflow
- Resubmission workflow

### Reimbursement Logic

Backend should support:

- Reimbursement amount tracking
- Reimbursement status tracking
- Payout logs
- Manual reimbursement release

### Notification Logic

Backend should support basic notification triggers for:

- Campaign invite
- Claim submitted
- Claim approved
- Claim rejected
- Feedback submitted
- Feedback approved
- Feedback returned
- Reimbursement processing
- Reimbursement completed

## Pilot-Specific MVP Scope

The pilot should focus on:

- US market only
- Toys
- Beauty & Skincare
- Home & Kitchen
- Pet Essentials
- Products mostly under $10-$15
- 20 reviewers per campaign as default pilot size
- Manual admin review before campaign goes live
- Manual reviewer invitation and management
- Manual reimbursement approval
- Basic reporting only

## Out of Scope for MVP

The following should not be built deeply in MVP:

- Advanced analytics
- Automated reviewer matching
- Full wallet system
- Affiliate commission tracking
- Advanced fraud engine
- Reviewer scoring algorithm
- Brand quality score
- Complex gamification
- Referral program
- Multi-marketplace support
- Complex dashboards
- Automated Amazon review tracking
- Mandatory external ecommerce review verification

## Important Policy-Safe Product Language

The platform should use language like:

- Share feedback
- Submit product experience
- Upload photos/videos
- Provide product insights
- Submit UGC
- Complete product task

The platform should avoid language like:

- Get Amazon reviews
- Post a review for reimbursement
- Improve ratings
- Boost reviews
- Guaranteed positive review
- Paid review
