export const predefinedConnectivityModel = {
  'version': '2.0.0',
  'type': 'MarkedGraph',
  'size': {
    'width': 1100,
    'height': 600,
  },
  'interactive': {
    'elements': [],
    'relationships': [],
  },
  'elements': [
    {
      'id': 'c48ea3f2-a8f6-41f8-ade5-6a8170a2f98b',
      'name': '1',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 0,
        'y': 40,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
    {
      'id': '91c588a0-d53e-46ae-bfe5-2085d5bd47a6',
      'name': '2',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 0,
        'y': 380,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
    {
      'id': '49334502-d22f-4092-a579-c29936d24fd4',
      'name': '5',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 450,
        'y': 40,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
    {
      'id': '61adcc2b-96d5-40d2-a602-c44e5c831517',
      'name': '4',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 450,
        'y': 210,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
    {
      'id': '7e1a0d85-d192-4780-9161-9921887bf673',
      'name': '6',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 650,
        'y': 40,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
    {
      'id': 'd66a6fa8-60cc-43d4-bf7c-5edd014df0e2',
      'name': '3',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 450,
        'y': 380,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
    {
      'id': '0ccbd205-e01e-4fbc-ab9a-c3381446b830',
      'name': '7',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 650,
        'y': 220,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
  ],
  'relationships': [
    {
      'id': 'b4a01b08-5f45-42ae-89e2-36fc86453b89',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 50,
        'y': 140,
        'width': 1,
        'height': 240,
      },
      'path': [
        {
          'x': 0,
          'y': 0,
        },
        {
          'x': 0,
          'y': 240,
        },
      ],
      'source': {
        'direction': 'Down',
        'element': 'c48ea3f2-a8f6-41f8-ade5-6a8170a2f98b',
      },
      'target': {
        'direction': 'Up',
        'element': '91c588a0-d53e-46ae-bfe5-2085d5bd47a6',
      },
    },
    {
      'id': '5f156282-a2e8-4be2-a7b9-fddb5d24cbb5',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 100,
        'y': 90,
        'width': 350,
        'height': 1,
      },
      'path': [
        {
          'x': 0,
          'y': 0,
        },
        {
          'x': 350,
          'y': 0,
        },
      ],
      'source': {
        'direction': 'Right',
        'element': 'c48ea3f2-a8f6-41f8-ade5-6a8170a2f98b',
      },
      'target': {
        'direction': 'Left',
        'element': '49334502-d22f-4092-a579-c29936d24fd4',
      },
    },
    {
      'id': 'df5f9e9c-35f2-4bb9-a94e-6aedc8b8ce56',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 500,
        'y': 140,
        'width': 1,
        'height': 70,
      },
      'path': [
        {
          'x': 0,
          'y': 0,
        },
        {
          'x': 0,
          'y': 70,
        },
      ],
      'source': {
        'direction': 'Down',
        'element': '49334502-d22f-4092-a579-c29936d24fd4',
      },
      'target': {
        'direction': 'Up',
        'element': '61adcc2b-96d5-40d2-a602-c44e5c831517',
      },
    },
    {
      'id': '0f432c74-5051-4e0c-8814-e412480053b6',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 550,
        'y': 90,
        'width': 100,
        'height': 1,
      },
      'path': [
        {
          'x': 0,
          'y': 0,
        },
        {
          'x': 100,
          'y': 0,
        },
      ],
      'source': {
        'direction': 'Right',
        'element': '49334502-d22f-4092-a579-c29936d24fd4',
      },
      'target': {
        'direction': 'Left',
        'element': '7e1a0d85-d192-4780-9161-9921887bf673',
      },
    },
    {
      'id': '8f2ddb91-7582-423e-a0e8-9c1bd5b657b6',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 500,
        'y': 0,
        'width': 200,
        'height': 40,
      },
      'path': [
        {
          'x': 200,
          'y': 40,
        },
        {
          'x': 200,
          'y': 0,
        },
        {
          'x': 0,
          'y': 0,
        },
        {
          'x': 0,
          'y': 40,
        },
      ],
      'source': {
        'direction': 'Up',
        'element': '7e1a0d85-d192-4780-9161-9921887bf673',
      },
      'target': {
        'direction': 'Up',
        'element': '49334502-d22f-4092-a579-c29936d24fd4',
      },
    },
    {
      'id': '3d82e5f0-c226-4490-811c-8a5a74e77b25',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 100,
        'y': 430,
        'width': 350,
        'height': 1,
      },
      'path': [
        {
          'x': 350,
          'y': 0,
        },
        {
          'x': 0,
          'y': 0,
        },
      ],
      'source': {
        'direction': 'Left',
        'element': 'd66a6fa8-60cc-43d4-bf7c-5edd014df0e2',
      },
      'target': {
        'direction': 'Right',
        'element': '91c588a0-d53e-46ae-bfe5-2085d5bd47a6',
      },
    },
    {
      'id': '0b786ec8-2218-43da-bace-837d71920f21',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 500,
        'y': 310,
        'width': 1,
        'height': 70,
      },
      'path': [
        {
          'x': 0,
          'y': 70,
        },
        {
          'x': 0,
          'y': 0,
        },
      ],
      'source': {
        'direction': 'Up',
        'element': 'd66a6fa8-60cc-43d4-bf7c-5edd014df0e2',
      },
      'target': {
        'direction': 'Down',
        'element': '61adcc2b-96d5-40d2-a602-c44e5c831517',
      },
    },
    {
      'id': '5b73d58f-3df6-44ce-815b-012499170d02',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 700,
        'y': 140,
        'width': 1,
        'height': 80,
      },
      'path': [
        {
          'x': 0,
          'y': 80,
        },
        {
          'x': 0,
          'y': 0,
        },
      ],
      'source': {
        'direction': 'Up',
        'element': '0ccbd205-e01e-4fbc-ab9a-c3381446b830',
      },
      'target': {
        'direction': 'Down',
        'element': '7e1a0d85-d192-4780-9161-9921887bf673',
      },
    },
  ],
  'assessments': [],
};

export const predefinedCutVertexModel = {
  'version': '2.0.0',
  'type': 'MarkedGraph',
  'size': {
    'width': 920,
    'height': 420,
  },
  'interactive': {
    'elements': [],
    'relationships': [],
  },
  'elements': [
    {
      'id': '72bc0627-a91e-436c-9e7b-2d89a5406c32',
      'name': '1',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 0,
        'y': 120,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
    {
      'id': 'eecef3a6-f503-40a0-9a96-203c2f64c174',
      'name': '3',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 240,
        'y': 260,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
    {
      'id': 'ebc633af-df92-4c24-b238-12c74465055b',
      'name': '2',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 240,
        'y': 120,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
    {
      'id': 'e2e32bb1-857d-45c3-81aa-7f68bb961557',
      'name': '4',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 490,
        'y': 0,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
    {
      'id': '7c9c54b3-a5d8-4731-9f39-bc8f66abaedd',
      'name': '5',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 490,
        'y': 270,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
    {
      'id': '3becfbf8-0cda-44d0-9795-5e734dec7ae9',
      'name': '7',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 780,
        'y': 0,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
    {
      'id': '7e4f70ff-a374-4d0d-959e-5bbaa29e482c',
      'name': '6',
      'type': 'MarkedGraphNode',
      'owner': null,
      'bounds': {
        'x': 780,
        'y': 270,
        'width': 100,
        'height': 100,
      },
      'marking': false,
    },
  ],
  'relationships': [
    {
      'id': '8032b5ba-b3f1-4599-b490-b07706b78e18',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 830,
        'y': 100,
        'width': 1,
        'height': 170,
      },
      'path': [
        {
          'x': 0,
          'y': 170,
        },
        {
          'x': 0,
          'y': 0,
        },
      ],
      'source': {
        'direction': 'Up',
        'element': '7e4f70ff-a374-4d0d-959e-5bbaa29e482c',
      },
      'target': {
        'direction': 'Down',
        'element': '3becfbf8-0cda-44d0-9795-5e734dec7ae9',
      },
    },
    {
      'id': '0a919d42-5bfa-4810-83e0-e81a0574968b',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 590,
        'y': 50,
        'width': 190,
        'height': 1,
      },
      'path': [
        {
          'x': 0,
          'y': 0,
        },
        {
          'x': 190,
          'y': 0,
        },
      ],
      'source': {
        'direction': 'Right',
        'element': 'e2e32bb1-857d-45c3-81aa-7f68bb961557',
      },
      'target': {
        'direction': 'Left',
        'element': '3becfbf8-0cda-44d0-9795-5e734dec7ae9',
      },
    },
    {
      'id': '092e8f40-6517-429a-8702-977a7ea30573',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 590,
        'y': 320,
        'width': 190,
        'height': 1,
      },
      'path': [
        {
          'x': 0,
          'y': 0,
        },
        {
          'x': 190,
          'y': 0,
        },
      ],
      'source': {
        'direction': 'Right',
        'element': '7c9c54b3-a5d8-4731-9f39-bc8f66abaedd',
      },
      'target': {
        'direction': 'Left',
        'element': '7e4f70ff-a374-4d0d-959e-5bbaa29e482c',
      },
    },
    {
      'id': '01fc3bc5-a7ec-4544-a041-d67d36c01604',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 540,
        'y': 100,
        'width': 1,
        'height': 170,
      },
      'path': [
        {
          'x': 0,
          'y': 170,
        },
        {
          'x': 0,
          'y': 0,
        },
      ],
      'source': {
        'direction': 'Up',
        'element': '7c9c54b3-a5d8-4731-9f39-bc8f66abaedd',
      },
      'target': {
        'direction': 'Down',
        'element': 'e2e32bb1-857d-45c3-81aa-7f68bb961557',
      },
    },
    {
      'id': 'f5888a16-c3b5-486a-8124-d69dc04563ec',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 290,
        'y': 50,
        'width': 200,
        'height': 70,
      },
      'path': [
        {
          'x': 200,
          'y': 0,
        },
        {
          'x': 0,
          'y': 0,
        },
        {
          'x': 0,
          'y': 70,
        },
      ],
      'source': {
        'direction': 'Left',
        'element': 'e2e32bb1-857d-45c3-81aa-7f68bb961557',
      },
      'target': {
        'direction': 'Up',
        'element': 'ebc633af-df92-4c24-b238-12c74465055b',
      },
    },
    {
      'id': '343984b2-98ae-4330-b8dc-50ae52a61631',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 340,
        'y': 170,
        'width': 150,
        'height': 150,
      },
      'path': [
        {
          'x': 150,
          'y': 150,
        },
        {
          'x': 75,
          'y': 150,
        },
        {
          'x': 75,
          'y': 0,
        },
        {
          'x': 0,
          'y': 0,
        },
      ],
      'source': {
        'direction': 'Left',
        'element': '7c9c54b3-a5d8-4731-9f39-bc8f66abaedd',
      },
      'target': {
        'direction': 'Right',
        'element': 'ebc633af-df92-4c24-b238-12c74465055b',
      },
    },
    {
      'id': 'b2abfcc3-b146-4656-82a0-2897a08ff9f4',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 100,
        'y': 170,
        'width': 140,
        'height': 1,
      },
      'path': [
        {
          'x': 140,
          'y': 0,
        },
        {
          'x': 0,
          'y': 0,
        },
      ],
      'source': {
        'direction': 'Left',
        'element': 'ebc633af-df92-4c24-b238-12c74465055b',
      },
      'target': {
        'direction': 'Right',
        'element': '72bc0627-a91e-436c-9e7b-2d89a5406c32',
      },
    },
    {
      'id': '922e6d7e-2555-4269-9e2c-68fc4b42fa88',
      'name': '',
      'type': 'MarkedGraphEdge',
      'owner': null,
      'bounds': {
        'x': 290,
        'y': 220,
        'width': 1,
        'height': 40,
      },
      'path': [
        {
          'x': 0,
          'y': 40,
        },
        {
          'x': 0,
          'y': 0,
        },
      ],
      'source': {
        'direction': 'Up',
        'element': 'eecef3a6-f503-40a0-9a96-203c2f64c174',
      },
      'target': {
        'direction': 'Down',
        'element': 'ebc633af-df92-4c24-b238-12c74465055b',
      },
    },
  ],
  'assessments': [],
};

export const predefinedPlanarityModel = {
  'version': '2.0.0',
  'type': 'MarkedGraph',
  'size': { 'width': 860, 'height': 622 },
  'interactive': { 'elements': [], 'relationships': [] },
  'elements': [{
    'id': '520b4ceb-17bd-4905-baec-9e6fa652041e',
    'name': '2',
    'type': 'MarkedGraphNode',
    'owner': null,
    'bounds': { 'x': 360, 'y': 0, 'width': 100, 'height': 100 },
    'marking': false,
  }, {
    'id': 'c93120a6-e791-43b0-a4d9-ac77ecb3f977',
    'name': '3',
    'type': 'MarkedGraphNode',
    'owner': null,
    'bounds': { 'x': 680, 'y': 200, 'width': 100, 'height': 100 },
    'marking': false,
  }, {
    'id': '9e31cd0d-fbe0-4eec-8b5b-08b4846c6297',
    'name': '4',
    'type': 'MarkedGraphNode',
    'owner': null,
    'bounds': { 'x': 550, 'y': 480, 'width': 100, 'height': 100 },
    'marking': false,
  }, {
    'id': 'f17fdc6d-7f88-40af-96cd-cba3f0c1e6bc',
    'name': '5',
    'type': 'MarkedGraphNode',
    'owner': null,
    'bounds': { 'x': 160, 'y': 480, 'width': 100, 'height': 100 },
    'marking': false,
  }, {
    'id': 'b0133ea6-46e6-40fc-8dca-778eb85686e0',
    'name': '1',
    'type': 'MarkedGraphNode',
    'owner': null,
    'bounds': { 'x': 0, 'y': 200, 'width': 100, 'height': 100 },
    'marking': false,
  }],
  'relationships': [{
    'id': 'fed99bcd-5b25-41f2-8db7-aef6e9d62ca6',
    'name': '(3,4)',
    'type': 'MarkedGraphEdge',
    'owner': null,
    'bounds': { 'x': 650, 'y': 300, 'width': 80, 'height': 230 },
    'path': [{ 'x': 0, 'y': 230 }, { 'x': 80, 'y': 0 }],
    'source': { 'direction': 'Right', 'element': '9e31cd0d-fbe0-4eec-8b5b-08b4846c6297' },
    'target': { 'direction': 'Down', 'element': 'c93120a6-e791-43b0-a4d9-ac77ecb3f977' },
  }, {
    'id': '195a67dd-41e1-4527-a39e-be953de51649',
    'name': '(4,5)',
    'type': 'MarkedGraphEdge',
    'owner': null,
    'bounds': { 'x': 210, 'y': 540, 'width': 390, 'height': 41 },
    'path': [{ 'x': 390, 'y': 40 }, { 'x': 0, 'y': 40 }],
    'source': { 'direction': 'Down', 'element': '9e31cd0d-fbe0-4eec-8b5b-08b4846c6297' },
    'target': { 'direction': 'Down', 'element': 'f17fdc6d-7f88-40af-96cd-cba3f0c1e6bc' },
  }, {
    'id': 'bc94c9f9-fdac-4f59-ad2e-06f480f1bf14',
    'name': '(5,1)',
    'type': 'MarkedGraphEdge',
    'owner': null,
    'bounds': { 'x': 50, 'y': 300, 'width': 110, 'height': 230 },
    'path': [{ 'x': 110, 'y': 230 }, { 'x': 0, 'y': 0 }],
    'source': { 'direction': 'Left', 'element': 'f17fdc6d-7f88-40af-96cd-cba3f0c1e6bc' },
    'target': { 'direction': 'Down', 'element': 'b0133ea6-46e6-40fc-8dca-778eb85686e0' },
  }, {
    'id': '52b172d0-c621-4ba7-9fc3-ba348287d076',
    'name': '(1,2)',
    'type': 'MarkedGraphEdge',
    'owner': null,
    'bounds': { 'x': 50, 'y': 50, 'width': 310, 'height': 150 },
    'path': [{ 'x': 310, 'y': 0 }, { 'x': 0, 'y': 150 }],
    'source': { 'direction': 'Left', 'element': '520b4ceb-17bd-4905-baec-9e6fa652041e' },
    'target': { 'direction': 'Up', 'element': 'b0133ea6-46e6-40fc-8dca-778eb85686e0' },
  }, {
    'id': '5e6465c5-3a59-4ade-975e-654806fe19e0',
    'name': '(2,5)',
    'type': 'MarkedGraphEdge',
    'owner': null,
    'bounds': { 'x': 210, 'y': 100, 'width': 200, 'height': 380 },
    'path': [{ 'x': 200, 'y': 0 }, { 'x': 0, 'y': 380 }],
    'source': { 'direction': 'Down', 'element': '520b4ceb-17bd-4905-baec-9e6fa652041e' },
    'target': { 'direction': 'Up', 'element': 'f17fdc6d-7f88-40af-96cd-cba3f0c1e6bc' },
  }, {
    'id': '4b15edea-5272-406d-9d1c-75475f8907d0',
    'name': '(2,4)',
    'type': 'MarkedGraphEdge',
    'owner': null,
    'bounds': { 'x': 410, 'y': 100, 'width': 190, 'height': 380 },
    'path': [{ 'x': 0, 'y': 0 }, { 'x': 190, 'y': 380 }],
    'source': { 'direction': 'Down', 'element': '520b4ceb-17bd-4905-baec-9e6fa652041e' },
    'target': { 'direction': 'Up', 'element': '9e31cd0d-fbe0-4eec-8b5b-08b4846c6297' },
  }, {
    'id': 'faeb5c78-d089-4c9b-8e6f-9062a8dbc567',
    'name': '(1,3)',
    'type': 'MarkedGraphEdge',
    'owner': null,
    'bounds': { 'x': 100, 'y': 210, 'width': 580, 'height': 41 },
    'path': [{ 'x': 0, 'y': 40 }, { 'x': 580, 'y': 40 }],
    'source': { 'direction': 'Right', 'element': 'b0133ea6-46e6-40fc-8dca-778eb85686e0' },
    'target': { 'direction': 'Left', 'element': 'c93120a6-e791-43b0-a4d9-ac77ecb3f977' },
  }, {
    'id': '401595a8-ece8-4207-b1aa-2c4f6182255b',
    'name': '(1,4)',
    'type': 'MarkedGraphEdge',
    'owner': null,
    'bounds': { 'x': 100, 'y': 250, 'width': 450, 'height': 280 },
    'path': [{ 'x': 450, 'y': 280 }, { 'x': 0, 'y': 0 }],
    'source': { 'direction': 'Left', 'element': '9e31cd0d-fbe0-4eec-8b5b-08b4846c6297' },
    'target': { 'direction': 'Right', 'element': 'b0133ea6-46e6-40fc-8dca-778eb85686e0' },
  }, {
    'id': '12765a85-4eed-4c40-9bc3-2c9c36f8562b',
    'name': '(3,5)',
    'type': 'MarkedGraphEdge',
    'owner': null,
    'bounds': { 'x': 260, 'y': 250, 'width': 420, 'height': 280 },
    'path': [{ 'x': 0, 'y': 280 }, { 'x': 420, 'y': 0 }],
    'source': { 'direction': 'Right', 'element': 'f17fdc6d-7f88-40af-96cd-cba3f0c1e6bc' },
    'target': { 'direction': 'Left', 'element': 'c93120a6-e791-43b0-a4d9-ac77ecb3f977' },
  }],
  'assessments': [],
};