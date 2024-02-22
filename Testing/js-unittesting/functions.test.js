const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const a = 5;
    const b = 1;

    //ACT
    const result = functions.multiply(a,b);

    //ASSERT
    expect = (result).toEqual(5);

  })
});

it('should be return 0 when I sent one number as cero', () => {
  //ARRANGE
  const a = 4;
  const b = 0;

  //ACT
  const result = functions.multiply(a,b);

  //ASSERT
  expect = (result).toEqual(0);

})

describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE
    
    //ACT
    const result = functions.isNull();

    //ASSERT
    expect(result).toBeNull();

  });
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const value = true;

    //ACT
    const result = functions.checkTruthy(value);

    //ASSERT
    expect(result).toBeTruthy();

  });
})

  it('should be return false when I sent false', () => {
    //ARRANGE
    const value = false;

    //ACT
    const result = functions.checkTruthy(value);

    //ASSERT
    expect(result).toBeFalsy();

  });

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    const lastName = "Perez";
    const user = { firstName: "Pepito" , lastName : "Perez"};

    //ACT
    const result = functions.addLastName(lastName);

    //ASSERT
    expect(result).toEqual(user);
  });
})

  it('should be return undefined when I dont sent lastname', () => {
  //ARRANGE

  //ACT
  const result = functions.addLastName();
  //ASSERT
  expect(result.lastname).toBeUndefined();
  expect(result).toEqual({firstname: 'Pepito', lastname: undefined})
});

