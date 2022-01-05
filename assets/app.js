const app = Vue.createApp({
  data() {
    return {
      selectGenderText: "Select Gender",
    };
  },
  methods: {
    setSelectGenderText(txt) {
      this.selectGenderText = txt;
    },
  },
});

app.mount("#app");
