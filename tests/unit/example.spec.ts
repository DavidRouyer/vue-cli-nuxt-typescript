import { shallowMount } from "@vue/test-utils";
import HelloDecorator from "@/components/HelloDecorator.vue";

describe("HelloDecorator.vue", () => {
  it("renders props.name when passed", () => {
    const name = "new message";
    const wrapper = shallowMount(HelloDecorator, {
      propsData: { name, initialEnthusiasm: 1 }
    });
    expect(wrapper.text()).toMatch(`Hello ${name}! - +`);
  });
});
