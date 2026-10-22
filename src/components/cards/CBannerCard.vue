<template>
    <div class="card bg-black/20 backdrop-blur-md">
    <img :src="item.image" :alt="item.title">
    <div class="content">
      <p>{{ item.location }}</p>
      <h4>{{ item.title }}</h4>
    </div>
  </div>
  
</template>

<script setup>



defineProps({
  item: {
    type: Object,
    required: true
  }
})



</script>

<style scoped>

.card {


  border: 1px solid transparent;



  width: 100%;
  max-width: 350px;
  height: 120px;
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 15px;
  box-sizing: border-box;
font-size: 20px;

font-weight: 600;

border-radius: 10px;

  color: white;

    

}


.card img {
  border-radius: 5px;
  width: 90px;
  height: 80px;
  object-fit: cover;

}
.content{
  padding: 5px 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}

.content p {

  color: #aaa;
  font-size: 14px;
}

.card:hover{
  border: solid 1px white;
transition: border-color 0.9s ease;
}

</style>