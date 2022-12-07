let contCara = 0;
let contSeca = 0;
let res = 0;
/**** CICLO **/
while(contCara<3 && contSeca<3){
    res = Math.floor(Math.random() * 2);
    console.log(res);
    if(res==0){
        // ES CARA
        contCara++;
    }else{
        contSeca++;
    }
}
console.log(contCara)
console.log(contSeca)