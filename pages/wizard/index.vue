<template>
  <div>
    <b-row class='mt-1'>
      <b-card>
        <b-card-text>
          Olá! Eu sou o Assistente LDM e quero ajudar você com um método muito simples e dinâmico. Você terá um “Quadro de Sessões de Estudos” e será muito fácil manter-se organizado.
        </b-card-text>
        <b-card-text>
          Veja abaixo um exemplo de como o seu quadro poderá estar após algumas semanas de aula.
        </b-card-text>
      </b-card>
    </b-row>

    <b-row class='mt-1'>
      <b-card title="Quadro de Sessões de Estudo" style="width: 100%">
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

    <b-row class='mt-1' align-h="end" style="margin-right: 20px;">
      <b-button @click="next">Próximo ></b-button>
    </b-row>

    <b-modal id="sessionCard" size="md" no-close-on-backdrop header-text-variant='white' footer-text-variant="white" body-text-variant="white" :header-bg-variant="sessionType" :body-bg-variant="sessionType" :footer-bg-variant="sessionType" text-variant="white" :title="'Sessão: '+ sessionNumber">

    </b-modal>
  </div>
</template>

<script>

export default {
  data () {
    return {
      sessionNumber: 0,
      sessionType: 'info'
    }
  },
  methods: {
    next () {
      const planId = this.$route.query.planId;
      const userId = this.$route.query.userId;
      this.$router.push(`/wizard/question?planId=${planId}&userId=${userId}`);
    },

    openCard (sessionNumber, sessionType) {
      this.sessionNumber  = sessionNumber;
      this.sessionType    = sessionType;
      this.$bvModal.show('sessionCard');
    }
  }
}
</script>