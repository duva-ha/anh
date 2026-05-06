import { gameData } from './data.js';
import * as Games from './games.js';

// Trạng thái game
let state = { mode: '', topic: '', game: '' };

// Đảm bảo HTML đã load xong mới chạy code
document.addEventListener('DOMContentLoaded', () => {
    
    const screens = {
        s1: document.getElementById('screen-1'),
        s2: document.getElementById('screen-2'),
        s3: document.getElementById('screen-3'),
        s4: document.getElementById('screen-4')
    };

    // Hàm chuyển màn hình
    const showScreen = (id) => {
        Object.values(screens).forEach(s => s.classList.remove('active-screen'));
        document.getElementById(`screen-${id}`).classList.add('active-screen');
    };

    // --- SỰ KIỆN MÀN HÌNH 1 (MODE SELECTION) ---
    const btnVocab = document.getElementById('select-vocab');
    const btnSentence = document.getElementById('select-sentence');

    if(btnVocab) {
        btnVocab.onclick = () => {
            state.mode = 'vocabulary';
            renderTopics();
            showScreen(2);
        };
    }

    if(btnSentence) {
        btnSentence.onclick = () => {
            state.mode = 'sentence';
            renderTopics();
            showScreen(2);
        };
    }

    // --- HÀM RENDER CHỦ ĐỀ (MÀN HÌNH 2) ---
    function renderTopics() {
        const grid = document.getElementById('topic-grid');
        grid.innerHTML = '';
        gameData.topics.forEach(t => {
            const b = document.createElement('div');
            b.className = "glass p-4 rounded-xl btn-main text-center text-sm font-bold uppercase cursor-pointer";
            b.innerText = t;
            b.onclick = () => {
                state.topic = t;
                renderGameOptions();
                showScreen(3);
            };
            grid.appendChild(b);
        });
    }

    // --- HÀM RENDER CHỌN GAME (MÀN HÌNH 3) ---
    function renderGameOptions() {
        const container = document.getElementById('game-options');
        container.innerHTML = '';
        const opts = state.mode === 'vocabulary' 
            ? [{id:'match', name:'Nối Từ'}, {id:'capsule', name:'Viên Thuốc'}]
            : [{id:'listen', name:'Nghe & Chọn'}, {id:'build', name:'Ghép Câu'}];

        opts.forEach(o => {
            const b = document.createElement('div');
            b.className = "btn-main glass px-10 py-16 rounded-3xl w-60 text-center font-bold cursor-pointer";
            b.innerText = o.name;
            b.onclick = () => launchGame(o.id);
            container.appendChild(b);
        });
    }

    // --- KHỞI CHẠY GAME (MÀN HÌNH 4) ---
    function launchGame(id) {
        state.game = id;
        showScreen(4);
        document.getElementById('game-title').innerText = `TOPIC: ${state.topic} | ${id.toUpperCase()}`;
        const box = document.getElementById('game-content');
        
        // Lấy dữ liệu an toàn (tránh bị undefined)
        const vocabData = gameData.vocabulary[state.topic] || gameData.vocabulary["Family"];
        const sentenceData = gameData.sentences[state.topic] || gameData.sentences["Family"];

        if(id === 'match') Games.initMatchGame(box, vocabData);
        // Sau này bạn sẽ thêm Games.initListenGame... vào đây
    }

    // --- CÁC NÚT QUAY LẠI ---
    document.getElementById('exit-game').onclick = () => showScreen(1);
    document.getElementById('back-to-1').onclick = () => showScreen(1);
    document.getElementById('back-to-2').onclick = () => showScreen(2);
});
