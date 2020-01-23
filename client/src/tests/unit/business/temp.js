// import GameBL from '@/business/Game.js';

// describe('Game.js,', () => {
//   const bl = GameBL;

//   describe('getRandomNum(arr) is', () => {
//     it('If received value is not Array, throw an error.', () => {
//       const actual = () => bl.getRandomNum(1);
//       expect(actual).toThrowError();
//     });

//     it('Return a random number from 0 to last index of array.', () => {
//       const arr = [0, 1, 2, 3, 4];
//       const expected = num => {
//         return arr.find(el => {
//           return el === num;
//         });
//       };
//       const testValue = bl.getRandomNum(arr);

//       expect(testValue).toBe(expected(testValue));
//     });
//   });

//   describe('getSwitchBoolean(boolean) is', () => {
//     it('If it is not true that value received as a parameter, throw an error.', () => {
//       const actual = () => bl.switchBoolean('str');
//       expect(actual).toThrowError();
//     });

//     it('Return an opposite value of boolean that received as a parameter.', () => {
//       const val = true;
//       const expected = false;

//       expect(bl.switchBoolean(val)).toBe(expected);
//     });
//   });

//   describe('isEqual(a, b) is', () => {
//     it('If two parameters are the same, return true or false.', () => {
//       const a = 5;
//       const b = 5;

//       expect(bl.isEqual(a, b)).toBe(true);
//     });
//   });
// });
