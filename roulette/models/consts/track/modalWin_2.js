// это функция которая как-бы константа
// модальное окно серии:
function modalWin_2 (classOpenBtn, openBtn, closeBtn, modal, nameSeries, bet_id, min) {
    return `<button class=${classOpenBtn} id=${openBtn}>
    </button>
    <dialog class="modal" id=${modal}>
        <span><h3>Серия:</h3></span><b>${nameSeries}</b>
        <div class="modal_inner">
            <h3>Введите ставку</h3>
            <br>
            <div>
                <p>
                    <label>
                        <input name="bet" class="input track_bet" type="number" min="0" minlength="2" maxlength="8" size="8" min="${min}" id=${bet_id}>
                    </label>
                </p>
            </div>
            <br>
            <button class="closeBtn" id=${closeBtn}>
                <h3>ОК</h3>
            </button>
        </div>
    </dialog>`
};
export { modalWin_2 };