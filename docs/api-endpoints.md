# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Questions
- `POST /api/questions`
- `GET /api/questions`
- `GET /api/questions/:questions_id`
- `DELETE /api/questions/:question_id`

### Answers
- `POST /api/answers`
- `GET /api/answers`
- `GET /api/answers/:answer_id`
- `DELETE /api/answers/:answer_id`

### Votes
- `POST /api/answers/:answer_id/upvote`
- `POST /api/answers/:answer_id/downvote`
- `DELETE /api/answers/:answer_id/upvote`
- `DELETE /api/answers/:answer_id/downvote`
