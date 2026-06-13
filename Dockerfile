# ---- Build bosqichi ----
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Serve bosqichi (nginx) ----
FROM nginx:1.27-alpine
# Statik fayllarni nusxalaymiz
COPY --from=build /app/dist /usr/share/nginx/html
# Konteyner ichidagi nginx konfiguratsiyasi (SPA fallback + cache)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
