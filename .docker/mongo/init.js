db.addresses.insertMany([
  {
    _id: '1',
    name: 'Apartamento 1',
  }
])

db.restaurants.insertMany([
    {
      _id: '1',
      name: 'Su Shi',
      coordinates: { lat: -8.108533, lng: -34.924032 },
    },
    {
      _id: '2',
      name: 'Assa Í',
      coordinates: { lat: -8.065574, lng: -34.905783 },
    },
    {
      _id: '3',
      name: 'Nham burguer',
      coordinates: { lat: -8.054526, lng: -34.909045 },
    },
    {
      _id: '4',
      name: 'Pizza Ria',
      coordinates: { lat: -8.04772, lng: -34.921466 },
    },
    {
      _id: '5',
      name: 'Tapi Oca',
      coordinates: { lat: -8.032713, lng: -34.912977 },
    },
  ]);

db.routes.insertMany([
  {
    _id: '1',
    restaurant: '1',
    user: '1',
    startPosition: { lat: -8.108533, lng: -34.924032 },
    endPosition: { lat: -8.082658, lng: -34.939682 },
  },
  {
    _id: '2',
    restaurant: '2',
    user: '2',
    startPosition: { lat: -8.065574, lng: -34.905783 },
    endPosition: { lat: -8.097383, lng: -34.889283 },
  },
  {
    _id: '3',
    restaurant: '3',
    user: '3',
    startPosition: { lat: -8.054526, lng: -34.909045 },
    endPosition: { lat: -8.117987, lng: -34.90113 },
  },
  {
    _id: '4',
    restaurant: '4',
    user: '4',
    startPosition: { lat: -8.04772, lng: -34.921466 },
    endPosition: { lat: -8.050149, lng: -34.928025 },
  },
  {
    _id: '5',
    restaurant: '5',
    user: '5',
    startPosition: { lat: -8.032713, lng: -34.912977 },
    endPosition: { lat: -8.082658, lng: -34.939682 },
  },
]);
