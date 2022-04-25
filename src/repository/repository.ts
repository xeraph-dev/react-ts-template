import { FakeRepository, memoryFakeRepository } from './fakeRepository'

export type Repository = {
  fakeRepository: FakeRepository
}

export const repos: Repository = {
  fakeRepository: memoryFakeRepository,
}
