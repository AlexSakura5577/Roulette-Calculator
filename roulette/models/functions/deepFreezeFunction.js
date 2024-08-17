function deepFreezeFunction(func) {
    // Заморозить свойства функции
    Object.freeze(func);

    // Если функция имеет свойства, заморозить их
    const propNames = Object.getOwnPropertyNames(func);
    propNames.forEach(function (name) {
        let prop = func[name];

        // Замораживаем свойства, если они являются объектами
        if (typeof prop == "object" && prop !== null) {
            deepFreeze(prop);
        }
    });

    return func;
}

// Пример использования
function myFunction() {
    // Function code
}

deepFreezeFunction(myFunction);