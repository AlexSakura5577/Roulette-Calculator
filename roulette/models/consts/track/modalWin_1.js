// import { minMax } from "../../../controllers/localStorageRead.js";
// import { neighborMinMax } from "../../functions/track/neighborMinMax.js"

// модальное окно соседи:
function modalWin_1(openBtn, modal, closeBtn, num, bet_id, min, max) {
    return `<button class="openBtn" id=${openBtn}>
    </button>
    <dialog class="modal" id=${modal}>
        <span><h3>Сосед номера:</h3></span><b>${num}</b>
        <div class="modal_inner">
            <h3>Введите ставку</h3>
            <br>
            <div>
                <p>
                    <label>
                        <input name="bet" class="input track_bet" type="number" min="0" minlength="2" maxlength="8" size="8" min="${min}" max="${max}" id=${bet_id}>
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
export { modalWin_1 };