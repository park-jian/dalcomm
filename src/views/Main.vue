<template>
    <div class="Main">
        <section class="restaurant">
            
        </section>
        <section class="location">
            <div class="locationTitle">
                LOCATION
            </div>
            <div class="map">
                <img src="../assets/img/map.png" alt="">
            </div>
        </section>
        <section class="logo">
            <div class="logoBox">
                <img src="../assets/img/logo1.png" alt="">
                <img src="../assets/img/logo2.png" alt="">
                <img src="../assets/img/logo3.png" alt="">
                <img src="../assets/img/logo4.png" alt="">
                <img src="../assets/img/logo5.png" alt="">
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped> 
.locationTitle {
    height:200px;
    font-size: 46px;
   
    background: darkgreen;
}
.logo {
    height:200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top:1px solid darkgray;
    border-bottom:1px solid darkgray;
    background-color:lightgray;
}

</style>