describe("number Squar Unit Test",()=>{ 

    it("should neumber be square",function(){
    
        
        let sqrt = new Squre();
     
        let expected = 5
        let actual;
    
        actual = sqrt.number(25)
        
        
        expect(actual).toBe(expected);
    
    })
    
    it("should neumber be square",function(){
    
        
        let sqrt = new Squre();
     
        
        let expected = "SQure error"
        let actual;
    
        actual = sqrt.number(-25)
        
        
        expect(actual).toBe(expected);
    
    })
})