import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stt : Number = 0;
  data = new Array();
  tiger : Number = 0;
  dragon : Number = 0;
  time : Number =5;
  total : Number = 2500000;
  currentTotal : Number = 2500000;
  hireTiger : Number = 0;
  hireDragon : Number = 0;
  hire : String;
  constructor() { }

  ngOnInit() {
    this.auto();
  }
  begin(){
    setInterval(()=>{
      if(this.time != 0){
        this.time=Number(this.time)-1;
      }else{
        this.time=5;
        this.reset();
        this.result();
      }
    },1000)
  }
  reset(){
    this.tiger=1+Math.floor(Math.random() * 13);
    this.dragon=1+Math.floor(Math.random() * 13);
  }
  result(){
    this.stt=Number(this.stt)+1;
    let wl;
    let tmp=this.currentTotal;
    if(this.hireTiger > this.hireDragon) this.hire = "T";
    else if(this.hireTiger < this.hireDragon) this.hire = "D";
    else this.hire = "NULL";
    if(this.tiger > this.dragon){
      this.currentTotal = Number(this.currentTotal) +  Number(this.hireTiger) -  Number(this.hireDragon);
      wl = "T";
    }else if(this.tiger < this.dragon){
      this.currentTotal = Number(this.currentTotal) -  Number(this.hireTiger) +  Number(this.hireDragon);
      wl = "D"
    }else{
      this.currentTotal = Number(this.currentTotal) -  Number(this.hireTiger)/2 -  Number(this.hireDragon)/2;
      wl = "B";
    }
    this.hireDragon = 0;
    this.hireTiger = 0;
    this.data.push({stt : this.stt,win : wl,wl : Number(this.currentTotal)-Number(tmp)});
  }
  beginHire(moduleHire,number){
    if(moduleHire=="tiger"){
      this.hireTiger=(this.hireTiger += number)*1000;
    }else{
      this.hireDragon=(this.hireDragon += number)*1000;
    }
  }
  resetHire(moduleHire){
    if(moduleHire=="tiger"){
      this.hireTiger = 0;
    }else{
      this.hireDragon = 0;
    }
  }
  // AUTO
  times : Number = 30;
  auto(){
    for(let i = 0;i<this.times;i++){
      for(let j = 0;j<100;j++){
        let dt;
        if((1+Math.floor(Math.random()*2)%2==0)){
          dt = "T";
        }else{
          dt = "D";
        }
        if(this.resultAuto(dt)){
          
        }
      }
    }
  }
  resultAuto(dt) : boolean{
    let dt2;
    this.tiger=1+Math.floor(Math.random() * 13);
    this.dragon=1+Math.floor(Math.random() * 13);
    if(this.tiger<this.dragon){
      dt2 = "T";
    }else if(this.tiger>this.dragon){
      dt2 = "D";
    }else{
      dt2 = "B";
    }
    if(dt==dt2) return true;
    else return false;
  }
}
