# Macarthur Women Redefining AI × UN Women AI Hub: social media pack

Social media designs that bring the **Macarthur Women Redefining AI** forum together with the news that **UN Women has launched its Digital, Innovation and AI Hub** (25 September 2026).

## What's in here

| File | What it is | Size |
|---|---|---|
| `exports/post-1.png` | Post 1: the news | 1080 × 1080 (feed post) |
| `exports/post-2.png` | Post 2: why it matters (the stats) | 1080 × 1080 |
| `exports/post-3.png` | Post 3: what this means locally + call to action | 1080 × 1080 |
| `exports/story-1.png` | Story | 1080 × 1920 (Instagram, Facebook, LinkedIn stories) |
| `designs.html` | The editable design file (open it in any web browser) | — |
| `render.js` | Turns the designs into the PNG images above | — |

Posts 1 to 3 work as a **carousel** (swipe post) or as three separate posts across a week.

## Naming

- **The forum:** always use the full name, **Macarthur Women Redefining AI**, in captions, disclaimers and any text.
- **The logo:** it says **Women Redefining AI** without "Macarthur" on purpose, so the same brand can be used in other regions later. Keep the logo as it is.

## The logo

The **Women Redefining AI** logo (`mwrai-logo.png`) is used exactly as supplied. It has only been trimmed to the circle and resized, and it's never recoloured or stretched.

## How the UN Women alignment works

- **Two overlapping circles:** your logo (labelled *Macarthur*) overlaps a UN-blue ring (labelled *UN Women AI Hub*). It says "local meets global" at a glance, and it echoes the double ring in the NUOVO "O".
- **UN blue** (`#009edb`) is used only for the UN side: the ring, the "AI Hub" words and the stat bars.
- **"Aligned with" badges** use our own two-ring icon, not the UN Women logo.
- **A short disclaimer** sits on every design: *"Macarthur Women Redefining AI is an independent community initiative, not affiliated with or endorsed by UN Women."*

Why not the actual UN Women logo? The UN name and emblem are protected, and using them needs written permission from the UN. Without it, the logo can make a post look like an official partnership. Naming UN Women in words to share their news is fine. If you ever formally partner with UN Women, the blue ring can easily be swapped for their approved logo.

## Colours (from your logo)

Set once at the top of `designs.html` under `BRAND COLOURS`:

- **Orange** `#f68b1f` and **coral** `#e8704f`: from the logo ring
- **Peach** `#f2d0c4` → `#f39576`: from the logo background
- **Navy** `#1d2a4a`: from the ring and "Redefining AI."
- **UN blue** `#009edb` (and a deeper `#0072bc` for text on light backgrounds so it's easy to read)

Font: **Work Sans** (a close, free match to your logo lettering), included in `fonts/`.

## Making fresh images

After any change to `designs.html`, run `node render.js` (or ask Claude) to update the PNGs in `exports/`.

## Captions (ready to copy)

**Post 1: the news**
> Big news for women in AI 💙
> UN Women has just launched a Digital, Innovation and AI Hub, a global space dedicated entirely to gender equality in AI and tech.
> It brings researchers, governments, tech companies and women's rights groups together so AI works for women and girls, not around them.
> We're proud to stand alongside this work. Here in Macarthur, it's exactly the conversation we're having every day. From the world stage to our backyard. 🌏➡️🏡
> #MacarthurWomen #WomenInAI #GenderEquality #UNWomen #SmallBusiness #SouthWestSydney

**Post 2: why it matters**
> Here's why this matters 👇
> Men hold nearly 8 in 10 AI jobs, and almost 9 in 10 of the senior leadership roles shaping the technology (UN Women, 2026).
> When the people building AI don't reflect the people using it, the tools miss the mark. That affects local businesses, customers and communities.
> The good news? Every woman who gets curious about AI helps change these numbers.
> #WomenInAI #MacarthurBusiness #AIForEveryone #GenderEquality

**Post 3: local call to action**
> Global change starts with local conversations ☕
> At Macarthur Women Redefining AI, we keep it simple:
> ✅ Learn AI in plain English, at your own pace
> ✅ Meet local women in business doing it too
> ✅ Have your say in how AI shapes our region
> No tech background needed. Just bring your curiosity. Link in bio to join us.
> #MacarthurWomen #SmallBusinessAustralia #WomenInBusiness #AIForEveryone

**Story:** Add a link sticker pointing to your sign-up or event page, placed over the "Tap the link to join us" button.

## Sources

- UN Women (25 September 2026). *UN Women launches the Digital, Innovation and AI Hub dedicated exclusively to gender equality* [press release]. https://www.unwomen.org/en/news-stories/press-release/2026/09/un-women-launches-the-digital-innovation-and-ai-hub-dedicated-exclusively-to-gender-equality
  - Used for: the launch date (25 September 2026, New York), what the hub does (it brings together researchers, governments, technology companies and women's rights organisations), and the statistic that men hold nearly eight in 10 AI jobs and almost nine in 10 senior leadership positions shaping the technology.
- Mirage News (2026). *UN Women Launches AI Hub for Gender Equality*. https://www.miragenews.com/un-women-launches-ai-hub-for-gender-equality-1750479/ (a republished copy of the release)

- United Nations. *Use of the UN name and emblem*. https://www.un.org/en/about-us/copyright (explains that the UN name and emblem can't be used without authorisation)
