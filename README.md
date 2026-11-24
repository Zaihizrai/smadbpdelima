# Dashboard DELIMa – SMA Daerah Batang Padang

Laman web statik untuk GitHub Pages. Ia mempunyai 13 bahagian (1.1 hingga 1.13). Guru admin memuat naik fail terus ke folder bahagian di GitHub, dan laman mengemas kini senarai secara automatik.

## A. Pasang sekali sahaja

1. Log masuk ke https://github.com, tekan **New repository**. Beri nama, contohnya `delima-smadbp`, pilih **Public**, kemudian **Create repository**.
2. Dalam repositori baharu, tekan **uploading an existing file**. Buka zip ini di komputer, pilih **semua kandungan dalam folder** (bukan fail zip itu) dan seret ke halaman GitHub. Tekan **Commit changes**.
3. Semak bahawa folder `.github/workflows` dan fail `terbit.yml` ada dalam repositori. Jika folder `.github` tidak ikut ter-upload (kadangkala disembunyikan oleh komputer), tekan **Add file > Create new file**, taip nama `.github/workflows/terbit.yml`, salin kandungan fail itu daripada zip, dan **Commit**.
4. Pergi ke **Settings > Pages**. Di bawah **Build and deployment**, tukar **Source** kepada **GitHub Actions**.
5. Pergi ke tab **Actions**, pilih **Terbit laman**, tekan **Run workflow**. Tunggu sehingga tanda hijau.
6. Laman anda ada di `https://NAMA-GITHUB-ANDA.github.io/NAMA-REPO/`.

## B. Lantik guru admin

Hanya orang yang diberi akses boleh memuat naik atau menukar fail. Pergi ke **Settings > Collaborators > Add people**, masukkan nama pengguna GitHub guru, dan beri akses tulis. Setiap guru admin memerlukan akaun GitHub percuma.

## C. Cara guru admin mengemas kini fail

1. Buka laman, tekan **Paparan admin** di bahagian atas.
2. Pilih bahagian, tekan **Tambah / kemas kini fail**.
3. Seret fail (PDF, Word, Excel, PowerPoint, imej, video) ke halaman GitHub, kemudian tekan **Commit changes**.
4. Tunggu 1 hingga 2 minit, kemudian muat semula laman.

- Untuk menggantikan fail dengan versi terkini, upload fail dengan **nama yang sama**.
- Tajuk yang dipaparkan datang daripada nama fail. Gunakan nama seperti `Minit_Mesyuarat_1_2026.pdf`.
- Untuk memadam fail, buka folder bahagian di GitHub, buka fail itu, tekan ikon tong sampah.
- Setiap bahagian ada fail `baca-saya.txt`. Ia tidak dipaparkan di laman dan boleh dibiarkan.

## D. Pautan Google Drive

Dalam folder bahagian, cipta atau edit fail `pautan.txt` (butang **Tambah pautan Google Drive** di paparan admin akan membukanya). Tulis satu pautan setiap baris:

```
Jadual Penggunaan Januari | https://drive.google.com/... | catatan pilihan
```

Alamat mesti bermula dengan `https://`.

## E. Tukar nama sekolah atau logo

- Nama dan baris keterangan: edit `config.js`.
- Logo: ganti fail `assets/logo.jpg` dengan fail logo baharu bernama sama.

## Perkara penting

- **Repositori Public bermakna semua fail boleh dilihat dan dimuat turun oleh sesiapa sahaja.** Jangan upload dokumen yang mengandungi maklumat peribadi murid atau data sulit. Repositori Private tidak boleh menerbitkan GitHub Pages dengan akaun percuma.
- Perlindungan sebenar ialah akses GitHub. Pengunjung tidak boleh mengubah apa-apa. Butang dalam paparan admin hanya membuka halaman GitHub, dan GitHub menolak sesiapa yang tiada akses tulis.
- Satu fail melalui antara muka web GitHub terhad kepada 25 MB. Untuk video besar, simpan di Google Drive atau YouTube dan guna pautan.
