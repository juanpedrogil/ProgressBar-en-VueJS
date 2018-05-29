new Vue({
    'el':'#app',
    data:{
        claseAdicional:'roja',
        caja:'caja',
        contador:10,
        i:0,
        otrai:0,
        ancho:1+'px',
        detener:true,
        interval:'',
        miEstilo:{
            width:100+'px'
        }
    },
    computed:{

    },
    watch:{
        
    },
    methods:{
        start(){
            this.detener=false;
            var self=this;
            interval=setInterval(function(){
                if(!self.detener){
                    self.i++;
                    if(self.i>100){
                        self.i=0;
                    }
                    self.ancho=self.i+'px';
                    console.log(self.ancho);
                }
            },100);
        },
        stop(){
            this.detener=true;
            this.otrai=this.i;
        }
    }
});