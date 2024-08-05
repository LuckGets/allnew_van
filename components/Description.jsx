import React from "react";
import Contact from "./Contact";

function Description() {
  return (
    <div className="bg-white w-full">
      <div className="home__des-box flex-col md:flex justify-center items-center">
        <div>
          <h1>VIP Van Transport Service</h1>
          <p>
            รถตู้วีไอพีสำหรับรับ-ส่งสนามบินและต่างจังหวัดพร้อมบริการเช่าเหมาแบบรายวัน
            สำหรับเที่ยวชมสถานที่ต่างๆทั้งในกรุงเทพฯและต่างจังหวัดทั่วไทย
            พร้อมคนขับมืออาชีพที่มีประสปการณ์
            ชำนาญเส้นทางและรู้จักแหล่งท่องเที่ยวที่น่าสนใจ ในราคายุติธรรม
            รับจองล่วงหน้าก่อนเดินทาง และพร้อมสำหรับการเรียกใช้เร่งด่วนภายใน 45
            นาที รถตู้รับจ้าง เช่ารถตู้ บริการรถตู้ เหมาไปต่างจังหวัด
            เช่าพร้อมคนขับ รับส่งสนามบิน เช่าเหมารถตู้ ครบวงจร และบริการอื่นๆ
            เปิดให้บริการ 24 ชั่วโมง
          </p>
        </div>
        <div className="flex-shrink-0">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Description;
