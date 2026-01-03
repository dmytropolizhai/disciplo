// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import journal from './meta/_journal.json';

const m0000 = `
  CREATE TABLE \`tasks\` (
                           \`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                           \`name\` text NOT NULL,
                           \`status\` text NOT NULL,
                           \`description\` text
  );

`;

  export default {
    journal,
    migrations: {
      m0000
    }
  }
  