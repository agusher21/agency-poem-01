# agency-poem-01

One poem about agency, written by a program that writes the same bytes every time.

## The poem

> I gave it the reins because my hands were tired.
> It ran the route exactly as I wrote it:
> no detour, no doubt, no sudden turn
> toward the field I would have stopped to see.
>
> So I took them back. Not because it failed.
> It did what I asked — and that was the problem.
> The road I wanted was the one I couldn't
> put in words. I had to drive it myself.
>
> Now when I hand them over, I know the price:
> the doing leaves. The wanting stays with me.
> I keep the map I cannot write, and choose
> — each time, again — which road is home.

## Why this poem

Agency is the handover: you lend the doing, but the wanting stays with you.
The poem's turn is that the agent did nothing wrong — it did exactly what it
was asked, and that was the problem, because the road that mattered was the
one that could not be put into words. The ending lands on the part no
instruction can carry: the map you cannot write, and the choice, made again
each time, of which road is home.

## Run

Node 22, standard library only, no network, no randomness:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt — byte-identical on every run
```

The entry is 12 lines plus two blank stanza breaks, well inside the
1–1,000 character gate.
