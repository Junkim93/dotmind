import { shallowMount } from '@vue/test-utils';
import Canvas from '@/components/Canvas';

describe('Canvas의', () => {
  describe('컴포넌트를 처음 렌더할 때', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(Canvas);
    });
    describe('initPixelData는', () => {
      it('pixelData 배열에 pixelWidth 값의 2승 만큼 원소를 추가한다.', () => {
        const totalLength = wrapper.vm.pixelData.reduce((acc, curr) => {
          acc += curr.length;
          return acc;
        }, 0);
        const expected = Math.pow(wrapper.vm.framePixel, 2);

        expect(totalLength).toBe(expected);
      });
    });
    describe('setPixelData는', () => {
      it('pixelData 배열의 각 원소에 id, color, text 값을 추가한다.', () => {
        const expected = { color: 'red0', id: 0, text: '❌' };
        expect(wrapper.vm.pixelData[0][0]).toStrictEqual(expected);
      });
    });
  });
});
