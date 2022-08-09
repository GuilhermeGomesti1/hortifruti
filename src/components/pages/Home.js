import styles from './Home.module.css'
import React, { useEffect, useState, } from 'react';
import SearchInput from '../Searchinput'
import { FaShoppingCart } from 'react-icons/fa'







function Home() {
    const [info, setInfo] = useState([]);
    const [text, setText] = useState('');


    useEffect(() => {
        if (text) {
            fetch(`https://www.fruityvice.com/api/fruit/family/${text}`)


                .then((response) => response.json())
                .then((response) => {


                    setInfo(response)




                }).catch(() => { setInfo([]) })
            return

        }



        fetch('https://www.fruityvice.com/api/fruit/all')


            .then((response) => response.json())
            .then((response) => {


                setInfo(response)




            }).catch(() => { setInfo([]) })


    }, [text])
    console.log(info)

    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Frexco</span></h1>
            <p>Frutas, verduras e legumes frescos diretamente na sua casa ou no seu estabelecimento! </p>

            <div className='posts-container'>

                <SearchInput
                    value={text}
                    onChange={(search) => setText(search)} />

                {info.length > 0 && (
                    <div>


                        <div>


                        </div>
                        {info.map((item) => {
                            return <div key={item.name}>

                                <h2 className={styles.fruta}>{item.name} <FaShoppingCart className={styles.cartItem}></FaShoppingCart></h2>





                            </div>

                        })}



                    </div>

                )





                }
            </div>


        </section>

    )
}


export default Home
