(function() {
    // ============================================================
    // DATOS DEL CATÁLOGO (12 productos con imágenes reales de Assets/)
    // ============================================================
    const allProducts = [
        { id: 1, name: "Monkey D. Luffy Figure", category: "One Piece", price: 89.99, image: "Assets/01-luffy.png",
            description: "Figura detallada del capitán de los Sombrero de Paja.", featured: true },
        { id: 2, name: "Roronoa Zoro Figure", category: "One Piece", price: 79.99, image: "Assets/02-zoro.png",
            description: "El espadachín de la tripulación en pose de combate.", featured: true },
        { id: 3, name: "Going Merry Model", category: "One Piece", price: 129.99, image: "Assets/03-going-merry.png",
            description: "Réplica del querido barco de la tripulación.", featured: true },
        { id: 4, name: "Straw Hat Replica", category: "One Piece", price: 34.99, image: "Assets/04-straw-hat.png",
            description: "Réplica del sombrero de paja emblemático.", featured: false },
        { id: 5, name: "Portgas D. Ace Figure", category: "One Piece", price: 69.99, image: "Assets/05-ace.png",
            description: "Figura del comandante de la segunda división.", featured: true },
        { id: 6, name: "Thousand Sunny Model", category: "One Piece", price: 149.99, image: "Assets/06-thousand-sunny.png",
            description: "El barco actual de los Sombrero de Paja a escala.", featured: false },
        { id: 7, name: "Naruto Uzumaki Figure", category: "Naruto", price: 79.99, image: "Assets/07-naruto.png",
            description: "Figura del séptimo Hokage en acción.", featured: true },
        { id: 8, name: "Sasuke Uchiha Figure", category: "Naruto", price: 74.99, image: "Assets/08-sasuke.png",
            description: "El último Uchiha en pose característica.", featured: false },
        { id: 9, name: "Kakashi Hatake Figure", category: "Naruto", price: 64.99, image: "Assets/09-kakashi.png",
            description: "El ninja copia con su libro favorito.", featured: false },
        { id: 10, name: "Itachi Uchiha Figure", category: "Naruto", price: 84.99, image: "Assets/10-itachi.png",
            description: "Figura del legendario miembro del clan Uchiha.", featured: false },
        { id: 11, name: "Konoha Symbol Collectible", category: "Naruto", price: 24.99, image: "Assets/11-konoha.png",
            description: "Símbolo de la Aldea Oculta de la Hoja.", featured: false },
        { id: 12, name: "Kurama Collector Figure", category: "Naruto", price: 119.99, image: "Assets/12-kurama.png",
            description: "Imponente figura del Kyūbi, el zorro de nueve colas.", featured: false },
    ];

    // Estado del carrito
    let cartCount = 0;

    // ============================================================
    // HERO: Fondo de estrellas animado con Canvas
    // ============================================================
    const canvas = document.getElementById('hero-stars-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let stars = [];
        const STAR_COUNT = 180;

        function resizeCanvas() {
            const hero = canvas.parentElement;
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }

        function createStars() {
            stars = [];
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.8 + 0.3,
                    opacity: Math.random() * 0.7 + 0.2,
                    twinkleSpeed: Math.random() * 0.015 + 0.005,
                    twinkleOffset: Math.random() * Math.PI * 2,
                    driftX: (Math.random() - 0.5) * 0.12,
                    driftY: (Math.random() - 0.5) * 0.12,
                });
            }
        }

        function drawStars(timestamp) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                const flicker = Math.sin(timestamp * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
                const alpha = star.opacity * flicker;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`;
                ctx.fill();
                // Movimiento sutil
                star.x += star.driftX * 0.01;
                star.y += star.driftY * 0.01;
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;
            });
            requestAnimationFrame(drawStars);
        }

        resizeCanvas();
        createStars();
        requestAnimationFrame(drawStars);
        window.addEventListener('resize', () => {
            resizeCanvas();
            createStars();
        });
    }

    // ============================================================
    // HERO: Typewriter animado (id="js-hero-typewriter")
    // ============================================================
    const typewriterEl = document.getElementById('js-hero-typewriter');
    const typewriterPhrases = [
        "One Piece Collection",
        "Naruto Collection",
        "santiagoencodigo",
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typewriterTimeout;

    function typeWriter() {
        if (!typewriterEl) return;
        const currentPhrase = typewriterPhrases[phraseIndex];
        if (isDeleting) {
            charIndex--;
            typewriterEl.textContent = currentPhrase.substring(0, charIndex);
        } else {
            charIndex++;
            typewriterEl.textContent = currentPhrase.substring(0, charIndex);
        }

        let speed = isDeleting ? 40 : 80;
        if (!isDeleting && charIndex === currentPhrase.length) {
            speed = 1800; // Pausa al terminar de escribir
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
            speed = 350;
        }
        typewriterTimeout = setTimeout(typeWriter, speed);
    }
    if (typewriterEl) typeWriter();

    // ============================================================
    // HEADER: Branding dinámico rotativo
    // ============================================================
    const brandingEl = document.getElementById('js-branding');
    const brandingMessages = [
        { text: "Santiagoencodigo's AnimeShop", isTech: false },
        { text: "AnimeShop by santiagoencodigo", isTech: false },
        { text: "Built with HTML, CSS, JS", isTech: true },
    ];
    let brandingIndex = 0;

    function updateBranding() {
        if (!brandingEl) return;
        brandingEl.classList.add('fade-out');
        setTimeout(() => {
            const msg = brandingMessages[brandingIndex];
            if (msg.isTech) {
                brandingEl.innerHTML =
                    'Built with <span class="html-tag">HTML</span>, <span class="css-tag">CSS</span>, <span class="js-tag">JS</span>';
            } else {
                brandingEl.textContent = msg.text;
            }
            brandingEl.classList.remove('fade-out');
            brandingEl.classList.add('fade-in');
            setTimeout(() => brandingEl.classList.remove('fade-in'), 500);
            brandingIndex = (brandingIndex + 1) % brandingMessages.length;
        }, 500);
    }
    setInterval(updateBranding, 4000);

    // ============================================================
    // HEADER: Navegación — Scroll suave y estado activo
    // ============================================================
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-section');
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Actualizar estado activo
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Actualizar estado activo al hacer scroll
    const sectionIds = ['inicio', 'categorias', 'sobre-la-tienda', 'productos-destacados',
    'catalogo-completo', 'unete'];
    function updateActiveNav() {
        let currentSection = 'inicio';
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el && window.scrollY >= el.offsetTop - 150) {
                currentSection = id;
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav, { passive: true });

    // ============================================================
    // HEADER: Búsqueda
    // ============================================================
    const searchToggle = document.getElementById('js-search-toggle');
    const searchWrapper = document.getElementById('js-search-wrapper');
    const searchInput = document.getElementById('js-search-input');
    if (searchToggle && searchWrapper) {
        searchToggle.addEventListener('click', () => {
            const isOpen = searchWrapper.classList.toggle('open');
            if (isOpen && searchInput) {
                setTimeout(() => searchInput.focus(), 350);
            }
        });
    }
    // Cerrar búsqueda al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (searchWrapper && searchToggle && !searchWrapper.contains(e.target) && !searchToggle
            .contains(e.target)) {
            searchWrapper.classList.remove('open');
        }
    });
    // Búsqueda simple: filtrar catálogo al escribir
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            const allFilterBtns = document.querySelectorAll('.filter-btn');
            // Activar filtro "Todos"
            allFilterBtns.forEach(b => b.classList.remove('active'));
            const todosBtn = document.querySelector('.filter-btn[data-filter="todos"]');
            if (todosBtn) todosBtn.classList.add('active');
            // Renderizar con filtro de búsqueda
            renderCatalog('todos', getCurrentSort(), query);
        });
    }

    // ============================================================
    // HEADER: Carrito
    // ============================================================
    const cartBtn = document.getElementById('js-cart-btn');
    const cartCountEl = document.getElementById('js-cart-count');

    function updateCartCount() {
        if (cartCountEl) cartCountEl.textContent = cartCount;
    }

    function addToCart(productName) {
        cartCount++;
        updateCartCount();
        // Animación breve en el contador
        if (cartCountEl) {
            cartCountEl.style.transform = 'scale(1.4)';
            setTimeout(() => { cartCountEl.style.transform = 'scale(1)'; }, 200);
        }
        // Pequeño feedback visual
        const feedback = document.createElement('span');
        feedback.textContent = ` ✓ ${productName} agregado`;
        feedback.style.cssText = `
            position: fixed; bottom: 24px; right: 24px; z-index: 9999;
            background: var(--teal); color: #fff; padding: 0.6rem 1.2rem;
            border-radius: 50px; font-family: var(--font-body); font-size: 0.85rem;
            box-shadow: 0 6px 20px rgba(7,122,125,0.4);
            animation: fadeInUp 0.4s ease, fadeOutDown 0.4s ease 2s forwards;
        `;
        document.body.appendChild(feedback);
        setTimeout(() => feedback.remove(), 2600);
    }
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            alert(
                `Carrito de compras: ${cartCount} producto(s).\n\nFuncionalidad completa de carrito disponible próximamente.`
                );
        });
    }

    // ============================================================
    // HEADER: Menú de usuario desplegable
    // ============================================================
    const userBtn = document.getElementById('js-user-btn');
    const userMenu = document.getElementById('js-user-menu');
    if (userBtn && userMenu) {
        userBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            userMenu.classList.toggle('open');
            userBtn.setAttribute('aria-expanded', userMenu.classList.contains('open'));
        });
        document.addEventListener('click', (e) => {
            if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) {
                userMenu.classList.remove('open');
                userBtn.setAttribute('aria-expanded', 'false');
            }
        });
        userMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                userMenu.classList.remove('open');
                userBtn.setAttribute('aria-expanded', 'false');
                alert(`Funcionalidad "${link.textContent.trim()}" disponible próximamente.`);
            });
        });
    }

    // ============================================================
    // FUNCIÓN: Crear tarjeta de producto (reutilizable)
    // ============================================================
    function createProductCard(product, showFeaturedBadge = false) {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.setAttribute('data-category', product.category);
        card.setAttribute('data-id', product.id);

        if (showFeaturedBadge && product.featured) {
            const badge = document.createElement('span');
            badge.className = 'featured-badge';
            badge.textContent = 'Destacado';
            card.appendChild(badge);
        }

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'product-card-image';
        img.loading = 'lazy';
        card.appendChild(img);

        const body = document.createElement('div');
        body.className = 'product-card-body';

        const catSpan = document.createElement('span');
        catSpan.className =
            `product-category ${product.category === 'One Piece' ? 'product-category--onepiece' : 'product-category--naruto'}`;
        catSpan.textContent = product.category;
        body.appendChild(catSpan);

        const h4 = document.createElement('h4');
        h4.textContent = product.name;
        body.appendChild(h4);

        const priceP = document.createElement('p');
        priceP.className = 'product-price';
        priceP.textContent = `$${product.price.toFixed(2)}`;
        body.appendChild(priceP);

        const actions = document.createElement('div');
        actions.className = 'product-card-actions';
        const viewBtn = document.createElement('button');
        viewBtn.className = 'btn-product';
        viewBtn.textContent = 'Ver Producto';
        viewBtn.addEventListener('click', () => {
            alert(`${product.name}\n\n${product.description}\nPrecio: $${product.price.toFixed(2)}`);
        });
        const addBtn = document.createElement('button');
        addBtn.className = 'btn-product btn-product--add';
        addBtn.textContent = 'Agregar';
        addBtn.addEventListener('click', () => addToCart(product.name));
        actions.appendChild(viewBtn);
        actions.appendChild(addBtn);
        body.appendChild(actions);

        card.appendChild(body);
        return card;
    }

    // ============================================================
    // HERO: Llenar carrusel con 5 productos destacados
    // ============================================================
    const heroCarouselInner = document.getElementById('js-hero-carousel-inner');
    if (heroCarouselInner) {
        const featuredProducts = allProducts.filter(p => p.featured).slice(0, 5);
        featuredProducts.forEach((product, index) => {
            const item = document.createElement('div');
            item.className = `carousel-item${index === 0 ? ' active' : ''}`;
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;
            img.loading = index === 0 ? 'eager' : 'lazy';
            item.appendChild(img);
            const info = document.createElement('div');
            info.className = 'product-card-info';
            const catTag = document.createElement('span');
            catTag.className =
                `category-tag ${product.category === 'One Piece' ? 'tag-onepiece' : 'tag-naruto'}`;
            catTag.textContent = product.category;
            info.appendChild(catTag);
            const h5 = document.createElement('h5');
            h5.textContent = product.name;
            info.appendChild(h5);
            const price = document.createElement('span');
            price.className = 'price';
            price.textContent = `$${product.price.toFixed(2)}`;
            info.appendChild(price);
            item.appendChild(info);
            heroCarouselInner.appendChild(item);
        });
    }

    // ============================================================
    // SECCIÓN: Productos Destacados (grid)
    // ============================================================
    const featuredGrid = document.getElementById('js-featured-products');
    if (featuredGrid) {
        const featuredItems = allProducts.filter(p => p.featured);
        featuredItems.forEach(product => {
            featuredGrid.appendChild(createProductCard(product, true));
        });
    }

    // ============================================================
    // CATÁLOGO COMPLETO: Renderizado dinámico con filtros y orden
    // ============================================================
    const productsContainer = document.getElementById('js-products-container');
    const productCountEl = document.getElementById('js-product-count');
    let currentFilter = 'todos';
    let currentSort = 'default';
    let currentSearchQuery = '';

    function getCurrentSort() {
        return currentSort;
    }

    function renderCatalog(filter = 'todos', sort = 'default', searchQuery = '') {
        if (!productsContainer) return;
        productsContainer.innerHTML = '';

        let filtered = [...allProducts];
        // Filtrar por categoría
        if (filter !== 'todos') {
            filtered = filtered.filter(p => p.category === filter);
        }
        // Filtrar por búsqueda
        if (searchQuery) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchQuery) ||
                p.category.toLowerCase().includes(searchQuery) ||
                p.description.toLowerCase().includes(searchQuery)
            );
        }
        // Ordenar
        if (sort === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sort === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sort === 'name-asc') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        if (filtered.length === 0) {
            const noResults = document.createElement('p');
            noResults.className = 'no-results';
            noResults.textContent = 'No se encontraron productos con los criterios seleccionados.';
            productsContainer.appendChild(noResults);
        } else {
            filtered.forEach(product => {
                productsContainer.appendChild(createProductCard(product, false));
            });
        }
        // Actualizar contador
        if (productCountEl) {
            productCountEl.textContent = `${filtered.length} Producto(s) Disponible(s)`;
        }
    }

    // Inicializar catálogo
    renderCatalog('todos', 'default', '');

    // Event listeners para filtros
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            currentSearchQuery = '';
            if (searchInput) searchInput.value = '';
            if (searchWrapper) searchWrapper.classList.remove('open');
            renderCatalog(currentFilter, currentSort, currentSearchQuery);
        });
    });

    // Event listeners para ordenamiento
    const sortBtns = document.querySelectorAll('.sort-btn');
    sortBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            sortBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentSort = this.getAttribute('data-sort');
            renderCatalog(currentFilter, currentSort, currentSearchQuery);
        });
    });

    // ============================================================
    // FORMULARIO: Únete a la Aventura
    // ============================================================
    const joinForm = document.getElementById('js-join-form');
    const joinEmail = document.getElementById('js-join-email');
    const joinSuccess = document.getElementById('js-join-success');
    const successMessages = [
        '¡Bienvenido a AnimeShop! Tu lugar en la tripulación ha sido reservado y las próximas aventuras llegarán directamente a tu correo.',
        '¡Bienvenido, nuevo shinobi! Has sido registrado en la aldea AnimeShop. Las noticias llegarán como mensajeros ninja a tu correo.',
        '¡Tripulante reclutado! Estás oficialmente a bordo de AnimeShop. Prepárate para recibir las mejores novedades.',
        '¡Sello de registrO completado! La Aldea Oculta de AnimeShop te da la bienvenida. Las misiones llegarán pronto a tu bandeja.',
    ];

    if (joinForm && joinEmail && joinSuccess) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = joinEmail.value.trim();
            // Validación simple de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                joinEmail.style.borderColor = '#E05555';
                joinEmail.style.boxShadow = '0 0 0 4px rgba(224,85,85,0.15)';
                joinEmail.focus();
                setTimeout(() => {
                    joinEmail.style.borderColor = 'rgba(255,255,255,0.2)';
                    joinEmail.style.boxShadow = 'none';
                }, 2000);
                return;
            }
            // Éxito
            joinEmail.value = '';
            joinEmail.style.borderColor = 'rgba(255,255,255,0.2)';
            joinEmail.style.boxShadow = 'none';
            const randomMsg = successMessages[Math.floor(Math.random() * successMessages.length)];
            joinSuccess.textContent = randomMsg;
            joinSuccess.classList.add('visible');
            setTimeout(() => {
                joinSuccess.classList.remove('visible');
            }, 6000);
        });
    }

    // ============================================================
    // INICIALIZACIÓN FINAL
    // ============================================================
    updateCartCount();
    console.log('🚀 Santiagoencodigo\'s AnimeShop — Inicializado correctamente.');
    console.log('📦 Productos cargados:', allProducts.length);
    console.log('🛒 Carrito inicial:', cartCount);
    console.log('✨ Fondo estelar, typewriter, carruseles y catálogo dinámico operativos.');
})();

