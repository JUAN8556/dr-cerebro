# Segundo cerebro y gestión del conocimiento | 1 fuente

## Resumen ejecutivo

La idea que vertebra este proyecto (Dr. Cerebro) viene de un post de Andrej Karpathy del 2 de abril de 2026 y su implementación práctica por Carlos Azaustre (5 de abril de 2026), construida sobre [[agentes-ia-y-herramientas-claude|OpenClaw]]. La tesis es simple y radical: **usa los LLMs no para *buscar* conocimiento, sino para *mantener* una base de conocimiento personal** — una wiki que se escribe y cura sola mientras tú actúas de editor jefe. No es RAG, no es un chatbot con memoria; es una segunda capa de cognición curada automáticamente a partir de todo lo que consumes.

El patrón esencial son dos carpetas. `raw/` guarda todo lo que entra sin procesar: bookmarks, artículos, notas de voz, links de redes. `wiki/` guarda artículos Markdown temáticos que el LLM genera y mantiene al día sintetizando lo que llega a `raw/`. La clave —y la parte contraintuitiva— es que los bookmarks sueltos no valen nada: el valor está en la **síntesis dentro de artículos vivos**, no en el acumulado de enlaces.

## Conceptos clave

**Wiki viva mantenida por LLM.** El LLM no es un índice de búsqueda, es el redactor. Cada vez que entra algo nuevo a `raw/`, un agente decide a qué artículo temático pertenece y lo *actualiza sintetizando*, no añadiendo bullets al final. Si el tema no existe todavía, crea un artículo nuevo. El usuario es editor jefe: aprueba, corrige y da feedback, pero no redacta.

**Ingesta sin fricción.** Si añadir algo requiere más de dos palabras o dos clicks, no lo haces. Por eso las fuentes tienen que ser capturas triviales: bookmarks de X sincronizados por cron, share sheet desde iPhone a una nota de Apple Notes, nota de voz desde Telegram. Cualquier paso extra mata el sistema.

**Categorización orgánica.** No predefines categorías; dejas que nazcan conforme lleguen temas. Categorías demasiado amplias diluyen (todo cabe y nada destaca); demasiado estrechas fragmentan (acabas con 50 artículos de 10 líneas). La regla es dejar que el propio volumen de fuentes dicte cuándo dividir un artículo grande.

**Feedback loop con outputs auditables.** Cuando el sistema genera un briefing o análisis largo, ese output se guarda con frontmatter registrando qué conocimiento se usó y qué faltó. Sin este paso, el sistema solo acumula texto; con él, aprende qué áreas de la wiki están incompletas y se auto-corrige.

**Crons de health check y linting.** Karpathy advierte de un riesgo: si el LLM escribe algo incorrecto y se guarda, la siguiente respuesta se apoya en ese error — los errores se acumulan en silencio. El antídoto son dos tareas automáticas. Un *health check* mensual revisa la wiki buscando contradicciones, afirmaciones obsoletas y duplicados. Un *lint* semanal detecta artículos que han crecido demasiado (candidatos a split) y sugiere reorganizaciones.

## Recursos destacados

**Carlos Azaustre — "Mi segundo cerebro: cómo construí una wiki que la IA mantiene sola"** (5 abr 2026). La implementación canónica que inspira Dr. Cerebro. Stack sobre OpenClaw en un VPS con tres fuentes de ingesta: bookmarks de X (cron cada 6 h, script Python → API de X → JSON), posts guardados de LinkedIn los domingos (contenedor Docker con Chromium y Playwright vía Chrome DevTools Protocol, sesión autenticada, proxy TCP propio para el upgrade a WebSocket), y notas de voz desde Telegram (audio OGG/Opus → faster-whisper en local, sin cloud → categorización por LLM → archivo en `raw/voice-notes/`). La wiki resultante son 12 artículos con categorías pragmáticas (AI & LLMs, AI Agents & Coding Tools, React & Next.js, Software Architecture, Content Creation, etc.), cada uno con resumen ejecutivo, conceptos clave con definiciones, recursos destacados con contexto, y fuentes enlazadas al final — exactamente la estructura que este proyecto imita. A fecha del artículo Carlos reportaba 1.055 bookmarks procesados y 12 artículos activos. Para el caso de Jano (libros con impresión bajo demanda + cómic bíblico completo, ver [[biblia-catolica-referencia]]), este patrón es especialmente potente: permite ir acumulando referencias técnicas, visuales (ver [[video-ia-y-cine-generativo]]) y narrativas sin que se conviertan en un pantano de favoritos muertos.

## Artículos relacionados

- [[agentes-ia-y-herramientas-claude]] — OpenClaw, skills y MCPs que alimentan este sistema
- [[herramientas-dev-y-productividad]] — utilidades open-source del stack
- [[biblia-catolica-referencia]] — proyecto creativo que consume del cerebro
- [[video-ia-y-cine-generativo]] — fuentes visuales para previsualización

## Fuentes

- [Carlos Azaustre — Mi segundo cerebro (X, 5 abr 2026)](https://x.com/carlosazaustre/status/2040855361410789749)
