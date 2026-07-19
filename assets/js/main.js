// ================================================================
// 1. DATOS DE LOS PROYECTOS (extraídos del index.html)
// ================================================================

// A continuación este es un array, contiene la información de cada uno.

const projectData = [
    {
        id: 1,
        nombre: "1. Introducción a la Web",
        descripcion: "Documentación técnica orientada a la comprensión de los fundamentos de la computación y el funcionamiento de Internet, abordando desde conceptos básicos como bits y bytes hasta protocolos, navegadores y la evolución de la World Wide Web.",
        imagen: "./assets/img/proyectos/docs-01-fundamentos-web.png",
        urlDoc: "https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/docs/1-introducci%C3%B3n-a-la-web-historia-y-funcionamiento-de-internet.md",
        urlProyecto: null
    },
    {
        id: 2,
        nombre: "2. Clon de Google",
        descripcion: "Proyecto práctico enfocado en la aplicación de HTML5 y CSS3 para la construcción de interfaces web, mediante el desarrollo de un clon de la página principal de Google, utilizando maquetación moderna con Flexbox y Grid.",
        imagen: "./assets/img/proyectos/04-google-clone.png",
        urlDoc: "https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/docs/2-html-y-css-clon-google.md",
        urlProyecto: "./projects/google-clone/index.html"
    },
    {
        id: 3,
        nombre: "3. Fundamentos CSS: Portfolio Personal",
        descripcion: "Exploración de los principios fundamentales del diseño visual en la web, incluyendo tipografía, colores, layouts responsivos y animaciones, con el objetivo de construir interfaces atractivas, funcionales y adaptables a distintos dispositivos.",
        imagen: "./assets/img/proyectos/05-portafolio.png",
        urlDoc: "https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/docs/3-fundamentos-css.md",
        urlProyecto: "./projects/portfolio/index.html"
    },
    {
        id: 4,
        nombre: "4. HTML Semántico",
        descripcion: "Apuntes y prácticas orientadas a la escritura de código HTML semántico y estructurado, analizando su impacto en accesibilidad, SEO y mantenibilidad dentro del desarrollo web moderno.",
        imagen: "./assets/img/proyectos/03-fundamentos-html.png",
        urlDoc: "https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/docs/4-html.md",
        urlProyecto: "./projects/fundamentos-html/index.html"
    },
    {
        id: 5,
        nombre: "5. Computación e Informática Básica",
        descripcion: "Documentación introductoria sobre el funcionamiento general de los computadores, el uso seguro del sistema operativo, la gestión de archivos, la instalación de software y conceptos esenciales de ciberseguridad básica.",
        imagen: "./assets/img/proyectos/docs-02-computadores-e-informatica-basica.png",
        urlDoc: "https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/docs/5-computadores-e-informatica-basica.md",
        urlProyecto: null
    },
    {
        id: 6,
        nombre: "6. Fundamentos Ingeniería de Software",
        descripcion: "Recopilación de conceptos clave de la ingeniería de software, abarcando desde fundamentos de computación e Internet hasta nociones generales sobre sistemas, arquitectura y tecnologías actuales.",
        imagen: "./assets/img/proyectos/docs-03-fundamentos-de-ingenieria-de-software.png",
        urlDoc: "https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/docs/6-fundamentos-ingenieria-software.md",
        urlProyecto: null
    },
    {
        id: 7,
        nombre: "7. Programación Básica (Mokepon)",
        descripcion: "Proyecto en desarrollo orientado a la consolidación de los fundamentos de la programación mediante JavaScript, HTML y CSS, aplicando lógica, estructuras de control y manipulación del DOM.",
        imagen: "./assets/img/proyectos/07-mokepon.png",
        urlDoc: "https://github.com/santiagoencodigo/desarrollo-web-profesional/blob/main/projects/programacion-basica/README.md",
        urlProyecto: "./projects/programacion-basica/mokepon/mokepon.html"
    },
    {
        id: 8,
        nombre: "8. Terminal y Línea de Comandos",
        descripcion: "Documentación en construcción sobre el uso de la terminal y la línea de comandos para la gestión del sistema operativo, archivos, procesos y herramientas esenciales dentro del flujo de trabajo en desarrollo de software.",
        imagen: "./assets/img/proyectos/docs-04-terminal-y-linea-de-comandos.png",
        urlDoc: "https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/docs/8-terminal-y-linea-de-comandos.md",
        urlProyecto: null
    },
    {
        id: 9,
        nombre: "9. Fundamentos Javascript",
        descripcion: "Sección pendiente de desarrollo, destinada al estudio de los conceptos fundamentales de JavaScript y su aplicación práctica dentro del desarrollo web.",
        imagen: "./assets/img/proyectos/06-piedra-papel-tijera.png",  // Nota: usamos esa imagen porque es la que tienes
        urlDoc: "https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/docs/9-fundamentos-js.md",
        urlProyecto: "./projects/fundamentos-js/index.html"
    },
    {
        id: 10,
        nombre: "10. Git y GitHub",
        descripcion: "Módulo pendiente de desarrollo enfocado en la documentación del uso de Git y GitHub como herramientas esenciales para el control de versiones y la colaboración en proyectos de software.",
        imagen: "./assets/img/proyectos/docs-06-git-y-github.png",
        urlDoc: "https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/docs/10-git-y-github.md",
        urlProyecto: null
    },
    {
        id: 11,
        nombre: "11. AnimeShop (Frontend)",
        descripcion: "Módulo de desarrollo en HTML, CSS y Bootstrap. Simulación de una tienda temática de anime (AnimeShop) con diseño responsive y carrito de compras.",
        imagen: "./assets/img/animeshop/01-hero.png",   // Asegúrate de que la extensión sea .png (o .PNG)
        urlDoc: "https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/tree/main/frontend/AnimeShop",
        urlProyecto: "./projects/animeshop/index.html"
    },
    {
        id: 12,
        nombre: "12. Instant Talent Outsourcing",
        descripcion: "Módulo de desarrollo en HTML, CSS y JavaScript Vanilla. Simulación de una empresa de outsourcing y gestión del talento humano (Instant Talent) con diseño responsive, menú móvil, animaciones y secciones informativas.",
        imagen: "./assets/img/instant-talent/01-header.png",  // Respeta mayúsculas si el archivo es .PNG
        urlDoc: "https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/tree/main/frontend/Instant-Talent-Outsourcing",
        urlProyecto: "./projects/instant-talent-outsourcing/index.html"
    }
];

// ================================================================
// 2. CONFIGURACIÓN DEL GRAFO
// ================================================================
const container = document.getElementById('graph-container');
const width = window.innerWidth;
const height = window.innerHeight - 76 - 50; // resto navbar y footer

const svg = d3.select('#graph-container')
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .style('background', 'transparent');

const g = svg.append('g');

// Zoom con límites (mínimo 0.5, máximo 2.0)
const zoom = d3.zoom()
    .scaleExtent([0.5, 2.0])
    .on('zoom', (event) => {
        g.attr('transform', event.transform);
    });
svg.call(zoom);

// ================================================================
// 3. SIMULACIÓN DE FUERZAS
// ================================================================
const nodes = projectData.map(d => ({ ...d }));
const links = [
    // Secuencia lineal
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 7 },
    { source: 7, target: 8 },
    { source: 8, target: 9 },
    { source: 9, target: 10 },
    { source: 10, target: 11 },
    { source: 11, target: 12 },
    // Conexiones temáticas
    { source: 1, target: 5 },
    { source: 1, target: 6 },
    { source: 2, target: 3 },
    { source: 4, target: 9 },
    { source: 5, target: 8 },
    { source: 6, target: 10 },
    { source: 7, target: 9 },
    { source: 7, target: 11 },
    { source: 7, target: 12 },
    { source: 8, target: 10 },
    { source: 9, target: 11 },
    { source: 9, target: 12 }
];

const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(180).strength(0.6))
    .force('charge', d3.forceManyBody().strength(-400))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(50));

// ================================================================
// 4. DIBUJAR ENLACES
// ================================================================
const linkElements = g.append('g')
    .selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('class', 'link');

// ================================================================
// 5. DIBUJAR NODOS
// ================================================================
const nodeGroups = g.append('g')
    .selectAll('g')
    .data(nodes)
    .enter()
    .append('g')
    .attr('class', 'node-group')
    .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
    );

nodeGroups.append('circle')
    .attr('class', 'node-circle')
    .attr('r', 22)
    .attr('fill', '#1A1A24')
    .attr('stroke', '#7A7A8A')
    .attr('stroke-width', 1.5);

nodeGroups.append('text')
    .attr('class', 'node-label')
    .attr('dy', 32)
    .text(d => d.nombre.length > 28 ? d.nombre.slice(0, 26) + '…' : d.nombre);

// ================================================================
// 6. TOOLTIP / CARD DE INFORMACIÓN
// ================================================================
const tooltip = document.getElementById('tooltip');

function showTooltip(event, d) {
    const hasProject = d.urlProyecto && d.urlProyecto !== '';
    const hasDoc = d.urlDoc && d.urlDoc !== '';

    tooltip.innerHTML = `
        <img class="tooltip-img" src="${d.imagen}" alt="${d.nombre}" loading="lazy" onerror="this.classList.add('error')" />
        <div class="tooltip-title">${d.nombre}</div>
        <div class="tooltip-desc">${d.descripcion}</div>
        <div class="tooltip-buttons">
            ${hasDoc ? `<a href="${d.urlDoc}" target="_blank">📄 Documentación</a>` : ''}
            ${hasProject ? `<a href="${d.urlProyecto}" target="_blank">🚀 Proyecto</a>` : ''}
            ${!hasProject && !hasDoc ? '<span class="disabled">Sin enlaces</span>' : ''}
        </div>
    `;
    tooltip.classList.add('visible');

    // Posicionar el tooltip cerca del cursor, con ajustes para móvil
    const [x, y] = d3.pointer(event, container);
    let left = x + 16;
    let top = y - 10;
    const tw = tooltip.offsetWidth || 280;
    const th = tooltip.offsetHeight || 200;
    // Si es móvil, centrar horizontalmente
    if (window.innerWidth < 600) {
        left = (window.innerWidth - tw) / 2;
        top = Math.min(Math.max(y - th / 2, 80), window.innerHeight - th - 60);
    } else {
        if (left + tw > window.innerWidth - 20) left = x - tw - 16;
        if (top + th > window.innerHeight - 50) top = window.innerHeight - th - 60;
        if (top < 76) top = 76 + 10;
    }
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
}

function hideTooltip() {
    tooltip.classList.remove('visible');
}

// ================================================================
// 7. INTERACCIÓN: HOVER con resaltado de vecinos y enlaces
// ================================================================
nodeGroups
    .on('mouseenter', function(event, d) {
        // Obtener vecinos
        const neighbors = new Set();
        links.forEach(l => {
            if (l.source.id === d.id) neighbors.add(l.target.id);
            if (l.target.id === d.id) neighbors.add(l.source.id);
        });

        // Resaltar nodos
        nodeGroups.selectAll('.node-circle')
            .attr('stroke', nd => {
                if (nd.id === d.id) return '#ffffff';
                if (neighbors.has(nd.id)) return '#c0c0d0';
                return '#3A3A4A';
            })
            .attr('fill', nd => {
                if (nd.id === d.id) return '#2A2A35';
                if (neighbors.has(nd.id)) return '#2A2A35';
                return '#1A1A24';
            })
            .attr('opacity', nd => {
                if (nd.id === d.id || neighbors.has(nd.id)) return 1;
                return 0.4;
            });

        // Resaltar enlaces
        linkElements
            .attr('class', l => {
                const isConnected = (l.source.id === d.id || l.target.id === d.id);
                const isBetweenNeighbors = (neighbors.has(l.source.id) && neighbors.has(l.target.id));
                if (isConnected || isBetweenNeighbors) return 'link highlight';
                return 'link dim';
            });

        showTooltip(event, d);
    })
    .on('mousemove', function(event, d) {
        // Actualizar posición del tooltip
        const [x, y] = d3.pointer(event, container);
        let left = x + 16;
        let top = y - 10;
        const tw = tooltip.offsetWidth || 280;
        const th = tooltip.offsetHeight || 200;
        if (window.innerWidth < 600) {
            left = (window.innerWidth - tw) / 2;
            top = Math.min(Math.max(y - th / 2, 80), window.innerHeight - th - 60);
        } else {
            if (left + tw > window.innerWidth - 20) left = x - tw - 16;
            if (top + th > window.innerHeight - 50) top = window.innerHeight - th - 60;
            if (top < 76) top = 76 + 10;
        }
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    })
    .on('mouseleave', function() {
        // Restaurar estilos
        nodeGroups.selectAll('.node-circle')
            .attr('stroke', '#7A7A8A')
            .attr('fill', '#1A1A24')
            .attr('opacity', 1);
        linkElements
            .attr('class', 'link');
        hideTooltip();
    })
    .on('click', function(event, d) {
        // Abrir proyecto si existe, sino documentación
        if (d.urlProyecto) {
            window.open(d.urlProyecto, '_blank');
        } else if (d.urlDoc) {
            window.open(d.urlDoc, '_blank');
        }
    });

// ================================================================
// 8. ACTUALIZAR POSICIONES EN CADA TICK
// ================================================================
simulation.on('tick', () => {
    linkElements
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

    nodeGroups
        .attr('transform', d => `translate(${d.x},${d.y})`);
});

// ================================================================
// 9. FUNCIONES DE ARRASTRE
// ================================================================
function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

// ================================================================
// 10. BOTÓN CENTRAR (mejorado el 11/07/26)
// ================================================================
document.getElementById('resetViewBtn').addEventListener('click', () => {
    // Primero, restaurar el zoom
    svg.transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity.translate(0, 0).scale(1))
        .on('end', () => {
            // Después de la animación, re-centrar los nodos
            simulation.force('center', d3.forceCenter(width / 2, height / 2));
            simulation.alpha(0.8).restart();
        });
});

// ================================================================
// 11. REAJUSTE AL REDIMENSIONAR
// ================================================================
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight - 76 - 50;
    svg.attr('viewBox', `0 0 ${newWidth} ${newHeight}`);
    simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2));
    simulation.alpha(0.3).restart();
});

// ================================================================
// 12. PARTICLES.JS (fondo)
// ================================================================
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": ["#a0a0a0", "#ffffff", "#d0d0d0"] },
        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
        "opacity": { "value": 0.5, "random": false, "anim": { "enable": false } },
        "size": { "value": 3, "random": true, "anim": { "enable": false } },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#a0a0a0",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": { "enable": false }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "repulse": { "distance": 100, "duration": 0.4 },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});

// Si estas aqui, quiere decir que estas leyendo el código. ¿Interesante no? Lastima que es muy probable que yo no me de cuenta...