# Checklist técnico V3

- [ ] `npm run predeploy:check`
- [ ] `npm run smoke`
- [ ] Commit a GitHub
- [ ] `vercel --prod`
- [ ] `export PROJECT_URL="https://neartecmx.vercel.app"`
- [ ] `bash scripts/vercel-prod-test.sh`
- [ ] Configurar `NEARTEC_LEAD_WEBHOOK_URL`
- [ ] Re-deploy
- [ ] Probar que `forwarded: true`
