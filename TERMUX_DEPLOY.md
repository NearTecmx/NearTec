# NearTec · Deploy desde Termux a GitHub + Vercel

## 0) Variables que debes ajustar

```bash
export REPO_URL="https://github.com/TU_USUARIO/TU_REPO.git"
export REPO_DIR="$HOME/neartec-site"
export BRANCH="main"
export ZIP_PATH="/sdcard/Download/NearTec_Web_Pro_2026_VercelReady_v2_Termux.zip"
```

Si el ZIP tiene otro nombre, primero localízalo:

```bash
ls -lah /sdcard/Download | grep NearTec
```

## 1) Preparar Termux

```bash
termux-setup-storage
bash scripts/termux-prepare.sh
```

## 2) Reemplazar repo con el ZIP

```bash
bash scripts/replace-from-zip.sh
```

El script clona el repo si no existe, crea una rama de backup remota, limpia el contenido anterior sin borrar `.git`, copia el ZIP nuevo, corre pruebas y sube el commit.

## 3) Linkear y configurar Vercel

```bash
cd "$REPO_DIR"
vercel login
vercel link
```

Variables de producción recomendadas:

```bash
vercel env add NEARTEC_LEAD_WEBHOOK_URL production
vercel env add ALLOWED_ORIGIN production
```

Valores sugeridos:

- `NEARTEC_LEAD_WEBHOOK_URL`: webhook real de Make, Zapier, n8n, Apps Script, Airtable, HubSpot, Zoho o backend propio.
- `ALLOWED_ORIGIN`: `https://neartec.com` cuando el dominio final esté conectado.

## 4) Deploy producción

```bash
vercel --prod
```

## 5) Pruebas finales

```bash
PROJECT_URL="https://tu-dominio-o-url.vercel.app" bash scripts/vercel-prod-test.sh
```

También puedes probar local estático:

```bash
npm run smoke:local
```

## 6) Rollback rápido

Si algo sale mal:

```bash
git branch -r | grep backup/pre-neartec
git checkout main
git reset --hard origin/NOMBRE_DE_LA_RAMA_BACKUP
git push --force-with-lease origin main
```

Luego en Vercel puedes promover el deployment anterior desde el dashboard.
