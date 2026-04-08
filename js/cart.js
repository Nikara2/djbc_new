


// Système de gestion du panier
class Cart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartIcon();
    }

    // Charger le panier depuis localStorage
    loadCart() {
        const savedCart = localStorage.getItem('djbc-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    // Sauvegarder le panier dans localStorage
    saveCart() {
        localStorage.setItem('djbc-cart', JSON.stringify(this.items));
        this.updateCartIcon();
    }

    // Ajouter un produit au panier
    addItem(wine, quantity = 1) {
        // Créer un ID unique basé sur le nom et le producteur
        const wineId = `${wine.name}-${wine.producer}`.replace(/\s+/g, '-').toLowerCase();
        const existingItem = this.items.find(item => item.id === wineId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: wineId,
                name: wine.name,
                producer: wine.producer,
                appellation: wine.appellation,
                region: wine.region,
                color: wine.color,
                vintage: wine.vintage,
                prix: wine.prix || "0 F CFA",
                image: wine.image || `https://via.placeholder.com/400x280?text=${wine.producer.replace(/\s/g, '+')}+${wine.name.replace(/\s/g, '+')}`,
                quantity: quantity
            });
        }

        this.saveCart();
        this.showNotification('Produit ajouté au panier');
    }

    // Supprimer un produit du panier
    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.saveCart();
        this.updateCartDisplay();
    }

    // Modifier la quantité d'un produit
    updateQuantity(id, quantity) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(id);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartDisplay();
            }
        }
    }

    // Vider le panier
    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartDisplay();
    }

    // Calculer le total du panier
    getTotal() {
        return this.items.reduce((total, item) => {
            const prixNum = parseInt(item.prix.replace(/\./g, '').replace(/[^\d]/g, ''));
            return total + (prixNum * item.quantity);
        }, 0);
    }

    // Calculer le nombre total d'articles
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    // Mettre à jour l'icône du panier
    updateCartIcon() {
        const cartIcon = document.getElementById('cart-icon');
        const cartCount = document.getElementById('cart-count');
        
        if (cartIcon && cartCount) {
            const count = this.getItemCount();
            cartCount.textContent = count;
            cartCount.style.display = count > 0 ? 'block' : 'none';
        }
    }

    // Afficher une notification
    showNotification(message) {
        // Créer une notification temporaire
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2c5530;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // Supprimer la notification après 3 secondes
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.2s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Afficher le contenu du panier
    displayCart() {
        const cartContainer = document.getElementById('cart-container');
        if (!cartContainer) return;

        if (this.items.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <h3>Votre panier est vide</h3>
                    <p>Découvrez notre sélection de vins d'exception</p>
                    <a href="wines.html" class="btn">Voir nos vins</a>
                </div>
            `;
            return;
        }

        const cartHTML = `
            <div class="cart-header">
                <h3>Votre Panier (${this.getItemCount()} article${this.getItemCount() > 1 ? 's' : ''})</h3>
                <button onclick="cart.clearCart()" class="btn-clear">Vider le panier</button>
            </div>
            <div class="cart-items">
                ${this.items.map(item => `
                    <div class="cart-item" data-id="${item.id}">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <h4>${item.producer} - ${item.name}</h4>
                            <p class="wine-info">${item.appellation} - ${item.region}</p>
                            <p class="wine-vintage">${item.vintage !== 'N/A' ? `Millésime: ${item.vintage}` : 'Sans millésime'}</p>
                            <p class="wine-color">${item.color}</p>
                        </div>
                        <div class="cart-item-quantity">
                            <button onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})" class="btn-quantity">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})" class="btn-quantity">+</button>
                        </div>
                        <div class="cart-item-price">
                            <span class="price">
                                ${item.prix} x ${item.quantity} = 
                                ${(parseInt(item.prix.replace(/\./g, '').replace(/[^\d]/g, '')) * item.quantity).toLocaleString()} F CFA
                            </span>
                            <button onclick="cart.removeItem('${item.id}')" class="btn-remove">×</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="cart-footer">
                <div class="cart-total">
                    <span>Total: <strong>${this.getTotal().toLocaleString()} F CFA</strong></span>
                </div>
                <div class="cart-actions">
                    <a href="wines.html" class="btn btn-secondary">Continuer les achats</a>
                    <a href="cart.html" class="btn btn-primary">Voir le panier complet</a>
                </div>
            </div>
        `;

        cartContainer.innerHTML = cartHTML;
    }

    // Mettre à jour l'affichage du panier
    updateCartDisplay() {
        this.displayCart();
        this.updateCartIcon();
    }

    // Processus de commande
    checkout() {
        // Ici vous pouvez ajouter la logique de commande
        // Par exemple, rediriger vers une page de commande ou ouvrir un formulaire
        alert('Fonctionnalité de commande à implémenter. Contactez-nous au +226 07 11 25 26 pour finaliser votre commande.');
    }
}

// Initialiser le panier
const cart = new Cart();

// Fonction pour ajouter un vin au panier
function addToCart(wine) {
    cart.addItem(wine);
}

// Fonction pour ouvrir/fermer le panier
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
        if (cartModal.style.display === 'flex') {
            cart.displayCart();
        }
    }
}

// Fermer le panier en cliquant à l'extérieur
document.addEventListener('click', function(event) {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal && event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Ajouter les styles CSS pour les animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 