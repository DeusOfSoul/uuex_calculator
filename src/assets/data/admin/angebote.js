// Neu, In Bearbeitung, Abgeschlossen
export const angeboteListe = [
    {
        id: 1,
        number: 900004,
        name: 'Herr Müller',
        status: 'Neu',
        rooms: [
            {
                "id": 1,
                "name": "Wohnzimmer",
                "moebel": [
                    {
                        "id": 1,
                        "name": "Tisch",
                        "anzahl": 2,
                        "volumen": 1.5,
                        "abbauen": false,
                        "entsorgen": false
                    }
                ]
            },
            {
                "id": 2,
                "name": "Wohnzimmer",
                "moebel": [
                    {
                        "id": 1,
                        "name": "Tisch",
                        "anzahl": 2,
                        "volumen": 1.5,
                        "abbauen": true,
                        "entsorgen": true
                    }
                ]
            },
        ]
    }
]
