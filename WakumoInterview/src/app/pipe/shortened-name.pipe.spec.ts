import { ShortenedNamePipe } from './shortened-name.pipe';

describe('ShortenedNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ShortenedNamePipe();
    expect(pipe).toBeTruthy();
  });
});
