# QueueLess Campus Frontend

React single page app for the QueueLess Campus queue system. Students can register, join and track service queues; staff can manage their assigned queue; administrators can manage services and staff.

## Requirements

- Node.js 20.19 or newer
- npm
- QueueLess Campus backend running at `http://localhost:8080` (or another API URL)

## Run locally

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Open the Vite URL shown in the terminal (usually `http://localhost:5173`). Set `VITE_API_URL` in `.env` to the backend API base URL, including `/api`, if it is not `http://localhost:8080/api`.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build in `dist/`
- `npm run preview` — serve the production build locally
