const states = [
  {
    "name": "California",
    "capitalCity": "Sacramento",
    "courses": [
      {
        "name": "DeLaveaga",
        "city": "Santa Cruz",
        "holes": "29",
        "multiplePins": "true",
        "majorTournament": "Masters Cup",
        "par": "87",
        "rating": "A"
      },
      {
        "name": "Aquatic Park",
        "city": "Berkeley",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "Berzerkeley Best Pairs",
        "par": "54",
        "rating": "B"
      },
      {
        "name": "Black Mouse",
        "city": "Felton",
        "holes": "18",
        "multiplePins": "false",
        "majorTournament": "Felton Freeze",
        "par": "54",
        "rating": "C"
      },
    ]
  },
  {
    "name": "Oregon",
    "capitalCity": "Salem",
    "courses": [
      {
        "name": "Adair Park",
        "city": "Corvallis",
        "holes": "8",
        "multiplePins": "true",
        "majorTournament": "Festivus Open",
        "par": "57",
        "rating": "A"
      },
      {
        "name": "Milo McIver",
        "city": "Estacada",
        "holes": "27",
        "multiplePins": "true",
        "majorTournament": "Beaver State Fling",
        "par": "81",
        "rating": "A"
      },
      {
        "name": "Pier Park",
        "city": "Portland",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "Rose City Open",
        "par": "54",
        "rating": "A"
      },
    ]
  },
  {
    "name": "Arizona",
    "capitalCity": "Phoenix",
    "courses": [
      {
        "name": "Fountain Hills Park",
        "city": "Fountain Hills",
        "holes": "18",
        "multiplePins": "false",
        "majorTournament": "The Memorial",
        "par": "56",
        "rating": "A"
      },
      {
        "name": "Visa Del Camino Park",
        "city": "Scottsdale",
        "holes": "18",
        "multiplePins": "false",
        "majorTournament": "The Memorial",
        "par": "58",
        "rating": "A"
      },
      {
        "name": "Oasis",
        "city": "Florence",
        "holes": "9",
        "multiplePins": "false",
        "majorTournament": null,
        "par": "27",
        "rating": "C"
      },
    ]
  },
  {
    "name": "New York",
    "capitalCity": "Albany",
    "courses": [
      {
        "name": "Beaver Island State Park",
        "city": "Grand Island",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "Western New York Amateur Championships",
        "par": "60",
        "rating": "A"
      },
      {
        "name": "Chautauqua County Fair Grounds",
        "city": "Dunkirk",
        "holes": "2",
        "multiplePins": "false",
        "majorTournament": null,
        "par": "6",
        "rating": "D"
      },
      {
        "name": "Green Lakes State Park",
        "city": "Fayetteville",
        "holes": "9",
        "multiplePins": "false",
        "majorTournament": null,
        "par": "27",
        "rating": "C"
      },
    ]
  },
  {
    "name": "North Carolina",
    "capitalCity": "Raleigh",
    "courses": [
      {
        "name": "Renaissance Gold",
        "city": "Charlotte",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "Carolina Clash",
        "par": "62",
        "rating": "A"
      },
      {
        "name": "Hornet's Nest",
        "city": "Charlotte",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "Carolina Clash",
        "par": "60",
        "rating": "A"
      },
      {
        "name": "Nevin",
        "city": "Charlotte",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "Carolina Clash",
        "par": "59",
        "rating": "A"
      },
    ]
  },
  {
    "name": "Texas",
    "capitalCity": "Austin",
    "courses": [
      {
        "name": "Brazos East",
        "city": "Waco",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "Texas State Championships",
        "par": "67",
        "rating": "A"
      },
      {
        "name": "William Cameron Park",
        "city": "Waco",
        "holes": "23",
        "multiplePins": "false",
        "majorTournament": null,
        "par": "69",
        "rating": "A"
      },
    ]
  },
  {
    "name": "South Carolina",
    "capitalCity": "Columbia",
    "courses": [
      {
        "name": "Winthrop Gold",
        "city": "Rock Hill",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "United States Disc Golf Championship",
        "par": "67",
        "rating": "A"
      },
    ]
  },
  {
    "name": "Washington",
    "capitalCity": "Olympia",
    "courses": [
      {
        "name": "Seatac DGC",
        "city": "Seatac",
        "holes": "27",
        "multiplePins": "true",
        "majorTournament": "The Seatac Attack",
        "par": "87",
        "rating": "A"
      },
      {
        "name": "Abrams Park",
        "city": "Ridgefield",
        "holes": "9",
        "multiplePins": "true",
        "majorTournament": null,
        "par": "27",
        "rating": "C"
      },
    ]
  },
  {
    "name": "Florida",
    "capitalCity": "Tallahassee",
    "courses": [
      {
        "name": "Amelia Earhart park",
        "city": "Hialeah",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": null,
        "par": "54",
        "rating": "B"
      },
      {
        "name": "Bay Dunes DGC",
        "city": "Panama City",
        "holes": "18",
        "multiplePins": "false",
        "majorTournament": null,
        "par": "54",
        "rating": "C"
      },
      {
        "name": "Bill Fredrick Park - The Turkeynator",
        "city": "Orlando",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "The Turkey Shoot",
        "par": "54",
        "rating": "B"
      },
    ]
  },
  {
    "name": "Colorado",
    "capitalCity": "Denver",
    "courses": [
      {
        "name": "Adams Hallow",
        "city": "Arvada",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "The 303 Open",
        "par": "54",
        "rating": "B"
      },
      {
        "name": "Village Greens",
        "city": "Greenwood Village",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "The Green Monster",
        "par": "54",
        "rating": "B"
      },
      {
        "name": "Badlands",
        "city": "Federal Heights",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "The 303 Open",
        "par": "54",
        "rating": "A"
      },
    ]
  },
  {
    "name": "Indiana",
    "capitalCity": "Indianapolis",
    "courses": [
      {
        "name": "Lemon Lake - Blue",
        "city": "Crown Point",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "Lemon Lake Championship",
        "par": "54",
        "rating": "B"
      },
      {
        "name": "Lemon Lake - Silver",
        "city": "Crown Point",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "Lemon Lake Championship",
        "par": "62",
        "rating": "A"
      },
      {
        "name": "Lemon Lake - Gold",
        "city": "Crown Point",
        "holes": "18",
        "multiplePins": "true",
        "majorTournament": "Lemon Lake Championship",
        "par": "65",
        "rating": "A"
      },
    ]
  },
]
module.exports = states