# Finovia — Serverga deploy qilish (Docker + Nginx + SSL)

`finovia.okaposai.uz` subdomeni uchun. Saytni Docker konteynerda 5174-portda ishga
tushiramiz, host nginx reverse-proxy qiladi va Let's Encrypt SSL o'rnatamiz.

Arxitektura:

```
Internet ──443/80──> host nginx ──proxy──> 127.0.0.1:5174 ──> Docker (nginx :80) ──> dist/
```

Boshqa loyihalar ham shu host nginx orqali alohida domen/portlarda ishlay beradi.

---

## 0. Talablar (serverda)

```bash
# Docker + Compose
sudo apt update
sudo apt install -y docker.io docker-compose-plugin nginx certbot python3-certbot-nginx
sudo systemctl enable --now docker
```

DNS: `finovia.okaposai.uz` ning **A** yozuvi server IP manziliga yo'naltirilgan
bo'lishi kerak (avval shuni tekshiring: `dig +short finovia.okaposai.uz`).

---

## 1. Kodni serverga olib kelish

```bash
cd /opt   # yoki xohlagan papka
git clone <repo-url> finovia   # yoki fayllarni scp bilan ko'chiring
cd finovia
```

---

## 2. Docker konteynerni ishga tushirish (port 5174)

```bash
docker compose up -d --build
```

Tekshirish:

```bash
docker ps                     # finovia-web ishlаyaptimi
curl -I http://127.0.0.1:5174 # 200 OK qaytishi kerak
```

> Konteyner faqat `127.0.0.1:5174` ga bog'langan — tashqaridan to'g'ridan-to'g'ri
> ochilmaydi, faqat host nginx orqali kiriladi.

---

## 3. Host nginx konfiguratsiyasi

```bash
sudo cp deploy/finovia.okaposai.uz.conf /etc/nginx/sites-available/finovia.okaposai.uz.conf
sudo ln -s /etc/nginx/sites-available/finovia.okaposai.uz.conf /etc/nginx/sites-enabled/
sudo nginx -t          # sintaksis tekshiruvi
sudo systemctl reload nginx
```

Endi `http://finovia.okaposai.uz` ishlashi kerak.

---

## 4. SSL (Let's Encrypt) o'rnatish

```bash
sudo certbot --nginx -d finovia.okaposai.uz
```

Certbot avtomatik:
- sertifikat oladi,
- nginx konfiga 443 (HTTPS) blokini qo'shadi,
- HTTP -> HTTPS redirectni sozlaydi.

Avtomatik yangilanish allaqachon sozlangan (`certbot.timer`). Tekshirish:

```bash
sudo certbot renew --dry-run
```

Endi `https://finovia.okaposai.uz` SSL bilan ishlaydi.

---

## 5. Yangilanish (kod o'zgarganda)

```bash
cd /opt/finovia
git pull
docker compose up -d --build   # qayta build + restart
```

Eski image'larni tozalash (ixtiyoriy):

```bash
docker image prune -f
```

---

## Foydali buyruqlar

```bash
docker compose logs -f finovia   # konteyner loglari
docker compose restart finovia   # restart
docker compose down              # to'xtatish
sudo tail -f /var/log/nginx/finovia.error.log
```

## Portni o'zgartirish

Boshqa port kerak bo'lsa `docker-compose.yml` dagi `127.0.0.1:5174:80` ni va
`deploy/finovia.okaposai.uz.conf` dagi `proxy_pass http://127.0.0.1:5174;` ni
mos ravishda o'zgartiring, so'ng:

```bash
docker compose up -d
sudo systemctl reload nginx
```
