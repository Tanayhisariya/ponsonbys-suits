import { Box, colors, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'
import Bground from '../Image/backgrd.jpg'


const About = () => {
  return (
    <div>
       <Layout>
       <div className="home" style={{ backgroundImage: `url(${Bground})` }}>

        <Box sx={{
          my:9,
         textAlign:'center',
         p:2,
         '& h1':{
          fontWeight:'bold',
          my:2,
          fontSize:"2rem",
         },
         '& p':{
          textAlign:'justify',
          color:'white'
         },
'@media (max-width:600px)':{
mt:0,
'& h4':{
  fontSize:'1rem'
}
}
        }}>
          <Typography>
            <h1>Welcome To My Shop</h1>
          </Typography>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam assumenda nulla beatae quidem rem! Fugit laborum nihil aliquam ea quis incidunt labore velit eum, excepturi quibusdam nobis voluptatum tempora nisi illum at. Iure commodi iste est voluptate dicta vero veniam omnis doloremque! Culpa error mollitia perspiciatis? Dolorum nemo reiciendis ratione quod voluptatem praesentium doloribus eum quas? Fuga labore eaque laudantium voluptatum, ullam dignissimos iure magni fugiat optio alias dolore reprehenderit libero doloremque, ex beatae hic? Harum culpa architecto, rerum iusto eius ad in inventore deleniti ipsa animi laboriosam consequatur? Nihil a voluptate, sunt repudiandae dolor voluptatem tenetur? Illum tempora reprehenderit architecto laborum obcaecati repellendus eos nemo deleniti quo harum! At necessitatibus dolores odit similique veniam voluptate, sed ducimus id, temporibus aperiam, repudiandae est.
          
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, quaerat quo consectetur dolorum exercitationem saepe odio eius ullam? Quod incidunt possimus facilis voluptas minima sunt laboriosam doloribus saepe tempore culpa sed voluptatibus, aperiam quam repudiandae ipsam pariatur vel quo facere accusamus ducimus aut, enim tenetur eos veniam? Omnis aperiam ad enim blanditiis quidem, necessitatibus accusamus, impedit odit sequi, beatae eum? Dolorum blanditiis sequi nam? Nisi et fuga, ducimus saepe minima esse unde excepturi soluta quae quisquam vitae officiis expedita magni quidem, laboriosam quibusdam totam! Et distinctio quam perferendis, totam molestiae quo obcaecati asperiores, dolor soluta quis corrupti adipisci tenetur dicta officia quibusdam illum, fugiat deleniti nulla nobis eligendi voluptatem? In a molestiae, cum doloribus unde voluptatibus! Iste in dolor esse.
          </p>
          
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis minus, placeat fugiat alias id ad voluptates reprehenderit, sit distinctio, dicta sapiente! Quidem nisi at dolor dolorum doloribus eum voluptatem vel ex quis? Iusto aut, aliquam minima in ipsam tempore eaque, possimus repudiandae cum voluptatem non, itaque iste. Nam distinctio sint reprehenderit odit modi a sapiente eligendi nostrum eum officia harum provident, fugit alias cum commodi eos earum quis doloribus voluptas ut rem consequuntur velit hic! Eum non nam deserunt, at eos, ipsa corporis similique iste tempore fugiat aspernatur accusantium deleniti beatae fuga sed facere nemo ullam quam porro molestias labore dolor cumque consequuntur? Sed minus ullam rerum laudantium commodi quidem maxime sequi numquam necessitatibus dolor velit deserunt nostrum iusto ex minima tempora consectetur non porro, praesentium fuga? Ipsam nobis non sequi dolorum cupiditate voluptatibus, quidem, laudantium ex nulla a, asperiores suscipit. Assumenda, sed officiis! Cupiditate, unde tempore dicta doloremque quibusdam error nobis modi quidem optio deserunt odit ipsam debitis vero quos doloribus at molestiae, veritatis eaque accusantium ex placeat dolore mollitia. Architecto, voluptatum tenetur? Obcaecati aut possimus consectetur? Nam, eveniet. Eum cupiditate accusamus dolores eaque praesentium, assumenda natus ut laudantium reprehenderit possimus ducimus molestiae quisquam. Impedit maiores provident perspiciatis rerum necessitatibus possimus natus enim dolorum vitae quas, assumenda tempore animi voluptas quasi quisquam iure officia distinctio culpa odio, tenetur esse hic, iusto laborum. Quidem magni, aliquam dolore, ipsa consectetur quo accusantium culpa doloribus, dolorum excepturi expedita voluptatum minus rerum obcaecati! Repellat aliquid, odit optio beatae necessitatibus ducimus aspernatur itaque repudiandae eveniet esse deleniti placeat, error eligendi voluptate atque dolorem perferendis eum. Fugiat, animi aspernatur esse dolorum hic fugit ab corporis sint impedit maxime? Quasi, consectetur repellat velit debitis deserunt cum qui adipisci sint nihil repellendus alias amet, nesciunt reprehenderit dolor asperiores, distinctio commodi rem atque quaerat magni quia doloremque. Dolore.
          </p>
        </Box>
       </div>

       </Layout>
      
    </div>
  )
}

export default About
