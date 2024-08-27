

function trackFunctionCall(moduleName) {
    const error = new Error();
    const stack = error.stack.split('\n');
    
    // Получаем стек вызовов и анализируем его
    console.log(`Вызвана функция в модуле: ${moduleName}`);

    // Проверка на наличие 'calculate.onclick' в стеке
    // if (stack.some(line => line.includes('calculate.onclick'))) {
    //     console.log("Вызов произошел из события click на calculate");
    // }
}
export { trackFunctionCall };