import { DigimonIntarface, Digimons } from '../database/Digimon';
import AppError from '../errors/AppError';

class AppointmentRepository {
  public async findAll(): Promise<DigimonIntarface[]> {
    const findAllDigimons = Digimons;

    return findAllDigimons;
  }

  public async findByName(name: string): Promise<DigimonIntarface> {
    const findDigimon = Digimons.find(
      digimon => digimon.name.toLowerCase() === name.toLowerCase(),
    );

    if (!findDigimon) {
      throw new AppError(`${name} is not a Digimon in our database.`);
    }

    return findDigimon;
  }

  public async findByLevel(level: string): Promise<DigimonIntarface> {
    const findDigimon = Digimons.find(
      digimon => digimon.name.toLowerCase() === level.toLowerCase(),
    );

    if (!findDigimon) {
      throw new AppError(`${level} is not a level in our database.`);
    }

    return findDigimon;
  }

  public async findById(id: string): Promise<DigimonIntarface | undefined> {
    const findDigimon = Digimons.find(digimon => digimon.id === id);

    return findDigimon;
  }
}

export default AppointmentRepository;
