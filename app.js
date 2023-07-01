
//  Buatlah 100 nilai random (1 sampai 50) pada 1 array
let nilaiRandom = [];
for (let i=0; i<100; i++){
    let  nilai = Math.floor(Math.random() * 50) + 1;
    nilaiRandom.push (nilai);
}
console.log (nilaiRandom);



// Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array
let arrayGenap = [];
let arrayGanjil = [];

for (let j=0; j < nilaiRandom.length; j++){
    if (j % 2 === 0){
        arrayGenap.push (nilaiRandom[j])
    }else {
        arrayGanjil.push (nilaiRandom[j])
    }
}

console.log ("Array Pada Index Genap:", arrayGenap);
console.log ("Array Pada Index Ganjil:", arrayGanjil);


// nilai max dari array random
let max = nilaiRandom [0]
for (let k in nilaiRandom){
    if (nilaiRandom[k] > max){
        max = nilaiRandom[k]
    }
}
console.log ("nilai max adalah:", max)


// nilai min dari array random
let min = nilaiRandom [0]
for (let k in nilaiRandom){
    if (nilaiRandom[k] < min){
        min = nilaiRandom[k]
    }
}
console.log ("nilai min adalah:", min)

// Total array
let totalArray = 0;
for (m in nilaiRandom){
    totalArray += nilaiRandom[m]
}
console.log("Total array adalah:", totalArray)

// Rata-rata array
let rataRataArray = totalArray / nilaiRandom.length;

console.log ("rata-rata array adalah:", rataRataArray.toFixed(2))

// perbandingan
console.log ("Min lebih besar array genap?", min > arrayGenap);
console.log ("max lebih besar array ganjil?", max > arrayGanjil);
console.log ("total sama dengan array genap dan array ganjil?", totalArray === arrayGenap && arrayGanjil);
console.log ("rata rata lebih besar array ganjil?", rataRataArray > arrayGanjil);