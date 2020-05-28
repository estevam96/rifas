<template>
  <footer class="footer pt-4 pb-4 mt-auto">
      <div class="container">
      <b-row>
          <b-col md="6 d-flex align-items-end">
              <p class="text-light">Copyrights © 2020 Todos os direitos reservados.</p>
          </b-col>
          <b-col md="6">
              <b-row>
                <b-col class="d-flex justify-content-end">
                  <b-link class="m-1" href="#"><font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" :style="{color: '#3b5998'}"/></b-link>
                  <b-link class="m-1" href="#"><font-awesome-icon :icon="['fab', 'instagram']" size="2x" :style="{color: '#B618A8'}"/></b-link>
                  <b-link class="m-1" href="#"><font-awesome-icon :icon="['fab', 'youtube']" size="2x" :style="{color: '#c4302b'}"/></b-link>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="d-flex justify-content-end">

                    <b-col lg="6" class="d-flex justify-content-end">
                      <p class="m-1 text-light"><font-awesome-icon :icon="['fa', 'envelope']" /> administrador@gmail.com</p>
                    </b-col>
                    <b-col lg="6" class="d-flex justify-content-end">
                      <p class="m-1 text-light"><font-awesome-icon :icon="['fab', 'whatsapp']" /> +55 88 0000-0000</p>
                    </b-col>

                </b-col>
              </b-row>
          </b-col>
      </b-row>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer{
    background-color: black;

}
</style>