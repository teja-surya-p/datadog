# Orbit AI Backend

Node + Express API that verifies Firebase ID tokens, stores chats in Firestore, and calls a pluggable LLM provider (Gemini or Ollama) for responses.

## Setup

1) Install dependencies:

```
cd backend
npm install
```

2) Copy environment template and fill values:

```
cp .env.example .env
```

Required variables:
- `FIREBASE_PROJECT_ID` - Firebase project ID
- `FIREBASE_CLIENT_EMAIL` - Service account client email
- `FIREBASE_PRIVATE_KEY` - Service account private key (use `\n` for new lines)

LLM provider configuration:
- `LLM_PROVIDER` - `ollama` or `gemini`
- If using Gemini: `GEMINI_API_KEY`, optional `GEMINI_MODEL`
- If using Ollama: `OLLAMA_BASE_URL`, `OLLAMA_MODEL`

Optional:
- `CORS_ORIGINS` - comma-separated list of frontend origins
- `SYSTEM_PROMPT` - system instruction for the assistant

3) Run the server:

```
npm run dev
```

## Authentication

All `/api/*` routes except `/api/health` require a Firebase ID token:

```
Authorization: Bearer <firebase-id-token>
```

## API

- `GET /api/health` -> `{ status: 'ok' }`
- `GET /api/chats` -> list chats for the authenticated user
- `POST /api/chats` -> create a chat (body: `{ "title": "My chat" }`)
- `GET /api/chats/:chatId/messages` -> list messages
- `POST /api/chats/:chatId/messages` -> send a message and receive an LLM reply
  - body: `{ "content": "...", "attachments": [{ "name": "file.pdf", "size": 1234 }] }`
- `POST /api/messages/:messageId/feedback` -> record thumbs up/down
  - body: `{ "rating": "up" | "down" }`

## Notes

- Messages and chats are stored in Firestore collections: `chats` and `messages`.
- Feedback is stored on each message under the `feedback` field.
- For Ollama, ensure the server is running locally, for example:
  - `ollama pull gemma:7b`
  - `ollama run gemma:7b`
