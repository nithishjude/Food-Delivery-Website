const localityData = [
    { name: "Indiranagar", places: 132 },
    { name: "Koramangala", places: 186 },
    { name: "Whitefield", places: 98 },
    { name: "HSR Layout", places: 143 },
    { name: "JP Nagar", places: 87 },
    { name: "Malleshwaram", places: 64 }
];

const collectionData = [
    {
        title: "Newly Opened",
        places: "21 Places",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80"
    },
    {
        title: "Trending This Week",
        places: "35 Places",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
    },
    {
        title: "Best of Bangalore",
        places: "50 Places",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
    },
    {
        title: "Great Buffets",
        places: "15 Places",
        image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80"
    }
];

const quickFilterData = [
    { id: "biryani", label: "Biryani", caption: "Royal feasts" },
    { id: "pizza", label: "Pizza", caption: "Cheesy picks" },
    { id: "sushi", label: "Sushi", caption: "Fresh rolls" },
    { id: "dessert", label: "Desserts", caption: "Sweet tooth" },
    { id: "healthy", label: "Healthy", caption: "Salads & bowls" }
];

const brandData = [
    { name: "McDonald's", time: "25 min" },
    { name: "Paradise Biryani", time: "35 min" },
    { name: "Barbeque Nation", time: "40 min" },
    { name: "Domino's", time: "20 min" }
];

const restaurantData = [
    {
        id: "res-1",
        name: "Truffle Affair",
        area: "Indiranagar",
        cuisines: ["Desserts", "Cafe"],
        rating: 4.6,
        votes: 2300,
        deliveryTime: 32,
        distance: 4.1,
        costForTwo: 650,
        offer: "50% OFF up to ₹100",
        services: ["delivery", "dining"],
        tags: ["biryani", "dessert"],
        pureVeg: false,
        isNew: false,
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "res-2",
        name: "Bao Collective",
        area: "Koramangala",
        cuisines: ["Asian", "Street Food"],
        rating: 4.4,
        votes: 1900,
        deliveryTime: 28,
        distance: 3.2,
        costForTwo: 550,
        offer: "Flat 20% OFF",
        services: ["delivery", "nightlife"],
        tags: ["sushi", "bao"],
        pureVeg: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "res-3",
        name: "Green Bowl Co.",
        area: "HSR Layout",
        cuisines: ["Healthy", "Salads"],
        rating: 4.8,
        votes: 980,
        deliveryTime: 22,
        distance: 2.5,
        costForTwo: 500,
        offer: "Free delivery",
        services: ["delivery"],
        tags: ["healthy"],
        pureVeg: true,
        isNew: false,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "res-4",
        name: "Night Owl Taproom",
        area: "Brigade Road",
        cuisines: ["Bar", "Continental"],
        rating: 4.3,
        votes: 1500,
        deliveryTime: 40,
        distance: 5.2,
        costForTwo: 1200,
        offer: "1+1 on cocktails",
        services: ["nightlife", "dining"],
        tags: ["nightlife"],
        pureVeg: false,
        isNew: false,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "res-5",
        name: "Namma Donne",
        area: "JP Nagar",
        cuisines: ["Biryani", "South Indian"],
        rating: 4.7,
        votes: 2100,
        deliveryTime: 26,
        distance: 3.8,
        costForTwo: 450,
        offer: "₹120 OFF",
        services: ["delivery"],
        tags: ["biryani"],
        pureVeg: false,
        isNew: false,
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "res-6",
        name: "Midnight Pizza Lab",
        area: "Whitefield",
        cuisines: ["Pizza", "Italian"],
        rating: 4.2,
        votes: 1700,
        deliveryTime: 30,
        distance: 6.1,
        costForTwo: 600,
        offer: "Buy 1 Get 1",
        services: ["delivery", "nightlife"],
        tags: ["pizza"],
        pureVeg: false,
        isNew: true,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    }
];

const menuItems = [
    {
        id: "dish-1",
        name: "Truffle Miso Ramen",
        description: "Hand-pulled noodles with miso tare and charred corn.",
        price: 420,
        tag: "Spicy",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "dish-2",
        name: "Smoked Butter Biryani",
        description: "Layered basmati, saffron foam, ember veggies.",
        price: 480,
        tag: "Signature",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "dish-3",
        name: "Bao Flight",
        description: "Pickled shiitake, gochujang cauliflower, crackling tofu.",
        price: 360,
        tag: "Vegan",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "dish-4",
        name: "Charred Citrus Salmon",
        description: "Yuzu glaze, crispy shiso, coconut rice.",
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
        description: "Roasted white chocolate, citrus dust, sorbet.",
        price: 330,
        tag: "Dessert",
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80"
    }
];

const page = document.body.dataset.page;
const yearBadge = document.getElementById("year");
const cityHeading = document.getElementById("cityHeading");
const locationSelect = document.getElementById("locationSelect");
const heroSearch = document.getElementById("heroSearch");
const homeSort = document.getElementById("homeSort");
const homeGrid = document.getElementById("homeRestaurantGrid");
const homeResults = document.getElementById("homeResultsCount");
const quickFiltersContainer = document.getElementById("quickFilters");
const brandStrip = document.getElementById("brandStrip");
const localityGrid = document.getElementById("localityGrid");
const collectionRow = document.getElementById("collectionRow");
const menuGrid = document.getElementById("menuGrid");
const miniMenuGrid = document.getElementById("miniMenuGrid");
const cartList = document.getElementById("cartList");
const subtotalEl = document.getElementById("subtotal");
const deliveryFeeEl = document.getElementById("deliveryFee");
const grandTotalEl = document.getElementById("grandTotal");
const orderMessage = document.getElementById("orderMessage");
const placeOrderBtn = document.getElementById("placeOrder");
const clearOrderBtn = document.getElementById("clearOrder");
const trackerEta = document.querySelector(".tracker-eta");
const orderIdLabel = document.getElementById("orderId");
const menuResults = document.getElementById("menuResultsCount");
const menuGridRestaurants = document.getElementById("menuRestaurantGrid");
const menuSort = document.getElementById("menuSort");
const menuCityLabel = document.getElementById("menuCityLabel");

const cart = [];
const DELIVERY_FEE = 40;
const FREE_DELIVERY_THRESHOLD = 700;

const homeState = {
    service: "delivery",
    quickFilter: "all",
    search: "",
    sort: "rating"
};

const menuState = {
    service: "delivery",
    filter: null,
    sort: "rating"
};

const formatCurrency = value => `₹${value}`;

const applyFilters = (state, context) => {
    const filtered = restaurantData.filter(restaurant => {
        if (!restaurant.services.includes(state.service)) {
            return false;
        }
        if (state.search && !restaurant.name.toLowerCase().includes(state.search) && !restaurant.cuisines.join(" ").toLowerCase().includes(state.search)) {
            return false;
        }
        if (context === "home" && state.quickFilter !== "all") {
            return restaurant.tags.includes(state.quickFilter);
        }
        if (context === "menu" && state.filter) {
            switch (state.filter) {
                case "rating":
                    return restaurant.rating >= 4;
                case "pureveg":
                    return restaurant.pureVeg;
                case "new":
                    return restaurant.isNew;
                case "offers":
                    return Boolean(restaurant.offer);
                case "distance":
                    return restaurant.distance <= 5;
                default:
                    return true;
            }
        }
        return true;
    });

    return sortRestaurants(filtered, state.sort);
};

const sortRestaurants = (list, sortKey) => {
    const copy = [...list];
    switch (sortKey) {
        case "deliveryTime":
            return copy.sort((a, b) => a.deliveryTime - b.deliveryTime);
        case "cost":
            return copy.sort((a, b) => a.costForTwo - b.costForTwo);
        default:
            return copy.sort((a, b) => b.rating - a.rating);
    }
};

const buildRestaurantCard = restaurant => {
    const tags = restaurant.cuisines.join(", ");
    return `
        <article class="restaurant-card">
            <img src="${restaurant.image}" alt="${restaurant.name} hero">
            <div class="card-body">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
                    <h3>${restaurant.name}</h3>
                    <span class="rating-pill">${restaurant.rating.toFixed(1)}</span>
                </div>
                <p class="tag-chip">${tags}</p>
                <div style="display:flex;justify-content:space-between;font-size:0.9rem;color:var(--subtle);">
                    <span>${restaurant.deliveryTime} min</span>
                    <span>${formatCurrency(restaurant.costForTwo)} for two</span>
                </div>
                <p class="offer-pill">${restaurant.offer || ""}</p>
            </div>
        </article>
    `;
};

const renderCollections = () => {
    if (!collectionRow) {
        return;
    }
    collectionRow.innerHTML = collectionData
        .map(
            item => `
            <article class="collection-card" style="background-image:url('${item.image}');background-size:cover;background-position:center;color:#fff;">
                <div style="background:rgba(0,0,0,0.55);padding:1rem;border-radius:18px;min-height:160px;display:flex;flex-direction:column;justify-content:flex-end;">
                    <h3>${item.title}</h3>
                    <p>${item.places}</p>
                </div>
            </article>`
        )
        .join("");
};

const renderLocalities = () => {
    if (!localityGrid) {
        return;
    }
    localityGrid.innerHTML = localityData
        .map(
            area => `
            <article class="locality-card">
                <h3>${area.name}</h3>
                <p>${area.places} places</p>
            </article>`
        )
        .join("");
};

const renderQuickFilters = () => {
    if (!quickFiltersContainer) {
        return;
    }
    quickFiltersContainer.innerHTML = quickFilterData
        .map(
            filter => `
            <button class="quick-filter" type="button" data-quick="${filter.id}">
                <strong>${filter.label}</strong>
                <span>${filter.caption}</span>
            </button>`
        )
        .join("");
};

const renderBrands = () => {
    if (!brandStrip) {
        return;
    }
    brandStrip.innerHTML = brandData
        .map(
            brand => `
            <article class="brand-tile">
                <strong>${brand.name}</strong>
                <span>${brand.time}</span>
            </article>`
        )
        .join("");
};

const renderRestaurants = (grid, resultsLabel, state, context) => {
    if (!grid || !resultsLabel) {
        return;
    }
    const list = applyFilters(state, context);
    if (!list.length) {
        grid.innerHTML = '<p class="tag-chip">No restaurants match your filters.</p>';
        resultsLabel.textContent = "Showing 0 places";
        return;
    }
    grid.innerHTML = list.map(buildRestaurantCard).join("");
    resultsLabel.textContent = `Showing ${list.length} place${list.length > 1 ? "s" : ""}`;
};

const renderMenuGrid = (targetId, limit = menuItems.length) => {
    const target = document.getElementById(targetId);
    if (!target) {
        return;
    }
    target.innerHTML = menuItems
        .slice(0, limit)
        .map(
            item => `
            <article class="menu-card">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
                <div class="menu-meta">
                    <span>${item.tag}</span>
                    <span>${formatCurrency(item.price)}</span>
                </div>
                <div class="menu-actions">
                    <button type="button" data-add="${item.id}">Add +</button>
                </div>
            </article>`
        )
        .join("");
};

const updateTotals = () => {
    if (!subtotalEl || !deliveryFeeEl || !grandTotalEl) {
        return;
    }
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const deliveryFee = !subtotal || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const grandTotal = subtotal + deliveryFee;
    subtotalEl.textContent = formatCurrency(subtotal.toFixed(0));
    deliveryFeeEl.textContent = formatCurrency(deliveryFee.toFixed(0));
    grandTotalEl.textContent = formatCurrency(grandTotal.toFixed(0));
    if (placeOrderBtn && clearOrderBtn) {
        const disabled = subtotal === 0;
        placeOrderBtn.disabled = disabled;
        clearOrderBtn.disabled = disabled;
    }
    if (!orderMessage) {
        return;
    }
    if (!subtotal) {
        orderMessage.textContent = "Add dishes to begin an order.";
        return;
    }
    if (subtotal >= FREE_DELIVERY_THRESHOLD) {
        orderMessage.textContent = "Congratulations! You unlocked free delivery.";
        return;
    }
    const gap = FREE_DELIVERY_THRESHOLD - subtotal;
    orderMessage.textContent = `Add ${formatCurrency(gap.toFixed(0))} more for free delivery.`;
};

const renderCart = () => {
    if (!cartList) {
        return;
    }
    if (!cart.length) {
        cartList.innerHTML = '<li class="tag-chip">Your cart is empty. Add dishes from the menu.</li>';
        updateTotals();
        return;
    }
    cartList.innerHTML = cart
        .map(
            item => `
            <li class="cart-row">
                <div>
                    <strong>${item.name}</strong>
                    <p class="tag-chip">${formatCurrency(item.price)} each</p>
                </div>
                <div class="qty-controls" data-id="${item.id}">
                    <button type="button" data-stepper="decrease">-</button>
                    <span>${item.qty}</span>
                    <button type="button" data-stepper="increase">+</button>
                </div>
                <strong>${formatCurrency((item.price * item.qty).toFixed(0))}</strong>
            </li>`
        )
        .join("");
    updateTotals();
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

const createOrderId = () => `FM-${Math.floor(Math.random() * 9000 + 1000)}`;

const clearCart = message => {
    cart.length = 0;
    renderCart();
    if (trackerEta) {
        trackerEta.textContent = "ETA updates appear here once you place an order.";
    }
    if (message && orderMessage) {
        orderMessage.textContent = message;
    }
};

const placeOrder = () => {
    if (!cart.length) {
        return;
    }
    const eta = Math.floor(Math.random() * 15) + 25;
    if (orderMessage) {
        orderMessage.textContent = `Order confirmed! Expect your rider in ${eta} minutes.`;
    }
    if (trackerEta) {
        trackerEta.textContent = `Rider en route • ${eta} minutes away.`;
    }
    if (orderIdLabel) {
        orderIdLabel.textContent = createOrderId();
    }
    clearCart();
};

const initHome = () => {
    renderLocalities();
    renderCollections();
    renderQuickFilters();
    renderBrands();
    renderRestaurants(homeGrid, homeResults, homeState, "home");

    document.getElementById("heroSearchBar")?.addEventListener("submit", event => event.preventDefault());

    locationSelect?.addEventListener("change", event => {
        const city = event.target.value;
        if (cityHeading) {
            cityHeading.textContent = city;
        }
        if (menuCityLabel) {
            menuCityLabel.textContent = city;
        }
    });

    heroSearch?.addEventListener("input", event => {
        homeState.search = event.target.value.trim().toLowerCase();
        renderRestaurants(homeGrid, homeResults, homeState, "home");
    });

    homeSort?.addEventListener("change", event => {
        homeState.sort = event.target.value;
        renderRestaurants(homeGrid, homeResults, homeState, "home");
    });

    document.querySelectorAll("#homeServiceTabs [data-service]").forEach(button => {
        button.addEventListener("click", () => {
            homeState.service = button.dataset.service;
            document.querySelectorAll("#homeServiceTabs [data-service]").forEach(el => {
                el.classList.toggle("active", el === button);
                el.setAttribute("aria-selected", String(el === button));
            });
            renderRestaurants(homeGrid, homeResults, homeState, "home");
        });
    });

    quickFiltersContainer?.addEventListener("click", event => {
        const filterButton = event.target.closest("[data-quick]");
        if (!filterButton) {
            return;
        }
        const selected = filterButton.dataset.quick;
        homeState.quickFilter = homeState.quickFilter === selected ? "all" : selected;
        quickFiltersContainer.querySelectorAll("[data-quick]").forEach(button => {
            const isActive = button.dataset.quick === homeState.quickFilter;
            button.classList.toggle("active", isActive);
        });
        renderRestaurants(homeGrid, homeResults, homeState, "home");
    });
};

const initMenuPage = () => {
    renderRestaurants(menuGridRestaurants, menuResults, menuState, "menu");
    renderMenuGrid("menuGrid");

    document.querySelectorAll("#menuServiceTabs [data-service]").forEach(button => {
        button.addEventListener("click", () => {
            menuState.service = button.dataset.service;
            document.querySelectorAll("#menuServiceTabs [data-service]").forEach(el => {
                const isActive = el === button;
                el.classList.toggle("active", isActive);
                el.setAttribute("aria-selected", String(isActive));
            });
            renderRestaurants(menuGridRestaurants, menuResults, menuState, "menu");
        });
    });

    document.getElementById("menuFilterChips")?.addEventListener("click", event => {
        const chip = event.target.closest("[data-filter]");
        if (!chip) {
            return;
        }
        const filter = chip.dataset.filter;
        menuState.filter = menuState.filter === filter ? null : filter;
        document.querySelectorAll("#menuFilterChips [data-filter]").forEach(el => {
            el.classList.toggle("active", el.dataset.filter === menuState.filter);
        });
        renderRestaurants(menuGridRestaurants, menuResults, menuState, "menu");
    });

    menuSort?.addEventListener("change", event => {
        menuState.sort = event.target.value;
        renderRestaurants(menuGridRestaurants, menuResults, menuState, "menu");
    });
};

const initOrderPage = () => {
    renderMenuGrid("miniMenuGrid", 3);
    renderCart();

    placeOrderBtn?.addEventListener("click", placeOrder);
    clearOrderBtn?.addEventListener("click", () => clearCart("Cart cleared. Keep browsing."));

    if (orderIdLabel) {
        orderIdLabel.textContent = createOrderId();
    }
};

const initGalleryPage = () => {
    renderCollections();
};

const initForms = () => {
    document.querySelectorAll(".cta-form").forEach(form => {
        form.addEventListener("submit", event => {
            event.preventDefault();
            const button = form.querySelector("button");
            const previous = button.textContent;
            button.textContent = "Sent";
            setTimeout(() => {
                button.textContent = previous;
            }, 1600);
            const input = form.querySelector("input");
            if (input) {
                input.value = "";
            }
        });
    });
};

const initGlobalMenuListeners = () => {
    document.body.addEventListener("click", event => {
        const addButton = event.target.closest("[data-add]");
        if (addButton) {
            addToCart(addButton.dataset.add);
        }
        const stepper = event.target.closest("[data-stepper]");
        if (stepper && stepper.parentElement?.dataset.id) {
            const direction = stepper.dataset.stepper === "increase" ? 1 : -1;
            adjustQuantity(stepper.parentElement.dataset.id, direction);
        }
    });
};

const init = () => {
    if (yearBadge) {
        yearBadge.textContent = new Date().getFullYear();
    }

    initForms();
    initGlobalMenuListeners();

    switch (page) {
        case "home":
            initHome();
            break;
        case "menu":
            initMenuPage();
            break;
        case "order":
            initOrderPage();
            break;
        case "gallery":
            initGalleryPage();
            break;
        default:
            break;
    }
};

init();
