const farmLogo = require('../../assets/logo.png');

const tomate = require('../../assets/frutas/Tomate.png');
const abobora = require('../../assets/frutas/Abóbora.png');
const pepino = require('../../assets/frutas/Pepino.png');
const brocolis = require('../../assets/frutas/Brócolis.png');
const batata = require('../../assets/frutas/Batata.png');

import { basketModels } from '../models/basketModels';

const basket: basketModels = {
  top: {
    title: 'Detalhes da cesta',
  },
  details: {
    name: 'Cesta de Verduras',
    farmLogo: farmLogo,
    farmName: 'Jereny Jack Farm',
    description:
      'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.',
    price: 'R$ 40,00',
    buttonName: 'Comprar',
  },
  items: {
    itemTitle: 'Itens da cesta',
    list: [
      {
        name: 'Tomate',
        image: tomate,
      },
      {
        name: 'batata',
        image: batata,
      },
      {
        name: 'brocolis',
        image: brocolis,
      },
      {
        name: 'abobora',
        image: abobora,
      },
      {
        name: 'pepino',
        image: pepino,
      },
    ],
  },
};

export default basket;
