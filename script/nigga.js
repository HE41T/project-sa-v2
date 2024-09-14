
// ฟังก์ชันที่จะเพิ่มเงาเมื่อเลื่อน
window.addEventListener('scroll', function() {
    var wrapper = document.getElementById('sticky-header');
    
    // เช็คว่าหน้าเว็บเลื่อนมากกว่า 50px หรือไม่
    if (window.scrollY > 50) {
        wrapper.style.boxShadow = '10px 10px 15px rgba(87, 87, 87, 0.7)';
    } else {
        wrapper.style.boxShadow = 'none';
    }
});