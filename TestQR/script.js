function limitDecimalPlaces(input, decimalPlaces) {
    let value = input.value;
    
    // ลบตัวอักษรที่ไม่ใช่ตัวเลขหรือจุดทศนิยม
    value = value.replace(/[^0-9.]/g, '');
    
    // ตรวจสอบว่ามีจุดทศนิยมหลายจุดหรือไม่
    let parts = value.split('.');
    if (parts.length > 2) {
        // รวมค่าหลังจากจุดทศนิยมทั้งหมด
        value = parts[0] + '.' + parts.slice(1).join('');
    }

    // จำกัดตำแหน่งทศนิยม
    if (parts[1]) {
        // จำกัดจำนวนตำแหน่งทศนิยม
        parts[1] = parts[1].slice(0, decimalPlaces);
        value = parts[0] + '.' + parts[1];
    }

    // อัปเดตค่าใน input
    input.value = value;
}
