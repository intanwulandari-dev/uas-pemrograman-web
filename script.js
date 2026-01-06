// DATA MATERI (14 Pertemuan)
const materials = [
    {
        meeting: "Pertemuan 1",
        title: "Mindset Kewirausahaan Digital",
        summary: "Pengenalan dasar tentang transisi dari bisnis konvensional ke digital dan pola pikir founder.",
        content: `
            <h3>Pengertian Digital Entrepreneurship</h3>
            <p>Digital entrepreneurship adalah fenomena pemanfaatan teknologi dan aset digital untuk mengubah model bisnis, menciptakan peluang baru, dan memberikan nilai tambah kepada konsumen.</p>
            <h3>Pola Pikir Founder</h3>
            <ul>
                <li><strong>Growth Mindset:</strong> Percaya bahwa kemampuan dapat dikembangkan melalui dedikasi dan kerja keras.</li>
                <li><strong>Resiliensi:</strong> Ketahanan terhadap kegagalan dan kemampuan bangkit kembali.</li>
                <li><strong>Customer Centric:</strong> Fokus utama pada pemecahan masalah pelanggan, bukan kecanggihan teknologi semata.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 2",
        title: "Business Model Canvas (BMC)",
        summary: "Memahami 9 elemen kunci dalam merancang model bisnis startup yang solid dan terstruktur.",
        content: `
            <h3>Apa itu BMC?</h3>
            <p>Business Model Canvas adalah kerangka kerja manajemen strategis untuk mendefinisikan dan mengkomunikasikan ide atau konsep bisnis dengan cepat dan mudah dalam satu halaman visual.</p>
            <h3>9 Blok Bangunan</h3>
            <ol>
                <li><strong>Customer Segments:</strong> Siapa target pasar kita?</li>
                <li><strong>Value Propositions:</strong> Solusi/nilai apa yang kita tawarkan?</li>
                <li><strong>Channels:</strong> Bagaimana cara menjangkau pelanggan?</li>
                <li><strong>Customer Relationships:</strong> Cara menjaga hubungan dengan klien.</li>
                <li><strong>Revenue Streams:</strong> Dari mana uang masuk?</li>
                <li><strong>Key Resources:</strong> Aset apa yang dibutuhkan?</li>
                <li><strong>Key Activities:</strong> Kegiatan utama operasional.</li>
                <li><strong>Key Partnerships:</strong> Mitra kerja sama.</li>
                <li><strong>Cost Structure:</strong> Biaya yang harus dikeluarkan.</li>
            </ol>`
    },
    {
        meeting: "Pertemuan 3",
        title: "Riset Pasar & Validasi Ide",
        summary: "Teknik mencari tahu kebutuhan pasar sebelum membuat produk agar tidak boncos di awal.",
        content: `
            <h3>Pentingnya Validasi</h3>
            <p>Banyak startup gagal karena membangun produk yang tidak dibutuhkan pasar ("No Market Need"). Validasi dilakukan untuk meminimalkan risiko tersebut sebelum mengeluarkan biaya besar.</p>
            <h3>Metode Riset</h3>
            <ul>
                <li><strong>Wawancara (In-depth Interview):</strong> Menggali masalah mendalam dari calon pengguna.</li>
                <li><strong>Survei Online:</strong> Menggunakan Google Forms untuk data kuantitatif.</li>
                <li><strong>Analisis Kompetitor:</strong> Melihat kelebihan dan kekurangan pesaing (SWOT Analysis).</li>
                <li><strong>MVP (Minimum Viable Product):</strong> Membuat versi paling sederhana dari produk untuk dites.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 4",
        title: "Digital Marketing Basics",
        summary: "Dasar strategi pemasaran menggunakan kanal digital: SEO, SEM, dan Social Media.",
        content: `
            <h3>Jenis-jenis Digital Marketing</h3>
            <p>Pemasaran digital mencakup segala upaya pemasaran yang menggunakan perangkat elektronik atau internet untuk menjangkau konsumen potensial.</p>
            <h3>Kanal Utama</h3>
            <ul>
                <li><strong>SEO (Search Engine Optimization):</strong> Optimasi website agar muncul di halaman 1 Google secara organik (gratis).</li>
                <li><strong>Social Media Marketing:</strong> Membangun brand awareness melalui Instagram, TikTok, LinkedIn, dll.</li>
                <li><strong>Content Marketing:</strong> Fokus membuat konten edukatif/menghibur (Soft selling).</li>
                <li><strong>Email Marketing:</strong> Pendekatan personal ke database pelanggan (retensi).</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 5",
        title: "E-Commerce & Marketplace",
        summary: "Memilih platform jualan yang tepat serta manajemen operasional toko online.",
        content: `
            <h3>Marketplace vs Website Sendiri</h3>
            <p>Memahami perbedaan berjualan di "tanah orang" (Shopee, Tokopedia) yang memiliki trafik tinggi namun persaingan harga ketat, dibandingkan membangun website toko online sendiri (Shopify, Woocommerce) untuk branding jangka panjang.</p>
            <h3>Optimasi Toko Online</h3>
            <ul>
                <li>Foto produk yang profesional dan jelas.</li>
                <li>Deskripsi produk dengan copywriting yang menjual.</li>
                <li>Strategi harga coret dan bundling promo.</li>
                <li>Manajemen stok dan logistik pengiriman yang cepat.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 6",
        title: "Finansial Startup",
        summary: "Dasar laporan keuangan, manajemen arus kas (cashflow), dan unit economics.",
        content: `
            <h3>Cashflow is King</h3>
            <p>Dalam bisnis digital tahap awal, arus kas (ketersediaan uang tunai) seringkali lebih penting daripada profitabilitas di atas kertas untuk menjaga operasional tetap berjalan.</p>
            <h3>Metrik Penting</h3>
            <ul>
                <li><strong>CAC (Customer Acquisition Cost):</strong> Biaya marketing untuk mendapatkan 1 pelanggan baru.</li>
                <li><strong>LTV (Lifetime Value):</strong> Total keuntungan yang didapat dari 1 pelanggan selama mereka berlangganan.</li>
                <li><strong>Burn Rate:</strong> Kecepatan startup menghabiskan modal operasional per bulan.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 7",
        title: "Aspek Legal & HAKI",
        summary: "Pentingnya legalitas usaha dan perlindungan Hak Kekayaan Intelektual di era digital.",
        content: `
            <h3>Badan Usaha</h3>
            <p>Pemilihan bentuk badan usaha seperti PT Perorangan, PT Biasa, atau CV untuk kredibilitas bisnis digital.</p>
            <h3>HAKI (Hak Kekayaan Intelektual)</h3>
            <ul>
                <li><strong>Merek (Brand):</strong> Melindungi nama dan logo bisnis agar tidak ditiru.</li>
                <li><strong>Hak Cipta:</strong> Melindungi konten, kode program (software), dan desain website.</li>
                <li><strong>Paten:</strong> Melindungi penemuan teknologi baru yang memiliki langkah inventif.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 8",
        title: "UJIAN TENGAH SEMESTER (UTS)",
        summary: "Evaluasi pemahaman materi dari pertemuan 1 hingga 7.",
        content: `
            <h3>Agenda UTS</h3>
            <p>Mahasiswa diminta untuk mempresentasikan proposal bisnis digital tahap awal yang mencakup:</p>
            <ol>
                <li>Ide bisnis dan latar belakang masalah.</li>
                <li>Business Model Canvas (BMC) lengkap.</li>
                <li>Hasil survei validasi pasar sederhana.</li>
                <li>Strategi awal pemasaran digital.</li>
            </ol>
            <p><strong>Format:</strong> Presentasi Pitch Deck 5 menit.</p>`
    },
    {
        meeting: "Pertemuan 9",
        title: "Branding & Visual Identity",
        summary: "Membangun identitas visual yang kuat agar bisnis mudah dikenali konsumen.",
        content: `
            <h3>Elemen Branding</h3>
            <p>Branding bukan hanya logo, tapi persepsi yang dibangun di benak konsumen.</p>
            <ul>
                <li><strong>Logo & Warna:</strong> Psikologi warna dalam mempengaruhi keputusan pembelian.</li>
                <li><strong>Tone of Voice:</strong> Gaya bahasa brand (apakah formal, santai, atau humoris).</li>
                <li><strong>Typography:</strong> Pemilihan font yang sesuai dengan karakter bisnis.</li>
            </ul>
            `
    },
    {
        meeting: "Pertemuan 10",
        title: "Copywriting & Content Strategy",
        summary: "Seni menulis kata-kata iklan yang membujuk dan perencanaan konten media sosial.",
        content: `
            <h3>Formula Copywriting</h3>
            <ul>
                <li><strong>AIDA:</strong> Attention, Interest, Desire, Action.</li>
                <li><strong>PAS:</strong> Problem, Agitate, Solution.</li>
            </ul>
            <h3>Content Pillar</h3>
            <p>Mengelompokkan konten media sosial menjadi: Edukasi, Hiburan, Promosi, dan Testimoni agar feed tidak membosankan.</p>`
    },
    {
        meeting: "Pertemuan 11",
        title: "Social Media Ads (Paid Traffic)",
        summary: "Cara beriklan berbayar di Facebook/Meta Ads dan TikTok Ads untuk menjangkau audiens spesifik.",
        content: `
            <h3>Organik vs Berbayar</h3>
            <p>Jika organik butuh waktu lama, iklan berbayar (Ads) memberikan trafik instan dengan penargetan yang sangat spesifik.</p>
            <h3>Targeting Ads</h3>
            <ul>
                <li><strong>Demografi:</strong> Usia, gender, lokasi.</li>
                <li><strong>Interest:</strong> Minat dan hobi audiens.</li>
                <li><strong>Retargeting:</strong> Mengiklankan kembali orang yang sudah pernah mengunjungi website kita (iklan yang "menghantui").</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 12",
        title: "CRM & Retensi Pelanggan",
        summary: "Strategi menjaga pelanggan lama agar tetap loyal dan melakukan pembelian berulang.",
        content: `
            <h3>Mengapa Retensi Penting?</h3>
            <p>Mendapatkan pelanggan baru 5-25x lebih mahal daripada mempertahankan pelanggan lama.</p>
            <h3>Strategi CRM</h3>
            <ul>
                <li>Program Loyalitas (Poin/Member card).</li>
                <li>Email Newsletter berkala.</li>
                <li>Community Management (Grup WA/Telegram pelanggan).</li>
                <li>Handling complain yang responsif.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 13",
        title: "Pitching & Investor Relations",
        summary: "Teknik mempresentasikan bisnis di depan investor untuk mendapatkan pendanaan.",
        content: `
            <h3>Struktur Pitch Deck</h3>
            <p>Slide presentasi untuk investor biasanya terdiri dari 10-12 slide utama:</p>
            <ol>
                <li>Problem & Solution.</li>
                <li>Market Size (TAM, SAM, SOM).</li>
                <li>Product Demo.</li>
                <li>Business Model.</li>
                <li>Traction (Bukti keberhasilan awal).</li>
                <li>Competition.</li>
                <li>Team.</li>
                <li>Ask (Jumlah dana yang dibutuhkan).</li>
            </ol>`
    },
    {
        meeting: "Pertemuan 14",
        title: "UJIAN AKHIR SEMESTER (UAS)",
        summary: "Presentasi Final Project bisnis digital yang telah dijalankan (Simulasi).",
        content: `
            <h3>Final Project</h3>
            <p>Mahasiswa wajib mendemonstrasikan hasil eksekusi bisnis selama satu semester:</p>
            <ul>
                <li>Laporan realisasi penjualan (Traction).</li>
                <li>Akun media sosial yang sudah aktif dengan konten.</li>
                <li>Website/Landing page yang sudah live.</li>
                <li>Evaluasi kegagalan dan keberhasilan strategi yang diterapkan.</li>
            </ul>`
    }
];

// FUNGSI JAVASCRIPT UTAMA
const gridContainer = document.getElementById('content-grid');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// 1. Render Kartu ke HTML
function renderMaterials() {
    gridContainer.innerHTML = ""; 
    materials.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openModal(index);
        
        card.innerHTML = `
            <div class="card-body">
                <span class="card-meeting">${item.meeting}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.summary}</p>
                <span class="btn-read">Baca Materi &rarr;</span>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}

// 2. Logika Buka Modal
function openModal(index) {
    const data = materials[index];
    modalTitle.innerText = `${data.meeting}: ${data.title}`;
    modalBody.innerHTML = data.content;
    
    // Tampilkan modal
    modal.classList.add('active');
    // Matikan scroll body agar fokus di modal
    document.body.style.overflow = 'hidden'; 
}

// 3. Logika Tutup Modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; 
}

// Event Listener: Tutup jika klik di luar area modal content
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Event Listener: Tutup dengan tombol ESC keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

// Jalankan fungsi render saat halaman dimuat
renderMaterials();
