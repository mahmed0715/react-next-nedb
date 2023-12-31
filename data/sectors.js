
const Datastore = require('nedb-promises');
const sectorOptions = Datastore.create('/tmp/sectors.json');
const count = await sectorOptions.count();
console.log({count})
if (!count) sectorOptions.insert({
    "_id": "1",
    "data": [
        {
            "label": "Manufacturing",
            "options": [
                {
                    "value": "1",
                    "label": "Manufacturing"
                },
                {
                    "value": "19",
                    "label": "Construction materials"
                },
                {
                    "value": "18",
                    "label": "Electronics and Optics"
                },
                {
                    "value": "6",
                    "label": "Food and Beverage"
                },
                {
                    "value": "342",
                    "label": "Bakery & confectionery products"
                },
                {
                    "value": "43",
                    "label": "Beverages"
                },
                {
                    "value": "42",
                    "label": "Fish & fish products"
                },
                {
                    "value": "40",
                    "label": "Meat & meat products"
                },
                {
                    "value": "39",
                    "label": "Milk & dairy products"
                },
                {
                    "value": "437",
                    "label": "Other"
                },
                {
                    "value": "378",
                    "label": "Sweets & snack food"
                }
            ]
        },
        {
            "label": "Furniture",
            "options": [
                {
                    "value": "13",
                    "label": "Furniture"
                },
                {
                    "value": "389",
                    "label": "Bathroom/sauna"
                },
                {
                    "value": "385",
                    "label": "Bedroom"
                },
                {
                    "value": "390",
                    "label": "Children’s room"
                },
                {
                    "value": "98",
                    "label": "Kitchen"
                },
                {
                    "value": "101",
                    "label": "Living room"
                },
                {
                    "value": "392",
                    "label": "Office"
                },
                {
                    "value": "394",
                    "label": "Other (Furniture)"
                },
                {
                    "value": "341",
                    "label": "Outdoor"
                },
                {
                    "value": "99",
                    "label": "Project furniture"
                }
            ]
        },
        {
            "label": "Other",
            "options": [
                {
                    "value": "3",
                    "label": "Other"
                },
                {
                    "value": "37",
                    "label": "Creative industries"
                },
                {
                    "value": "29",
                    "label": "Energy technology"
                },
                {
                    "value": "33",
                    "label": "Environment"
                }
            ]
        },
        {
            "label": "Machinery and Maritime",
            "options": [
                {
                    "value": "12",
                    "label": "Machinery"
                },
                {
                    "value": "94",
                    "label": "Machinery components"
                },
                {
                    "value": "91",
                    "label": "Machinery equipment/tools"
                },
                {
                    "value": "224",
                    "label": "Manufacture of machinery"
                },
                {
                    "value": "97",
                    "label": "Maritime"
                },
                {
                    "value": "271",
                    "label": "Aluminium and steel workboats"
                },
                {
                    "value": "269",
                    "label": "Boat/Yacht building"
                },
                {
                    "value": "230",
                    "label": "Ship repair and conversion"
                },
                {
                    "value": "93",
                    "label": "Metal structures"
                },
                {
                    "value": "508",
                    "label": "Other"
                },
                {
                    "value": "227",
                    "label": "Repair and maintenance service"
                }
            ]
        },
        {
            "label": "Industry Categories",
            "options": [
                {
                    "value": "11",
                    "label": "Metalworking",
                    "options": [
                        {
                            "value": "67",
                            "label": "Construction of metal structures"
                        },
                        {
                            "value": "263",
                            "label": "Houses and buildings"
                        },
                        {
                            "value": "267",
                            "label": "Metal products"
                        },
                        {
                            "value": "542",
                            "label": "Metal works"
                        },
                        {
                            "value": "75",
                            "label": "CNC-machining"
                        },
                        {
                            "value": "62",
                            "label": "Forgings, Fasteners"
                        },
                        {
                            "value": "69",
                            "label": "Gas, Plasma, Laser cutting"
                        },
                        {
                            "value": "66",
                            "label": "MIG, TIG, Aluminum welding"
                        }
                    ]
                },
                {
                    "value": "9",
                    "label": "Plastic and Rubber",
                    "options": [
                        {
                            "value": "54",
                            "label": "Packaging"
                        },
                        {
                            "value": "556",
                            "label": "Plastic goods"
                        },
                        {
                            "value": "559",
                            "label": "Plastic processing technology"
                        },
                        {
                            "value": "55",
                            "label": "Blowing"
                        },
                        {
                            "value": "57",
                            "label": "Moulding"
                        },
                        {
                            "value": "53",
                            "label": "Plastics welding and processing"
                        },
                        {
                            "value": "560",
                            "label": "Plastic profiles"
                        }
                    ]
                },
                {
                    "value": "5",
                    "label": "Printing",
                    "options": [
                        {
                            "value": "148",
                            "label": "Advertising"
                        },
                        {
                            "value": "150",
                            "label": "Book/Periodicals printing"
                        },
                        {
                            "value": "145",
                            "label": "Labelling and packaging printing"
                        }
                    ]
                },
                {
                    "value": "7",
                    "label": "Textile and Clothing",
                    "options": [
                        {
                            "value": "44",
                            "label": "Clothing"
                        },
                        {
                            "value": "45",
                            "label": "Textile"
                        }
                    ]
                },
                {
                    "value": "8",
                    "label": "Wood",
                    "options": [
                        {
                            "value": "337",
                            "label": "Other (Wood)"
                        },
                        {
                            "value": "51",
                            "label": "Wooden building materials"
                        },
                        {
                            "value": "47",
                            "label": "Wooden houses"
                        }
                    ]
                },
                {
                    "value": "3",
                    "label": "Other"
                },
                {
                    "value": "37",
                    "label": "Creative industries"
                },
                {
                    "value": "29",
                    "label": "Energy technology"
                },
                {
                    "value": "33",
                    "label": "Environment"
                },
                {
                    "value": "2",
                    "label": "Service",
                    "options": [
                        {
                            "value": "25",
                            "label": "Business services"
                        },
                        {
                            "value": "35",
                            "label": "Engineering"
                        },
                        {
                            "value": "28",
                            "label": "Information Technology and Telecommunications",
                            "options": [
                                {
                                    "value": "581",
                                    "label": "Data processing, Web portals, E-marketing"
                                },
                                {
                                    "value": "576",
                                    "label": "Programming, Consultancy"
                                },
                                {
                                    "value": "121",
                                    "label": "Software, Hardware"
                                },
                                {
                                    "value": "122",
                                    "label": "Telecommunications"
                                }
                            ]
                        },
                        {
                            "value": "22",
                            "label": "Tourism"
                        },
                        {
                            "value": "141",
                            "label": "Translation services"
                        },
                        {
                            "value": "21",
                            "label": "Transport and Logistics",
                            "options": [
                                {
                                    "value": "111",
                                    "label": "Air"
                                },
                                {
                                    "value": "114",
                                    "label": "Rail"
                                },
                                {
                                    "value": "112",
                                    "label": "Road"
                                },
                                {
                                    "value": "113",
                                    "label": "Water"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).then(() => { }).catch((error) => {
    console.log("errors in inserting data", error);
})
const getSectors = async () => {
    const options = await sectorOptions.findOne({ _id: "1" })
    return options.data;
}
export default getSectors;