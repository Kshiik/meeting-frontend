import type { NextApiRequest, NextApiResponse } from 'next';

const API_BASE_URL = 'https://my-diplom-api.fwh.is';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const path = req.query.path;
    const apiPath = Array.isArray(path) ? path.join('/') : path;
    const url = `${API_BASE_URL}/${apiPath}`;

    const headers: Record<string, string> = {};
    for (const [key, value] of Object.entries(req.headers)) {
      if (!value) continue;
      if (Array.isArray(value)) {
        headers[key] = value.join(',');
      } else {
        headers[key] = value;
      }
    }

    delete headers.host;
    delete headers['content-length'];
    delete headers['accept-encoding'];
    delete headers.connection;

    const response = await fetch(url, {
      method: req.method,
      headers,
      body: ['GET', 'HEAD'].includes(req.method ?? '') ? undefined : JSON.stringify(req.body),
    });

    res.status(response.status);
    response.headers.forEach((value, key) => {
      if (!['transfer-encoding', 'content-encoding', 'content-length', 'connection'].includes(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    });

    const data = await response.text();

    try {
      res.json(JSON.parse(data));
    } catch {
      res.send(data);
    }
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ message: 'Proxy error' });
  }
}
