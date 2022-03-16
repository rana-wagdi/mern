import { PowerPipe } from './power.pipe';
const pipe = new PowerPipe();
describe('PowerPipe', () => {
 
  
  it('transforms 2^3 = 8', () => {
    expect(pipe.transform(2,3)).toBe(8);
  });
  
  
});
