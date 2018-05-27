var pet = {
    words: '...',
    speak: function(say){
        console.log(say + ' ' + this.words)
    }
}
// pet.speak('Peak')

var dog = {
    words: 'Wang'
}

pet.speak.call(dog,'Speak')
// call改变了this的上下文




