import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'ConnAtlas',
  connector: 'mongodb',
  url: 'mongodb+srv://GAMG:gm170618@cluster0.lbas9va.mongodb.net/vacaciones',
  host: 'cluster0.lbas9va.mongodb.net',
  port: 27018,
  user: 'GAMG',
  password: 'gm170618',
  database: 'vacaciones',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConnAtlasDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'ConnAtlas';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.ConnAtlas', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
