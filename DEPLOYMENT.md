# Deployment Guide (Vercel)

This project is a Next.js frontend-only MVP and can be deployed directly to Vercel.

## Prerequisites
- GitHub/GitLab/Bitbucket repo with this code
- Vercel account

## Steps

1. Push code to your repository.

2. In Vercel:
   - Click **Add New Project**
   - Import the repository

3. Framework detection:
   - Vercel should auto-detect **Next.js**

4. Build settings (defaults are fine):
   - Build Command: `npm run build`
   - Output: Next.js default

5. Environment variables:
   - None required for this prototype

6. Deploy:
   - Click **Deploy**

7. After deployment:
   - Open the deployed URL
   - Confirm role landing page (`/`) loads
   - Verify Admin/Brand/Reviewer navigation is clickable

## Notes
- This is frontend-only and mock-driven by design.
- No backend or database setup is required.
