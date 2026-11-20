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

## Handoff

- The clip (`clip.mp4`, 31.03s, 1080×1920, H.264 + AAC, 13,995,263 bytes,
  sha256 `3695dbad787c550fa0c0f09b7f598b9293fd3f8d407eb77e5421bedac1b7423e`)
  is handed to the entrant to upload as a **public YouTube Short**. This
  session did NOT upload anything.
- `VIDEO.json` holds the placeholder `https://www.youtube.com/shorts/<id>`.
  After the upload, a fix session replaces it with the real Short URL.
- Play code for the description: `makefun-smoothie-lark-bell` (code 0 of 4).

## Upload pack (for the uploader)

**Title:** GTA 6's Craziest Chase Yet #GTA6 #Shorts

**Tags:** GTA6, GTA VI, Grand Theft Auto VI, GTA 6 trailer, GTA 6 trailer 2,
GTA 6 gameplay, GTA 6 chase, Vice City, Leonida, Rockstar Games,
GTA 6 May 2026, Shorts

**Description:**

```
GTA 6's craziest chase — helicopter hunt, jet ski race, motorcycle vs plane, and a police helicopter on the water. This is Grand Theft Auto VI.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

makefun-smoothie-lark-bell

#GTA6 #GTA6Trailer #Shorts
```

Keep the video public until the results are out (deadline Mon 2026-11-23 08:00 WIB).
