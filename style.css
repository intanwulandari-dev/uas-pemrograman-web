/* --- TEMA: Modern Elegant (Indigo & Clean White) --- */

:root {
    --primary: #4f46e5; /* Indigo Modern */
    --primary-dark: #4338ca;
    --accent: #818cf8;
    --bg-body: #f8fafc; /* Abu-abu sangat muda */
    --bg-card: #ffffff;
    --text-main: #1e293b;
    --text-muted: #64748b;
    --shadow-soft: 0 10px 40px -10px rgba(0,0,0,0.08);
    --shadow-hover: 0 20px 40px -10px rgba(79, 70, 229, 0.15);
    --radius: 16px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background-color: var(--bg-body);
    color: var(--text-main);
    font-family: 'Inter', sans-serif; /* Font isi yang bersih */
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

h1, h2, h3, h4 { font-family: 'Poppins', sans-serif; /* Font judul yang estetik */ }

/* --- HEADER --- */
header {
    background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
    padding: 4rem 1rem;
    text-align: center;
    border-bottom: 1px solid #e2e8f0;
}

.header-content {
    max-width: 800px;
    margin: 0 auto;
}

.badge-subtitle {
    display: inline-block;
    background: #e0e7ff;
    color: var(--primary);
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    letter-spacing: 1px;
}

header h1 {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(to right, var(--primary), var(--primary-dark));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    line-height: 1.2;
}

header p {
    color: var(--text-muted);
    font-size: 1.15rem;
    max-width: 600px;
    margin: 0 auto;
}

/* --- CONTAINER & GRID --- */
.container {
    max-width: 1100px;
    margin: -3rem auto 3rem; /* Efek overlap ke atas sedikit */
    padding: 0 1.5rem;
    flex: 1;
    z-index: 2;
    position: relative;
}

.material-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

/* --- CARD DESIGN --- */
.card {
    background: var(--bg-card);
    border-radius: var(--radius);
    padding: 2rem;
    box-shadow: var(--shadow-soft);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba(255,255,255,0.5);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
    border-color: var(--accent);
}

/* Hiasan background bulat kecil di kartu */
.card::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #e0e7ff, transparent);
    border-radius: 50%;
    opacity: 0.5;
}

.card-meeting-badge {
    color: var(--primary);
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
    font-family: 'Poppins', sans-serif;
}

.card-title {
    font-size: 1.35rem;
    margin-bottom: 1rem;
    color: var(--text-main);
    line-height: 1.4;
}

.card-desc {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    flex-grow: 1;
}

.btn-read {
    color: var(--primary);
    font-weight: 600;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: gap 0.2s;
}

.card:hover .btn-read { gap: 10px; }

/* --- MODAL --- */
.modal-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(15, 23, 42, 0.6); /* Backdrop gelap elegan */
    backdrop-filter: blur(8px); /* Efek blur kaca */
    z-index: 1000;
    display: none;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.modal-overlay.active { display: flex; opacity: 1; }

.modal-content {
    background: white;
    width: 100%; max-width: 700px;
    max-height: 85vh;
    border-radius: 20px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    overflow-y: auto;
    transform: scale(0.95);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-overlay.active .modal-content { transform: scale(1); }

.modal-header {
    padding: 2rem 2.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: white;
    position: sticky;
    top: 0;
    z-index: 10;
}

.modal-badge {
    display: inline-block;
    background: var(--primary);
    color: white;
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: uppercase;
}

.modal-title {
    font-size: 1.75rem;
    color: var(--text-main);
    line-height: 1.2;
}

.close-btn {
    background: #f1f5f9;
    border: none;
    width: 40px; height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--text-muted);
    transition: all 0.2s;
}

.close-btn:hover { background: #fee2e2; color: #ef4444; transform: rotate(90deg); }

.modal-body { padding: 0 2.5rem 3rem; color: #334155; }
.modal-body h3 { color: var(--primary); margin-top: 2rem; font-size: 1.25rem; }
.modal-body p { margin-bottom: 1rem; text-align: justify; }
.modal-body ul, .modal-body ol { margin-left: 1.2rem; margin-bottom: 1rem; }
.modal-body li { margin-bottom: 0.5rem; }

/* --- FOOTER --- */
footer {
    text-align: center;
    padding: 3rem 1rem;
    background: white;
    border-top: 1px solid #e2e8f0;
    color: var(--text-muted);
}
.footer-note { font-size: 0.85rem; margin-top: 5px; opacity: 0.7; }

/* Mobile Adjustment */
@media (max-width: 768px) {
    header h1 { font-size: 2.2rem; }
    .container { margin-top: 0; }
    .modal-header, .modal-body { padding-left: 1.5rem; padding-right: 1.5rem; }
}
