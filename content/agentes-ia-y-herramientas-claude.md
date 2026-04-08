# Agentes IA y herramientas Claude | 5 fuentes

## Resumen ejecutivo

Panorama de abril de 2026 sobre el ecosistema de agentes IA centrado en Claude y OpenClaw. Se consolidan tres tendencias: los **skills** (paquetes de instrucciones que convierten a Claude en un especialista — investigador, diseñador, etc.), los **MCPs** que dan herramientas nativas a los agentes (diseño de UI, ingesta de documentos, control de navegador), y la personalización profunda del comportamiento del agente (archivos tipo `SOUL.md` que definen tono y opiniones). En paralelo circula un rumor fuerte sobre un nuevo modelo de Anthropic llamado **Claude Mythos** con saltos notables de inteligencia y eficiencia en tokens — sin confirmación oficial todavía.

## Conceptos clave

**MCP (Model Context Protocol).** Interfaz estándar que permite a un modelo como Claude llamar herramientas externas (diseño, búsqueda, ingesta de docs, control de navegador). Los MCPs se enchufan al editor o al agente y le añaden capacidades nativas sin necesidad de alternar entre aplicaciones.

**Skill.** Paquete de instrucciones y recursos que activa un comportamiento especializado en Claude. A diferencia de un MCP (que añade *herramientas*), un skill añade *conocimiento y protocolo*: cómo abordar un tipo concreto de tarea.

**OpenClaw.** Agente autónomo 24/7 pensado para correr en un VPS. Soporta archivos de personalidad (`SOUL.md`) que moldean el tono, la fortaleza de opiniones y el estilo de respuesta del agente. Es el runtime sobre el que Carlos Azaustre montó su [[segundo-cerebro-y-gestion-del-conocimiento|segundo cerebro]], y el mismo sobre el que PeladoNerd publicó un tutorial largo.

**SOUL.md.** Archivo de configuración de personalidad para agentes OpenClaw. Permite pasar de respuestas "corporate sludge" a un agente con opiniones fuertes, instintos más agudos y tono más humano. La doc oficial vive en docs.openclaw.ai.

**Claude Mythos.** Nombre que circula (abril 2026) para un presunto nuevo modelo de Anthropic. Las afirmaciones son: la mayor inteligencia por modelo hasta la fecha y la menor cantidad de tokens usados por tarea — un salto de eficiencia grande. Se atribuye también capacidad notable de descubrimiento de zero-days. Estado: rumor/filtración, no anuncio oficial.

## Recursos destacados

**MCP de diseño de UI para Claude Code** (xIA, @xiathis, 7 abr 2026). La crítica clásica a Claude Code era su diseño de interfaces genérico; este nuevo MCP le añade una herramienta propia de diseño que lee el sistema de diseño ya existente en el proyecto y genera interfaces completas directamente en código, sin alternar entre Figma y el editor y sin romper componentes ya escritos. Relevante para cualquier desarrollo web — incluido el proyecto de venta de libros con impresión bajo demanda de Jano, donde componentes UI consistentes son críticos.

**/research-docs de LlamaIndex** (Erick @ErickSky citando a @jerryjliu0, 7 abr 2026). Skill que convierte a Claude en un investigador profesional: le das una carpeta de documentos densos y devuelve un reporte con citas palabra por palabra, bounding boxes que marcan exactamente dónde aparece cada dato en la página original, y un reporte HTML auditable. Corre sobre **LiteParse**, el parser local ultrarrápido de LlamaIndex que no necesita modelos de IA. Pensado para abogados, analistas, investigadores y builders de agentes — pero también extremadamente útil para trabajar con corpus grandes tipo Biblia o comentarios patrísticos en el proyecto del cómic bíblico (ver [[biblia-catolica-referencia]]), porque las citas trazables son justo lo que hace falta para un cómic basado en texto sagrado.

**SOUL.md — Personality Guide de OpenClaw** (@openclaw, 5 abr 2026). El upgrade "Molty spicy SOUL" cambia radicalmente el output de un agente: menos respuestas de consultor corporativo, más opiniones claras e instintos editoriales más afilados. Es el tipo de configuración que importa cuando el agente tiene que tomar decisiones de criterio y no solo ejecutar.

**Claude Mythos — rumor de nuevo modelo** (Freddy Vega @freddier, 7 abr 2026). Freddy lo matiza con un "si esto es verdad" pero lo describe como un salto gigante en inteligencia-por-token y menciona capacidades ofensivas (zero-days) que lo harían comparable a un arma estratégica. Tomarlo con pinzas hasta anuncio oficial de Anthropic, pero vale la pena seguir el hilo.

**Tutorial completo de OpenClaw por PeladoNerd** (Pablo Fredrikson @PeladoNerd, 8 abr 2026). 74 minutos en YouTube, gratis, sin ads ni integraciones (https://youtu.be/JVA09oUTXzM). Punto de entrada directo para montar un agente 24/7 tipo el que usa Carlos Azaustre para su [[segundo-cerebro-y-gestion-del-conocimiento|segundo cerebro]].

## Artículos relacionados

- [[segundo-cerebro-y-gestion-del-conocimiento]] — el sistema completo sobre OpenClaw
- [[herramientas-dev-y-productividad]] — utilidades complementarias al stack
- [[video-ia-y-cine-generativo]] — otra rama de IA generativa relevante

## Fuentes

- [xIA — MCP de diseño para Claude Code](https://x.com/xiathis/status/2041599641620488449)
- [Erick — /research-docs skill](https://x.com/ericksky/status/2041691680076681669)
- [OpenClaw — SOUL.md Personality Guide](https://x.com/openclaw/status/2041003999856406714)
- [Freddy Vega — rumor Claude Mythos](https://x.com/freddier/status/2041657708957593653)
- [PeladoNerd — tutorial OpenClaw 74 min](https://x.com/peladonerd/status/2041892794273243491)
