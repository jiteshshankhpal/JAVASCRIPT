import { Product, Clothing, Appliance} from '../../data/products.js';

describe('Test suite: Products', () => {
   let product;

   beforeEach(() => {
       product = new Product({
           id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
           image: "images/products/athletic-cotton-socks-6-pairs.jpg",
           name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
           rating: {
               stars: 4.5,
               count: 87
           },
           priceCents: 1090,
           keywords: [
               "socks",
               "sports",
               "apparel"
           ]
       })
   });

    it('should have correct properties', () => {
        expect(product.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(product.image).toEqual('images/products/athletic-cotton-socks-6-pairs.jpg');
        expect(product.name).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
        expect(product.rating).toEqual({
            stars: 4.5,
            count: 87     
        });
        expect(product.priceCents).toEqual(1090);
    });

    it('should have correct methods', () => {
        expect(product.getStarsUrl()).toEqual('images/ratings/rating-45.png');
        expect(product.getPrice()).toEqual('$10.90');
        expect(product.extraInfoHTML()).toEqual('');
    });
});

describe('Test suite: Clothing', () => {
    let clothing;

    beforeEach(() => {
        clothing = new Clothing({
            id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
            image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
            name: "Adults Plain Cotton T-Shirt - 2 Pack",
            rating: {
                stars: 4.5,
                count: 56
            },
            priceCents: 799,
            keywords: [
                "tshirts",
                "apparel",
                "mens"
            ],
            type: "clothing",
            sizeChartLink: "images/clothing-size-chart.png"
        })
    });

    it('should have correct properties', () => {
        expect(clothing.id).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        expect(clothing.image).toEqual('images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg');
        expect(clothing.name).toEqual('Adults Plain Cotton T-Shirt - 2 Pack');
        expect(clothing.rating).toEqual({
            stars: 4.5,
            count: 56
        });
        expect(clothing.priceCents).toEqual(799);
    });

    it('should have correct methods', () => {
        expect(clothing.getStarsUrl()).toEqual('images/ratings/rating-45.png');
        expect(clothing.getPrice()).toEqual('$7.99');
        expect(clothing.extraInfoHTML()).toContain(
            `<a href="images/clothing-size-chart.png" target="_blank">`
        );
        expect(clothing.extraInfoHTML()).toContain('Size chart');
    });
});

