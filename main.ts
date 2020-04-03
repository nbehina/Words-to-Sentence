
class word{
    static firstWord="Hello";
    static secondWord="Bye";
    static thirdWord="See you soon"
    static sentence(){
       console.log(`${this.firstWord},${this.secondWord} ${this.thirdWord}`)
     }
 }
 
 console.log(word.sentence());
