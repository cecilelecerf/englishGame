<script lang="ts">

export default{
  name: "RulesView",
  components: {

  }
}


</script>

<template>
  <h1>Logoriko Rules</h1>
  <p class="bg-gray py-2 border-bottom"> 🧩 Logoriko is a game of speed that will introduce you to the culture of French brands from a fresh perspective</p>
  <section class="py-2 border-bottom">
    <h4>🗃️ Material</h4>
    <ul>
      <li>25 cards for level 1 
        <img src="../assets/CardLevel1.png" />
      </li>
      <li>25 cards for level 2
        <img src="../assets/CarsLevel2.png" />

      </li>
      <li>25 cards for level 3
        <img src="../assets/CardLevel3.png" />
      </li>
      <li>80 board cards
        <img src="../assets/CardBrand.png" />
      </li>
    </ul>
  </section>
  <BContainer class="py-3 border-bottom">
    <BRow>
      <BCol>
        <h4 class="text-center">👥<br> Number of players</h4>
        <p class="text-center">2 - 6</p>
      </BCol>
      <BCol>
        <h4 class="text-center">⏱️<br> Playing</h4>
        <p class="text-center">10-15min</p>
      </BCol>
      <BCol>
        <h4 class="text-center">🐔<br> Age</h4>
        <p class="text-center">2 - 6</p>
      </BCol>
    </BRow>
  </BContainer>
  <section class="py-2 border-bottom">
    <h4>🎯 Goal</h4>
    <p>The goal of the game is to gather a maximum of cards by combining them according to their respective levels.</p>
  </section>
  <section class="py-2 border-bottom">
    <h4>♟️ Set Up</h4>
    <p>Choose your level <br> For each level, you need to match the brand cards with :</p>
    <BContainer class="py-3 border-bottom">
    <BRow>
      <BCol>
        <h6 class="text-center">👥<br>Level 1</h6>
        <p class="text-center">Icons logos</p>
        <img src="../data/iconographicLogo/VacheQUi.png" />
      </BCol>
      <BCol>
        <h6 class="text-center">⏱️<br> Level 2</h6>
        <p class="text-center">10-15min</p>
        <img src="../data/pixalisedLogo/VacheQuiRit.png" />
      </BCol>
      <BCol>
        <h6 class="text-center">🐔<br> Level 3</h6>
        <p class="text-center">2 - 6</p>
        <img src="../data/iconBrand/Vache qui rit.svg" />
      </BCol>
    </BRow>
  </BContainer>
  </section>
  <section class="py-2 border-bottom">
    <h4>Game Progress</h4>
    <p>At the start signal, a player flips the central card while shouting “ Logoriko !“</p>
    <p>The objective is for players to quickly associate the card they have in their hands with the central card</p>
    <p>⇒ if a player has successfully matched its card, this player wins the central card. He then place its brand-type card underneath the pile. Then he draws a new brand-type card while shouting “Logoriko !“ to start the next round</p>
    <p>⇒ if a player has made a mistake, the round continues, but that player is no longer allowed to play for the current round and the next round</p>
    <p>The game keep going until all the cards in the draw pile have been collected.</p>
  </section>
  <section class="py-2 border-bottom">
    <h4>End of the game</h4>
    <p>When there are no more cards in the draw pile, the game ends.</p>
    <p>Each player counts the number of central cards they have.</p>
    <p>The player who has won the most cards is the winner of the game.</p>
  </section>
  <section class="py-2 border-bottom" mb-6>
    <h4>Duel Mode</h4>
    <p>The presence of a QR code on the central card indicates that a duel can be played at the end of the round.</p>
    <p>The round is played as usual, and the winner chooses a duelist to face.</p>
    <p>The duelists must scan the QR code with their phone.</p>
    <p>A random brand name will be displayed. Both duelists must draw the brand logo as accurately as possible within 30 seconds.</p>
    <p>When time's up, the other participants judge which drawing is most faithful to the actual brand logo.</p>
    <p>The winner of the duel steals three point cards from the other duelist.</p>
    <p class="bg-dark-subtle p-2 rounded mb-6">⚠️ Duelists must have at least three cards; if no player is in this situation, the duel cannot be played.</p>
  </section>

</template>

<style>

#app{
  margin-bottom: 110px !important;
}
.border-bottom img{
  height: 70px;
  rotate: 10deg;
}

</style>
