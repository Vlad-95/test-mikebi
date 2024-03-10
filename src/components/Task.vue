<script setup>
import { ref, onMounted, computed } from 'vue';
import { useTaskStore } from '../stores/useTaskStore';

const taskStore = useTaskStore();

const task = ref(null);
const selectedItem = ref(null);

const radioItems = computed(() => {
  return task.value.options.map((item) => {
    return {
      id: item.id,
      text: item.value,
      value: item.value,
    };
  });
});

const correctAnswer = computed(() => {
  return task.value.correct;
});

onMounted(async () => {
  try {
    const response = await taskStore.getData();
    task.value = response.data.tasks[0];
    console.log(task.value.options);
  } catch (error) {
    console.log(error);
  }
});

const checkAnswerHandler = () => {
  if (selectedItem.value == correctAnswer.value) {
    alert('Верно');
    selectedItem.value = null;
  } else {
    alert('не верно');
    selectedItem.value = null;
  }
};
</script>

<template>
  <div
    v-if="task"
    class="task d-flex flex-column align-center">
    <div class="task__question">
      <BContainer>
        <div class="task__label d-block text-center">
          {{ task.conditions }}
        </div>
        <div class="task__title d-block text-center text-h5">
          {{ task.text }}
        </div>
        <div class="task__content d-block text-center">
          <img
            :src="task.image"
            alt="" />
        </div>
      </BContainer>
    </div>

    <div class="task__answers">
      <BFormRadioGroup
        v-model="selectedItem"
        :options="radioItems"
        button-variant="outline-primary"
        name="radio"
        class="task__radio flex-wrap"
        buttons>
      </BFormRadioGroup>
      <BButton
        variant="success"
        class="task__submit"
        :disabled="!selectedItem"
        @click="checkAnswerHandler"
        >Check</BButton
      >
    </div>
  </div>
</template>

<style scoped>
.task {
  min-height: calc(100vh - 152px);

  .task__question {
    margin-bottom: 30px;
  }

  .task__label {
    font-size: 20px;
  }

  .task__title {
    font-size: 30px;
    margin-bottom: 30px;
  }

  .task__content {
    img {
      max-width: 100%;
    }
  }

  .task__answers {
    padding: 30px;
    padding-right: 130px;
    background-color: #f3f3f3;
    margin-top: auto;
    position: relative;
  }

  .task__radio {
    width: 100%;
  }

  .task__submit {
    position: absolute;
    right: 30px;
    top: 30px;
  }
}
</style>
