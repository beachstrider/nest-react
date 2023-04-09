import { DataSource, DataSourceOptions } from 'typeorm'

const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['database/migrations/*.js']
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource
