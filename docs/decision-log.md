# MASKANI — Decision Log

Format entri (§15.1 Build Reference):
`DL-nnn · tanggal · ID terkait · keputusan · alasan · dampak · persetujuan`

---

## DL-007 · 2026-10-05 · CG-09 / PF-03

**Keputusan.** CG-09 (CV publik wajib ada) diabaikan sementara lewat
`scripts/content-guard-exceptions.json`, berlaku sampai gerbang **G-R1**.

**Alasan.** PF-03 (ekspor dan unggah `Maskani-CV.pdf` tanpa nomor telepon)
adalah tindakan di sisi pemilik dan belum diselesaikan. PF-03 memblokir
G-R1, bukan G-0. Menahan seluruh pekerjaan P0 sampai berkas itu ada akan
menghentikan alur tanpa manfaat (F-01/F-02).

**Dampak.** Rilis R1 diblokir sampai exception dicabut. Guard melaporkan
CG-09 sebagai warning, bukan error. Exception tidak dapat dipakai untuk
aturan lain (CG-01…CG-14 lainnya tetap ditegakkan penuh).

**Kadaluarsa.** Gerbang G-R1. Sebelum deploy R1, berkas CV harus ada dan
entri ini dicabut.