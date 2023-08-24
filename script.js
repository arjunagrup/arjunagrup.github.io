// menangkap event scroll
window.addEventListener("scroll", muncul);

// fungsi untuk memberikan efek elemen muncul ketika scroll
function muncul() {
    // menangkap setiap tag dengan class elemen
    let elements = document.querySelectorAll(".elemen");
    //perulangan untuk setiap tag dengan class elemen
    for (let i = 0; i < elements.length; i++) {
        //   mengambil ukuran tinggi layar
        let tinggiLayar = window.innerHeight;
        //menangkap ukuran elemen dan posisinya relatif terhadap viewport
        let jarakAtasElemen = elements[i].getBoundingClientRect().top;
        // menentukan ukuran scroll untuk memunculkan elemen
        let ukuranScroll = 50;
        // jika jarak atas elemen kurang dari tinggi layar dikurangi ukuran scroll maka tambahkan class tampil di setiap tag dengan class elemen
        if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
            elements[i].classList.add("tampil");
        }
        // jika tidak maka hapus class tampil
        else {
            elements[i].classList.remove("tampil");
        }
    }
}

// menangkap event scroll
window.addEventListener("scroll", muncul2);

// fungsi untuk memberikan efek elemen muncul ketika scroll
function muncul2() {
    // menangkap setiap tag dengan class elemen
    let elements2 = document.querySelectorAll(".elemen2");
    //perulangan untuk setiap tag dengan class elemen
    for (let i = 0; i < elements2.length; i++) {
        //   mengambil ukuran tinggi layar
        let tinggiLayar2 = window.innerHeight;
        //menangkap ukuran elemen dan posisinya relatif terhadap viewport
        let jarakAtasElemen2 = elements2[i].getBoundingClientRect().top;
        // menentukan ukuran scroll untuk memunculkan elemen
        let ukuranScroll2 = 50;
        // jika jarak atas elemen kurang dari tinggi layar dikurangi ukuran scroll maka tambahkan class tampil di setiap tag dengan class elemen
        if (jarakAtasElemen2 < tinggiLayar2 - ukuranScroll2) {
            elements2[i].classList.add("tampil");
        }
        // jika tidak maka hapus class tampil
        else {
            elements2[i].classList.remove("tampil");
        }
    }
}

