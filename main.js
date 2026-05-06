import { gameData } from './data.js';
import * as Games from './game.js';

// Đối tượng lưu trữ trạng thái hiện tại của người chơi
let state = {
    mode: '',  // 'vocabulary' hoặc 'sentence'
    topic: '', // Tên chủ đề (ví dụ: 'Family')
    game: ''   // Loại game (ví dụ: 'match')
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Khai báo các màn hình
    const screens = {
        s1: document.getElementById('screen-1'),
        s2: document.getElementById('screen-2'),
        s3: document.getElementById('screen-3'),
        s4: document.getElementById('screen-4')
    };

    // Hàm chuyển đổi màn hình mượt mà
    const showScreen = (screenId) => {
        Object.values(screens).forEach(s => {
            if (s) s.classList.remove('active-screen');
        });
        const target = document.getElementById(`screen-${screenId}`);
        if (target) target.classList.add('active-screen');
    };

    // 2. Xử lý Màn hình 1: Chọn Chế độ
    const btnVocab = document.getElementById('select-vocab');
    const btnSentence = document.getElementById('select-sentence');

    if (btnVocab) {
        btnVocab.onclick = () => {
            state.mode = 'vocabulary';
            renderTopics();
            showScreen(2);
        };
    }

    if (btnSentence) {
        btnSentence.onclick = () => {
            state.mode = 'sentence';
            renderTopics();
            showScreen(2);
        };
    }

    // 3. Xử lý Màn hình 2: Hiển thị danh sách chủ đề
    function renderTopics() {
        const grid = document.getElementById('topic-grid');
        if (!grid) return;
        
        grid.innerHTML = ''; // Xóa danh sách cũ
        gameData.topics.forEach(topicName => {
            const card = document.createElement('div');
            card.className = "glass p-4 rounded-xl btn-main text-center text-sm font-bold uppercase cursor-pointer transition-all";
            card.innerText = topicName;
            
            card.onclick = () => {
                state.topic = topicName;
                renderGameOptions();
                showScreen(3);
            };
            grid.appendChild(card);
        });
    }

    // 4. Xử lý Màn hình 3: Chọn trò chơi tương ứng với chế độ
    function renderGameOptions() {
        const container = document.getElementById('game-options');
        if (!container) return;

        container.innerHTML = '';
        const options = state.mode === 'vocabulary' 
            ? [{ id: 'match', name: 'Nối Từ' }, { id: 'capsule', name: 'Viên Thuốc' }]
            : [{ id: 'listen', name: 'Nghe & Chọn' }, { id: 'build', name: 'Ghép Câu' }];

        options.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = "btn-main glass px-10 py-16 rounded-3xl w-60 text-center font-bold cursor-pointer text-xl shadow-lg";
            btn.innerText = opt.name;
            btn.onclick = () => launchGame(opt.id);
            container.appendChild(btn);
        });
    }

    // 5. Màn hình 4: Khởi tạo logic Game cụ thể
    function launchGame(gameId) {
        state.game = gameId;
        showScreen(4);
        
        const titleEl = document.getElementById('game-title');
        if (titleEl) titleEl.innerText = `${state.topic.toUpperCase()} - ${gameId.toUpperCase()}`;
        
        const gameBox = document.getElementById('game-content');
        if (!gameBox) return;
        gameBox.innerHTML = ''; // Dọn dẹp sân chơi

        // Lấy dữ liệu từ data.js
        const vocabList = gameData.vocabulary[state.topic] || [];
        const sentenceList = gameData.sentences[state.topic] || [];

        // Gọi hàm từ file game.js
        switch (gameId) {
            case 'match':
                Games.initMatchGame(gameBox, vocabList);
                break;
            case 'capsule':
                // Games.initCapsuleGame(gameBox, vocabList);
                gameBox.innerHTML = `<p class="text-cyan-400">Game Viên Thuốc đang được phát triển...</p>`;
                break;
            case 'listen':
                // Games.initListenGame(gameBox, sentenceList);
                gameBox.innerHTML = `<p class="text-cyan-400">Game Nghe & Chọn đang được phát triển...</p>`;
                break;
            case 'build':
                // Games.initBuildGame(gameBox, sentenceList);
                gameBox.innerHTML = `<p class="text-cyan-400">Game Ghép Câu đang được phát triển...</p>`;
                break;
        }
    }

    // 6. Gán sự kiện cho các nút quay lại (Navigation)
    const backTo1 = document.getElementById('back-to-1');
    if (backTo1) backTo1.onclick = () => showScreen(1);

    const backTo2 = document.getElementById('back-to-2');
    if (backTo2) backTo2.onclick = () => showScreen(2);

    const exitBtn = document.getElementById('exit-game');
    if (exitBtn) exitBtn.onclick = () => {
        if (confirm("Bạn có muốn thoát game không?")) {
            showScreen(1);
        }
    };
});
