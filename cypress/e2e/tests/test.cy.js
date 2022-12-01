describe('sad',function(){

    it('sa',function(){
        cy.visit('www.google.com')


        cy.get("input[name='q']").type('test')
        
    })
})