---
title: Three Card Poker
description: Beat the dealer's three cards, with an optional Pair Plus side bet.
sidebar:
  order: 4
---

`/poker ante:<amount> [pairplus:<amount>]` deals you the GTA Diamond Casino table
game: you against the dealer, three cards each. Post your **ante**, look at your
hand, then **Play** or **Fold**.

## How a round works

1. You post an **ante**. You can add an optional **Pair Plus** side bet at the
   same time.
2. You see your three cards. The dealer's stay face down.
3. Choose:
   - **Play**: put up a second bet equal to your ante, then the dealer reveals.
   - **Fold**: give up the ante and end the round.

The dealer only plays with **Queen-high or better**. If the dealer does not
qualify, your **ante pays 1:1** and your Play bet is returned. If the dealer
qualifies, the higher hand wins both the ante and the Play bet 1:1. A tie returns
both.

## Hand ranking

Three-card hands rank differently from normal poker, so a **Straight beats a
Flush**:

Straight Flush > Three of a Kind > Straight > Flush > Pair > High Card.

The Ace is high or low in a straight (A-2-3 is the lowest, Q-K-A the highest).

## Ante Bonus

Land a strong hand and you get paid a bonus on your ante no matter what the
dealer does, even if the dealer beats you:

| Your hand | Ante Bonus |
| --- | --- |
| Straight | 1:1 |
| Three of a Kind | 4:1 |
| Straight Flush | 5:1 |

## Pair Plus (side bet)

Pair Plus is settled purely on your own three cards, win or lose against the
dealer, fold or play:

| Your hand | Pays |
| --- | --- |
| Pair | 1:1 |
| Flush | 4:1 |
| Straight | 6:1 |
| Three of a Kind | 30:1 |
| Straight Flush | 40:1 |

Anything below a pair loses the Pair Plus stake.

## Quick tips

- The optimal call is to **Play with Queen-Six-Four or better, otherwise Fold**.
  It is a tiny edge over folding everything weak.
- Make sure you can cover the worst case: ante plus an equal Play bet plus any
  Pair Plus. The bot checks this before dealing.
- If you walk away without deciding, the hand auto-folds after 30 seconds (your
  Pair Plus still resolves on its own).
