'use client';

import React, { useEffect, useRef, useState } from 'react';
import { getCarlosAnswer } from './carlosKnowledge';

interface ChatMsg {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const STORAGE_KEY = 'oikonomos_web_carlos_msgs';
const AVATAR_URL = `${process.env.NEXT_PUBLIC_CAPITAL_URL || 'http://localhost:5173'}/src/assets/assistant-avatar.jpg`;

const INITIAL_SUGGESTIONS = [
  '¿Qué servicios ofrece Oikonomos Global?',
  '¿Cómo funciona el CRM para Afiliados y Clientes?',
  '¿Cómo funciona la Calculadora Multi-Mercado de Capital?',
  'Tasas de cambio (TRM Colombia, BCV) y criptomonedas',
];

function CarlosAvatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const [imgError, setImgError] = useState(false);

  const sizeClass =
    size === 'sm'
      ? 'w-7 h-7 text-xs'
      : size === 'lg'
        ? 'w-[74px] h-[74px] text-2xl'
        : 'w-10 h-10 text-sm';

  if (imgError) {
    return (
      <div
        aria-hidden="true"
        className={`${sizeClass} shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-white`}
      >
        C
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={AVATAR_URL}
      alt="Carlos, tu asistente virtual"
      onError={() => setImgError(true)}
      className={`${sizeClass} shrink-0 rounded-full object-cover`}
    />
  );
}

export default function CarlosAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setMessages(parsed);
        }
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // ignore storage errors
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages, isLoading]);

  const sendText = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setInput('');
    setMessages((prev) => [
      ...prev,
      { id: `u_${Date.now()}`, role: 'user', content: trimmed },
    ]);
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 250));
      const answer = await getCarlosAnswer(trimmed);
      setMessages((prev) => [
        ...prev,
        { id: `a_${Date.now()}`, role: 'assistant', content: answer },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `a_${Date.now()}`,
          role: 'assistant',
          content: 'Tuve un inconveniente al procesar tu consulta. Intenta de nuevo.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setInput('');
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void sendText(input);
    }
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir a Carlos, tu asistente virtual"
        title="Carlos, tu asistente virtual"
        className="fixed bottom-5 right-6 z-[9999] flex flex-col items-center gap-1.5 bg-transparent p-0 transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus:outline-none"
      >
        <span className="w-[74px] h-[74px] rounded-full overflow-hidden border-2 border-blue-500/80 bg-[#1e293b] shadow-[0_10px_28px_rgba(0,0,0,0.55),0_0_20px_rgba(59,130,246,0.35)] flex items-center justify-center">
          <CarlosAvatar size="lg" />
        </span>
        <span className="whitespace-nowrap rounded-full border border-white/15 bg-[#0f172a]/95 px-3 py-1 text-xs font-semibold text-slate-100 shadow-lg">
          Carlos tu asistente virtual
        </span>
      </button>
    );
  }

  return (
    <section
      aria-label="Asistente virtual Carlos"
      className="fixed bottom-5 right-5 z-[9999] flex flex-col w-[390px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-2.5rem)] rounded-2xl overflow-hidden border border-white/15 bg-[#0f172a] text-slate-100 shadow-[0_20px_45px_rgba(0,0,0,0.55)]"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3.5 bg-white/5 border-b border-white/10">
        <div className="rounded-full overflow-hidden border-2 border-blue-500/60 bg-[#1e293b]">
          <CarlosAvatar size="md" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="m-0 text-sm font-semibold text-white">Carlos</h3>
          <span className="block text-xs font-medium text-emerald-400">
            ● Tu asistente virtual
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={resetChat}
            aria-label="Refrescar chat"
            title="Refrescar chat y volver al inicio"
            className="w-8 h-8 flex items-center justify-center rounded-md text-slate-400 hover:bg-blue-500/20 hover:text-blue-300 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar chat"
            className="px-2 py-1 rounded-md text-base leading-none text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Mode banner */}
      <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-950/50 border-b border-blue-500/30 text-xs font-semibold text-blue-200">
        <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
        <span>Carlos tu asistente virtual (Respuestas Automáticas)</span>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.length === 0 && (
          <div className="mt-2 px-2 text-center">
            <div className="w-[74px] h-[74px] mx-auto mb-3 rounded-full overflow-hidden border-2 border-blue-500/60 bg-[#1e293b] shadow-[0_4px_20px_rgba(59,130,246,0.3)] flex items-center justify-center">
              <CarlosAvatar size="lg" />
            </div>
            <p className="mb-1 text-base font-semibold text-slate-100">
              ¡Hola! Soy Carlos, tu asistente virtual.
            </p>
            <p className="mb-3 text-xs text-slate-400">
              Pregúntame sobre el sistema o selecciona una opción:
            </p>
            <ul className="flex flex-col gap-2 text-left">
              {INITIAL_SUGGESTIONS.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    type="button"
                    onClick={() => void sendText(suggestion)}
                    className="w-full flex items-center gap-2 text-left rounded-lg border border-blue-500/25 bg-slate-800/80 px-3 py-2 text-xs font-medium text-blue-300 hover:border-blue-400/60 hover:bg-blue-600/25 hover:text-white transition-colors"
                  >
                    <span className="text-blue-400" aria-hidden="true">
                      •
                    </span>
                    <span>{suggestion}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {messages.map((msg) =>
          msg.role === 'assistant' ? (
            <div key={msg.id} className="flex items-end gap-2">
              <div className="mb-0.5 rounded-full overflow-hidden border border-blue-500/40 bg-[#1e293b]">
                <CarlosAvatar size="sm" />
              </div>
              <div className="max-w-[82%] rounded-xl rounded-bl-sm bg-white/10 px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap text-slate-100">
                {msg.content}
              </div>
            </div>
          ) : (
            <div key={msg.id} className="flex justify-end">
              <div className="max-w-[82%] rounded-xl rounded-br-sm bg-blue-600 px-3.5 py-2.5 text-sm leading-relaxed text-white">
                {msg.content}
              </div>
            </div>
          )
        )}

        {isLoading && (
          <div className="flex items-end gap-2">
            <div className="mb-0.5 rounded-full overflow-hidden border border-blue-500/40 bg-[#1e293b]">
              <CarlosAvatar size="sm" />
            </div>
            <div className="rounded-xl rounded-bl-sm bg-white/10 px-3.5 py-2 text-sm text-slate-300">
              Escribiendo…
            </div>
          </div>
        )}

        {messages.length > 0 && !isLoading && (
          <div className="flex justify-center my-1">
            <button
              type="button"
              onClick={resetChat}
              className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/35 bg-slate-800/90 px-3.5 py-1.5 text-xs font-medium text-blue-300 hover:border-blue-400 hover:bg-blue-600/25 hover:text-white transition-colors"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
              <span>Regresar al menú de preguntas</span>
            </button>
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* Input area */}
      <div className="flex items-center gap-2 p-3 bg-black/30 border-t border-white/10">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu pregunta sobre el sistema aquí..."
          rows={1}
          disabled={isLoading}
          className="flex-1 min-h-[42px] max-h-28 resize-none rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => void sendText(input)}
          disabled={isLoading || !input.trim()}
          aria-label="Enviar mensaje"
          className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
        >
          ➤
        </button>
      </div>
    </section>
  );
}
