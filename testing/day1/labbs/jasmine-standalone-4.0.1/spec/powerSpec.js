let power = new Power();
describe("power Unit Test",()=>{

    it("should Power be positive",function(){
    
        
     
        
        let expected = "positve"
        let actual;
    
        actual = power.powers(1,4)
        
        
        expect(actual).toBe(expected);
    
    })
    it("should Power be positive",function(){
    
        
        let expected = "positve"
        let actual;
    
        actual = power.powers(0,4)
        
        
        expect(actual).toBe(expected);
    
    })
    it("should Power be positive",function(){
    
        
        let expected = "positve"
        let actual;
    
        actual = power.powers(0,-4)
        
        
        expect(actual).toBe(expected);
    
    })

})