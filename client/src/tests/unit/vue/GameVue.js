// import Game from '@/components/Game.vue';
// import dummy from '@/dummyWord.js';

// describe('Game.vue', () => {
//   it('is a function that is a type of data', () => {
//     expect(typeof Game.data).toBe('function');
//   });
//   it('has a computed object', () => {
//     expect(typeof Game.computed).toBe('object');
//   });

//   describe('Game.methods.isStart()', () => {
//     it('If a parameter is true, it returns false', () => {
//       const localThis = { start: true };
//       const expected = false;
//       expect(Game.methods.isStart.call(localThis)).toBe(expected);
//     });
//     it('If a parameter is false, it returns true', () => {
//       const localThis = { start: false };
//       const expected = true;
//       expect(Game.methods.isStart.call(localThis)).toBe(expected);
//     });
//   });

//   describe('Game.computed.word is', () => {
//     it('return randomly a word in dummy', () => {
//       const localThis = { wordList: dummy.wordList };
//       const mockMath = Object.create(global.Math);
//       mockMath.random = () => 0;
//       global.Math = mockMath;
//       expect(Game.computed.randomWord.call(localThis)).toBe('TMI');
//     });
//   });
// });
