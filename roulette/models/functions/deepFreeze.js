// Для этого воспользуемся этой функцией.
export function deepFreeze(obj) {
    // Получаем имена свойств из объекта obj
    let propNames = Object.getOwnPropertyNames(obj);

    // Замораживаем свойства для заморозки самого объекта
    propNames.forEach(function (name) {
        let prop = obj[name];

        // Заморозка свойства prop, если оно объект
        if (typeof prop == "object" && prop !== null) deepFreeze(prop);
    });

    // Заморозить сам объект obj (ничего не произойдёт, если он уже заморожен)
    return Object.freeze(obj);
};