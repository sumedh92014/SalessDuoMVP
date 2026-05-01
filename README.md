# SalessDuoMVP
This contains the code for the MVP of SalesDuo
# Salesduo Early Reviews MVP

Salesduo is an **Early Reviews platform** that helps brands launch products with verified reviewer participation.

The platform connects:
- **Brands** who want early traction and product reviews
- **Reviewers** who discover campaigns, buy/use products, and submit required proof/content
- **Admins** who manage campaigns, claims, reviewers, brands, and approvals

## MVP Goal

Build a **frontend-only clickable MVP preview** of the Salesduo platform.

The goal is to demonstrate the full product flow visually and functionally without needing a backend.

## Important MVP Rules

- The entire MVP preview must be clickable.
- Every visible button should either navigate to the next relevant screen or show a clear mock action.
- The prototype must not stop because of missing backend, auth, payment, database, APIs, approvals, or uploaded files.
- Use mock data and local state wherever needed.
- Login, signup, payment, approval, upload, and verification steps should be skippable for preview.
- Do not leave dead-end screens.
- Add easy navigation between Admin, Brand, and Reviewer flows.

## Roles

### Brand
Brands create and manage review campaigns, track reviewer participation, view submissions, and monitor campaign progress.

### Reviewer
Reviewers browse available campaigns, accept campaign invites, purchase/use products, submit invoices/proof/content, and track reimbursement or claim status.

### Admin
Admins manage the overall platform, including campaigns, brands, reviewers, claims, approvals, disputes, and platform visibility.

## Design Direction

Use the reference images as the source of truth for:
- layout
- colors
- spacing
- card styles
- buttons
- typography
- dashboard structure
- premium, clean SaaS look

If a screen is not shown in the reference images, create it by extending the same design language consistently.

## Build Approach

- Frontend-only MVP
- Mock data only
- Clickable navigation
- Clean responsive UI
- No production backend required
