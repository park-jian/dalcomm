<template>
    <div class="footer">
        <div class="footerMenu">
            <ul class="Menuitems">
                <li class="Menuitem">회사소개</li>
                <li class="Menuitem">인재채용</li>
                <li class="Menuitem">윤리경영</li>
                <li class="Menuitem">개인정보 처리 방침</li>
            </ul>
        </div>
        <div class="footerAddress">
            <div class="snsIcon">
                <img src="../assets/img/iconf.png"/>
                <img src="../assets/img/iconi.png"/>
                <img src="../assets/img/icony.png"/>
            </div>
            <div class="address">
                <span>제주특별자치도 서귀포시 안덕면 산록남로 863 대표전화 064-792-5200 팩스 064-792-4901</span><br>
                <span>Copyright(C) 2017.SKPINX Co.Ltd.All Rights Reserved.</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footerMenu {
    height:100px;
    display: flex;
    align-items: center;
     justify-content: center;
}
ul {
    list-style-type: none;
    display: flex;
}
.Menuitems {
    width:600px;
    align-items: center;
     justify-content: space-evenly;
}
.Menuitem{
   
}
.footerAddress{
    height: 200px;
    
    background-color: black;
    color:white;
}
.snsIcon{
    display: flex;
    justify-content: center;
    
}
.snsIcon img{
    margin:40px 15px;
}
.address{
    color:grey;
    opacity: 0.7;
}
</style>