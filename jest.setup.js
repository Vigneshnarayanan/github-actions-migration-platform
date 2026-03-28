// Jest setup file to mock chalk
jest.mock('chalk', () => ({
  blue: (text) => text,
  green: (text) => text,
  yellow: (text) => text,
  red: (text) => text,
  gray: (text) => text,
}));
