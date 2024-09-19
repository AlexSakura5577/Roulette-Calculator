// import { incorrectBetCheckNeighbor } from "./incorrectBetCheckNeighbor.js";
// import { incorrectBetCheckSeries } from "./incorrectBetCheckSeries.js";

function openWindowsControl(openBtn, modal) {
    // openBtn = document.getElementById(openBtn);
    // modal = document.getElementById(modal);

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.showModal();
    });
    modal.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target === modal) modal.close();
    });
};
export { openWindowsControl };