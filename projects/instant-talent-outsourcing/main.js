/**
 * INSTANT TALENT - JavaScript Principal
 * Funcionalidades: menú hamburguesa, tracking de CTAs, accesibilidad
 */

// ========================================
// VARIABLES GLOBALES
// ========================================
const hamburgerBtn = document.querySelector('.header__hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
const ctaButtons = document.querySelectorAll('[data-cta]');

// Detectar preferencia de movimiento reducido
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ========================================
// MENÚ HAMBURGUESA - Toggle y Accesibilidad
// ========================================

/**
 * Abre o cierra el menú mobile
 */
function toggleMobileMenu() {
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    
    // Toggle aria-expanded
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle aria-hidden en el menú
    mobileMenu.setAttribute('aria-hidden', isExpanded);
    
    // Prevenir scroll del body cuando el menú está abierto
    document.body.style.overflow = isExpanded ? '' : 'hidden';
    
    // Focus trap simple: enfocar primer enlace al abrir
    if (!isExpanded && mobileMenuLinks.length > 0) {
        setTimeout(() => {
            mobileMenuLinks[0].focus();
        }, 300);
    }
    
    console.log(`Menú móvil ${isExpanded ? 'cerrado' : 'abierto'}`);
}

/**
 * Cierra el menú mobile
 */
function closeMobileMenu() {
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    console.log('Menú móvil cerrado');
}

// Event listener para botón hamburguesa
if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
}

// Cerrar menú al hacer click en un enlace
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Cerrar menú con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburgerBtn.getAttribute('aria-expanded') === 'true') {
        closeMobileMenu();
        hamburgerBtn.focus(); // Devolver foco al botón
    }
});

// Cerrar menú al hacer click fuera de él
document.addEventListener('click', (e) => {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnHamburger = hamburgerBtn.contains(e.target);
    const isMenuOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    
    if (!isClickInsideMenu && !isClickOnHamburger && isMenuOpen) {
        closeMobileMenu();
    }
});

// ========================================
// TRACKING DE CTAs - Console logs
// ========================================

/**
 * Registra clicks en botones CTA
 */
function trackCTAClick(ctaName) {
    console.log(`[CTA CLICKED] Botón: ${ctaName}`);
    console.log(`[TIMESTAMP] ${new Date().toISOString()}`);
    
    // Aquí podrías integrar Google Analytics, Meta Pixel, etc.
    // Ejemplo: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': ctaName });
}

// Event listeners para todos los botones CTA
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const ctaName = e.currentTarget.getAttribute('data-cta');
        trackCTAClick(ctaName);
        
        // Simular navegación (en producción esto iría a la página correspondiente)
        e.preventDefault();
        alert(`Navegando a: ${ctaName}`);
    });
});

// ========================================
// ANIMACIONES Y EFECTOS VISUALES
// ========================================

/**
 * Efecto parallax suave en el hero (DESHABILITADO)
 * Se puede habilitar si se desea, pero puede causar problemas de scroll
 */
function initParallax() {
    // Función deshabilitada para evitar problemas de scroll
    // Si deseas habilitarla, descomenta el código y ajusta el parallaxSpeed
    
    /*
    if (prefersReducedMotion) {
        console.log('Parallax deshabilitado: usuario prefiere movimiento reducido');
        return;
    }
    
    const heroVisual = document.querySelector('.hero__visual-decoration');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.3;
        
        if (heroVisual && scrolled < 1000) {
            heroVisual.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
    
    console.log('Efecto parallax inicializado');
    */
    
    console.log('Efecto parallax deshabilitado para mejor experiencia de scroll');
}

// No inicializar parallax por defecto
// initParallax();

// ========================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ========================================

/**
 * Scroll suave para enlaces internos
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Ignorar el skip link
            if (targetId === '#main-content') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                
                // Cerrar menú mobile si está abierto
                if (window.innerWidth < 769) {
                    closeMobileMenu();
                }
                
                // Scroll suave
                targetSection.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
                
                console.log(`Navegando a sección: ${targetId}`);
            }
        });
    });
}

// Inicializar smooth scroll
initSmoothScroll();

// ========================================
// MANEJO DE RESIZE - Cerrar menú en desktop
// ========================================

/**
 * Cierra el menú mobile si la ventana se redimensiona a desktop
 */
function handleResize() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
}

// Debounce para optimizar el evento resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 250);
});

// ========================================
// INICIALIZACIÓN
// ========================================

/**
 * Función principal de inicialización
 */
function init() {
    console.log('🚀 Instant Talent - Sitio inicializado correctamente');
    console.log(`📱 Viewport: ${window.innerWidth}x${window.innerHeight}`);
    console.log(`♿ Movimiento reducido: ${prefersReducedMotion ? 'Sí' : 'No'}`);
    
    // Verificar que todos los elementos críticos existen
    if (!hamburgerBtn) console.warn('⚠️ Botón hamburguesa no encontrado');
    if (!mobileMenu) console.warn('⚠️ Menú mobile no encontrado');
    if (ctaButtons.length === 0) console.warn('⚠️ No se encontraron botones CTA');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ========================================
// PREFERS REDUCED MOTION - Listener dinámico
// ========================================

/**
 * Escuchar cambios en la preferencia de movimiento
 */
const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
motionMediaQuery.addEventListener('change', () => {
    console.log('Preferencia de movimiento cambiada');
    location.reload(); // Recargar para aplicar cambios
});