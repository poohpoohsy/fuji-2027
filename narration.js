/*
  Sandy's voice narration — the only file you need to edit for audio.

  OPTION A — one long recording, cut by time (seconds):
    file: "sandy-fuji.mp3",
    chapters: { welcome: { start: 0, end: 18 }, letter: { start: 18, end: 41 }, ... }

  OPTION B — one file per chapter:
    chapters: { welcome: { file: "audio/01-welcome.m4a" }, ... }

  Optional photo or video for a chapter (replaces the drawing):
    festival: { start: 41, end: 63, media: { type: "video", src: "video/festival.mp4" } }
    dawn:     { ..., media: { type: "image", src: "photos/sunrise.jpg", alt: "Sunrise above the clouds" } }

  Tip: open the site, add #studio to the address, load your recording,
  tap through the chapters and copy the timings it generates.
*/
// DRAFT timings (2 Nov 2026), cut at natural pauses in Sandy's 4:05 recording. Sandy to confirm.
window.NARRATION = {
  file: "sandy-fuji.mp3",
  chapters: {
    welcome:  { start: 0.0, end: 15.6 },
    letter:   { start: 15.6, end: 34.7 },
    festival: { start: 34.7, end: 55.6 },
    route:    { start: 55.6, end: 90.9 },
    days:     { start: 90.9, end: 118.9 },
    dawn:     { start: 118.9, end: 140.6 },
    ready:    { start: 140.6, end: 175.0 },
    care:     { start: 175.0, end: 213.3 },
    join:     { start: 213.3, end: 245.5 }
  }
};
