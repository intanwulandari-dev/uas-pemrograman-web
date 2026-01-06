// DATA MATERI (14 Pertemuan Lengkap)
const materials = [
    {
        meeting: "Pertemuan 1",
        title: "Mindset Kewirausahaan Digital",
        summary: "Transisi dari bisnis konvensional ke digital dan pembentukan growth mindset.",
        content: `
            <h3>Pengertian Digital Entrepreneurship</h3>
            <p>Digital entrepreneurship adalah fenomena pemanfaatan teknologi dan aset digital untuk mengubah model bisnis, menciptakan peluang baru, dan memberikan nilai tambah kepada konsumen.</p>
            <h3>Pola Pikir Founder</h3>
            <ul>
                <li><strong>Growth Mindset:</strong> Percaya bahwa kemampuan dapat dikembangkan.</li>
                <li><strong>Resiliensi:</strong> Ketahanan terhadap kegagalan dan kemampuan bangkit.</li>
                <li><strong>Customer Centric:</strong> Fokus utama pada pemecahan masalah pelanggan.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 2",
        title: "Business Model Canvas (BMC)",
        summary: "9 elemen kunci dalam merancang model bisnis startup yang solid.",
        content: `
            <h3>Apa itu BMC?</h3>
            <p>Kerangka kerja manajemen strategis untuk mendefinisikan ide bisnis dalam satu halaman visual.</p>
            <h3>9 Blok Bangunan</h3>
            <ol>
                <li>Customer Segments</li>
                <li>Value Propositions</li>
                <li>Channels</li>
                <li>Customer Relationships</li>
                <li>Revenue Streams</li>
                <li>Key Resources</li>
                <li>Key Activities</li>
                <li>Key Partnerships</li>
                <li>Cost Structure</li>
            </ol>`
    },
    {
        meeting: "Pertemuan 3",
        title: "Riset Pasar & Validasi Ide",
        summary: "Teknik mencari tahu kebutuhan pasar agar tidak membuat produk yang sia-sia.",
        content: `
            <h3>Pentingnya Validasi</h3>
            <p>Mencegah kegagalan akibat "No Market Need".</p>
            <h3>Metode Riset</h3>
            <ul>
                <li>Wawancara (In-depth Interview)</li>
                <li>Survei Online (Google Forms)</li>
                <li>Analisis Kompetitor (SWOT)</li>
                <li>MVP (Minimum Viable Product)</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 4",
        title: "Digital Marketing Basics",
        summary: "Dasar strategi pemasaran digital: SEO, SEM, dan Social Media.",
        content: `
            <h3>Kanal Utama</h3>
            <ul>
                <li><strong>SEO:</strong> Optimasi pencarian Google organik.</li>
                <li><strong>Social Media:</strong> Branding via Instagram/TikTok.</li>
                <li><strong>Content Marketing:</strong> Soft selling edukatif.</li>
                <li><strong>Email Marketing:</strong> Retensi pelanggan.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 5",
        title: "E-Commerce & Marketplace",
        summary: "Platform jualan yang tepat dan manajemen operasional toko online.",
        content: `
            <h3>Strategi Platform</h3>
            <p>Perbedaan strategi berjualan di Marketplace (Shopee/Tokopedia) vs Website Sendiri.</p>
            <h3>Optimasi</h3>
            <ul>
                <li>Foto produk profesional.</li>
                <li>Copywriting deskripsi.</li>
                <li>Manajemen stok & logistik.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 6",
        title: "Finansial Startup",
        summary: "Laporan keuangan dasar, cashflow, dan unit economics.",
        content: `
            <h3>Cashflow is King</h3>
            <p>Arus kas lebih penting dari profit di tahap awal.</p>
            <h3>Metrik Penting</h3>
            <ul>
                <li><strong>CAC:</strong> Biaya akuisisi per pelanggan.</li>
                <li><strong>LTV:</strong> Keuntungan seumur hidup dari pelanggan.</li>
                <li><strong>Burn Rate:</strong> Kecepatan menghabiskan modal.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 7",
        title: "Aspek Legal & HAKI",
        summary: "Legalitas usaha dan perlindungan Hak Kekayaan Intelektual.",
        content: `
            <h3>Badan Usaha</h3>
            <p>PT Perorangan, PT, atau CV.</p>
            <h3>HAKI</h3>
            <ul>
                <li><strong>Merek:</strong> Melindungi nama/logo.</li>
                <li><strong>Hak Cipta:</strong> Melindungi konten/kode.</li>
                <li><strong>Paten:</strong> Melindungi invensi teknologi.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 8",
        title: "UJIAN TENGAH SEMESTER (UTS)",
        summary: "Presentasi Proposal Bisnis Digital & Pitch Deck.",
        content: `
            <h3>Agenda UTS</h3>
            <p>Presentasi Pitch Deck 5 menit mencakup:</p>
            <ol>
                <li>Ide & Masalah</li>
                <li>Business Model Canvas</li>
                <li>Hasil Validasi Pasar</li>
                <li>Strategi Marketing Awal</li>
            </ol>`
    },
    {
        meeting: "Pertemuan 9",
        title: "Branding & Visual Identity",
        summary: "Membangun identitas visual yang kuat dan mudah dikenali.",
        content: `
            <h3>Elemen Branding</h3>
            <ul>
                <li><strong>Logo & Psikologi Warna</strong></li>
                <li><strong>Tone of Voice:</strong> Gaya bahasa brand.</li>
                <li><strong>Typography:</strong> Karakter font.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 10",
        title: "Copywriting & Content Strategy",
        summary: "Seni menulis iklan yang membujuk dan perencanaan konten.",
        content: `
            <h3>Formula Copywriting</h3>
            <ul>
                <li>AIDA (Attention, Interest, Desire, Action)</li>
                <li>PAS (Problem, Agitate, Solution)</li>
            </ul>
            <h3>Content Pillar</h3>
            <p>Edukasi, Hiburan, Promosi, Testimoni.</p>`
    },
    {
        meeting: "Pertemuan 11",
        title: "Social Media Ads",
        summary: "Beriklan berbayar di Meta Ads & TikTok Ads.",
        content: `
            <h3>Targeting Ads</h3>
            <ul>
                <li><strong>Demografi:</strong> Usia, lokasi, gender.</li>
                <li><strong>Interest:</strong> Minat/Hobi.</li>
                <li><strong>Retargeting:</strong> Iklan berulang ke pengunjung web.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 12",
        title: "CRM & Retensi Pelanggan",
        summary: "Strategi menjaga loyalitas pelanggan lama.",
        content: `
            <h3>Strategi CRM</h3>
            <ul>
                <li>Program Loyalitas (Poin).</li>
                <li>Email Newsletter.</li>
                <li>Community Management.</li>
                <li>Handling Complain.</li>
            </ul>`
    },
    {
        meeting: "Pertemuan 13",
        title: "Pitching & Investor Relations",
        summary: "Teknik presentasi bisnis di depan investor.",
        content: `
            <h3>Struktur Pitch Deck</h3>
            <ol>
                <li>Problem & Solution</li>
                <li>Market Size</li>
                <li>Product Demo</li>
                <li>Business Model</li>
                <li>Traction</li>
                <li>Ask (Dana yang dibutuhkan)</li>
            </ol>`
    },
    {
        meeting: "Pertemuan 14",
        title: "UJIAN AKHIR SEMESTER (UAS)",
        summary: "Laporan Final Project Bisnis Digital.",
        content: `
            <h3>Final Project</h3>
            <ul>
                <li>Laporan realisasi penjualan (Traction).</li>
                <li>Aset digital (Sosmed/Web) yang sudah live.</li>
                <li>Evaluasi strategi.</li>
            </ul>`
    }
];

const gridContainer = document.getElementById('content-grid');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBadge = document.getElementById('modal-badge');
const modalBody = document.getElementById('modal-body');

// Render Cards
function renderMaterials() {
    gridContainer.innerHTML = "";
    materials.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openModal(index);
        
        card.innerHTML = `
            <div>
                <span class="card-meeting-badge">${item.meeting}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.summary}</p>
            </div>
            <div class="btn-read">
                Baca Selengkapnya 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}

// Modal Logic
function openModal(index) {
    const data = materials[index];
    modalBadge.innerText = data.meeting;
    modalTitle.innerText = data.title;
    modalBody.innerHTML = data.content;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

renderMaterials();
