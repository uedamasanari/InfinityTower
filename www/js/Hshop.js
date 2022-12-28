let syouhinmei=["HP50%回復ビン","ATK50%上昇ビン","HP50%上昇ビン","HP100%回復ビン","ATK100%上昇ビン","HP100%上昇ビン","雑魚敵全滅ガス","敵HP半減ガス","スキル獲得チケット"];
let syouhinsetumei=["使用するとHPが50%回復します","使用するとATKが50%上昇します","使用するとHPが50%上昇します","使用するとHPが100%回復します","使用するとATKが100%上昇します","使用するとHPが100%上昇します","使用すると雑魚敵を全滅できます。<br>(経験値やコインももらえます)","使用すると今の敵HPを<br>半減できます","使用すると赤レア以上のスキルを<br>獲得し、スキル１と交換します。"];
let syouhinprice=[200,500,500,400,1000,1000,500,300,500];
let coin;
let MyID;
let applicationKey="c4c973d149eb7f703b8dc11532c2fb3e3bb2a7efcbd08a6f365e6b985e850f28";
let clientKey="202e48eb74bebfc63486928f9388cd363f0636806e35cefa57472e8045a9f7c1";
let ncmb = new NCMB(applicationKey,clientKey);
let sw;
let have=new Array();
function yomikomifunk(){
    MyID=localStorage.getItem("id");
    MyID=Number(MyID);
    let PD = ncmb.DataStore("playerdata");
    PD.equalTo('id',MyID).fetchAll()
    .then(function(pd){
        coin=pd[0].Pcoin;
        have=pd[0].item;
    })
}
function syouhinfunk(a){
    Start = document.getElementById("Sname");
    Start.innerHTML="商品名<br>"+syouhinmei[a]+"<br>所持数:"+have[a];
    Start = document.getElementById("Ssetumei");
    Start.innerHTML=syouhinsetumei[a]+"<br>価格:"+syouhinprice[a]+"<br>所持金:"+coin;
    document.getElementById('ura').style.display = "block";
    document.getElementById('tojiru').style.display = "block";
    document.getElementById('Sname').style.display = "block";
    document.getElementById('kounyuu').style.display = "block";
    document.getElementById('Ssetumei').style.display = "block";
    sw=a;
}
function kounyuufunk(){
    if(coin>=syouhinprice[sw]){
        coin-=syouhinprice[sw];
        have[sw]++;
        Start = document.getElementById("Sname");
        Start.innerHTML="商品名<br>"+syouhinmei[sw]+"<br>所持数:"+have[sw];
        Start = document.getElementById("Ssetumei");
        Start.innerHTML=syouhinsetumei[sw]+"<br>価格:"+syouhinprice[sw]+"<br>所持金:"+coin;
        let PD = ncmb.DataStore("playerdata");
        PD.equalTo('id',MyID).fetch()
        .then(function(pd){
            pd.set('Pcoin',coin);
            pd.set('item',have);
            return pd.update();
        })
        alert("購入しました");
    }else{
        alert("コインが足りません");
    }
}
