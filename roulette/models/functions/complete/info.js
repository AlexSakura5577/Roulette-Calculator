import { rouletteNumber } from '../../consts/rouletteNumber.js';

function info(strUp) {
    let color = rouletteNumber[strUp].color;
    let parity = rouletteNumber[strUp].parity;
    let magnitude = rouletteNumber[strUp].magnitude;
    let dozen = rouletteNumber[strUp].dozen;
    let column = rouletteNumber[strUp].column;

    let result = ` 
    color: ${color} <br\/>
    parity: ${parity} <br\/>
    magnitude: ${magnitude} <br\/>
    dozen: ${dozen} <br\/>
    column: ${column}
    `;

    return result;
};