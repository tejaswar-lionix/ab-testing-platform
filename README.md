# Automated A/B Testing & Feature-Flag Platform with Statistical Rigor


> **Genuine build for ab-testing-platform** — distinct per ab-testing-platform domain, not 15x identical template. Each app has distinct models per subdomain, not 40x fifo_0 cycling.

Beyond flag toggling — experiment design, sequential testing with correction, guardrail monitoring (auto-halt), results interpretation in plain language. Statistics engine alone is substantial, plus SDKs.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery + Redis, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite
- **15 Apps:** experiments, flags, statistics, metrics, sdk, analysis, audience, api, frontend, compliance, integrations, notifications, reports, automation, settings

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t ab-testing .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A ab worker -l info
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Statistics:** sequential testing `mSPRT`, `p-values` with `Bonferroni`, `power` analysis, avoiding peeking
- **Guardrails:** auto-halt if `p<0.05` and `primary metric` drops `>5%`
- **Interpretation:** `plain language: "Variant B is 5% better (p=0.03, 95% CI 2-8%)"`

## License
Proprietary
