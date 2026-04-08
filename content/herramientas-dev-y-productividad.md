# Herramientas dev y productividad | 3 fuentes

Última actualización: 2026-04-08

## Resumen ejecutivo

Pequeño repositorio de utilidades open-source que resuelven problemas concretos sin necesidad de IA ni de suscripciones. Son la contracultura útil frente al reflejo de "esto lo hago con un LLM": cuando existe una CLI o una app que lo resuelve gratis, es la opción correcta.

## Conceptos clave

**Principio "no uses IA si ya existe la herramienta".** Una parte creciente del ruido es gente reinventando con LLMs cosas que ya están resueltas con software tradicional. La regla útil es buscar primero la herramienta open-source madura y usar IA solo cuando añade valor real (síntesis, decisión, generación).

## Recursos destacados

**yt-dlp** (IseaMan @IseaTw2, 24 mar 2026, citando el repo). Descargador feature-rich de audio/video por línea de comandos. Open-source, gratis, soporta cientos de sitios. Es el fork activo y mantenido de youtube-dl. Repo: https://github.com/yt-dlp/yt-dlp. Para Jano: útil para archivar material de referencia visual y sonora que luego alimenta el [[segundo-cerebro-y-gestion-del-conocimiento|cerebro]] o el cómic, sin depender de apps cerradas.

**PairPods** (Tom Dörr @tom_doerr, 5 abr 2026). App para Mac que permite compartir audio Bluetooth entre varios dispositivos simultáneamente. Open-source: https://github.com/wozniakpawel/PairPods. Caso de uso pequeño pero real cuando trabajas en equipo o revisas un mismo audio con otra persona sin molestar al entorno.

**Screens Connect 5** (Edovia, help oficial, ingestado 8 abr 2026). Utilidad gratuita de Edovia que configura automáticamente un Mac para quedar accesible por Internet desde el cliente **Screens** (VNC/RDP premium para macOS e iOS) sin tocar port forwarding manual: descubre el router, abre los puertos vía NAT-PMP/UPnP y registra un hostname dinámico del tipo `nombre.screensconnect.com` ligado a la cuenta de Edovia. Resuelve de un golpe el problema clásico del acceso remoto doméstico — alternativa limpia a TeamViewer o AnyDesk cuando ya vives dentro del ecosistema Apple. Página oficial de instalación: https://help.edovia.com/es/screens-connect-5/getting-started/installing-mac. *Nota: el contenido exacto de la guía quedó pendiente de reintento — el dominio estaba bloqueado en la ventana de ingesta del 8 abr.*

## 🎯 Aplicabilidad a mis proyectos

Screens Connect encaja directamente con el flujo de Jano: permite dejar el Mac del estudio corriendo renders, procesamiento de imágenes para la web de POD o builds del cómic bíblico, y retomarlos desde otro dispositivo sin depender de servicios cerrados ni exponer el router manualmente. Es la pieza de acceso remoto natural para un desarrollador solo con un Mac como caballo de batalla.

## Artículos relacionados

- [[agentes-ia-y-herramientas-claude]] — el otro lado del stack: IA, MCPs, skills
- [[segundo-cerebro-y-gestion-del-conocimiento]] — dónde se integran estas herramientas

## Fuentes

- [IseaMan — yt-dlp lo hace todo gratis](https://x.com/iseatw2/status/2036503805429174509)
- [Tom Dörr — PairPods](https://x.com/tom_doerr/status/2040942791270813831)
- [Edovia — Instalar Screens Connect 5 en Mac](https://help.edovia.com/es/screens-connect-5/getting-started/installing-mac)
