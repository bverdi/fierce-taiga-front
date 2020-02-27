<template>
  <div id="app">
    <meta charset="utf-8"/>
    <div class="bv-example-row" style="background-color: white; max-height: 50px; height: 50px;    box-shadow: 3px 3px 3px lightgrey;">
      <b-row class="text-center" style="line-height: 50px;">
            <b-col cols="10"></b-col>
            <b-col cols="1"  v-bind:style="{ backgroundColor: colorBgBar}" style="padding-left: 0px !important; padding-right: 0px !important;" class="items-top"><a href="#"><img src='https://svgshare.com/i/HZu.svg' title='' @click="openTab('barView')"/></a></b-col><b-col cols="1"  v-bind:style="{ backgroundColor: colorBgCalendar}" style="padding-left: 0px !important; padding-right: 0px !important;" class="items-top"><a href="#"><img src='https://svgshare.com/i/HXw.svg' title='' @click="openTab('calendarView')"/></a></b-col>
      </b-row>
    </div>
    <b-container fluid style="margin-top: 10px;">
      <b-row class="text-center">
        <b-col cols="3">
          <img v-bind:src="ivyImg" title='' style="height: 100%; max-height: 480px; margin-top: 30px; width: 140%; max-width: 140%;"/>        
        </b-col>
        <b-col cols="9" style="background-color: #F6F8FA">
        <h1 style="text-align: left; margin-top: 0px; margin-left: 25px; color: #48C6CB; line-height: 20px; font-family: 'Raleway', sans-serif; font-size: 35px; font-weight: 600; margin-top: 10px;"> Olá, {{userName}}! <br style="font-size: 5px;"><span style="font-size: 17px; margin-top: 0px; margin-bottom: 0px; color: #575757; font-weight: 400;"> Bem vindo ao quadro de sessões de estudo </span></h1>
        <b-tabs card>
        <b-tab v-show="barView">
          <b-row class="mt-1" style="margin: 0 auto !important;">
            <b-card
              style="width: 900px; margin: 0 auto !important; padding-bottom: 0px !important; margin-bottom: 10px; box-shadow: 3px 3px 3px lightgrey; height: 100%;"
            >
            <b-row style="background-color: white; margin-bottom: 10px">
              <b-col cols="3" style="padding-left: 0px;padding-right: 35px;">
                <h2 style="font-size: 20px; font-weight: 800; color: #686868;"> <img src='https://svgshare.com/i/HXx.svg' title='' style="margin-right: 2px;" /> Em atraso </h2>
              </b-col>
              <b-col cols="7" style="margin-top: 2.5%">
                  <div id="todo">
                    <b-card no-body class="mb-1">
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-progress :max="total" height="0.3rem">
                          <b-progress-bar :value="todo" variant="danger"></b-progress-bar>
                        </b-progress>
                      </b-card-header>
                      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                        <b-card-body style="margin-bottom: 5px">
                          <b-button
                            v-for="(todo, index) of todoList"
                            @click="openCardSession(todo.session_id, index, 'danger', 'danger')"
                            v-bind:key="index"
                            class="mt-1"
                            style="margin-right: 5px; border-style: none; background-color: #DB0000; font-family: Raleway, sans-serif !important; color: white;"
                          >{{todo.session_date}}</b-button>
                        </b-card-body>
                  </b-collapse>
                    </b-card>
                  </div>
              </b-col>
              <b-col cols="2" style="margin-top: 1.7%;">
                <a href="#" v-b-toggle.accordion-1>ver datas<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.88 11.4533L16 17.56L22.12 11.4533L24 13.3333L16 21.3333L8 13.3333L9.88 11.4533Z" fill="#48C6CB"/>
                  </svg>
                </a>
              </b-col>
            </b-row>

           </b-card>
            <b-card
              style="width: 900px; margin: 0 auto !important; padding-bottom: 0px !important; margin-bottom: 10px; box-shadow: 3px 3px 3px lightgrey; height: 100%;"
            >
            <b-row style="background-color: white; margin-bottom: 10px">
              <b-col cols="3">
                <h2 style="font-size: 20px; font-weight: 800; color: #686868;"> <img src='https://svgshare.com/i/HZQ.svg' title='' style="margin-right: 2px;" /> Para estudar </h2>
              </b-col>
              <b-col cols="7" style="margin-top: 2.5%">
                  <div id="retake">
                    <b-card no-body class="mb-1">
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-progress :max="total" height="0.3rem">
                          <b-progress-bar :value="totalToStudy" variant="warning"></b-progress-bar>
                        </b-progress>
                      </b-card-header>
                      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body style="margin-bottom: 5px">
                          <b-button
                            v-for="(retake, index) of retakeList"
                            @click="openCardSession(retake.session_id, index, 'warning', 'warning')"
                            v-bind:key="index"
                            variant="warning"
                            class="mt-1"
                            style="margin-right: 5px; background-color: #E5B300 !important; border-style: none; font-family: Raleway, sans-serif !important; color: white;"
                          >{{retake.session_date}}</b-button>
                        </b-card-body>
                  </b-collapse>
                    </b-card>
                  </div>

              </b-col>
              <b-col cols="2" style="margin-top: 1.7%;">
                <a href="#" v-b-toggle.accordion-2>ver datas<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.88 11.4533L16 17.56L22.12 11.4533L24 13.3333L16 21.3333L8 13.3333L9.88 11.4533Z" fill="#48C6CB"/>
                </svg>
                </a>
              </b-col>
            </b-row>

           </b-card>
           <b-card
              style="width: 900px; margin: 0 auto !important; padding-bottom: 0px !important; margin-bottom: 10px; box-shadow: 3px 3px 3px lightgrey; height: 100%;"
            >
            <b-row style="background-color: white; margin-bottom: 10px">
              <b-col cols="3" style="padding-left: 0px;">
                <h2 style="font-size: 20px; font-weight: 800; color: #686868;"> <img src='https://svgshare.com/i/HYo.svg' title='' style="margin-right: 2px;" /> Para revisar </h2>
              </b-col>
              <b-col cols="7" style="margin-top: 2.5%">
                  <div id="review">
                    <b-card no-body class="mb-1">
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-progress :max="total" height="0.3rem">
                          <b-progress-bar :value="review" variant="primary"></b-progress-bar>
                        </b-progress>
                      </b-card-header>
                    </b-card>
                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                      <b-card-body style="margin-bottom: 5px">
                          <b-button
                            v-for="(review, index) of reviewList"
                            @click="openCardSession(review.session_id, index, 'primary', 'primary')"
                            v-bind:key="index"
                            variant="primary"
                            class="mt-1"
                            style="margin-right: 5px;  	background-color: #0CB3FA !important; border-style: none; font-family: Raleway, sans-serif !important; color: white;"
                          >{{review.session_date}}</b-button>
                        </b-card-body>
                  </b-collapse>
                  </div>
              </b-col>
              <b-col cols="2" style="margin-top: 1.7%;">
                <a href="#" v-b-toggle.accordion-3>ver datas<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.88 11.4533L16 17.56L22.12 11.4533L24 13.3333L16 21.3333L8 13.3333L9.88 11.4533Z" fill="#48C6CB"/>
                </svg>
                </a>
              </b-col>
            </b-row>

           </b-card>
            <b-card
              style="width: 900px; margin: 0 auto !important; padding-bottom: 0px !important; margin-bottom: 10px; box-shadow: 3px 3px 3px lightgrey; height: 100%;"
            >
            <b-row style="background-color: white; margin-bottom: 10px">
              <b-col cols="3" style="padding-left: 0px;padding-right: 35px;">
                <h2 style="font-size: 20px; font-weight: 800; color: #686868;"> <img src='https://svgshare.com/i/H_b.svg' title='' style="margin-right: 2px;" /> Estudadas </h2>
              </b-col>
              <b-col cols="7" style="margin-top: 2.5%">
                  <div id="todo">
                    <b-card no-body class="mb-1">
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-progress :max="total" height="0.3rem">
                          <b-progress-bar :value="finished" variant="success"></b-progress-bar>
                        </b-progress>
                      </b-card-header>
                      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                        <b-card-body style="margin-bottom: 5px;">
                          <b-button
                            v-for="(finished, index) of finishedList"
                            @click="openCardSession(finished.session_id, index, 'success', 'success')"
                            v-bind:key="index"
                            class="mt-1"
                            style="margin-right: 5px; background-color: #13EEB9; border-style: none; font-family: Raleway, sans-serif !important; color: white;"
                          >{{finished.session_date}}</b-button>
                        </b-card-body>
                  </b-collapse>
                    </b-card>
                  </div>
              </b-col>
              <b-col cols="2" style="margin-top: 1.7%;">
                <a href="#" v-b-toggle.accordion-4>ver datas<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88 11.4533L16 17.56L22.12 11.4533L24 13.3333L16 21.3333L8 13.3333L9.88 11.4533Z" fill="#48C6CB"/>
</svg>
</a>
              </b-col>
            </b-row>

           </b-card>
           </b-row>
           </b-tab>
           <b-tab v-show="calendarView">
            <full-calendar @event-selected="openCardSessionCallendar"
              :events="events"
              :config="config"
              :editable="false"
              :droppable="false"
              style="width: 900px;"
            ></full-calendar>
          </b-tab>
           </b-tabs>
           </b-col>
           </b-row>
           </b-container> 
                  <b-modal
                    v-model="modalShow"
                    class="rounded"
                    aria-label
                    body-bg-variant="white  "
                    :header-bg-variant="headerBgVariant"
                    cancel-ok
                    cancel-title
                    footer-bg-variant="white"
                    centered
                    style="border-radius: 2.3rem !important; font-family: 'Raleway', sans-serif !important;"
                  >
                    <template v-slot:modal-title> <img :src="src" title='' style="margin-right: 2px;" /> {{titleModal}} </template>
                    <p
                      style="font-family: 'Raleway', sans-serif !important; color: #575757; font-size: 14px; margin-top: 0px !important; margin-bottom: 0px !important"
                    >
                      <span style="font-family: 'Raleway', sans-serif !important;font-size: 14px; color: #888585;">Assunto:</span>
                      {{title}}
                    </p>
                    <p
                      style="font-family: 'Raleway', sans-serif !important;color: #575757; font-size: 14px; margin-top: 0px !important; margin-bottom: 0px !important"
                    >
                      <span style="font-family: 'Raleway', sans-serif !important;font-size: 14px; color: #888585;">Objetivo:</span>
                      {{objective}}
                    </p>
                                        <p
                      style="font-family: 'Raleway', sans-serif !important;color: #575757; font-size: 14px; margin-top: 0px !important; margin-bottom: 0px !important"
                    >
                      <span style="font-family: 'Raleway', sans-serif !important;font-size: 14px; color: #888585;">Disciplina:</span>
                      {{subject}}
                    </p>
                    <p
                      style="font-family: 'Raleway', sans-serif !important; color: #575757; font-size: 14px; margin-top: 0px !important; margin-bottom: 0px !important; font-weight: bolder;"
                    >
                      <span style="font-family: 'Raleway', sans-serif !important;font-size: 14px; color: #888585; font-weight: normal;">
                      Esforço recomendado:</span>
                      {{effort}}h
                    </p>
                    <p
                      style="font-family: 'Raleway', sans-serif !important; color: #575757; font-size: 14px; margin-top: 0px !important; margin-bottom: 0px !important"
                    >
                      <span style="font-family: 'Raleway', sans-serif !important;font-size: 14px; color: #888585;">Data:</span>
                      {{date}}
                        <svg width="20" height="20" viewBox="0 0 24 24" @click="modalShowDate = !modalShowDate" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8297 9.35037L14.6474 10.168L6.5952 18.2202H5.77753V17.4026L13.8297 9.35037ZM17.0293 4C16.8071 4 16.576 4.08888 16.4072 4.25774L14.7807 5.88418L18.1136 9.21705L19.74 7.59061C20.0867 7.24399 20.0867 6.68407 19.74 6.33745L17.6603 4.25774C17.4826 4.07999 17.2604 4 17.0293 4ZM13.8297 6.83516L4 16.6649V19.9978H7.33287L17.1626 10.168L13.8297 6.83516Z" fill="#000000"/>
                        </svg>
                    </p>

                    <p
                      style="font-family: 'Raleway', sans-serif !important;color: #575757; font-size: 14px; margin-top: 0px !important; margin-bottom: 0px !important"
                    >
                      <span style="font-family: 'Raleway', sans-serif !important;font-size: 14px; color: #888585;">Horário:</span>
                      {{timeInit}}h - {{timeEnd}}h                       
                        <svg width="20" height="20" viewBox="0 0 24 24" @click="modalShowHour = !modalShowHour  " fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8297 9.35037L14.6474 10.168L6.5952 18.2202H5.77753V17.4026L13.8297 9.35037ZM17.0293 4C16.8071 4 16.576 4.08888 16.4072 4.25774L14.7807 5.88418L18.1136 9.21705L19.74 7.59061C20.0867 7.24399 20.0867 6.68407 19.74 6.33745L17.6603 4.25774C17.4826 4.07999 17.2604 4 17.0293 4ZM13.8297 6.83516L4 16.6649V19.9978H7.33287L17.1626 10.168L13.8297 6.83516Z" fill="#000000"/>
                        </svg>
                    </p>
                    <template v-slot:modal-footer="{ ok, cancel, hide }">
                      <b-button
                        pill
                        size="sm"
                        style="background-color: #48C6CB;border-style: none; font-family: 'Raleway', sans-serif !important; font-size: 13px;"
                        @click="modalShowDetails = !modalShowDetails"
                      >Ver detalhes</b-button>
                      <b-button
                        pill
                        size="sm"
                        style="background-color: #48C6CB;border-style: none; font-family: 'Raleway', sans-serif !important; font-size: 13px;"
                        @click="modalShowNotes = !modalShowNotes"
                      >Anotações</b-button>
                      <b-button
                        pill
                        size="sm"
                        style="background-color: #48C6CB;border-style: none; font-family: 'Raleway', sans-serif !important; font-size: 13px;"
                        @click="modalShowOptions = !modalShowOptions"
                      >Marcar como concluído</b-button>
                    </template>
                  </b-modal>

                  <b-modal
                    v-model="modalShowDetails"
                    class="rounded"
                    title="Detalhes"
                    aria-label
                    hide-backdrop
                    content-class="shadow"
                    :body-bg-variant="headerBgVariant"
                    :header-bg-variant="headerBgVariant"
                    :footer-bg-variant="headerBgVariant"
                    style="border-radius: 2.3rem !important; font-family: 'Raleway', sans-serif;"
                  >
                    <ckeditor :editor="editor" v-model="details" disabled :config="editorConfig"></ckeditor>
                                        <template v-slot:modal-footer="{ ok, cancel, hide }">
                      <b-button
                        size="sm"
                        style = "background-color: #DB0000;border-style: none; font-family: 'Raleway', sans-serif !important; font-size: 13px;"
                        @click="modalShowDetails = !modalShowDetails"
                      >Cancelar</b-button>
                    </template>
                  </b-modal>
                  <b-modal
                    v-model="modalShowNotes"
                    class="rounded"
                    title="Anotações"
                    aria-label
                    hide-backdrop
                    content-class="shadow"
                    :body-bg-variant="headerBgVariant"
                    :header-bg-variant="headerBgVariant"
                    :footer-bg-variant="headerBgVariant"
                    style="border-radius: 2.3rem !important; font-family: 'Raleway', sans-serif;"
                  >
                    <ckeditor :editor="editor" v-model="notes"></ckeditor>
                    <template v-slot:modal-footer="{ ok, cancel, hide }">
                      <b-button
                        size="sm"
                        style = "background-color: #DB0000;border-style: none; font-family: 'Raleway', sans-serif !important; font-size: 13px;"
                        @click="modalShowNotes = !modalShowNotes"
                      >Cancelar</b-button>
                      <b-button size="sm" 
                      style="background-color: #48C6CB;border-style: none; font-family: 'Raleway', sans-serif !important; font-size: 13px;" @click="saveNotes()">Salvar Anotações</b-button>
                    </template>
                  </b-modal>
                  <b-modal
                    v-model="modalShowDate"
                    class="rounded"
                    title="Alterar data"
                    aria-label
                    hide-backdrop
                    content-class="shadow"
                    :body-bg-variant="headerBgVariant"
                    :header-bg-variant="headerBgVariant"
                    :footer-bg-variant="headerBgVariant"
                    style="border-radius: 2.3rem !important;"
                  >
                    <template v-slot:modal-title>{{title}}</template>
                    <p>Altere a data abaixo:</p>
                    <input type="date" v-model="today" />
                    <template v-slot:modal-footer="{ ok, cancel, hide }">
                      <b-button
                        size="sm"
                        variant="success"
                        @click="saveSession('date', today)"
                      >Alterar Data</b-button>
                      <b-button
                        size="sm"
                        variant="danger"
                        @click="modalShowDate = !modalShowDate"
                      >Cancelar</b-button>
                    </template>
                  </b-modal>

                  <b-modal
                    v-model="modalShowHour"
                    class="rounded"
                    title="Alterar hora"
                    aria-label
                    hide-backdrop
                    content-class="shadow"
                    :body-bg-variant="headerBgVariant"
                    :header-bg-variant="headerBgVariant"
                    :footer-bg-variant="headerBgVariant"
                    style="border-radius: 2.3rem !important;"
                  >
                    <template v-slot:modal-title>{{title}}</template>
                    <p>Altere a hora abaixo:</p>
                    <input type="time" v-model="hour" />
                    <template v-slot:modal-footer="{ ok, cancel, hide }">
                      <b-button
                        size="sm"
                        variant="success"
                        @click="saveSession('hour', hour)"
                      >Alterar Hora</b-button>
                      <b-button
                        size="sm"
                        variant="danger"
                        @click="modalShowHour = !modalShowHour"
                      >Cancelar</b-button>
                    </template>
                  </b-modal>

                  <b-modal
                    v-model="modalShowOptions"
                    class="rounded"
                    title="Anotações"
                    aria-label
                    hide-backdrop
                    content-class="shadow"
                    body-bg-variant="white"
                    :header-bg-variant="headerBgVariant"
                    footer-bg-variant="white"
                    style="border-radius: 2.3rem !important;"
                  >
                    <template v-slot:modal-title>{{title}}</template>
                    <p
                      style="font-weight: normal; font-family: 'Raleway', sans-serif; font-size: 18px; margin-top: 0px !important; margin-bottom: 0px !important"
                    >
                      Você deseja revisar essa sessão? Caso sim, insira a data e clique em
                      <span
                        style="font-style: italic; font-weight: bolder;"
                      >Revisar</span>:
                    </p>
                    <input type="date" v-model="today" />
                    <template v-slot:modal-footer="{ ok, cancel, hide }">
                      <b-button
                        pill
                        size="sm"
                        style="background-color: #48C6CB;border-style: none; font-family: 'Raleway', sans-serif !important; font-size: 13px;"
                        @click="saveSession('review', today)"
                      >Revisar</b-button>
                      <b-button
                        pill
                        size="sm"
                        style="background-color: #48C6CB;border-style: none; font-family: 'Raleway', sans-serif !important; font-size: 13px;"
                        @click="saveSession('finish', '')"
                      >Finalizar</b-button>
                    </template>
                  </b-modal>
  </div>
</template>
<script>
import VueRouter from "vue-router";
import axios from "axios";
import moment from "moment";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FullCalendar } from "vue-full-calendar";
import "fullcalendar/dist/locale/pt-br";
import VueMeta from 'vue-meta'

export default {
  name: "app",
  components: {
    ckeditor: CKEditor.component,
    FullCalendar,
    vuemeta: VueMeta.component 
  },
  data() {
    return {
      config: {
        locale: "pt-br",
        defaultView: "month"
      },
      events: [],
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          items: []
        }
      },
      vuemeta: {
        metaInfo: {
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ]
        }
      },
      modalShow: false,
      modalShowNotes: false,
      modalShowDetails: false,
      todo: 0,
      total: 0,
      review: 0,
      retake: 0,
      finished: 0,
      timeToStudy: 0,
      totalFiveDays: 0,
      todoList: [],
      reviewList: [],
      retakeList: [],
      finishedList: [],
      userId: 0,
      planId: 0,
      auxList: [],
      modelShowRetakeToReview: false,
      subject: "",
      objective: "",
      effort: 0,
      date: "",
      timeInit: 0,
      timeEnd: 0,
      title: "",
      details: "",
      notes: "",
      headerBgVariant: "",
      modalShowOptions: false,
      today: "",
      sessionId: 0,
      modalShowDate: false,
      modalShowHour: false,
      barView: true,
      calendarView: false,
      userName: "",
      src: "",
      colorBgCalendar: "",
      colorBgBar: "",
      hour: 0,
      titleModal: '',
      totalToStudy: 0,
      ivyImg: ''
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });

      const options_token = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.X_API_KEY
        }
      };
      await axios
        .post(
          `${process.env.BASE_URL}/auth/token`,
          { userId: 1 },
          options_token
        )
        .then(res => {
          if (res.data) {
            this.$store.dispatch("auth/signIn", { token: res.data });
            localStorage.setItem("token", res.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
      
      const planId = this.$route.query.planId;
      const userId = this.$route.query.userId;
      const fullUserName = this.$route.query.userName;
      this.userName = this.$route.query.userName.split(' ');
      this.userName = this.userName[0];
      this.userId = userId;
      this.planId = planId;
      this.today = new Date(Date.now()).toISOString().substring(0, 10);
      if (!planId || !userId) {
        this.$router.push(`/erro`);
      }

      const options = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.X_API_KEY,
          Authorization: this.$store.state.auth.token
        }
      };
      await axios.get(`${process.env.BASE_URL}/plans/${planId}/students/${userId}/details`, options)
        .then(res => {
          if (res.data.plans === 0) {
            this.$router.push(`/wizard/question?planId=${planId}&userId=${userId}&userName=${fullUserName}`);
          } 
          else {
            this.todoList = [];
            this.finishedList = [];
            this.totalList = [];
            this.retakeList = [];
            this.reviewList = [];
            this.plans = res.data.plans;
            this.ivyImg = res.data.plans[0].character_chosen_url;
            console.log(this.plans);
            this.total = res.data.plans.length;
            for (let plan of res.data.plans) {
              if(plan.type == null){
                plan.type = 0;
              }
              let now = new Date(Date.now());
              now = new Date(now.setHours(now.getHours() - 3)).toISOString().substring(0,10);
              let nowPlusFive = new Date(Date.now());
              nowPlusFive = new Date(nowPlusFive.setHours(nowPlusFive.getHours() - 3));
              nowPlusFive = nowPlusFive.setDate(nowPlusFive.getDate() + 5);
              nowPlusFive = new Date(nowPlusFive).toISOString().substring(0, 10);
              let dateFormated = plan.session_date.substr(0,10)
              plan.session_date = new Date(plan.session_date)
                  .toISOString()
                  .substring(5, 10)
                  .replace("-", "/")
                  .split("/")
                  .reverse()
                  .join("/");
              if (plan.session_status == 0 && dateFormated < now && plan.study_plan_question_id == (plan.type)) {
                this.todoList.push(plan);
                this.todo++;
                this.events.push({
                  title: plan.session_name,
                  start: dateFormated+' '+plan.session_time_init,
                  color: "red",
                  extendedProps: {
                    sessionId: plan.session_id
                  }
                });
              }
              
              if (plan.session_status == 1 && plan.study_plan_question_id == (plan.type)) {
                this.reviewList.push(plan);
                this.review++;
                this.events.push({
                  title: plan.session_name,
                  start: dateFormated+' '+plan.session_time_init,
                  color: "blue",
                  extendedProps: {
                    sessionId: plan.session_id
                  }
                });
              }
              console.log(now);
              console.log(dateFormated);
              if (plan.session_status == 0 && dateFormated >= now && plan.study_plan_question_id == (plan.type) && dateFormated <= nowPlusFive) {
                this.retakeList.push(plan);
                this.retake++;
                this.events.push({
                  title: plan.session_name,
                  start: dateFormated+' '+plan.session_time_init,
                  color: "yellow",
                  extendedProps: {
                    sessionId: plan.session_id
                  }
                });
              }
              if (plan.session_status == 2 && plan.study_plan_question_id == (plan.type)) {
                this.events.push({
                  title: plan.session_name,
                  start: dateFormated+' '+plan.session_time_init,
                  color: "lightblue",
                  extendedProps: {
                    sessionId: plan.session_id
                  }
                });
                this.finished++;
                this.finishedList.push(plan);
              }
            }
              this.totalToStudy = parseInt(this.total) - parseInt(this.finished) - parseInt(this.review) - parseInt(this.todo);
              console.log(this.totalToStudy);
          }
        })
        .catch(err => {
          console.log(err);
        });
      this.$nuxt.$loading.finish();
    },
    async openTab(option) {
      if(option == 'calendarView'){
        this.barView = false;
        this.calendarView = true;
        this.colorBgCalendar = '#48C6CB';
        this.colorBgBar = '#FFF';
      }
      else {
        this.barView = true;
        this.calendarView = false;
        this.colorBgBar = '#48C6CB';
        this.colorBgCalendar = '#FFF';
      }
    },
    async saveSession(method, date, session_id) {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.X_API_KEY,
          Authorization: this.$store.state.auth.token
        }
      };
      const planId = this.$route.query.planId;
      const userId = this.$route.query.userId;

      if (method == "review") {
        let body = {
          sessionStatus: 1,
          sessionDate: this.today
        };

        await axios
          .put(
            `${process.env.BASE_URL}/students/${userId}/sessions/${this.sessionId}`,
            body,
            options
          )
          .then(() => {
            alert("Dados salvos com sucesso!");
            this.modalShowOptions = !this.modalShowOptions;
            this.modalShow = !this.modalShow;
            this.initialize();
          })
          .catch(error => {
            alert("Ocorreu uma falha! Tente novamente em alguns minutos.");
            this.modalShowOptions = !this.modalShowOptions;
            this.modalShow = !this.modalShow;
            console.log(error.response);
          });
      } else if (method == "date") {
        let body = {
          sessionDate: this.today
        };

        await axios
          .put(
            `${process.env.BASE_URL}/students/${userId}/sessions/${this.sessionId}`,
            body,
            options
          )
          .then(() => {
            alert("Dados salvos com sucesso!");
            this.modalShowDate = !this.modalShowDate;
            this.modalShow = !this.modalShow;
            this.initialize();
          })
          .catch(error => {
            alert("Ocorreu uma falha! Tente novamente em alguns minutos.");
            this.modalShowDate = !this.modalShowDate;
            this.modalShow = !this.modalShow;
            console.log(error.response);
          });
      }
      else if (method == "hour") {
        let body = {
          sessionTimeInit: this.hour
        };

        await axios
          .put(
            `${process.env.BASE_URL}/students/${userId}/sessions/${this.sessionId}`,
            body,
            options
          )
          .then(() => {
            alert("Dados salvos com sucesso!");
            this.modalShowDate = !this.modalShowDate;
            this.modalShow = !this.modalShow;
            this.initialize();
          })
          .catch(error => {
            alert("Ocorreu uma falha! Tente novamente em alguns minutos.");
            this.modalShowDate = !this.modalShowDate;
            this.modalShow = !this.modalShow;
            console.log(error.response);
          });
      } 
      else {
        let body = {
          sessionStatus: 2
        };

        await axios
          .put(
            `${process.env.BASE_URL}/students/${userId}/sessions/${this.sessionId}`,
            body,
            options
          )
          .then(() => {
            alert("Dados salvos com sucesso!");
            this.modalShowOptions = !this.modalShowOptions;
            this.modalShow = !this.modalShow;
            this.initialize();
          })
          .catch(error => {
            alert("Ocorreu uma falha! Tente novamente em alguns minutos.");
            this.modalShowOptions = !this.modalShowOptions;
            this.modalShow = !this.modalShow;
            console.log(error.response);
          });
      }
    },
    async backPage() {
      const planId = this.$route.query.planId;
      const userId = this.$route.query.userId;
      const fullUserName = this.$route.query.userName;
      this.$router.push(`/wizard/question?planId=${planId}&userId=${userId}&userName=${fullUserName}`);
    },
    async saveNotes(session_id, notes) {
      const userId = this.$route.query.userId;
      let body = {
        notes: this.notes
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.X_API_KEY,
          Authorization: this.$store.state.auth.token
        }
      };

      await axios
        .put(
          `${process.env.BASE_URL}/students/${userId}/sessions/${this.sessionId}`,
          body,
          options
        )
        .then(() => {
          alert("Dados salvos com sucesso!");
          this.modalShowNotes = !this.modalShowNotes;
        })
        .catch(error => {
          alert("Ocorreu uma falha! Tente novamente em alguns minutos.");
          this.modalShowNotes = !this.modalShowNotes;
          console.log(error.response);
        });
    },
    async openCardSessionCallendar(event) {
      const userId = this.$route.query.userId;
      
      const options = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.X_API_KEY,
          Authorization: this.$store.state.auth.token
        }
      };
      await axios
        .get(
          `${process.env.BASE_URL}/students/${userId}/sessions/${event.extendedProps.sessionId}/details`,
          options
        )
        .then(res => {
          this.title = res.data.plans[0].session_name;
          this.subject = res.data.plans[0].subject_id;
          this.objective = res.data.plans[0].objective;
          this.effort = res.data.plans[0].session_effort;
          this.date = new Date(res.data.plans[0].session_date)
            .toISOString()
            .substring(5, 10)
            .replace("-", "/")
            .split("/")
            .reverse()
            .join("/");
          this.timeInit = res.data.plans[0].session_time_init.substr(0,2);
          this.timeEnd = parseInt(res.data.plans[0].session_time_init.substr(0,2)) + parseInt(this.effort);
          this.modalShow = !this.modalShow;
          this.details = res.data.plans[0].details;
          this.notes = res.data.plans[0].notes;

          switch (event.color) {
            case 'yellow':
              this.headerBgVariant = 'warning';
              this.src = 'https://svgshare.com/i/HZQ.svg';
              this.titleModal = 'Para estudar';
              break;
            case 'lightblue':
              this.headerBgVariant = 'success';
              this.src = 'https://svgshare.com/i/H_b.svg';
              this.titleModal = 'Estudadas';
              break;
            case 'red':
              this.headerBgVariant = 'danger';
              this.src = 'https://svgshare.com/i/HXx.svg';
              this.titleModal = 'Em atraso';
              break;
            case 'blue':
              this.headerBgVariant = 'primary';
              this.src = 'https://svgshare.com/i/HYo.svg';
              this.titleModal = 'Para revisar';
              break;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    async openCardSession(session_id, index, color, img) {
      this.$nuxt.$loading.start();
      const userId = this.$route.query.userId;
      this.sessionId = session_id;
      switch (img) {
          case 'warning':
              this.src = 'https://svgshare.com/i/HZQ.svg';
              this.titleModal = 'Para estudar';
              break;
          case 'success':
              this.src = 'https://svgshare.com/i/H_b.svg';
              this.titleModal = 'Estudadas';
              break;
          case 'danger':
              this.src = 'https://svgshare.com/i/HXx.svg';
              this.titleModal = 'Em atraso';
              break;
          case 'primary':
              this.src = 'https://svgshare.com/i/HYo.svg';
              this.titleModal = 'Estudadas';
              break;
          }
      const options = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.X_API_KEY,
          Authorization: this.$store.state.auth.token
        }
      };
      await axios
        .get(
          `${process.env.BASE_URL}/students/${userId}/sessions/${session_id}/details`,
          options
        )
        .then(res => {
          this.title = res.data.plans[0].session_name;
          this.subject = res.data.plans[0].subject_id;
          console.log(res.data.plans);
          this.objective = res.data.plans[0].objective;
          this.effort = res.data.plans[0].session_effort;
          this.date = new Date(res.data.plans[0].session_date)
            .toISOString()
            .substring(5, 10)
            .replace("-", "/")
            .split("/")
            .reverse()
            .join("/");
          this.timeInit = res.data.plans[0].session_time_init.substr(0,2);
          this.timeEnd = parseInt(res.data.plans[0].session_time_init.substr(0,2)) + parseInt(this.effort);
          this.modalShow = !this.modalShow;
          this.headerBgVariant = color;
          this.details = res.data.plans[0].details;
          this.notes = res.data.plans[0].notes;
        })
        .catch(err => {
          console.log(err);
        });
      this.$nuxt.$loading.finish();
    },
    addHours(h) {
      Date.prototype.addHours = function(h) {
        this.setHours(this.getHours() + h);
        return this;
      };
    }
  }
};
</script>