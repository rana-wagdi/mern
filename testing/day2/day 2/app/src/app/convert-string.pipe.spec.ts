import { ConvertStringPipe } from './convert-string.pipe';
const pipe = new ConvertStringPipe();
describe('ConvertStringPipe', () => {

  it('should be name with space', () => {
    expect(pipe.transform("rana-wagdi")).toBe("rana wagdi");
  });
  it('should be name with space', () => {
    expect(pipe.transform("r-i")).toBe("r i");
  });
  // it('should be name with space', () => {
  //   expect(pipe.transform("r-i")).toBe("r i");
  // });
  
  
});
