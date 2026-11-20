# NOTES — gta6-clipper-01

## The moment chosen

**Source:** Rockstar Games, "Grand Theft Auto VI Trailer 2" (official, May 2025),
https://www.youtube.com/watch?v=VQRLujxTm3c — fetched in-session with yt-dlp.

**The moment:** the trailer's finale chase run, 2:18–2:39 of the trailer
(138.4–145.4 + 147.47–159.27 in the source file, 18.8s after one cut — see below).
One continuous escalating sequence, not a montage of scattered clips:

1. Police helicopter hunting an airboat through the Leonida swamp
2. Jason & Lucia racing a jet ski past the Vice City skyline
3. Jason on his motorcycle as a plane screams low overhead
4. Night neon crash — a bike sliding through sparks past a truck
5. Speedboat outrunning a police helicopter on open water
6. Dusk wheelie + convertible getaway, police lights behind
7. Sunset drive into the Vice City skyline
8. The neon VI logo

**Why it will hold a viewer:** it opens mid-chase — helicopter, airboat, gunner —
so there is zero setup before the action, and every ~2 seconds the spectacle
escalates (water → bike → plane → night city → sunset). It is the most
rewatchable stretch of the most-watched game trailer ever, and it ends on the
one frame every GTA fan recognises instantly: the VI logo. A viewer who loves
GTA stops scrolling at the helicopter; the escalation keeps them to the logo;
the pitch then lands on a warm audience.

**The one cut:** the trailer's finale briefly breaks to a quiet indoor beat of
Jason and Lucia (~145.5–147.47) that kills the chase pacing, so it was removed
— the clip jumps straight from the night crash to the boat-vs-helicopter chase.
Cut point verified frame by frame (145.4 is still the crash, 145.6 is the
bedroom).

## Creative decisions

- **Hook (first seconds):** opens on the helicopter chase itself, with a big
  two-line title over the top blur area for the first ~4s: "GTA 6's CRAZIEST /
  CHASE" (Anton, white + gold). A small "Grand Theft Auto VI · Trailer 2"
  credit runs under the video band for the whole moment.
- **Format:** 1080×1920 vertical, 30fps. The trailer is letterboxed 2.22:1, so
  the letterbox was cropped out (1920×866) and the footage is blur-filled:
  full frame visible, nothing important cropped off the sides.
- **Pitch (last ~12s):** a dark end card built from the blurred sunset
  skyline frame, with the lines appearing one by one and staying up, so the
  clip reads fully with the sound off:
  - "An AI agent made this clip."
  - "Make clips like this with AI"
  - "and earn money on make.fun" (gold)
  - "make.fun/bounty/gta6-clipper-01" (mono, boxed)
  - "$500 IN PRIZES"
  All text sits inside the safe area, clear of YouTube's bottom and right-edge
  buttons; each line stays up at least 2–3 seconds.
- **Voiceover: YES.** A TTS voice (Meta Shortwave `tts` CLI, run in-session)
  speaks the pitch over the end card while the trailer music fades out:
  "An AI agent made this clip. Make clips like this with AI, and earn real
  money on make.fun. Five hundred dollars in prizes. Link in the description."
  (8.95s, starts 0.7s into the end card.)
- **Fixes found by watching the renders:** v1 had the pitch lines overflowing
  the frame edges in Montserrat Black (fixed by switching to condensed Anton);
  v2 still held ~0.5s of the indoor beat (fixed by moving the cut to 145.4).
  Final render verified frame by frame: hook, mid-chase, cut point, logo,
  mid-pitch, final pitch frame — all legible, nothing cropped, no black bars.

## V2 — portrait cut: the dirt-bike train jump (built 2026-11-20)

**Source change:** v2 does NOT reuse Trailer 2. It is cut entirely from
Rockstar's **GTA 6 Launch Trailer** (15 Oct 2026, captured on PS5),
https://www.youtube.com/watch?v=rz1B4B2yBZY — the freshest official footage,
five weeks old and far less clipped than Trailers 1/2. (Fetched in-session
with yt-dlp 2026.08.19; the older yt-dlp in the ClipIt venv hit YouTube's
bot check, the newer one did not. Trailer 1 was also fetched in 1080p for
scouting: https://www.youtube.com/watch?v=QdBZY2fkU-0.)

**Why not the wing fight:** the planned primary moment (Lucia fighting a
bodybuilder on an airplane wing, Trailer 2) does not exist in Trailer 2 —
verified by a full-trailer shot-by-shot scan (2s grid + scene detection +
dense 3fps frames of the 99–112s montage). It is also not in Trailer 1
(full 1fps scan). The research note conflated it with the Extended Look's
landing-gear leap. Per the brief's fallback rule, v2 uses the dirt-bike
jump instead — and the Launch Trailer delivers it better than Trailer 1's
dusty street wheelies (Trailer 1, ~65.7–66.9s): a clean airborne jump over
a moving train.

**The moment:** a dirt bike launches off an elevated rail line and soars
over a passing train, Vice City behind it (Launch Trailer 48.75–50.15).
The hook frame is the bike frozen mid-air above the train — a genuine
"wait, WHAT?" image that reads at thumbnail size in 9:16.

**The cut — all Launch Trailer timestamps (verified frame by frame):**

| Clip | Source | Beat |
| --- | --- | --- |
| 0.00–1.40 | 48.75–50.15 | HOOK: dirt-bike jump over the train |
| 1.40–2.45 | 46.35–47.40 | Exotic cars at the intersection |
| 2.45–3.23 | 47.45–48.23 | Police car drifting |
| 3.23–5.03 | 18.60–20.40 | Armed crew in the green lowrider |
| 5.03–6.43 | 34.40–35.80 | Bank vault walk-through |
| 6.43–7.40 | 53.53–54.50 | Laser vault interior |
| 7.40–9.30 | 54.50–56.40 | Biplane trailing red smoke over the beach |
| 9.30–10.74 | 38.33–39.77 | Car beneath the airplane |
| 10.74–12.17 | 56.40–57.35 | Bodybuilder in the gym (angle A only; a second angle starts ~57.4) |
| 12.17–13.73 | 27.17–28.73 | Soldiers wading the swamp at sunset |
| 13.73–15.23 | 44.60–46.10 | Purple club dancer |
| 15.23–16.33 | 52.40–53.50 | Rooftop explosion behind Jason |
| 16.33–18.53 | 67.90–70.10 | Window smash + man hanging off the helicopter |
| 18.53–19.23 | 71.40–72.10 | Sniper close-up |
| 19.23–20.07 | 72.10–73.13 | CLIMAX: Lucia with a rifle, explosion behind her |
| 20.07–32.07 | end card | make.fun pitch (12s) |

**Why it can go viral:** GTA 6 launched 19 Nov 2026 — yesterday — and
small channels are exploding right now with GTA 6 Shorts (Jaywalk, 1,760
subs, 1.8M views; Crazy_Scary, 734 subs, 1.4M). What wins is bold
claim/question hooks, launch-night energy, and pure spectacle. V2 is built
for exactly that: the hook literally says "GTA 6 IS OUT NOW" over the most
shocking frame, riding the launch-day search surge; the footage is the
least-clipped official source, so viewers haven't seen these beats a
hundred times the way they have Trailer 2's chase; and the montage is 15
beats in 20 seconds with zero dead air — a new spectacle every ~1.3s, so
there is no moment to swipe away. True portrait-native framing (tight
vertical crops that follow the action, no blur bars, no letterbox) fills
the phone screen edge to edge, which is what the Shorts feed rewards —
v1's blur-fill looked like a repurposed horizontal clip.

**Hook design (first 2s):** the first frame is the bike already airborne
over the train. "GTA 6 IS" (white) / "OUT NOW" (gold) in 190px Anton
across the top from 0s; "AND THIS IS INSANE" (92px) joins at the bottom
at 0.5s. All three lines are gone by 1.4s as the montage takes over. The
wording is new — v1's "GTA 6's CRAZIEST CHASE" is not reused.

**Format:** 1080×1920, 30fps, H.264 + AAC. True portrait-native: 540×960
crops from the trailer's 1920×960 active area (2:1 letterbox removed),
scaled 2x, with per-shot crop positions and tracking pans on the jump
(bike), police drift (car), club (dancer), and swamp (soldier). Loudness
−14.35 LUFS, true peak −1.90 dBTP (limited with alimiter, level=false).

**Pitch (last 12s):** wording UNCHANGED from v1 — it worked, and the
spoken line matches the on-screen text exactly. End card is the night-city
aerial (Launch Trailer 17.6s), blurred + darkened; lines appear one by one
and stay up, so the clip reads fully with the sound off:
- "An AI agent made this clip."
- "Make clips like this with AI"
- "and earn money on make.fun" (gold)
- "make.fun/bounty/gta6-clipper-01" (mono, boxed)
- "$500 IN PRIZES"

**Voiceover: YES.** V1's TTS recording reused (Meta Shortwave `tts` CLI
output, 8.95s, starts 0.7s into the end card — same file, same wording):
"An AI agent made this clip. Make clips like this with AI, and earn real
money on make.fun. Five hundred dollars in prizes. Link in the description."

**Fixes found by watching the renders:** position estimates from thumbnail
contact sheets proved unreliable (misread by up to 2x) — every crop was
verified against rendered segment frames, and 5 segments were re-cut
before assembly (hook pan, bodybuilder, swamp, club, sniper). The GTA VI
logo and the "NOVEMBER 19, 2026" date card are both too wide for a 9:16
crop (820–950px wide vs a 540px window), so the logo beat was dropped;
the pitch card carries the branding instead. True peak was −0.67 dBTP
before the limiter pass (−1.90 after).

## Handoff

- The clip (`clip.mp4`) is now the **V2 clip**: 32.10s, 1080×1920,
  H.264 + AAC, 18,145,023 bytes,
  sha256 `0c753355c0cd359a1bb3c61084074d5033caf72a13df9fceff8faa3dbf1c4d57`.
  It is handed to the entrant to upload as a **public YouTube Short**. This
  session did NOT upload anything. (V1, 31.03s, sha256 `3695dbad…`,
  is superseded in the repo; the v1 file remains at
  `~/workspace/makefun/gta6-clipper-01-clip.mp4` outside the repo, and the
  v2 file also at `~/workspace/makefun/gta6-clipper-01-clip-v2.mp4`.)
- `VIDEO.json` holds the placeholder `https://www.youtube.com/shorts/<id>`.
  After the upload, a fix session replaces it with the real Short URL.
- Play code for the description: `makefun-smoothie-lark-bell` (code 0 of 4).

## Upload pack (for the uploader) — V2

**Title:** GTA 6 IS OUT NOW — And This Jump Is INSANE #GTA6 #Shorts

**Tags:** GTA6, GTA VI, Grand Theft Auto VI, GTA 6 launch, GTA 6 launch
trailer, GTA 6 gameplay, GTA 6 dirt bike, GTA 6 jump, Vice City, Leonida,
Rockstar Games, GTA 6 November 2026, Shorts

**Description:**

```
GTA 6 IS OUT NOW — and this dirt-bike jump over a moving train is insane. Plus a rooftop explosion, a bank vault, a biplane over the beach, and Lucia with a rifle. This is Grand Theft Auto VI.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

makefun-smoothie-lark-bell

#GTA6 #GTA6Launch #Shorts
```

Keep the video public until the results are out (deadline Mon 2026-11-23 08:00 WIB).
