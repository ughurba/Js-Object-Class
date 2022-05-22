// 1) Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
// var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
// resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi

class Calc {

    constructor(CustomMatch) {
    this.CustomMatch = CustomMatch;

    }

    divide(num4){
      result /= num4
        return result
    }
    multiply(num3){
      result *=  num3
        return this
    }
    minus(num2){
        result -= num2
       return   this
    }
    plus(num){
        result = this.CustomMatch + num
        return this

    }

}
var result = new Calc(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result)




//-------------------------------------------------------------------------------------------------------/


// 2) Custom bir array classi yaradin. Hemin arrayin find ve push metodu olsun. Taski ishleyib turn in edin.
