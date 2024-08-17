import { rouletteNumber } from '../../consts/rouletteNumber.js';

function strUpDescript(strUp) {
    let color = rouletteNumber[strUp].color;
    let parity = rouletteNumber[strUp].parity;
    let magnitude = rouletteNumber[strUp].magnitude;
    let dozen = rouletteNumber[strUp].dozen;
    let column = rouletteNumber[strUp].column;

    let result = ` 
    цвет: ${color} <br\/>
    чётность: ${parity} <br\/>
    величина: ${magnitude} <br\/>
    дюжина: ${dozen} <br\/>
    колонка: ${column}
    `;
    return result;
};
export { strUpDescript };