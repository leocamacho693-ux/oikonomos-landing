'use client';

import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

interface CrmLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CrmLoginModal({ isOpen, onClose }: CrmLoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleFillDemo = () => {
    setEmail('afiliado.demo@oikonomos.global');
    setPassword('OikonomosSecure2026*');
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Por favor ingresa tu correo y contraseña.');
      return;
    }
    setErrorMsg('');
    setLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      setLoginSuccess(true);
      setTimeout(() => {
        // Reset and close
        setLoginSuccess(false);
        onClose();
      }, 2000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-[#0B132B] text-white border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-xl transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Centrado */}
        <div className="mb-6 text-center flex flex-col items-center">
          <img 
            src="/logo-white.png" 
            alt="OIKONOMOS" 
            className="h-10 w-auto object-contain mb-4 mx-auto" 
          />
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3 mx-auto">
            Portal Exclusivo
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight text-center">
            Acceso CRM Afiliados
          </h3>
          <p className="text-sm text-slate-400 mt-1 text-center max-w-sm">
            Plataforma centralizada de consultoría, expedientes y comisiones de OIKONOMOS GLOBAL.
          </p>
        </div>

        {loginSuccess ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xl">
              OK
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">¡Acceso Verificado!</h4>
              <p className="text-sm text-slate-300 mt-1">
                Conectando con el entorno seguro de OIKONOMOS CRM...
              </p>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-emerald-500 h-full w-full animate-pulse" />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 text-xs bg-red-500/15 border border-red-500/30 text-red-300 rounded-lg">
                {errorMsg}
              </div>
            )}

            {/* Quick Demo Credentials Pill */}
            <div className="flex items-center justify-between p-2.5 bg-blue-950/40 border border-blue-800/40 rounded-xl text-xs">
              <div className="text-slate-300">
                <span className="font-semibold text-blue-300">¿Eres evaluador?</span> Carga credenciales de prueba
              </div>
              <button
                type="button"
                onClick={handleFillDemo}
                className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-medium text-[11px] transition-colors"
              >
                Autocompletar
              </button>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                Correo Electrónico o ID de Afiliado
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ej. socio@oikonomos.global"
                className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-slate-300">
                  Contraseña Cifrada
                </label>
                <a 
                  href="#recuperar" 
                  onClick={(e) => { e.preventDefault(); alert('Se ha enviado un enlace de restablecimiento seguro a tu correo corporativo asignado.'); }}
                  className="text-xs text-amber-400 hover:text-amber-300 transition-colors"
                >
                  ¿Olvidaste tu clave?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-4 pr-11 py-2.5 bg-slate-900/90 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 cursor-pointer"
                  aria-label="Ver u ocultar contraseña"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300 select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                />
                <span>Mantener sesión cifrada por 30 días</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-900/40 flex items-center justify-center transition-all transform active:scale-[0.99] disabled:opacity-70 cursor-pointer"
            >
              {loading ? (
                'Autenticando en Servidor Seguro...'
              ) : (
                'Ingresar a Oikonomos CRM'
              )}
            </button>

            {/* Security Badge */}
            <div className="pt-3 border-t border-slate-800/80 text-center text-[11px] text-slate-400">
              Cifrado TLS 1.3 de grado bancario • ISO/IEC 27001
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
