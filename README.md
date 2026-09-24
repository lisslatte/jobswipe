# RoleMate

RoleMate is a local, fully interactive website prototype for a Tinder-style job search workflow.

Candidates can sign up or log in, edit a complete job profile, upload a profile photo and CV documents, filter the job deck, swipe right to apply, swipe left to skip, and track every application by status: no answer yet, matched, or denied.

Recruiters can review candidates who applied to each role, inspect profile details and uploaded document names, deny candidates, or continue the hiring process. Chat only unlocks when the candidate has applied and the recruiter chooses Continue.

## Demo Logins

Job seeker:

- Email: `nadia@demo.com`
- Password: `demo123`

Hiring manager:

- Email: `alex@demo.com`
- Password: `demo123`

Choose the matching account type on the login screen. You can also create either account type from the sign-up screen.

## Run

The project is dependency-free and stores demo data in browser `localStorage`.

Open `index.html` directly in a browser, or serve the folder with Python:

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173`.

## Features

- Login and sign-up flow
- Separate job seeker and hiring manager access
- Saved candidate profile with editable CV-style fields
- Profile photo upload with preview
- CV/document upload with metadata and download for small files
- Job search filters for keyword, location, job type, salary, and remote-only
- Swipe/apply and skip workflow
- Application tracker for no answer, matched, and denied statuses
- Recruiter queue by job
- Recruiter deny/continue decisions
- Matched-only messaging
- Reset demo data button

## Files

- `index.html` - app layout and screens
- `styles.css` - responsive product UI
- `app.js` - local app data, auth, filters, applications, uploads, recruiter decisions, and chat
- `assets/hiring-marketplace.png` - generated visual asset for the app header and auth screen
