


const yeniGorev = document.querySelector('.input-gorev')
const yeniGorevBtn = document.querySelector('.btn-gorev-ekle')
const yeniGorevlist = document.querySelector('.gorev-listesi')

yeniGorevBtn.addEventListener('click', gorevEkle)

yeniGorevlist.addEventListener('click', gorevSilOk)

document.addEventListener('DOMContentLoaded', localStorageOku)


function gorevSilOk(e) {
    const tiklanilan = e.target

    if (tiklanilan.classList.contains('gorev-btn-tamamlandi')) {
        console.log('TAMALANDI');
        tiklanilan.parentElement.classList.toggle('gorev-tamamlandi')

    }

    if (tiklanilan.classList.contains('gorev-btn-sil')) {
        console.log('sil');
        tiklanilan.parentElement.remove()

    }

}




function gorevEkle(e) {
    e.preventDefault()

    gorevItemOlustur(yeniGorev.value)

    //local storage kaydet
    localStorageKaydet(yeniGorev.value)
    yeniGorev.value = ''

}




function localStorageKaydet(yeniGorev) {
    let gorevler
    if (localStorage.getItem('gorevler') === null) {
        gorevler = []
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'))
    }

    gorevler.push(yeniGorev)
    localStorage.setItem('gorevler', JSON.stringify(gorevler))

}





function localStorageOku() {
    let gorevler
    if (localStorage.getItem('gorevler') === null) {
        gorevler = []
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'))
    }

console.log("calıstı")
    gorevler.forEach(gorev => {
        gorevItemOlustur(gorev)
    }


    )



}





function gorevItemOlustur(gorev) {

    //div oluşturma 
    const gorevDiv = document.createElement('div')
    gorevDiv.classList.add('gorev-item')


    //li oluşturma 
    const gorevLi = document.createElement('li')
    gorevLi.classList.add('gorev-tanim')
    gorevLi.innerText = gorev
    gorevDiv.appendChild(gorevLi)

    //tamamladnı butonu ekleme
    const gorevBtnTamam = document.createElement('button')
    gorevBtnTamam.classList.add('gorev-btn')
    gorevBtnTamam.classList.add('gorev-btn-tamamlandi')
    gorevBtnTamam.innerHTML = 'Tamamlandi'
    gorevDiv.appendChild(gorevBtnTamam)

    //gorev Sil Butonu 

    const gorevBtnsil = document.createElement('button')
    gorevBtnsil.classList.add('gorev-btn')
    gorevBtnsil.classList.add('gorev-btn-sil')
    gorevBtnsil.innerHTML = 'Sil'
    gorevDiv.appendChild(gorevBtnsil)



    //ul ye oluşturdugumuz divi ekleme //appendchild ile ekliyoruz
    yeniGorevlist.appendChild(gorevDiv)
}



function localStorageSil(gorev) {
    let gorevler
    if (localStorage.getItem('gorevler') === null) {
        gorevler = []
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'))
    }

    const silinecekIndex = gorevler.indexOf(gorev)
    console.log(silinecekIndex);
    gorevler.splice(silinecekIndex , 1)
    localStorage.setItem('gorevler', JSON.stringify(gorevler))
}












