<script setup></script>
<template>
  <div class="header_main">
    <div class="wrapper px-4">
      <div class="w-[10vw]">
        <h1 class="text-3xl">Logo</h1>
      </div>
      <div class="w-[50vw]">
        <ul class="flex justify-around">
          <li>
            <a href="">Auction</a>
          </li>
          <li>
            <a href="">Collection</a>
          </li>
          <li>
            <a href="">General Listing</a>
          </li>
          <li>
            <a href="">How It Work</a>
          </li>
        </ul>
      </div>
      <div class="w-[35vw] flex justify-between">
        <input type="text" class="search_field" placeholder="Search for Cars" />
        <button>LOGIN</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header_main {
  padding: 1rem 0;
}
.wrapper {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  background-color: #b99f75;
  padding: 1rem 1.8rem;
  border-radius: 0.5rem;
  color: #ffff;
}
.search_field {
  border-bottom: 1px solid #b99f75;
  width: 50%;
  color: #b99f75;
  font-family: "Roboto-MediumItalic";
  font-size:18px ;
}
a {
  font-family: "Roboto-Regular";
  font-size: 18px;
}
a:hover{
  color: #b99f75;
}
</style>
