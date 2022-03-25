
  onChange(value : string){
    this.pin = value;
    this.ans = "";
    for (var i = 1;i<=value.length;i++){
      //console.log(i);
       if (i%5==0 && i!=0){
         
         this.ans += value[i-1];
         this.ans += "\n";
         
         continue;
       }
       this.ans += value[i-1];
    }
    console.log(this.ans);
  }
