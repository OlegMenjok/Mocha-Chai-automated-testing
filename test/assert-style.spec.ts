import {assert, expect} from "chai";
import { should } from 'chai';
should(); // Активуємо стиль `should`


describe('assert style', () => {
   it("EXPECT assertion style", function() {
      //arrange
       const name:string = "Oleh"
       const objData:object = {surname: "Menok", age: "21"}

       //assert
       expect(name).to.be.ok
       expect(objData).to.be.ok
       expect(objData).property("age", "21");
   })
    it("SHOULD assertion style", function() {
        //arrange
        const name:string = "Oleh"
        const objData:object = {surname: "Menok", age: "21"}

        //assert
        objData.should.have.property("age")
        name.should.be.ok
        objData.should.have.property("surname").equals("Menok")

    })
    it("ASSERT assertion style", function() {
        //arrange
        const name:string = "Oleh"
        const objData:object = {surname: "Menok", age: "21"}

        //assert
        assert.property(objData, "surname")
        assert.equal(name, `Oleh`)
        assert.deepEqual(objData, {surname: "Menok", age: "21"})
    })
})