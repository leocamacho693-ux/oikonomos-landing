# OIKONOMOS GLOBAL — Landing Page Corporativa B2B & Ecosistema CRM

Plataforma web de alta conversión y presencia corporativa para la firma consultora multidisciplinaria **OIKONOMOS GLOBAL**, desarrollada con estándares de arquitectura Frontend Senior, Next.js (App Router), React, Tailwind CSS y Lucide Icons.

---

## 🏛️ Identidad Visual & Estilo

- **Paleta de Colores Corporativa:**
  - **Fondo Principal:** Blanco puro (`#FFFFFF`) y Slate ultraclaro (`#F8FAFC`).
  - **Azul Corporativo Intenso:** `#1E3A8A` y variantes en degradados ejecutivos.
  - **Sección Oscura de Alto Contraste:** `#0B132B` (Navy Profundo) y `#060B18` para el Ecosistema CRM y Footer.
  - **Acentos de Alto Impacto:** Ámbar / Dorado Ejecutivo (`#D97706`, `#F59E0B`) y Esmeralda de Rendimiento (`#059669`, `#10B981`).
- **Tipografía:** Sans-serif geométrica de alta legibilidad ejecutiva con jerarquía visual de nivel FinTech.

---

## 🚀 Estructura de Secciones

1. **Navbar Fijo con Efecto Glassmorphism:**
   - Isotipo geométrico minimalista en degradado azul con prisma central y punto de estado en vivo.
   - Navegación fluida con scroll suave: *Inicio*, *Áreas de Consultoría*, *Ecosistema CRM*, *Afiliados*, *Contacto*.
   - Botón Secundario Outline: **"Acceso CRM Afiliados"** con ícono de candado, que abre el **Modal Cifrado de Autenticación**.
   - Botón Primario: **"Agendar Diagnóstico"** que posiciona de forma automática en el formulario.
   - Menú móvil desplegable adaptativo.

2. **Hero Section (Primera Impresión de Alto Impacto):**
   - Badge superior con indicador de pulso en vivo: *"Consultoría Integral & Tecnología de Gestión"*.
   - Título principal H1: *"Impulsamos el crecimiento estratégico de tu empresa con respaldo multidisciplinario."*
   - Subtítulo enfocado en la combinación de las 7 áreas clave y la plataforma CRM exclusiva para afiliados.
   - Composición visual estilo **Dashboard Ejecutivo flotante** con métricas clave (+34.8% EBITDA), expedientes en curso en tiempo real y badges de confianza.
   - Barra inferior de indicadores de validación (+140 empresas, 7 áreas, 98.4% efectividad, +$45M capital estructurado).

3. **Nuestras Áreas de Consultoría (Grid de 7 Tarjetas Especializadas):**
   - Filtros de visualización por categorías y vista integral.
   - **Las 7 disciplinas requeridas:**
     1. **Consultoría Administrativa:** Procesos internos, estructura organizacional y eficiencia operativa.
     2. **Consultoría Agropecuaria:** Costos por hectárea, modernización y productividad del campo.
     3. **Consultoría Ambiental:** Cumplimiento normativo, EIA, huella de carbono y certificaciones ESG.
     4. **Consultoría Contable:** Auditoría, estructuración financiera, control tributario y NIIF.
     5. **Consultoría de Marketing Digital:** Embudos B2B/B2C, adquisición y posicionamiento de marca.
     6. **Consultoría Económica:** Valoración DCF, análisis micro/macroeconómico y proyectos de inversión.
     7. **Consultoría Legal:** Blindaje jurídico corporativo, contratos mercantiles y propiedad intelectual.
   - Cada tarjeta incluye entregables clave, KPI cuantificado y botón de enlace interactivo *"Solicitar asesoría →"* que selecciona automáticamente el área en el formulario de contacto.

4. **Sección Destacada: Ecosistema CRM OIKONOMOS para Afiliados (Fondo `#0B132B`):**
   - Propuesta de valor tecnológica para aliados y consultores.
   - Checklist de capacidades de nivel empresarial con checks esmeralda.
   - **Mockup UI Interactivo y Funcional:**
     - **Pestaña Resumen Ejecutivo:** Tarjetas de valor de cartera ($1.84M USD), expedientes, comisiones generadas ($24,920 USD) y barras de avance de rendimiento.
     - **Pestaña Mis Casos:** Tabla de expedientes con filtro dinámico por texto, barras de progreso, líderes de proyecto y estatus por colores.
     - **Pestaña Afiliados:** Desglose de aliados, comisiones por socio y módulo para **copiar el enlace de referido exclusivo** (`crm.oikonomos.global/portal/ref/AG-8942`) con confirmación en portapapeles.
   - CTAs directos para Iniciar Sesión en el CRM o Solicitar Afiliación.

5. **¿Cómo funciona el modelo de Afiliados y Clientes? (3 Pasos):**
   - **Paso 01: Diagnóstico o Afiliación** (Evaluación preliminar, NDA y alcance personalizado).
   - **Paso 02: Activación en el CRM** (Credenciales corporativas cifradas y asignación de líderes).
   - **Paso 03: Ejecución y Resultados** (Entregables por hitos, reportes y optimización continua).

6. **Sección de Contacto y Conversión (Formulario Interactivo):**
   - Selector dinámico de perfil: *"Busco Consultoría para mi Empresa"* vs *"Quiero ser Afiliado / Aliado B2B"*.
   - Selector interactivo multi-selección de las 7 áreas de consultoría con chips y opción de selección 360°.
   - Campos de Nombre completo, Empresa, Correo Corporativo, Teléfono / WhatsApp y Detalle del proyecto.
   - Validación y confirmación visual con número de ticket generado.
   - Tarjetas de información de sede central, soporte 24/7 y garantías de confidencialidad.

7. **Modal Funcional "Acceso CRM Afiliados":**
   - Autenticación con cifrado visual.
   - Campos de usuario/correo y contraseña con botón para visualizar u ocultar.
   - Botón **"Autocompletar"** para evaluadores (`afiliado.demo@oikonomos.global`), simulación de carga con spinner y confirmación de acceso exitoso.

8. **Footer Corporativo:**
   - Identidad de marca, enlaces directos a las 7 consultorías, acceso rápido al CRM, datos de contacto y enlaces a avisos legales.

---

## 🛠️ Comandos de Ejecución

Para iniciar el servidor de desarrollo local:

\`\`\`bash
pnpm dev
# o con npm:
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la plataforma.

Para compilar a producción:

\`\`\`bash
pnpm build
pnpm start
\`\`\`
