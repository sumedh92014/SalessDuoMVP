# MVP Build Instructions

## Objective

Build a **fully clickable frontend MVP prototype** of the Salesduo Early Reviews platform.

This is a **preview prototype**, not a production-ready application.

The focus is:
- smooth navigation
- realistic user flows
- clean, premium UI
- complete end-to-end demo experience

---

## Core Requirement (Most Important)

- The entire application must be **fully clickable**
- Every button, card, and CTA should:
  - navigate to another screen, OR
  - show a clear mock state/interaction

### The prototype must NEVER get stuck

Do NOT block any flow because of:
- missing backend
- missing APIs
- authentication
- payments
- approvals
- uploads
- validations
- database

If a step normally requires backend:
→ simulate it using mock data or skip options

---

## Backend Rules

- No real backend required
- No real database required
- No real authentication required
- No real payment integration required

Use:
- mock data
- local state
- static placeholders

All flows must continue regardless of real data availability.

---

## Navigation & Flow Rules

- No dead-end screens
- Every screen must allow forward movement
- Provide back navigation where relevant
- Add optional shortcuts or role switcher for easy testing

---

## Roles to Support

The prototype must include 3 role flows:

### 1. Admin
- Dashboard
- Campaign management
- Claims handling
- Reviewer management
- Brand management

### 2. Brand
- Dashboard
- Campaign creation
- Campaign tracking
- Submission viewing

### 3. Reviewer
- Dashboard
- Campaign discovery
- Campaign participation
- Submission/claim tracking

Each role should have:
- its own screens
- its own navigation
- its own flow

---

## Design Instructions

Use the images in `/references` as the **design source of truth**.

Follow them for:
- layout structure
- spacing
- typography
- colors
- card styles
- button styles
- dashboard patterns

### Important:
- Do NOT invent a new design style
- Extend the same design system to all missing screens
- Keep UI consistent across all roles

---

## Handling Missing Screens

If a screen is not present in reference images:
- infer it from product logic
- design it using the same visual system
- keep it simple and consistent

---

## UX Guidelines

- Clean, premium SaaS feel
- Minimal clutter
- Clear hierarchy
- Responsive layout
- Smooth navigation

---

## Build Expectations

- Fully navigable prototype
- All major flows covered
- No broken buttons
- No blocked journeys
- No dependency on backend

---

## Definition of Done

- User can explore all 3 roles without interruption
- All major flows are clickable and connected
- UI is consistent with reference design
- No screen blocks the user due to missing data/backend
