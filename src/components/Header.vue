<script setup></script>

<template>
  <div class="header">
    <BContainer>
      <BRow class="justify-content-center">
        <BCol class="text-end">
          <div class="user">
            <div class="user__name text-h6">Anton</div>
            <div class="user__coins text-h6 flex align-items-center">
              1000
              <img
                width="25"
                height="24"
                src="/img/coin.png"
                alt="" />
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<style scoped>
.header {
  padding: 30px;
}
</style>
