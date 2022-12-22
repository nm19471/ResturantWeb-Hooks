import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <div>
        <section className='main-card--cointainer'>
        {menuData.map((curElem)=>{
          const {id ,name,category,image,description} =curElem; // Destructring : so that we dont need any write curElem in everywhere
            return (
                <>
                <div className='card-container' key={id}>
                <div className='card'>
                    <div className='card-body'>
                    <span className='card-number card-circle subtle'>{id}</span>
                    <span className='card-author subtle'>{name}</span>
                    <h2 className='card-title'> {name} </h2>
                    <span className='card-description subtle'>
                     {description}
                    </span>
                    <div className='card-read'>Read</div>
                    </div>
                    <img src={image} alt="images" className="card-media" />
                    <span className='card-tag subtle'>Order Now</span>
                </div>
              </div>
              </>
            )
        }
        )}
        </section>
    </div>
  )
}

export default MenuCard