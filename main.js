const {createApp} = Vue 

createApp({
    data(){
        
        return{
            
            email: [],

           
    }
},
mounted(){
    
    for (let index = 0; index < 10; index++) {
        axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response =>{
        this.email.push(response.data.response)
        console.log(this.email)

    })
        
    }
} 
}).mount('#app')