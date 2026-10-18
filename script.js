
const hasil = document.querySelector(".sum");
const tombolAngka = document.querySelectorAll(".number");
const tombolOperator = document.querySelectorAll(".aritmatika");

let angkaPertama = "";
let angkaKedua = "";
let operator = "";
let sedangMengisiAngkaKedua = false;

// Menampilkan angka yang sedang dimasukkan
function tampilkanAngka() {
    if (sedangMengisiAngkaKedua) {
        hasil.textContent =angkaPertama + " " + operator + " " + angkaKedua;
    } else {
        hasil.textContent = angkaPertama + " " + operator ;
    }
}

// Ketika tombol angka ditekan
tombolAngka.forEach(function(tombol) {
    tombol.addEventListener("click", function() {
        const angka = tombol.textContent;

        if (sedangMengisiAngkaKedua) {
            angkaKedua += angka;
        } else {
            angkaPertama += angka;
        }

        tampilkanAngka();
    });
});

// Ketika tombol operator ditekan
tombolOperator.forEach(function(tombol) {
    tombol.addEventListener("click", function() {
        const simbol = tombol.textContent.trim();

        if (simbol === "=") {
            if (angkaPertama === "" ||
                angkaKedua === "" ||
                operator === "") {
                return;
            }

            const a = Number(angkaPertama);
            const b = Number(angkaKedua);
            let hasilHitung;

            if (operator === "+") {
                hasilHitung = a + b;
            } else if (operator === "-") {
                hasilHitung = a - b;
            } else if (operator === "x") {
                hasilHitung = a * b;
            } else if (operator === "/") {
                if (b === 0) {
                    hasil.textContent = "Tidak bisa dibagi 0";
                    return;
                }

                hasilHitung = a / b;
            }

            hasil.textContent = hasilHitung;

            angkaPertama = String(hasilHitung);
            angkaKedua = "";
            operator = "";
            sedangMengisiAngkaKedua = false;

        } else if (
            simbol === "+" ||
            simbol === "-" ||
            simbol === "x" ||
            simbol === "/"
        ) {
            if (angkaPertama === "") {
                return;
            }

            operator = simbol;
            sedangMengisiAngkaKedua = true;
        }
    });
});
