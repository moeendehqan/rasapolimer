# استفاده از تصویر Node به عنوان تصویر پایه برای ساخت برنامه Next.js
FROM node:14 AS builder

# تعریف مسیر کاری در کانتینر
WORKDIR /app

# کپی کردن فایل‌های پروژه و نصب وابستگی‌ها
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# اجرای دستور build برای ساخت برنامه Next.js
RUN npm run build

# تصویر Nginx به عنوان تصویر پایه برای ارائه فایل‌های استاتیک
FROM nginx:latest
# کپی کردن فایل تنظیمات Nginx به کانتینر
COPY nginx.conf /etc/nginx/nginx.conf

# کپی کردن فایل‌های build شده از مرحله قبل به مسیر /usr/share/nginx/html در کانتینر Nginx
COPY --from=builder /app/out /usr/share/nginx/html

# پورت‌های مورد نیاز را اکسپوز کنید (مثلاً پورت 80)
EXPOSE 80

# CMD برای اجرای Nginx در کانتینر
CMD ["nginx", "-g", "daemon off;"]
