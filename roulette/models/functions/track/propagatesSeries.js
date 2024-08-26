
function propagatesSeries(modalWindow_2) {
    // цикл размножает модальные окна серий
    let series = "";
    for (let i = 37; i < 41; i++) {
        switch (i) {
            case 37:
                series = "tier";
                break;
            case 38:
                series = "orphelins";
                break;
            case 39:
                series = "voisins";
                break;
            case 40:
                series = "spiel";
                break;
        }
        let openBtn = "openBtn_" + i;
        let closeBtn = "closeBtn_" + i;
        let modal = "modal_" + i;
        let bet = "bet_" + i;
        modalWindow_2(series, openBtn, closeBtn, modal, bet);
    };
    return series;
};
export { propagatesSeries };