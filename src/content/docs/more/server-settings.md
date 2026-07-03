---
title: Server Settings
description: The web dashboard where admins tune Yumeko for their server.
sidebar:
  order: 5
---

Server admins get their own web dashboard at
**[guild.67.al](https://guild.67.al)**. Log in with Discord, pick your server,
tweak things. No commands, no config files, just buttons.

Only people who can actually manage the server on Discord can change anything,
so no, you cannot log in and rename your friend's currency to something rude.
Unless you are the admin. Then you can.

## What you can change

### Currency symbol

The big one. Every amount the bot shows uses your server's own symbol, up to
4 characters. `R`, `$`, `kr`, an emoji-adjacent abomination, your call. Leave
it empty to use the default. Changes show up in the bot right away.

### Level-up announcements

Pick which channel level-up messages land in, or turn them off and let people
grind in silence.

### Moderation limits

Set per-server limits for the mod tools, within the bot's hard caps:

| Tool | What you control |
| --- | --- |
| `/timeout` | Default duration and the longest a mod may set |
| `/purge` | Max messages one purge can delete |
| `/slowmode` | Longest slowmode delay a mod may set |
| `/snipe` | On or off, and how long deleted messages stay snipeable |

Every command's settings can be reset to the global default with one click.

## The dashboard

The landing page for your server also shows a quick stats card and a wealth
leaderboard, handy for checking who is rich without opening Discord.
