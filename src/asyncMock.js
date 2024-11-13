const transformations = [
    {
        "id": 1,
        "name": "Goku SSJ",
        "image": "https://dragonball-api.com/transformaciones/goku_ssj.webp",
        "ki": "3 Billion"
    },
    {
        "id": 2,
        "name": "Goku SSJ2",
        "image": "https://dragonball-api.com/transformaciones/goku_ssj2.webp",
        "ki": "6 Billion"
    },
    {
        "id": 3,
        "name": "Goku SSJ3",
        "image": "https://dragonball-api.com/transformaciones/goku_ssj3.webp",
        "ki": "24 Billion"
    },
    {
        "id": 4,
        "name": "Goku SSJ4",
        "image": "https://dragonball-api.com/transformaciones/goku_ssj4.webp",
        "ki": "2 Quadrillion"
    },
    {
        "id": 5,
        "name": "Goku SSJB",
        "image": "https://dragonball-api.com/transformaciones/goku_ssjb.webp",
        "ki": "9 Quintillion"
    },
    {
        "id": 44,
        "name": "Goku Ultra Instinc",
        "image": "https://dragonball-api.com/transformaciones/goku_ultra.webp",
        "ki": "90 Septillion"
    }
    ]


export const getProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(()=> {
            resolve(transformations)
        },500)
    })
}