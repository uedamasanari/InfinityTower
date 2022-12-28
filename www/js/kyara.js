let kyara=0;
let kyaranin=2;
let kyaraname=["勇者","魔法使い"];
let kyaraHP=[30,20];
let kyaraATK=[10,15];
let kyaraMP=[20,40];
let kyaraskil=[100,101];
let bukiATK=0;
let bukiHP=0;
let kyaraLV;
let bukiup=[5,10,30,100,10,20,50,200];
let kyaratyouetu;
let noryokusetumei=["HPが能力LV×30上がります。","ATKが能力LV×20上がります。","MPが能力LV×50上がります。","ゲーム内のショップ価格が<br>能力LV×1%下がります。<br>MAX50%","ゲームクリア時のコインが<br>能力LV×5%上がります。","ゲームクリア時の経験値が<br>能力LV×5%上がります。","次の階に行く際に<br>能力LV×1%の確率で<br>階をスキップします。"];
let bukisetumei=["ATKが武器LV×5上がります。","ATKが武器LV×10上がります。","ATKが武器LV×30上がります。","ATKが武器LV×100上がります。","HPが武器LV×10上がります。","HPが武器LV×20上がります。","HPが武器LV×50上がります。","HPが武器LV×200上がります。"];
let Nprice=[300,300,150,500,1000,1000,5000];
let png=["PNG/NHP.png","PNG/NATK.png","PNG/NMP.png","PNG/Nshop.png","PNG/Ncoin.png","PNG/Nkeikenti.png","PNG/Nskip.png"];
let Bpng=["gatya/ken.png","gatya/rken.png","gatya/srken.png","gatya/ssrken.png","gatya/bougu.png","gatya/rbougu.png","gatya/srbougu.png","gatya/ssrbougu.png"];
let A;
let applicationKey="c4c973d149eb7f703b8dc11532c2fb3e3bb2a7efcbd08a6f365e6b985e850f28";
let clientKey="202e48eb74bebfc63486928f9388cd363f0636806e35cefa57472e8045a9f7c1";
let ncmb = new NCMB(applicationKey,clientKey);
let change;
let nouryoku1LV;
let nouryoku2LV;
let skilLV;
let coin;
let tuikaHP=0;
let tuikaATK=0;
let tuikaMP=0;
let Nactive=new Array();
function startfunk(){
    MyID=localStorage.getItem("id");
    MyID=Number(MyID);
    let PD = ncmb.DataStore("playerdata");
    PD.equalTo('id',MyID).fetchAll()
    .then(function(pd){
        console.log(JSON.stringify(pd));
        kyaraLV=pd[0].kyaraLV;
        nouryoku1LV=pd[0].nouryoku1LV;
        nouryoku2LV=pd[0].nouryoku2LV;
        nouryoku1=pd[0].nouryoku1;
        nouryoku2=pd[0].nouryoku2;
        skilLV=pd[0].skilLV;
        kyara=pd[0].kyara;
        coin=pd[0].Pcoin;
        Nactive=pd[0].Nactive;
        Bactive=pd[0].buki;
        kyarabuki=pd[0].kyarabuki;
        if(kyara==0){
        Start = document.getElementById("kyara");
        Start.src="PNG/yuusya.png";
        }else if(kyara==1){
            Start = document.getElementById("kyara");
            Start.src="PNG/mahoutukai.png";
        }
        if(nouryoku1!=0){
        Start = document.getElementById("nouryoku1");
        Start.src=png[nouryoku1-1];
        }
        if(kyarabuki!=0){
        Start = document.getElementById("skil");
        Start.src=Bpng[kyarabuki-1];
        }
        Start = document.getElementById("kyaralv");
        Start.innerHTML=kyaraLV;
        Start = document.getElementById("nouryoku1lv");
        Start.innerHTML=nouryoku1LV;
        Start = document.getElementById("skillv");
        Start.innerHTML=skilLV;
        document.getElementById('kyara').style.display = "block";
        sutechangefunk();
    })
}
function sutechangefunk(){
    if(kyara==0){
    Start = document.getElementById("hp");
    Start.innerHTML=kyaraHP[kyara]+((kyaraLV-1)*3)+300*Math.floor(kyaraLV/100)+bukiHP;
    Start = document.getElementById("atk");
    Start.innerHTML=kyaraATK[kyara]+((kyaraLV-1)*2)+200*Math.floor(kyaraLV/100)+bukiATK;
    Start = document.getElementById("mp");
    Start.innerHTML=kyaraMP[kyara]+((kyaraLV-1)*3)+500*Math.floor(kyaraLV/100);
    if(nouryoku1==1){
        Start = document.getElementById("hp");
        Start.innerHTML=kyaraHP[kyara]+((kyaraLV-1)*3)+30*nouryoku1LV+300*Math.floor(kyaraLV/100)+bukiHP;
    }else if(nouryoku1==2){
        Start = document.getElementById("atk");
        Start.innerHTML=kyaraATK[kyara]+((kyaraLV-1)*2)+20*nouryoku1LV+200*Math.floor(kyaraLV/100)+bukiATK;
    }else if(nouryoku1==3){
        Start = document.getElementById("mp");
        Start.innerHTML=kyaraMP[kyara]+((kyaraLV-1)*3)+50*nouryoku1LV+500*Math.floor(kyaraLV/100);
    }
    Start = document.getElementById("lv");
    Start.innerHTML=kyaraLV;
    Start = document.getElementById("tyouetu");
    Start.innerHTML=Math.floor(kyaraLV/100);
    }else if(kyara==1){
    Start = document.getElementById("hp");
    Start.innerHTML=kyaraHP[kyara]+((kyaraLV-1)*1)+300*Math.floor(kyaraLV/100)+bukiHP;
    Start = document.getElementById("atk");
    Start.innerHTML=kyaraATK[kyara]+((kyaraLV-1)*3)+200*Math.floor(kyaraLV/100)+bukiATK;
    Start = document.getElementById("mp");
    Start.innerHTML=kyaraMP[kyara]+((kyaraLV-1)*5)+500*Math.floor(kyaraLV/100);
    if(nouryoku1==1){
        Start = document.getElementById("hp");
        Start.innerHTML=kyaraHP[kyara]+((kyaraLV-1)*1)+30*nouryoku1LV+300*Math.floor(kyaraLV/100)+bukiHP;
    }else if(nouryoku1==2){
        Start = document.getElementById("atk");
        Start.innerHTML=kyaraATK[kyara]+((kyaraLV-1)*3)+20*nouryoku1LV+200*Math.floor(kyaraLV/100)+bukiATK;
    }else if(nouryoku1==3){
        Start = document.getElementById("mp");
        Start.innerHTML=kyaraMP[kyara]+((kyaraLV-1)*5)+50*nouryoku1LV+500*Math.floor(kyaraLV/100);
    }
    Start = document.getElementById("lv");
    Start.innerHTML=kyaraLV;
    Start = document.getElementById("tyouetu");
    Start.innerHTML=Math.floor(kyaraLV/100);
    }
}
function kyarasentakufunk(A){
    change=A;
    switch(change){
        case 0:
        Start = document.getElementById("yuusyamae");
        Start.src="PNG/yuusyawaku.png";
        Start = document.getElementById("mahoutukaimae");
        Start.src="PNG/mahoutukai.png";
        break;
        case 1:
        Start = document.getElementById("yuusyamae");
        Start.src="PNG/yuusya.png";
        Start = document.getElementById("mahoutukaimae");
        Start.src="PNG/mahoutukaiwaku.png";
        break;
    }
        Start = document.getElementById("shp");
        Start.innerHTML=kyaraHP[change];
        Start = document.getElementById("satk");
        Start.innerHTML=kyaraATK[change];
        Start = document.getElementById("smp");
        Start.innerHTML=kyaraMP[change];
}
function changefunk(){
    //0勇者1魔法使い
    switch(change){
        case 0:
        Start = document.getElementById("kyara");
        Start.src="PNG/yuusya.png";
        kyara=0;
        break;
        case 1:
        Start = document.getElementById("kyara");
        Start.src="PNG/mahoutukai.png";
        kyara=1;
        break;
    }
    MyID=localStorage.getItem("id");
    MyID=Number(MyID);
    let PD = ncmb.DataStore("playerdata");
    PD.equalTo('id',MyID).fetch()
    .then(function(pd){
        pd.set('kyara',kyara);
        return pd.update();
    })
    sutechangefunk();
    document.getElementById('changegroup').style.display = "none";
    document.getElementById('tandokumodoru').style.display = "none";
    document.getElementById('modori').style.display = "block";
    document.getElementById('kyararap').style.display = "block";
}
function nouryokufunk(A){
    if(A==1){
        document.getElementById('kyararap').style.display = "none";
        document.getElementById('nouryoku1usiro').style.display = "block";
        document.getElementById('No').style.display = "block";
    }
}
function skilfunk(){
    document.getElementById('kyararap').style.display = "none";
    document.getElementById('nouryoku1usiro').style.display = "block";
    document.getElementById('soubi').style.display = "block";
}
let Nkakunin;
function Nhenkoufunk(A){
    document.getElementById('kyararap').style.display = "none";
    document.getElementById('nouryokuusiro').style.display = "block";
    Start = document.getElementById("setumei");
    Start.innerHTML=noryokusetumei[A-1];
    if(Nactive[A-1]==1){
        Start = document.getElementById("nouryokubun");
        Start.innerHTML="この能力に変更しますか?";
        Start = document.getElementById("nouryokukakutei");
        Start.src="PNG/kyarachange.png";
    }else{
        Start = document.getElementById("nouryokubun");
        Start.innerHTML="この能力を購入し<br>変更しますか？<br>価格:"+Nprice[A-1]+"<br>所持コイン:"+coin;
        Start = document.getElementById("nouryokukakutei");
        Start.src="PNG/buy.png";
    }
    document.getElementById('nouryokukakutei').style.display = "block";
    document.getElementById('setumei').style.display = "block";
    document.getElementById('nouryokubun').style.display = "block";
    document.getElementById('nouryokumodoru').style.display = "block";
    Nkakunin=A;
    console.log(Nkakunin);
}
function Bhenkoufunk(A){
    document.getElementById('kyararap').style.display = "none";
    document.getElementById('nouryokuusiro').style.display = "block";
    Start = document.getElementById("setumei");
    Start.innerHTML=bukisetumei[A];
    if(Bactive[A]==1){
        Start = document.getElementById("nouryokubun");
        Start.innerHTML="この武器に変更しますか?";
        document.getElementById('bukikakutei').style.display = "block";
    }else{
        Start = document.getElementById("nouryokubun");
        Start.innerHTML="この武器を所持していません。";
        Start = document.getElementById("nouryokukakutei");
        Start.src="PNG/buy.png";
    }
    document.getElementById('setumei').style.display = "block";
    document.getElementById('nouryokubun').style.display = "block";
    document.getElementById('nouryokumodoru').style.display = "block";
    Nkakunin=A;
    console.log(Nkakunin);
}
function nouryokukakuteifunk(){
    if(Nactive[Nkakunin-1]==0){
        if(coin>=Nprice[Nkakunin-1]){
            coin=coin-Nprice[Nkakunin-1];
            Nactive[Nkakunin-1]=1;
            Start = document.getElementById("nouryoku1");
            Start.src=png[Nkakunin-1];
            MyID=localStorage.getItem("id");
            MyID=Number(MyID);
            if(kyara==0){
            if(nouryoku1==1){
                Start = document.getElementById("hp");
                Start.innerHTML=kyaraHP[kyara]+((kyaraLV-1)*3)+30*nouryoku1LV+300*Math.floor(kyaraLV/100);
            }else if(nouryoku1==2){
                Start = document.getElementById("atk");
                Start.innerHTML=kyaraATK[kyara]+((kyaraLV-1)*2)+20*nouryoku1LV+200*Math.floor(kyaraLV/100);
            }else if(nouryoku1==3){
                Start = document.getElementById("mp");
                Start.innerHTML=kyaraMP[kyara]+((kyaraLV-1)*3)+50*nouryoku1LV+500*Math.floor(kyaraLV/100);
            }
            }else if(kyara==1){
            if(nouryoku1==1){
                Start = document.getElementById("hp");
                Start.innerHTML=kyaraHP[kyara]+((kyaraLV-1)*1)+30*nouryoku1LV+300*Math.floor(kyaraLV/100);
            }else if(nouryoku1==2){
                Start = document.getElementById("atk");
                Start.innerHTML=kyaraATK[kyara]+((kyaraLV-1)*3)+20*nouryoku1LV+200*Math.floor(kyaraLV/100);
            }else if(nouryoku1==3){
                Start = document.getElementById("mp");
                Start.innerHTML=kyaraMP[kyara]+((kyaraLV-1)*5)+50*nouryoku1LV+500*Math.floor(kyaraLV/100);
            }
            }
            nouryoku1=Nkakunin;
            let PD = ncmb.DataStore("playerdata");
            PD.equalTo('id',MyID).fetch()
            .then(function(pd){
                pd.set('Pcoin',coin);
                pd.set('nouryoku1',Nkakunin);
                pd.set('Nactive',Nactive);
                return pd.update();
            })
            .then(function(results){
                alert("購入し、変更しました");
                document.getElementById('nouryokukakutei').style.display = "none";
                document.getElementById('setumei').style.display = "none";
                document.getElementById('nouryokubun').style.display = "none";
                document.getElementById('nouryokumodoru').style.display = "none";
                document.getElementById('nouryokuusiro').style.display = "none";
            })
        }
    }else{
    Start = document.getElementById("nouryoku1");
    Start.src=png[Nkakunin-1];
    if(Nkakunin==1){
        tuikaHP+=30*nouryoku1LV;
        Start = document.getElementById("hp");
        Start.innerHTML=kyaraHP[kyara]+((kyaraLV-1)*3)+tuikaHP;
    }else if(Nkakunin==2){
        tuikaATK+=20*nouryoku1LV;
        Start = document.getElementById("atk");
        Start.innerHTML=kyaraATK[kyara]+((kyaraLV-1)*3)+tuikaATK;
    }else if(Nkakunin==2){
        tuikaMP+=50*nouryoku1LV;
        Start = document.getElementById("mp");
        Start.innerHTML=kyaraMP[kyara]+((kyaraLV-1)*3)+tuikaMP;
    }
    nouryoku1=Nkakunin;
    MyID=localStorage.getItem("id");
    MyID=Number(MyID);
    let PD = ncmb.DataStore("playerdata");
    PD.equalTo('id',MyID).fetch()
    .then(function(pd){
        pd.set('nouryoku1',Nkakunin);
        return pd.update();
    })
    .then(function(results){
        alert("変更しました");
        document.getElementById('nouryokuusiro').style.display = "none";
        document.getElementById('nouryokukakutei').style.display = "none";
        document.getElementById('setumei').style.display = "none";
        document.getElementById('nouryokubun').style.display = "none";
        document.getElementById('nouryokumodoru').style.display = "none";
    })
    }
}
function bukikakuteifunk(){
    Start = document.getElementById("skil");
    Start.src=Bpng[Nkakunin];
    if(Nkakunin<=3){
        bukiATK=bukiup[Nkakunin];
    }else{
        bukiHP=bukiup[Nkakunin];
    }
    sutechangefunk();
    kyarabuki=Nkakunin+1;
    MyID=localStorage.getItem("id");
    MyID=Number(MyID);
    let PD = ncmb.DataStore("playerdata");
    PD.equalTo('id',MyID).fetch()
    .then(function(pd){
        pd.set('kyarabuki',kyarabuki);
        return pd.update();
    })
    .then(function(results){
        alert("変更しました");
        document.getElementById('nouryokuusiro').style.display = "none";
        document.getElementById('bukikakutei').style.display = "none";
        document.getElementById('setumei').style.display = "none";
        document.getElementById('nouryokubun').style.display = "none";
        document.getElementById('nouryokumodoru').style.display = "none";
    })
}
let kakunin;
function LVUPfunk(A){
    Start = document.getElementById("syojicoin");
    Start.innerHTML=coin;
    if(A==1){
        if(kyaraLV%100!=99){
        Start = document.getElementById("nowlv");
        Start.innerHTML=kyaraLV;
        Start = document.getElementById("kakunincoin");
        Start.innerHTML=kyaraLV*20;
        Start = document.getElementById("syurui");
        Start.innerHTML="キャラレベル";
        }else{
        Start = document.getElementById("nowlv");
        Start.innerHTML=kyaraLV;
        Start = document.getElementById("kakunincoin");
        Start.innerHTML=kyaraLV*100;
        Start = document.getElementById("syurui");
        Start.innerHTML="キャラレベル超越";
        }
        kakunin=1;
    }else if(A==2){
        Start = document.getElementById("nowlv");
        Start.innerHTML=nouryoku1LV;
        Start = document.getElementById("kakunincoin");
        Start.innerHTML=nouryoku1LV*100;
        Start = document.getElementById("syurui");
        Start.innerHTML="能力１レベル";
        kakunin=2;
    }else if(A==3){
        Start = document.getElementById("nowlv");
        Start.innerHTML=nouryoku2LV;
        Start = document.getElementById("kakunincoin");
        Start.innerHTML=nouryoku2LV*100;
        Start = document.getElementById("syurui");
        Start.innerHTML="武器レベル";
        kakunin=3;
    }else if(A==4){
        Start = document.getElementById("nowlv");
        Start.innerHTML=skilLV;
        Start = document.getElementById("kakunincoin");
        Start.innerHTML=skilLV*100;
        Start = document.getElementById("syurui");
        Start.innerHTML="武器レベル";
        kakunin=4;
    }
    document.getElementById('kakuninusiro').style.display = "block";
    document.getElementById('kakuninmoji').style.display = "block";
    document.getElementById('kakuninkyouka').style.display = "block";
    document.getElementById('kyararap').style.display = "none";
    
    document.getElementById('kyoukayameru').style.display = "block";
}
function kakuteifunk(){
    if(kakunin==1){
        if(kyaraLV%100!=99){
        if(coin>=kyaraLV*20){
            coin-=kyaraLV*20;
            kyaraLV++;
            Start = document.getElementById("kyaralv");
            Start.innerHTML=kyaraLV;
            Start = document.getElementById("lv");
            Start.innerHTML=kyaraLV;
            sutechangefunk();
            MyID=localStorage.getItem("id");
            MyID=Number(MyID);
            let PD = ncmb.DataStore("playerdata");
            PD.equalTo('id',MyID).fetch()
            .then(function(pd){
                pd.set('Pcoin',coin);
                pd.set('kyaraLV',kyaraLV);
                return pd.update();
            })
            alert("レベルが上がりました");
            LVUPfunk(1);
        }else{
            alert("コインが足りません");
        }
        }else{
            if(coin>=kyaraLV*100){
            coin-=kyaraLV*100;
            kyaraLV++;
            Start = document.getElementById("kyaralv");
            Start.innerHTML=kyaraLV;
            Start = document.getElementById("lv");
            Start.innerHTML=kyaraLV;
            sutechangefunk();
            MyID=localStorage.getItem("id");
            MyID=Number(MyID);
            let PD = ncmb.DataStore("playerdata");
            PD.equalTo('id',MyID).fetch()
            .then(function(pd){
                pd.set('Pcoin',coin);
                pd.set('kyaraLV',kyaraLV);
                return pd.update();
            })
            alert("超越レベルが上がりました");
            LVUPfunk(1);
        }else{
            alert("コインが足りません");
        }
        }
    }else if(kakunin==2){
        if(coin>=nouryoku1LV*100){
            coin-=nouryoku1LV*100;
            nouryoku1LV++;
            Start = document.getElementById("nouryoku1lv");
            Start.innerHTML=nouryoku1LV;
            sutechangefunk();
            MyID=localStorage.getItem("id");
            MyID=Number(MyID);
            let PD = ncmb.DataStore("playerdata");
            PD.equalTo('id',MyID).fetch()
            .then(function(pd){
                pd.set('Pcoin',coin);
                pd.set('nouryoku1LV',nouryoku1LV);
                return pd.update();
            })
            alert("レベルが上がりました");
            LVUPfunk(2);
        }else{
            alert("コインが足りません");
        }
    }else if(kakunin==3){
        if(coin>=nouryoku2LV*100){
            coin-=nouryoku2LV*100;
            nouryoku2LV++;
            Start = document.getElementById("nouryoku2lv");
            Start.innerHTML=nouryoku2LV;
            sutechangefunk();
            MyID=localStorage.getItem("id");
            MyID=Number(MyID);
            let PD = ncmb.DataStore("playerdata");
            PD.equalTo('id',MyID).fetch()
            .then(function(pd){
                pd.set('Pcoin',coin);
                pd.set('nouryoku2LV',nouryoku2LV);
                return pd.update();
            })
            alert("レベルが上がりました");
            LVUPfunk(3);
        }else{
            alert("コインが足りません");
        }
    }else if(kakunin==4){
        if(coin>=skilLV*100){
            coin-=skilLV*100;
            skilLV++;
            Start = document.getElementById("skillv");
            Start.innerHTML=skilLV;
            sutechangefunk();
            MyID=localStorage.getItem("id");
            MyID=Number(MyID);
            let PD = ncmb.DataStore("playerdata");
            PD.equalTo('id',MyID).fetch()
            .then(function(pd){
                pd.set('Pcoin',coin);
                pd.set('skilLV',skilLV);
                return pd.update();
            })
            alert("レベルが上がりました");
            LVUPfunk(4);
        }else{
            alert("コインが足りません");
        }
    }
}
//キャラLVが今のLV*20、他のレベルがLV*100

