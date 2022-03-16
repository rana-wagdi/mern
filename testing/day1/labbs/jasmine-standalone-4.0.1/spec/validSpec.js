describe("validation Unit Test",()=>{

    it("should password length >=5",function(){
    
        
        let isvalid = new Validation()
        
        let expected = true
        let actual;
    
        actual = isvalid.password("1234544557785")
        
        
        expect(actual).toBe(expected);
    
    })
    it("should password length >=5",function(){
    
        
        let isvalid = new Validation()
        
        let expected = false
        let actual;
    
        actual = isvalid.password("1234544557785")
        
        
        expect(actual).toBe(expected);
    
    })

    it("should password length >=5",function(){
    
        
        let isvalid = new Validation()
        
        let expected = true
        let actual;
    
        actual = isvalid.password("12345")
        
        
        expect(actual).toBe(expected);
    
    })
})