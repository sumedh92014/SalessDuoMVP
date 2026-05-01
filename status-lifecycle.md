### payment_pending

Brand has initiated payment but it is not yet confirmed.

### paid

Payment is successful. Campaign is locked and awaiting admin review.

### under_admin_review

Admin is verifying campaign details before going live.

### live

Campaign is active and reviewers can claim slots.

### paused

Campaign is temporarily stopped (e.g. stock issue, admin intervention).

### completed

All slots are completed OR campaign manually closed.

### cancelled

Campaign is cancelled before completion.

---

# 2. Slot Status Lifecycle

## Slot Statuses

- available
- reserved
- frozen
- completed
- expired

## Slot Flow

available → reserved → frozen → completed

## Expiry Flow

reserved → expired → available

---

## Status Meaning

### available

Slot is open and can be claimed.

### reserved

Slot is temporarily held by a reviewer.

### frozen

Reviewer has submitted purchase proof; slot is locked.

### completed

Submission approved and workflow finished.

### expired

Reviewer did not act within time; slot released.

---

# 3. Claim Status Lifecycle

## Claim Statuses

- invited
- accepted
- slot_reserved
- purchase_proof_submitted
- slot_frozen
- approved
- rejected

## Claim Flow

invited → accepted → slot_reserved → purchase_proof_submitted → slot_frozen → approved

## Failure Flow

purchase_proof_submitted → rejected

---

## Status Meaning

### invited

Reviewer has been invited to campaign.

### accepted

Reviewer accepted campaign invite.

### slot_reserved

Reviewer selected slot.

### purchase_proof_submitted

Order ID + invoice uploaded.

### slot_frozen

Claim validated enough to lock slot.

### approved

Claim accepted as valid.

### rejected

Invalid proof or fraud detected.

---

# 4. Submission Status Lifecycle

## Submission Statuses

- task_pending
- submitted
- returned_for_resubmission
- resubmitted
- approved
- rejected

## Submission Flow

task_pending → submitted → approved

## Resubmission Flow

submitted → returned_for_resubmission → resubmitted → approved

## Failure Flow

submitted → rejected

---

## Status Meaning

### task_pending

Reviewer has not submitted feedback/UGC yet.

### submitted

Reviewer has submitted feedback and UGC.

### returned_for_resubmission

Brand/admin requested corrections.

### resubmitted

Reviewer submitted updated version.

### approved

Submission accepted.

### rejected

Submission invalid or unacceptable.

---

# 5. Payment Status Lifecycle (Brand)

## Payment Statuses

- pending
- paid
- failed
- refunded

## Flow

pending → paid

## Failure Flow

pending → failed

## Refund Flow

paid → refunded

---

## Status Meaning

### pending

Payment initiated but not completed.

### paid

Payment successfully completed.

### failed

Payment attempt unsuccessful.

### refunded

Payment returned to brand.

---

# 6. Reimbursement Status Lifecycle

## Reimbursement Statuses

- pending
- approved
- processing
- paid
- failed

## Flow

pending → approved → processing → paid

## Failure Flow

processing → failed

---

## Status Meaning

### pending

Waiting for submission approval.

### approved

Eligible for payout.

### processing

Payout initiated.

### paid

Money transferred successfully.

### failed

Payout failed.

---

# 7. Reviewer Status Lifecycle (Admin Assigned)

## Reviewer Statuses

- new
- good
- great
- priority
- blocked

---

## Status Meaning

### new

Signed up but incomplete profile.

### good

Profile completed.

### great

Profile complete + category match.

### priority

High-quality reviewer with UGC capability.

### blocked

Fraudulent or problematic reviewer.

---

# 8. Cross-System Dependencies

## Critical Dependencies

- Slot → depends on Claim
- Claim → depends on Slot
- Submission → depends on Claim
- Reimbursement → depends on Submission approval
- Campaign → depends on Slots completion

---

# 9. Trigger-Based Transitions

## Key Triggers

### Claim Trigger

- Order proof submitted → claim moves forward

### Slot Trigger

- Proof submitted → slot becomes frozen

### Submission Trigger

- Feedback submitted → submission created

### Approval Trigger

- Submission approved → reimbursement enabled

### Completion Trigger

- All slots completed → campaign completed

---

# 10. System Constraints

- No reimbursement without submission approval
- No slot completion without claim validation
- No campaign completion without slot resolution
- No claim without slot
- No submission without claim

---

# 11. MVP Simplifications

- No auto transitions (admin/manual heavy)
- No async payment handling complexity
- No partial states (keep states strict)
- No multi-stage approvals
- No workflow branching complexity

---

# 12. Key Principle

Each entity must have:

- Clear state
- Predictable transitions
- No ambiguous or overlapping states

Status transitions must always be:

**deterministic, traceable, and reversible only via admin**
