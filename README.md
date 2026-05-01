# SalesDuo MVP Prototype

Frontend-only clickable MVP preview for the SalesDuo Early Reviews platform.

## What this is

This prototype demonstrates end-to-end product flows for:
- Admin
- Brand
- Reviewer

All flows are mock-driven and intentionally avoid backend/API dependencies.

---

## Local Run (Exact Steps)

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open:
```text
http://localhost:3000
```

4. Use the role selection landing page (`/`) to enter:
- Admin dashboard
- Brand dashboard
- Reviewer dashboard

### Production build locally
```bash
npm run build
npm run start
```

### Lint
```bash
npm run lint
```

---

## Environment Note

No environment variables are required for this MVP prototype.

- No backend URL required
- No auth keys required
- No payment keys required
- No upload/storage keys required

Everything is mocked in frontend state/UI.

---

## Project Structure

- `/docs` → product logic, statuses, flows, MVP instructions
- `/references` → UI reference images (design source)
- `/src/app` → routes/screens
- `/src/components` → shared UI and layout
- `/src/lib` → mock data and navigation config

---

## MVP Summary

### Admin Flow
- Dashboard overview
- Campaign management (list/detail/review)
- Claims list/detail and moderation actions
- Submissions moderation
- Payments queue actions
- Reviewer and brand management
- Invite management

### Brand Flow
- Dashboard and campaign tracking
- Campaign creation wizard + preview
- Mock/skippable payment step
- Campaign detail, claims, submissions
- Reports list + campaign report

### Reviewer Flow
- Dashboard and campaign discovery
- Campaign accept/decline + slot claim
- Mock proof submission
- Claim tracking
- Submission + edit/resubmission
- Reimbursement tracking

### Mocked Items
- Authentication
- Backend/API persistence
- File uploads
- Payment processing
- Approval workflows (state changes are UI mock)
- Notifications and exports

### Known Limitation (Codex Environment)
Build execution in this Codex environment may fail if package registry access is restricted.

Observed issue in this environment:
- dependency install blocked by registry restrictions
- `next` binary unavailable
- `npm run build` cannot complete here

If dependencies install locally, the prototype should run with the commands above.

---

## Deployment

See `DEPLOYMENT.md` for Vercel deployment steps.
