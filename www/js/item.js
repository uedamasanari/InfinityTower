let itemnokori=new Array();
let syouhinmei=["HP50%回復ビン","ATK50%上昇ビン","HP50%上昇ビン","HP100%回復ビン","ATK100%上昇ビン","HP100%上昇ビン","雑魚敵全滅ガス","敵HP半減ガス","スキル獲得チケット"];
let syouhinsetumei=["使用するとHPが50%回復します","使用するとATKが50%上昇します<br>１試合につき１回のみです<br>残り","使用するとHPが50%上昇します<br>１試合につき１回のみです<br>残り","使用するとHPが100%回復します","使用するとATKが100%上昇します<br>１試合につき１回のみです<br>残り","使用するとHPが100%上昇します<br>１試合につき１回のみです<br>残り","使用すると雑魚敵を全滅できます。<br>(経験値やコインももらえます)","使用すると今の敵HPを<br>半減できます","使用すると赤レア以上のスキルを<br>獲得し、スキル１と交換します。"];
let syouhinprice=[200,500,500,400,1000,1000,500,300,500];
let coin;
let MyID;
let applicationKey="c4c973d149eb7f703b8dc11532c2fb3e3bb2a7efcbd08a6f365e6b985e850f28";
let clientKey="202e48eb74bebfc63486928f9388cd363f0636806e35cefa57472e8045a9f7c1";
let ncmb = new NCMB(applicationKey,clientKey);
let sw;
let have=new Array();
let slimeHP=new Array();
let demonHP=new Array();
let dragonHP;
let slime=new Array();
let demon=new Array();
let dragon;
let MAXHP;
let ATK;
let HP;
let skil1;
let keikenti;
let sumcoin;
let KAI;
let nowSpng=new Array();
let nowDpng=new Array();
let nowDrapng;
function yomikomifunk(){
    MyID=localStorage.getItem("id");
    MyID=Number(MyID);
    let PD = ncmb.DataStore("playerdata");
    PD.equalTo('id',MyID).fetchAll()
    .then(function(pd){
        coin=pd[0].coin;
        keikenti=pd[0].keikenti;
        sumcoin=pd[0].sumcoin;
        KAI=pd[0].KAI;
        have=pd[0].item;
        ATK=pd[0].ATK;
        MAXHP=pd[0].MAXHP;
        HP=pd[0].HP;
        slimeHP[0]=pd[0].slimeHP0;
        slimeHP[1]=pd[0].slimeHP1;
        slimeHP[2]=pd[0].slimeHP2;
        demonHP[0]=pd[0].demonHP0;
        demonHP[1]=pd[0].demonHP1;
        demonHP[2]=pd[0].demonHP2;
        dragonHP=pd[0].dragonHP;
        slime[0]=pd[0].slime0;
        slime[1]=pd[0].slime1;
        slime[2]=pd[0].slime2;
        demon[0]=pd[0].demon0;
        demon[1]=pd[0].demon1;
        demon[2]=pd[0].demon2;
        dragon=pd[0].dragon;
        skil1=pd[0].skil1;
        nowSpng=pd[0].nowSpng;
        nowDpng=pd[0].nowDpng;
        nowDrapng=pd[0].nowDrapng;
        itemnokori=pd[0].itemnokori;
        let PD = ncmb.DataStore("playerdata");
        PD.equalTo('id',MyID).fetch()
        .then(function(pd){
            pd.set('shophantei',1);
            return pd.update();
        })
    })
}
function syouhinfunk(a){
    Start = document.getElementById("Sname");
    Start.innerHTML="商品名<br>"+syouhinmei[a]+"<br>所持数:"+have[a];
    Start = document.getElementById("Ssetumei");
    Start.innerHTML=syouhinsetumei[a]+itemnokori[a]+"<br>使用しますか？";
    document.getElementById('ura').style.display = "block";
    document.getElementById('tojiru').style.display = "block";
    document.getElementById('Sname').style.display = "block";
    document.getElementById('kounyuu').style.display = "block";
    document.getElementById('Ssetumei').style.display = "block";
    sw=a;
}
function kounyuufunk(){
    if(itemnokori[sw]==1){
    if(have[sw]>=1){
        itemnokori[sw]=0;
        have[sw]--;
        Start = document.getElementById("Sname");
        Start.innerHTML="商品名<br>"+syouhinmei[sw]+"<br>所持数:"+have[sw];
        Start = document.getElementById("Ssetumei");
        Start.innerHTML=syouhinsetumei[sw]+itemnokori[sw]+"<br>使用しますか？";
        switch(sw){
            case 0:
                HP+=Math.round(MAXHP*0.5);
                if(HP>MAXHP){
                    HP=MAXHP;
                }
                break;
            case 1:
                ATK+=Math.round(ATK*0.5);
                break;
            case 2:
                HP+=Math.round(MAXHP*0.5);
                MAXHP+=Math.round(MAXHP*0.5);
                break;
            case 3:
                HP=MAXHP;
                break;
            case 4:
                ATK=ATK*2;
                break;
            case 5:
                MAXHP=MAXHP*2;
                HP=MAXHP;
                break;
            case 6:
                if(slimeHP[0]>0){
                    keikenti=keikenti+1*(Math.floor(KAI/10)+1);
                    coin+=2*(Math.floor(KAI/30)+1);
                    sumcoin+=2*(Math.floor(KAI/30)+1);
                }
                if(slimeHP[1]>0){
                    keikenti=keikenti+1*(Math.floor(KAI/10)+1);
                    coin+=2*(Math.floor(KAI/30)+1);
                    sumcoin+=2*(Math.floor(KAI/30)+1);
                }
                if(slimeHP[2]>0){
                    keikenti=keikenti+1*(Math.floor(KAI/10)+1);
                    coin+=2*(Math.floor(KAI/30)+1);
                    sumcoin+=2*(Math.floor(KAI/30)+1);
                }
                if(demonHP[0]>0){
                    keikenti=keikenti+2*(Math.floor(KAI/10)+1);
                    coin+=5*(Math.floor(KAI/30)+1);
                    sumcoin+=5*(Math.floor(KAI/30)+1);
                }
                if(demonHP[1]>0){
                    keikenti=keikenti+2*(Math.floor(KAI/10)+1);
                    coin+=5*(Math.floor(KAI/30)+1);
                    sumcoin+=5*(Math.floor(KAI/30)+1);
                }
                if(demonHP[2]>0){
                    keikenti=keikenti+2*(Math.floor(KAI/10)+1);
                    coin+=5*(Math.floor(KAI/30)+1);
                    sumcoin+=5*(Math.floor(KAI/30)+1);
                }
                slimeHP=[-1,-1,-1];
                demonHP=[-1,-1,-1];
                slime=[0,0,0];
                demon=[0,0,0];
                break;
            case 7:
                slimeHP[0]=Math.round(slimeHP[0]*0.5);
                slimeHP[1]=Math.round(slimeHP[1]*0.5);
                slimeHP[2]=Math.round(slimeHP[2]*0.5);
                demonHP[0]=Math.round(demonHP[0]*0.5);
                demonHP[1]=Math.round(demonHP[1]*0.5);
                demonHP[2]=Math.round(demonHP[2]*0.5);
                nowSpng=["PNG/S50.png","PNG/S50.png","PNG/S50.png"];
                nowDpng=["PNG/D50.png","PNG/D50.png","PNG/D50.png"];
                nowDrapng="PNG/Dra50.png";
                dragonHP=Math.round(dragonHP*0.5);
                break;
            case 8:
                skil1=Math.floor( Math.random() * 8 ) + 5;
                break;
            
        }
        let PD = ncmb.DataStore("playerdata");
        PD.equalTo('id',MyID).fetch()
        .then(function(pd){
            pd.set('item',have);
            pd.set('ATK',ATK);
            pd.set('HP',HP);
            pd.set('MAXHP',MAXHP);
            pd.set('slimeHP0',slimeHP[0]);
            pd.set('slimeHP1',slimeHP[1]);
            pd.set('slimeHP2',slimeHP[2]);
            pd.set('demonHP0',demonHP[0]);
            pd.set('demonHP1',demonHP[1]);
            pd.set('demonHP2',demonHP[2]);
            pd.set('dragonHP',dragonHP);
            pd.set('slime0',slime[0]);
            pd.set('slime1',slime[1]);
            pd.set('slime2',slime[2]);
            pd.set('demon0',demon[0]);
            pd.set('demon1',demon[1]);
            pd.set('demon2',demon[2]);
            pd.set('shophantei',1);
            pd.set('skil1',skil1);
            pd.set('keikenti',keikenti);
            pd.set('sumcoin',sumcoin);
            pd.set('coin',coin);
            pd.set('nowSpng',nowSpng);
            pd.set('nowDpng',nowDpng);
            pd.set('nowDrapng',nowDrapng);
            pd.set('itemnokori',itemnokori);
            return pd.update();
        })
        alert("使用しました");
    }else{
        alert("所持数が0個です");
    }
}else{
    alert("すでに使用済みです");
}
}
