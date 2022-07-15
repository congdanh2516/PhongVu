import { HiddenPasswordPipe } from './hidden-password.pipe';

describe('HiddenPasswordPipe', () => {
  it('create an instance', () => {
    const pipe = new HiddenPasswordPipe();
    expect(pipe).toBeTruthy();
  });
});
