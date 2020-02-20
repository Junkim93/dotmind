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
        const expected = { bgColor: '', id: '0+0' };
        expect(wrapper.vm.pixelData[0][0]).toStrictEqual(expected);
      });
    });
  });

  describe('그림 그리기 이벤트 중', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(Canvas);
    });

    describe('startDrawing은', () => {
      beforeEach(async () => {
        wrapper.find('.canvas__wrapper-pixel').trigger('mousedown.prevent', {
          toElement: {
            id: '0+0',
          },
        });
        await wrapper.vm.$nextTick();
      });
      it('isDrawing의 값을 true로 바꿔준다', () => {
        expect(wrapper.vm.isDrawing).toBe(true);
      });
      it('mousedown 이벤트가 일어났을 때, isDrawing의 값을 true로 바꿔주고, 해당 pixelData의 bgColor를 currentColor로 바꿔준다.', () => {
        const targetPixel = wrapper.vm.pixelData[0][0].bgColor;
        const expectedColor = wrapper.vm.currentColor;
        expect(targetPixel).toBe(expectedColor);
      });
    });
    describe('endDrawing은', () => {
      it('mouseup 이벤트가 일어났을 때, isDrawing의 값을 false로 바꿔준다', async () => {
        wrapper.vm.isDrawing = true;
        wrapper.find('.canvas__wrapper-pixel').trigger('mouseup.prevent');

        await wrapper.vm.$nextTick();
        expect(wrapper.vm.isDrawing).toBe(false);
      });
    });
  });
});
