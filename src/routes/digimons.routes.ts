import { Router } from 'express';

import DigimonRepository from '../repositories/DigimonRepository';

const digimonsRouter = Router();

digimonsRouter.get('/', async (request, response) => {
  const digimonRepository = new DigimonRepository();
  const digimons = await digimonRepository.findAll();

  return response.json(digimons);
});

digimonsRouter.get('/name/:name', async (request, response) => {
  const { name } = request.params;

  const digimonRepository = new DigimonRepository();
  const digimon = await digimonRepository.findByName(name);

  return response.json(digimon);
});

digimonsRouter.get('/level/:level', async (request, response) => {
  const { level } = request.params;

  const digimonRepository = new DigimonRepository();
  const digimon = await digimonRepository.findByLevel(level);

  return response.json(digimon);
});

digimonsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const digimonRepository = new DigimonRepository();
  const digimon = await digimonRepository.findById(id);

  return response.json(digimon);
});

export default digimonsRouter;
