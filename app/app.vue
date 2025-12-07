<template>
  <NuxtLayout>
    <PColumn
      gap="1"
      alignment="center"
    >
      <div class="heart-container">
        <img
          src="/svg/heart.svg"
          alt="Srdce"
          height="50rem"
        >
      </div>
      <div class="pigs-container">
        <img
          src="/svg/pusaci-prasatka.svg"
          alt="Pusací Prasátka"
        >
      </div>
      <PRow
        alignment="center"
        gap="1"
      >
        <PSpacer><hr></PSpacer>
        Ondřášek Švanda a Verunka Baršová
        <PSpacer><hr></PSpacer>
      </PRow>
      <div class="title-container">
        <h1>Tak&nbsp;my&nbsp;se&nbsp;teda vemem,&nbsp;no...</h1>
      </div>
    </PColumn>
    <PSpacer height="1" />
    <PColumn
      alignment="center"
      gap="0"
    >
      <div>v sobotu 11. července 2026</div>
      <div>na Chatě Babí lom</div>
      <div>Někdy dopoledne</div>
    </PColumn>

    <PSpacer height="2" />
    <hr width="100%">
    <PSpacer height="2" />

    <PColumn alignment="center">
      <h2 id="harmonogram">
        Harmonogram
      </h2>
      <div> ... bude doplněno ... </div>
      <PSpacer>------</PSpacer>
      <h2 id="potvrzeni">
        Potvrzení účasti
      </h2>
      <div> ... bude doplněno ... </div>
      <PSpacer>------</PSpacer>
      <h2 id="prijezd">
        Příjezd a doprava
      </h2>
      <div> ... bude doplněno ... </div>
      <PSpacer>------</PSpacer>
      <h2 id="ubytovani">
        Spinkání
      </h2>
      <div> ... bude doplněno ... </div>
      <PSpacer>------</PSpacer>
      <h2 id="obleceni">
        Šatěnky a tak
      </h2>
      <div> ... bude doplněno ... </div>
      <PSpacer>------</PSpacer>
      <h2 id="darecky">
        Dárečky
      </h2>
      <div> ... bude doplněno ... </div>
    </PColumn>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Tak my se teda vemem, no",
  description: "Oficiální web svatebního obřadu",
});
</script>

<style scoped>
.title-container {
  text-align: center;
}

img {
  max-width: 200px;
}

.heart-container {
  margin-bottom: -20px;
  /* border: solid red 1px; */
  margin-left: 20px;
}
</style>
