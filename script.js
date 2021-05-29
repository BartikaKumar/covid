window.onload=()=>{
   document.body.onclick=(e)=>{
        let x= e.clientX
        let y= e.clientY
        let ripple= document.createElement("img")
        ripple.src="https://i.ibb.co/YL85Vw1/corona-virus.png"
        ripple.className="ripple"
        ripple.style.left=x-75+"px"
        ripple.style.top=y-75+"px"
        document.body.appendChild(ripple)
        setTimeout(()=>{
            ripple.remove()
        },1000)
    }
    AOS.init({
        duration: 1000
    })
    openData()
    window.onscroll= function(){
    var y=window.pageYOffset
    var height = document.getElementById("head").clientHeight
    if(y>height || y==height){
    document.getElementById("header").style="visibility:visible;opacity:1"
    }
    if(y<height){
    document.getElementById("header").style="visibility:hidden;opacity:0"
    }
}
document.getElementById("loader").remove()
alertify({
        html:"Welcome to <b>C<i class='fas fa-virus'></i>vidBasics</b>! I hope you like it.",
        animationIn:"scale-up",
        animationOut:"scale-down"
    })
    document.getElementsByTagName('body')[0].classList.remove('disablescroll');
}
function open_menu(){
    document.getElementById("menu").classList.add("open")
}
function close_menu(){
    document.getElementById("menu").classList.remove("open")
}
deg=0
active=0
function activate(){
    if(active==4){
        active=0
    }
    else if(active==-1){
        active=3
    }
    document.querySelectorAll("#indicator div").forEach((self)=>{
        self.classList.remove("active")
    })
    document.querySelectorAll("#indicator div")[active].classList.add("active")
}
function next(){
    deg+=90
    active++
    document.getElementsByClassName("cube")[0].style.transform="rotateX("+deg+"deg)"
    activate()
}
function prev(){
    deg-=90
    active--
    document.getElementsByClassName("cube")[0].style.transform="rotateX("+deg+"deg)"
    activate()
}
function openData(){
/*
    async function getData(){
            var response= await fetch("https://api.rootnet.in/covid19-in/stats/latest");
            if(!response.ok){
                throw new Error ("Error status: "+response.status)
            }
            else{
                var all= await response.json()

                var mval= all.data.summary
                var mentry= document.querySelectorAll("#section7 info")
          mentry[0].innerText = mval.total
          mentry[1].innerText = mval.confirmedCasesIndian
          mentry[2].innerText = mval.confirmedCasesForeign
          mentry[3].innerText = mval.discharged
          mentry[4].innerText = mval.deaths
          mentry[5].innerText = mval.confirmedButLocationUnidentified

                var select = document.querySelector("select")
                select.addEventListener("change",function(){
            let s= select.selectedIndex-1
            let val= all.data.regional[s]
            document.querySelector("#section8 #stitle").innerText = val.loc || "State"
          let entry=  document.querySelectorAll("#section8 info")
          entry[0].innerText = val.totalConfirmed
          entry[1].innerText = val.confirmedCasesIndian
            entry[2].innerText = val.confirmedCasesForeign
            entry[3].innerText = val.discharged
            entry[4].innerText = val.deaths

        })
                for(i=0;i<all.data.regional.length;i++){
                let elem= document.createElement("option")
                elem.innerText= all.data.regional[i].loc
        select.appendChild(elem)
        }
        }
            }
        getData().catch(error=>{
            alertify({
            html:"Unfortunately, an error has occurred while fetching data for the state-wise covid cases.<br>"+error.message,
            })
        })
        */

}
