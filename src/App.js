import { useState } from 'react';
import './App.css';
import image1 from './MyComponents/Images/1.jpg'
import image2 from './MyComponents/Images/2.jpg'
import image3 from './MyComponents/Images/3.jpg'
import image4 from './MyComponents/Images/4.jpg'
import BackgroundImage from './MyComponents/BackgroundImage';
import Header from './MyComponents/Header';



const Images = [
  image1, image2, image3, image4]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const HandlePreviousImage = () => {
    console.log('left button clicked')
    setCurrentIndex((i)=>
    i===0?Images.length-1:--i)
console.log(currentIndex)

  }
  const HandleNextImage = () => {
    console.log('Right button clicked');
    setCurrentIndex(j=>j===Images.length-1?0:++j)
    console.log(currentIndex)


  }
  return (
    <div className="App">
      <Header />
      <BackgroundImage
        Images={Images}
        HandlePreviousImage={HandlePreviousImage}
        HandleNextImage={HandleNextImage}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default App;
