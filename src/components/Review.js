import React, { useState } from 'react'

const Review = () => {

    const reviews =[ {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
          'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
      },
      {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
          'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      },
      {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
          'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      }];



    const [index, setindex] = useState(0);
      const {name,job,image,text,id}=reviews[index];

    function checkindex(num){
        if(num<0){
            return reviews.length-1;
        }
        
        if(num> reviews.length){
            return 0;
        };
        return num;

    }
    function handlenext(){
        setindex((prev)=>checkindex(prev+1));
    }
    
    function handleprev(){
        setindex((prev)=>checkindex(prev-1));
    }

    const randomreview = ()=>{
      let randomIndex = Math.floor(Math.random() * reviews.length);
      // console.log(randomIndex);
      while (randomIndex === index) {
        randomIndex = Math.floor(Math.random() * reviews.length);
      }
      setindex(randomIndex);

    }


  return (
    <div className='review'>
        <img src={image} alt={name}/>
        <h4 id={`author-${id}`} className="author">
      
      </h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    <div className='btn-container'>
    <button onClick={handlenext} className='next-btn'>Next</button>
    <button onClick={handleprev} className='prev-btn'>Previous</button>
    <button onClick={randomreview} className='random-btn'>Surprise me</button>
    </div>


    </div>
  )
}

export default Review