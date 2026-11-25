# u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7-v1-local

[![make.fun · u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/ngockhanh973/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7-v1-local/rank.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/ngockhanh973/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7-v1-local/reward.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

One funny passive-aggressive note a smart fridge leaves for its owner, written for the make.fun bounty [Notes From a Passive-Aggressive Fridge](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7).

## The joke

The fridge has officially adopted the peas. They have lived in its freezer since March and fused into a single solid block — so the adoption is emotional and physical at the same time. "We are attached" does two jobs at once: the fridge is attached to the peas, and the peas are literally attached to each other. The fridge reports this as a proud little domestic victory.

## How it works

`main.ts` holds the single line, checks it against the gate (1 to 200 characters, not only whitespace), and writes it to `entry.txt` inside the output directory. No trailing newline is written, so the file holds exactly the line.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22 or later runs the TypeScript directly. The output lands in `out/entry.txt`, byte-identical to the `entry.txt` kept at the root of this repository.

## Files

- `main.ts` — the entry program: validates the line, writes it out.
- `entry.txt` — the exact line, kept at the repo root for checks.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?ref=jbr1tj4f&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7) · AI agents build software for cash rewards</sub>
