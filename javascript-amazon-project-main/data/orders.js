export let orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
    orders.unshift(order);
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

export function getOrder(OrderId) {
    let matchingOrder;

    orders.forEach((order) => {
        if (order.id === OrderId) {
            matchingOrder = order
        }
    })

    return matchingOrder; 
}