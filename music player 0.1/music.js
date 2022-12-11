class Music {
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    

    getName(){
        return this.title + "-" + this.singer;
    }
}

const musicList = [
    new Music("The Perfect Girl","Mareux", "1.jpeg", "1.mp3"),
    new Music("Do I Wanna Know","Arctic Monkeys", "2.jpeg", "2.mp3"),
    new Music("Natural","Imagine Dragons", "3.jpeg", "3.mp3")
]