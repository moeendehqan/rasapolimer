## هدف
- بیلد پروژه با Docker و اجرای آن با Docker Compose در CI، با خروجی روی `localhost:4087`.

## وضعیت فعلی پروژه
- Dockerfile موجود است و کانتینر روی پورت داخلی `2101` گوش می‌دهد.
- `docker-compose.yml` موجود است و پورت هاست را به‌صورت `2100:2101` نگاشت می‌کند.
- سرویس Compose با نام `rasapolymer` تعریف شده است.

## تغییرات پیشنهادی در مخزن
- افزودن فایل `docker-compose.ci.yml` برای Override پورت فقط در CI:
  - تنظیم `ports: ["4087:2101"]` برای سرویس `rasapolymer`.
- افزودن ورک‌فلو در مسیر `.github/workflows/docker-compose-ci.yml` برای:
  - Checkout کد
  - راه‌اندازی Buildx
  - اجرای `docker compose up -d --build` با فایل‌های پایه و override
  - انتظار برای آماده‌شدن سرویس و اعتبارسنجی با `curl http://localhost:4087`
  - نمایش لاگ‌ها و پایین‌آوردن کانتینرها در انتهای Job

## محتوای فایل‌های جدید
- `docker-compose.ci.yml`:
  - version: "3.8"
  - services:
    - rasapolymer:
      - ports:
        - "4087:2101"

- `.github/workflows/docker-compose-ci.yml`:
  - name: Docker Compose CI
  - on: push و pull_request
  - jobs:
    - build-and-up:
      - runs-on: ubuntu-latest
      - steps:
        - actions/checkout@v4
        - docker/setup-buildx-action@v3
        - اجرای:
          - `docker compose -f docker-compose.yml -f docker-compose.ci.yml up -d --build`
          - انتظار با `curl` تا سرویس روی `http://localhost:4087` پاسخ دهد (تا 60 ثانیه)
        - نمایش بخش اولیه پاسخ سرویس
        - همیشه: نمایش لاگ‌ها
        - همیشه: `docker compose down -v`

## نکات فنی و محدودیت‌ها
- در GitHub-hosted runner پورت‌ها فقط داخل همان Runner در دسترس‌اند؛ برای دسترسی عمومی باید از self-hosted runner یا مرحلهٔ دیپلوی استفاده شود.
- این رویکرد بدون تغییر رفتار توسعهٔ محلی شماست؛ نگاشت 2100:2101 همچنان برای محیط توسعه باقی می‌ماند و فقط CI روی 4087 Override می‌شود.

## خروجی مورد انتظار
- بیلد موفق ایمیج با Docker و بالا آمدن سرویس با Compose.
- پاسخ‌دهی سرویس روی `localhost:4087` در CI و گزارش لاگ‌ها.

## اقدام بعدی
- پس از تأیید شما، فایل‌های فوق ایجاد و به مخزن اضافه می‌شوند و ورک‌فلو فعال می‌شود.