import firebase from './../firebase/firebase'
import 'firebase/database';

const fPhotos = firebase.database().ref().child('photos');

export const homePhoto = [
  {
    src: "/photos/baba-photography-1.jpeg",
    alt: "baba photography 1"
  },
  {
    src: "/photos/baba-photography-2.jpeg",
    alt: "baba photography 2"
  },
  {
    src: "/photos/baba-photography-3.jpeg",
    alt: "baba photography 3"
  },
  {
    src: "/photos/baba-photography-4.jpeg",
    alt:"baba photography 4"
  },
  {
    src: "/photos/baba-photography-5.jpeg",
    alt: "baba photography 5"
  },
  {
    src: "/photos/baba-photography-6.jpeg",
    alt: "baba photography 6"
  },
  {
    src: "/photos/baba-photography-7.jpeg",
    alt: "baba photography 7"
  },
  {
    src: "/photos/baba-photography-8.jpeg",
    alt: "baba photography 8"
  },
];

let photos = homePhoto;
fPhotos.on('value', function (data) {
  if(data.val()){
    data.val().map((img)=>{
      photos.push({
        src: `${img}?alt=media`,
        alt: "baba photography 3"
      })
    })
  }
})
export const firebasePhotos = photos;