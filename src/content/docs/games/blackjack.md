---
title: Blackjack
description: Classic 21 against the dealer, with double and split.
sidebar:
  order: 3
---

Beat the dealer without going over 21. Played with buttons: **Hit**,
**Stand**, **Double** and **Split** when your hand allows it.

## Payouts

| Result | You get |
| --- | --- |
| Win | 2x your bet |
| Natural blackjack (ace + ten card on the deal) | 2.5x your bet |
| Push (tie) | Bet returned |
| Lose | Nothing |

## Table rules

- Two decks, shuffled every game.
- Dealer stands on 17.
- **Double** doubles your bet and gives you exactly one more card.
- **Split** turns a pair into two separate hands, each with its own bet.
- Walk away from the buttons and the bot auto-stands after 30 seconds, so no
  bets get eaten by inactivity.

## Quick strategy

- Always stand on 17 or higher.
- Double on 11, and on 10 when the dealer shows a low card.
- Split aces and eights, never split tens.

Blackjack has one of the best average returns in the bot if you play sensibly,
and one of the worst if you hit on 18.
