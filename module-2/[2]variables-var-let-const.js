/**В JavaScript нельзя объявить переменную с одним и тем же именем
 дважды с помощью ключевых слов let и const.
 Если вы попытаетесь сделать это, будет сгенерирована ошибка. 
Например: **/
let x = 5;
let x = 10; // Ошибка: "Identifier 'x' has already been declared"


/**Однако, при использовании ключевого слова var,
 можно объявить переменную с одинаковым именем несколько раз,
 но это может привести к нежелательным побочным эффектам из-за того, 
что переменная будет подниматься ("hoisted") вверх
 в пределах области видимости:**/

var y = 5;
var y = 10; // Работает, не генерирует ошибку
console.log(y); // Выводит 10