import { payoutRatios } from "../../consts/payoutRatios.js";
function positionsMap() {
    // info.innerHTML = ``;

    // Объект для маппинга
    const positionsMap = {
        "numbers": { payout: payoutRatios.numb.payout, infoId: 'info_num', label: 'номеров' },
        "splits": { payout: payoutRatios.split.payout, infoId: 'info_spl', label: 'сплитов' },
        "streets": { payout: payoutRatios.street.payout, infoId: 'info_str', label: 'стритов' },
        "corners": { payout: payoutRatios.corner.payout, infoId: 'info_cor', label: 'карэ' },
        "six-lines": { payout: payoutRatios.six_line.payout, infoId: 'info_six', label: 'сикс-лайнов' },
    };

    // Получаем нужную позицию
    const position = positionsMap[positions.value];
    console.log(position);

    return position;
}
export { positionsMap };