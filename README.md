# KURIOZUM

Studio rzeczy nieoczywistych. Portfolio / archiwum wizualne zbudowane w Next.js App Router, TypeScript i Tailwind CSS 4. Animacje SVG i CSS, bez bibliotek WebGL.

## Uruchomienie

Node.js 24, npm 11 (lockfile w repozytorium).

```sh
npm ci
npm run dev
```

W środowisku chmurowym, jeżeli katalog domowy jest tylko do odczytu, użyj `npm_config_cache=/tmp/kuriozum-npm npm ci`.

Wersja produkcyjna i kontrola jakości:

```sh
npm run lint
npm run build
npm run start
```

Testy przeglądarkowe (build wymagany):

```sh
npx playwright install chromium
npm run test:e2e
```

Jeśli Chromium jest już zainstalowane w systemie:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:e2e
```

Playwright sam uruchamia serwer produkcyjny. Testuje desktop i mobile w Chromium: obrazy, archiwum, projekty, losowanie, następny projekt, 404, nawigację, klawiaturę, reduced-motion i szerokość layoutu. Nie zastępuje testów na fizycznym Safari/iOS.

## Struktura

- `src/app/` — `/`, `/work`, `/project/[slug]`, `/about`, `/contact`, layout, 404 i krótkie wejście strony.
- `src/components/` — `navigation`, `symbol`, `wordmark`, `archive`, `video-preview`, `footer`.
- `src/data/projects.ts` — typy i centralne dane projektów; przyszły punkt integracji z CMS.
- `src/data/site.ts` — email, Instagram i podstawowe dane studia.
- `src/app/globals.css` — tokeny kolorów w `:root`, typografia, asymetryczny układ, animacje, mobile i reduced-motion.
- `public/images/` — lokalne obrazy, dostępne pod `/images/...`.
- `tests/` — testy funkcjonalne Playwright.

## Dodawanie projektów i mediów

Dodaj wpis w `projects.ts` lub zastąp demonstracyjną tablicę `entries` danymi CMS zachowując typ `Project`. Każdy projekt ma `id`, unikalny `slug`, `title`, `year`, `categories`, `description`, `client`, `coverImage`, opcjonalne `coverVideo`, `media`, `featured`, `active` i `visual` (wariant wizualny). `active: false` usuwa projekt z archiwum, losowania i routingu. Licznik archiwum i następny projekt korzystają z tej samej aktywnej listy. Zmiana danych statycznych wymaga ponownego builda.

Zdjęcia przechowuj w `public/images`, filmy np. w `public/videos`; w danych używaj ścieżek `/images/photo.jpg` i `/videos/film.mp4`. Media mogą mieć typ `image` albo `video`. Podgląd `coverVideo` ładuje się dopiero przy hover/focus na urządzeniu z myszą; zatrzymuje się po opuszczeniu karty lub viewportu. Na mobile i przy reduced-motion pozostaje okładka. Film projektu ma natywne controls i `preload="none"`. Nie ma przykładowych plików wideo — obsługa jest przygotowana do podłączenia materiałów. Dla zdalnego CDN skonfiguruj dokładne `images.remotePatterns` w `next.config.ts`.

Dalsze wpisy otrzymują automatyczny układ CSS Grid; indywidualne kompozycje pierwszych sześciu są opisane klasami `card-1`–`card-6`. Galerie przyjmują dowolną liczbę obrazów i filmów. Teksty widoków są bezpośrednio w odpowiednich plikach `src/app/*/page.tsx`; teksty projektów w danych.

## Kostka i symbol

Kostka filtruje aktywną listę, pomija bieżący projekt, losuje wpis i przechodzi przez `router.push` bez pośredniego ekranu. Działa także z klawiatury.

Symbol to SVG: 17 poziomych fragmentów, proceduralna ziarnistość `feTurbulence`, gradient i organiczne pasma. Obrót sfery i tekstu ma przeciwne kierunki. Hover rozsuwa fragmenty i litery; pozycja kursora subtelnie odkształca orbitę. Sprężyste krzywe CSS składają obiekt po opuszczeniu. Mobile nie uruchamia rozpadu; `prefers-reduced-motion` zatrzymuje rotację, rozpad, zakłócenia i przejścia. Brak renderowania WebGL i pętli JavaScript.

## Przed publikacją

To działający projekt z demonstracyjnymi realizacjami, nie potwierdzony dorobek studia. Zastąp zdjęcia, opisy, nazwiska/klientów i grafiki materiałami Kuriozum. Uzupełnij email i Instagram w `site.ts` (bez danych strona pokazuje uczciwe komunikaty zamiast fikcyjnych linków). Tekst About jest roboczy. Dodaj docelowe metadane. Favicon z symbolem marki jest w `src/app/icon.svg`. Nie dodano zmyślonych danych kontaktowych, formularza bez backendu ani analityki.

Cztery demonstracyjne grafiki SVG zostały stworzone dla tego projektu. Fotografia gór pochodzi z przykładu `vercel/next.js`, `examples/image-component/public/mountains.jpg`: https://github.com/vercel/next.js/tree/canary/examples/image-component. Użyta jako materiał demonstracyjny; przed produkcją zastąp ją własną fotografią i ustal prawa do publikowanych materiałów.
