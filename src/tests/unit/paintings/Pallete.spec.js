import { shallowMount } from '@vue/test-utils';
import Pallete from '@/components/Pallete';

describe('Pallette 컴포넌트의', () => {
  describe('emitColor는', () => {
    const wrapper = shallowMount(Pallete);
    wrapper.vm.emitColor('yellow');

    it('인자로 받은 색상 정보를 현재 색상에 할당한다', () => {
      expect(wrapper.vm.$data.currentColor).toBe('yellow');
    });
    it('현재 선택한 색상 정보를 부모 컴포넌트에 방출한다', async () => {
      await wrapper.vm.$nextTick();
      expect(wrapper.emitted()).toEqual({ 'update-color': [['yellow']] });
    });
  });
});
