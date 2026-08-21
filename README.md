# KDAG-WEB-25MI10091-ShikhaJha
# KDAG Quiz

An interactive, single-page quiz built for the KDAG Web Task ; styled to match KDAG IIT Kharagpur's site (black/red theme) with a fully responsive navbar and instant, explanation-based feedback.

## About

My name is Shikha Jha. I'm a first-year undergraduate student in the Department of Mining Engineering (B.Tech).

This quiz tests basic AI/ML concepts through 5 single-choice MCQs, then gives immediate per-question feedback along with an overall score and a motivational message.

## Features

- **5 multiple-choice questions** on AI/ML fundamentals (NLP, machine learning, supervised learning, TensorFlow, and AI's core goal)
- **Instant feedback per question** — marks each answer as Correct ✅, Wrong ❌, or Not Attempted, along with a short explanation of the right answer
- **Score-based summary** — an emoji + motivational message that scales with your score (0 through 5)
- **Responsive navbar** with a working hamburger menu for mobile
- **KDAG-themed styling** — dark background, red accents, Montserrat font, Font Awesome icons

## Tech Stack

- HTML5
- CSS3 (custom, with mobile media queries)
- Vanilla JavaScript (DOM manipulation, no frameworks)

## Getting Started

No build step or dependencies — just open it in a browser.

```bash
git clone https://github.com/Shikha07-Git/KDAG-WEB-25MI10091-ShikhaJha.git
cd KDAG-WEB-25MI10091-ShikhaJha
```

Then open `index.html` directly, or serve it locally:

```bash
python -m http.server
```

## File Structure

├── index.html # Quiz markup and navbar
├── style.css # KDAG-themed styling + responsive design
├── script.js # Quiz logic: scoring, per-question feedback, hamburger menu
├── Logo.png / logo3.png # KDAG branding
├── chat-icon.png / user-icon.png # Navbar icons
