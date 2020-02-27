<template>
  <div>
    <b-row class="mt-1" style="margin-right: 100px;">
      <b-col cols="4">
        <img
          v-bind:src="ivy"
          title
          v-bind:style="ivyStyle"
        />
      </b-col>
      <b-col cols="8">
        <div>
          <b-carousel
            :interval="0"
            indicators
            controls
            img-width="1024"
            img-height="600"
          >
            <b-carousel-slide img-blank>
              <h2 style="font-family: 'Raleway', sans-serif; font-size: 32px; color: #48C6CB;">
                Bem vindo!
              </h2>
              <p
                style="font-family: 'Raleway', sans-serif; font-size: 24px; color: black; margin-bottom: 80px;"
              >Ivy é um robô que estará com você na sua rotina de estudos no Ibmec Online</p>
              <p
                style="font-family: 'Raleway', sans-serif; font-size: 18px; color: gray;"
              >Continue avançando</p>
            </b-carousel-slide>
            <b-carousel-slide img-blank>
              <h2 style="font-family: 'Raleway', sans-serif; font-size: 32px; color: #48C6CB;">
              Escolha quem é Ivy para você!</h2>
              <div style="display: inline;">
                <img src="https://sofia-ucam-plano-de-estudos.s3.amazonaws.com/ivy-imgs/ivy-options.jpg" style="width: 550px; height: 290px;">
              </div>
              <b-form-radio-group
              v-model="selected"
              :options="options"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
              style="font-size: 0px;"
            ></b-form-radio-group>
            </b-carousel-slide>
            <b-carousel-slide img-blank>
              <h2 style="font-family: 'Raleway', sans-serif; font-size: 32px; color: #48C6CB;">
                Olá!
              </h2>
              <p
                style="font-family: 'Raleway', sans-serif; font-size: 24px; color: black; margin-bottom: 80px;"
              >Fico feliz que tenha me escolhido! Sou Ivy para você! Junto com o time do Ibmec Online posso te ajudar a ter uma boa rotina de estudos!</p>
            </b-carousel-slide>
            <b-carousel-slide img-blank>
              <p
                style="font-family: 'Raleway', sans-serif; font-size: 24px; color: black; font-weight: bolder;">
                Nós do Ibmec Online, sabemos que estabelecer uma rotina de estudos exige disciplina, e eu posso ajudar você com:
                <ul style="font-size: 15px; text-align: left; font-weight: normal; margin-top: 10px; margin-bottom: 50px;">
                  <li> Quadro organizador de estudo </li>
                  <li> Dicas de estudo </li>
                  <li> Espaço para anotações </li>
                </ul>
              </p>
            </b-carousel-slide>
            <b-carousel-slide img-blank>
              <h2
                style="font-family: 'Raleway', sans-serif; font-size: 32px; font-weight: bold; color: black;">
                                             Achou interessante? </h2> <p style="font-weight: normal; color: black; font-size: 24px; margin-bottom: 100px;"> Além disso, enviarei toda semana para você um email sobre sua rotina de estudos!</p>

            </b-carousel-slide>
            <b-carousel-slide img-blank>
              <h2
                style="font-family: 'Raleway', sans-serif; font-size: 32px; font-weight: bold; color: black;"
              >Vamos lá!</h2>
              <p style="font-family: 'Raleway', sans-serif; font-size: 24px; color: black;">Qual é o seu melhor momento para estudo?</p>
              <b-form-checkbox
                pill
                v-model="manha"
                name="check-button"
                button
                button-variant="outline-info"
              >Manhã</b-form-checkbox>
              <b-form-checkbox
                pill
                v-model="tarde"
                name="check-button"
                button
                button-variant="outline-info"
              >Tarde</b-form-checkbox>
              <b-form-checkbox
                pill
                v-model="noite"
                name="check-button"
                button
                button-variant="outline-info"
              >Noite</b-form-checkbox>
              <p style="margin-bottom: 100px;"></p>
            </b-carousel-slide>
            <b-carousel-slide img-blank>
              <h2
                style="font-family: 'Raleway', sans-serif; font-size: 30px; font-weight: bold; color: black;"
              >Certo! Agora é com você, clique no botão abaixo para gerar o seu quadro de estudo.</h2>
              <p
                style="font-family: 'Raleway', sans-serif; font-size: 20px; color: black;"
              >Ao longo do curso, espero poder te apoiar para garantir que o seu processo de aprendizagem seja cada vez mais rico.</p>
              <b-button @click="next" variant="outline-info">Gerar quadro de estudos</b-button>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: '',
      options: [
          { name: 'Opção A' , url: 'https://sofia-ucam-plano-de-estudos.s3.amazonaws.com/ivy-imgs/personagem_suzana_3a.jpg'},
          { name: 'Opção B' , url: 'https://sofia-ucam-plano-de-estudos.s3.amazonaws.com/ivy-imgs/personagem_suzana_1.jpg'},
          { name: 'Opção C' , url: 'https://sofia-ucam-plano-de-estudos.s3.amazonaws.com/ivy-imgs/personagem_suzana_1a.jpg'},
          { name: 'Opção D' , url: 'https://sofia-ucam-plano-de-estudos.s3.amazonaws.com/ivy-imgs/personagem_suzana_2.jpg'},
          { name: 'Opção E' , url: 'https://sofia-ucam-plano-de-estudos.s3.amazonaws.com/ivy-imgs/personagem_suzana_3.jpg'},
      ],
      manha: false,
      ivy: '',
      tarde: false,
      noite: false,
      name: "",
      masterPlan: null,
      sessionTimeInit: null,
      ivyStyle:''
    };
  },

  created() {
    this.initialize();
  },
  watch: {
    'selected': function() {
      switch(this.selected){
            case 'Opção A':
              this.ivy = this.options[0].url;
              this.ivyStyle = 'height: auto; width: 100%; margin-top: 50px; margin-left: 50px;'
              break;
            case 'Opção B': 
              this.ivy = this.options[1].url;
              this.ivyStyle = 'height: auto; width: 100%; margin-top: 50px; margin-left: 50px;'
              break;
            case 'Opção C':
              this.ivy = this.options[2].url;
              this.ivyStyle = 'height: auto; width: 100%; margin-top: 50px; margin-left: 50px;'
              break;
            case 'Opção D':
              this.ivy = this.options[3].url;
              this.ivyStyle = 'height: auto; width: 100%; margin-top: 50px; margin-left: 50px;'
              break;
            case 'Opção E':
              this.ivy = this.options[4].url;
              break;
          }
    }
  },
  methods: {
    async initialize() {
      const planId = this.$route.query.planId;
      this.ivy = 'https://sofia-ucam-plano-de-estudos.s3.amazonaws.com/ivy-imgs/logo.png'
      this.ivyStyle = 'height: auto; width: 100%; margin-top: 150px; margin-left: 50px;'
      console.log(this.selected.url);
      const options = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.X_API_KEY,
          Authorization: this.$store.state.auth.token
        }
      };
      await axios
        .get(`${process.env.BASE_URL}/plans/${planId}`, options)
        .then(res => {
          if (res.data) {
            this.masterPlan = res.data.plan;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    async next() {
      this.$nuxt.$loading.start();

      const planId = this.$route.query.planId;
      const userId = this.$route.query.userId;
      const userName = this.$route.query.userName;
      let count = 0;
      let countErrors = 0;
      let studentId = 0;
      let sessionList = [];
      const options = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.X_API_KEY,
          Authorization: this.$store.state.auth.token
        }
      };

      if (this.manha) {
        let body2 = {
          name: userName,
          period: "morning",
          userId: userId,
          studyPlanQuestionId: 1,
          ivyImg: this.ivy
        };
        await axios
          .post(
            `${process.env.BASE_URL}/plans/${planId}/students?userId=${userId}`,
            body2,
            options
          )
          .then(res => {
            studentId = res.data.id;
          })
          .catch(error => {
            console.log(error.response);
            alert("Ocorreu um erro. Tente novamente mais tarde.");
            return;
          });
      }

      if (this.tarde) {
        let body2 = {
          name: userName,
          period: "day",
          userId: userId,
          studyPlanQuestionId: 1,
          ivyImg: this.ivy
        };
        await axios
          .post(
            `${process.env.BASE_URL}/plans/${planId}/students?userId=${userId}`,
            body2,
            options
          )
          .then(res => {
            studentId = res.data.id;
            alert("Plano de estudos sendo gerado!");
          })
          .catch(error => {
            console.log(error.response);
            return;
          });
      }

      if (this.noite) {
        let body2 = {
          name: userName,
          period: "night",
          userId: userId,
          studyPlanQuestionId: 1,
          ivyImg: this.ivy
        };
        await axios
          .post(
            `${process.env.BASE_URL}/plans/${planId}/students?userId=${userId}`,
            body2,
            options
          )
          .then(res => {
            studentId = res.data.id;
          })
          .catch(error => {
            console.log(error.response);
            alert("Ocorreu um erro. Tente novamente mais tarde.");
            return;
          });
      }

      await axios
        .get(`${process.env.BASE_URL}/plans/${planId}/sessions`, options)
        .then(res => {
          sessionList = res.data.session;
        })
        .catch(err => {
          console.log(err);
        });
      let sessionDate = new Date(Date.now()).toISOString();
      sessionDate = sessionDate.substring(0,10);
      console.log(sessionDate);
      for (let session of sessionList) {
        if(sessionDate > this.masterPlan.session_date_end) {
          sessionDate = session_date_end;
        }
        if (session.type == 1) {
          if (this.manha) {
            this.sessionTimeInit = this.masterPlan.morning_time_init;
          }
          if (this.tarde) {
            this.sessionTimeInit = this.masterPlan.day_time_init;
          }
          if (this.noite) {
            this.sessionTimeInit = this.masterPlan.night_time_init;
          }
          let body = {
            sessionTimeInit: this.sessionTimeInit,
            sessionDate: sessionDate,
            notes: "",
            sessionStatus: "0"
          };
          let sessionDateAux = new Date(sessionDate);
          sessionDateAux = sessionDateAux.setDate(sessionDateAux.getDate() + 1);
          sessionDate = new Date(sessionDateAux).toISOString().substring(0,10);
          let sessionId = session.id;
          await axios
            .post(
              `${process.env.BASE_URL}/plans/${planId}/sessions/${sessionId}/students/${studentId}`,
              body,
              options
            )
            .then(res => {
              console.log(res);
              count++;
            })
            .catch(error => {
              console.log(error.response);
              countErrors++;
              return;
            });
        }
      }
      this.$nuxt.$loading.finish();
      alert(
        "Importação concluída: disciplinas importadas: " +
          count +
          "Erros: " +
          countErrors
      );
      this.$router.push(
        `/?planId=${planId}&userId=${userId}&userName=${userName}`
      );
    }
  }
};
</script>

