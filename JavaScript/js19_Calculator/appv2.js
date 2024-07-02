const num=document.querySelectorAll(".num")
const operator=document.querySelectorAll(".operator")
const previous=document.querySelector(".previous-display")
const current=document.querySelector(".current-display")
const equal=document.querySelector(".equal")
const ac=document.querySelector(".ac")
const percent=document.querySelector(".percent")
const pm=document.querySelector(".pm")

let altekranText=""
let ustekranText=""
let islem=""
//! sonuc=null

//! eşittir kontolü için isequalPress=false
//!operatore basıldımı kontrolü isOperatorPressed=false

num.forEach((number)=>{
    number.onclick=()=>{
    //!    eğer eşittire basıldıysa ve operatore basılmadıysa return yap 
        
    //    altekranText=number.textContent
    //    current.textContent=altekranText
    // yukarıdaki işlem fonksiyonda yapılamsı için bu şekilde kullanıldı
    ekranaHazirlik(number.textContent)
    }

})

//!EKRANA HAZIRLIK İŞLEMLERİ
const ekranaHazirlik=(num)=>{     
 
    //! Eşittire basıldıysa ve 2 .kez operatore basıldıysa altekranı boşalt, eşittir basıldıyı false
    // ? kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda sadece girilen yeni sayı (0 iptal olsun) gözüksün
    if (altekranText==="0" && num !=="0" && num!=="."){        
        altekranText=num
        updateEkran()
        return;
        
    }
 
    //? kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün
    if (altekranText=="0" && num=="0") return

    //? kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin

    if (num==="." && altekranText.includes(".")) return

    //? kullanıcı 10 haneden sonra girmesin
    // if (altekranText.length>9) return

    //? kullanıcı 10dan fazla girerse exponential olarak bir gösterim yapsın
    // const deger=(altekranText.length>10) ? altekranText.length.toExponential() : altekranText
    // altekranText=deger

    //  const deger=(altekranText.length>10) ? altekranText="error" : altekranText
    // altekranText=deger



    altekranText +=num
    updateEkran()

}


  //!EKRANDA GÖSTERME İŞLEMLERİ
const updateEkran=()=>{
    current.textContent=altekranText
    if (islem){
          previous.textContent=`${ustekranText} ${islem}`
    }
    else{
        previous.textContent=""
    }

}

operator.forEach((op)=>{
    op.onclick=()=>{

        
        if (altekranText==="") return

        if (altekranText && ustekranText) hesapla()
//! eğer alt ekrantext boşsa ve sonuc null ise aşağıdaki işlemi yap
        islem=op.textContent
        // ustekranText=altekranText
        ustekranText=`${sonuc} ${işlem}`
        // altekranText=""
        updateEkran()
    

        // if (altekranText && (ustekranText || sonuc !== null) && !isEqualPressed) {
        //     hesapla();
        //   } else if (isEqualPressed && !isOperatorPressedAfterEqual) {
        //     isOperatorPressedAfterEqual = true;
        //   } else {
        //     sonuc = parseFloat(altekranText);
        //   }
        
    }


})



equal.onclick=()=>{
    hesapla()    
    updateEkran()
    altekranText=""
}

const hesapla=()=>{
    switch (islem){
        case "+":
            sonuc=Number(ustekranText) + Number(altekranText);
        break;
        case "-":
            sonuc=ustekranText - altekranText;
        break;
        case "x":
            sonuc=ustekranText * altekranText;
        break;
        case "÷":
            sonuc=ustekranText / altekranText;
        break;
        case "%":
            sonuc=(ustekranText /100) *altekranText;
        break;
        default:
            break;
    }
    altekranText=sonuc;
    ustekranText=""
    islem="";

}

ac.onclick=()=>{
    islem=""
    altekranText=""
    ustekranText=""
    updateEkran()
}

// percent.onclick=()=>{
//     altekranText= altekranText/100
//     updateEkran()
// }

pm.onclick=()=>{
    altekranText=altekranText*-1
    updateEkran()
}
