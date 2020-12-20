// Neu, In Bearbeitung, Abgeschlossen
export const angeboteListe = [
    {
        id: 1,
        number: 900004,
        name: 'Herr Müller',
        status: 'Neu',
        type: "Umzug",
        price: 1200,
        volume: 67,
        grunddaten: {
            start: {
                ort: "Wittlich",
                plz: 54516,
                haltezone: false,
                distanceToParkingSpot: 39
            },
            end: {
                ort: "Trier",
                plz: 54926,
                haltezone: true,
                distanceToParkingSpot: 20
            }
        },
        kontakt: {
            anrede: 'Herr',
            vorname: 'Max',
            nachname: 'Müller',
            email: 'max@mueller.de',
            phone: '06571123456789'
        },
        rooms: [
            {
                "id": 1,
                "name": "Wohnzimmer",
                "moebel": [
                    {
                        "id": 1,
                        "name": "Tisch-klein",
                        "anzahl": 1,
                        "volumen": 1.5,
                        abbauen: false,
                        "entsorgen": false
                    },
                    {
                        "id": 6,
                        "name": "Sessel",
                        "anzahl": 2,
                        "volumen": 1.5,
                        abbauen: false,
                        "entsorgen": false
                    },
                    {
                        "id": 9,
                        "name": "Eck-Couch",
                        "anzahl": 2,
                        "volumen": 9.5,
                        abbauen: true,
                        "entsorgen": false
                    },
                    {
                        "id": 11,
                        "name": "Schrank-groß",
                        "anzahl": 1,
                        "volumen": 3.5,
                        abbauen: true,
                        "entsorgen": false
                    },
                    {
                        "id": 18,
                        "name": "Lautsprecher",
                        "anzahl": 2,
                        "volumen": 0.5,
                        abbauen: false,
                        "entsorgen": false
                    }                   
                ]
            },
            {
                "id": 2,
                "name": "Schlafzimmer",
                "moebel": [
                    {
                        "id": 23,
                        "name": "Doppelbett",
                        "anzahl": 1,
                        "volumen": 3.5,
                        abbauen: true,
                        "entsorgen": false
                    },
                    {
                        "id": 21,
                        "name": "Nachttisch",
                        "anzahl": 2,
                        "volumen": 0.5,
                        abbauen: false,
                        "entsorgen": false
                    },
                    {
                        "id": 20,
                        "name": "Stehlampe",
                        "anzahl": 2,
                        "volumen": 1.0,
                        abbauen: false,
                        "entsorgen": false
                    },
                    {
                        "id": 17,
                        "name": "Spiegel",
                        "anzahl": 1,
                        "volumen": 1.0,
                        abbauen: false,
                        "entsorgen": false
                    },
                    {
                        "id": 11,
                        "name": "Schrank-groß",
                        "anzahl": 2,
                        "volumen": 3.5,
                        abbauen: true,
                        "entsorgen": true
                    },
                    {
                        "id": 6,
                        "name": "Sessel",
                        "anzahl": 1,
                        "volumen": 2.5,
                        abbauen: true,
                        "entsorgen": true
                    },
                    {
                        "id": 2,
                        "name": "Schrank",
                        "anzahl": 1,
                        "volumen": 1.5,
                        abbauen: true,
                        "entsorgen": false
                    }
                ]
            },
            {
                "id": 3,
                "name": "Küche",
                "moebel": [
                    {
                        "id": 11,
                        "name": "Schrank-groß",
                        "anzahl": 2,
                        "volumen": 3.5,
                        abbauen: true,
                        "entsorgen": false
                    },
                    {
                        "id": 2,
                        "name": "Schrank",
                        "anzahl": 4,
                        "volumen": 1.5,
                        abbauen: true,
                        "entsorgen": false
                    },
                    {
                        "id": 24,
                        "name": "Kühlschrank",
                        "anzahl": 1,
                        "volumen": 3.0,
                        abbauen: false,
                        "entsorgen": false
                    },
                    {
                        "id": 14,
                        "name": "Spülmaschine",
                        "anzahl": 1,
                        "volumen": 2.5,
                        abbauen: false,
                        "entsorgen": false
                    }                  
                ]
            },
        ],
        vehicle: [
            {
                type: 'groß',
                amount: 1
            },
            {
                type: 'klein',
                amount: 1
            }
        ]
    },
    //  {
    //     id: 2,
    //     number: 900005,
    //     name: 'Herr Meister',
    //     status: 'In Bearbeitung',
    //      type: "Entrümpelung",
    //     rooms: [
    //         {
    //             "id": 1,
    //             "name": "Wohnzimmer",
    //             "moebel": [
    //                 {
    //                     "id": 6,
    //                     "name": "Sessel",
    //                     "anzahl": 2,
    //                     "volumen": 1.5,
    //                     abbauen: false,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 9,
    //                     "name": "Eck-Couch",
    //                     "anzahl": 2,
    //                     "volumen": 9.5,
    //                     abbauen: true,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 11,
    //                     "name": "Schrank-groß",
    //                     "anzahl": 2,
    //                     "volumen": 3.5,
    //                     abbauen: true,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 18,
    //                     "name": "Lautsprecher",
    //                     "anzahl": 3,
    //                     "volumen": 0.5,
    //                     abbauen: false,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 2,
    //                     "name": "Schrank",
    //                     "anzahl": 2,
    //                     "volumen": 1.5,
    //                     abbauen: true,
    //                     "entsorgen": false
    //                 }
    //             ]
    //         },
    //         {
    //             "id": 2,
    //             "name": "Schlafzimmer",
    //             "moebel": [
    //                 {
    //                     "id": 23,
    //                     "name": "Doppelbett",
    //                     "anzahl": 1,
    //                     "volumen": 3.5,
    //                     abbauen: true,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 21,
    //                     "name": "Nachttisch",
    //                     "anzahl": 2,
    //                     "volumen": 0.5,
    //                     abbauen: false,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 20,
    //                     "name": "Stehlampe",
    //                     "anzahl": 2,
    //                     "volumen": 1.0,
    //                     abbauen: false,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 17,
    //                     "name": "Spiegel",
    //                     "anzahl": 1,
    //                     "volumen": 1.0,
    //                     abbauen: false,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 11,
    //                     "name": "Schrank-groß",
    //                     "anzahl": 2,
    //                     "volumen": 3.5,
    //                     abbauen: true,
    //                     "entsorgen": true
    //                 },
    //                 {
    //                     "id": 6,
    //                     "name": "Sessel",
    //                     "anzahl": 1,
    //                     "volumen": 2.5,
    //                     abbauen: true,
    //                     "entsorgen": true
    //                 },
    //                 {
    //                     "id": 2,
    //                     "name": "Schrank",
    //                     "anzahl": 1,
    //                     "volumen": 1.5,
    //                     abbauen: true,
    //                     "entsorgen": false
    //                 }
    //             ]
    //         },
    //         {
    //             "id": 3,
    //             "name": "Küche",
    //             "moebel": [
    //                 {
    //                     "id": 2,
    //                     "name": "Schrank",
    //                     "anzahl": 4,
    //                     "volumen": 1.5,
    //                     abbauen: true,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 24,
    //                     "name": "Kühlschrank",
    //                     "anzahl": 1,
    //                     "volumen": 3.0,
    //                     abbauen: false,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 14,
    //                     "name": "Spülmaschine",
    //                     "anzahl": 1,
    //                     "volumen": 2.5,
    //                     abbauen: false,
    //                     "entsorgen": false
    //                 }
    //             ]
    //         },
    //         {
    //             "id": 5,
    //             "name": "Esszimmer",
    //             "moebel": [
    //                 {
    //                     "id": 2,
    //                     "name": "Schrank",
    //                     "anzahl": 2,
    //                     "volumen": 1.5,
    //                     abbauen: true,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 5,
    //                     "name": "Stuhl",
    //                     "anzahl": 6,
    //                     "volumen": 1.5,
    //                     abbauen: true,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 15,
    //                     "name": "Bank-Esszimmer",
    //                     "anzahl": 1,
    //                     "volumen": 3.5,
    //                     abbauen: true,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 25,
    //                     "name": "Tisch-groß",
    //                     "anzahl": 1,
    //                     "volumen": 5.5,
    //                     abbauen: true,
    //                     "entsorgen": false
    //                 },
    //                 {
    //                     "id": 25,
    //                     "name": "Bank",
    //                     "anzahl": 1,
    //                     "volumen": 1.5,
    //                     abbauen: true,
    //                     "entsorgen": false
    //                 }
    //             ]
    //         }
    //     ]
    // }
]
