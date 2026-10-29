# Tasks

- [x] 1. Greeting in capitals
  - Add shout(name) to src/greeting.js: greet(name) in capitals, followed by "!!". Export it, and add a test for it to test.js.
  - _Requirements: 1.2_
  - _Files: src/greeting.js, test.js_
  - _Verify: node test.js_
  - _Issue: #1_

- [ ] 2. Fix: app does not start
  - The app does not start: "node src/server.js" stopped with code 1. The last lines of its output are below, and all of it is in the Output panel.
  - Find why the app does not start with the `Install:` and `Dev:` commands of `.nexgile/specs/rd10-before/design.md`'s "Build and run", and fix it, so its page answers. Greenfield starts the app with those lines as design.md has them once this task is merged: when the app needs another command to install or start, change that line there.
  - The start log, its last 5 lines, is in the block under this task in `.nexgile/specs/rd10-before/tasks.md`.
  - _Requirements: 1.2_
  - _Files: **_
  - _Verify: node test.js_

  ```text
  node:internal/modules/cjs/loader:1228
    throw err;
    ^

  Error: Cannot find module 'C:\Users\Administrator\Desktop\rd10-before\src\server.js'
  ```
