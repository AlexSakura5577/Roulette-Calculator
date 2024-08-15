import { payoutRatios } from "../../consts/payoutRatios.js";
import { fillObj } from "../../consts/strUp/fillObj.js";

// функция подсчета кол-ва фишек:
function chipCount() {
    // Проверка на нулевую ставку:
    if (bet.value <= 0) {
        bet.value = 0;
    }
    document.getElementById('info_3').innerHTML = ``;

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

    // Считаем фишки:
    if (position) {
        fillObj[positions.value] = +bet.value * position.payout;
        console.log(`${positions.value}: ${+bet.value}`);
        document.getElementById(position.infoId).innerHTML = `${position.label}: ${+bet.value}`;
    } else {
        console.log("выберите позицию");
    }

    console.log(fillObj); // Объект заполнения выигрышных позиций
    bet.value = '';
    // Возвращаем массив с подсчитанными выигрышными позициями:
    return Object.values(fillObj);
};
export { chipCount };