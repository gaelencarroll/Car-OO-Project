const color = 'teal';
const obj = {};
obj.color = '#4562FF';
obj[color] = '#4562FF';


const add = (x,y) => x+y;
const mult = (x,y) => x*y;
const square = (x) => x*x;
const power = (x,y) => x**y;
// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;
const myMath = {add,mult,square,power};


// function getHypotenuse(a,b){
//     return Math.sqrt(a ** 2 + b ** 2)
// }
// function getArea(a,b){
//     return a * b / 2;
// }
// const side1 = 4;
// const side2 = 3;
// const side3 = getHypotenuse(side1,side2);
// const area = getArea(side1,side2);

const rightTriangle = {
    a : 9,
    b : 12,
    printThis(){
        console.log(this);
    },
    getArea(){
        return this.a * this.b / 2;
    },
    getHypotenuse(){
        this.printThis()
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    },
}

function Triangle1(a,b){
    this.a = a;
    this.b = b;
    this.getArea = function(){
        return this.a * this.b / 2;
    }
    this.getHypotenuse = function(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
}
// const t1 = new Triangle1(3,4)
// const t2 = new Triangle1(9,12)

Array.prototype.push = function(val){
    console.log(`So you want to add ${val}??`)
    console.log('sorry!')
}

class Triangle{
    constructor(a,b,c){
        for(let side of [a,b,c]){
            if(!Number.isFinite(side) || side <= 0){
                throw new Error('Sides must be positive numbers')
            }
        }
        this.a = a;
        this.b = b;
        this.c = c;

    }
    greet(){
        console.log('hello')
    }
    display(){
        return `Triangle with the sides of ${this.a}, ${this.b}, and ${this.c}`
    }
    getArea(){
        const {a,b,c} = this;
        const s = (a+b+c) / 2;
        return Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
    isBig(){
        return this.getArea() > 50;
    }
}

const t1 = new Triangle(3,4,5);
const t2 = new Triangle(5,9,10);
const t3 = new Triangle(30,40,50);
// const firstTri = new Triangle();
// firstTri.a = 3;
// firstTri.b = 4;
// const secondTri = new Triangle();
// secondTri.a = 9;
// secondTri.b = 12;

class RightTriangle extends Triangle{
    constructor(a,b,c){
        if(a*a + b*b !== c*c){
            throw new Error('Invalid C side for right triangle!')
        }
        super(a,b,c);
        this.hypot = c;
    }
    isRightTriangle(){
        return true;
    }
    display(){
        return 'Right ' + super.display();
    }
}