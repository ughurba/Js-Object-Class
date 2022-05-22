// 1) Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
// var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
// resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi


class Calc {

    constructor(CustomMatch) {
    this.CustomMatch = CustomMatch;

    }

    divide(num4){
        this.CustomMatch /= num4
        return this
    }
    multiply(num3){
        this.CustomMatch *=  num3
        return this
    }
    minus(num2){
        this.CustomMatch -= num2
       return this
    }
    plus(num){
        this.CustomMatch = this.CustomMatch + num
        return this

    }

}
var result = new Calc(50).minus(10).multiply(2).plus(10).divide(2);
console.log(result)




//-------------------------------------------------------------------------------------------------------/


// 2) Custom bir array classi yaradin. Hemin arrayin find ve push metodu olsun. Taski ishleyib turn in edin.

class  Arr{

    constructor(array) {
        this.array = array
    }


        find(id){
        let result

            for (let i = 0; i < this.array.length; i++) {

                if(this.array[i] === id){
                    result = this.array[i]
                    return result;

                }

            }

            return  result

        }
        i = 0
        push(el){

            this.array[this.i] = el

            this.i++
         return this.array
        }
}
var arr = new Arr([])
arr.push(21);
arr.push('dsa');
arr.push(true);
arr.push(false);
arr.push({});
arr.push(33);

console.log(arr)

