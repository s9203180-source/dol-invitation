let currentIndex = 0;
let galleryImages = [];

document.addEventListener('DOMContentLoaded', () => {
    const slideImgs = document.querySelectorAll('#sliderTrack .slide img');
    const thumbStrip = document.getElementById('thumbStrip');
    const sliderTrack = document.getElementById('sliderTrack');

    galleryImages = Array.from(slideImgs).map(img => img.src);

    // 하단 썸네일 자동 생성
    slideImgs.forEach((img, idx) => {
        const thumb = document.createElement('img');
        thumb.src = img.src;
        if (img.style.objectPosition) {
            thumb.style.objectPosition = img.style.objectPosition;
        }
        if (idx === 0) thumb.classList.add('active');
        thumb.onclick = () => goToSlide(idx);
        thumbStrip.appendChild(thumb);
    });

    // 손가락으로 스와이프할 때 카운터 및 썸네일 동기화
    sliderTrack.addEventListener('scroll', () => {
        const slideWidth = sliderTrack.clientWidth;
        const newIndex = Math.round(sliderTrack.scrollLeft / slideWidth);
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < galleryImages.length) {
            currentIndex = newIndex;
            updateSliderUI();
        }
    });
});

function moveSlide(step) {
    const nextIndex = (currentIndex + step + galleryImages.length) % galleryImages.length;
    goToSlide(nextIndex);
}

function goToSlide(index) {
    const sliderTrack = document.getElementById('sliderTrack');
    currentIndex = index;
    sliderTrack.scrollTo({
        left: sliderTrack.clientWidth * index,
        behavior: 'smooth'
    });
    updateSliderUI();
}

function updateSliderUI() {
    document.getElementById('sliderCounter').textContent = `${currentIndex + 1} / ${galleryImages.length}`;
    const thumbs = document.querySelectorAll('#thumbStrip img');
    thumbs.forEach((t, idx) => {
        t.classList.toggle('active', idx === currentIndex);
    });
    if (thumbs[currentIndex]) {
        thumbs[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

// 확대 팝업 (라이트박스)
function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    document.getElementById('lightboxModal').classList.add('active');
    document.body.style.overflow = 'hidden';
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
    goToSlide(currentIndex);
}

function updateLightbox() {
    document.getElementById('lightboxImg').src = galleryImages[currentIndex];
    document.getElementById('lightboxCounter').textContent = `${currentIndex + 1} / ${galleryImages.length}`;
}

// 텍스트 및 URL 복사
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

// 캘린더 일정 저장 (.ics)
function downloadICS() {
    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//First Birthday Invitation//KR',
        'BEGIN:VEVENT',
        'SUMMARY:은빈이 첫 번째 생일잔치',
        'DTSTART:20261212T170000',
        'DTEND:20261212T190000',
        'LOCATION:대전 서구 대덕대로 366 2층 (만년동 282)',
        'DESCRIPTION:은빈이의 첫 번째 생일에 초대합니다.',
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
