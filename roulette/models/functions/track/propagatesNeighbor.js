function propagatesNeighbor(modalWindow) {
    // цикл размножает модальные окна соседей
    for (let i = 0; i < 37; i++) {
        let neighbor = "neighbor_" + i;
        let openBtn = "openBtn_" + i;
        let closeBtn = "closeBtn_" + i;
        let modal = "modal_" + i;
        let bet = "bet_" + i;
        modalWindow(neighbor, openBtn, closeBtn, modal, i, bet);
    };
};
export { propagatesNeighbor };