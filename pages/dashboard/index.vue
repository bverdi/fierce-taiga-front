<template>
  <div>
    <b-row class='mt-1'>
      <b-card>
        <b-card-text>
      <b-row class='mt-1' style="margin: 0 auto !important;">
      <b-card title="Quadro de Sessões de Estudo" style="width: 900px; margin: 0 auto !important;">
        <div role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle.accordion-1>
              <b-progress :max="14" height="2rem" show-progress animated>
                <b-progress-bar :value="4" variant="danger">
                  Sessões Atrasadas/Pendentes: <strong>4 / 14</strong>
                </b-progress-bar>
              </b-progress>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-button variant="danger" class="mt-1" @click="openCard(1, 'danger')">Sessão 01</b-button>
                <b-button variant="danger" class="mt-1">Sessão 02</b-button>
                <b-button variant="danger" class="mt-1">Sessão 03</b-button>
                <b-button variant="danger" class="mt-1">Sessão 04</b-button>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle.accordion-2>
              <b-progress :max="14" height="2rem" show-progress animated>
                <b-progress-bar :value="5" variant="warning">
                  Próximas Sessões: <strong>5 / 14</strong>
                </b-progress-bar>
              </b-progress>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-button variant="warning" class="mt-1" @click="openCard(10, 'warning')">Sessão 10</b-button>
                <b-button variant="warning" class="mt-1">Sessão 11</b-button>
                <b-button variant="warning" class="mt-1">Sessão 12</b-button>
                <b-button variant="warning" class="mt-1">Sessão 13</b-button>
                <b-button variant="warning" class="mt-1">Sessão 14</b-button>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle.accordion-3>
              <b-progress :max="14" height="2rem" show-progress animated>
                <b-progress-bar :value="4" variant="success">
                  Sessões estudadas a revisar: <strong>3 / 14</strong>
                </b-progress-bar>
              </b-progress>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-button variant="success" class="mt-1" @click="openCard(5, 'success')">Sessão 05</b-button>
                <b-button variant="success" class="mt-1">Sessão 06</b-button>
                <b-button variant="success" class="mt-1">Sessão 07</b-button>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1" fluid>
            <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle.accordion-4>
              <b-progress :max="14" height="2rem" show-progress animated>
                <b-progress-bar :value="4" variant="primary">
                  Sessões estudadas: <strong>2 / 14</strong>
                </b-progress-bar>
              </b-progress>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-button variant="primary" class="mt-1" @click="openCard(8, 'primary')">Sessão 08</b-button>
                <b-button variant="primary" class="mt-1">Sessão 09</b-button>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-card>
    </b-row>
        </b-card-text>
      </b-card>
    </b-row>
  </div>
</template>
<script>

import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
        sessionName: "",
        objectiveName: "",
        detailsName: "",
        settingsName: "",
        sessionDate: "",
        sessionEffort: "",
        startTime: "",
        endTime: ""


    }
  },
  created() {
    this.initialize()
  },
  filters : {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
      }
    }
  },
  methods: {
    async initialize() {
      const planId = this.$route.query.planId;
      const userId = this.$route.query.userId;

      if(!planId || !userId){
        window.location.replace('https://www.google.com.br');
      }

      const options = {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.X_API_KEY,
          'Authorization': this.$store.state.auth.token
        }
      };
      console.log(options);
      await axios.get(`${process.env.BASE_URL}/plans/${planId}/students/${userId}/details`, options)
        .then((res) => {
          console.log(res.data);
          if(!res.data.plans){
            this.$router.push(`/wizard`)
          }
          else {
            return ;
          }
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>