let mycal = new Calculator();
describe("Calculator Unit Test",()=>{

    
    
    it("should return 5 with x:2,y:3",function(){
    
        //arrange 
        
        let expected = 5
        let actual;
        
        
        // actual = mycal.Add("2",3)
        // actual = mycal.Add(8,3)
        actual = mycal.Add(2,3)
        
        
        expect(actual).toBe(expected);
    
    })
    
    it("should return 3 with a:8,b:5",function(){
    
        //arrange 
      
        let expected = 3
        let actual;
        
        actual = mycal.Sub(8,5)
        
        expect(actual).toBe(expected);
    
    })
    
    it("should return 12 with x:4,y:3",function(){
    
    
        let expected = 12
        let actual;
        
        actual = mycal.Multi(4,3)
        
        expect(actual).toBe(expected);
    
    })
    it("should return 5 with x:25,y:5",function(){
    
        let expected = 5
        let actual;
        
        actual = mycal.div(25,5)
        
        expect(actual).toBe(expected);
    
    })

})