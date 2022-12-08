import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnAtlasDataSource} from '../datasources';
import {Vacaciones, VacacionesRelations} from '../models';

export class VacacionesRepository extends DefaultCrudRepository<
  Vacaciones,
  typeof Vacaciones.prototype.id,
  VacacionesRelations
> {
  constructor(
    @inject('datasources.ConnAtlas') dataSource: ConnAtlasDataSource,
  ) {
    super(Vacaciones, dataSource);
  }
}
