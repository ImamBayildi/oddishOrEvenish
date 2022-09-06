function oddishOrEvenish (x){
    let modToplam=0
    for (x; x > 0; x=parseInt(x/10)) {//Basamaklarına ayırarak toplama

        modToplam+=(x%10)
        
    }

    if(modToplam%2 == 1){
        return "Odd"
    }else{
        return "Even"
    }

}

//Örnek kullanım
console.log(oddishOrEvenish(4433999))
console.log(oddishOrEvenish(4433))