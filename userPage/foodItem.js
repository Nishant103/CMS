const foodItem = [
    {
        id: 1,
        name: 'Afghani Biryani',
        category: 'biryani',
        rating: 4.3,
        price: 130,
        img: './images/biryani/Afghani biryani.jpg',
        quantity: 1
    },
    {
        id: 2,
        name: 'Ambur Biryani',
        category: 'biryani',
        rating: 4.3,
        price: 180,
        img: './images/biryani/Ambur biryani.jpg',
        quantity: 1
    },
    {
        id: 3,
        name: 'Bombay Biryani',
        category: 'biryani',
        rating: 4.3,
        price: 200,
        img: './images/biryani/bombay biryani.jpg',
        quantity: 1
    },
    {
        id: 4,
        name: 'Mughlai Biryani',
        category: 'biryani',
        rating: 4.3,
        price: 250,
        img: './images/biryani/mughlai biryani.jpg',
        quantity: 1
    },
    {
        id: 5,
        name: 'Lunknowi Biryani',
        category: 'biryani',
        rating: 4.3,
        price: 190,
        img: './images/biryani/lucknowi biryani.jpg',
        quantity: 1
    },
    {
        id: 6,
        name: 'Kashmiri Biryani',
        category: 'biryani',
        rating: 4.3,
        price: 140,
        img: './images/biryani/kashmiri biryani.jpg',
        quantity: 1
    },
    {
        id: 7,
        name: 'Butter Chicken',
        category: 'chicken',
        rating: 4.3,
        price: 150,
        img: './images/chicken/butter masala.jpg',
        quantity: 1
    },
    {
        id: 8,
        name: 'Chicken tikka masala',
        category: 'chicken',
        rating: 4.3,
        price: 170,
        img: './images/chicken/chicken tikka masala.jpg',
        quantity: 1
    },
    {
        id: 9,
        name: 'Kabab Chicken',
        category: 'chicken',
        rating: 4.3,
        price: 100,
        img: './images/chicken/kabab.jpg',
        quantity: 1
    },
    {
        id: 10,
        name: 'Tandoori Chicken',
        category: 'chicken',
        rating: 4.3,
        price: 150,
        img: './images/chicken/tandoori.jpg',
        quantity: 1
    },
    {
        id: 11,
        name: 'Chicken Pizza',
        category: 'chicken',
        rating: 4.3,
        price: 220,
        img: './images/chicken/pizza 1.jpg',
        quantity: 1
    },
    {
        id: 12,
        name: 'Chicken Pizza',
        category: 'chicken',
        rating: 4.3,
        price: 200,
        img: './images/chicken/pizza 2.jpg',
        quantity: 1
    },
    {
        id: 13,
        name: 'chopal sch noddole',
        category: 'chinese',
        rating: 4.3,
        price: 250,
        img: './images/chinese/chopal sch noddle.jpg',
        quantity: 1
    },
    {
        id: 14,
        name: 'Chopper noddle',
        category: 'chinese',
        rating: 4.3,
        price: 240,
        img: './images/chinese/chopper noddle.jpg',
        quantity: 1
    },
    {
        id: 15,
        name: 'Prawn fried rice',
        category: 'chinese',
        rating: 4.3,
        price: 130,
        img: './images/chinese/Prawn fried rice.jpg',
        quantity: 1
    },
    {
        id: 16,
        name: 'Triple rice',
        category: 'chinese',
        rating: 4.3,
        price: 150,
        img: './images/chinese/Triple rice.jpg',
        quantity: 1
    },
    {
        id: 17,
        name: 'Veg fried rice',
        category: 'chinese',
        rating: 4.3,
        price: 120,
        img: './images/chinese/veg fried rice.jpg',
        quantity: 1
    },
    {
        id: 18,
        name: 'Schezwan rice',
        category: 'chinese',
        rating: 4.3,
        price: 180,
        img: './images/chinese/Schezwan rice.jpg',
        quantity: 1
    },
    {
        id: 19,
        name: 'Butter masala',
        category: 'paneer',
        rating: 4.3,
        price: 135,
        img: './images/paneer/butter masala.jpg',
        quantity: 1
    },
    {
        id: 20,
        name: 'Kadai paneer',
        category: 'paneer',
        rating: 4.3,
        price: 145,
        img: './images/paneer/kadai paneer.jpg',
        quantity: 1
    },
    {
        id: 21,
        name: 'Mutter masala',
        category: 'paneer',
        rating: 4.3,
        price: 175,
        img: './images/paneer/mutter masala.jpg',
        quantity: 1
    },
    {
        id: 22,
        name: 'Paneer jaipur style',
        category: 'paneer',
        rating: 4.3,
        price: 120,
        img: './images/paneer/paneer jaipur style.jpg',
        quantity: 1
    },
    {
        id: 23,
        name: 'Paneer roll',
        category: 'paneer',
        rating: 4.3,
        price: 125,
        img: './images/paneer/paneer roll.jpg',
        quantity: 1
    },
    {
        id: 24,
        name: 'Panner tikka',
        category: 'paneer',
        rating: 4.3,
        price: 110,
        img: './images/paneer/paneer tikka.jpg',
        quantity: 1
    },
    {
        id: 25,
        name: 'Dahi vada',
        category: 'south-indian',
        rating: 4.3,
        price: 80,
        img: './images/south indian/dahi vada.jpg',
        quantity: 1
    },
    {
        id: 26,
        name: 'Fry idli',
        category: 'south-indian',
        rating: 4.3,
        price: 90,
        img: './images/south indian/fry idli.jpg',
        quantity: 1
    },
    {
        id: 27,
        name: 'Masala dosa',
        category: 'south-indian',
        rating: 4.3,
        price: 85,
        img: './images/south indian/masala dosa.jpg',
        quantity: 1
    },
    {
        id: 28,
        name: 'Panner dosa',
        category: 'south-indian',
        rating: 4.3,
        price: 145,
        img: './images/south indian/paneer dosa.jpg',
        quantity: 1
    },
    {
        id: 29,
        name: 'Sada dosa',
        category: 'south-indian',
        rating: 4.3,
        price: 75,
        img: './images/south indian/sada dosa.jpg',
        quantity: 1
    },
    {
        id: 30,
        name: 'Sambar idli',
        category: 'south-indian',
        rating: 4.3,
        price: 60,
        img: './images/south indian/sambar idli.jpg',
        quantity: 1
    },
    {
        id: 31,
        name: 'Aloo mutter',
        category: 'vegetable',
        rating: 4.3,
        price: 170,
        img: './images/vegetable/aloo mutter.jpg',
        quantity: 1
    },
    {
        id: 32,
        name: 'Baby corn',
        category: 'vegetable',
        rating: 4.3,
        price: 220,
        img: './images/vegetable/baby corn.jpg',
        quantity: 1
    },
    {
        id: 33,
        name: 'Kolhapuri',
        category: 'vegetable',
        rating: 4.3,
        price: 190,
        img: './images/vegetable/kolhapuri.jpg',
        quantity: 1
    },
    {
        id: 34,
        name: 'Metti',
        category: 'vegetable',
        rating: 4.3,
        price: 140,
        img: './images/vegetable/aloo mutter.jpg',
        quantity: 1
    },
    {
        id: 35,
        name: 'Mushroom masala',
        category: 'vegetable',
        rating: 4.3,
        price: 175,
        img: './images/vegetable/mushroom masala.jpg',
        quantity: 1
    },
    {
        id: 31,
        name: 'Mushroom tikka',
        category: 'vegetable',
        rating: 4.3,
        price: 190,
        img: './images/vegetable/mushroom tikka.jpg',
        quantity: 1
    },
   
]

export {foodItem};