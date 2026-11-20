:root {
    --bg-outer: #F3EFEA;        /* PC 화면 바깥 배경 */
    --bg-main: #FDFBF7;         /* 초대장 기본 배경 (아이보리 화이트) */
    --bg-sub: #F6F2EC;          /* 카드 및 강조 박스 배경 */
    --text-primary: #332F2C;    /* 메인 텍스트 */
    --text-secondary: #756D65;  /* 서브 텍스트 */
    --accent-color: #B89F84;    /* 포인트 골드베이지 */
    --border-color: #E6DFD5;    /* 구분선 */
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
}

body {
    background-color: var(--bg-outer);
    color: var(--text-primary);
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    display: flex;
    justify-content: center;
}

.container {
    width: 100%;
    max-width: 480px;
    background-color: var(--bg-main);
    min-height: 100vh;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.04);
}

.section {
    padding: 56px 24px;
    text-align: center;
    border-top: 1px solid var(--border-color);
}

.section-title {
    font-family: 'Gowun Batang', serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: 0.04em;
    margin-bottom: 12px;
}

.section-desc {
    font-size: 13px;
    color: var(--text-secondary);
    margin-bottom: 24px;
}

/* 1. 메인 히어로 영역 */
.hero-section {
    padding: 60px 24px 50px;
    text-align: center;
}

.sub-title {
    font-size: 11px;
    letter-spacing: 0.2em;
    color: var(--accent-color);
    margin-bottom: 12px;
    font-weight: 600;
}

.main-title {
    font-family: 'Gowun Batang', serif;
    font-size: 24px;
    line-height: 1.45;
    font-weight: 400;
    margin-bottom: 32px;
}

.main-photo-wrap {
    width: 100%;
    border-radius: 160px 160px 12px 12px;
    overflow: hidden;
    box-shadow: 0 12px 30px rgba(51, 47, 44, 0.08);
    margin-bottom: 32px;
    background-color: var(--bg-sub);
}

.main-photo-wrap img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
}

.hero-info .baby-name {
    font-family: 'Gowun Batang', serif;
    font-size: 18px;
    margin-bottom: 6px;
}

.hero-info .parents-name {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 16px;
}

.hero-info .event-date {
    display: inline-block;
    padding: 6px 16px;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    font-size: 13px;
    letter-spacing: 0.1em;
    color: var(--text-primary);
}

/* 2. 인사말 & 연락처 */
.divider {
    width: 1px;
    height: 36px;
    background-color: var(--accent-color);
    margin: 0 auto 24px;
}

.greeting-text {
    font-family: 'Gowun Batang', serif;
    font-size: 15px;
    line-height: 1.9;
    color: var(--text-primary);
    margin-bottom: 36px;
}

.contact-box {
    background-color: var(--bg-sub);
    border-radius: 12px;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.contact-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
}

.contact-btns {
    display: flex;
    gap: 8px;
}

.btn-icon {
    text-decoration: none;
    background: #FFFFFF;
    border: 1px solid var(--border-color);
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
}

/* 3. 갤러리 슬라이드 & 썸네일 */
.slider-wrapper {
    position: relative;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    background-color: var(--bg-sub);
    margin-bottom: 10px;
}

.slider-track {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
}

.slider-track::-webkit-scrollbar {
    display: none;
}

.slide {
    flex: 0 0 100%;
    width: 100%;
    aspect-ratio: 4 / 5;
    scroll-snap-align: start;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    cursor: pointer;
}

.slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.75);
    border: none;
    color: var(--text-primary);
    width: 34px;
    height: 34px;
    border-radius: 50%;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
}

.slider-btn.prev { left: 10px; }
.slider-btn.next { right: 10px; }

.slider-counter {
    position: absolute;
    bottom: 12px;
    right: 12px;
    background: rgba(51, 47, 44, 0.65);
    color: #FFFFFF;
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 12px;
}

.thumb-strip {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding: 4px 0;
    scrollbar-width: none;
}

.thumb-strip::-webkit-scrollbar {
    display: none;
}

.thumb-strip img {
    flex: 0 0 54px;
    width: 54px;
    height: 54px;
    object-fit: cover;
    border-radius: 6px;
    opacity: 0.45;
    cursor: pointer;
    transition: all 0.2s;
    border: 2px solid transparent;
}

.thumb-strip img.active {
    opacity: 1;
    border-color: var(--accent-color);
}

/* 4. 오시는 길 */
.date-card {
    background-color: var(--bg-sub);
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 24px;
}

.date-highlight {
    font-family: 'Gowun Batang', serif;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 12px;
}

.btn-outline {
    background: #FFFFFF;
    border: 1px solid var(--accent-color);
    color: var(--text-primary);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 13px;
    cursor: pointer;
}

.address-box {
    margin-bottom: 20px;
}

.venue-name {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
}

.address-road {
    font-size: 14px;
    color: var(--text-primary);
}

.address-jibun {
    font-size: 13px;
    color: var(--text-secondary);
    margin-bottom: 10px;
}

.btn-copy-addr {
    background: none;
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    padding: 5px 12px;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
}

.map-placeholder {
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    margin-bottom: 14px;
}

.map-placeholder img {
    width: 100%;
    display: block;
}

.map-fallback {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 16px;
    background-color: var(--bg-sub);
    font-size: 13px;
    color: var(--text-secondary);
}

.navi-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 24px;
}

.btn-navi {
    text-decoration: none;
    padding: 12px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
}

.btn-navi.naver {
    background-color: #FFFFFF;
    border: 1px solid #03C75A;
    color: #03C75A;
}

.btn-navi.kakao {
    background-color: #FEE500;
    color: #191919;
}

.transport-info {
    text-align: left;
    background-color: var(--bg-sub);
    padding: 16px;
    border-radius: 8px;
    font-size: 13px;
    color: var(--text-secondary);
    display: flex;
    flex-direction: column;
    gap: 6px;
}

/* 5. 푸터 */
.footer {
    padding: 40px 24px 60px;
    text-align: center;
    border-top: 1px solid var(--border-color);
}

.btn-share {
    width: 100%;
    padding: 14px;
    background-color: var(--accent-color);
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 24px;
}

.copyright {
    font-size: 11px;
    letter-spacing: 0.15em;
    color: var(--text-secondary);
}

/* 갤러리 라이트박스 (확대 팝업) */
.lightbox {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(20, 18, 16, 0.92);
    z-index: 1000;
    align-items: center;
    justify-content: center;
}

.lightbox.active {
    display: flex;
}

.lightbox img {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 8px;
    object-fit: contain;
}

.lightbox-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: #FFFFFF;
    font-size: 28px;
    cursor: pointer;
}

.lightbox-prev, .lightbox-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.15);
    border: none;
    color: #FFFFFF;
    font-size: 28px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
}

.lightbox-prev { left: 12px; }
.lightbox-next { right: 12px; }

.lightbox-counter {
    position: absolute;
    bottom: 24px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 13px;
}

/* 토스트 알림 */
.toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: rgba(51, 47, 44, 0.9);
    color: #FFFFFF;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 13px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    z-index: 2000;
}

.toast.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}
