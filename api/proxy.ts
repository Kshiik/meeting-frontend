import type { NextApiRequest, NextApiResponse } from 'next';

const API_BASE_URL = 'https://my-diplom-api.fwh.is';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Получаем путь после /api/proxy/, например /employee/self
    const apiPath = req.query.path;
    if (!apiPath || Array.isArray(apiPath)) {
      return res.status(400).json({ message: 'Invalid API path' });
    }

    // Формируем URL к реальному API
    const url = `${API_BASE_URL}/${apiPath}`;

    // Копируем заголовки, кроме некоторых, которые не нужны или вредны для проксирования
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
    delete headers['accept-encoding']; // пусть fetch сам выберет
    delete headers.connection;

    // Делаем запрос к настоящему API
    const response = await fetch(url, {
      method: req.method,
      headers,
      // Для GET и HEAD body не отправляем
      body: ['GET', 'HEAD'].includes(req.method ?? '') ? undefined : JSON.stringify(req.body),
    });

    // Копируем статус ответа и заголовки, кроме некоторых
    res.status(response.status);
    response.headers.forEach((value, key) => {
      if (!['transfer-encoding', 'content-encoding', 'content-length', 'connection'].includes(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    });

    // Отправляем тело ответа обратно клиенту
    const data = await response.text();

    // Если это JSON, парсим, чтобы вернуть объект, иначе текст
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch {
      res.send(data);
    }
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ message: 'Proxy error' });
  }
}
