import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeywordRuleService {

  constructor() { }

  strToArr(str:string):any {
    str=this.replaceAll(str,' ',',');
    str=this.replaceAll(str,'，',',');
    const arr:string[]=[];
    str.split(',').forEach(v=>{
      if(v){
        arr.push(v);
      }
    });
    return arr
  }

  replaceAll(str,s1,s2){
    return str.replace(new RegExp(s1,"gm"),s2);
  }
}
