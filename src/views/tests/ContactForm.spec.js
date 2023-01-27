/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import ContactForm from "../ContactForm.vue";
import flushPromises from "flush-promises";
import waitForExpect from "wait-for-expect";
//import font-awesome-icon from "vue-fontawesome";

describe("ContactForm", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(ContactForm);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should display header text", () => {
    const header = "Say hello";
    expect(wrapper.find("h1").text()).toEqual(header);
  });

  it("should have name, email, subject, and message fields", () => {
    expect(wrapper.find("input[name='name']").exists()).toBe(true);
    expect(wrapper.find("input[name='email']").exists()).toBe(true);
    expect(wrapper.find("input[name='subject']").exists()).toBe(true);
    expect(wrapper.find("textarea[name='message']").exists()).toBe(true);
  });

  it("should have a submit button", () => {
    expect(wrapper.find("button[type='submit']").exists()).toBe(true);
  });

  it("should have the correct placeholder text", () => {
    const wrapper = mount(ContactForm);
    expect(wrapper.find("input[name='name']").attributes().placeholder).toEqual(
      "Joe"
    );
    expect(
      wrapper.find("input[name='email']").attributes().placeholder
    ).toEqual("joe@mail.com");
    expect(
      wrapper.find("input[name='subject']").attributes().placeholder
    ).toEqual("I want to talk about...");
    expect(
      wrapper.find("textarea[name='message']").attributes().placeholder
    ).toEqual("I'm writing to you because...");
  });

  it("should validate inputs and if invalid it displays error messages", async () => {
    wrapper.find("input[name='name']").setValue("Joe");
    wrapper.find("input[name='email']").setValue("joe@mail");
    wrapper.find("input[name='subject']").setValue("a".repeat(101));
    wrapper.find("textarea[name='message']").setValue("");

    await flushPromises();
    await waitForExpect(() => {
      expect(wrapper.find('p[id="error-name"]').text()).toContain("5");
      expect(wrapper.find('p[id="error-email"]').text()).toContain("valid");
      expect(wrapper.find('p[id="error-subject"]').text()).toContain("100");
      expect(wrapper.find('p[id="error-message"]').text()).toContain(
        "required"
      );
    });
  });

  it("should validate input and if all are valid it submits the form", async () => {
    wrapper.find("input[name='name']").setValue("Joe Biden");
    wrapper.find("input[name='email']").setValue("joe@mail.com");
    wrapper.find("input[name='subject']").setValue("Topic");
    wrapper.find("textarea[name='message']").setValue("My test message.");

    await flushPromises();
    await waitForExpect(() => {
      expect(
        wrapper.find("button[type='submit']").attributes("disabled")
      ).toBeUndefined();
      expect(wrapper.find("button[type='submit']").trigger("click"));
    });
  });
});
