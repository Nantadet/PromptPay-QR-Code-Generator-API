# 🏦 PromptPay QR Generator

> **ผู้แต่ง:** Goragod Wiriya
> **GitHub:** [@goragodwiriya](https://github.com/goragodwiriya)

เครื่องมือสร้าง QR Code สำหรับระบบ PromptPay ของประเทศไทย ใช้งานง่าย รวดเร็ว และฟรี!

## ✨ ฟีเจอร์

- 🔄 สร้าง QR Code PromptPay แบบเรียลไทม์
- 📱 รองรับเบอร์โทรมือถือและเลขบัตรประชาชน
- 💰 สามารถระบุจำนวนเงินได้
- 👤 สามารถใส่ชื่อผู้รับได้
- 📱 Responsive Design ใช้งานได้ทั้งมือถือและคอมพิวเตอร์
- 🚀 ไม่ต้องติดตั้งอะไร เปิดเบราว์เซอร์ใช้ได้เลย

## 🖥️ การใช้งาน

1. เปิดไฟล์ `index.html` ในเบราว์เซอร์
2. กรอกข้อมูลตามที่ต้องการ:
   - **หมายเลขโทรศัพท์** หรือ **เลขบัตรประชาชน** ของผู้รับเงิน
   - **จำนวนเงิน** (ไม่บังคับ - หากไม่ระบุจะเป็น QR Code แบบ Dynamic)
   - **ชื่อผู้รับ** (ไม่บังคับ - ใช้ตัวอักษร A-Z เท่านั้น)
3. คลิก "Generate QR"
4. นำ QR Code ที่ได้ไปใช้กับแอป Banking หรือ PromptPay

## 💡 ตัวอย่างการใช้งาน

### กรณีที่ 1: QR Code แบบไม่ระบุจำนวนเงิน
- เบอร์โทร: `0812345678`
- จำนวนเงิน: `(ว่างไว้)`
- ชื่อ: `Shop ABC`

### กรณีที่ 2: QR Code แบบระบุจำนวนเงิน
- เบอร์โทร: `0812345678`
- จำนวนเงิน: `150.00`
- ชื่อ: `Coffee Shop`

## 🛠️ เทคโนโลยีที่ใช้

- **HTML5** - โครงสร้างหน้าเว็บ
- **CSS3** - การจัดแต่งหน้าตา
- **Vanilla JavaScript** - ตัวประมวลผล QR Code
- **QR Code Generator Library** - สร้าง QR Code

## 📋 ข้อกำหนด

- เบราว์เซอร์ที่รองรับ HTML5 (Chrome, Firefox, Safari, Edge)
- การเชื่อมต่ออินเทอร์เน็ต (สำหรับโหลด QR Code Library)

## 🔧 การติดตั้งและใช้งาน

### วิธีที่ 1: ใช้งานโดยตรง
```bash
# Clone โปรเจ็ค
git clone https://github.com/goragodwiriya/promptpay-qr-generator.git

# เข้าไปในโฟลเดอร์
cd promptpay-qr-generator

# เปิดไฟล์ index.html ในเบราว์เซอร์
```

### วิธีที่ 2: ใช้งานผ่าน Web Server
```bash
# ใช้ Python
python -m http.server 8000

# ใช้ Node.js
npx http-server

# ใช้ PHP
php -S localhost:8000
```

## 🔐 ความปลอดภัย

- ข้อมูลทั้งหมดประมวลผลบนเบราว์เซอร์ของคุณเท่านั้น
- ไม่มีการส่งข้อมูลไปยังเซิร์ฟเวอร์ภายนอก
- ไม่มีการเก็บข้อมูลส่วนบุคคล

## 📱 QR Code Format

โปรเจ็คนี้สร้าง QR Code ตามมาตรฐาน EMV QR Code Specification และ PromptPay Specification ของธนาคารแห่งประเทศไทย

## 🤝 การมีส่วนร่วม

ยินดีรับ Pull Request และ Issue รายงาน! หากพบปัญหาหรือมีข้อเสนอแนะ กรุณา:

1. Fork โปรเจ็ค
2. สร้าง Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. Push ไปยัง Branch (`git push origin feature/AmazingFeature`)
5. เปิด Pull Request

## 📝 License

โปรเจ็คนี้ใช้ MIT License - ดูรายละเอียดในไฟล์ [LICENSE](LICENSE)

## 🆘 การช่วยเหลือ

หากพบปัญหาหรือมีคำถาม สามารถ:
- เปิด Issue ใน GitHub
- ติดต่อผู้พัฒนา: **Goragod Wiriya**

## 🙏 กิตติกรรมประกาศ

- [QR Code Generator Library](https://github.com/davidshimjs/qrcodejs) - สำหรับการสร้าง QR Code
- ธนาคารแห่งประเทศไทย - สำหรับข้อมูล PromptPay Specification

---

⭐ หากโปรเจ็คนี้มีประโยชน์ กรุณา Star ให้ด้วยนะครับ!

**Made with ❤️ for Thai PromptPay System by Goragod Wiriya**
