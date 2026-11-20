# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/RezaHdyt/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/RezaHdyt/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 31-second vertical GTA 6 clip for make.fun's "Clip GTA 6 for the most YouTube views" bounty. The hook is the finale chase run from Rockstar's Grand Theft Auto VI Trailer 2 — a police helicopter hunting an airboat through the swamp, a jet-ski race past the Vice City skyline, Jason on his motorcycle as a plane screams low overhead, a night neon crash, a boat outrunning a police helicopter, the sunset drive into Vice City, and the neon VI logo — cut to 9:16 with a big hook title, then a voiceover pitch: an AI agent made this clip, and you can make clips like this with AI and earn money on make.fun. `clip.mp4` is the finished clip, handed to the entrant to upload as a public YouTube Short; `VIDEO.json` holds the placeholder URL until that upload lands.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22+, stdlib only, no network, no clock) validates that `VIDEO.json` is a JSON object with a non-empty `url` string, then copies it to the output directory.

---
<sub>Entered on [make.fun](https://make.fun/?ref=1c6x9h9j&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
