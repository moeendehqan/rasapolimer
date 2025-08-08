# مرحله ۱: Build مرحله‌ای (multi-stage)
FROM node:16-alpine AS builder

WORKDIR /app

# فقط package.json برای کش نصب‌ها
COPY package*.json ./

RUN npm install

# کپی باقی فایل‌ها
COPY . .

# بیلد پروژه در حالت production
RUN npm run build

# مرحله ۲: اجرای نهایی
FROM node:16-alpine AS runner

WORKDIR /app

# فقط فایل‌های لازم برای اجرا
COPY --from=builder /app ./

ENV NODE_ENV=production

EXPOSE 2101

CMD ["node", "server.js"]
