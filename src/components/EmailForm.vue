<template>
  <div class="contact-form rounded-lg bg-white p-8 shadow-md">
    <div class="flex flex-col items-center">
      <div class="h-screen w-full">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="nameField" class="mb-2 block font-medium text-yellow-900">
              {{ i18n.nameLabel }}
            </label>
            <input
              type="text"
              class="form-control contact-input w-full rounded border border-yellow-600 p-2"
              id="nameField"
              v-model="formData.name"
              :placeholder="i18n.namePlaceholder"
              required
              :aria-invalid="errors.name ? 'true' : 'false'"
              aria-describedby="nameError"
            />
            <span v-if="errors.name" id="nameError" class="text-red-600">
              {{ i18n.nameError }}
            </span>
          </div>

          <div class="mb-3">
            <label for="emailField" class="mb-2 block font-medium text-yellow-900">
              {{ i18n.emailLabel }}
            </label>
            <input
              type="email"
              class="form-control contact-input w-full rounded border border-yellow-600 p-2"
              id="emailField"
              v-model="formData.email"
              :placeholder="i18n.emailPlaceholder"
              required
              :aria-invalid="errors.email ? 'true' : 'false'"
              aria-describedby="emailError"
            />
            <span v-if="errors.email" id="emailError" class="text-red-600">
              {{ i18n.emailError }}
            </span>
          </div>

          <div class="mb-3">
            <label for="textMessage" class="mb-2 block font-medium text-yellow-900">
              {{ i18n.messageLabel }}
            </label>
            <textarea
              class="form-control contact-input w-full rounded border border-yellow-600 p-2"
              id="textMessage"
              v-model="formData.message"
              rows="3"
              :placeholder="i18n.messagePlaceholder"
              required
              :aria-invalid="errors.message ? 'true' : 'false'"
              aria-describedby="messageError"
            ></textarea>
            <span v-if="errors.message" id="messageError" class="text-red-600">
              {{ i18n.messageError }}
            </span>
          </div>

          <div class="mb-3">
            <input
              type="submit"
              class="cursor-pointer rounded bg-yellow-600 px-4 py-2 text-white"
              id="submit"
              :value="i18n.submit"
            />
          </div>

          <div v-if="formSuccess" id="formSuccess" role="alert" class="text-green-600">
            {{ i18n.success }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    i18n: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const formData = ref({ name: "", email: "", message: "" });

    const errors = ref({ name: false, email: false, message: false });
    const formSuccess = ref(false);

    const sendEmail = async () => {
      try {
        const response = await fetch("https://api.darekduda.pl/api/send-email/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.value.name,
            email: formData.value.email,
            message: `Name: ${formData.value.name}\nMessage: ${formData.value.message}`,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          alert(result.message || props.i18n.alertSuccess);
          formSuccess.value = true;
        } else {
          const error = await response.json();
          alert(error.message || props.i18n.alertFail);
        }
      } catch (error) {
        console.error("Error sending email:", error);
        alert(props.i18n.alertFail);
      }
    };

    const handleSubmit = () => {
      errors.value.name = false;
      errors.value.email = false;
      errors.value.message = false;
      formSuccess.value = false;

      let valid = true;

      if (!formData.value.name.trim()) {
        errors.value.name = true;
        valid = false;
      }

      const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
      if (!emailPattern.test(formData.value.email.trim())) {
        errors.value.email = true;
        valid = false;
      }

      if (!formData.value.message.trim()) {
        errors.value.message = true;
        valid = false;
      }

      if (valid) {
        sendEmail();
        formData.value.name = "";
        formData.value.email = "";
        formData.value.message = "";
      }
    };

    return { formData, errors, formSuccess, handleSubmit };
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.form-control:focus {
  outline: 2px solid #cca600;
}
</style>
