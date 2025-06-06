console.log('[MOCKED] articles.model.ts');

export const getAll = jest.fn().mockResolvedValue([
  { id: 1, title: 'mock article' }
]);

export const add = jest.fn().mockResolvedValue({ status: 201 });

export const getById = jest.fn().mockResolvedValue([
  { id: 1, title: 'mock article' }
]);

export const update = jest.fn().mockResolvedValue(true);

export const deleteById = jest.fn().mockResolvedValue(true);
