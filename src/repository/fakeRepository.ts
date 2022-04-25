import fakeMock from '#/fake.json'
import { Fake } from '~/models'

const fakes = [...fakeMock] as Fake[]

export enum FakeRepositoryErros {
  NotFound = 'Fake not found',
  AlreadyExists = 'Fake already exists',
}

export type FakeRepository = {
  getAll: () => Promise<Fake[]>
  get: (id: string) => Promise<Fake>
  set: (name: string) => Promise<Fake>
  update: (fake: Fake) => Promise<Fake>
  delete: (id: string) => Promise<string>
}

export const memoryFakeRepository: FakeRepository = {
  getAll: async () => fakes,
  get: async id => {
    const fake = fakes.find(fake => fake.id === id)

    if (!fake) {
      throw FakeRepositoryErros.NotFound
    }

    return fake
  },
  set: async name => {
    const fake = fakes.find(fake => fake.name === name)

    if (fake) {
      throw FakeRepositoryErros.AlreadyExists
    }

    const newFake = {
      id: `${fakes.length + 1}`,
      name,
    }

    fakes.push(newFake)

    return newFake
  },
  update: async fake => {
    const index = fakes.findIndex(f => f.id === fake.id)

    if (index === -1) {
      throw FakeRepositoryErros.NotFound
    }

    fakes[index] = {
      ...fake,
      name: fake.name,
    }

    return fake
  },
  delete: async id => {
    const index = fakes.findIndex(f => f.id === id)

    if (index === -1) {
      throw FakeRepositoryErros.NotFound
    }

    fakes.splice(index, 1)

    return id
  },
}
