//import lipstickImage from '../assets/Revlon_lipstick.jpg';
import MascaraImage from '../assets/Mascara.jpg'; 
import LorealImage from '../assets/Loreal.jpg';
import CetaphilImage from '../assets/Cetaphil.jpg';
import NeutrogenaImage from '../assets/neutrogena_cream.jpg';


export const PRODUCTS = [
    {
        "id": 1,
        "title": "Revlon Super Lustrous Lipstick",
        "price": 6.97,
        "description": "The Revlon Super Lustrous Lipstick is formulated with microfine pigments for high-impact color. Enriched with vitamin E and avocado oil, it provides a creamy, moisturizing finish.",
        "image": "https://m.media-amazon.com/images/I/41J+LqM8RWL._SY300_SX300_.jpg", 
        "rating": {
            "rate": 4.5,
            "count": 250
        }
    },
    {
        "id": 2,
        "title": "Neutrogena Hydro Boost Gel-Cream",
        "price": 17.99,
        "description": "Neutrogena Hydro Boost Gel-Cream with hyaluronic acid provides long-lasting hydration and smooth skin texture. Suitable for dry and sensitive skin.",
        "image": NeutrogenaImage, 
        "rating": {
            "rate": 4.7,
            "count": 320
        }
    },
    {
        "id": 3,
        "title": "Maybelline Lash Sensational Mascara",
        "price": 8.99,
        "description": "Maybelline Lash Sensational Mascara delivers a full fan effect, creating longer and fuller lashes with a clump-free formula.",
        "image": MascaraImage, 
        "rating": {
            "rate": 4.4,
            "count": 415
        }
    },
    {
        "id": 4,
        "title": "L'Oréal Paris Revitalift Anti-Wrinkle Night Cream",
        "price": 19.99,
        "description": "L'Oréal Paris Revitalift Anti-Wrinkle Night Cream is designed to fight wrinkles and firm skin overnight. Enriched with Pro-Retinol and Centella Asiatica.",
        "image": LorealImage, 
        "rating": {
            "rate": 4.6,
            "count": 220
        }
    },
    {
        "id": 5,
        "title": "Cetaphil Gentle Skin Cleanser",
        "price": 10.99,
        "description": "Cetaphil Gentle Skin Cleanser is a mild, non-irritating formulation that soothes and cleanses, suitable for all skin types.",
        "image": CetaphilImage, 
        "rating": {
            "rate": 4.8,
            "count": 530
        }
    },
    {
        "id": 6,
        "title": "NYX Professional Makeup Matte Lipstick",
        "price": 7.99,
        "description": "NYX Professional Makeup Matte Lipstick has a creamy formula that glides on smoothly, offering a rich matte finish in a variety of vibrant shades.",
        "image": "https://images-cdn.ubuy.co.in/658f009f22e5fa2965159d61-nyx-professional-makeup-lip-lingerie-xxl.jpg", 
        "rating": {
            "rate": 4.3,
            "count": 150
        }
    },
    {
        "id": 7,
        "title": "Garnier SkinActive Micellar Foaming Face Wash",
        "price": 8.49,
        "description": "Garnier SkinActive Micellar Foaming Face Wash gently removes makeup and cleanses skin, leaving it feeling refreshed and clean.",
        "image": "https://assets.ajio.com/medias/sys_master/root/20220111/Uagk/61dda2feaeb2695cdd0f6d28/-473Wx593H-4900047320-multi-MODEL.jpg", 
        "rating": {
            "rate": 4.5,
            "count": 180
        }
    },
    {
        "id": 8,
        "title": "NIVEA Essentially Enriched Body Lotion",
        "price": 9.99,
        "description": "NIVEA Essentially Enriched Body Lotion provides deep moisture for dry skin, leaving it soft and smooth with regular use.",
        "image": "https://www.pearlsophia.com/wp-content/uploads/2023/02/4kxnckiXjUDn6bc3WC0ZFr87EgZ8rvHY7mIkWFlvNT478Hu1OFMswwfOBD4QzvnJxNqytxhBtdwUCFpAMZxDJ9l7qDpykOkukdy4_original.webp", 
        "rating": {
            "rate": 4.4,
            "count": 200
        }
    },
    {
        "id": 9,
        "title": "Dove Beauty Bar More Moisturizing than Soap",
        "price": 6.49,
        "description": "Dove Beauty Bar is more moisturizing than soap and gently cleanses, leaving skin softer, smoother, and more radiant.",
        "image": "https://www.bheemcart.in/wp-content/uploads/2022/09/images-6.jpeg", 
        "rating": {
            "rate": 4.7,
            "count": 240
        }
    },
    {
        "id": 10,
        "title": "Aveeno Daily Moisturizing Lotion",
        "price": 11.49,
        "description": "Aveeno Daily Moisturizing Lotion contains soothing oatmeal and rich emollients to nourish dry skin and provide long-lasting moisture.",
        "image": "https://m.media-amazon.com/images/I/41E5nL4kRyL._SX522_.jpg", 
        "rating": {
            "rate": 4.6,
            "count": 300
        }
    },
        {
            "id": 11,
            "title": "Olay Regenerist Micro-Sculpting Cream",
            "price": 28.99,
            "description": "Olay Regenerist Micro-Sculpting Cream provides advanced anti-aging ingredients for a firmer, lifted look and a more youthful appearance.",
            "image": "https://m.media-amazon.com/images/I/51YeSvGLUrL._SX522_.jpg", 
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            "id": 12,
            "title": "Lancôme Hypnôse Drama Mascara",
            "price": 27.99,
            "description": "Lancôme Hypnôse Drama Mascara creates instant lash drama with intense volume and a full-body fringe for a bold, volumized look.",
            "image": "https://cdn.cosmostore.org/cache/front/shop/products/582/1790970/350x350.jpg", 
            "rating": {
                "rate": 4.6,
                "count": 400
            }
        },
        {
            "id": 13,
            "title": "Estée Lauder Advanced Night Repair Serum",
            "price": 79.99,
            "description": "Estée Lauder Advanced Night Repair Serum reduces multiple signs of aging for a smoother, more radiant, and youthful look.",
            "image": "https://www.esteelauder.in/media/export/cms/products/558x768/el_sku_PG5101_IN_558x768_0.jpg", 
            "rating": {
                "rate": 4.8,
                "count": 350
            }
        },
        {
            "id": 14,
            "title": "Clinique Dramatically Different Moisturizing Lotion",
            "price": 27.00,
            "description": "Clinique Dramatically Different Moisturizing Lotion helps strengthen skin’s own moisture barrier for a soft, smooth, and radiant look.",
            "image": "https://www.clinique.in/media/export/cms/products/1200x1500/cl_sku_KWW201_1200x1500_0.png", 
            "rating": {
                "rate": 4.5,
                "count": 600
            }
        },
        {
            "id": 15,
            "title": "MAC Matte Lipstick",
            "price": 19.00,
            "description": "MAC Matte Lipstick features a creamy rich formula with high color payoff in a no-shine matte finish.",
            "image": "https://m.media-amazon.com/images/I/61tGu3YafsL._SX522_.jpg", 
            "rating": {
                "rate": 4.7,
                "count": 700
            }
    }
];