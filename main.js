import { gameData } from './data.js';
import * as Games from './games.js';

let state = { mode: '', topic: '', game: '' };

// Điều hướng
const showScreen = (id) => {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
    document.getElementById(`screen-${id}`).classList.add('active-screen');
};

// Màn 1 -> 2
document.getElementById('select-vocab').onclick = () => { state.mode = 'vocabulary'; renderTopics(); showScreen(2); };
document.getElementById('select-sentence').onclick = () => { state.mode = 'sentence'; renderTopics(); showScreen(2); };

function renderTopics() {
    const grid = document.getElementById('topic-grid');
    grid.innerHTML = '';
    gameData.topics.forEach(t => {
        const b = document.createElement('div');
        b.className = "glass p-4 rounded-xl btn-main text-center text-sm font-bold uppercase";
        b.innerText = t;
        b.onclick = () => { state.topic = t; renderGameOptions(); showScreen(3); };
        grid.appendChild(b);
    });
}

function renderGameOptions() {
    const container = document.getElementById('game-options');
    container.innerHTML = '';
    const opts = state.mode === 'vocabulary' 
        ? [{id:'match', name:'Nối Từ'}, {id:'capsule', name:'Viên Thuốc'}]
        : [{id:'listen', name:'Nghe & Chọn'}, {id:'build', name:'Ghép Câu'}];

    opts.forEach(o => {
        const b = document.createElement('div');
        b.className = "btn-main glass px-10 py-16 rounded-3xl w-60 text-center font-bold";
        b.innerText = o.name;
        b.onclick = () => launchGame(o.id);
        container.appendChild(b);
    });
}

function launchGame(id) {
    state.game = id;
    showScreen(4);
    const box = document.getElementById('game-content');
    const vocabData = gameData.vocabulary[state.topic] || gameData.vocabulary["Family"];
    
    if(id === 'match') Games.initMatchGame(box, vocabData);
    // Các game khác gọi tương tự...
}

document.getElementById('exit-game').onclick = () => showScreen(1);
document.getElementById('back-to-1').onclick = () => showScreen(1);
document.getElementById('back-to-2').onclick = () => showScreen(2);
