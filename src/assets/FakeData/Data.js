import { images } from "../images"
const Blogs =
    [
        {
            id: 1,
            type: 'Tips',
            title: "HOW TO TRIM CAT'S NAILS",
            previewContent: "If you're wondering whether it is necessary to trim a cat's claws, trimming a cat's claws every few weeks is an important part of maintaining your pet's health. Not only does a quick trim protect you, your pet and your family, it can also save your sofa, curtains and other furniture. If the idea of trimming a cat's claws has you biting your nails, know that all it takes is some.",
            body: "",
            image: images.blog1,
            date: '3/3/2023',
            time: '4:27'
        },
        {
            id: 2,
            type: 'Diet',
            title: "BENEFITS FROM HAVING A SELF-CLEANING CAT LITTER BOX",
            previewContent: "It's every cat owner's dream: a litter box that scoops itself. But, how effective are these devices? Do they live up to the claims that they can save you time and hassle? Are they worth the high cost?An automatic litter box is a win-win situation for both the cat parent and their feline; you get a break from.",
            body: "",
            image: images.blog2,
            date: '5/3/2023',
            time: '3:34'
        },
        {
            id: 3,
            type: 'Cat Travel',
            title: "THINKING OF GETTING A CAT?",
            previewContent: "What is important is that you try to find a cat that will interact with you if you want it to. All cats are not the same and how each individual cat behaves with you can depend on its inherent personality and early experiences (or lack of experiences), which can make it fearful or confident with people and life in general. The environment in which you keep a cat is.",
            body: "",
            image: images.blog3,
            date: '3/3/2023',
            time: '4:27'
        },
        {
            id: 4,
            type: 'Cat Training',
            title: "TIPS FOR A CLEAN HOME AND HEALTHY CAT",
            previewContent: "Your fabulous feline may think cat hair is the ultimate accessory. If you don't agree, start by getting a good vacuum cleaner. Look for one with strong suction that has a pet hair attachment. Don't forget to vacuum chairs and curtains. Wear wet rubber gloves and run your hands over your cat's favorite spots.",
            body: "",
            image: images.blog4,
            date: '3/3/2023',
            time: '4:27'
        },
        {
            id: 5,
            type: 'Diseases',
            title: "HOW TO MAKE YOUR CAT HAPPY: 10 THINGS YOU CAN DO RIGHT NOW",
            previewContent: "If you're wondering whether it is necessary to trim a cat's claws, trimming a cat's claws every few weeks is an important part of maintaining your pet's health. Not only does a quick trim protect you, your pet and your family, it can also save your sofa, curtains and other furniture. If the idea of trimming a cat's claws has you biting your nails, know that all it takes is some",
            body: "",
            image: images.blog5,
            date: '3/3/2023',
            time: '4:27'
        },
        {
            id: 6,
            type: 'Diseases',
            title: "THINGS YOU MAY NOT KNOW ABOUT YOUR CUTE LITTLE CATS",
            previewContent: "Nighttime can be a great time for hunting! Cats can see well in the dark. Their pupils become very large and their eyes glow. A cat's whiskers can help them in the dark also. In order to get through small spaces, a cat will use their whiskers to see if the rest of their body will fit. Cats have 24 whiskers",
            body: "",
            image: images.blog6,
            date: '3/3/2023',
            time: '4:27'
        },
        {
            id: 7,
            type: 'Tips',
            title: "HOW TO TRIM CAT'S NAILS",
            previewContent: "If you're wondering whether it is necessary to trim a cat's claws, trimming a cat's claws every few weeks is an important part of maintaining your pet's health. Not only does a quick trim protect you, your pet and your family, it can also save your sofa, curtains and other furniture. If the idea of trimming a cat's claws has you biting your nails, know that all it takes is some",
            body: "",
            image: images.blog7,
            date: '3/3/2023',
            time: '4:27'
        },
        {
            id: 8,
            type: 'Diet',
            title: "HOW TO TRIM CAT'S NAILS",
            previewContent: "If you're wondering whether it is necessary to trim a cat's claws, trimming a cat's claws every few weeks is an important part of maintaining your pet's health. Not only does a quick trim protect you, your pet and your family, it can also save your sofa, curtains and other furniture. If the idea of trimming a cat's claws has you biting your nails, know that all it takes is some",
            body: "",
            image: images.blog8,
            date: '3/3/2023',
            time: '4:27'
        },
        {
            id: 9,
            type: 'Cat Training',
            title: "HOW TO TRIM CAT'S NAILS",
            previewContent: "If you're wondering whether it is necessary to trim a cat's claws, trimming a cat's claws every few weeks is an important part of maintaining your pet's health. Not only does a quick trim protect you, your pet and your family, it can also save your sofa, curtains and other furniture. If the idea of trimming a cat's claws has you biting your nails, know that all it takes is some",
            body: "",
            image: images.blog9,
            date: '3/3/2023',
            time: '4:27'
        },
        {
            id: 10,
            type: 'Cat Training',
            title: "HOW TO TRIM CAT'S NAILS",
            previewContent: "If you're wondering whether it is necessary to trim a cat's claws, trimming a cat's claws every few weeks is an important part of maintaining your pet's health. Not only does a quick trim protect you, your pet and your family, it can also save your sofa, curtains and other furniture. If the idea of trimming a cat's claws has you biting your nails, know that all it takes is some",
            body: "",
            image: images.blog10,
            date: '3/3/2023',
            time: '4:27'
        },
    ]

const Category = [
    {
        images: images.catFood,
        type: 'Cat Food'
    },
    {
        images: images.catAccessories,
        type: 'Cat Accessories'
    },
    {
        images: images.catFurniture,
        type: 'Cat Furniture'
    },
    {
        images: images.catFood,
        type: 'Cat Proof Home'
    },
    {
        images: images.catFeeders,
        type: 'Cat Feeders'
    },
    {
        images: images.catLittleBoxes,
        type: 'Cat Little Boxes'
    },
    {
        images: images.catGrooming,
        type: 'Cat Grooming'
    },
    {
        images: images.catHouses,
        type: 'Cat Houses'
    },
]


const Product = [
    {
        id: 1,
        name: 'New Petkit Pura MAX',
        image: images.product,
        type: 'CAT FURNITURE',
        price: "$999",
        view: 0,
        sold: 73,
        selling: "50%"
    },
    {
        id: 2,
        name: 'Cactus Cat Scratcher Post',
        image: images.product1,
        type: 'CAT FURNITURE',
        price: "$99",
        view: 0,
        sold: 73,
        selling: "50%"
    },
    {
        id: 3,
        name: 'Smart Pet Feeder 4L with Camera',
        image: images.product2,
        type: 'CAT FURNITURE',
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 4,
        name: 'Wood Multilevel Cat Condo',
        type: "CAT ACCESSORIES",
        image: images.product3,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 5,
        name: 'Winter Cat Clothes',
        type: "CAT ACCESSORIES",
        image: images.product4,
        price: "$9",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 6,
        name: 'Whack A Mole Cat Toy',
        type: "CAT ACCESSORIES",
        image: images.product5,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 7,
        name: 'One Shoulder Pet Bag',
        type: "CAT ACCESSORIES",
        image: images.product6,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 8,
        name: 'Petkit Pura MAX Double-Layer Mat',
        type: "CAT ACCESSORIES",
        image: images.product7,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 9,
        name: 'Plush Cat Tunnel Toy',
        type: "CAT ACCESSORIES",
        image: images.product8,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 10,
        name: 'Wooden 2/3 Levels Cat Toy Tower',
        type: "CAT ACCESSORIES",
        image: images.product9,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 11,
        name: 'Cactus Cat Scratcher Post',
        type: "CAT ACCESSORIES",
        image: images.product10,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 12,
        name: 'Winter Cat Clothes',
        type: "CAT ACCESSORIES",
        image: images.product11,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 13,
        name: 'Soft Pet Clothes',
        type: "CAT ACCESSORIES",
        image: images.product12,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 14,
        name: 'Smart Cat Teaser Toy',
        type: "CAT ACCESSORIES",
        image: images.product13,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 15,
        name: 'Soft Mesh Pet Harnesses',
        type: "CAT ACCESSORIES",
        image: images.product14,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 16,
        name: 'Silicone Waterproof Pet Mat',
        type: "CAT ACCESSORIES",
        image: images.product15,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 17,
        name: 'Whack A Mole Cat Toy',
        type: "CAT ACCESSORIES",
        image: images.product16,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 18,
        name: 'Wooden 2/3 Levels Cat Toy Tower',
        type: "CAT ACCESSORIES",
        image: images.product17,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 19,
        name: 'Set Reflective Cat Harness',
        type: "CAT ACCESSORIES",
        image: images.product18,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 20,
        name: 'Printed Cats Foldable Pet Carrier',
        type: "CAT ACCESSORIES",
        image: images.product19,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 21,
        name: 'Plush Cat Tunnel Toy',
        type: "CAT ACCESSORIES",
        image: images.product20,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 22,
        name: 'Petkit Pura MAX Double-Layer Mat',
        type: "CAT ACCESSORIES",
        image: images.product21,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 23,
        name: 'One Shoulder Pet Bag',
        type: "CAT ACCESSORIES",
        image: images.product22,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },
    {
        id: 24,
        name: 'Multi-Angle Cat LED Laser Toy',
        type: "CAT ACCESSORIES",
        image: images.product23,
        price: "$99",
        view: 11,
        sold: 783,
        selling: "50%"
    },

]

export { Blogs, Category, Product }





