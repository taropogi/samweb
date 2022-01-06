const app = Vue.createApp({
  data() {
    return {
      selectGenderText: "Select Gender",
      selectAgeText: "Select Age",
      age1: "18 - 30 years old",
      age2: "30 - 40 years old",
      age3: "40 - 50 years old",
      age4: "50+ years old",
    };
  },
  computed: {
    formLink() {
      //Men
      if (this.selectGenderText === "Men" && this.selectAgeText === this.age1) {
        return "https://www.google.com/";
      }
      if (this.selectGenderText === "Men" && this.selectAgeText === this.age2) {
        return "https://www.facebook.com/";
      }
      if (this.selectGenderText === "Men" && this.selectAgeText === this.age3) {
        return "https://www.youtube.com/";
      }
      if (this.selectGenderText === "Men" && this.selectAgeText === this.age4) {
        return "https://twitter.com/";
      }

      //Women
      if (
        this.selectGenderText === "Women" &&
        this.selectAgeText === this.age1
      ) {
        return "https://www.instagram.com/";
      }
      if (
        this.selectGenderText === "Women" &&
        this.selectAgeText === this.age2
      ) {
        return "https://upwork.com/";
      }
      if (
        this.selectGenderText === "Women" &&
        this.selectAgeText === this.age3
      ) {
        return "https://stackoverflow.com/";
      }
      if (
        this.selectGenderText === "Women" &&
        this.selectAgeText === this.age4
      ) {
        return "https://www.mysql.com/";
      }

      return "";
    },
  },
  methods: {
    submitForm() {
      if (this.formLink !== "") {
        window.location.href = this.formLink;
      }
    },
    setSelectGenderText(txt) {
      this.selectGenderText = txt;
    },
    setSelectAgeText(txt) {
      this.selectAgeText = txt;
    },
  },
});

app.mount("#app");
