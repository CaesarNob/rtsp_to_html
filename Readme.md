คู่มือติดตั้งและใช้งานระบบดูกล้องวงจรปิด

โครงสร้างโปรเจค
web_people_counter/
├── cctv-monitoring/
│   ├── src/
│   │   ├── css/
│   │   │   ├── styles.css
│   │   │   └── room-view.css
│   │   ├── data/
│   │   │   └── room.js
│   │   ├── pages/
│   │   │   └── room-view.html
│   │   └── index.html
│   └── package.json
├── rtsp-server.js
└── package.json

-------------------------------

ขั้นตอนการติดตั้ง

ติดตั้ง Node.js
winget install OpenJS.NodeJS

ติดตั้ง FFmpeg
winget install Gyan.FFmpeg

ติดตั้ง Dependencies
cd web_people_counter
npm install

------------------------------

1. ไฟล์ room.js
เก็บข้อมูลกล้องวงจรปิดทั้งหมด
กำหนด URL, มุมกล้อง และการจัดกลุ่มตามอาคาร/ห้อง
รูปแบบข้อมูล:
{
    building: "ชื่ออาคาร",
    floor: ชั้น,
    room: "รหัสห้อง",
    cameras: [
        { 
            angle: "ชื่อมุมกล้อง", 
            url: "RTSP URL" 
        }
    ]
}
2. ไฟล์ rtsp-server.js
ทำหน้าที่แปลง RTSP stream เป็น WebSocket
กำหนด port สำหรับแต่ละกล้อง
จัดการการเชื่อมต่อและ stream ข้อมูล

------------------------------

การรันระบบ
รัน RTSP Server
node rtsp-server.js

เปิดเว็บไซต์
 - เปิดไฟล์ index.html ในเบราว์เซอร์
   หรือใช้ Live Server ใน VS Code

คำอธิบายไฟล์

Frontend
index.html: หน้าหลักแสดงรายการห้องทั้งหมด
room-view.html: หน้าแสดงกล้องในแต่ละห้อง
styles.css: สไตล์หน้าหลัก
room-view.css: สไตล์หน้าแสดงกล้อง

Backend
rtsp-server.js: เซิร์ฟเวอร์จัดการ RTSP stream
room.js: ข้อมูลกล้องและห้อง

การหยุดการทำงาน
กด Ctrl + C ใน Terminal ที่รัน rtsp-server
หรือรันคำสั่ง: taskkill /F /IM node.exe

------------------------------

ข้อควรระวัง
ตรวจสอบให้แน่ใจว่า FFmpeg ติดตั้งถูกต้อง
RTSP URL ต้องเข้าถึงได้จากเครื่องที่รันระบบ
Ports ไม่ถูกใช้งานโดยโปรแกรมอื่น
กำหนดค่า Firewall ให้อนุญาต WebSocket ports
การแก้ไขปัญหาเบื้องต้น
ถ้ากล้องไม่แสดง:

ตรวจสอบ console ใน browser (F12)
ตรวจสอบการทำงานของ rtsp-server
ทดสอบ RTSP URL ด้วย VLC player
ถ้า server ไม่ทำงาน:

ตรวจสอบการติดตั้ง FFmpeg
ตรวจสอบ port conflicts
รีสตาร์ท server