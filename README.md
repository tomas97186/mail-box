# Pmail

A fake webmail client made as a prop for an investigative game.

Players have to get into a character's mailbox, then dig through inbox, sent mail and
spam for clues: who wrote to whom, when, and what was left out. Pmail and every person,
company and message in it are made up for the game.

## How it plays

- **Login screen.** Players need a username and a password, which they work out from
  other clues in the game. A *forgot password* page gives a security hint instead of
  resetting the password.
- **Mailbox.** It looks and behaves like a normal webmail: inbox, sent and trash folders,
  unread markers, and messages with images, links and quoted replies.
- **Story.** Message dates, replies and forwards all line up into a single timeline that
  the players reconstruct.

## Implementation

- Angular 17 standalone components with lazy-loaded routes. An auth guard protects the
  folders, and a resolver loads each message.
- Angular Material and Bootstrap for the UI.
- Everything runs in the browser, with no backend. Messages are defined in
  `src/app/core/data/emails.data.ts` and grouped by account, so a single build can host
  several mailboxes.
- The repo never stores credentials in plain text. Login compares a SHA-256 hash of
  username + password against a list of valid hashes.

> This is a game prop, not a secure system. Anyone who reads the source can find the
> messages, so don't open it if you're about to play.

## Running locally

```bash
npm install
npm start          # http://localhost:4200
npm run build      # output in dist/
```

### Adding a mailbox

1. Add the account's messages to `emails.data.ts`, using the email address as the key.
2. Generate the login hash, for example with
   `node -e "console.log(require('crypto').createHash('sha256').update('user@pmail.mycases.org' + 'password').digest('hex'))"`.
   Then add it to `users` in `auth.service.ts`.
3. Optionally, add a hint for the *forgot password* page in the same service.
