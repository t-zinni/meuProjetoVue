<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ labels.value?.title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="container">
        <div class="inputCustom spacing">
          <ion-input
            :label="labels.value.chapter"
            label-placement="stacked"
            fill="outline"
            :placeholder="helps.value.chapter">
          </ion-input>
        </div>
        <div class="inputCustom spacing">
          <ion-input
            :label="labels.value.subchapter"
            label-placement="stacked"
            fill="outline"
            :placeholder="helps.value.subchapter">
          </ion-input>
        </div>
        <ion-button size="large" shape="round" class="spacing">
          {{ labels.value?.btn}}
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>


<style>
.spacing {
  margin-bottom: 16px;
}


.inputCustom ion-label {
  border-radius: 20px;
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
import { onMounted, ref } from 'vue';
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
import { authenticateUser, setAuthToken, fetchPageLayout } from '@/services/apiService';
import { useCourseStore } from '@/stores/courseStore';


const labels = ref({
    title: '',
    chapter: '',
    subchapter: '',
    btn: ''
});

const helps = ref({
    chapter: '',
    subchapter: ''
});

const { courses, setSelectedCourse, selectedCourse } = useCourseStore();


const confirmCreation = () => {
  console.log("Creation confirmed with course: ", selectedCourse);
  setSelectedCourse(selectedCourse);
};

const fetchLabels = async () => {
    try {
        const token = await authenticateUser('tomas@ualg.pt', 'tomas@2024', 'PT');
        setAuthToken(token);
        const { data } = await fetchPageLayout('EN2601');
        labels.value = data.labels;
        helps.value = data.helps;
        console.log("Labels e helps atualizados:", labels.value, helps.value);
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
};


onMounted(() => {
  fetchLabels();
});
</script>

