---
title: Wallet and Bank
description: How money storage works and how to not get robbed.
sidebar:
  order: 2
---

Your money lives in two places, and knowing the difference is the cheapest
lesson in the whole bot. The expensive version is getting robbed.

## Wallet

- What you spend and bet with.
- What other players can `/rob`.
- Check it with `/wallet`.

## Bank

- Completely safe. Nobody can touch it, ever.
- Check it with `/bank`.

## Moving money

| Command | Direction |
| --- | --- |
| `/deposit <amount>` | wallet to bank |
| `/withdraw <amount>` | bank to wallet |

Both accept `all`, `half` and shorthand like `250k` or `2m`.

## Rob protection

- Robbers can only hit players with at least 100,000 in their wallet, and
  they only take a cut of the **wallet**.
- A **Rob Shield** item blocks the next rob attempt against you for 24 hours.
- The lazy rule: `/deposit all` after every win.

## Wealth and the leaderboard

`/leaderboard` ranks players by total wealth: wallet plus bank plus crypto.
Hiding money in the bank or in coins still counts, so no tricks there.
