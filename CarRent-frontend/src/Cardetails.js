import gt1 from './Carimages/gt1.jpg';
import gt2 from './Carimages/gt2.jpg';
import gt3 from './Carimages/gt3.jpg';
import gt4 from './Carimages/gt4.jpg';
import gt5 from './Carimages/gt5.jpg';
import gt6 from './Carimages/gt6.jpg';
import gt7 from './Carimages/gt7.jpg';
import gt8 from './Carimages/gt8.jpg';
import gt9 from './Carimages/gt9.jpg';
import gt10 from './Carimages/gt10.jpg';
import hatch1 from './Carimages/hatch1.jpg';
import hatch2 from './Carimages/hatch2.jpg';
import hatch3 from './Carimages/hatch3.jpg';
import hatch4 from './Carimages/hatch4.jpg';
import hatch5 from './Carimages/hatch5.jpg';
import hatch6 from './Carimages/hatch6.jpg';
import hatch7 from './Carimages/hatch7.jpg';
import hatch8 from './Carimages/hatch8.jpg';
import suv1 from './Carimages/suv1.jpg';
import suv2 from './Carimages/suv2.jpg';
import suv3 from './Carimages/suv3.jpg';
import suv4 from './Carimages/suv4.jpg';
import suv5 from './Carimages/suv5.jpg';
import suv6 from './Carimages/suv6.jpg';
import suv7 from './Carimages/suv7.jpg';
import suv8 from './Carimages/suv8.jpg';








let all_cars = [


    {
        "id": 1,
        "image": suv1,
        "name": "Jeep wagoneer",
        "passengers": 7,
        "fuel": "gasoline",
        "category": "SUV",
        "dailyrate": 500


    },


    {
        "id": 2,
        "image": gt1,
        "name": "Mustang gt350",
        "passengers": 5,
        "fuel": "gasoline",
        "category": "GT",
        "dailyrate": 300


    },

    {
        "id": 3,
        "image": hatch1,
        "name": "Civic Type R",
        "passengers": 5,
        "fuel": "gasoline",
        "category": "hatch",
        "dailyrate": 200


    },
    {
        "id": 4,
        "image": suv2,
        "name": "Jeep Cherokee",
        "passengers": 5,
        "fuel": "gasoline",
        "category": "SUV",
        "dailyrate": 400


    },
    {
        "id": 5,
        "image": gt2,
        "name": "Dodge Demon",
        "passengers": 5,
        "fuel": "gasoline",
        "category": "GT",
        "dailyrate": 300


    },
    {
        "id": 6,
        "image": hatch2,
        "name": "Golf R",
        "passengers": 5,
        "fuel": "gasoline",
        "category": "hatch",
        "dailyrate": 200


    },
    {
        "id": 7,
        "image": suv3,
        "name": "range Rover",
        "passengers": 7,
        "fuel": "gasoline",
        "category": "SUV",
        "dailyrate": 450


    },
    {
        "id": 8,
        "image": gt3,
        "name": "Mclaren Senna",
        "passengers": 2,
        "fuel": "gasoline",
        "category": "GT",
        "dailyrate": 700


    },
    {
        "id": 9,
        "image": hatch3,
        "name": "Merecedes A class",
        "passengers": 5,
        "fuel": "gasoline",
        "category": "hatch",
        "dailyrate": 200


    },
    {
        "id": 10,
        "image": suv4,
        "name": "Mercedes G-wagon",
        "passengers": 5,
        "fuel": "gasoline",
        "category": "SUV",
        "dailyrate": 450


    },
    {
        "id": 11,
        "image": gt4,
        "name": "BMW M3",
        "passengers": 2,
        "fuel": "gasoline",
        "category": "GT",
        "dailyrate": 350


    },
    {
        "id": 12,
        "image": hatch4,
        "name": "Adi RS4",
        "passengers": 5,
        "fuel": "gasoline",
        "category": "hatch",
        "dailyrate": 250


    },
    {
        "id": 13,
        "image": suv5,
        "name": "Mercedes GLS",
        "passengers": 5,
        "fuel": "gasoline",
        "category": "SUV",
        "dailyrate": 450


    },
    {
        "id": 14,
        "image": gt5,
        "name": "Audi S4",
        "passengers": 4,
        "fuel": "gasoline",
        "category": "GT",
        "dailyrate": 350


    },
    {
        "id": 15,
        "image": hatch5,
        "name": "Renault Megane",
        "passengers": 5,
        "fuel": "gasoline",
        "category": "hatch",
        "dailyrate": 250


    },
    {
        "id": 16,
        "image": suv6,
        "name": "Mercedes GLB",
        "passengers": 5,
        "fuel": "gasoline",
        "category": "SUV",
        "dailyrate": 450


    },
    {
        "id": 17,
        "image": gt6,
        "name": "Ferrari Portofino",
        "passengers": 2,
        "fuel": "gasoline",
        "category": "GT",
        "dailyrate": 350


    },
    {
        "id": 18,
        "image": hatch6,
        "name": "Alfa romeo",
        "passengers": 4,
        "fuel": "gasoline",
        "category": "hatch",
        "dailyrate": 250


    },
    {
        "id": 19,
        "image": suv7,
        "name": "Toyota Land Cruiser",
        "passengers": 7,
        "fuel": "gasoline",
        "category": "SUV",
        "dailyrate": 500


    },
    {
        "id": 20,
        "image": gt7,
        "name": "Lamborghini Gallardo",
        "passengers": 2,
        "fuel": "gasoline",
        "category": "GT",
        "dailyrate": 650


    },
    {
        "id": 21,
        "image": hatch7,
        "name": "Tesla Model Y",
        "passengers": 5,
        "fuel": "Electric",
        "category": "hatch",
        "dailyrate": 250


    },
    {
        "id": 22,
        "image": suv8,
        "name": "BMW IX",
        "passengers": 7,
        "fuel": "Electric",
        "category": "SUV",
        "dailyrate": 450


    },
    {
        "id": 23,
        "image": gt8,
        "name": "Tesla Model 3",
        "passengers": 4,
        "fuel": "Electric",
        "category": "GT",
        "dailyrate": 350


    },
    {
        "id": 24,
        "image": hatch8,
        "name": "Hyundai Ioniq 5",
        "passengers": 7,
        "fuel": "Electric",
        "category": "hatch",
        "dailyrate": 250


    },
    {
        "id": 25,
        "image": gt9,
        "name": "Porsche Tycan",
        "passengers": 4,
        "fuel": "Electric",
        "category": "GT",
        "dailyrate": 350


    },
    {
        "id": 26,
        "image": gt10,
        "name": "Audi RS e-tron",
        "passengers": 4,
        "fuel": "Electric",
        "category": "GT",
        "dailyrate": 350


    },

]

export default all_cars;