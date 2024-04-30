<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Create Class</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="container">
        <div class="inputCustom spacing">
          <ion-input
            label="Class' name"
            label-placement="stacked"
            fill="outline"
            placeholder="Write here your class">
          </ion-input>
        </div>
        <div class="inputCustom spacing">
          <ion-select  label="Courses" label-placement="stacked" id="course" v-model="selectedCourse" fill="outline" placeholder="Choose the course" interface="popover">
            <ion-select-option v-for="course in courses" :key="course.id" :value="course.id">
              {{ course.name }}
            </ion-select-option>
          </ion-select>
        </div>
        <ion-button size="large" shape="round" class="spacing">
          CONFIRM
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<style>
.spacing {
  margin-bottom: 16px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.inputCustom ion-input {
  --border-radius: 8px; /* Ajuste o valor conforme desejado */
}

ion-button {
    --background: #4da9da;
    --color: rgb(255, 255, 255);
    --border-color:  #4da9da;
}


ion-item {
  margin-bottom: 20px;  /* Espaçamento entre os itens do formulário */
}
</style>


<script setup lang="ts">
import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonTextarea
} from '@ionic/vue';
import { useCourseStore } from '@/stores/courseStore';

const { courses, setSelectedCourse, selectedCourse } = useCourseStore();

const confirmCreation = () => {
  console.log("Creation confirmed with course: ", selectedCourse);
  setSelectedCourse(selectedCourse);
};
</script>
