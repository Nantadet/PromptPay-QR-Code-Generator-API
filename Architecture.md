# System Architecture

เอกสารนี้อธิบายโครงสร้างสถาปัตยกรรมของโปรเจกต์ PromptPay QR Code Generator API

---

## Overview

ระบบถูกออกแบบในรูปแบบ Client–Server Architecture  
ทำหน้าที่รับข้อมูลการชำระเงินจาก Client และส่งกลับ QR Code PromptPay ผ่าน REST API

ระบบเป็น Stateless API  
ไม่มีการจัดเก็บข้อมูลผู้ใช้หรือข้อมูลการชำระเงิน

---

## Architecture Diagram (Conceptual)

Client (Web / Mobile / Postman)
        |
        |  HTTP POST (JSON)
        |  recipient, amount, merchantName
        v
API Server (Node.js + Express)
        |
        |  Validate Input
        |  Generate EMV Payload
        |  Calculate CRC16
        |  Generate QR Code
        v
Response (JSON)
(payload + Base64 QR Code)

---

## Components

### Client
- ส่ง HTTP Request ไปยัง API Server
- อาจเป็นเว็บแอป, แอปมือถือ หรือเครื่องมือทดสอบ
- รับผลลัพธ์เป็น QR Code เพื่อนำไปแสดงผล

---

### API Server
- พัฒนาด้วย Node.js และ Express
- ตรวจสอบความถูกต้องของข้อมูลที่รับมา
- สร้าง PromptPay Payload ตามมาตรฐาน EMV
- คำนวณค่า CRC16
- แปลง Payload เป็น QR Code

---

### QR Code Generator
- ใช้ไลบรารีสำหรับสร้าง QR Code
- แปลง PromptPay Payload เป็น QR Code รูปแบบ Base64 (PNG)
- ส่งผลลัพธ์กลับไปยัง Client

---

## Data Flow

1. Client ส่งข้อมูลการชำระเงินมายัง API
2. API ตรวจสอบความถูกต้องของข้อมูล
3. ระบบสร้าง EMV Payload
4. คำนวณค่า CRC16
5. สร้าง QR Code
6. ส่งผลลัพธ์กลับไปยัง Client

---

## Design Considerations

- ออกแบบระบบให้เรียบง่ายและเข้าใจง่าย
- ไม่มีการจัดเก็บข้อมูลเพื่อความปลอดภัย
- เหมาะสำหรับการเรียนรู้และใช้เป็นผลงานใน Portfolio

---

## Summary

โปรเจกต์นี้ใช้สถาปัตยกรรมแบบ Client–Server  
เน้นความชัดเจนของหน้าที่แต่ละส่วน  
และเหมาะสำหรับการใช้งานในรูปแบบ REST API