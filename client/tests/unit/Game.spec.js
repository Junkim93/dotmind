import Game from '@/components/Game.vue';
import dummy from '../../src/dummyWord';

describe('Game.vue', () => {
  it('is a function that is a type of data', () => {
    expect(typeof Game.data).toBe('function');
  });
  it('has a computed object', () => {
    expect(typeof Game.computed).toBe('object');
  });

  describe('Game.computed.word is', () => {
    it('return randomly a word in dummy', () => {
      const localThis = { wordList: dummy.wordList };
      const mockMath = Object.create(global.Math);
      mockMath.random = () => 0;
      global.Math = mockMath;
      expect(Game.computed.word.call(localThis)).toBe('TMI');
    });
  });
});
