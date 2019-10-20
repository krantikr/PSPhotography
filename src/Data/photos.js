import firebase from './../firebase/firebase'
import 'firebase/database';
let f = firebase.database().ref().child('photoes');
f.on('value', function (data) {
  console.log(data.val())
})
export const photos = [
  {
    src: "/photos/baba-photography-1.jpeg",
    width: 3,
    height: 4,
    alt: "baba photography 1"
  },
  {
    src: "/photos/baba-photography-2.jpeg",
    width: 4,
    height: 3,
    alt: "baba photography 2"
  },
  {
    src: "/photos/baba-photography-3.jpeg",
    width: 1,
    height: 1,
    alt: "baba photography 3"
  },
  // {
  //   src: "/photos/baba-photography-4.jpeg",
  //   width: 3,
  //   height: 4,
  //   alt:"baba photography 4"
  // },
  {
    src: "/photos/baba-photography-5.jpeg",
    width: 3,
    height: 4,
    alt: "baba photography 5"
  },
  {
    src: "/photos/baba-photography-6.jpeg",
    width: 4,
    height: 3,
    alt: "baba photography 6"
  },
  {
    src: "/photos/baba-photography-7.jpeg",
    width: 1,
    height: 1,
    alt: "baba photography 7"
  },
  {
    src: "/photos/baba-photography-8.jpeg",
    width: 4,
    height: 3,
    alt: "baba photography 8"
  },
  {
    src: "/photos/baba-photography-9.jpeg",
    width: 3,
    height: 4,
    alt: "baba photography 9"
  },
  {
    src: "/photos/baba-photography-10.jpeg",
    width: 4,
    height: 3,
    alt: "baba photography 10"
  }
];