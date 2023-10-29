# استفاده از تصویر رسمی Node.js به عنوان پایه
FROM node:14

# مشخص کردن مسیر کاری در داکر
WORKDIR /app

# کپی فایل‌های پروژه به داکر
COPY package*.json ./
COPY . .

# نصب وابستگی‌ها
RUN npm install

# اجرای دستور build برای پروژه Next.js
RUN npm run build

# اجرای پروژه در پورت 5001
EXPOSE 5001
CMD ["npm", "start"]
