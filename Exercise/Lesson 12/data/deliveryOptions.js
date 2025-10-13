import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import isWeekend from '../Exercise/b.js';

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if (deliveryOptionId === option.id) {
            deliveryOption = option;
        }
    })

    return deliveryOption;
}

export function calculateDeliveryDate(deliveryOption) {
    let remainingDays = deliveryOption.deliveryDays; 
    let deliveryDate = dayjs(); 
    
    while(remainingDays > 0) {
        deliveryDate = deliveryDate.add(1, 'days');

        if(!isWeekend(deliveryDate)) {
            remainingDays--;
        }
    }
    
    const dateString = deliveryDate.format('dddd, MMMM D'); 
    return dateString;
}

export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0
}, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
}, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}]