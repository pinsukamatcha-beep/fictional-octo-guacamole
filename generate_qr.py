"""
generate_qr.py
================
Bagian PYTHON dari proyek ini.

Kegunaan: membuat QR Code yang mengarah ke alamat website portofolio ini,
supaya bisa ditempel di banner sekolah, mading, atau slide presentasi
HUT RI ke-81. Bukan bagian dari runtime web (situs tetap murni
HTML/CSS/JS di browser) — ini alat bantu terpisah yang kamu jalankan
sekali di komputer untuk menghasilkan gambar QR.

Cara pakai:
    1. Install dependency (sekali saja):
         pip install qrcode[pil]
    2. Jalankan:
         python generate_qr.py https://username.github.io/nama-repo/
    3. File qr-code.png akan muncul di folder yang sama, siap dipakai.

Kalau argumen URL tidak diisi, script akan memakai URL placeholder
di bawah dan mengingatkanmu untuk menggantinya.
"""

import sys
import os

PLACEHOLDER_URL = "https://username.github.io/nama-repo/"
OUTPUT_FILE = "qr-code.png"


def buat_qr(url: str, output_path: str = OUTPUT_FILE) -> None:
    try:
        import qrcode
    except ImportError:
        print("Modul 'qrcode' belum terpasang.")
        print("Jalankan dulu: pip install qrcode[pil]")
        sys.exit(1)

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    # Warna disesuaikan tema situs: merah crimson di atas putih gading
    img = qr.make_image(fill_color="#B01A2E", back_color="#F6E9E2")
    img.save(output_path)

    print(f"Berhasil! QR code untuk:\n  {url}")
    print(f"Disimpan sebagai: {os.path.abspath(output_path)}")


if __name__ == "__main__":
    target_url = sys.argv[1] if len(sys.argv) > 1 else PLACEHOLDER_URL
    if target_url == PLACEHOLDER_URL:
        print("Belum ada URL yang diberikan, memakai placeholder.")
        print("Setelah situs kamu online di GitHub Pages, jalankan ulang dengan:")
        print("  python generate_qr.py https://username.github.io/nama-repo/\n")
    buat_qr(target_url)
