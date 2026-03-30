const restaurants = [
    {
        id: 1,
        name: "Saffron & Sage",
        cuisine: "indian",
        cuisineLabel: "Modern Indian",
        rating: 4.8,
        deliveryTime: 25,
        distance: 2.4,
        priceForTwo: 28,
        tags: ["biryani", "kebabs", "slow cooked"],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        isTrending: true
    },
    {
        id: 2,
        name: "Nori District",
        cuisine: "asian",
        cuisineLabel: "Tokyo Izakaya",
        rating: 4.7,
        deliveryTime: 18,
        distance: 3.1,
        priceForTwo: 24,
        tags: ["ramen", "sushi", "bao"],
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
        isTrending: true
    },
    {
        id: 3,
        name: "La Rue 27",
        cuisine: "european",
        cuisineLabel: "Parisian Bistro",
        rating: 4.6,
        deliveryTime: 32,
        distance: 4.2,
        priceForTwo: 34,
        tags: ["steak", "tart", "truffle"],
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
        isTrending: false
    },
    {
        id: 4,
        name: "Cedars & Smoke",
        cuisine: "middle-eastern",
        cuisineLabel: "Middle Eastern Grill",
        rating: 4.5,
        deliveryTime: 22,
        distance: 1.9,
        priceForTwo: 26,
        tags: ["shawarma", "mezze", "pita"],
        image: "https://images.unsplash.com/photo-1612198527553-617dbc6027ed?auto=format&fit=crop&w=800&q=80",
        isTrending: false
    },
    {
        id: 5,
        name: "Verdant Table",
        cuisine: "vegan",
        cuisineLabel: "Plant Based Lab",
        rating: 4.9,
        deliveryTime: 20,
        distance: 2.1,
        priceForTwo: 23,
        tags: ["vegan", "seasonal", "cold pressed"],
        image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=800&q=80",
        isTrending: true
    },
    {
        id: 6,
        name: "Bao Collective",
        cuisine: "asian",
        cuisineLabel: "Taipei Night Bites",
        rating: 4.4,
        deliveryTime: 16,
        distance: 1.4,
        priceForTwo: 19,
        tags: ["bao", "street food", "tea"],
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
        isTrending: false
    },
    {
        id: 7,
        name: "Rye & Ember",
        cuisine: "european",
        cuisineLabel: "Nordic Smokehouse",
        rating: 4.3,
        deliveryTime: 28,
        distance: 3.8,
        priceForTwo: 30,
        tags: ["rye", "pickle", "smoked"],
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80",
        isTrending: false
    },
    {
        id: 8,
        name: "Masala Moto",
        cuisine: "indian",
        cuisineLabel: "Coastal Indian",
        rating: 4.7,
        deliveryTime: 30,
        distance: 2.9,
        priceForTwo: 27,
        tags: ["seafood", "curry", "kokum"],
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&q=80",
        isTrending: true
    }
];

const menuItems = [
    {
        id: "dish-1",
        name: "Truffle Miso Ramen",
        description: "Hand-pulled noodles, charred corn, and black garlic oil.",
        price: 420,
        tag: "Spicy",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "dish-2",
        name: "Smoked Butter Biryani",
        description: "Layered basmati, saffron foam, and ember-roasted veggies.",
        price: 480,
        tag: "Signature",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "dish-3",
        name: "Bao Flight",
        description: "Pickled shiitake, gochujang cauliflower, and crackling tofu.",
        price: 360,
        tag: "Vegan",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "dish-4",
        name: "Charred Citrus Salmon",
        description: "Yuzu glaze, crispy shiso, and coconut forbidden rice.",
        price: 520,
        tag: "Omega-rich",
        image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "dish-5",
        name: "Street Tacos Trio",
        description: "Smoky jackfruit, queso fresco, midnight salsa.",
        price: 280,
        tag: "Crowd fav",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "dish-6",
        name: "Molten Matcha Cake",
        description: "Roasted white chocolate, citrus dust, and sorbet.",
        price: 330,
        tag: "Dessert",
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80"
    }
];

const listingGrid = document.getElementById("listingGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const cuisineButtons = Array.from(document.querySelectorAll("[data-cuisine]"));
const resultsCount = document.getElementById("resultsCount");
const resetButton = document.getElementById("resetFilters");
const yearBadge = document.getElementById("year");
const ctaForm = document.querySelector(".cta-form");
const menuGrid = document.getElementById("menuGrid");
const cartList = document.getElementById("cartList");
const subtotalEl = document.getElementById("subtotal");
const deliveryFeeEl = document.getElementById("deliveryFee");
const grandTotalEl = document.getElementById("grandTotal");
const orderMessage = document.getElementById("orderMessage");
const placeOrderBtn = document.getElementById("placeOrder");
const clearOrderBtn = document.getElementById("clearOrder");
const trackerEta = document.querySelector(".tracker-eta");
const orderIdLabel = document.getElementById("orderId");

const state = {
    searchTerm: "",
    cuisine: "all",
    sort: "trending"
};

const cart = [];
const DELIVERY_FEE = 60;
const FREE_DELIVERY_THRESHOLD = 700;

const formatCurrency = value => `Rs ${value.toFixed(2)}`;

const formatCuisine = key => {
    const labels = {
        indian: "Indian",
        asian: "Asian",
        european: "European",
        "middle-eastern": "Middle Eastern",
        vegan: "Plant based",
        all: "All"
    };
    return labels[key] || "Chef special";
};

const applyFilters = () => {
    if (!listingGrid || !resultsCount) {
        return;
    }
    const filtered = restaurants.filter(item => {
        const matchesSearch = `${item.name} ${item.tags.join(" ")}`
            .toLowerCase()
            .includes(state.searchTerm);
        const matchesCuisine = state.cuisine === "all" || item.cuisine === state.cuisine;
        return matchesSearch && matchesCuisine;
    });

    const sorted = sortRestaurants(filtered, state.sort);
    renderListings(sorted);
};

const sortRestaurants = (list, sortKey) => {
    const copy = [...list];
    switch (sortKey) {
        case "rating":
            return copy.sort((a, b) => b.rating - a.rating);
        case "fastest":
            return copy.sort((a, b) => a.deliveryTime - b.deliveryTime);
        case "budget":
            return copy.sort((a, b) => a.priceForTwo - b.priceForTwo);
        default:
            return copy.sort((a, b) => Number(b.isTrending) - Number(a.isTrending));
    }
};

const renderListings = list => {
    if (!listingGrid || !resultsCount) {
        return;
    }
    if (!list.length) {
        listingGrid.innerHTML = '<p class="empty-state">Nothing matches your filters yet. Try a different search or cuisine.</p>';
        resultsCount.textContent = "Showing 0 restaurants";
        return;
    }

    const markup = list
        .map(item => {
            const tags = item.tags.map(tag => `<span>#${tag}</span>`).join(" ");
            return `
                <article class="listing-card">
                    <img class="listing-hero" src="${item.image}" alt="${item.name} hero image">
                    <header>
                        <div>
                            <h3>${item.name}</h3>
                            <div class="listing-meta">
                                <span>${formatCuisine(item.cuisine)}</span>
                                <span>${item.rating.toFixed(1)}★ rating</span>
                            </div>
                        </div>
                        ${item.isTrending ? '<span class="listing-badge">Trending</span>' : ""}
                    </header>
                    <div class="listing-meta">
                        <span>${item.deliveryTime} min delivery</span>
                        <span>${item.distance} km away</span>
                        <span>${formatCurrency(item.priceForTwo)} for two</span>
                    </div>
                    <div class="listing-tags">${tags}</div>
                </article>
            `;
        })
        .join("");

    listingGrid.innerHTML = markup;
    resultsCount.textContent = `Showing ${list.length} restaurant${list.length > 1 ? "s" : ""}`;
};

const renderMenu = () => {
    if (!menuGrid) {
        return;
    }
    const cards = menuItems
        .map(item => `
            <article class="menu-card">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
                <div class="menu-meta">
                    <span>${item.tag}</span>
                    <span class="menu-price">${formatCurrency(item.price)}</span>
                </div>
                <div class="menu-actions">
                    <button type="button" data-add="${item.id}">Add to order</button>
                </div>
            </article>
        `)
        .join("");
    menuGrid.innerHTML = cards;
};

const updateOrderMessage = subtotal => {
    if (!orderMessage) {
        return;
    }
    if (subtotal === 0) {
        orderMessage.textContent = "Add dishes to begin an order.";
        return;
    }
    if (subtotal >= FREE_DELIVERY_THRESHOLD) {
        orderMessage.textContent = "You unlocked complimentary delivery!";
        return;
    }
    const gap = FREE_DELIVERY_THRESHOLD - subtotal;
    orderMessage.textContent = `Add ${formatCurrency(gap)} more for free delivery.`;
};

const renderCart = () => {
    if (!cartList) {
        return;
    }
    if (!cart.length) {
        cartList.innerHTML = '<li class="empty-state">Your cart is empty. Tap a dish to add it.</li>';
        updateTotals();
        return;
    }

    const rows = cart
        .map(item => `
            <li class="cart-row">
                <div class="cart-details">
                    <strong>${item.name}</strong>
                    <span>${formatCurrency(item.price)} each</span>
                </div>
                <div class="qty-controls" data-id="${item.id}">
                    <button type="button" data-stepper="decrease">-</button>
                    <span>${item.qty}</span>
                    <button type="button" data-stepper="increase">+</button>
                </div>
                <strong>${formatCurrency(item.price * item.qty)}</strong>
            </li>
        `)
        .join("");
    cartList.innerHTML = rows;
    updateTotals();
};

const updateTotals = () => {
    if (!subtotalEl || !deliveryFeeEl || !grandTotalEl) {
        return;
    }
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const deliveryFee = subtotal === 0 ? 0 : subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const grandTotal = subtotal + deliveryFee;
    subtotalEl.textContent = formatCurrency(subtotal);
    deliveryFeeEl.textContent = formatCurrency(deliveryFee);
    grandTotalEl.textContent = formatCurrency(grandTotal);
    updateOrderMessage(subtotal);

    if (placeOrderBtn && clearOrderBtn) {
        const disabled = subtotal === 0;
        placeOrderBtn.disabled = disabled;
        clearOrderBtn.disabled = disabled;
    }
};

const addToCart = id => {
    const menuItem = menuItems.find(item => item.id === id);
    if (!menuItem) {
        return;
    }
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...menuItem, qty: 1 });
    }
    renderCart();
};

const adjustQuantity = (id, delta) => {
    const target = cart.find(item => item.id === id);
    if (!target) {
        return;
    }
    target.qty += delta;
    if (target.qty <= 0) {
        const index = cart.findIndex(item => item.id === id);
        cart.splice(index, 1);
    }
    renderCart();
};

const clearCart = (message, resetTracker = true) => {
    cart.length = 0;
    renderCart();
    if (orderMessage && message) {
        orderMessage.textContent = message;
    }
    if (resetTracker && trackerEta) {
        trackerEta.textContent = "ETA updates appear here once you place an order.";
    }
};

const createOrderId = () => `FM-${Math.floor(Math.random() * 9000 + 1000)}`;

const placeOrder = () => {
    if (!cart.length) {
        if (orderMessage) {
            orderMessage.textContent = "Add at least one dish before checking out.";
        }
        return;
    }
    const eta = Math.floor(Math.random() * 20) + 20;
    if (orderMessage) {
        orderMessage.textContent = `Order confirmed! Expect your courier in ${eta} minutes.`;
    }
    if (trackerEta) {
        trackerEta.textContent = `Courier assigned · ${eta} minutes to doorstep.`;
    }
    if (orderIdLabel) {
        orderIdLabel.textContent = createOrderId();
    }
    clearCart(undefined, false);
};

const setCuisine = cuisine => {
    state.cuisine = cuisine;
    cuisineButtons.forEach(btn => {
        const isActive = btn.dataset.cuisine === cuisine;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-checked", String(isActive));
    });
};

const resetFilters = () => {
    if (!listingGrid || !resultsCount) {
        return;
    }
    state.searchTerm = "";
    state.cuisine = "all";
    state.sort = "trending";
    if (searchInput) {
        searchInput.value = "";
    }
    if (sortSelect) {
        sortSelect.value = "trending";
    }
    setCuisine("all");
    applyFilters();
};

const init = () => {
    setCuisine(state.cuisine);
    applyFilters();
    renderMenu();
    renderCart();

    searchInput?.addEventListener("input", event => {
        state.searchTerm = event.target.value.trim().toLowerCase();
        applyFilters();
    });

    sortSelect?.addEventListener("change", event => {
        state.sort = event.target.value;
        applyFilters();
    });

    cuisineButtons.forEach(button => {
        button.addEventListener("click", () => {
            const cuisine = button.dataset.cuisine;
            setCuisine(cuisine);
            applyFilters();
        });
    });

    resetButton?.addEventListener("click", resetFilters);

    if (menuGrid) {
        menuGrid.addEventListener("click", event => {
            const button = event.target.closest("[data-add]");
            if (!button) {
                return;
            }
            addToCart(button.dataset.add);
        });
    }

    if (cartList) {
        cartList.addEventListener("click", event => {
            const control = event.target.closest("[data-stepper]");
            if (!control || !control.parentElement?.dataset.id) {
                return;
            }
            const id = control.parentElement.dataset.id;
            const direction = control.dataset.stepper === "increase" ? 1 : -1;
            adjustQuantity(id, direction);
        });
    }

    placeOrderBtn?.addEventListener("click", placeOrder);
    clearOrderBtn?.addEventListener("click", () => clearCart("Cart cleared. Keep exploring the menu."));

    if (orderIdLabel) {
        orderIdLabel.textContent = createOrderId();
    }

    if (yearBadge) {
        yearBadge.textContent = new Date().getFullYear();
    }

    if (ctaForm) {
        ctaForm.addEventListener("submit", event => {
            event.preventDefault();
            const input = ctaForm.querySelector("input");
            const previousLabel = ctaForm.querySelector("button").textContent;
            ctaForm.querySelector("button").textContent = "Added!";
            setTimeout(() => {
                ctaForm.querySelector("button").textContent = previousLabel;
            }, 1800);
            input.value = "";
        });
    }
};

init();
