export default function handler(req, res) {
  res.status(200).json({ ok: true, service: 'NearTec Master 2026 V2', time: new Date().toISOString() });
}
