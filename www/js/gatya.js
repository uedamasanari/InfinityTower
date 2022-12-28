let syouhinmei=["HP50%回復ビン","ATK50%上昇ビン","HP50%上昇ビン","HP100%回復ビン","ATK100%上昇ビン","HP100%上昇ビン","雑魚敵全滅ガス","敵HP半減ガス","スキル獲得チケット"];
let syouhinsetumei=["使用するとHPが50%回復します","使用するとATKが50%上昇します","使用するとHPが50%上昇します","使用するとHPが100%回復します","使用するとATKが100%上昇します","使用するとHPが100%上昇します","使用すると雑魚敵を全滅できます。<br>(経験値やコインももらえます)","使用すると今の敵HPを<br>半減できます","使用すると赤レア以上のスキルを<br>獲得し、スキル１と交換します。"];
let gatyaprice=[1,9];
let coin;
let MyID;
let applicationKey="c4c973d149eb7f703b8dc11532c2fb3e3bb2a7efcbd08a6f365e6b985e850f28";
let clientKey="202e48eb74bebfc63486928f9388cd363f0636806e35cefa57472e8045a9f7c1";
let ncmb = new NCMB(applicationKey,clientKey);
let sw;
let diamond;
let nouryoku1LV;
let nouryoku2LV;
let kyaraLV;
let bukiLV;
let buki=new Array();
let have=new Array();
function yomikomifunk(){
    MyID=localStorage.getItem("id");
    MyID=Number(MyID);
    let PD = ncmb.DataStore("playerdata");
    PD.equalTo('id',MyID).fetchAll()
    .then(function(pd){
        diamond=pd[0].Pdiamond;
        coin=pd[0].Pcoin;
        have=pd[0].item;
        nouryoku1LV=pd[0].nouryoku1LV;
        nouryoku2LV=pd[0].nouryoku2LV;
        kyaraLV=pd[0].kyaraLV;
        bukiLV=pd[0].bukiLV;
        buki=pd[0].buki;
        Start = document.getElementById("Pcoin");
        Start.innerHTML=coin;
        Start = document.getElementById("Pdiamond");
        Start.innerHTML=diamond;
    })
}
function gatyafunk(a){
    document.getElementById('ura').style.display = "block";
    document.getElementById('Sname').style.display = "block";
    document.getElementById('yes').style.display = "block";
    document.getElementById('no').style.display = "block";
    sw=a;
}
function yesfunk(){
    document.getElementById('ura').style.display = "none";
    document.getElementById('Sname').style.display = "none";
    document.getElementById('yes').style.display = "none";
    document.getElementById('no').style.display = "none";
    document.getElementById('kekkaura').style.display = "block";
    document.getElementById('tojiru').style.display = "block";
    if(diamond>=gatyaprice[sw]){
        diamond-=gatyaprice[sw];
        if(sw==0){
            let gatya=Math.floor(Math.random() * 10000) + 0;
            mawasufunk(gatya,"1");
        }else{
            for(let i=1;i<=10;i++){
                let gatya=Math.floor(Math.random() * 10000) + 0;
                let str = i.toString();
                mawasufunk(gatya,str);
            }
        }
        Start = document.getElementById("Pcoin");
        Start.innerHTML=coin;
        Start = document.getElementById("Pdiamond");
        Start.innerHTML=diamond;
        let PD = ncmb.DataStore("playerdata");
        PD.equalTo('id',MyID).fetch()
        .then(function(pd){
            pd.set('Pcoin',coin);
            pd.set('item',have);
            pd.set('Pdiamond',diamond);
            pd.set('nouryoku1LV',nouryoku1LV);
            pd.set('nouryoku2LV',nouryoku2LV);
            pd.set('kyaraLV',kyaraLV);
            pd.set('bukiLV',bukiLV);
            pd.set('buki',buki);
            return pd.update();
        })
    }else{
        alert("ダイヤが足りません");
    }
}
function mawasufunk(A,B){
    console.log(A);
    if(A==0){
        diamond+=250;
        coin+=15000;
        Start = document.getElementById("syou"+B);
        Start.src="gatya/diamondcoin.png";
    }else if(A==1){
        if(buki[3]!=1){
            buki[3]=1;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/ssrken.png";
        }else{
            diamond+=500;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/ssrdiamond.png";
        }
    }else if(A==2){
        if(buki[7]!=1){
            buki[7]=1;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/ssrbougu.png";
        }else{
            diamond+=500;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/ssrdiamond.png";
        }
    }else if(A==3){
        diamond+=500;
        Start = document.getElementById("syou"+B);
        Start.src="gatya/ssrdiamond.png";
    }else if(A==4){
        coin+=30000;
        Start = document.getElementById("syou"+B);
        Start.src="gatya/ssrcoin.png";
    }else if(A>=5&&A<=24){
        if(buki[2]!=1){
            buki[2]=1;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/srken.png";
        }else{
            diamond+=50;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/srdiamond.png";
        }
    }else if(A>=25&&A<=44){
        if(buki[6]!=1){
            buki[6]=1;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/srbougu.png";
        }else{
            diamond+=50;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/srdiamond.png";
        }
    }else if(A>=45&&A<=69){
        diamond+=50;
        Start = document.getElementById("syou"+B);
        Start.src="gatya/srdiamond.png";
    }else if(A>=70&&A<=100){
        coin+=10000;
        Start = document.getElementById("syou"+B);
        Start.src="gatya/srcoin.png";
    }else if(A>=101&&A<=250){
        if(buki[1]!=1){
            buki[1]=1;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/rken.png";
        }else{
            diamond+=10;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/rdiamond.png";
        }
    }else if(A>=251&&A<=400){
        if(buki[5]!=1){
            buki[5]=1;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/rbougu.png";
        }else{
            diamond+=5;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/rdiamond.png";
        }
    }else if(A>=401&&A<=700){
        diamond+=5;
        Start = document.getElementById("syou"+B);
        Start.src="gatya/rdiamond.png";
    }else if(A>=701&&A<=1000){
        coin+=1000;
        Start = document.getElementById("syou"+B);
        Start.src="gatya/rcoin.png";
    }else if(A>=1001&&A<=2000){
        if(buki[0]!=1){
            buki[0]=1;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/ken.png";
        }else{
            coin+=500;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/coin.png";
        }
    }else if(A>=2001&&A<=3000){
        if(buki[4]!=1){
            buki[4]=1;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/bougu.png";
        }else{
            coin+=500;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/coin.png";
        }
    }else if(A>=3001&&A<=4000){
        have[3]+=1;
        Start = document.getElementById("syou"+B);
        Start.src="shop/HP100.png";
    }else if(A>=4001&&A<=5000){
        have[4]+=1;
        Start = document.getElementById("syou"+B);
        Start.src="shop/ATKUP100.png";
    }else if(A>=5001&&A<=6000){
        have[5]+=1;
        Start = document.getElementById("syou"+B);
        Start.src="shop/HPUP100.png";
    }else if(A>=6001&&A<=7000){
        have[6]+=1;
        Start = document.getElementById("syou"+B);
        Start.src="shop/doku100.png";
    }else if(A>=7001&&A<=8000){
        have[7]+=1;
        Start = document.getElementById("syou"+B);
        Start.src="shop/doku50.png";
    }else if(A>=8001&&A<=9000){
        have[8]+=1;
        Start = document.getElementById("syou"+B);
        Start.src="shop/ticket.png";
    }else if(A>=9001&&A<=10000){
        if(A>=9001&&A>=9333){
            kyaraLV+=1;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/kyaraLV.png";
        }else if(A>=9334&&A>=9666){
            nouryoku1LV+=1;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/nouryoku1LV.png";
        }else if(A>=9667&&A>=10000){
            bukiLV+=1;
            Start = document.getElementById("syou"+B);
            Start.src="gatya/bukiLV.png";
        }
    }
    document.getElementById('syou'+B).style.display = "block";
}
