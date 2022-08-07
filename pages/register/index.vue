<template>
  <v-container fluid>
    <v-text-field
      ref="name"
      :value="name"
      label=""
      maxlength="50"
      outlined
      data-cy="name"
      @change="(value) => (name = value)"
    >
      <template #prepend>Name</template>
    </v-text-field>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      hide-details
      min-width="auto"
    >
      <template #activator="{ on, attrs }">
        <v-text-field
          id="birthday"
          ref="birthday"
          v-model="birthday"
          label=""
          outlined
          readonly
          clearable
          data-cy="birthday-text-field"
          v-bind="attrs"
          v-on="on"
          @click:clear="birthday = null"
        >
          <template #prepend>Birthday</template>
        </v-text-field>
      </template>
      <v-date-picker
        v-model="birthday"
        year-icon="mdi-calendar-edit"
        prev-icon="mdi-skip-previous"
        next-icon="mdi-skip-next"
        data-cy="birthday-date-picker"
        :day-format="(date) => new Date(date).getDate()"
        @input="menu = false"
      ></v-date-picker>
    </v-menu>

    <v-radio-group
      ref="sex"
      v-model="sex"
      row
      class="mt-0 mb-0"
    >
      <template #prepend>Sex</template>
      <v-radio
        id="male"
        value="male"
        label="male"
        data-cy="sex-male"
      ></v-radio>
      <v-radio
        id="female"
        value="female"
        label="female"
        data-cy="sex-female"
      ></v-radio>
    </v-radio-group>

    <v-row class="my-5">
      <v-col cols="10">
        <v-checkbox
          v-model="agreedWithEula"
          :label="`I agree`"
          color="primary"
          data-cy="agreed-with-eula"
        >
        </v-checkbox>
      </v-col>
    </v-row>

    <v-btn
      class="mx-0"
      cols="12"
      large
      block
      color="primary"
      nuxt
      data-cy="next-btn"
      @click="register"
    >
      register
    </v-btn>

  </v-container>
</template>

<script>
export default {
  name: 'RegisterIndex',
  data() {
    return {
      menu: false,
      name: '',
      birthday: '',
      sex: '',
      agreedWithEula: false
    }
  },
  methods: {
    register() {
      this.$router.push(
          `/register/complete/`
        )
    }
  }
}
</script>

<style scoped>

</style>
