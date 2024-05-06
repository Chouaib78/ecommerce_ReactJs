import React from 'react';
import Fab from '@mui/material/Fab';
import { HiOutlineChat } from "react-icons/hi";

export default function () {
  // دالة تنفذ عند النقر على الزر للاتصال
  const handleCallButtonClick = () => {
    // استبدل 'your_phone_number' برقم هاتفك الفعلي
    const phoneNumber = '+21622350901';

    // إنشاء رابط 'tel:' لبدء المكالمة
    const telLink = `tel:${phoneNumber}`;

    // قام بتوجيه المستخدم إلى الرابط 'tel:'
    window.location.href = telLink;
  };

  return (
    <div>
      {/* زر لبدء المكالمة الهاتفية */}
      <Fab
     
        sx={{ position: "fixed", bottom: 20, right: 2 }}
        color="primary"
        aria-label="add"
        onClick={handleCallButtonClick}
      >
        < HiOutlineChat />
      </Fab>

      {/* محتوى آخر على الصفحة */}
    </div>
  );
}
