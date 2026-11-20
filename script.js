// 1. 갤러리 라이트박스(확대 팝업) 기능
let currentIndex = 0;
let galleryImages = [];

document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('#galleryGrid img');
    galleryImages = Array.from(imgs).map(img => img.src);
});

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    document.getElementById('lightboxModal').classList.add('active');
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
}

function closeLightbox(event) {
    if (event.target.id === 'lightboxModal' || event.target.classList.contains('lightbox-close')) {
        document.getElementById('lightboxModal').classList.remove('active');
        document.body.style.overflow = '';
    }
}

function changePhoto(step, event) {
    event.stopPropagation();
    currentIndex = (currentIndex + step + galleryImages.length) % galleryImages.length;
    updateLightbox();
}

function updateLightbox() {
    const lightboxImg = document.getElementById('lightboxImg');
    const counter = document.getElementById('lightboxCounter');
    lightboxImg.src = galleryImages[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
}

// 2. 아코디언 토글 (계좌번호)
function toggleAccordion(id) {
    const body = document.getElementById(id);
    body.classList.toggle('open');
}

// 3. 텍스트 및 URL 복사 + 토스트 알림
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('클립보드에 복사되었습니다.');
    });
}

function copyPageUrl() {
    copyText(window.location.href);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2200);
}

// 4. 스마트폰 캘린더 일정 저장 (.ics 파일 생성 및 다운로드)
function downloadICS() {
    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//First Birthday Invitation//KR',
        'BEGIN:VEVENT',
        'SUMMARY:성선모·정한나 아기 돌잔치',
        'DTSTART:20261212T170000',
        'DTEND:20261212T190000',
        'LOCATION:대전 서구 대덕대로 366 2층 (만년동 282)',
        'DESCRIPTION:우리 아기의 첫 번째 생일에 초대합니다.',
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dol-invitation.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}