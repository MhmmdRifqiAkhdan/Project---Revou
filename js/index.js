    // event listener yang menangani pengiriman formulir BMI. Ini membatalkan perilaku default pengiriman formulir dengan e.preventDefault(); dan kemudian menjalankan kode lainnya ketika formulir dikirim.
document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();    

    // Mengambil element-element input pada formulir
    var gender = document.getElementById('gender').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; 
    var age = parseFloat(document.getElementById('age').value);

    // Rumus Menghitung BMI
    var bmi = weight / (height * height);

    // Menampilkan hasil BMI
    var resultElement = document.getElementById('result');
    resultElement.style.display = 'block';

    // Membuat Kategori BMI dan Pesan Kesehatan
    if (!isNaN(bmi)) {
        var bmiCategory;
        var healthMessage;

        if (bmi < 18.5) {
            bmiCategory = "Kurus";
            healthMessage = "Kekurangan nutrisi akibat kekurangan makanan dapat meningkatkan risiko terkena berbagai penyakit, seperti anemia, osteoporosis, gangguan imun, dan masalah kesehatan mental seperti depresi atau kecemasan.";
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiCategory = "Normal";
            healthMessage = "Berat badan Anda berada dalam kisaran normal atau ideal, yang dapat membantu mengurangi risiko penyakit jantung, diabetes, dan beberapa jenis kanker.";
        } else if (bmi >= 25 && bmi < 30) {
            bmiCategory = "Gemuk";
            healthMessage = "Kelebihan berat badan dapat meningkatkan risiko penyakit seperti diabetes tipe 2, penyakit jantung, stroke, dan tekanan darah tinggi.";
        } else {
            bmiCategory = "Obesitas";
            healthMessage = "Obesitas adalah kondisi serius yang dapat meningkatkan risiko Anda terkena berbagai penyakit, termasuk diabetes, penyakit jantung, stroke, dan kanker.";
        }
        

        // Menampilkan hasil pada halaman
        resultElement.innerHTML = "<h2>Hasil BMI Anda</h2>" + 
                                  "<p>BMI: " + bmi.toFixed(2) + "</p>" +
                                  "<p>Jenis Kelamin: " + gender + "</p>" +
                                  "<p>Kategori: " + bmiCategory + "</p>" +
                                  "<p>Usia: " + age + "</p>" +
                                  "<p><strong>Catatan Kesehatan:</strong> " + healthMessage + "</p>";

        //tombol Konsultasi Dokter
        var consultButton = document.createElement('button');
        consultButton.textContent = 'Konsultasi Dokter';
        consultButton.classList.add('consult-button');
        resultElement.appendChild(consultButton);

        //Tombol Registrasi Online
        var registerButton = document.createElement('button');
        registerButton.textContent = 'Registrasi Online';
        registerButton.classList.add('register-button');
        resultElement.appendChild(registerButton);

        // Menambahkan event listener untuk tombol konsultasi dokter
        consultButton.addEventListener('click', function() {
            console.log('Button Konsultasi Dokter diklik');
        });

        // Menambahkan event listener untuk tombol registrasi online
        registerButton.addEventListener('click', function() {
            console.log('Button Registrasi Online diklik');
        });
    }
});

// Fungsi untuk Mengatur Ulang Formulir
function resetForm() {
    document.getElementById("bmiForm").reset();
    document.getElementById("result").style.display = "none";
    document.getElementById("result").innerHTML = "";
}
