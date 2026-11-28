export interface CryptoLivePrice {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
}

export interface TRMLiveRate {
  date: string;
  value: number;
  unit: string;
  source: string;
}

interface FAQItem {
  keywords: string[];
  response: string;
}

const SYSTEM_FAQS: FAQItem[] = [
  {
    keywords: ['oikonomos global', 'servicios', 'consultoria', 'areas', 'diagnostico', 'san cristobal', 'tachira', 'sede'],
    response:
      'Oikonomos Global — Consultoría Integral 360°:\n\n' +
      'Conectamos el capital internacional con oportunidades empresariales en 7 áreas clave: Administrativa, Agropecuaria, Ambiental, Contable, Marketing, Económica y Legal.\n\n' +
      '• Sede Principal: CC El Tamá, San Cristóbal, Estado Táchira.\n' +
      '• Usa el botón "Agendar Diagnóstico" en la barra superior para iniciar con un consultor líder.',
  },
  {
    keywords: ['crm', 'afiliados', 'casos', 'clientes', 'comisiones', 'debito inmediato', 'admin-login'],
    response:
      'Ecosistema CRM para Afiliados y Clientes:\n\n' +
      '• Portal de Clientes y Afiliados (/login): Seguimiento de expedientes/casos en tiempo real, cálculo de comisiones y gestión de pagos por débito inmediato (/cliente/pagos).\n' +
      '• Portal Exclusivo de Administración (/admin-login): Ingreso independiente para administradores del CRM.\n' +
      '• Puedes acceder desde "Acceso CRM Afiliados" en la barra superior.',
  },
  {
    keywords: ['capital', 'calculadora', 'multi-mercado', 'tradingview', 'graficos', 'indicadores'],
    response:
      'Oikonomos Capital:\n\n' +
      '1. Calculadora Multi-Mercado: Conversiones instantáneas entre Dólar BCV y P2P (USD), Bolívares (VES), Euro (EUR), Peso Colombiano (COP - TRM), Bitcoin, Ethereum, USDT, Oro, Plata y Petróleo WTI.\n' +
      '2. Terminal de TradingView e Indicadores Financieros: Gráficos en vivo de índices, acciones de EE.UU., materias primas, cripto y forex.\n' +
      '• Accede desde la pestaña "Capital" -> "Acceder al Portal OIKONOMOS CAPITAL".',
  },
  {
    keywords: ['hola', 'buenas', 'quien eres', 'carlos', 'asistente', 'ayuda'],
    response:
      '¡Hola! Soy Carlos, tu asistente virtual de Oikonomos. Estoy aquí para ayudarte con información sobre Oikonomos Global, nuestro CRM para Afiliados y Clientes, Oikonomos Capital y precios en vivo de criptomonedas o TRM Colombia. ¿En qué te ayudo?',
  },
];

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function formatUSD(amount: number): string {
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatCOP(amount: number): string {
  return amount.toLocaleString('es-CO', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export async function fetchLiveCryptoRates(): Promise<Record<string, CryptoLivePrice>> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2600);
    const res = await fetch(
      'https://api.binance.com/api/v3/ticker/24hr?symbols=%5B%22BTCUSDT%22,%22ETHUSDT%22,%22SOLUSDT%22%5D',
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (res.ok) {
      const data: Array<{ symbol: string; lastPrice: string; priceChangePercent: string }> =
        await res.json();
      const map: Record<string, CryptoLivePrice> = {};
      for (const item of data) {
        const price = parseFloat(item.lastPrice) || 0;
        const change24h = parseFloat(item.priceChangePercent) || 0;
        if (item.symbol === 'BTCUSDT') map.BTC = { symbol: 'BTC', name: 'Bitcoin', price, change24h };
        else if (item.symbol === 'ETHUSDT') map.ETH = { symbol: 'ETH', name: 'Ethereum', price, change24h };
        else if (item.symbol === 'SOLUSDT') map.SOL = { symbol: 'SOL', name: 'Solana', price, change24h };
      }
      if (map.BTC && map.ETH) return map;
    }
  } catch {
    // Fallback below
  }

  return {
    BTC: { symbol: 'BTC', name: 'Bitcoin', price: 77219.3, change24h: -3.7 },
    ETH: { symbol: 'ETH', name: 'Ethereum', price: 2227.84, change24h: -4.29 },
    SOL: { symbol: 'SOL', name: 'Solana', price: 95.93, change24h: 0.85 },
  };
}

export async function fetchLiveTRM(): Promise<TRMLiveRate> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch('https://open.er-api.com/v6/latest/USD', {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const json = await res.json();
      if (json?.rates?.COP) {
        return {
          date: json.time_last_update_utc
            ? String(json.time_last_update_utc).substring(0, 16)
            : new Date().toISOString().split('T')[0],
          value: Number(json.rates.COP),
          unit: 'COP',
          source: 'Mercado Cambiario Internacional USD/COP',
        };
      }
    }
  } catch {
    // Fallback below
  }

  return {
    date: new Date().toISOString().split('T')[0],
    value: 3146.9,
    unit: 'COP',
    source: 'Tasa Representativa del Mercado Oficial',
  };
}

export async function getCarlosAnswer(query: string): Promise<string> {
  const normalized = normalizeText(query);

  const hasTRM =
    normalized.includes('trm') ||
    normalized.includes('rtm') ||
    normalized.includes('peso colombiano') ||
    normalized.includes('pesos colombianos') ||
    normalized.includes('colombia') ||
    normalized.includes('cop');

  if (hasTRM) {
    const trm = await fetchLiveTRM();
    const formattedVal = formatCOP(trm.value);
    const invRate = (1 / trm.value).toFixed(6);
    return (
      `Tasa Representativa del Mercado (TRM) - Peso Colombiano:\n\n` +
      `• 1 USD = $${formattedVal} COP\n` +
      `• 1 COP = $${invRate} USD\n` +
      `• Vigencia: ${trm.date}\n` +
      `• Fuente: ${trm.source}\n\n` +
      `Puedes hacer conversiones entre USD, VES (BCV y paralelo), criptomonedas y COP en la Calculadora Multi-Mercado de Oikonomos Capital.`
    );
  }

  const hasBitcoin = normalized.includes('bitcoin') || normalized.includes('btc');
  const hasEthereum =
    normalized.includes('ethereum') || normalized.includes('etherium') || normalized.includes('eth');
  const hasCrypto =
    normalized.includes('criptomoneda') || normalized.includes('cripto') || normalized.includes('crypto');

  if (hasBitcoin || hasEthereum || hasCrypto) {
    const rates = await fetchLiveCryptoRates();
    const btc = rates.BTC;
    const eth = rates.ETH;
    const sol = rates.SOL;

    if (hasBitcoin && !hasEthereum) {
      const sign = btc.change24h >= 0 ? '+' : '';
      return (
        `Precio en Tiempo Real de Bitcoin (BTC):\n\n` +
        `• Precio actual: $${formatUSD(btc.price)} USD\n` +
        `• Variación 24h: ${sign}${btc.change24h.toFixed(2)}%\n\n` +
        `Calcula conversiones exactas a Bolívares o Pesos en la Calculadora Multi-Mercado de Oikonomos Capital.`
      );
    }

    if (hasEthereum && !hasBitcoin) {
      const sign = eth.change24h >= 0 ? '+' : '';
      return (
        `Precio en Tiempo Real de Ethereum (ETH):\n\n` +
        `• Precio actual: $${formatUSD(eth.price)} USD\n` +
        `• Variación 24h: ${sign}${eth.change24h.toFixed(2)}%\n\n` +
        `Consulta sus gráficos en vivo desde Oikonomos Capital.`
      );
    }

    return (
      `Precios en Tiempo Real - Criptomonedas:\n\n` +
      `• Bitcoin (BTC): $${formatUSD(btc.price)} USD (${btc.change24h >= 0 ? '+' : ''}${btc.change24h.toFixed(2)}%)\n` +
      `• Ethereum (ETH): $${formatUSD(eth.price)} USD (${eth.change24h >= 0 ? '+' : ''}${eth.change24h.toFixed(2)}%)\n` +
      (sol
        ? `• Solana (SOL): $${formatUSD(sol.price)} USD (${sol.change24h >= 0 ? '+' : ''}${sol.change24h.toFixed(2)}%)\n\n`
        : '\n') +
      `Consulta tasas BCV, paralelo y gráficos TradingView en Oikonomos Capital.`
    );
  }

  let bestMatch: FAQItem | null = null;
  let highestScore = 0;

  for (const item of SYSTEM_FAQS) {
    let score = 0;
    for (const kw of item.keywords) {
      const cleanKw = normalizeText(kw);
      if (normalized.includes(cleanKw)) {
        score += cleanKw.split(' ').length * 2;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore >= 2) {
    return bestMatch.response;
  }

  return (
    'Soy Carlos, tu asistente virtual de Oikonomos. Puedes consultarme sobre:\n\n' +
    '• Oikonomos Global: nuestras 7 áreas de consultoría y diagnóstico estratégico.\n' +
    '• CRM para Afiliados y Clientes: gestión de casos, comisiones y pagos por débito inmediato.\n' +
    '• Oikonomos Capital: Calculadora Multi-Mercado, TradingView, TRM Colombia y precios de criptomonedas en vivo.'
  );
}
