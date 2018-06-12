import { element } from 'protractor';
import { Component, OnInit,ViewChild, AfterViewInit,ElementRef,Renderer2 } from '@angular/core';
import { Observable} from 'rxjs/Rx';
import { RolateCanvasComponent } from './../rolate-canvas/rolate-canvas.component';
import 'rxjs/add/observable/interval';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit {
  public cheapValue:number;
  public time:number;
  public interval;
  public timeInterval;
  public credit:number = 1000;
  public total:number = 0;
  public totalRed:number = 0;
  public totalBlack:number = 0;
  public currentNum:number = 0;
  public blackArr = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
  public redArr = [1,3,,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
  @ViewChild('myCanvas') myCanvas: ElementRef;;
  public context: CanvasRenderingContext2D;
  public allNumbers = [];
  public rolateNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
  constructor(public element:ElementRef,public render:Renderer2) { }

  ngOnInit() {
     this.time = Math.floor(Math.random() * 10 + 10);
    /* this.rolingNumFunc();
     this.timeFunc();
     this.stopRuligNumFunc();*/
    }

    stopRuligNumFunc(){
      setTimeout(() => {
        this.stopRolingNum()
      },this.time * 1000);
    }

    rolingNumFunc(){
      this.interval = Observable.interval(10).subscribe(()=>{
        this.rolingNum();
       })
    }

    timeFunc(){
      this.timeInterval = Observable.interval(1000).subscribe(()=>{
        if(this.time == 0){
          this.timeInterval.unsubscribe();
          this.calculatCredit();
          document.getElementById('140px').innerHTML = '';
          document.getElementById('187px').innerHTML = '';
          this.time = Math.floor(Math.random() * 10 + 10);
          setTimeout(() => {
            this.rolingNumFunc();
            this.timeFunc();
            this.stopRuligNumFunc();
          },this.time * 1000);
        }else{
          this.time = this.time - 1;
        }
       });  
    }

    clearBoard(){
      this.credit = this.credit + this.totalBlack + this.totalRed;
      this.totalBlack = 0;
      this.totalRed = 0;
      document.getElementById('140px').innerHTML = '';
      document.getElementById('187px').innerHTML = '';
    }
   
    ngAfterViewInit(): void {
   /*  var can = document.getElementById('myCanvas') 
     this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');*/
    }

    calculatCredit(){
      if(this.blackArr.indexOf(this.currentNum) > -1){
        this.credit = this.totalBlack * 2 + this.credit;
        this.totalBlack = 0;
        this.totalRed = 0;
      }else if(this.redArr.indexOf(this.currentNum) > -1){
        this.credit = this.totalRed * 2 + this.credit;
        this.totalBlack = 0;
        this.totalRed = 0;
      }
      else{
        this.totalBlack = 0;
        this.totalRed = 0;
      }
    }

    stopRolingNum(){
     this.interval.unsubscribe();
    }

    getColor(num){
    if(num == this.currentNum){
      return 'yellow'
    }else if(num == 0){
      return 'green';
    }else if(this.blackArr.indexOf(num) > -1){
      return 'blue';
    }else if(this.redArr.indexOf(num) > -1){
      return 'red';
    }
    }  
  
  rolingNum(){
  if(this.currentNum == 36){
    this.currentNum = 0
  }else{
    this.currentNum++;
  }  
  }

  getChipValue(event){
  this.cheapValue = event.target.id;
  }

  getCoordinates(event){
    var x = event.offsetX;
    var y = event.offsetY;
    if(this.credit - this.cheapValue >= 0){
    if(x >= 128 && x <= 174 && y >= 254 && y <= 285 || event.target.id == '140px'){
      this.totalBlack = Math.floor(this.totalBlack) +  Math.floor(this.cheapValue);
      x = '140px'; y = '260px';
      this.credit = this.credit - this.cheapValue;
     if(document.getElementById(x) != null){ 
      document.getElementById(x).innerHTML =  Math.floor(this.totalBlack).toString();
     }else{ 
     this.showCoponOnTable(x,y);
      }
    } 
    if(x >= 175 && x <= 220 && y >= 254 && y <= 285 || event.target.id == '187px'){
      this.totalRed = Math.floor(this.totalRed) +  Math.floor(this.cheapValue);
      x = '187px'; y = '260px';
      this.credit = this.credit - this.cheapValue;
     if(document.getElementById(x) != null){ 
      document.getElementById(x).innerHTML =  Math.floor(this.totalRed).toString();
     }else{ 
     this.showCoponOnTable(x,y);
      }
    } 
    }else{
      alert('you cant bet with this amount');
    }
  }

  showCoponOnTable(x,y){
    var s = document.createElement('span');
    s.id = x;
    var rolate = document.getElementById('rolateDiv');  
    s.style.zIndex = '300';
    s.style.color = 'yellow';
    s.style.backgroundColor = 'blue';
    s.style.borderRadius = '30%'
    s.style.position = 'absolute';
    s.style.left = x;
    s.style.top = y;
    s.style.cursor = 'pointer';
    s.innerHTML = this.cheapValue.toString();
    s.addEventListener('click', this.getCoordinates.bind(this));
    rolate.appendChild(s);
  }
}
//gitub
//cmd order
//esc:wq
//git pull
//git add
//git commit
//git pull