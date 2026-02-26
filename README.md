# PromptPay QR Code Generator API 

> **Creater by:** Nantadet Wongchaiya
> **GitHub:** [@Nantadet](https://github.com/Nantadet)

API สำหรับสร้าง QR Code PromptPay  
รับข้อมูลผ่าน HTTP แล้วส่งกลับเป็นรูป QR (Base64) พร้อมใช้งาน

โปรเจกต์นี้พัฒนาต่อยอดจากแนวคิดและตัวอย่างโค้ด PromptPay QR ที่มีเผยแพร่ทั่วไป
โดยผู้พัฒนาได้ปรับโครงสร้างใหม่ให้เป็น REST API
เพิ่ม validation, error handling และรองรับการใช้งานจริงผ่าน HTTP

## 🛠 เทคโนโลยีที่ใช้

- Node.js
- Express.js
- qrcode

## ▶️ วิธีรันโปรเจกต์
```bash
git clone https://github.com/Nantadet/PromptPay-QR-Code-Generator-API.git 

npm install
node index.js
```

## 🔗 การใช้งาน API
```b
สร้าง QR Code PromptPay

(POST) /promptpay/qr

Body (JSON)

{
  "recipient": "0812345678",
  "amount": "100",
  "merchantName": "SmartShop"
}
```

## ตัวอย่างผลลัพธ์
```
"success": true,
    "qr": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAAklEQVR4AewaftIAAAevSURBVO3BQY4cy5LAQDLQ978yR0tfJVDIan29GDezP1jrEoe1LnJY6yKHtS5yWOsih7UucljrIoe1LnJY6yKHtS5yWOsih7UucljrIoe1LnJY6yKHtS7yw0sqf1PFE5UnFZPKVPFE5UnFpDJVfEJlqnii8...."
```
## 📐 Architecture

รายละเอียดโครงสร้างระบบสามารถดูได้ที่  
👉 [System Architecture](Architecture.md)