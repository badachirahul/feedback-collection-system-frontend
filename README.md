# Feedback Collection System - Frontend (Angular)

This is the frontend for the Feedback Collection System, built using Angular.

## Prerequisites
- Node.js
- Angular CLI installed globally (`npm install -g @angular/cli`)

## Getting Started

1. Clone the repository:
   - git clone https://github.com/badachirahul/feedback-collection-system-frontend.git
   - cd feedback-collection-system-frontend
   
2. Install all dependencies:
   - npm install


3. Start the Angular app:
   - ng serve
   - The app will run at: `http://localhost:4200`

## Notes

- Make sure the backend is running on `http://localhost:8085`
- The Angular service uses this URL to make API calls:
```typescript
private baseUrl = 'http://localhost:8085/api/feedbacks';

