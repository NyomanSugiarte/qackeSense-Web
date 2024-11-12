const apiKey = 'c914b711f685b87d662d850cbe0b64f4'; // Ganti dengan API Key Anda
const city = 'Bandar Lampung'; // Ganti dengan nama kota yang Anda inginkan

// Mendapatkan tanggal hari ini
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('tanggal').textContent = today.toLocaleDateString('id-ID', options);

// Fungsi untuk mengambil data cuaca
async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`);
        const data = await response.json();

        // Menampilkan data lokasi, cuaca, dan suhu
        document.getElementById('lokasi').textContent = `Lokasi: ${data.name}`;
        document.getElementById('cuaca').textContent = `Cuaca: ${data.weather[0].description}`;
        document.getElementById('suhu').textContent = `Suhu: ${data.main.temp}°C`;
    } catch (error) {
        console.error('Gagal mendapatkan data cuaca:', error);
        document.getElementById('cuaca').textContent = 'Data cuaca tidak tersedia';
    }
}

// Memanggil fungsi getWeather untuk mengambil data cuaca
getWeather();