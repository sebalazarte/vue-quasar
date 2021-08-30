<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced/>

    <div class="row justify-center">
      <div class="col-12 col-sm-6 col-md-6">
        <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-mt-md"
    >
      <q-input
        filled
        v-model="userForm.email"
        type="email"
        label="Email *"
        hint="ingrese su email"
        lazy-rules
        :rules="[ 
          val => val && val.length > 0 || 'Este campo es obligatorio',
          val => isValidEmail(val)
          ]"
      />

      <q-input
        filled
        type="password"
        v-model="userForm.password1"
        label=" contraseña *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Este campo es obligatirio'
        ]"
      />

            <q-input
        filled
        type="password"
        v-model="userForm.password2"
        label="Repetir Contraseña *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Este campo es obligatirio',
          val => isSamePassword(val)
        ]"
      />

      <q-checkbox
        v-model="userForm.conditions"
        label="Acepto las condiciones y terminos de uso"
        :style="userForm.errorInCondition
          && !userForm.conditions
          && 'color: red'"
        />
        
      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'PageIndex',
  setup () {
    const $q = useQuasar()

    const userForm = ref({
      email: '',
      password1: '',
      password2: '',
      conditions: false,
      errorInCondition: false
    })

    return {
      userForm,
      onSubmit () {
        console.log(userForm.value);
        if (!userForm.value.conditions){
           
           $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'las la-exclamation-circle',
            message: 'You need to accept the license and terms first'
          })
          userForm.value.errorInCondition = true;
          return;
        }

        // if (userForm.value.conditions !== true) {
        //   $q.notify({
        //     color: 'red-5',
        //     textColor: 'white',
        //     icon: 'warning',
        //     message: 'You need to accept the license and terms first'
        //   })
        // }
        // else {
        //   $q.notify({
        //     color: 'green-4',
        //     textColor: 'white',
        //     icon: 'cloud_done',
        //     message: 'Submitted'
        //   })
        // }
      },

      onReset () {
        userForm.value = {
          email: '',
          password1: '',
          password2: '',
          conditions: false,
          errorInCondition: false
        }
      },

      isValidEmail( val ) {
        const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || 'El correo no parece ser válido';
      },
      isSamePassword(val){
        return val === userForm.value.password1 || 'Las contraseñas no son iguales'
      }
    }
  }
})
</script>
