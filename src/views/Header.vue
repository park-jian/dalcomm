<template>
    <div class="Header">
        <section class="head">
            <div class="language">
                오시는 길 | 
                <select>
                    <option>KOREAN</option>
                    <option>ENGLISH</option>
                    <option>JAPANESE</option>
                </select>
            </div>
            <div class="logo">
                <img src="../assets/img/logo.png" />
            </div>
            <div class="reserve">
                <div class="reserveBtn">
                    RESERVE
                </div>
            </div>
        </section>
        <section class="nav">
            <div class="navi">
                <ul class="naviBox">
                    <li class="naviMenu">핀크스 골프클럽</li>
                    <li class="naviMenu">포도호텔</li>
                    <li class="naviMenu">디아넥스호텔</li>
                    <li class="naviMenu">비오토피아</li>
                </ul>
            </div>
        </section>
        <section class="slider">
            <div class="slider">
                <swiper class="swiper" :options="swiperOption">
                     <!-- <swiper-slide><img src="../assets/img/golf1.jpg"/></swiper-slide> 
                     <swiper-slide><img src="../assets/img/golf2.jpg"/></swiper-slide> 
                     <swiper-slide><img src="../assets/img/golf3.jpg"/></swiper-slide>  -->
                     <div class="swiper-pagination" slot="pagination"></div> 
                     <!-- <div class="swiper-button-prev" slot="button-prev"></div> 
                     <div class="swiper-button-next" slot="button-next"></div>  -->
                </swiper>


            </div>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return {
            swiperOption: { 
                slidesPerView: 1,
                 spaceBetween: 30,
                  loop: true,
                   pagination: {
                        el: '.swiper-pagination',
                         clickable: true 
                   },
                   navigation: {
                        nextEl: '.swiper-button-next',
                         prevEl: '.swiper-button-prev' 
                } 
            }


        }
    }
}
</script>

<style scoped>
* {
    padding:0;
    margin:0;
    box-sizing: border-box;
}
ul {
    list-style-type: none;
}
/* head */
.head{
    height: 160px;
    display: flex;
     justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid grey;
}
.logo {
    width:220px;
}
.logo img{
    width:100%;
}
.reserveBtn{
    background-color: burlywood;
    color:white;
    width: 160px;
    height: 40px;
    line-height: 40px;;
}

/* navi */

.navi {
    height: 50px;
    line-height: 50px;
}
.naviBox{
    display: flex;
    max-width: 700px;
    margin: 0 auto;
    justify-content: space-evenly;
}
/* slider */
.swiper { 
    height: 300px; 
    width: 100%; 
    
}
.swiper-slide { 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        text-align: center; 
        font-weight: bold; 
    } 


</style>