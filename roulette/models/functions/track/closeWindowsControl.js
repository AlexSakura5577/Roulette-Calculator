import { incorrectBetCheckNeighbor } from "./incorrectBetCheckNeighbor.js";
import { incorrectBetCheckSeries } from "./incorrectBetCheckSeries.js";

function closeWindowsControl(nameFn, closeBtn) {
    // closeBtn = document.getElementById(closeBtn);

    if (nameFn == "modalWindow") {


        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            bet = document.getElementById(bet_id).value;
            incorrectBetCheckNeighbor(info, bet, num, numbers);
            modal.close();
        });
    }

    if (nameFn == "modalWindow_2") {


        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            bet = document.getElementById(bet_id).value;
            incorrectBetCheckSeries(info, bet, nameSeries);
            modal.close();
        });
    }
};
export { closeWindowsControl };