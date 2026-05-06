export function initMatchGame(container, data, onComplete) {
    container.innerHTML = `<div class="flex gap-10"><div id="col-en" class="flex flex-col gap-4"></div><div id="col-vi" class="flex flex-col gap-4"></div></div>`;
    let selectedEn = null, selectedVi = null;

    const words = data;
    const enSide = [...words].sort(() => Math.random() - 0.5);
    const viSide = [...words].sort(() => Math.random() - 0.5);

    enSide.forEach(w => {
        const d = document.createElement('div');
        d.className = "glass p-4 w-40 text-center rounded-xl cursor-pointer hover:border-cyan-500";
        d.innerText = w.en;
        d.onclick = () => {
            document.querySelectorAll('#col-en div').forEach(el => el.classList.remove('bg-cyan-500'));
            d.classList.add('bg-cyan-500');
            selectedEn = w;
            if(selectedEn && selectedVi) check();
        };
        document.getElementById('col-en').appendChild(d);
    });

    viSide.forEach(w => {
        const d = document.createElement('div');
        d.className = "glass p-4 w-40 text-center rounded-xl cursor-pointer hover:border-cyan-500";
        d.innerText = w.vi;
        d.onclick = () => {
            document.querySelectorAll('#col-vi div').forEach(el => el.classList.remove('bg-cyan-500'));
            d.classList.add('bg-cyan-500');
            selectedVi = w;
            if(selectedEn && selectedVi) check();
        };
        document.getElementById('col-vi').appendChild(d);
    });

    function check() {
        if(selectedEn.en === selectedVi.en) {
            document.querySelectorAll('.bg-cyan-500').forEach(el => el.style.opacity = '0');
        }
        selectedEn = null; selectedVi = null;
        document.querySelectorAll('.bg-cyan-500').forEach(el => el.classList.remove('bg-cyan-500'));
    }
}

export function speak(text) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    window.speechSynthesis.speak(u);
}
