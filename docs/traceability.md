# MASKANI — Matriks Keterlacakan

Diadaptasi dari §16 Build Reference dan diperluas per rilis.
Kolom **Status** diperbarui saat gerbang terkait lulus.

| Persyaratan | Sumber | Langkah | Tes / Gerbang | Status |
| --- | --- | --- | --- | --- |
| Terbaca tanpa JS | §1, §9, §15 | P1-01…P1-12 | E2E-13, G-1 | Belum |
| Tidak ada konten karangan | §0, §6.4 | P0-05, P3-01 | CG-01, G-3 | Sebagian (CG-01..14 aktif) |
| Email tidak di HTML awal | §7.3 | P1-10 | E2E-07, G-1 | Belum |
| Copy Email (state, ACK, gagal) | §7.2 | P1-10 | E2E-07 | Belum |
| Tier Static tanpa GSAP | §5.1, §13 | P1-13 | E2E-10, G-1 | Belum |
| Dialog Index mobile | §3.2, §12 | P1-04 | E2E-09 | Belum |
| Download CV tanpa telepon | §14.3 | PF-03, R1-05 | E2E-02, E2E-15, G-R1 | Belum (DL-007 exception) |
| IT Support = Intern | §2.2 | P1-07 | CG-10, E2E-05 | Sebagian (CG-10 aktif) |
| K-METRIC dihapus | §0 | P0-02, P3-01 | CG-07, E2E-06 | Ya (CG-07 aktif) |
| Satu project, tanpa "project berikutnya" | §0, §6.2 | P3-02, P3-03 | E2E-06 | Belum |
| Langkah kosong tidak dirender (U-10) | §6.4 | P3-03 | CG-04, E2E-06, TC-030 | Belum (CG-04 oleh compiler) |
| Screenshot asli lewat MediaFrame | §6.3, §6.5 | P3-04 | CG-05 | Belum |
| JSON-LD Person (U-11) | §14.1 | P3-06 | E2E-12 | Belum |
| Header keamanan | §14.2 | P3-07 | E2E-14 | Ya (next.config.ts) |
| Produksi hanya dari CI | §15.3 | P0-06 | CI-02, G-0 | Ya (DL-008) |
| Build Receipt tanpa angka palsu | §7.4, §15.3 | R4-01 | CG-06, E2E-08, G-R4 | Belum |
| Anggaran gerak | §5.8 | R2, R3 | G-R2, G-R3 | Belum |
| Lighthouse ≥95/100/100, axe 0 | §13, §15 | R1-03 | G-R1 | Belum (template: 100/95/100) |
| Cursor: native tidak disembunyikan | §5.5 | R3-01 | E2E-11, G-R3 | Belum |